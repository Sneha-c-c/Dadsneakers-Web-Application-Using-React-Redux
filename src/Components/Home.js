import React from 'react'
import video1 from './Images/video-3.mp4'
import './Styles/Home.css'
import v1 from './Images/hero-video-1.mp4'
import v2 from './Images/hero-video-2.mp4'
import v3 from './Images/hero-video-3.mp4'
import v4 from './Images/hero-video-4.mp4'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div>
      <video  autoPlay loop muted playsInline  src={video1} />
      <div className='div'>
        <h1>Sneak into Extraordinary</h1>
        <p>Where Adaventure Meets Style in Quicky Sneakers Bites</p>
        <button><Link id='div1' to='/shopnow'>Shop Now</Link></button>
      </div>
      </div>
      <div className='container'>
        <div>
        <h1>Our Bestsellers</h1>
        <p>Discover the Heroic Sneaker Line that Transcends Boundaries</p>
        </div>
        <div>
            <table className='table' >
              <tr >
               

                
                <td><video  autoPlay loop muted playsInline  src={v1}/>Vangaurd Accelerate</td>
                
                <td><video  autoPlay loop muted playsInline  src={v2}/>Vangaurd Accelerate</td>
                <td><video  autoPlay loop muted playsInline  src={v3}/>Luminary Synthesis</td>
                <td><video autoPlay loop muted playsInline   src={v4}/>Asend Quantum</td>
              </tr>
            </table>
        </div>
      </div>
    </div>
  )
}