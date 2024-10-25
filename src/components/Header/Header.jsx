import React from 'react';
import Logo from '../../assets/MemoCards.png';
import SearchIcon from '../../assets/Group.svg';

function Header() {
  return (
    <>
      <header>
        <nav className="bg-white shadow-md">
          <div className="flex justify-between mx-8 pt-6 pb-4">
            <div className="w-80">
              <img src={Logo} alt="MemoCards Logo" />
            </div>
            <div className="flex flex-col">
              <ul className="flex items-center space-x-10 mb-5">
                <li>Courses</li>
                <li>Ask EDI</li>
                <li>FlashCards</li>
                <li>Practice Tests</li>
              </ul>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type a question..."
                  className="py-2 pl-14  w-full outline-none border-solid border-2 border-orange-400 rounded-xl  "
                />
                <button className="absolute  text-gray-500  left-3 top-1/2  transform -translate-y-1/2">
                  <img src={SearchIcon} alt="Search Icon" className="h-5 w-5" />
                </button>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <button>SignUp</button>
              <span>|</span>
              <button>LogOut</button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
