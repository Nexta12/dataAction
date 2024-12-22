import { Routes, Route } from "react-router-dom";
import { paths } from "./paths";
import PublicPageLayout from "@pages/publicPages/PublicPageLayout";
import Homepage from "@pages/publicPages/homePage/Homepage";
import AboutUs from "@pages/publicPages/aboutUs/AboutUs";
import Training from "@pages/publicPages/training/Training";
import Consultation from "@pages/publicPages/consultation/ConsultationForm";
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
import Courses from "@pages/privatePages/courses/Courses";
import AddNewCourse from "@pages/privatePages/courses/AddNew";
import SingleCourseRegister from "@pages/publicPages/training/components/SingleCourseRegister";
import Success from "@pages/publicPages/payment/Success";
import Cancelled from "@pages/publicPages/payment/Cancelled";
import TrainingSignUps from "@pages/privatePages/trainingSignUps/TrainingSignUps";
import ConsultationTable from "@pages/privatePages/consultationRequests/ConsultationTable";
import MessagesList from "@pages/privatePages/messages/MessagesList";
import PaymentTable from "@pages/privatePages/paymentsList/PaymentTable";
import AllProjects from "@pages/privatePages/projects/AllProjects";
import AddNewProject from "@pages/privatePages/projects/AddNewProject";
import SingleMessage from "@pages/privatePages/messages/SingleMessage";
import Projects from "@pages/publicPages/projects/Projects";
import ProjectSignup from "@pages/publicPages/projects/components/ProjectSignup";
import ProjectSalesTable from "@pages/privatePages/projects/ProjectSalesTable";

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
      <Route path={paths.Marketplace} element={<Projects />} />
      <Route path={`${paths.projectSignup}/:slug`} element={<ProjectSignup />} />
      <Route path={paths.Contact} element={<ContactUs />} />
      <Route path={`${paths.payment}/:id`} element={<Payment />} />
      <Route path={paths.paymentSuccess} element={<Success />} />
      <Route path={paths.paymentCancelled} element={<Cancelled />} />
      <Route
        path={`${paths.courseDetails}/:slug`}
        element={<SingleCourseDetail />}
      />
      <Route
        path={`${paths.Register}/:slug`}
        element={<SingleCourseRegister />}
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
      <Route path={paths.courses} element={<Courses />} />
      <Route path={paths.addNewCourse} element={<AddNewCourse />} />
      <Route path={paths.traininRequests} element={<TrainingSignUps />} />
      <Route
        path={paths.consultationRequests}
        element={<ConsultationTable />}
      />
      <Route path={paths.contactMessages} element={<MessagesList />} />
      <Route path={`${paths.contactMessages}/:id`} element={<SingleMessage />}/>
      <Route path={paths.paymentList} element={<PaymentTable />} />
      <Route path={paths.projectsList} element={<AllProjects />} />
      <Route path={paths.addNewProduct} element={<AddNewProject />} />
      <Route path={paths.projectPurches} element={<ProjectSalesTable />} />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
);
