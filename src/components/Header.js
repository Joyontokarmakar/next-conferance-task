import React from 'react'
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className={'max-w-[1320px] h-8 pt-10 mx-auto flex justify-between gap-x-5 items-center'}>
            <Image
                src="/images/logos/logo-main.png"
                alt="main-logo"
                width={116}
                height={32}
            />
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
