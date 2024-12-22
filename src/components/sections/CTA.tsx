import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

export const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Development Workflow?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of developers who are already using DevFlow to build better software, faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" icon={ArrowRight}>
              Start Free Trial
            </Button>
            <Button variant="secondary">
              Schedule Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};