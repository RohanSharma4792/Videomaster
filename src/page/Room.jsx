import React from "react";
import Home from "./Home";
import {useParams} from 'react-router-dom' 
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const Room = ()=>{

    const {roomid} = useParams();
    const meeting = async (element)=>{
        const appID = 856790297;
        const serverSecret = "83ad05522789df01f20ded25e56a73fd";
        const kittoken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,
            serverSecret, 
            roomid, 
            Date.now().toString
            )
            const zc = ZegoUIKitPrebuilt.create(kittoken)
            zc.joinRoom({
                container:element,
                scenario:{
                    mode:ZegoUIKitPrebuilt.OneONoneCall
                }
            })
    }
    return (
        <div>

        </div>
    )

}
export default Home;