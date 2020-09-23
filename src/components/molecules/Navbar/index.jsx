import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";

import pokeball from "../../../assets/images/pokeball.png";

const PokeballImg = styled.img`
  height: 55px;
  width: 55px;
  object-fit: cover;
`;

const CustomLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const SiteNameSpan = styled.span`
  margin-left: 12px;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ marginBottom: "100px" }}>
      <AppBar position="static" style={{ background: "#3d7dca" }}>
        <Toolbar>
          <CustomLink to="/">
            <PokeballImg src={pokeball} alt="Pokeball" />
          </CustomLink>
          <Typography variant="h6" className={classes.title}>
            <CustomLink to="/">
              <SiteNameSpan>Pokémon Catcher</SiteNameSpan>
            </CustomLink>
          </Typography>
          <Button color="inherit">
            <CustomLink to="/">Pokédex</CustomLink>
          </Button>
          <Button color="inherit">
            <CustomLink to="/wild-encounter">Route 102</CustomLink>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
