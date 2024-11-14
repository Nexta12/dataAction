import { Routes, Route } from "react-router-dom";
import { paths } from "./paths";
import PublicPageLayout from "@pages/publicPages/PublicPageLayout";
import Homepage from "@pages/publicPages/homePage/Homepage";
import AboutUs from "@pages/publicPages/aboutUs/AboutUs";
import Training from "@pages/publicPages/training/Training";
import Consultation from "@pages/publicPages/consultation/Consultation";
import Marketplace from "@pages/publicPages/marketplace/Marketplace";
import ContactUs from "@pages/publicPages/contactUs/ContactUs";
import NotFound from "@pages/errors/NotFound";

export const AppRoutes: React.FC = () => (
  <Routes>
    <Route path={paths.Index} element={<PublicPageLayout />}>
      <Route path={paths.Index} element={<Homepage />} />
      <Route path={paths.About} element={<AboutUs />} />
      <Route path={paths.Training} element={<Training />} />
      <Route path={paths.Consultation} element={<Consultation />} />
      <Route path={paths.Marketplace} element={<Marketplace />} />
      <Route path={paths.Contact} element={<ContactUs />} />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
);
