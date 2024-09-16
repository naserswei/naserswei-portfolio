import Links from "./links";

function Footer() {
  return (
    <footer className=" bg-[#000C24] text-white flex justify-center items-center">
      <div className="flex flex-col justify-center items-center py-10 gap-8">
        <h1 className=" font-semibold">Naser swei</h1>
        <Links />
        <p>All Rights Reserved &copy; 2024 Naser swei</p>
      </div>
    </footer>
  );
}

export default Footer;
