const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#11173b] text-center py-5 text-white text-xs">
      COPYRIGHT ©{currentYear} ALL RIGHTS RESERVED
    </footer>
  );
};

export default Footer;
