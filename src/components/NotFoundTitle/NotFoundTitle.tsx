import Link from "next/link";

const NotFoundTitle = () => {
  return (
    <div className="not-found-container">
      <div className="form-container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <div className="home-page-link-container">
          Return to <Link href={"/"}>Homepage</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundTitle;
