import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';

const Modal = ({ result, hideModal }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/original/';
  return (
    <div
      className="w-full h-screen flex items-center bg-opacity-90 bg-[#081520] fixed z-10"
      onClick={hideModal}
    >
      <div className="px-3 group flex justify-around items-center">
        <div className="w-4/12 relative h-72">
          <Image
            src={`${baseUrl}${result.backdrop_path || result.poster_path}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-2 w-7/12">
          <h2 className="mt-1 text-white text-2xl group-hover:font-bold transition-all duration-100 ease-in-out">
            {result.title || result.original_name}
          </h2>
          <div>
            <p>{result.overview}</p>
            <p className="flex">
              <span className="font-bold uppercase">
                {result.media_type && `${result.media_type} • `}
              </span>
              {result.release_date || result.first_air_date} •
              <ThumbUpIcon className="h-5 mx-1" /> • {result.vote_count}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
