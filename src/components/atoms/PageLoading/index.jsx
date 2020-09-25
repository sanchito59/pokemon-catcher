import React from "react";
import { Container, CircularProgress } from "@material-ui/core";

const PageLoading = () => {
  return (
    <Container
      maxWidth="sm"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <CircularProgress size="5rem" />
    </Container>
  );
};

export default PageLoading;
