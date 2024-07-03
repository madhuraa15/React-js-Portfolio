import React from "react";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              Madhura
              <span class="text-primary">Mhaske</span>
            </h1>
            <div class="subheading mb-5">
            Girls hostel,Bharati vidyapeeth sector-7,CBD belapur·
              <a href="mailto:name@email.com">madhuramhaske42@email.com</a>
            </div>
            <p class="lead mb-5">
            A hardworking Individual who would like to do things with perfection and within the deadline. I am a person with a strong foundation in information technology and coding skills and ability to perform well in a team. Passionate about coding and enjoy exploring more about Java. I am constantly seeking opportunities to expand my skillset, particularly in front-end, back-end Frameworks and databases. I also worked as an intern in multiple Startups. Apart from this, I am a person who is always Ready to develop new skills and grow knowledge by gaining practical experience. An intelligent Student Worker with distinguished knowledge of Web Development (HTML,CSS & JavaScript). Along with these, I actively participate in each and every extracurricular activities.
            </p>
            <div class="social-icons">
              <a class="social-icon" href="https://www.linkedin.com/in/madhura-mhaske-504783250/">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="social-icon" href="https://github.com/madhuraa15">
                <i class="fab fa-github"></i>
              </a>
              <a class="social-icon" href="#!">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="social-icon" href="#!">
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </section>
        <hr class="m-0" />

       
        <section class="resume-section" id="education">
          <div class="resume-section-content">
            <h2 class="mb-5">Education</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">BE in information technology</h3>
                <div class="subheading mb-3">Bharati vidyapeeth ,navi mumbai</div>
                
                <p>Result : pursuing</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">year of passing 2025</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between">
              <div class="flex-grow-1">
                <h3 class="mb-0">12th grade</h3>
                <div class="subheading mb-3">DR.Babasaheb ambedkar college,mahad</div>
                <p>Result : 93%</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">year of passing 2021</span>
              </div>
            </div>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">10th grade</h3>
                <div class="subheading mb-3">K.E.S.P.M.Tharvel kanya vidyapeeth,mahad</div>
                
                <p>Result : 84%</p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">year of passing 2019</span>
              </div>
            </div>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="skills">
          <div class="resume-section-content">
            <h2 class="mb-5">Skills</h2>
            <div class="subheading mb-3">Programming Languages & Tools</div>
            <ul class="list-inline dev-icons">
              <li class="list-inline-item">
                <i class="fab fa-html5"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-css3-alt"></i>
              </li>
              {/* <li class="list-inline-item">
                <i class="fab fa-js-square"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-angular"></i>
              </li> */}
              <li class="list-inline-item">
                <i class="fab fa-react"></i>
              </li>
              <li class="list-inline-item">
                <i class="fab fa-node-js"></i>
              </li>
              
            </ul>
            <div class="subheading mb-3">projects</div>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
               Mock test application (using java)
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                Mess Finder(using python)
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                online tiffin manegment system(using web development)
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                personal Portfolio(using JavaScript)
              </li>
            </ul>
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="interests">
          <div class="resume-section-content">
            <h2 class="mb-5">Interests</h2>
            <p>
            I am interested in doing web developing but apart from web development I like to spend my time outdoors like watching movies on 
            vacations and going out for bike riding.At the same time, I love to spend time with my friends and relax with them.Also, I like 
            to spend a lot of my free time building new technologies and exploring new things to increase my knowledge.
            </p>
            
          </div>
        </section>
        <hr class="m-0" />

        <section class="resume-section" id="awards">
          <div class="resume-section-content">
            <h2 class="mb-5">Awards & Certifications</h2>
            <ul class="fa-ul mb-0">
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                Python programming (great learning)
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                Python Basic (HackRank)
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                1<sup>st</sup>
                SQL basic (HackRank)
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                
                DSA with Java Certification
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                
                Full Stack Web Devlopment
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                
                Software Engineering Job Simulation
              </li>
              <li>
                <span class="fa-li">
                  <i class="fas fa-trophy text-warning"></i>
                </span>
                
                Advance Software Engineering Job Simulation
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
