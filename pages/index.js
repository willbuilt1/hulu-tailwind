import Head from 'next/head';
import { useState } from 'react';
import Genres from '../components/Genres';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Results from '../components/Results';
import requests from '../utils/requests';

//destruture object with a different variable name

const Home = ({ results: movies }) => {
  const [selectedMovie, setSelectedMovie] = useState('');
  const [showModal, setShowModal] = useState(false);
  const modal = (result) => {
    setSelectedMovie(result);
    setShowModal(true);
  };
  return (
    <div>
      <Head>
        <title>Hulu app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      {showModal ? <Modal result={selectedMovie} /> : null}
      <Header />
      {/* Nav */}
      <Genres />
      <Results results={movies} setMovie={modal} />
    </div>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());
  return {
    props: {
      results: request.results,
    }, // will be passed to the page component as props
  };
}
