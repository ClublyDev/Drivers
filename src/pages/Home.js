import { useState } from "react";
import "../App.css";
import TextBox from "../common/TextBox";
import Drivers from "../components/Drivers";
const Home = () => {
  const [searchText, setSearchText] = useState("");

  // Event hander for search box text change
  const onSearchDriverTextChanged = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <TextBox
        className="mt-1"
        style={{ width: 200 }}
        placeholder="Search for Driver"
        onChange={onSearchDriverTextChanged}
      />
      <Drivers searchText={searchText} />
    </>
  );
};

export default Home;
