'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

type IntroVideoProps = {
  src: string;
  onFinished: () => void;
};

export default function IntroVideo({ src, onFinished }: IntroVideoProps) {
  const finishedRef = useRef(false);

  const finish = () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    onFinished();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '-100%', opacity: 1 }}
      transition={{ duration: 5, ease: [0.22, 1, 0.36, 1] }}
    >
      <video
        className="w-full h-full object-contain"
        src={src}
        autoPlay
        playsInline
        muted
        onEnded={finish}
        onError={finish}
      />

      <button
        type="button"
        onClick={finish}
        className="absolute top-4 right-4 px-4 py-2 rounded-md bg-white/90 text-gray-900 hover:bg-white transition"
        aria-label="Skip intro"
      >
        Skip
      </button>
    </motion.div>
  );
}


