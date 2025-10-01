import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center relative">
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <Image src="/assets/logo.png" alt="Lab62 Logo" width={96} height={96} className="mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent accent-gradient">Lab62</h1>
        <p className="text-lg md:text-2xl text-text-light mb-8">Bold, coder-inspired UI for the next generation.</p>
        <button className="px-8 py-3 rounded-lg font-semibold accent-gradient text-white shadow-lg hover:scale-105 transition-transform">Get Started</button>
      </motion.div>
      <div className="mt-12 w-full h-32 flex items-center justify-center">
        {/* Animation Placeholder */}
        <motion.div className="w-24 h-24 rounded-full accent-gradient opacity-40 blur-lg" animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }} />
      </div>
    </section>
  )
}
