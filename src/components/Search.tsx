function Search() {
  return (
    <div className="flex justify-center items-center w-full h-2/5">
      <div className="w-full text-center h-1/3">
        <input
          type="text"
          placeholder="Şəhər adı girin"
          className="outline-none border px-2 py-1 w-2/7  rounded-lg"
        />
      </div>
    </div>
  );
}

export default Search;
