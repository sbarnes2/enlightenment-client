import Image from "next/image";
import Link from "next/link";

export const Header:React.FC = () =>{
    return <header className="navbar">
        <div className='navbar-start'><Link href='/'>binx Healthcare.</Link></div>
        <div className='navbar-end'>
            <div className="px-3"><Link href='/about'>About</Link></div>
            <div className="px-3"><Link href='/admin'>Admin</Link></div>
            <div className="px-3"><Link href='/authenticate'>Log In</Link></div>
        </div>
    </header>;
}