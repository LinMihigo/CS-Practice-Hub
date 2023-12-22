function Words({ onSubmit }) {

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input name='search' type="text" />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}

export default Words;
