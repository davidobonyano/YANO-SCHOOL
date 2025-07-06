import { NavLink } from "react-router-dom";
import SchoolHistory from "../pages/Aboutt/schoolHistory";
import Mission from "../pages/Mission";
import AchievementsTimeline from "../pages/Aboutt/AchievementsTimeline";
import LeadershipTeam from "../pages/Aboutt/LeadershipTeam";
import Uniform from "../pages/Aboutt/Uniform";
function About(){
    return(
        <div className="About">
           

 
  <section id="history">
    <SchoolHistory />
  </section>


  <section id="mission-vision">
      <Mission />
  </section>

  {/* 3. Timeline of Key Milestones */}
  <section id="timeline">
    <AchievementsTimeline />
  </section>

  {/* 4. Leadership & Team Profiles */}
  <section id="leadership">
   <LeadershipTeam />
  </section>

  <section>
    <Uniform />
  </section>


  <div className="text-center flex flex-col items-center justify-center py-12">
            <p className="text-lg text-gray-700">Interested in Enrolling?</p>
            <NavLink
              to="/admissions"
              className="inline-block mt-4 border border-red-400 px-6 py-3 rounded-3xl text-black hover:bg-red-400 hover:text-white transition duration-300"
            >
              Visit Admissions Page →
            </NavLink>
          </div>



      </div>
    );
}
export default About