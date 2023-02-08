import axios from "axios";
import React, { useState } from "react";
import CardList from "./components/CardList";
// import "./App.css";
import {
  StyledFormContainer,
  FormInput,
  FormButton,
  Styledh2,
} from "./App.style";

function App() {
  const [repo, setRepo] = useState("");
  const [list, setList] = useState([]);
  const [isloading, setLoading] = useState(false);

  const getList = async (e) => {
    e.preventDefault();
    setLoading(true);
    setList([]);

    try {
      const res = await axios.get(
        `https://api.github.com/search/repositories?q=${repo}`
      );
      setLoading(false);
      setList(res.data.items);
      setRepo("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/* <div className="form-container"> */}
      <StyledFormContainer>
        <form className="form" onSubmit={getList}>
          <FormInput value={repo} onChange={(e) => setRepo(e.target.value)} />
          <FormButton type="submit">Find Repo</FormButton>
        </form>
        {isloading && <p>Loading...</p>}
        {list.length !== 0 && (
          <div>
            <Styledh2>Repos</Styledh2>
            <CardList list={list} />
          </div>
        )}
        {list.length === 0 && <p>No Repo is available</p>}
        {/* </div> */}
      </StyledFormContainer>
    </div>
  );
}
export default App;
