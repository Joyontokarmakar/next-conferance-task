import { Inter } from 'next/font/google'
import ConferencesItem from "@/components/conference/ConferencesItem";
import Sponsor from "@/components/Sponsor";
import HeroBanner from "@/components/HeroBanner";
import {GET_CONFERENCES} from "../../services/gql-requests";
import {useQuery} from "@apollo/client";
import {Head} from "next/document";
import Loader from "@/components/Loader";

const inter = Inter({ subsets: ['latin'] })
const Home = () => {
  const { loading, data, error } = useQuery(GET_CONFERENCES);
  let confs = data?.conferences
  return (
    <main className={`${inter.className}`}>
      {/*<Head>*/}
      {/*    <title>React Conference</title>*/}
      {/*    <meta name="description" content="Generated by create next app" />*/}
      {/*    <link rel="icon" href="/favicon.ico" />*/}
      {/*</Head>*/}
      <HeroBanner/>
        { loading ?
          (
            <Loader/>
          ) : (
            <ConferencesItem conf={confs}/>
          )
        }
      <Sponsor/>
    </main>
  )
}

export default Home;