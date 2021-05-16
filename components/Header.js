import {
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';

import Image from 'next/image';
import HeaderItem from './HeaderItem';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="flex flex-col items-center sm:flex-row sm:justify-between m-2 sm:mr-4">
      <nav className="flex flex-grow justify-evenly max-w-2xl sm:mt-3">
        <HeaderItem title="Home" Icon={HomeIcon} link="" />
        <HeaderItem
          title="Trending"
          Icon={LightningBoltIcon}
          link="?genre=fetchTrending"
        />
        <HeaderItem title="Search" Icon={SearchIcon} />
        <SearchBar />
        <HeaderItem title="account" Icon={UserIcon} />
      </nav>
      <Image
        className="object-contain"
        src="/logo.png"
        height={100}
        width={200}
      />
    </header>
  );
};

export default Header;
