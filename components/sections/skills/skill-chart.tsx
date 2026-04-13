'use client';
import { motion } from 'motion/react';

export const SkillChart = ({ value }: { value: number }) => {
  return (
    <svg viewBox="0 0 120 120" className="chart-svg">
      <circle
        cx="60"
        cy="60"
        r="50"
        strokeWidth="1"
        stroke="rgba(255, 255, 255, 0.5)"
        fill="none"
      />
      <motion.circle
        cx="60"
        cy="60"
        r="50"
        strokeWidth="2"
        fill="transparent"
        stroke="orange"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: value }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        viewport={{ once: true }}
      />
    </svg>
  );
};
