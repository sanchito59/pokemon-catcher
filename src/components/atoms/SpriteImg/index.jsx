import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Box, Typography } from "@material-ui/core";

export const CaptionBox = styled(Box)`
  text-align: center;
`;

const Sprite = styled.img`
  width: 96px;
  height: 96px;
  object-fit: cover;
`;

const SpriteImg = ({ img, alt, caption }) => {
  return (
    <Box>
      <Box>
        <Sprite src={img} alt={alt} />
      </Box>
      <CaptionBox>
        <Typography variant="caption">{caption}</Typography>
      </CaptionBox>
    </Box>
  );
};

SpriteImg.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default SpriteImg;
