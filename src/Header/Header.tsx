import { Box } from "@mui/material";
import React from "react";
import { grey, purple } from "@mui/material/colors";
import Image from "next/image";

const Header = (): JSX.Element => {
  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: grey[300],
        paddingLeft: 2,
        paddingRight: 2,
        backgroundColor: purple[900],
        width: "100%",
      }}
    >
      {" "}
      <header>
        <nav aria-label="Global">
          <a>
            <Image
              src="https://resos.com/wp-content/uploads/2019/08/resOS-logo-light.svg"
              alt="resOs logo"
              width={100}
              height={100}
            />
          </a>
        </nav>
      </header>
    </Box>
  );
};

export default Header;
