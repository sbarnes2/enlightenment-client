import Image from 'next/image'
import Link from 'next/link'

import bg from '../public/enlighten-candle-light.jpg'



const styling = {
  backgroundImage: `url(${bg.src})`,
  width: '100%',
  height: '100%',
}

export default function Home() {
  return (
        <main>
        <div className="hero height= min-h-screen bg-base-200" style={styling}>
          <div className="hero-content justify-content:left flex-col lg:flex-row-reverse">
            <div>
              <h1 className="text-5xl font-bold">binx Healthcare</h1>
              <p className="text-2xl font-bold">“Those who are enlightened never stop forging themselves.”</p>
              <p className="text-1xl">Morihei Ueshiba (The Art of Peace)</p>
            </div>
          </div>
        </div>
        </main>
      )
}