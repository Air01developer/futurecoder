import React from 'react'

const items = [
  {title: 'AI Coding Mentor', desc: 'Ask a friendly AI for hints and code reviews.'},
  {title: 'Interactive Code Editor', desc: 'Edit code and see live previews.'},
  {title: 'Real Projects', desc: 'Build portfolio-ready apps.'},
  {title: 'Gamified Learning', desc: 'Earn XP and badges while you learn.'},
  {title: 'Exams & Certifications', desc: 'Prove your skills and get certified.'},
  {title: 'Portfolio Builder', desc: 'Automatic portfolio pages for projects.'},
]

export default function Features(){
  return (
    <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {items.map(i=> (
        <div key={i.title} className="p-6 rounded-2xl bg-white shadow hover:shadow-lg transition">
          <h4 className="font-semibold mb-2">{i.title}</h4>
          <p className="text-sm text-gray-600">{i.desc}</p>
        </div>
      ))}
    </section>
  )
}
