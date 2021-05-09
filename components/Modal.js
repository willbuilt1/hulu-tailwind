import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';

const Modal = ({ result }) => {
  console.log(result);
  const baseUrl = 'https://image.tmdb.org/t/p/original/';
  return (
    <div className="w-full">
      <div className="p-2 group w-8/12" onClick={() => setMovie(result)}>
        <Image
          src={`${baseUrl}${result.backdrop_path || result.poster_path}`}
          layout="responsive"
          height="1080"
          width="1920"
        />
        <div className="p-2">
          <h2 className="mt-1 text-white text-2xl group-hover:font-bold transition-all duration-100 ease-in-out">
            {result.title || result.original_name}
          </h2>
          <div className>
            <p className>{result.overview}</p>
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
