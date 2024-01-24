interface Restaurant {
  name: string;
  address: string;
  tags: string[];
  status: boolean;
  createAt: string;
  restaurantHours: { open: string; close: string }[];
}

export default Restaurant;
