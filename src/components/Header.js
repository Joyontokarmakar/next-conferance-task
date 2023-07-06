import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <div className={'max-w-[1320px] py-10 mx-auto block flex justify-between gap-x-5 items-center'}>
            <Link href='/'>
                <Image
                    src="/images/logos/logo-main.png"
                    alt="main-logo"
                    width={116}
                    height={32}
                />
            </Link>
            <div className={'hidden md:flex justify-between gap-x-10 items-center '}>
                <Link href='#' className={'text-primaryColor text-lg font-medium'}>
                    About us
                </Link>
                <Link href='#' className={'text-primaryColor text-lg font-medium'}>
                    What We do
                </Link>
                <Link href='#' className={'text-primaryColor text-lg font-medium'}>
                    Our work
                </Link>
                <Link href='#' className={'text-primaryColor text-lg font-medium'}>
                    Blog
                </Link>
                <Link href='#' className={'text-primaryColor text-lg font-medium'}>
                    Say hi
                </Link>
            </div>
            <Image
                src="/images/hero-hamburger.png"
                alt="hamburger"
                width={27}
                height={24}
            />
        </div>
    )
}

export default Header;
