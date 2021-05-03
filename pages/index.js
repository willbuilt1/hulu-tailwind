import Head from 'next/head';
import Genres from '../components/Genres';
import Header from '../components/Header';
import Results from '../components/Results';
import requests from '../utils/requests';

//destruture object with a different variable name
const Home = ({ results: movies }) => {
  return (
    <div>
      <Head>
        <title>Hulu app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Nav */}
      <Genres />
      <Results results={movies} />
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
