import Image from "next/image";
import Link from "next/link";
import { options } from '../../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'

async function getSession(){
    return await getServerSession(options);
}

async function logout()
{
    const promise = await getServerSession();
    
}

export const Header:React.FC = async () =>{
    return <header className="navbar bg-primary text-primary-content">
        <div className="navbar-start"><Link href='/'><p className="text-2xl">Enlightenment</p></Link></div>
        <div className='navbar-end'>
            <div className="px-3"><Link href='/admin'>Admin</Link></div>
            <div className="px-3"><Link href='/authenticate'>{await getSession() ? ('log out'):('log in')}</Link></div>
        </div>
    </header>;
}