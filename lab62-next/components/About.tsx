export default function About() {
  return (
    <section className="py-16 md:py-24 flex flex-col md:flex-row gap-12 items-center justify-center max-w-5xl mx-auto">
      <div className="flex-1 text-left">
        <h2 className="text-3xl font-bold mb-4 accent-gradient bg-clip-text text-transparent">About Lab62</h2>
        <p className="text-text-light mb-4">Lab62 is built for coders, by coders. We believe in bold design, premium UX, and futuristic flows that empower developers to build, create, and innovate.</p>
        <p className="text-text-muted">Our platform is inspired by the best, but designed for those who want more than just aesthetics—Lab62 is about performance, clarity, and impact.</p>
      </div>
      <div className="flex-1">
        {/* Placeholder for image or animation */}
        <div className="w-full h-48 accent-gradient rounded-xl shadow-lg" />
      </div>
    </section>
  )
}
