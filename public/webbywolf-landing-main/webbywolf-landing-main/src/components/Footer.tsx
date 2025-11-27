const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 text-sm text-muted-foreground">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {currentYear} WEBBYWOLF. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
