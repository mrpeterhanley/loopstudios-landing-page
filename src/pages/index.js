import * as React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "../components/Header/Header";
import Info from "../components/Main/Info";
import Cards from "../components/Main/Cards";
import Footer from "../components/Footer/Footer";

const IndexPage = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Info />
      <Cards />
      <Footer />
    </>
  )
}

export default IndexPage;
