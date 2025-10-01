import { motion } from 'framer-motion'

const useCases = [
  {
    title: 'Startup Dashboards',
    description: 'Build fast, beautiful dashboards for your SaaS or startup.',
  },
  {
    title: 'Developer Portfolios',
    description: 'Showcase your skills with a bold, modern portfolio.',
  },
  {
    title: 'Product Landing Pages',
    description: 'Launch products with impact and premium design.',
  },
]

export default function UseCasesCarousel() {
  return (
    <section className="py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 accent-gradient bg-clip-text text-transparent text-center">Use Cases</h2>
      <div className="flex gap-6 overflow-x-auto pb-4">
        {useCases.map((uc, idx) => (
          <motion.div
            key={uc.title}
            whileHover={{ scale: 1.05 }}
            className="min-w-[260px] bg-background border border-accent-to rounded-xl p-6 shadow-lg text-left mr-4"
          >
            <h3 className="text-lg font-semibold mb-2 text-text-light">{uc.title}</h3>
            <p className="text-text-muted">{uc.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
