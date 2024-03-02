import { useGlobalState } from '@/hooks'
import React from 'react'

const GoogleMap = () => {
  const [ globalState, dispatch ] = useGlobalState();
  const {setting} = globalState;
    const toggleFullScreenMap = () => {
        const ele = document.getElementById("map")
        const isFull = document.fullscreenElement;
        if(!isFull) {
          ele.requestFullscreen();
        }else {
          document.exitFullscreen();
        }
      }
  return (
    <div className=" relative w-full h-full" id="map">
            <iframe
              src={setting.Map}
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div onClick={() => toggleFullScreenMap()} className="absolute top-4 right-2 p-2 flex items-center justify-center bg-white cursor-pointer">
              <img className="w-4 h-4" src="https://static-00.iconduck.com/assets.00/viewfinder-icon-2048x2046-8xygq31d.png" alt="" />
            </div>
          </div>
  )
}

export default GoogleMap