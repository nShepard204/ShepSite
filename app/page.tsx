"use client";
import { Button, Container, Typography } from "@mui/material";
import styled from "styled-components";
import HomeImage from "./ui/home-img";
import { type Variants, motion } from "framer-motion";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
import NavBar from "./ui/navbar";

export default function Home() {
  const theme = useTheme();
  const introAnimation: Variants = {
    init: {
      opacity: 0,
    },
    temp: {
      opacity: 1,
      transition: {
        duration: 2.5,
        delayChildren: 0.3,
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <>
      <NavBar />
      <Container
        maxWidth="md"
        css={css`
          padding: 2.5rem;
          overflow: hidden;
        `}
        disableGutters
      >
        <ContentWrapper variants={introAnimation} initial="init" animate="temp">
          <HomeImage />
          <IntroTextWrapper
            variants={introAnimation}
            css={css`
              display: flex;
              height: fit-content;
            `}
          >
            <Typography
              variant={theme.breakpoints.up("md") ? "h3" : "h2"}
              css={css`
                text-align: center;
              `}
            >
              Hello! I&apos;m Nic Shepard, but you can call me Shep.
            </Typography>
          </IntroTextWrapper>
          <motion.div variants={introAnimation}>
            <Typography
              variant="h5"
              fontWeight={300}
              css={css`
                text-align: center;
              `}
            >
              I&apos;m a new software engineer focusing on full stack
              development and expanding my horizons
            </Typography>
          </motion.div>
          <Button variant="outlined">About Me</Button>
        </ContentWrapper>
      </Container>
    </>
  );
}

const ContentWrapper = styled(motion.div)`
  display: grid;
  grid-template-rows: 1fr auto auto;
  row-gap: 2.5rem;
`;

const IntroTextWrapper = styled(motion.div)`
  display: flex;
  height: fit-content;
`;
