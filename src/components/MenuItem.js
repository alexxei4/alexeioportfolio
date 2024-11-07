import { motion } from 'framer-motion';

const MenuItem = ({ label, href, delay, onClick }) => {
  return (
    <motion.li
      initial={{ x: '-100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay }}
      onClick={onClick}
    >
      <a href={href}>{label}</a>
    </motion.li>
  );
};

export default MenuItem;