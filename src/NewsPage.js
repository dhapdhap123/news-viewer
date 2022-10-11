import React from "react";
import { useParams } from "../node_modules/react-router-dom/dist/index";
import Categories from "./components/Categories";
import NewsList from "./components/NewsList";

const NewsPage = () => {
  const params = useParams();
  const category = params.category;
  return (
    <>
      <Categories />
      {category === undefined ? (
        <h3>위에서 카테고리를 골라주세요.</h3>
      ) : (
        <NewsList category={category} />
      )}
    </>
  );
};

export default NewsPage;
