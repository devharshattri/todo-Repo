import React from "react";
import {
  CardListContainer,
  LinkLangContainer,
  NameImgContainer,
  RepoImg,
} from "./CardList.style";

interface Props {
  list: []
}

interface RepoType{
  id: number,
  name: string,
  owner: {
    avatar_url: string
  },
  url: string,
  language: string,
  description: string,
  forks: number
}

function CardList({list }:Props) {
  const renderRepo = list.map((repo:RepoType) => {
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
