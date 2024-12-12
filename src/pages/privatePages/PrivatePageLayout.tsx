import AdminContainer from "@components/adminContainer/AdminContainer";
import { paths } from "@routes/paths";
import useAuthStore from "@store/authStore";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const PrivatePageLayout = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, validateAuth } = useAuthStore();
  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
    const verifyAuth = async () => {
      setAuthLoading(true);
      try {
        await validateAuth(); // Ensure validateAuth works properly
      } finally {
        setAuthLoading(false);
      }
    };

    verifyAuth();
  }, [validateAuth]);

  useEffect(() => {
    if (!user && !isAuthenticated) {
      navigate(paths.Index); //
    } else if (user && !isAuthenticated) {
      setAuthLoading(true);
    }
  }, [user, isAuthenticated, navigate]);

  if (authLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return (
      <AdminContainer>
        <Outlet />
      </AdminContainer>
    );
  }else{
    return null
  }
};

export default PrivatePageLayout;
