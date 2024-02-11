import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export function ProfileCard() {
  return (
    <div className="shadow-2xl backdrop-blur-sm bg-white/40 p-4 rounded-lg grid place-items-center ">
      <img src="https://pbs.twimg.com/media/FAi4aaTXIAMIUmP?format=jpg&name=4096x4096" alt="" className="w-[50%] h-[100%] rounded-full" />
        <p className=" text-[34px] font-semibold">Kitt.</p>
      <div className="mt-4 flex justify-center">
        <div className="flex mt-4 flex items-center">
          <a href="#" className="mr-4">
            <FontAwesomeIcon icon={faXTwitter} className="text-black-500 hover:text-blue-700 text-xl" />
          </a>
          <a href="#" className="mr-4">
            <FontAwesomeIcon icon={faGithub} className="text-[#F890FA] hover:text-blue-700 text-xl" />
          </a>
          <a href="#" className="mr-4">
            <FontAwesomeIcon icon={faFacebook} className="text-blue-500 hover:text-blue-700 text-xl" />
          </a>
          <a href="#" className="mr-4">
            <FontAwesomeIcon icon={faInstagram} className="text-[#F890FA] hover:text-blue-700 text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
