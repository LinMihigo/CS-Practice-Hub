function Search({ onSubmit }) {

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input className="border border-indigo-500/50" name='search' type="text" />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}

export default Search;
