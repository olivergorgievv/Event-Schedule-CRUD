import React from "react";
import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageComponent";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const error = useRouteError();

  let title = "An Error occured";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 400) {
    title = "not Found";
    message = "afafafaafaffafafaafafa";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
