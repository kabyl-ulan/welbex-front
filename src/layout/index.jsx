import React from "react";

//local dependencies
import { Footer, Header } from "../components";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
