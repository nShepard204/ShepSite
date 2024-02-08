import { motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import { css } from "@emotion/react";

export default function HomeImage() {
  return (
    <ImageWrapper>
      <ProfilePic
        src="/franky.webp"
        alt="Nic Shepard's Picture"
        width={250}
        height={250}
      />
    </ImageWrapper>
  );
}

const shadowSize = "0px 0px 5px 8px rgba(0, 0, 0, 0.75)";
const ProfilePic = styled(Image)`
  border-radius: 50%;
  -webkit-box-shadow: ${shadowSize};
  -moz-box-shadow: ${shadowSize};
  box-shadow: ${shadowSize};
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
