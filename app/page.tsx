import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
        <main>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div>
              <h1 className="text-5xl font-bold">Welcome to the binx </h1>
              <p className="text-5xl font-bold">training management application</p>
            </div>
          </div>
        </div>
        </main>
      )
}