import Image from "next/image";
import Header from "@/components/Header";
import {useEffect, useState} from "react";

const HeroBanner = () => {
    const [screenSize, setScreenSize] = useState(0);
    const handleWindowResize = () => {
        setScreenSize(window.innerWidth);
    }

    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
    return (
        <div className={'bg-hero-pattern h-auto lg:h-[1088px] pb-10 mb-10 lg:mb-0'}>
            <Header/>
            { screenSize > 768 &&
                <div className={'xl:max-w-[1320px] 2xl:max-w-[1552px] flex justify-between gap-x-5 items-center mt-32 mx-auto relative'}>
                    <div className={'w-full md:w-3/5 z-50'}>
                        <div className={'text-right'}>
                            <div className={'inline-block relative'}>
                                <span className={'text-right text-primaryColor md:text-8xl 2xl:text-[140px] font-bold'}>React</span>
                                <img
                                    src="/images/hero-stroke-vector.png"
                                    className={'absolute -top-14 -left-14 w-[85px]'}
                                    alt=""
                                />
                            </div>
                            <h2 className={'text-right text-primaryColor md:text-8xl 2xl:text-[140px] font-bold'}>Conference</h2>
                        </div>
                        <div className={'flex justify-between mt-8'}>
                            <Image
                                src="/images/hero-img-1.png"
                                alt="hero-image"
                                width={627}
                                height={648}
                            />
                            <div>
                                <p className={'text-justify text-lg font-normal'}>
                                    Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum..id fermentum.In quis diam turpis quam id fermentum.
                                </p>
                                <button className={'bg-primaryYellow rounded-full w-[290px] py-4 flex justify-center gap-x-5 items-center mt-20'}>
                                    <span className={'text-darkBlue text-lg font-medium'}>Buy Tickets</span>
                                    <img src={'/images/icons/arrow-up-right-icon.png'}/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={'w-full md:w-2/5 z-50'}>
                        <Image
                            src="/images/hero-img-2.png"
                            alt="hero-image"
                            width={627}
                            height={648}
                        />
                    </div>
                    <img
                        src="/images/hero-curvey-vector.png"
                        className={'absolute top-0 right-0 md:w-3/5 2xl:w-[940px] 2xl:h-[832px]'}
                        alt="vector"
                    />
                </div>
            }

            {
                screenSize <= 768 &&
                <div className={'mt-14 mx-auto relative px-5 pb-5'}>
                    <div className={'text-right pr-10'}>
                        <div className={'inline-block relative'}>
                            <span className={'text-right text-primaryColor text-5xl font-bold z-50'}>React</span>
                            <img
                                src="/images/hero-stroke-vector.png"
                                className={'absolute -top-8 -left-8 w-[41px]'}
                                alt=""
                            />
                        </div>
                        <h2 className={'text-right text-primaryColor text-5xl font-bold z-50'}>Conference</h2>
                    </div>

                    <div className={'mt-8'}>
                        <p className={'text-justify text-base font-normal'}>
                            Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum..id fermentum.In quis diam turpis quam id fermentum.
                        </p>
                        <button className={'bg-primaryYellow rounded-full mx-auto px-6 py-4 flex justify-center gap-x-5 items-center mt-8'}>
                            <span className={'text-darkBlue text-lg font-medium'}>Buy Tickets</span>
                            <img src={'/images/icons/arrow-up-right-icon.png'}/>
                        </button>
                    </div>

                    <div className={'w-full z-50 mt-8 relative'}>
                        <img src="/images/hero-mobile-img-2.png" alt="hero-image" className={' w-[327px] h-[333px]'}/>
                        <img src="/images/hero-star.png" alt="star" className={'absolute right-0 -bottom-14 rotate-45'}/>
                    </div>

                    <div className={'w-full mt-14'}>
                        <img src="/images/hero-mobile-img-1.png" alt="hero-image"/>
                        <img src="/images/hero-mobile-round-ornament.png" alt="round" className={'absolute right-0 bottom-4'}/>
                    </div>

                    <img
                        src="/images/hero-mobile-curvey-vector.png"
                        className={'absolute -z-10 -top-5 right-8 w-[342px] 2xl:h-[432px]'}
                        alt="vector"
                    />
                </div>
            }
        </div>
    )
}

export default HeroBanner;