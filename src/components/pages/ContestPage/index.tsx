import React from "react";
import { useParams } from "react-router-dom";

type Params = {
  slug: string;
};

const ContestPage = () => {
  const { slug } = useParams<Params>();
  return <div>Contest "{slug}" info</div>;
};

export default ContestPage;
