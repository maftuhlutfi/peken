import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import useScrollPos from "../../../hooks/useScrollPos";

const navMenu = [
    {
        title: 'Beranda',
        slug: '/'
    },
    {
        title: 'Pasar',
        slug: '/pasar'
    },
    {
        title: 'Produk',
        slug: '/produk'
    },
    {
        title: 'Promo',
        slug: '/promo'
    },
]

const MainHeader = () => {
    const [showMenu, setShowMenu] = useState(false)
    const scrollYPos = useScrollPos().y
    const {pathname} = useRouter()

    return (
        <div className={`z-50 fixed w-full  ${scrollYPos < 20 ? 'bg-white lg:bg-transparent' : 'bg-white'} left-0 top-0 px-4 transition-all duration-200`}>
            <div className="relative h-20 lg:h-28 max-w-7xl mx-auto flex items-center justify-between">
                <div className="relative w-24 h-10 lg:w-32 lg:h-16">
                    <Image src='/logo.png' layout="fill" className="object-contain object-left" alt="logo-peken" />
                </div>
                <div 
                    className={`h-16 w-16 relative flex items-center justify-end cursor-pointer z-10 lg:hidden`} 
                    onClick={() => setShowMenu(prev => !prev)}
                >
                    <span className={`block rounded-full absolute h-0.5 w-1/2 transform transition duration-500 ease-in-out bg-gray-800 ${showMenu ? 'rotate-45' : '-translate-y-2'}`} />
                    <span className={`block rounded-full absolute h-0.5 w-2/5 transform transition duration-500 ease-in-out bg-gray-800 translate-y-0.5 ${showMenu ? 'opacity-0 -translate-x-6' : ''}`} />
                    <span className={`block rounded-full absolute h-0.5 w-1/2 transform transition duration-500 ease-in-out bg-gray-800 ${showMenu ? '-rotate-45' : 'translate-y-3'}`} />
                </div>
                <div className={`fixed w-full h-screen bg-light-yellow top-0 flex flex-col items-center py-24 ${showMenu ? 'left-0' : 'left-full'} transition-all duration-300 lg:static lg:w-auto lg:bg-transparent lg:flex-row lg:h-auto`}>
                    {navMenu.map((n, i) => 
                        <Link href={n.slug} key={i}>
                            <a className={`text-xl mb-8 lg:mb-0 lg:ml-16 ${pathname == n.slug ? 'font-bold text-custom-yellow' : 'text-text-secondary'}`}>{n.title}</a>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
 
export default MainHeader;