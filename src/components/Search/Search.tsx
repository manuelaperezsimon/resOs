"use client";
import React, { CSSProperties, useCallback, useState } from "react";
import useApi from "@/hooks/useApi";
import Restaurant from "@/interfaces/interfaces";
import RestaurantDetails from "../RestaurantDetails/RestaurantDetails";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { Alert, Box, Button, Input } from "@mui/material";
import { purple } from "@mui/material/colors";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  marginTop: "100px",
  borderColor: purple[900],
};

const url = process.env.REACT_APP_API_URL as string;

const Search = (): JSX.Element => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

  const { getRestaurantByName } = useApi();
  const navigate = useNavigate();

  const handleChange = (e) => setInputValue(e.target.value);

  const restaurantByName = useCallback(async () => {
    setErrorMessage("");
    setIsLoading(true);

    const result = await getRestaurantByName(
      `${url}restaurants/search?name=${inputValue}`
    );

    if (result) {
      setRestaurant(result as Restaurant);
      navigate(`/restaurants/${inputValue}`);
    } else {
      setErrorMessage("Is not possible to get the restaurant");
    }
    setIsLoading(false);
  }, [getRestaurantByName, inputValue]);

  return (
    <>
      <Box
        sx={{
          paddingLeft: 6,
          paddingRight: 2,
          marginTop: 5,
          display: "flex",
          gap: 8,
        }}
      >
        <Input placeholder="Search by name" onChange={handleChange} />
        <Button
          variant="outlined"
          sx={{
            borderColor: purple[900],
            color: purple[900],
          }}
          onClick={restaurantByName}
        >
          Search
        </Button>
      </Box>
      {restaurant !== null && inputValue && (
        <Box
          sx={{
            paddingLeft: 6,
            paddingRight: 2,
            marginTop: 5,
          }}
        >
          <RestaurantDetails
            restaurant={restaurant as Restaurant}
            width="35%"
          />
        </Box>
      )}

      {errorMessage && (
        <Alert
          severity="error"
          style={{
            width: "fit-content",
          }}
          sx={{ marginTop: 7 }}
        >
          {errorMessage}
        </Alert>
      )}

      {isLoading && (
        <ClipLoader
          color="red"
          loading={isLoading}
          cssOverride={override}
          size={100}
          data-testid="loader"
        />
      )}
    </>
  );
};

export default Search;
