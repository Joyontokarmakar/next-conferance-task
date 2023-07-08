import React from 'react'

const Organizers = (prop) => {
    let {organizer} = prop
    return (
        <div>
            <ul>
                {organizer.length ? (
                    organizer.map((item, index) => (
                        <li className={'list-none mb-6'} key={index}>
                            <div className={'bg-white p-4 flex justify-start items-center gap-x-10 rounded-lg'}>
                                <img src={item.image.url} alt={item.name} className={'rounded-lg w-[140px] h-[140px]'} />
                                <div>
                                    <h2 className={'text-xl text-darkBlue font-bold'}>{item.name}</h2>
                                    <p className={'text-base text-darkBlue font-normal mt-5'}>{item.about}</p>
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