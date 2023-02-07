import React from "react";
import "./cardlist.css";

function CardList({ list }) {
  const renderRepo = list.map((repo) => {
    return (
      <div key={repo.id} className="card-container">
        <div className="name-img-container">
          <h2>{repo.name}</h2>
          <img  className="repo-img" src={repo.owner.avatar_url} alt=''/>
        </div >
          <p>
            <u>Description:</u> {repo.description}
          </p>
          <a href={repo.url}>Repo Link</a>
          <div className="link-lang-container">
            <p>Repo Language: {repo.language}</p>
            <p>Forks count: {repo.forks}</p>{" "}
          </div>
      </div>
    );
  });

  return <div>{renderRepo}</div>;
}

export default CardList;
