"use client";
import styled from "styled-components";
import { MdHome } from "react-icons/md";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import ShepLink from "../lib/fluff/Link";

export default function NavBar() {
  const desktopNavBar = (
    <DesktopNavBar>
      <IconLinksWrapper>
        <ShepLink href="/">
          <MdHome size="2.5rem" color="white" />
        </ShepLink>
        <ShepLink href="https://github.com/nShepard204" openInNewTab>
          <FaGithub size="2rem" color="white" />
        </ShepLink>
        <ShepLink href="https://www.linkedin.com/in/nicshepard/" openInNewTab>
          <FaLinkedin size="2rem" color="white" />
        </ShepLink>
      </IconLinksWrapper>

      <SiteNavWrapper>
        <ShepLink
          href="/about"
          typography={{
            variant: "h6",
            color: "white",
          }}
        >
          About
        </ShepLink>
      </SiteNavWrapper>
    </DesktopNavBar>
  );

  return desktopNavBar;
}

const IconLinksWrapper = styled(motion.div)`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const SiteNavWrapper = styled(motion.div)``;

const DesktopNavBar = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  justify-content: space-between;
`;
