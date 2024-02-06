"use client";

import RestaurantDetails from "@/components/RestaurantDetails/RestaurantDetails";
import useApi from "@/hooks/useApi";
import Restaurant from "@/interfaces/interfaces";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

const RestaurantDetailsPage = (): JSX.Element => {
  const [restaurant, setRestaurant] = useState({} as Restaurant);
  const { getRestaurantByName } = useApi();
  const { name } = useParams();

  useEffect(() => {
    (async () => {
      const restaurant = await getRestaurantByName(name as string);
      setRestaurant(restaurant);
    })();
  }, [getRestaurantByName, name]);

  return (
    <>
      <RestaurantDetails restaurant={restaurant} />
    </>
  );
};

export default RestaurantDetailsPage;
