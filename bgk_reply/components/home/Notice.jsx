import React from 'react'
import { MdLocationOn } from "react-icons/md";

const Notice = () => {
  return (
    <div className="container">
      <div className="flex font-extrabold gap-2 mt-4">
        <MdLocationOn />
        For availability
        <div>
          <p className='font-normal underline'>Choose location</p>
        </div>
      </div>
    </div>
  );
}

export default Notice
