import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="border-b border-border sticky top-0 bg-background/98 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
        <a href="/" className="font-heading font-bold text-[20px] tracking-tight text-foreground">
          LOGO
        </a>
        
        <nav className="hidden md:flex gap-8 items-center">
          <button 
            onClick={() => scrollToSection('features')}
            className="text-[15px] text-foreground hover:text-primary transition-colors font-medium"
          >
            Lorem Ipsum ▾
          </button>
          <button 
            onClick={() => scrollToSection('quote')}
            className="text-[15px] text-foreground hover:text-primary transition-colors font-medium"
          >
            Lorem Ipsum ▾
          </button>
          <button 
            onClick={() => scrollToSection('quote')}
            className="text-[15px] text-foreground hover:text-primary transition-colors font-medium"
          >
            Lorem Ipsum ▾
          </button>
          <button 
            className="px-6 py-2 text-[15px] border border-border rounded-md hover:bg-muted transition-colors font-medium"
          >
            Sign In
          </button>
        </nav>
        
        <button 
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
};

export default Header;
