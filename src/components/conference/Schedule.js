import React from 'react'

const Schedule = (prop) => {
    let {schedules} = prop
    return (
        <div>
            <ul>
                {schedules.length ? (
                    schedules.map((item, index) => (
                        <li className={'list-none mb-6'} key={index}>
                            <div className={'bg-white p-4 rounded-lg'}>
                                <div className={'flex justify-between items-center'}>
                                    <h2 className={'text-darkBlue text-xl font-bold'}>{item.day}</h2>
                                    <p className={'text-darkBlue text-base font-normal'}>{}</p>
                                </div>
                                <div>
                                    {item.intervals.map((interval, i) => (
                                        <div className={'text-darkBlue text-base font-normal mb-4'} key={i}>
                                            <p>Duration: {interval.begin} - {interval.end}</p>
                                            <p><span className={'text-darkBlue'}>• </span>{interval.title || 'Conference has no title'}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))) : (
                    <p>There is no schedules! </p>
                )}
            </ul>
        </div>
    )
}
export default Schedule;