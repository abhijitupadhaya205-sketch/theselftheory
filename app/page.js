"use client";
import { useState } from 'react';

export default function Home(){
  return (
    <main style={{fontFamily:'system-ui, sans-serif', background:'#faf9f6', minHeight:'100vh'}}>
      <header style={{padding:'20px', display:'flex', justifyContent:'space-between', maxWidth:'1200px', margin:'0 auto'}}>
        <h1 style={{fontWeight:900, letterSpacing:'-1px'}}>THE SELF THEORY</h1>
        <div>Cart (0)</div>
      </header>

      <section style={{textAlign:'center', padding:'80px 20px'}}>
        <h2 style={{fontSize:'64px', fontWeight:900, lineHeight:1, maxWidth:'800px', margin:'0 auto'}}>Nothing but<br/>the essential</h2>
        <p style={{marginTop:'20px', color:'#666'}}>Premium Skincare & Haircare - Made in India</p>
        <button style={{marginTop:'30px', padding:'15px 40px', background:'black', color:'white', border:'none', fontWeight:700, cursor:'pointer'}}>SHOP NOW</button>
        <p style={{marginTop:'40px', fontSize:'12px', color:'green'}}>✓ GitHub Connected: abhijitupadhaya205-sketch/theselftheory</p>
      </section>

      <section style={{maxWidth:'1200px', margin:'0 auto', padding:'20px', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'20px'}}>
        <div style={{background:'white', padding:'20px', border:'1px solid #eee'}}><h3>Rosemary Shampoo</h3><p>₹549</p></div>
        <div style={{background:'white', padding:'20px', border:'1px solid #eee'}}><h3>Niacinamide Serum</h3><p>₹649</p></div>
        <div style={{background:'white', padding:'20px', border:'1px solid #eee'}}><h3>Face Wash</h3><p>₹399</p></div>
      </section>
    </main>
  )
}
