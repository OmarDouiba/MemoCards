import React from 'react';
import Logo from '../../assets/MemoCards.png';
import SearchIcon from '../../assets/Group.svg';
import Button from '../shared/Button';
import SearchBar from '../shared/SearchBar';

function Header() {
  return (
    <>
      <header>
        <nav className="bg-white shadow-md">
          <div className="flex justify-between mx-8 pt-6 pb-4">
            {/* Logo */}
            <div className="w-80">
              <img src={Logo} alt="MemoCards Logo" />
            </div>
            <div className="flex flex-col">
              {/* Items list */}
              <ul className="flex items-center space-x-10 mb-5">
                <li>
                  <a href="#">Courses</a>
                </li>
                <li>
                  <a href="#">Ask EDI</a>
                </li>
                <li>
                  <a href="#">FlashCards</a>
                </li>
                <li>
                  <a href="#">Practice Tests</a>
                </li>
              </ul>
              {/* Search bar */}
              <div className="relative">
                <SearchBar SearchIcon={SearchIcon} />
              </div>
            </div>
            <div className="flex items-start space-x-2">
              {/* Auth items */}
              <Button>SignUp</Button>
              <span>|</span>
              <Button>LogIn</Button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
