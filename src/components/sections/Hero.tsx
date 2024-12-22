import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Sparkles className="absolute -top-6 -right-6 w-12 h-12 text-yellow-400" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              DevFlow
            </h1>
          </motion.div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            The next generation development platform
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button icon={ArrowRight}>Get Started</Button>
            <Button variant="secondary" icon={Code2}>View Demo</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};