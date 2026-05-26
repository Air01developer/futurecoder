import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Playground from '../components/Playground'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0b1020]">
      <Head>
        <title>Master Frontend with AI — KidsCode Academy</title>
        <meta name="description" content="Interactive AI-powered frontend learning platform for kids and beginners." />
      </Head>

      <Header />
      <main className="max-w-7xl mx-auto px-6 py-10">
        <Hero />
        <Features />
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Interactive Playground</h2>
          <Playground />
        </section>
      </main>
    </div>
  )
}
