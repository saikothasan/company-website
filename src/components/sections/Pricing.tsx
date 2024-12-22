import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '../common/Button';

const plans = [
  {
    name: "Starter",
    price: "Free",
    features: [
      "Up to 3 projects",
      "Basic AI assistance",
      "Community support",
      "Basic analytics"
    ]
  },
  {
    name: "Pro",
    price: "$29",
    popular: true,
    features: [
      "Unlimited projects",
      "Advanced AI features",
      "Priority support",
      "Advanced analytics",
      "Custom integrations"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "Custom AI training",
      "SLA guarantee",
      "Advanced security"
    ]
  }
];

export const Pricing = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-400">Choose the plan that's right for you</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`p-8 rounded-xl ${
                plan.popular
                  ? 'bg-blue-600 transform scale-105'
                  : 'bg-gray-800'
              }`}
            >
              <h3 className="text-xl font-bold text-white mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-300">/month</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 mr-2 text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? 'secondary' : 'primary'}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};