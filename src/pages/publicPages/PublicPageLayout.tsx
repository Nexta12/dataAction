import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import WhatsAppButton from "@components/whatsappChat/Whatsapp";
import { Outlet } from "react-router-dom";

const PublicPageLayout = () => {
  return (
    <div className="relative">
      <Header />
      <Outlet />
      <WhatsAppButton
        phoneNumber={import.meta.env.WhatsappLine}
        message="Hello! I'd like to chat with you."
      />
      <Footer />
    </div>
  );
};

export default PublicPageLayout;
