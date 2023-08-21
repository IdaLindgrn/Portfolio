import { MobileNavigation } from "./MobileNavigation";
import { Navigation } from "./Navigation";

export const Navbar = () => {
  return (
    <div className="navbar">
      <MobileNavigation />
      <Navigation />
    </div>
  );
};
