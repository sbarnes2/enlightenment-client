import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
        <main>
        <p className='intro'>Welcome to the binx training management application</p>
        <div className='container mx-auto px-4'>
          <div className='w-full h-screen bg-black-300'>
          <ul>
            <li className=''><Link href="users">Users List</Link></li>
            <li className=''><Link href="documents">Example of User email links</Link></li>
            <li><div className='card'>example 1</div></li>
          </ul>
          </div>
        </div>
        </main>
      )
}