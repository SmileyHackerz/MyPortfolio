// Capture pleine page par tranches de viewport (les scènes collantes restent fidèles), via CDP.
// Usage : node capture.mjs <url> <width> <height> <outPrefix> [step]
import { writeFileSync } from 'node:fs';

const [url, w, h, outPrefix] = process.argv.slice(2);
const width = Number(w), height = Number(h);
const port = 9222;

const targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
const page = targets.find((t) => t.type === 'page');
const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));

let id = 0;
const pending = new Map();
ws.onmessage = (ev) => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg);
    pending.delete(msg.id);
  }
};
const send = (method, params = {}) =>
  new Promise((resolve) => {
    const mid = ++id;
    pending.set(mid, resolve);
    ws.send(JSON.stringify({ id: mid, method, params }));
  });
const evaluate = async (expression) => (await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true })).result?.result?.value;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

await send('Page.enable');
await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: width < 768 });
await send('Page.navigate', { url });
await sleep(1500);
// Sauter la séquence de démarrage puis recharger
await evaluate(`sessionStorage.setItem('mf-portfolio-booted','1'); 'ok'`);
await send('Page.navigate', { url });
await sleep(3000);
await evaluate(`document.documentElement.style.scrollBehavior='auto'; 'ok'`);

const total = await evaluate('document.documentElement.scrollHeight');
const shots = [];
let y = 0;
let i = 0;
while (y < total) {
  await evaluate(`window.scrollTo(0, ${y}); 'ok'`);
  await sleep(1400);
  const { result } = await send('Page.captureScreenshot', { format: 'png' });
  const file = `${outPrefix}-${String(i).padStart(2, '0')}.png`;
  writeFileSync(file, Buffer.from(result.data, 'base64'));
  const actualY = await evaluate('window.scrollY');
  shots.push({ file, y: actualY });
  if (actualY < y) break; // fin de page atteinte
  y += height;
  i += 1;
}
console.log(JSON.stringify({ total, height, shots }));
ws.close();
