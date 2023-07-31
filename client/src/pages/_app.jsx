import { StateProvider } from "@/context/StateContext"
import reducer, {initialState} from "../context/StateReducers"
import Head from "next/head"
import "../styles/global.css"


export default function App({Component, pageProps}) {
    return (
        <StateProvider initialState={initialState} reducer={reducer}>
            <Head>
                <title>Whatsapp</title>
                <link rel="shortcut icon" href="./whatsapp.png"/>
            </Head>
            <Component {...pageProps} />
        </StateProvider>
    )
    
}