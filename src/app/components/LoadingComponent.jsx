"use client";
import { motion } from "framer-motion";

const LoadingComponents = () => {
  return (
    <>
      <motion.div
        className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      <p className="mt-4 text-gray-600 text-lg font-semibold">Loading...</p>
    </>
  );
};

export default LoadingComponents;
