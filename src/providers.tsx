"use client";
import * as React from "react";
import { MantineProvider } from "@mantine/core";
import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "teal",
});
//======================================
export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      {children}
    </MantineProvider>
  );
};
