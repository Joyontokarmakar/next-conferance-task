import React from 'react'
import Link from "next/link";
import ThunderIcon from "@/components/ThunderIcon";

const ConferencesItem = (prop) => {
    let {conf} = prop
    const lastIndex = conf.length-1
    const oddEvenHandler = (value) => {
        if(value%2 == 0){
            return 1
        } else {
            return 0
        }
    }
    return (
        <div>
            <h2 className={'text-darkBlue text-5xl font-bold text-center'}>Conferences</h2>

            <div className={'mt-10 mx-auto max-w-[1088px]'}>
                <div className={'grid'}>
                    {conf.map((item,index) => (
                        <Link href={`conferenceID/${item.id}`} className={'flex group'} key={item.id}>
                            <div className={'mb-14 ' + (oddEvenHandler(index) ? 'order-first' : 'order-last')}>
                                <div className={'w-[480px] pb-10 bg-primaryWhite my-2 rounded-lg border-t-4 border-lightGray py-7 px-4 flex justify-start items-start gap-x-4'}>
                                    <img src="/images/icons/conference-list-icon.png" alt=""/>
                                    <div>
                                        <p className={'text-primaryColor text-base lg:text-lg font-medium'}>{item.name} </p>
                                        <p className={'text-primaryGray text-xs lg:text-sm font-normal'}>
                                            {item.slogan}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={'flex flex-col items-center mx-6'}>
                                <div className={'px-4 py-3 my-2 rounded-full bg-primaryWhite group-hover:bg-lightYellow border-2 border-lightGray group-hover:border-primaryYellow flex justify-center items-center'}>
                                    <ThunderIcon fill={'fill-[#CDCDCD] group-hover:fill-primaryYellow'}/>
                                </div>
                                <div className={'w-0.5 h-full bg-lightGray group-hover:bg-primaryYellow ' + (lastIndex === index ? 'hidden' : '')}/>
                            </div>
                            <div className={'w-[480px] ' + (oddEvenHandler(index) ? 'order-last' : 'order-first')}>
                                <p className={'text-sm text-mediumGray mt-5 ' + (oddEvenHandler(index) ? '': 'text-right')}>{item.startDate}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ConferencesItem;