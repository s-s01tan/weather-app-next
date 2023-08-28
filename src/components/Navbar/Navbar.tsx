import Image from "next/image";

const Navbar = () => {
  return (
    <div className="custom-navbar">
      <div className="custom-navbar-logo">
        <Image src="/image/hero-logo.svg" alt="logo" width={186} height={32} />
      </div>
    </div>
  );
};

export default Navbar;
