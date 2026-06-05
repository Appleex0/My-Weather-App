function Info() {
  return (
    <div className="flex h-5/7 w-full">
      <div className="flex items-center justify-between w-full bg-amber-200 px-30">
        <div className="flex h-1/2 gap-4">
          <div className="text-4xl">Baku</div>
          <div className="text-4xl">23 C</div>
        </div>
        <div className="grid grid-cols-3 gird-rows-2 gap-30 w-1/2 text-center">
          <div className="bg-amber-50 text-2xl">Windy</div>
          <div className="bg-amber-50 text-2xl">Sunny</div>
          <div className="bg-amber-50 text-2xl">Sunny</div>
          <div className="bg-amber-50 text-2xl">Sunny</div>
          <div className="bg-amber-50 text-2xl">Sunny</div>
          <div className="bg-amber-50 text-2xl">Sunny</div>
        </div>
      </div>
    </div>
  );
}

export default Info;
