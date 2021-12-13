import React from 'react';

function Logo() {
  return (
    <>
      <img className="rounded-full" src="logo.png" alt="logo" />
      <span className="flex absolute h-5 w-5 top-0 md:top-2 right-1 md:right-2 -mt-1 -mr-1">
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
      </span>
    </>
  )
}

export default Logo;