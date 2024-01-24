import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { AppBar, CssBaseline, Stack, ThemeProvider, createTheme } from "@mui/material";
import { TRPCReactProvider } from "~/trpc/react";
import HeadBar from "./_components/Appbar";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Pokedex",
  description: "Find Pokemons from the huge database",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body className={inter.className}>
        <TRPCReactProvider>
          <CssBaseline />
          <Stack alignItems="center">
          <HeadBar/>
          {children}
          </Stack>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
