import React from "react";
import Header from "../components/Header";

const Education = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
       

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
      </div>
    </>
  );
};

export default Education;
