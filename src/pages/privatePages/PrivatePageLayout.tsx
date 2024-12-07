import AdminContainer from "@components/adminContainer/AdminContainer";
import { Outlet } from "react-router-dom";


const PrivatePageLayout = () => {
  return (
    <div>
       <AdminContainer>

        <Outlet/>

       </AdminContainer>
    </div>
  );
};

export default PrivatePageLayout;
