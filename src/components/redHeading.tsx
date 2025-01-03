import React from 'react'

interface RedHeadingProps {
  text: string;
  textColor: string;
}

function RedHeading({ text, textColor }: RedHeadingProps) {
  return (
    <div className='flex items-center gap-4 '>
      <div className='w-5 h-10 bg-red-500 rounded'></div>
      <span className={`text-${textColor}-500 font-semibold`}>{text}</span>
    </div>
  )
}

export default RedHeading;