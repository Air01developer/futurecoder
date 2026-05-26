import React from 'react'

export default function Header(){
  return (
    <header className="flex items-center justify-between py-4">
      <div className="flex items-center gap-4">
        <div className="text-2xl font-extrabold text-brand">KidsCode</div>
        <nav className="hidden md:flex gap-4 text-sm text-gray-600">
          <a href="#tutorials" className="hover:underline">Tutorials</a>
          <a href="#examples" className="hover:underline">Examples</a>
          <a href="#projects" className="hover:underline">Projects</a>
        </nav>
      </div>
      <div className="flex items-center gap-3">
        <button className="px-4 py-2 rounded-full border">Sign in</button>
        <button className="px-4 py-2 rounded-full bg-brand text-white">Start Learning</button>
      </div>
    </header>
  )
}