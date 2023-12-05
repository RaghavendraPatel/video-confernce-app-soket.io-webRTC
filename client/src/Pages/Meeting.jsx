import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import {FcEndCall} from 'react-icons/fc';
import { MdOutlineScreenShare, MdOutlineStopScreenShare } from "react-icons/md";
import { CiMicrophoneOff, CiMicrophoneOn, CiVideoOn,CiVideoOff } from "react-icons/ci";
import './Meeting.scss';
const Meeting = ({socket}) => {
    const {id} = useParams();
    document.title = `Meeting ${id}`;
    const [isVideoOn, setIsVideoOn] = useState(false);
    const [isAudioOn, setIsAudioOn] = useState(false);
    const [isScreenShare, setIsScreenShare] = useState(false);

    useEffect(() => {
        screenShare(isScreenShare);
    }, [isScreenShare]);

    useEffect(() => {
        getVideoStream(isVideoOn,isAudioOn);
    }, [isVideoOn,isAudioOn]);

    const getVideoStream = async(isVideoOn,isAudioOn) => {
        
        const myVideo = document.getElementById('my-video');

        if(isAudioOn||isVideoOn){
            const stream = await navigator.mediaDevices.getUserMedia({
                video: isVideoOn,
                audio: isAudioOn
            });
            myVideo.srcObject = stream;
        }
        else{
            myVideo.srcObject = null;
        }
        myVideo.onloadedmetadata = () => {
            myVideo.play();
            myVideo.muted = true;
        }
    }

    const screenShare = async (isScreenShare) => {
        const myScreen = document.getElementById('my-screen');
        if(isScreenShare){
            try{
                const stream = await navigator.mediaDevices.getDisplayMedia({
                    video: true,
                    audio: true
                });
                console.log(stream);
                myScreen.srcObject = stream;
                myScreen.onloadedmetadata = () => {
                    myScreen.play();
                }
            }catch(err){
                console.log(err);
                setIsScreenShare(false);
            }
        }else{
            myScreen.srcObject = null;
        }
    }


    const setMain = (e) => {
        const main = document.querySelector('.main__stream');
        const videoGrid = document.querySelector('.video-grid__items');
        main.innerHTML = '';
        const video = document.createElement('video');
        video.srcObject = e.target.srcObject;
        video.onloadedmetadata = () => {
            video.play();
        }
        main.appendChild(video);
        videoGrid.childNodes.forEach((child) => {
            if(child.id !== e.target.id){
                child.classList.remove('active');
            }
        })
        e.target.classList.add('active');
    }
    return(
        <div className="Meeting">
            <div className="meeting__container">
                <div className="meeting__container__left">
                        <div className="main__stream"></div>
                        <div className="video-grid">
                            <div className="video-grid__items">
                                {isVideoOn&&<video id="my-video" onClick={(e)=>setMain(e)}></video>}
                                {isScreenShare && <video id="my-screen" onClick={(e)=>setMain(e)}></video>}
                            </div>
                        </div>
                        <div className="controls">
                                <button 
                                    className='mic-btn'
                                    onClick={() => setIsAudioOn((prev) => !prev)}
                                >
                                    <i>{isAudioOn?<CiMicrophoneOn />:<CiMicrophoneOff />}</i>
                                </button>
                                <button 
                                    className='video-btn' 
                                    onClick={() => setIsVideoOn((prev) => !prev)}
                                >
                                    <i>{isVideoOn?<CiVideoOn />:<CiVideoOff />}</i>
                                </button>
                                <button 
                                    className='share-btn' 
                                    onClick={() => setIsScreenShare((prev) => !prev)}
                                >
                                    <i>{isScreenShare?<MdOutlineScreenShare />:<MdOutlineStopScreenShare />}</i>
                                </button>
                                <button className='leave-btn'><FcEndCall /></button>
                        </div>
                </div>
                <div className="meeting__container__right">
                    <div className="options"></div>
                    <div className="chat"></div>
                    <div className="people"></div>
                </div>
            </div>
        </div>
    )
}
export default Meeting