import { Logo } from '../Logo';
import React from 'react';

function Navbar() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 h-[100px] md:h-[183px] bg-navbar items-center">
      <div className="col-span-2 md:col-start-2 md:col-end-4 md:justify-self-center">
        <div className="text-lg md:text-4xl lg:text-5xl text-white font-sans pl-6 min-w-full whitespace-nowrap">Utopia Country Highlighter</div>
      </div>
      <div className="relative w-14 h-14 md:w-24 md:h-24 mr-2 md:mr-6 justify-self-end">
        <Logo />
      </div>
    </div>
  )
}

export default Navbar;