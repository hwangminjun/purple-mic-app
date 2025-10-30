import { ReactNode, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Home, Search, Mic, FileText, LayoutDashboard } from "lucide-react";
import logo from "@/assets/logo.png";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { to: "/", icon: Home, label: "홈" },
    { to: "/map", icon: Search, label: "간편검색" },
    { to: "/dashboard", icon: LayoutDashboard, label: "대시보드" },
  ];

  const voiceItem = { to: "/voice", icon: Mic, label: "음성" };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Top Bar */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-[hsl(var(--nav-background))] border-b border-[hsl(var(--nav-border))] z-40 flex items-center px-6">
        <img src={logo} alt="Logo" className="h-10 w-10" />
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-16 pb-24 overflow-auto">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 h-20 bg-[hsl(var(--nav-background))] border-t border-[hsl(var(--nav-border))] z-40">
        <div className="flex items-center h-full relative">
          {/* Voice button - floating above */}
          <NavLink
            to={voiceItem.to}
            className={({ isActive }) =>
              `absolute left-1/2 -translate-x-1/2 -top-16 flex flex-col items-center justify-center w-16 h-16 rounded-full transition-all ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                  : "bg-primary text-primary-foreground shadow-md"
              }`
            }
          >
            <voiceItem.icon className="w-7 h-7" />
          </NavLink>

          {/* Other nav items - equal spacing */}
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex-1 flex flex-col items-center justify-center gap-1 py-2 transition-colors ${
                    isActive ? "text-[hsl(var(--nav-item-active))]" : "text-[hsl(var(--nav-item))]"
                  }`
                }
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs font-medium">{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
