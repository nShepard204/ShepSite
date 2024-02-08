"use client";
import { Button, Container, Typography } from "@mui/material";
import styled from "styled-components";
import HomeImage from "./ui/home-img";
import { type Variants, motion } from "framer-motion";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";

export default function Home() {
  const theme = useTheme();
  const introAnimation: Variants = {
    init: {
      opacity: 0,
    },
    temp: {
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 1,
      },
    },
  };

  return (
    <Container
      maxWidth="md"
      css={css`
        padding: 2rem;
      `}
      disableGutters
    >
      <ContentWrapper variants={introAnimation} initial="init" animate="temp">
        <HomeImage />
        <motion.div variants={introAnimation}>
          <Typography
            variant={theme.breakpoints.up("md") ? "h3" : "h2"}
            css={css`
              text-align: center;
            `}
          >
            Hello! I&apos;m Nic Shepard, but you can call me Shep.
          </Typography>
        </motion.div>

        <Typography
          variant="h5"
          fontWeight={300}
          css={css`
            text-align: center;
          `}
        >
          I&apos;m a new software engineer focusing on full stack development
          and expanding my horizons
        </Typography>
        <Button variant="outlined">About Me</Button>
      </ContentWrapper>
    </Container>
  );
}

const ContentWrapper = styled(motion.div)`
  display: grid;
  grid-template-rows: 1fr 1fr auto;
  row-gap: 2rem;
`;
