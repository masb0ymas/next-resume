import { Container, Loader } from "@mantine/core";
import { ReactComponentLike } from "prop-types";
import React, { useState } from "react";
import PublicFooter from "./Footer";
import classes from "./main.module.css";

interface IProps {
  Component: ReactComponentLike;
}

const PublicContext = React.createContext<
  {
    stateLayoutLoading: [boolean, (loading: boolean) => void];
  } & any
>({
  stateLayoutLoading: [false, () => {}],
});

export default function PublicContainer(props: IProps) {
  const { Component } = props;

  const stateLayoutLoading = useState(false);
  const [isLayoutLoading] = stateLayoutLoading;

  return (
    <PublicContext.Provider value={{ stateLayoutLoading }}>
      {isLayoutLoading && <Loader />}

      <main className={classes.root_layout}>
        <Container className={classes.wrapper} size="xl">
          <Component {...props} />

          <PublicFooter />
        </Container>
      </main>
    </PublicContext.Provider>
  );
}
