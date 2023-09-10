import Link from "next/link";

const InternalServerErrorTitle = () => {
  return (
    <div className="internal-server-error-container">
      <div className="form-container">
        <h1>500</h1>
        <h2>Internal Server Error</h2>
        <div className="home-page-link-container">
          Return to <Link href={"/"}>Homepage</Link>
        </div>
      </div>
    </div>
  );
};

export default InternalServerErrorTitle;
