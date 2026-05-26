import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <motion.h1 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} className="text-4xl md:text-6xl font-extrabold leading-tight">Master Frontend Development with AI</motion.h1>
        <p className="mt-4 text-gray-600">Learn HTML, CSS, and JavaScript interactively with AI mentors, live coding, projects, and certifications.</p>
        <div className="mt-6 flex gap-4">
          <button className="px-6 py-3 rounded-full bg-brand text-white font-semibold">Start Learning Free</button>
          <button className="px-6 py-3 rounded-full border">Explore Courses</button>
        </div>
      </div>
      <div>
        <div className="h-64 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl shadow-lg flex items-center justify-center text-white"> 
          <div className="text-center">
            <div className="text-sm opacity-80">Interactive Playground</div>
            <pre className="mt-3 text-xs bg-black/30 p-3 rounded">&lt;h1&gt;Hello&lt;/h1&gt;<br/>&lt;p&gt;AI-powered lessons&lt;/p&gt;</pre>
          </div>
        </div>
      </div>
    </section>
  )
}