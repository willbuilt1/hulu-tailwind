import { ThumbUpIcon } from '@heroicons/react/outline';
import Image from 'next/image';

const Thumbnail = ({ result, setMovie, toggleModal }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/original/';
  return (
    <div
      className='p-2 group cursor-pointer transition duration-200 transform sm:hover:scale-105'
      onClick={() => setMovie(result)}
    >
      <Image
        src={`${baseUrl}${result.backdrop_path || result.poster_path}`}
        layout='responsive'
        height='1080'
        width='1920'
      />
      <div className='p-2'>
        <h2 className='mt-1 text-white text-2xl group-hover:font-bold transition-all duration-100 ease-in-out'>
          {result.title || result.original_name}
        </h2>
        <div className='sm:opacity-0 transition group-hover:opacity-100 duration-200 ease-in'>
          <p className='truncate max-w-lg'>{result.overview}</p>
          <p className='flex'>
            <span className='font-bold uppercase'>
              {result.media_type && `${result.media_type} • `}
            </span>
            {result.release_date || result.first_air_date} •
            <ThumbUpIcon className='h-5 mx-1' /> • {result.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
