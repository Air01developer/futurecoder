import React, { useState, useRef, useEffect } from 'react'

export default function Playground(){
  const [html, setHtml] = useState('<h1 style="color:#6C3CE1">Hello, world!</h1>')
  const [css, setCss] = useState('body{font-family:Arial,sans-serif;padding:18px;}')
  const [js, setJs] = useState('console.log("Playground running")')
  const [active, setActive] = useState<'html'|'css'|'js'>('html')
  const iframeRef = useRef<HTMLIFrameElement|null>(null)

  function run(){
    const src = `<!doctype html><html><head><style>${css}</style></head><body>${html}<script>${js}</script></body></html>`
    if(iframeRef.current){
      iframeRef.current.srcdoc = src
    }
  }

  useEffect(()=>{ run() }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col">
        <div className="flex gap-2 mb-2">
          <button onClick={()=>setActive('html')} className={`px-3 py-1 rounded ${active==='html'?'bg-white':'bg-gray-100'}`}>HTML</button>
          <button onClick={()=>setActive('css')} className={`px-3 py-1 rounded ${active==='css'?'bg-white':'bg-gray-100'}`}>CSS</button>
          <button onClick={()=>setActive('js')} className={`px-3 py-1 rounded ${active==='js'?'bg-white':'bg-gray-100'}`}>JS</button>
        </div>
        <textarea className="code-editor" value={active==='html'?html: active==='css'?css:js} onChange={e=> active==='html'?setHtml(e.target.value): active==='css'?setCss(e.target.value):setJs(e.target.value)} />
        <div className="mt-2 flex gap-2">
          <button onClick={run} className="run-btn">Run ▶</button>
          <button onClick={()=>{ setHtml('<h1 style=\"color:#6C3CE1\">Hello, world!</h1>'); setCss('body{font-family:Arial,sans-serif;padding:18px;}'); setJs('console.log("Playground running")') }} className="px-4 py-2 border rounded">Reset</button>
        </div>
      </div>
      <div className="preview-card">
        <div className="preview-header"><h4>Preview</h4></div>
        <iframe ref={iframeRef} id="preview-iframe" className="w-full h-80 border-0" sandbox="allow-scripts allow-modals" />
      </div>
    </div>
  )
}
