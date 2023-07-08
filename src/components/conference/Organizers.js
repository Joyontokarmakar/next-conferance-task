import React from 'react'

const Organizers = (prop) => {
    let {organizer} = prop
    return (
        <div>
            <ul>
                {organizer.length ? (
                    organizer.map((item, index) => (
                        <li className={'list-none mb-5 lg:mb-6'} key={index}>
                            <div className={'bg-white p-4 flex justify-start lg:items-center gap-x-[15px] lg:gap-x-10 rounded-lg'}>
                                <img src={item.image.url} alt={item.name} className={'rounded-lg shadow w-[88px] lg:w-[140px] h-[88px] lg:h-[140px]'} />
                                <div>
                                    <h2 className={'text-base lg:text-xl text-darkBlue font-bold'}>{item.name}</h2>
                                    <p className={'text-xs lg:text-base text-darkBlue font-normal mt-2 lg:mt-5'}>{item.about}</p>
                                </div>
                            </div>
                        </li>
                    ))) : (
                    <p>There is no Organizer! </p>
                    )
                }
            </ul>
        </div>
    )
}
export default Organizers;