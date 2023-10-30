import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
        <main>
        <h1 className='heading'>binx Healthcare ltd.</h1>
        <p className='intro'>Welcome to the binx training management application</p>
        <div className='linksdiv'>
          <ul>
            <li className='linklistitem'><Link href="users">Users List</Link></li>
            <li className='linklistitem'><Link href="documents">User Documents List</Link></li>
          </ul>
        </div>
        </main>
      )
}