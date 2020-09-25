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
    <Stats elevation={1}>
      <TableContainer>
        <Table aria-label="Pokemon Stats">
          <TableHead>
            <TableRow>
              <TableCell aria-label="Health Points">HP</TableCell>
              <TableCell aria-label="Attack">Attack</TableCell>
              <TableCell aria-label="Defense">Defense</TableCell>
              <TableCell aria-label="Special Attack">Sp. Attack</TableCell>
              <TableCell aria-label="Special Defense">Sp. Defense</TableCell>
              <TableCell aria-label="Speed">Speed</TableCell>
              <TableCell aria-label="Total">Total</TableCell>
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
