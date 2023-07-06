import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

export default function HeroBanner() {
    return (
        <div className={'bg-hero-pattern h-[1088px]'}>
            <Header/>
            <div className={'xl:max-w-[1320px] 2xl:max-w-[1552px] flex justify-between gap-x-5 items-center mt-20 mx-auto relative'}>
                <div className={'w-3/5 z-50'}>
                    <div className={'text-right'}>
                        <div className={'inline-block relative'}>
                            <span className={'text-right text-primaryColor lg:text-8xl 2xl:text-[140px] font-bold'}>React</span>
                            <img
                                src="/images/hero-stroke-vector.png"
                                className={'absolute -top-14 -left-14'}
                                alt=""
                            />
                        </div>
                        <h2 className={'text-right text-primaryColor lg:text-8xl 2xl:text-[140px] font-bold'}>Conference</h2>
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
                                <img src={'/images/arrow-up-right-icon.png'}/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={'w-2/5 z-50'}>
                    <Image
                        src="/images/hero-img-2.png"
                        alt="hero-image"
                        width={627}
                        height={648}
                    />
                </div>
                <img
                    src="/images/hero-curvey-vector.png"
                    className={'absolute top-0 right-0 lg:w-3/5 2xl:w-[940px] 2xl:h-[832px]'}
                    alt="vector"
                />
            </div>
        </div>
    )
}
