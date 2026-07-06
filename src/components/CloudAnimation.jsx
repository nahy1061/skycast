import React from 'react'
import { WiCloud } from "react-icons/wi";

const CloudAnimation = () => {
  return (
    <div>
           {/* Decorative floating clouds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left to right — start off-screen on the LEFT */}
        <WiCloud className="absolute left-[-15%] text-white/25 w-40 h-40 sm:w-56 sm:h-56 top-10 animate-[float-cloud_35s_ease-in-out_infinite]" />
        <WiCloud className="absolute left-[-15%] text-white/20 w-56 h-56 sm:w-72 sm:h-72 top-64 animate-[float-cloud_45s_ease-in-out_infinite] [animation-delay:-15s]" />
        <WiCloud className="absolute left-[-15%] text-white/15 w-32 h-32 sm:w-44 sm:h-44 top-96 animate-[float-cloud_42s_ease-in-out_infinite] [animation-delay:-30s]" />

        {/* Right to left — start off-screen on the RIGHT */}
        <WiCloud className="absolute right-[-15%] text-white/20 w-48 h-48 sm:w-64 sm:h-64 top-32 animate-[float-cloud-reverse_40s_ease-in-out_infinite] [animation-delay:-8s]" />
        <WiCloud className="absolute right-[-15%] text-white/15 w-36 h-36 sm:w-48 sm:h-48 top-96 animate-[float-cloud-reverse_50s_ease-in-out_infinite] [animation-delay:-25s]" />
        <WiCloud className="absolute right-[-15%] text-white/20 w-44 h-44 sm:w-60 sm:h-60 top-112 animate-[float-cloud-reverse_38s_ease-in-out_infinite] [animation-delay:-4s]" />
      </div>
    </div>
  )
}

export default CloudAnimation