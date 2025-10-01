const features = [
  {
    title: 'Premium Dark Mode',
    description: 'A true coder aesthetic with deep blacks and glowing orange accents.',
  },
  {
    title: 'Responsive Design',
    description: 'Seamless experience across all devices, from desktop to mobile.',
  },
  {
    title: 'Animated Interactions',
    description: 'Framer Motion brings your UI to life with smooth, modern animations.',
  },
  {
    title: 'Shadcn UI Components',
    description: 'Beautiful, accessible components styled for your brand.',
  },
]

export default function Features() {
  return (
    <section className="py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 accent-gradient bg-clip-text text-transparent text-center">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div
            key={feature.title}
            className="bg-background border border-accent-to rounded-xl p-6 shadow-lg text-center transition-all hover:shadow-orange-500/50 hover:border-orange-400"
          >
            <h3 className="text-xl font-semibold mb-2 text-text-light">{feature.title}</h3>
            <p className="text-text-muted">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
