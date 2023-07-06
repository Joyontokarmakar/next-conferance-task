import {useRouter} from "next/router";
import Header from "@/components/Header";

const conferenceDetails = () => {
    const router = useRouter()
    const id = router.query.conferenceDetails
    return(
        <div>
            <Header/>
            ConferenceDetails {id}
        </div>
    )
}
export default conferenceDetails;