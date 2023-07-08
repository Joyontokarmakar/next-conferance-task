import React from 'react'
import Link from "next/link";
 const Footer = () => {
    const getYear = () => {
        return new Date().getFullYear();
    }
    return (
        <div className={'bg-primaryColor py-20'}>
            <div className={'max-w-[375px] mx-auto'}>
                <Link href='/'>
                    <img
                        src="/images/logos/logo-white.png"
                        className={'block mx-auto w-[116px] lg:w-[175px] h-8 lg:h-12'}
                        alt="main logo"
                    />
                </Link>
                <div className={'mt-12 flex justify-center items-center gap-x-10'}>
                    <img src='/images/icons/twitter.png'/>
                    <img src='/images/icons/linkedin.png'/>
                    <img src='/images/icons/fb.png'/>
                    <img src='/images/icons/dribble.png'/>
                </div>
                <p className={'text-base text-white font-normal text-center mt-8'}>&copy; {getYear()} Lemonhive. All rights reserved.</p>
            </div>
        </div>
    )
}
export default Footer;