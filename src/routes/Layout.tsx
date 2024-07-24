import Header from "../presentations/Header";
import Footer from "../presentations/Footer";
import { Outlet } from "react-router-dom";
import ScreenWrapper from "../presentations/ScreenWrapper";

const Layout = () => {
  return (
    <ScreenWrapper>
      <Header />
      <Outlet />
      <Footer />
    </ScreenWrapper>
  );
};

export default Layout;
