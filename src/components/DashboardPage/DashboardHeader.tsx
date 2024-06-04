import React from 'react';
import SearchBar from './SearchBar';
import Sheets from './Sheets';
import UserDropdown from './UserDropdown';

const DashboardHeader = () => {
  return (
    <>
      <Sheets />
      <div className='flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4'>
        <SearchBar />
        <UserDropdown />
      </div>
    </>
  );
};

export default DashboardHeader;
