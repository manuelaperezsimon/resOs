"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import FoodBankOutlinedIcon from "@mui/icons-material/FoodBankOutlined";
import { purple } from "@mui/material/colors";
import Restaurant from "@/interfaces/interfaces";

interface RestaurantDetailProps {
  restaurant: Restaurant;
  width?: string;
}

const RestaurantDetails = ({
  restaurant,
  width,
}: RestaurantDetailProps): JSX.Element => {
  return (
    <Grid item xs={4} md={4} sx={{ padding: 0 }}>
      <Card variant="outlined" sx={{ width: width }}>
        <React.Fragment>
          <CardHeader
            title={restaurant.name}
            subheader={
              restaurant.status ? (
                <Chip
                  size="small"
                  label="Open"
                  variant="outlined"
                  sx={{
                    borderColor: "green",
                    color: "green",
                    marginTop: 1,
                  }}
                />
              ) : (
                <Chip
                  label="Close"
                  variant="outlined"
                  sx={{
                    borderColor: "red",
                    color: "red",
                    marginTop: 1,
                  }}
                />
              )
            }
          />
          <CardContent>
            <Typography sx={{ mb: 3 }} color="text.secondary">
              {restaurant?.tags?.length > 0 && (
                <span>
                  {restaurant.tags.map((tag) => (
                    <Chip
                      size="small"
                      label={tag}
                      variant="outlined"
                      sx={{
                        borderColor: purple[900],
                        color: purple[900],
                        marginRight: 1,
                      }}
                      key={tag}
                    />
                  ))}
                </span>
              )}
            </Typography>
            <Typography sx={{ display: "flex", mb: 2 }}>
              <LocationOnOutlinedIcon
                style={{ marginRight: 10 }}
                fontSize="medium"
              />{" "}
              {restaurant.address}
            </Typography>
            <Typography sx={{ display: "flex", alignItems: "end", mb: 2 }}>
              {restaurant?.restaurantHours?.map((hours, index) => (
                <div
                  key={index}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <AccessTimeIcon
                    style={{ marginRight: 10 }}
                    fontSize="medium"
                  />
                  <span>
                    {hours.open}hs to {hours.close}hs
                  </span>
                </div>
              ))}
            </Typography>
            <Typography sx={{ mb: 2 }}>
              <div style={{ display: "flex" }}>
                <FoodBankOutlinedIcon
                  style={{ marginRight: 10 }}
                  fontSize="medium"
                />
                <span>Since {restaurant.createAt}</span>
              </div>
            </Typography>
          </CardContent>
        </React.Fragment>
      </Card>
    </Grid>
  );
};

export default RestaurantDetails;
