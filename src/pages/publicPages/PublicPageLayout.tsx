import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import { Outlet } from "react-router-dom";

const PublicPageLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default PublicPageLayout;
