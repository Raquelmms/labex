import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import HomePage from "../pages/HomePage";
import ListTripsPage from "../pages/ListTripsPage";
import LoginPage from "../pages/LoginPage";
import ErrorPage from "../pages/ErrorPage";
import AdminHomePage from "../pages/AdminHomePage";
import CreateTripPage from "../pages/CreateTripPage";
import TripDetailsPage from "../pages/TripDetailsPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<HomePage />} />

        <Route exact path={"/trips/list"} element={<ListTripsPage />} />

        <Route
          exact
          path={"/trips/application"}
          element={<ApplicationFormPage />}
        />
        <Route exact path={"/login"} element={<LoginPage />} />

        <Route exact path={"/admin/trips/list"} element={<AdminHomePage />} />

        <Route
          exact
          path={"/admin/trips/create"}
          element={<CreateTripPage />}
        />

        <Route exact path={"admin/trips/:id"} element={<TripDetailsPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
