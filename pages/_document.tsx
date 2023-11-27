import { Html, Head, Main, NextScript } from "next/document";
import { useTheme, Container } from "@mui/material";

export default function Document() {
  const theme = useTheme();
  return (
    <Html lang="en">
      <Head />
      <body style={{ margin: 0, backgroundColor: "" }}>
        <Container
          sx={{ bgcolor: "background.default", minHeight: "100vh" }}
          maxWidth="xl"
        >
          {/* Header with change of color possiblity */}
          <Main />
          <NextScript />
        </Container>
      </body>
    </Html>
  );
}
