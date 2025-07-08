
import { motion } from 'framer-motion';
import { Brain, Code, Database, Cpu, Zap, Sparkles, Target, Lightbulb } from 'lucide-react';

const FloatingElements = () => {
  const elements = [
    { Icon: Brain, color: 'text-purple-400', size: 'w-8 h-8', delay: 0 },
    { Icon: Code, color: 'text-blue-400', size: 'w-6 h-6', delay: 1 },
    { Icon: Database, color: 'text-green-400', size: 'w-7 h-7', delay: 2 },
    { Icon: Cpu, color: 'text-orange-400', size: 'w-6 h-6', delay: 3 },
    { Icon: Zap, color: 'text-yellow-400', size: 'w-5 h-5', delay: 4 },
    { Icon: Sparkles, color: 'text-pink-400', size: 'w-6 h-6', delay: 5 },
    { Icon: Target, color: 'text-cyan-400', size: 'w-7 h-7', delay: 6 },
    { Icon: Lightbulb, color: 'text-indigo-400', size: 'w-6 h-6', delay: 7 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.color} ${element.size} opacity-60`}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
            opacity: 0,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            scale: [0, 1, 1, 0],
            opacity: [0, 0.6, 0.6, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.5,
            opacity: 1,
          }}
        >
          <element.Icon className="w-full h-full drop-shadow-lg" />
          
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full blur-md opacity-50"
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background: `radial-gradient(circle, ${element.color.replace('text-', '')} 0%, transparent 70%)`,
            }}
          />
        </motion.div>
      ))}
      
      {/* Additional geometric shapes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`geo-${i}`}
          className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 opacity-30"
          style={{
            borderRadius: i % 2 === 0 ? '50%' : '0%',
          }}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            scale: [0, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 2,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
