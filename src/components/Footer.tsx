function Footer() {
  return (
    <div className="bg-gray-400 w-full h-20">
      <div className="flex justify-around items-center h-full">
        <p className="text-white text-lg">
          © 2026 Weather App. All rights reserved.
        </p>
        <p className="text-white text-lg ">
          Developed by{" "}
          <a
            href="mailto:your.email@example.com"
            className="text-blue-500 font-bold hover:text-blue-700"
          >
            Khalilov Dev
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
