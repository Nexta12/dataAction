

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message }) => {
  const encodedMessage = message ? encodeURIComponent(message) : "";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center px-4 py-2 rounded-lg  fixed top-[90vh] xl:top-[80vh] right-0"
    >
     <img src="/assets/whatsappicon.png" alt="whatsapp" className="w-14 lg:w-20 transition-all duration-300 ease-in-out hover:scale-105 animate-pulse  " />
    </a>
  );
};

export default WhatsAppButton;