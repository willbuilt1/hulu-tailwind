import requests from '../utils/requests';
import { useRouter } from 'next/router';

export default function Genres() {
  const router = useRouter();
  return (
    <div className="relative">
      <div className="flex px-10 sm:px-16 text-2xl space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            className="whitespace-nowrap last:pr-14 hover:text-white cursor-pointer transition duration-100 transform hover:scale-125 active:text-red-500 leading-loose"
            onClick={() => router.push(`?genre=${key}`)}
            key={key}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute bg-gradient-to-l from-[#081520] right-0 top-0 h-10 w-1/12" />
    </div>
  );
}
