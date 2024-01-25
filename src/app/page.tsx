"use client";
import Header from "@/components/Header/Header";
import RestaurantsListPage from "@/pages/restaurantes/RestaurantsPageList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Home() {
  return (
    <Router>
      <main className="">
        <Header />
        <Routes>
          <Route path="/restaurantes" element={<RestaurantsListPage />} />
        </Routes>
      </main>
    </Router>
  );
}
