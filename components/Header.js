import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';

import Image from 'next/image';
import Link from 'next/link';
import HeaderItem from './HeaderItem';

const Header = () => {
  return (
    <header className="flex flex-col items-center sm:flex-row sm:justify-between m-2 sm:mr-4">
      <nav className="flex flex-grow justify-evenly max-w-2xl sm:mt-3">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Trending" Icon={LightningBoltIcon} />
        <HeaderItem title="Verified" Icon={BadgeCheckIcon} />
        <HeaderItem title="Collections" Icon={CollectionIcon} />
        <HeaderItem title="Search" Icon={SearchIcon} />
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
