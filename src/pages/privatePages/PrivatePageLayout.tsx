import AdminContainer from "@components/adminContainer/AdminContainer";
import Spinner from "@components/spinner/Spinner";
import { UserRole } from "@customTypes/user";
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

  // Screen Roles

  useEffect(() => {
    switch (user?.role) {
      case UserRole.admin:
      case UserRole.staff:
      case UserRole.superAdmin:
      case UserRole.editor:
        // User has a valid role, no action needed
        break;
      default:
        // Redirect to the index page if the role is invalid
        navigate(paths.Index);
        break;
    }
  }, [user]);

  if (authLoading) {
    return <Spinner />;
  }

  if (isAuthenticated) {
    return (
      <AdminContainer>
        <Outlet />
      </AdminContainer>
    );
  } 
};

export default PrivatePageLayout;
