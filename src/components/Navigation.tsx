import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = ["About", "Portfolio", "Skills", "Contact"];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (item: string) => {
    setActiveItem(item);
    if (item === "Portfolio") {
  navigate("/portfolio", { state: { skipScrollTop: false } });
    } else if (item === "About") {
  navigate("/about", { state: { skipScrollTop: false } });
    } else if (item === "Skills") {
  navigate("/skills", { state: { skipScrollTop: false } });
    } else if (item === "Contact") {
      const goScroll = () => {
        // Prefer scrolling to footer; fallback to #contact section if present
        const footer = document.getElementById("footer");
        if (footer) {
          footer.scrollIntoView({ behavior: "smooth" });
          return;
        }
        const contact = document.getElementById("contact");
        if (contact) {
          contact.scrollIntoView({ behavior: "smooth" });
        }
      };
      if (location.pathname !== "/") {
        navigate("/", { state: { skipScrollTop: true } });
        // Wait for route change and DOM paint
        setTimeout(goScroll, 50);
      } else {
        goScroll();
      }
    }
  };

  // Determine active item based on route or state
  const getActiveItem = () => {
    if (activeItem) return activeItem;
    if (location.pathname === "/portfolio") return "Portfolio";
    if (location.pathname === "/about") return "About";
    if (location.pathname === "/skills") return "Skills";
    return null;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-semibold text-lg text-foreground hover:text-primary transition-colors font-bodyCondensed tracking-wide">
            HOME
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                className={`transition-colors duration-200 font-bodyCondensed tracking-wide ${
                  getActiveItem() === item 
                    ? "text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => handleNavClick(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item}
                  className={`transition-colors duration-200 text-left font-bodyCondensed tracking-wide ${
                    getActiveItem() === item 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => {
                    handleNavClick(item);
                    setIsMenuOpen(false);
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;