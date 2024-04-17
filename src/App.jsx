import ProfileCard from "@/sections/ProfileCard";
import ProfileDetails from "@/sections/ProfileDetails";
import Projects from "@/sections/Projects";
import Stacks from "@/sections/Stacks";
import Contact from "@/sections/Contact";

import "./App.css";

function App() {
  return (
    <div className="flex flex-col gap-20 md:gap-40">
      <ProfileCard />
      <ProfileDetails />
      <Projects />
      <Stacks />
      <Contact />
    </div>
  );
}

export default App;
