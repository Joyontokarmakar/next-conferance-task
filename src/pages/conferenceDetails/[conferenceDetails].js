import {useRouter} from "next/router";
import Header from "@/components/Header";

const conferenceDetails = () => {
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
                        <button className={'group w-[365px] mb-8 bg-white hover:bg-primaryYellow p-2 flex justify-start gap-x-[45px] items-center rounded-lg border border-lightGray hover:border-primaryYellow hover:shadow-[0px 10px 20px 0px rgba(161, 161, 161, 0.25)]'}>
                            <div className={'flex justify-center-items-center rounded-lg bg-white p-4'}>
                                <img src="/images/icons/bi-directional-arrow.svg" alt=""/>
                            </div>
                            <span className={'text-darkBlue group-hover:text-white text-xl font-bold'}>Organizer</span>
                        </button>
                        <button className={'group w-[365px] mb-8 bg-white hover:bg-primaryYellow p-2 flex justify-start gap-x-[45px] items-center rounded-lg border border-lightGray hover:border-primaryYellow hover:shadow-[0px 10px 20px 0px rgba(161, 161, 161, 0.25)]'}>
                            <div className={'flex justify-center-items-center rounded-lg bg-white p-4'}>
                                <img src="/images/icons/bi-directional-arrow.svg" alt=""/>
                            </div>
                            <span className={'text-darkBlue group-hover:text-white text-xl font-bold'}>Organizer</span>
                        </button>
                        <button className={'group w-[365px] mb-8 bg-white hover:bg-primaryYellow p-2 flex justify-start gap-x-[45px] items-center rounded-lg border border-lightGray hover:border-primaryYellow hover:shadow-[0px 10px 20px 0px rgba(161, 161, 161, 0.25)]'}>
                            <div className={'flex justify-center-items-center rounded-lg bg-white p-4'}>
                                <img src="/images/icons/bi-directional-arrow.svg" alt=""/>
                            </div>
                            <span className={'text-darkBlue group-hover:text-white text-xl font-bold'}>Organizer</span>
                        </button>
                        <button className={'group w-[365px] mb-8 bg-white hover:bg-primaryYellow p-2 flex justify-start gap-x-[45px] items-center rounded-lg border border-lightGray hover:border-primaryYellow hover:shadow-[0px 10px 20px 0px rgba(161, 161, 161, 0.25)]'}>
                            <div className={'flex justify-center-items-center rounded-lg bg-white p-4'}>
                                <img src="/images/icons/bi-directional-arrow.svg" alt=""/>
                            </div>
                            <span className={'text-darkBlue group-hover:text-white text-xl font-bold'}>Organizer</span>
                        </button>
                    </div>
                    <div className={'w-full bg-primaryWhite rounded-lg p-[52px]'}>
                        <ul>
                            <li className={'list-none mb-6'}>
                                <div className={'bg-white p-4 flex justify-start items-center gap-x-10 rounded-lg'}>
                                    <img src="/images/conference-organizer.png" className={'rounded-lg'} alt="con"/>
                                    <div>
                                        <h2 className={'text-xl text-darkBlue font-bold'}>Siddhartha</h2>
                                        <p className={'text-base text-darkBlue font-normal'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, inventore.</p>
                                    </div>
                                </div>
                            </li>
                            <li className={'list-none mb-6'}>
                                <div className={'bg-white p-4 flex justify-start items-center gap-x-10 rounded-lg'}>
                                    <img src="/images/conference-organizer.png" className={'rounded-lg'} alt="con"/>
                                    <div>
                                        <h2 className={'text-xl text-darkBlue font-bold'}>Siddhartha</h2>
                                        <p className={'text-base text-darkBlue font-normal'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, inventore.</p>
                                    </div>
                                </div>
                            </li>
                            <li className={'list-none mb-6'}>
                                <div className={'bg-white p-4 flex justify-start items-center gap-x-10 rounded-lg'}>
                                    <img src="/images/conference-organizer.png" className={'rounded-lg'} alt="con"/>
                                    <div>
                                        <h2 className={'text-xl text-darkBlue font-bold'}>Siddhartha</h2>
                                        <p className={'text-base text-darkBlue font-normal'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, inventore.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default conferenceDetails;