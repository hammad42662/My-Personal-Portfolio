import About from "./About";
import Milestones from "./Milestones";
import Skills from "./Skills";
export default function TabContent({ activeTab }) {
  return (
    <>
      {activeTab === "about" && (
        <div className="w-full h-full block mt-8">
          <h4 className="text-lg font-bold text-gray-600">About</h4>
          <About />
        </div>
      )}
      {activeTab === "tools" && (
        <div className="w-full h-full block mt-8">
          <h4 className="text-lg font-bold text-gray-600">Tools</h4>
          <Skills />
        </div>
      )}
      {activeTab === "education" && (
        <div className="w-full h-full block mt-8">
          <h4 className="text-lg font-bold text-gray-600">
            My Personal Journey
          </h4>
          <Milestones />
        </div>
      )}
    </>
  );
}
