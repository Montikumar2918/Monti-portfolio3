import React from "react";
import "./projects.css";
import * as SiIcons from "react-icons/si";
import f1 from "../../Images/f1.png";
import f2 from "../../Images/f2.png";
import f3 from "../../Images/f3.png";
import f4 from "../../Images/f4.png";





function Projects() {
  return (
    <div id="projects">
      <h1 className="logo-text">𝙋𝙧𝙤𝙟𝙚𝙘𝙩𝙨</h1>
      <div className="allProjects">
        <div className="card" data-aos="zoom-in-up">
          <img src={f1} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Cosmetify Application</h5>
          </div>

          <div className="card-img-overlay">
            <div className="img-title">Cosmetify</div>
            <div className="img-description">
              <p>
                Developed a Cosmetify application using React.js along with various roles(Admin,Client) &
                 allow people to filter products by Brand,Product_type,Price range using filter bars.
                 </p>
                 
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Montikumar2918/cosmetify-2f"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Montikumar2918/cosmetify"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://trusting-dijkstra-410988.netlify.app"
                  >
                   Website <i className="fad fa-link"></i>
                  </a>
                  
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card" data-aos="zoom-in-up">
          <img src={f3} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Naukri.Com Application</h5>
          </div>

          <div className="card-img-overlay">
            <div className="img-title">Naukri.Com</div>
            <div className="img-description">
              <p>
                Develeoped an Naukri.Com application to manage and track all the details of Employer and Recruiters, Employer Registration, Search Job.
                </p>
              
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Montikumar2918/Naukri.com-frontend"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Montikumar2918/Naukri.com-backend"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://focused-chandrasekhar-d3af65.netlify.app/"
                  >
                   Website  <i className="fad fa-link"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card" data-aos="zoom-in-up">
          <img src={f2} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">Diet Track  Application</h5>
          </div>

          <div className="card-img-overlay">
            <div className="img-title">Diet Track</div>
            <div className="img-description">
            <p>
                Diet Track application where only logged in users access to the
                dashboard
              </p>
              <p>
                Implemented this application with complete authentication system
                along with account verification via email
              </p>
              
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Montikumar2918/diet-frontend"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Montikumar2918/diet-backend"
                  >
                    Backend <i className="fab fa-github"></i>
                  </a>
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://infallible-spence-ce19df.netlify.app/"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                  
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card" data-aos="zoom-in-up">
          <img src={f4} className="card-img-top" alt="..." />
          <div className="title_heading">
            <h5 className="card-title">VCS(Github Clone) Application</h5>
          </div>

          <div className="card-img-overlay">
            <div className="img-title">VCS</div>
            <div className="img-description">
              <p>
                Developed an version controll system application to allow developer used as Github in which developer can make repository with it's details
              </p>
              
              <div className="tech_used">
                <i className="fab fa-react react"></i> &nbsp;
                <i className="fab fa-node node"></i> &nbsp;
                <SiIcons.SiMongodb className="mongodb" /> &nbsp;
                <p className="codeLinks text-center pt-3">
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Montikumar2918/version-system-controll-frontend"
                  >
                    Frontend <i className="fab fa-github"></i>
                  </a>
                 
                  <a
                    className="bth btn-sm btn-success ml-3"
                    target="_blank"
                    rel="noreferrer"
                    href="https://quirky-meitner-6a7713.netlify.app"
                  >
                    Website <i className="fad fa-link"></i>
                  </a>
                  
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Projects;
