import Navbar from "../components/Navbar/Navbar";
import InternalServerErrorTitle from "../components/InternalServerErrorTitle/InternalServerErrorTitle";

export default function InternalServerError() {
  return (
    <div>
      <Navbar />
      <InternalServerErrorTitle />
    </div>
  );
}
