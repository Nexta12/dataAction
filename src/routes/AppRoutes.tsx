import { Routes, Route } from "react-router-dom";
import { paths } from "./paths";
import PublicPageLayout from "@pages/publicPages/PublicPageLayout";
import Homepage from "@pages/publicPages/homePage/Homepage";
import AboutUs from "@pages/publicPages/aboutUs/AboutUs";
import Training from "@pages/publicPages/training/Training";
import Consultation from "@pages/publicPages/consultation/ConsultationForm";
import Marketplace from "@pages/publicPages/marketplace/Marketplace";
import ContactUs from "@pages/publicPages/contactUs/ContactUs";
import NotFound from "@pages/errors/NotFound";
import SingleCourseDetail from "@pages/publicPages/courseDetailPage/SingleCourseDetail";
import Register from "@pages/publicPages/register/Register";
import Dashboard from "@pages/privatePages/dashboard/Dashboard";
import PrivatePageLayout from "@pages/privatePages/PrivatePageLayout";
import ConsultationPage from "@pages/publicPages/consultation/ConsultationPage";
import Payment from "@pages/publicPages/payment/Payment";

export const AppRoutes: React.FC = () => (
  <Routes>
    <Route path={paths.Index} element={<PublicPageLayout />}>
      <Route path={paths.Index} element={<Homepage />} />
      <Route path={paths.About} element={<AboutUs />} />
      <Route path={paths.Training} element={<Training />} />
      <Route path={paths.Register} element={<Register />} />
      <Route path={paths.Consultation} element={<Consultation />} />
      <Route path={paths.ConsultationPage} element={<ConsultationPage />} />
      <Route path={paths.Marketplace} element={<Marketplace />} />
      <Route path={paths.Contact} element={<ContactUs />} />
      <Route path={paths.payment} element={<Payment />} />
      <Route
        path={`${paths.courseDetails}/:slug`}
        element={<SingleCourseDetail />}
      />
    </Route>
    <Route path={paths.adminIndex} element={<PrivatePageLayout />}>
        <Route path={`${paths.adminIndex}/dashboard`} element={<Dashboard />} />
    </Route>


    <Route path="*" element={<NotFound />} />
  </Routes>
);
