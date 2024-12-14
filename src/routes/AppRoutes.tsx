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
import Login from "@pages/publicPages/login/Login";
import Users from "@pages/privatePages/users/Users";
import AddUser from "@pages/privatePages/users/AddUser";
import EditUser from "@pages/privatePages/users/EditUser";
import AddNewService from "@pages/privatePages/services/AddNew";
import EditService from "@pages/privatePages/services/EditService";
import Services from "@pages/privatePages/services/Services";

export const AppRoutes: React.FC = () => (
  <Routes>
    <Route path={paths.Index} element={<PublicPageLayout />}>
      <Route path={paths.Index} element={<Homepage />} />
      <Route path={paths.About} element={<AboutUs />} />
      <Route path={paths.Training} element={<Training />} />
      <Route path={paths.Register} element={<Register />} />
      <Route path={paths.Login} element={<Login />} />
      <Route path={paths.Consultation} element={<Consultation />} />
      <Route path={paths.ConsultationPage} element={<ConsultationPage />} />
      <Route path={paths.Marketplace} element={<Marketplace />} />
      <Route path={paths.Contact} element={<ContactUs />} />
      <Route path={`${paths.payment}/:id`} element={<Payment />} />
      <Route
        path={`${paths.courseDetails}/:slug`}
        element={<SingleCourseDetail />}
      />
    </Route>
    <Route path={paths.adminIndex} element={<PrivatePageLayout />}>
      <Route path={`${paths.adminIndex}/dashboard`} element={<Dashboard />} />
      <Route path={paths.users} element={<Users />} />
      <Route path={paths.addNewAdmin} element={<AddUser />} />
      <Route path={`${paths.editAdmin}/:id`} element={<EditUser />} />
      <Route path={paths.services} element={<Services />} />
      <Route path={paths.addNewService} element={<AddNewService />} />
      <Route path={`${paths.editService}/:id`} element={<EditService />} />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
);
