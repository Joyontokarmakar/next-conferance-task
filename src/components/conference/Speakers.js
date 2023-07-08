import React from 'react'
import Link from "next/link";

const Speakers = (prop) => {
    let {speakers} = prop
    return (
        <div>
            <ul>
                {speakers.length ? (
                    speakers.map((item, index) => (
                        <li className={'list-none mb-5 lg:mb-6'} key={index}>
                            <div className={'bg-white p-4 flex justify-start lg:items-center gap-x-[15px] lg:gap-x-10 rounded-lg'}>
                                <img src={item.image.url} alt={item.name} className={'rounded-lg shadow w-[88px] lg:w-[140px] h-[88px] lg:h-[140px]'} />
                                <div className={'w-full'}>
                                    <div className={'lg:flex lg:justify-between lg:items-center'}>
                                        <h2 className={'text-base lg:text-xl text-darkBlue font-bold inline-block'}>{item.name}</h2>
                                        <div className={'flex justify-start items-center gap-x-4 mt-2 lg:mt-0'}>
                                            { item.social.twitter ?
                                                (
                                                    <Link href={item.social.twitter} target="_blank">
                                                        <img src='/images/icons/twitter-ash.png'/>
                                                    </Link>
                                                ) : <></>
                                            }

                                            { item.social.linkedin ?
                                                (
                                                    <Link href={item.social.linkedin} target="_blank">
                                                        <img src='/images/icons/linkedin-ash.png'/>
                                                    </Link>
                                                ) : <></>
                                            }

                                            { item.social.dribble ?
                                                (
                                                    <Link href={item.social.dribble} target="_blank">
                                                        <img src='/images/icons/dribble-ash.png'/>
                                                    </Link>
                                                ) : <></>
                                            }
                                            { item.social.github ?
                                                (
                                                    <Link href={item.social.github} target="_blank">
                                                        <img src='/images/icons/github-ash.png'/>
                                                    </Link>
                                                ) : <></>
                                            }

                                        </div>
                                    </div>
                                    <p className={'text-xs lg:text-base text-darkBlue font-normal mt-2 lg:mt-5'}>{item.about}</p>
                                </div>
                            </div>
                        </li>
                    ))) : (
                    <p>There is no speaker! </p>
                )
                }
            </ul>
        </div>
    )
}
export default Speakers;