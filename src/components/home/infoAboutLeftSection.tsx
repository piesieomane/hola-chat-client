import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
const InfoAboutLeftSection = () => {
  return (
    <div className="pt-8 px-2">
      <div className="relative rounded-lg shadow-sm w-auto">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <AiOutlineSearch />
        </div>
        <input
          className=" py-2 pl-10 rounded-lg border-gray-300 bg-slate-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          type="search"
          placeholder="Search"
        />
      </div>
      <div>
        <p>Unread</p>
      </div>
      <div>
        <p>From team</p>
      </div>
      <div>
        <p>From companies</p>
      </div>
      <div>
        <p>All message</p>
      </div>
    </div>
  );
};

export default InfoAboutLeftSection;
