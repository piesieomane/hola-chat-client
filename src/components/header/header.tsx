import Link from 'next/link';
import Image from 'next/image';
import { TbNotes } from 'react-icons/tb';
import { AiOutlineContacts } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { BsChatSquareText } from 'react-icons/bs';
import { FcStatistics } from 'react-icons/fc';

const Header = () => {
  return (
    <header>
      <nav className="bg-gray-800 p-1">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="w-24 flex">
            <a href="#" className="px-2 py-1  hover:bg-gray-900">
              <p>
                <span className="text-slate-600 ">Ne</span>
                <span className="text-slate-200">Workers</span>
              </p>
            </a>
            <a
              href="#resume"
              className="px-2 py-1 text-slate-500 hover:bg-gray-900 flex items-center justify-between"
            >
              <TbNotes />
              Resume
            </a>
            <a
              href="#contacts"
              className="px-2 py-1 text-slate-200 flex items-center hover:bg-gray-900 justify-between"
            >
              <AiOutlineContacts />
              Contacts
            </a>
            <a
              href="#statistics"
              className="px-2 py-1 text-slate-200 flex items-center hover:bg-gray-900 justify-between"
            >
              <FcStatistics />
              Statistics
            </a>
            <a
              href="#chats"
              className="px-2 py-1 text-slate-200 flex items-center hover:bg-gray-900 justify-between"
            >
              <BsChatSquareText />
              Chats
            </a>
            <a
              href="#settings"
              className="px-2 py-1 text-slate-200 flex items-center hover:bg-gray-900 justify-between"
            >
              <FiSettings />
              Settings
            </a>
          </div>

          <div className="flex items-center">
            <button className="bg-gray-600 px-3 py-1 text-white hover:bg-gray-700">
              Dark mode
            </button>
            <button className="bg-gray-600 px-3 py-1 text-white hover:bg-gray-700">
              Notifications
            </button>
            <div className="relative">
              <Image
                src="/images/user.jpg"
                width={10}
                height={10}
                alt="User profile picture"
                className="w-8 h-8 rounded-full"
              />
              <div className="bg-gray-800 absolute right-0">
                <p className="text-white px-2 py-1">User</p>
                <p className="text-white px-2 py-1">555-555-5555</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
