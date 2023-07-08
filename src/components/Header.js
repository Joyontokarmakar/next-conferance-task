import React from 'react'
import Link from "next/link";

const Header = () => {
    return (
        <div className={'max-w-[1320px] px-6 lg:px-0 py-[35px] lg:py-10 mx-auto flex justify-between gap-x-5 items-center'}>
            <Link href='/'>
                <img
                    src="/images/logos/logo-main.png"
                    className={'w-[58px] lg:w-[116px] h-4 lg:h-8'}
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
                <Link href='#' target="_blank" className={'text-primaryColor text-lg font-medium'}>
                    Our work
                </Link>
                <Link href='#' className={'text-primaryColor text-lg font-medium'}>
                    Blog
                </Link>
                <Link href='#' className={'text-primaryColor text-lg font-medium'}>
                    Say hi
                </Link>
            </div>
            <img
                src="/images/icons/hero-hamburger.png"
                alt="hamburger"
                className={'w-6 lg:w-[27px] h-6'}
            />
        </div>
    )
}

export default Header;
