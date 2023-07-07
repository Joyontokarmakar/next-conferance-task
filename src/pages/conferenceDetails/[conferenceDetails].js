import {useRouter} from "next/router";
import Header from "@/components/Header";
import {useState} from "react";

const conferenceDetails = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleActiveTab = (value) => {
        setSelectedTab(value)
    }

    const router = useRouter()
    const id = router.query.conferenceDetails
    return(
        <div>
            <Header/>
            <div className={'max-w-[1320px] mx-auto mt-20 mb-[100px]'}>
                <h2 className={'text-5xl text-darkBlue font-bold'}>Conference Name</h2>
                <p className={'text-xl text-darkBlue opacity-80 font-normal mt-4'}>Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum.</p>

                <div className={'flex justify-start gap-x-12 mt-[52px]'}>
                    <div>
                        <button onClick={()=>handleActiveTab(0)} className={'group w-[365px] mb-8 hover:bg-primaryYellow p-2 flex justify-start gap-x-[45px] items-center rounded-lg hover:border-primaryYellow hover:shadow-[0px 10px 20px 0px rgba(161, 161, 161, 0.25)] ' + ( selectedTab === 0 ? 'bg-primaryYellow border border-primaryYellow shadow-[0px 10px 20px 0px rgba(161, 161, 161, 0.25)' : 'bg-white border-lightGray' )}>
                            <div className={'flex justify-center-items-center rounded-lg bg-white p-4'}>
                                <img src="/images/icons/bi-directional-arrow.svg" alt=""/>
                            </div>
                            <span className={'text-xl font-bold ' + ( selectedTab === 0 ? 'text-white' : 'text-darkBlue')}>Organizer</span>
                        </button>
                        <button onClick={()=>handleActiveTab(1)} className={'group w-[365px] mb-8 hover:bg-primaryYellow p-2 flex justify-start gap-x-[45px] items-center rounded-lg hover:border-primaryYellow hover:shadow-[0px 10px 20px 0px rgba(161, 161, 161, 0.25)] ' + ( selectedTab === 1 ? 'bg-primaryYellow border border-primaryYellow shadow-[0px 10px 20px 0px rgba(161, 161, 161, 0.25)' : 'bg-white border-lightGray' )}>
                            <div className={'flex justify-center-items-center rounded-lg bg-white p-4'}>
                                <img src="/images/icons/bi-directional-arrow.svg" alt=""/>
                            </div>
                            <span className={'text-xl font-bold ' + ( selectedTab === 1 ? 'text-white' : 'text-darkBlue')}>Organizer</span>
                        </button>
                        <button onClick={()=>handleActiveTab(2)} className={'group w-[365px] mb-8 hover:bg-primaryYellow p-2 flex justify-start gap-x-[45px] items-center rounded-lg hover:border-primaryYellow hover:shadow-[0px 10px 20px 0px rgba(161, 161, 161, 0.25)] ' + ( selectedTab === 2 ? 'bg-primaryYellow border border-primaryYellow shadow-[0px 10px 20px 0px rgba(161, 161, 161, 0.25)' : 'bg-white border-lightGray' )}>
                            <div className={'flex justify-center-items-center rounded-lg bg-white p-4'}>
                                <img src="/images/icons/bi-directional-arrow.svg" alt=""/>
                            </div>
                            <span className={'text-xl font-bold ' + ( selectedTab === 2 ? 'text-white' : 'text-darkBlue')}>Organizer</span>
                        </button>
                        <button onClick={()=>handleActiveTab(3)} className={'group w-[365px] mb-8 hover:bg-primaryYellow p-2 flex justify-start gap-x-[45px] items-center rounded-lg hover:border-primaryYellow hover:shadow-[0px 10px 20px 0px rgba(161, 161, 161, 0.25)] ' + ( selectedTab === 3 ? 'bg-primaryYellow border border-primaryYellow shadow-[0px 10px 20px 0px rgba(161, 161, 161, 0.25)' : 'bg-white border-lightGray' )}>
                            <div className={'flex justify-center-items-center rounded-lg bg-white p-4'}>
                                <img src="/images/icons/bi-directional-arrow.svg" alt=""/>
                            </div>
                            <span className={'text-xl font-bold ' + ( selectedTab === 3 ? 'text-white' : 'text-darkBlue')}>Organizer</span>
                        </button>
                    </div>
                    <div className={'w-full bg-primaryWhite rounded-lg p-[52px]'}>
                        { selectedTab === 0 &&
                            <ul>
                                <li className={'list-none mb-6'}>
                                    <div className={'bg-white p-4 flex justify-start items-center gap-x-10 rounded-lg'}>
                                        <img src="/images/conference-organizer.png" className={'rounded-lg'} alt="con"/>
                                        <div>
                                            <h2 className={'text-xl text-darkBlue font-bold'}>Siddhartha 1-1</h2>
                                            <p className={'text-base text-darkBlue font-normal mt-5'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, inventore.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className={'list-none mb-6'}>
                                    <div className={'bg-white p-4 flex justify-start items-center gap-x-10 rounded-lg'}>
                                        <img src="/images/conference-organizer.png" className={'rounded-lg'} alt="con"/>
                                        <div>
                                            <h2 className={'text-xl text-darkBlue font-bold'}>Siddhartha 1-2</h2>
                                            <p className={'text-base text-darkBlue font-normal mt-5'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, inventore.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className={'list-none mb-6'}>
                                    <div className={'bg-white p-4 flex justify-start items-center gap-x-10 rounded-lg'}>
                                        <img src="/images/conference-organizer.png" className={'rounded-lg'} alt="con"/>
                                        <div>
                                            <h2 className={'text-xl text-darkBlue font-bold'}>Siddhartha 1-3</h2>
                                            <p className={'text-base text-darkBlue font-normal mt-5'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, inventore.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        }
                        { selectedTab === 1 &&
                            <ul>
                                <li className={'list-none mb-6'}>
                                    <div className={'bg-white p-4 flex justify-start items-center gap-x-10 rounded-lg'}>
                                        <img src="/images/conference-organizer.png" className={'rounded-lg'} alt="con"/>
                                        <div>
                                            <h2 className={'text-xl text-darkBlue font-bold'}>Siddhartha 2-1</h2>
                                            <p className={'text-base text-darkBlue font-normal mt-5'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, inventore.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className={'list-none mb-6'}>
                                    <div className={'bg-white p-4 flex justify-start items-center gap-x-10 rounded-lg'}>
                                        <img src="/images/conference-organizer.png" className={'rounded-lg'} alt="con"/>
                                        <div>
                                            <h2 className={'text-xl text-darkBlue font-bold'}>Siddhartha 2-2</h2>
                                            <p className={'text-base text-darkBlue font-normal mt-5'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, inventore.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className={'list-none mb-6'}>
                                    <div className={'bg-white p-4 flex justify-start items-center gap-x-10 rounded-lg'}>
                                        <img src="/images/conference-organizer.png" className={'rounded-lg'} alt="con"/>
                                        <div>
                                            <h2 className={'text-xl text-darkBlue font-bold'}>Siddhartha 2-3</h2>
                                            <p className={'text-base text-darkBlue font-normal mt-5'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, inventore.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        }
                        { selectedTab === 2 &&
                            <ul>
                                <li className={'list-none mb-6'}>
                                    <div className={'bg-white p-4 flex justify-start items-center gap-x-10 rounded-lg'}>
                                        <img src="/images/conference-organizer.png" className={'rounded-lg'} alt="con"/>
                                        <div>
                                            <h2 className={'text-xl text-darkBlue font-bold'}>Siddhartha 3-1</h2>
                                            <p className={'text-base text-darkBlue font-normal mt-5'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, inventore.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className={'list-none mb-6'}>
                                    <div className={'bg-white p-4 flex justify-start items-center gap-x-10 rounded-lg'}>
                                        <img src="/images/conference-organizer.png" className={'rounded-lg'} alt="con"/>
                                        <div>
                                            <h2 className={'text-xl text-darkBlue font-bold'}>Siddhartha 3-2</h2>
                                            <p className={'text-base text-darkBlue font-normal mt-5'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, inventore.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className={'list-none mb-6'}>
                                    <div className={'bg-white p-4 flex justify-start items-center gap-x-10 rounded-lg'}>
                                        <img src="/images/conference-organizer.png" className={'rounded-lg'} alt="con"/>
                                        <div>
                                            <h2 className={'text-xl text-darkBlue font-bold'}>Siddhartha 3-3</h2>
                                            <p className={'text-base text-darkBlue font-normal mt-5'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, inventore.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        }
                        { selectedTab === 3 &&
                            <ul>
                                <li className={'list-none mb-6'}>
                                    <div className={'bg-white p-4 flex justify-start items-center gap-x-10 rounded-lg'}>
                                        <img src="/images/conference-organizer.png" className={'rounded-lg'} alt="con"/>
                                        <div>
                                            <h2 className={'text-xl text-darkBlue font-bold'}>Siddhartha 4-1</h2>
                                            <p className={'text-base text-darkBlue font-normal mt-5'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, inventore.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className={'list-none mb-6'}>
                                    <div className={'bg-white p-4 flex justify-start items-center gap-x-10 rounded-lg'}>
                                        <img src="/images/conference-organizer.png" className={'rounded-lg'} alt="con"/>
                                        <div>
                                            <h2 className={'text-xl text-darkBlue font-bold'}>Siddhartha 4-2</h2>
                                            <p className={'text-base text-darkBlue font-normal mt-5'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, inventore.</p>
                                        </div>
                                    </div>
                                </li>
                                <li className={'list-none mb-6'}>
                                    <div className={'bg-white p-4 flex justify-start items-center gap-x-10 rounded-lg'}>
                                        <img src="/images/conference-organizer.png" className={'rounded-lg'} alt="con"/>
                                        <div>
                                            <h2 className={'text-xl text-darkBlue font-bold'}>Siddhartha 4-3</h2>
                                            <p className={'text-base text-darkBlue font-normal mt-5'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, inventore.</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default conferenceDetails;