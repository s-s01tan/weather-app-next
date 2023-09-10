import Navbar from "../components/Navbar/Navbar";
import Search from "../components/Search/Search";
import SearchList from "../components/Search/Search-List";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Search />
      <SearchList />
    </div>
  );
}
