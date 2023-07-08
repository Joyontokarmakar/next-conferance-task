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

const conferenceID = () => {
    const [selectedTab, setSelectedTab] = useState("organizer");

    const {conferenceID} = useRouter().query
    const { loading, data } = useQuery(GET_CONFERENCE_DETAILS, {variables: { conferenceId: conferenceID },});

    return(
        <div>
            <Header/>
            {loading ? (
                <div className="text-center">
                    <h3>Loading...</h3>
                </div>
            ) : (
                <div className={'max-w-[1320px] mx-auto mt-20 mb-[100px]'}>
                    <h2 className={'text-5xl text-darkBlue font-bold'}>{data.conference.name}</h2>
                    <p className={'text-xl text-darkBlue opacity-80 font-normal mt-4'}>{data.conference?.slogan}</p>

                    <div className={'flex justify-start gap-x-12 mt-[52px]'}>
                        <div>
                            <ConferenceSidebar
                                setSelectedTab={setSelectedTab}
                                selectedTab={selectedTab}
                                conference={data.conference}
                            />
                        </div>
                        <div className={'w-full bg-primaryWhite rounded-lg p-[52px]'}>
                            {selectedTab === "organizer" && <Organizers organizer={data.conference.organizers} />}
                            {selectedTab === "speakers" && <Speakers speakers={data?.conference?.speakers} />}
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