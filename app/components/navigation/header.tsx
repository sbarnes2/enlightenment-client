import Image from "next/image";
import Link from "next/link";
import { options } from '../../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'

async function getSession(){
    return await getServerSession(options);
}

export const Header:React.FC = async () =>{
    return <header className="navbar bg-primary text-primary-content">
        <div className="navbar-start"><Image src='/binx_health.webp' alt="logo" width={102} height={60}/></div>
        <div className='navbar-end'>
            <div className="px-3"><Link href='/about'>About</Link></div>
            <div className="px-3"><Link href='/admin'>Admin</Link></div>
            <div className="px-3"><Link href='/authenticate'>{await getSession() ? ('log out'):('log in')}</Link></div>
        </div>
    </header>;
}