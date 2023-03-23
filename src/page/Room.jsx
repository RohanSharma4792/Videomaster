import React from "react";
import {useParams} from 'react-router-dom' 
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const Room = ()=>{

    const {roomID} = useParams();
    const meeting = async (element)=>{
        const appID = 856790297;
        const serverSecret = "83ad05522789df01f20ded25e56a73fd";
        const kittoken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret, 
            roomID, 
            Date.now().toString,
            "rohan"
            )
            const zc = ZegoUIKitPrebuilt.create(kittoken)
            zc.joinRoom({
                container:element,
                sharedLinks:[
                    {
                        name: 'copy link',
                        url:`rohan.com`,
                    }
                ],
                scenario:{
                    mode:ZegoUIKitPrebuilt.OneONoneCall,
                },
            })
    }
    return (
        <div>
            <div ref={meeting}/>
        </div>
    )

}
export default Room;