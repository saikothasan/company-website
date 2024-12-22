import { motion } from 'framer-motion';
import { Cpu, Lock, Zap } from 'lucide-react';

const features = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI-Powered Development",
    description: "Intelligent code suggestions and automated workflows"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description: "Optimized performance for seamless development"
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: "Enterprise Security",
    description: "Bank-grade security for your code and data"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors"
            >
              <div className="mb-4 text-blue-400">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};