import {useRouter} from "next/router";
import Header from "@/components/Header";

const conferenceDetails = () => {
    const router = useRouter()
    const id = router.query.conferenceDetails
    return(
        <div>
            <Header/>
            <p>ConferenceDetails {id}</p>
        </div>
    )
}
export default conferenceDetails;