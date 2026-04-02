/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import Home from './pages/Home';
import EntryGate from './components/ui/EntryGate';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <>
      {!hasEntered ? (
        <EntryGate onEnter={() => setHasEntered(true)} />
      ) : (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <Home />
        </motion.div>
      )}
    </>
  );
}
