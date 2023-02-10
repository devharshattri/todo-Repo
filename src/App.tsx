import axios from "axios";
import React, { ChangeEvent, FC, useState } from "react";
import CardList from "./components/CardList";
// import "./App.css";
import {
  StyledFormContainer,
  FormInput,
  FormButton,
  Styledh2,
} from "./App.style";

const App:FC = ()=> {
  const [repo, setRepo] = useState<string>("");
  const [list, setList] = useState<[]>([]);
  const [isloading, setLoading] = useState<boolean>(false);

  const getList = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
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
      <StyledFormContainer>
        <form className="form" onSubmit={getList}>
          <FormInput placeholder='Enter repository name' value={repo} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setRepo(event.target.value)} />
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
      </StyledFormContainer>
    </div>
  );
}
export default App;
