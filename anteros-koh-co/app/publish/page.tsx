'use client'
import { useState } from 'react'

export default function Publish() {
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [body, setBody] = useState('')
  const [category, setCategory] = useState('the-world')
  const [status, setStatus] = useState('')

  async function publish() {
    setStatus('Publishing...')
    const res = await fetch('/api/publish', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, excerpt, body, category })
    })
    if (res.ok) setStatus('Published! Check your site.')
    else setStatus('Error — try again.')
  }

  return (
    <div style={{maxWidth:600,margin:'60px auto',padding:'0 24px',fontFamily:'Georgia,serif'}}>
      <h1 style={{fontSize:'2rem',marginBottom:32}}>Publish</h1>
      <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" style={{width:'100%',padding:12,marginBottom:16,fontSize:'1rem',border:'1px solid #ccc',borderRadius:4}} />
      <input value={excerpt} onChange={e=>setExcerpt(e.target.value)} placeholder="Excerpt (one sentence summary)" style={{width:'100%',padding:12,marginBottom:16,fontSize:'1rem',border:'1px solid #ccc',borderRadius:4}} />
      <select value={category} onChange={e=>setCategory(e.target.value)} style={{width:'100%',padding:12,marginBottom:16,fontSize:'1rem',border:'1px solid #ccc',borderRadius:4}}>
        <option value="the-world">The World</option>
        <option value="inner-work">Inner Work</option>
        <option value="body-practice">Body & Practice</option>
        <option value="stream">The Stream</option>
      </select>
      <textarea value={body} onChange={e=>setBody(e.target.value)} placeholder="Paste your article here..." rows={20} style={{width:'100%',padding:12,marginBottom:16,fontSize:'1rem',border:'1px solid #ccc',borderRadius:4,lineHeight:1.7}} />
      <button onClick={publish} style={{background:'#2E1A0E',color:'#F2EAD8',border:'none',padding:'14px 32px',borderRadius:40,fontSize:'0.9rem',cursor:'pointer',letterSpacing:'0.1em'}}>
        Publish to anteroskoh.com
      </button>
      {status && <p style={{marginTop:16,color:'#666'}}>{status}</p>}
    </div>
  )
}
