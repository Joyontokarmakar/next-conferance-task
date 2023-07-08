import React from 'react'

const Sponsor = () => {
    return (
        <div className={'bg-primaryWhite py-[100px]'}>
            <div className={'mx-auto max-w-[1320px]'}>
                <h2 className={'text-darkBlue text-xl md:text-5xl font-bold text-center'}>Our Sponsor</h2>
                <div className={'mt-6 lg:mt-8'}>
                    <p className={'text-darkGray text-xs md:text-base font-medium text-center'}>🥇 Gold Sponsor</p>
                    <div className={'flex flex-wrap justify-center items-center gap-x-10 mt-4 lg:mt-8'}>
                        <img
                            src="/images/logos/layers.png"
                            alt="sponsor"
                            className={'w-[106px] lg:w-[217px] h-[32px] lg:h-[65px] mb-4 lg:mb-0'}
                        />
                        <img
                            src="/images/logos/sisyphus.png"
                            alt="sponsor"
                            className={'w-[112px] lg:w-[217px] h-[32px] lg:h-[65px] mb-4 lg:mb-0'}
                        />
                    </div>
                </div><div className={'mt-6 lg:mt-8'}>
                    <p className={'text-darkGray text-xs md:text-base font-medium text-center'}>🥈Silver Sponsors</p>
                    <div className={'flex flex-wrap justify-center items-center gap-x-10 mt-4 lg:mt-8'}>
                        <img
                            src="/images/logos/circooles.png"
                            alt="sponsor"
                            className={'w-[132px] lg:w-[217px] h-[32px] lg:h-[65px] mb-4 lg:mb-0'}
                        />
                        <img
                            src="/images/logos/catalog.png"
                            alt="sponsor"
                            className={'w-[116px] lg:w-[217px] h-[32px] lg:h-[65px] mb-4 lg:mb-0'}
                        />
                        <img
                            src="/images/logos/gofore.png"
                            alt="sponsor"
                            className={'w-[122px] lg:w-[217px] h-[32px] lg:h-[65px] mb-4 lg:mb-0'}
                        />
                    </div>
                </div><div className={'mt-6 lg:mt-8'}>
                    <p className={'text-darkGray text-xs md:text-base font-medium text-center'}>🥉Bronze Sponsors</p>
                    <div className={'flex flex-wrap justify-center items-center gap-x-10 mt-4 lg:mt-8'}>
                        <img
                            src="/images/logos/sisyphus-blue.png"
                            alt="sponsor"
                            className={'w-[112px] lg:w-[217px] h-[32px] lg:h-[65px] mb-4 lg:mb-0'}
                        />
                        <img
                            src="/images/logos/quotient.png"
                            alt="sponsor"
                            className={'w-[135px] lg:w-[217px] h-[32px] lg:h-[65px] mb-4 lg:mb-0'}
                        />
                        <img
                            src="/images/logos/layers.png"
                            alt="sponsor"
                            className={'w-[106px] lg:w-[217px] h-[32px] lg:h-[65px] mb-4 lg:mb-0'}
                        />
                        <img
                            src="/images/logos/circooles-yellow.png"
                            alt="sponsor"
                            className={'w-[132px] lg:w-[217px] h-[32px] lg:h-[65px] mb-4 lg:mb-0'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsor;