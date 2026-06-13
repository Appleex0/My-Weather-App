function Footer() {
  return (
    <div className="bg-gray-400 w-full h-30">
      <div className="flex items-center h-full px-2">
        <p className="text-white ">© 2026 Weather App. All rights reserved.</p>
        <p className="text-white  text-xs">
          Developed by{" "}
          <a
            href="mailto:your.email@example.com"
            className="text-blue-500 font-bold hover:text-blue-700 whitespace-nowrap"
          >
            Khalilov Dev
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
