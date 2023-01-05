import AboutMe from "./components/AboutMe";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import LanguageSection from "./components/LanguageSection";
import LatestProjects from "./components/LatestProjects";
import OtherProjects from "./components/OtherProjects";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <>
      <Header />
      <div class="container sections-wrapper py-5">
        <div class="row">
          <div class="primary col-lg-8 col-12">
            <AboutMe />
            <ExperienceSection />
            <LatestProjects />
          </div>
          <div class="secondary col-lg-4 col-12">
            <InfoSection />
            <SkillsSection />
            <EducationSection />
            <LanguageSection />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
