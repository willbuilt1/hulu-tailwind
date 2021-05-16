import { useRouter } from 'next/router';
import { useState } from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    router.push(`?search=${search}`);
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-25 h-10 rounded-lg text-black"
        placeholder="Find your next watch..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
