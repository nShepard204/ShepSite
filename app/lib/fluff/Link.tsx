import Link from "next/link";
import { Link as MUILink } from "@mui/material";
import { type Url } from "next/dist/shared/lib/router/router";
import { TypographyProps } from "@mui/material";

interface ShepLinkProps {
  href: string | Url;
  children?: React.ReactNode;
  openInNewTab?: boolean;
  typography?: TypographyProps;
}

export default function ShepLink({
  href,
  openInNewTab,
  children,
  typography,
}: ShepLinkProps) {
  return (
    <MUILink
      href={href}
      component={Link}
      target={openInNewTab ? "_blank" : undefined}
      underline="none"
      variant={typography ? typography.variant : undefined}
      rel={openInNewTab ? "noopener" : undefined}
      color={typography ? typography.color : undefined}
    >
      {children}
    </MUILink>
  );
}
