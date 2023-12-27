const Search = ({ title }) => {
  return (
    <div className="p-3">
      <h1>{title}</h1>
      <input
        className="border border-black my-3 w-full h-8 rounded-md shadow-md p-2"
        type="text"
      />
    </div>
  );
};

export default Search;
