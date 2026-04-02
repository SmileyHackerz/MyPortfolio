import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal } from 'lucide-react';

interface EntryGateProps {
  onEnter: () => void;
}

export default function EntryGate({ onEnter }: EntryGateProps) {
  const [status, setStatus] = useState<'idle' | 'entering' | 'rejected'>('idle');
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [showButtons, setShowButtons] = useState(false);
  
  const fullText1 = "Salut, je suis Mohamed Faye.";
  const fullText2 = "Veux-tu entrer dans mon monde ?";

  useEffect(() => {
    let currentText1 = '';
    let currentText2 = '';
    let i = 0;
    let j = 0;

    const typeText2 = () => {
      const timer2 = setInterval(() => {
        currentText2 = fullText2.slice(0, j + 1);
        setText2(currentText2);
        j++;
        if (j >= fullText2.length) {
          clearInterval(timer2);
          setTimeout(() => setShowButtons(true), 500);
        }
      }, 50);
    };

    const timer1 = setInterval(() => {
      currentText1 = fullText1.slice(0, i + 1);
      setText1(currentText1);
      i++;
      if (i >= fullText1.length) {
        clearInterval(timer1);
        setTimeout(typeText2, 300);
      }
    }, 50);

    return () => {
      clearInterval(timer1);
    };
  }, []);

  const handleYes = () => {
    setStatus('entering');
    // Wait for the exit animation to complete before unmounting
    setTimeout(() => {
      onEnter();
    }, 1200);
  };

  const handleNo = () => {
    setStatus('rejected');
  };

  return (
    <AnimatePresence>
      {status !== 'entering' && (
        <motion.div 
          key="gate"
          exit={{ opacity: 0, scale: 2, filter: 'blur(10px)' }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
        >
          {/* Animated Tech Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" 
          />

          <div className="relative z-10 max-w-2xl w-full px-6 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Terminal className="w-12 h-12 text-primary mb-8 opacity-80" />
            </motion.div>
            
            {status === 'idle' && (
              <div className="min-h-[120px] flex flex-col items-center justify-center space-y-4">
                <h1 className="text-2xl md:text-4xl font-mono font-bold text-foreground">
                  {text1}
                  {text1.length < fullText1.length && <span className="animate-pulse text-primary">_</span>}
                </h1>
                <p className="text-xl md:text-2xl font-mono text-muted">
                  {text2}
                  {text1.length === fullText1.length && text2.length < fullText2.length && <span className="animate-pulse text-primary">_</span>}
                  {showButtons && <span className="animate-pulse text-primary">_</span>}
                </p>
              </div>
            )}

            {status === 'rejected' && (
              <motion.div
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                className="min-h-[120px] flex flex-col items-center justify-center"
              >
                <p className="text-xl md:text-2xl font-mono text-muted">
                  Je respecte ta décision. À la prochaine.
                </p>
              </motion.div>
            )}

            {showButtons && status === 'idle' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 flex flex-col sm:flex-row items-center gap-6"
              >
                <button 
                  onClick={handleYes}
                  className="w-40 px-8 py-3 bg-primary/10 text-primary border border-primary/50 rounded-md font-mono hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  [ OUI ]
                </button>
                <button 
                  onClick={handleNo}
                  className="w-40 px-8 py-3 bg-surface text-muted border border-border rounded-md font-mono hover:bg-secondary/10 hover:text-secondary hover:border-secondary/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary/50"
                >
                  [ NON ]
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
