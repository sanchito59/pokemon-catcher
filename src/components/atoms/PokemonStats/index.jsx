import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const Stats = styled(Paper)`
  margin-top: 20px;
`;

const PokemonStats = ({ stats }) => {
  const combineStats = (key) => {
    return stats.reduce((a, b) => a + (b[key] || 0), 0);
  };

  return (
    <Stats elevation={0}>
      <TableContainer>
        <Table aria-label="Work Experience Table">
          <TableHead>
            <TableRow>
              <TableCell>HP</TableCell>
              <TableCell>Attack</TableCell>
              <TableCell>Defense</TableCell>
              <TableCell>Sp. Attack</TableCell>
              <TableCell>Sp. Defense</TableCell>
              <TableCell>Speed</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stats.map((stat) => {
              return (
                <TableCell component="th" scope="row" align="right">
                  {stat.base_stat}
                </TableCell>
              );
            })}
            <TableCell component="th" scope="row" align="right">
              {combineStats("base_stat")}
            </TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </Stats>
  );
};

PokemonStats.propTypes = {
  stats: PropTypes.object.isRequired,
};

export default PokemonStats;
