"use client";
import React from "react";
import Image from "next/image";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";

const Header = (): JSX.Element => {
  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: grey[300],
        paddingLeft: 6,
        paddingRight: 2,
        width: "100%",
      }}
      style={{
        background: "linear-gradient(45deg, #4B0082 30%, #8A2BE2 90%)",
        borderRadius: 3,
        boxShadow: "0 3px 5px 2px rgba(75, 0, 130, 0.3)",
        color: "white",
        padding: "0 50px",
      }}
    >
      <header>
        <nav aria-label="Global">
          <a>
            <Image
              src="https://resos.com/wp-content/uploads/2019/08/resOS-logo-light.svg"
              alt="resOs logo"
              width={100}
              height={100}
              priority
            />
          </a>
        </nav>
      </header>
    </Box>
  );
};

export default Header;
