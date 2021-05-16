import Head from 'next/head';
import { useState } from 'react';
import Genres from '../components/Genres';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Results from '../components/Results';
import { linkUrls as requests, searchUrl } from '../utils/requests';

//destruture object with a different variable name

const Home = ({ results: movies }) => {
  const [selectedMovie, setSelectedMovie] = useState('');
  const [showModal, setShowModal] = useState(false);
  // };
  const setMovie = (result) => {
    setSelectedMovie(result);
    setShowModal(true);
  };
  const toggleModal = (result) => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  return (
    <div>
      <Head>
        <title>Hulu app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      {showModal ? (
        <Modal result={selectedMovie} hideModal={toggleModal} />
      ) : null}
      <Header />
      {/* Nav */}
      <Genres />
      <Results results={movies} setMovie={setMovie} toggleModal={toggleModal} />
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const search = context.query.search;

  //Call URL determined on search or query
  const apiCall = search
    ? `${searchUrl.url}${search}`
    : `https://api.themoviedb.org/3${
        requests[genre]?.url || requests.fetchTrending.url
      }`;

  console.log(apiCall);

  const request = await fetch(apiCall);

  try {
    if (!request.ok) {
      throw new Error(`HTTP error! status: ${request.status}`);
    }
  } catch (err) {
    return {
      notFound: true,
    };
  }

  let data = await request.json();

  console.log(data);

  return {
    props: {
      results: data.results,
    }, // will be passed to the page component as props
  };
}
