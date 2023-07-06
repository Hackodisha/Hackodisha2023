import React from 'react'
import "./Text.css"
const Text = ({cat}) => {
  return (
    <div className='text md:-rotate-90 flex justify-center font-light md:w-90 w-[177%]'>
      {`${cat}`} SPONSOR
    </div>
  )
}

export default Text
