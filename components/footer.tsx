import Image from "next/image";

export default function Footer() {
  return (
    <div className="w-[80%] mb-14 | md:mb-24 md:w-[70%]">
      <span className="flex width-full h-[1px] bg-slate-100 my-6 | md:my-10"></span>
      <div className="flex justify-between items-center">
        <div className="text-white">
          <p className="text-xs | md:text-lg">
            2026 . Dominic Hart, 
          </p>
          <p className="text-xs | md:text-lg">
            All rights reserved
          </p>
        </div>
        <div className="flex flex-row text-white">
          <a className="smooth-scale-110" href="https://github.com/domhart98" target="_blank" rel="noopener noreferrer">
            <Image className="p-1 w-10 h-10 | md:p-2 md:w-16 md:h-16" src="/images/icons/github-logo.svg" alt="github icon" width={60} height={60}/>
          </a>
          <a className="smooth-scale-110" href="https://www.facebook.com/dominic.hart.35/" target="_blank" rel="noopener noreferrer">
            <Image className="p-1 w-10 h-10 | md:p-2 md:w-16 md:h-16" src="/images/icons/facebook-logo.svg" alt="github icon" width={60} height={60}/>
          </a>
          <a className="smooth-scale-110" href="https://www.linkedin.com/in/dominic-am-hart/" target="_blank" rel="noopener noreferrer">
            <Image className="p-1 w-10 h-10 | md:p-2 md:w-16 md:h-16" src="/images/icons/linkedin-logo.svg" alt="github icon" width={60} height={60}/>
          </a>
          
        </div>
      </div>
    </div>
  );
}