import React from 'react'
import Image from "next/image";

const Sponsor = () => {
    return (
        <div className={'bg-primaryWhite py-[100px]'}>
            <div className={'max-w-[1320px]'}>
                <h2 className={'text-darkBlue text-xl md:text-5xl font-bold text-center'}>Our Sponsor</h2>
                <div className={'mt-8'}>
                    <p className={'text-darkGray text-xs md:text-base font-medium text-center'}>🥇 Gold Sponsor</p>
                    <div className={'flex flex-wrap justify-center items-center gap-x-10 mt-8'}>
                        <Image
                            src="/images/logos/layers.png"
                            alt="sponsor"
                            width={217}
                            height={65}
                        />
                        <Image
                            src="/images/logos/sisyphus.png"
                            alt="sponsor"
                            width={217}
                            height={65}
                        />
                    </div>
                </div><div className={'mt-8'}>
                    <p className={'text-darkGray text-xs md:text-base font-medium text-center'}>🥈Silver Sponsors</p>
                    <div className={'flex flex-wrap justify-center items-center gap-x-10 mt-8'}>
                        <Image
                            src="/images/logos/circooles.png"
                            alt="sponsor"
                            width={217}
                            height={65}
                        />
                        <Image
                            src="/images/logos/catalog.png"
                            alt="sponsor"
                            width={217}
                            height={65}
                        />
                        <Image
                            src="/images/logos/gofore.png"
                            alt="sponsor"
                            width={217}
                            height={65}
                        />
                    </div>
                </div><div className={'mt-8'}>
                    <p className={'text-darkGray text-xs md:text-base font-medium text-center'}>🥉Bronze Sponsors</p>
                    <div className={'flex flex-wrap justify-center items-center gap-x-10 mt-8'}>
                        <Image
                            src="/images/logos/sisyphus-blue.png"
                            alt="sponsor"
                            width={217}
                            height={65}
                        />
                        <Image
                            src="/images/logos/quotient.png"
                            alt="sponsor"
                            width={217}
                            height={65}
                        />
                        <Image
                            src="/images/logos/layers.png"
                            alt="sponsor"
                            width={217}
                            height={65}
                        />
                        <Image
                            src="/images/logos/circooles-yellow.png"
                            alt="sponsor"
                            width={217}
                            height={65}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsor;