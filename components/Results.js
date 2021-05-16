import Thumbnail from './Thumbnail';

function Results({ results, setMovie, toggleModal }) {
  const filteredData = results.filter((result) => result.genre_ids);
  return results.length === 0 ? (
    <h1>No luck... try another search</h1>
  ) : (
    <div className="sm:grid sm:px-3 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:flex flex-wrap">
      {filteredData.map((result) => (
        <Thumbnail
          key={result.id}
          result={result}
          setMovie={setMovie}
          toggleModal={toggleModal}
        />
      ))}
    </div>
  );
}

export default Results;
