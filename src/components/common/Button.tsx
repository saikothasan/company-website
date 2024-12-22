import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  onClick?: () => void;
}

export const Button = ({ children, variant = 'primary', icon: Icon, onClick }: ButtonProps) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-700 text-white hover:bg-gray-600"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
      {Icon && <Icon className="w-5 h-5" />}
    </motion.button>
  );
};