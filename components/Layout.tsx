import { Footer, Navbar } from "./ui";

interface LayoutProp {
  component: React.ReactNode;
  location?: string;
}

export const Layout: React.FC<LayoutProp> = ({ component, location }) => {
  return (
    <div className="flex flex-col  w-screen">
      {/* navbar */}
      <div className="z-[2]">
        <Navbar location={location} />
      </div>
      {/* content */}
      <div>{component}</div>
      {/* footer */}
      <div>
        <Footer location={location} />
      </div>
    </div>
  );
};
