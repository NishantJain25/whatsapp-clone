import React, { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

function CapturePhoto({setImage, hideCapturePhoto}) {
    const videoRef = useRef(null)
    useEffect(() => {
        let stream;
        const startCamera = async () => {
            stream = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false
            })
            videoRef.current.srcObject = stream
        }
        startCamera()
        return () => {
            stream?.getTracks().forEach(track => {
                track.stop()
            });
        }
    },[])
    const capturePhoto = () => {
        const canvas = document.createElement('canvas')
        canvas.getContext("2d").drawImage(videoRef.current,0,0,300,150)
        setImage(canvas.toDataURL("image/jpeg"))
        hideCapturePhoto(false)
    }

    return <div className="absolute h-4/6 w-2/6 top-1/4 left-1/3 bg-gray-900 gap-3 pt-4 rounded-lg flex items-center justify-center">
        <div className="flex flex-col gap-4 w-full h-full items-center justify-between relative">
        <div
          className="pr-4 w-full cursor-pointer flex items-center justify-end"
          onClick={() => hideCapturePhoto(false)}
        >
          <IoClose className="h-10 w-10 cursor-pointer" />
        </div>
        <div className="flex justify-center">
            <video id="video" width="400" autoPlay ref={videoRef}></video>
        </div>
        <button className="h-16 w-16 bg-white rounded-full cursor-pointer border-8 border-teal-light p-2 mb-10" onClick={capturePhoto}></button>
        </div>
    </div>
}

export default CapturePhoto