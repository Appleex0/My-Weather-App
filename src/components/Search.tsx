function Search() {
  return (
    <div className="flex justify-center items-center w-full h-1/7">
      <div className="w-full text-center">
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
