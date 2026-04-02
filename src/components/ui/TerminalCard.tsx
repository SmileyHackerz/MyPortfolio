import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Copy, Check } from 'lucide-react';

interface TerminalCardProps {
  commands: string[];
  className?: string;
}

export default function TerminalCard({ commands, className = '' }: TerminalCardProps) {
  const [copied, setCopied] = useState(false);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const fullText = commands.join('\n');

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (displayedText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 50); // Typing speed
      } else {
        setIsTyping(false);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, fullText]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full max-w-2xl mx-auto rounded-xl overflow-hidden bg-[#0D1117] border border-white/10 shadow-2xl ${className}`}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#161B22] border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="text-xs font-mono text-gray-400 select-none">
          bash - fayemohamed
        </div>
        <button 
          onClick={handleCopy}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Copy code"
        >
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm md:text-base overflow-x-auto">
        <div className="flex flex-col gap-2">
          {displayedText.split('\n').map((line, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="text-gray-600 select-none shrink-0">~</span>
              <span className="text-gray-300 whitespace-pre-wrap break-all">
                {line.startsWith('npm') || line.startsWith('yarn') || line.startsWith('pnpm') ? (
                  <>
                    <span className="text-emerald-400">{line.split(' ')[0]}</span>
                    <span className="text-gray-300"> {line.split(' ').slice(1).join(' ')}</span>
                  </>
                ) : line.startsWith('//') ? (
                  <span className="text-gray-500">{line}</span>
                ) : line.includes('const') || line.includes('import') ? (
                  <>
                    <span className="text-purple-400">{line.split(' ')[0]}</span>
                    <span className="text-gray-300"> {line.split(' ').slice(1).join(' ')}</span>
                  </>
                ) : (
                  line
                )}
              </span>
            </div>
          ))}
          {/* Blinking Cursor */}
          {isTyping && (
            <motion.div 
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="w-2 h-5 bg-gray-400 inline-block ml-1 align-middle"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
