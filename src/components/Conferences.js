import React from 'react'
import Link from "next/link";
import ThunderIcon from "@/components/ThunderIcon";

const Conferences = () => {
    return (
        <div>
            <h2 className={'text-darkBlue text-5xl font-bold text-center'}>Conferences</h2>
            <div className={'mt-10 mx-auto max-w-[1088px]'}>
                <div className={'grid'}>
                    <Link href='conferenceDetails/1' className={'flex group'}>
                        <div className={'order-first mb-14'}>
                            <div className={'w-[480px] pb-10 bg-primaryWhite my-2 rounded-lg border-t-4 border-lightGray py-7 px-4 flex justify-start items-start gap-x-4'}>
                                <img src="/images/icons/conference-list-icon.png" alt=""/>
                                <div>
                                    <p className={'text-primaryColor text-base lg:text-lg font-medium'}>Web Components - Write once & run </p>
                                    <p className={'text-primaryGray text-xs lg:text-sm font-normal'}>
                                        DConditional rendering issues in JSX, forwardRef
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col items-center mx-6'}>
                            <div className={'px-4 py-3 my-2 rounded-full bg-primaryWhite group-hover:bg-lightYellow border-2 border-lightGray group-hover:border-primaryYellow flex justify-center items-center'}>
                                <ThunderIcon fill={'fill-[#CDCDCD] group-hover:fill-primaryYellow'}/>
                            </div>
                            <div className={'w-0.5 h-full bg-lightGray group-hover:bg-primaryYellow'}/>
                        </div>
                        <div className={'order-last w-[480px]'}>
                            <p className={'text-sm text-mediumGray mt-5'}>03 September, 2023</p>
                        </div>
                    </Link>
                    <Link href='conferenceDetails/2' className={'flex group'}>
                        <div className={'order-last mb-14'}>
                            <div className={'w-[480px] bg-primaryWhite my-2 rounded-lg border-t-4 border-lightGray py-7 px-4 flex justify-start items-start gap-x-4'}>
                                <img src="/images/icons/conference-list-icon.png" alt=""/>
                                <div>
                                    <p className={'text-primaryColor text-base lg:text-lg font-medium'}>Web Components - Write once & run </p>
                                    <p className={'text-primaryGray text-xs lg:text-sm font-normal'}>
                                        DConditional rendering issues in JSX, forwardRef
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col items-center mx-6'}>
                            <div className={'px-4 py-3 my-2 rounded-full bg-primaryWhite group-hover:bg-lightYellow border-2 border-lightGray group-hover:border-primaryYellow flex justify-center items-center'}>
                                <ThunderIcon fill={'fill-[#CDCDCD] group-hover:fill-primaryYellow'}/>
                            </div>
                            <div className={'w-0.5 h-full bg-lightGray group-hover:bg-primaryYellow'}/>
                        </div>
                        <div className={'order-first w-[480px]'}>
                            <p className={'text-sm text-mediumGray text-right mt-5'}>03 September, 2023</p>
                        </div>
                    </Link>
                    <Link href='conferenceDetails/3' className={'flex group'}>
                        <div className={'order-first mb-14'}>
                            <div className={'w-[480px] pb-10 bg-primaryWhite my-2 rounded-lg border-t-4 border-lightGray py-7 px-4 flex justify-start items-start gap-x-4'}>
                                <img src="/images/icons/conference-list-icon.png" alt=""/>
                                <div>
                                    <p className={'text-primaryColor text-base lg:text-lg font-medium'}>Web Components - Write once & run </p>
                                    <p className={'text-primaryGray text-xs lg:text-sm font-normal'}>
                                        DConditional rendering issues in JSX, forwardRef
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col items-center mx-6'}>
                            <div className={'px-4 py-3 my-2 rounded-full bg-primaryWhite group-hover:bg-lightYellow border-2 border-lightGray group-hover:border-primaryYellow flex justify-center items-center'}>
                                <ThunderIcon fill={'fill-[#CDCDCD] group-hover:fill-primaryYellow'}/>
                            </div>
                            <div className={'w-0.5 h-full bg-lightGray group-hover:bg-primaryYellow'}/>
                        </div>
                        <div className={'order-last w-[480px]'}>
                            <p className={'text-sm text-mediumGray mt-5'}>03 September, 2023</p>
                        </div>
                    </Link>
                    <Link href='conferenceDetails/4' className={'flex group'}>
                        <div className={'order-last mb-14'}>
                            <div className={'w-[480px] bg-primaryWhite my-2 rounded-lg border-t-4 border-lightGray py-7 px-4 flex justify-start items-start gap-x-4'}>
                                <img src="/images/icons/conference-list-icon.png" alt=""/>
                                <div>
                                    <p className={'text-primaryColor text-base lg:text-lg font-medium'}>Web Components - Write once & run </p>
                                    <p className={'text-primaryGray text-xs lg:text-sm font-normal'}>
                                        DConditional rendering issues in JSX, forwardRef
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col items-center mx-6'}>
                            <div className={'px-4 py-3 my-2 rounded-full bg-primaryWhite group-hover:bg-lightYellow border-2 border-lightGray group-hover:border-primaryYellow flex justify-center items-center'}>
                                <ThunderIcon fill={'fill-[#CDCDCD] group-hover:fill-primaryYellow'}/>
                            </div>
                            <div className={'w-0.5 h-full bg-lightGray group-hover:bg-primaryYellow'}/>
                        </div>
                        <div className={'order-first w-[480px]'}>
                            <p className={'text-sm text-mediumGray text-right mt-5'}>03 September, 2023</p>
                        </div>
                    </Link>
                    <Link href='conferenceDetails/5' className={'flex group'}>
                        <div className={'order-first mb-14'}>
                            <div className={'w-[480px] bg-primaryWhite my-2 rounded-lg border-t-4 border-lightGray py-7 px-4 flex justify-start items-start gap-x-4'}>
                                <img src="/images/icons/conference-list-icon.png" alt=""/>
                                <div>
                                    <p className={'text-primaryColor text-base lg:text-lg font-medium'}>Web Components - Write once & run </p>
                                    <p className={'text-primaryGray text-xs lg:text-sm font-normal'}>
                                        DConditional rendering issues in JSX, forwardRef
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={'flex flex-col items-center mx-6'}>
                            <div className={'px-4 py-3 my-2 rounded-full bg-primaryWhite group-hover:bg-lightYellow border-2 border-lightGray group-hover:border-primaryYellow flex justify-center items-center'}>
                                <ThunderIcon fill={'fill-[#CDCDCD] group-hover:fill-primaryYellow'}/>
                            </div>
                        </div>
                        <div className={'order-last w-[480px]'}>
                            <p className={'text-sm text-mediumGray mt-5'}>03 September, 2023</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Conferences;