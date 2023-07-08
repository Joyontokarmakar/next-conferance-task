import {useRouter} from "next/router";
import Header from "@/components/Header";
import {useState} from "react";
import {useQuery} from "@apollo/client";
import {GET_CONFERENCE_DETAILS} from "../../../services/gql-requests";
import ConferenceSidebar from "@/components/conference/ConferenceSidebar";
import Speakers from "@/components/conference/Speakers";
import Organizers from "@/components/conference/Organizers";
import Schedule from "@/components/conference/Schedule";
import Sponsors from "@/components/conference/Sponsors";
import Loader from "@/components/Loader";

const conferenceID = () => {
    const [selectedTab, setSelectedTab] = useState("organizer");

    const {conferenceID} = useRouter().query
    const { loading, data } = useQuery(GET_CONFERENCE_DETAILS, {variables: { conferenceId: conferenceID },});

    return(
        <div>
            <Header/>
            {loading ? (
                <Loader/>
            ) : (
                <div className={'max-w-[1320px] mx-auto px-6 lg:px-0 mt-10 lg:mt-20 mb-[100px]'}>
                    <h2 className={'text-2xl lg:text-5xl text-darkBlue font-bold'}>{data.conference.name}</h2>
                    <p className={'text-base lg:text-xl text-darkBlue opacity-80 font-normal mt-4'}>{data.conference.slogan}</p>

                    <div className={'w-full flex justify-start gap-x-12 mt-10 lg:mt-[52px]'}>
                        <ConferenceSidebar
                            setSelectedTab={setSelectedTab}
                            selectedTab={selectedTab}
                            conference={data.conference}
                        />
                        <div className={'w-full bg-primaryWhite rounded-lg p-[52px] block largeDevice:hidden'}>
                            {selectedTab === "organizer" && <Organizers organizer={data.conference.organizers} />}
                            {selectedTab === "speakers" && <Speakers speakers={data.conference.speakers} />}
                            {selectedTab === "schedule" && <Schedule schedules={data.conference.schedules} />}
                            {selectedTab === "sponsors" && <Sponsors sponsors={data.conference.sponsors} />}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default conferenceID;