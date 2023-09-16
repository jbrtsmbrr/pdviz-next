import Navigation from "./Navigation";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-screen flex gap-2">
    <Navigation />
    {children}
  </div>
}

export default HomeLayout;