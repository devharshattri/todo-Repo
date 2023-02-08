import React from "react";
import {
  CardListContainer,
  LinkLangContainer,
  NameImgContainer,
  RepoImg,
} from "./CardList.style";

function CardList({ list }) {
  const renderRepo = list.map((repo) => {
    return (
      <CardListContainer key={repo.id}>
        <NameImgContainer>
          <h2>{repo.name}</h2>
          <RepoImg src={repo.owner.avatar_url} alt="" />
        </NameImgContainer>
        <p>
          <u>Description:</u> {repo.description}
        </p>
        <a href={repo.url}>Repo Link</a>
        <LinkLangContainer>
          <p>Repo Language: {repo.language}</p>
          <p>Forks count: {repo.forks}</p>{" "}
        </LinkLangContainer>
      </CardListContainer>
    );
  });

  return <div>{renderRepo}</div>;
}

export default CardList;
