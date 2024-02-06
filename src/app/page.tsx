"use client";
import Header from "@/components/Header/Header";
import Search from "@/components/Search/Search";
import RestaurantsListPage from "@/pages/restaurants/RestaurantsPageList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Home() {
  return (
    <Router>
      <main className="">
        <Header />
        <Search />
        <Routes>
          <Route path="/restaurants" element={<RestaurantsListPage />} />
          <Route path="/restaurants/:name" element={<RestaurantsListPage />} />
        </Routes>
      </main>
    </Router>
  );
}
