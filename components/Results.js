import Thumbnail from './Thumbnail';

function Results({ results, setMovie }) {
  return (
    <div className="sm:grid sm:px-3 grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 3xl:flex flex-wrap">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} setMovie={setMovie} />
      ))}
    </div>
  );
}

export default Results;
