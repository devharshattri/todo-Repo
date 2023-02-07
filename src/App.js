import axios from "axios";
import React, { useState } from "react";
import CardList from "./components/CardList";
import "./App.css";
// import { fetchData } from "./components/fetchData";

function App() {
  const [repo, setRepo] = useState('');
  const [list, setList] = useState([]);
  const [isloading, setLoading] = useState(false);

  const getList = (e) => {
    e.preventDefault();
    setLoading(true);
    setList([])
    axios
      .get(`https://api.github.com/search/repositories?q=${repo}`)
      .then((res) => {
        setLoading(false);
        setList(res.data.items);
        setRepo("");
        console.log('here')
      })
      .catch((err) => {
        console.log(err);
      });
  
  };

  return (
    <div >
      <div className="form-container">
        <form className="form" onSubmit={getList}>
          <input value={repo} onChange={(e) => setRepo(e.target.value)} />
          <button className="form-btn" type="submit">Find Repo</button>
        </form>
      {isloading && <p>Loading...</p>}
      {list.length !== 0  && (
        <div >
          <h2>Repos</h2>
          <CardList list={list} />
        </div>
      )}
      </div>
    </div>
  );
}
export default App;
