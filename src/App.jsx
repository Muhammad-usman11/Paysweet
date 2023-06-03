import React from "react";
import { Route, Routes } from "react-router-dom";

import Userlogin from "./components/Userlogin";
import UserSignUp from "./components/UserSignUp";
import Invoices from "./components/Invoices";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";
import { useStoreRehydrated } from "easy-peasy";
import NewInvoice from "./components/NewInvoice";

const App = () => {
  const isRehydrated = useStoreRehydrated();
  const location = useLocation();
  const checkLoginPages = () => {
    if (location.pathname === "/signup" || location.pathname === "/login") {
      return false;
    } else {
      return true;
    }
  };
  console.log(checkLoginPages());
  return (
    <>
      {isRehydrated && (
        <>
          
          {checkLoginPages() === true ? <Navbar /> : ""}
          <Routes>
            <Route path="/" element={<Userlogin />} />
            <Route exact path="/login" element={<Userlogin />} />
            <Route exact path="/signup" element={<UserSignUp />} />
            <Route exact path="/invoices" element={<Invoices />} />
            <Route exact path="/newinvoice" element={ <NewInvoice/> } />
          </Routes>
          {checkLoginPages() === true ? <Footer /> : ""}
        </>
      )}
    </>
  );
};

export default App;
