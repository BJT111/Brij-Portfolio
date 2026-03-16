import "./styles/Work.css";

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Education</span>
        </h2>

        <div className="education-wrapper">
          <div className="education-info-box">
            <div className="education-header">
              <h3>Interactive Media Design</h3>
              <p className="education-college">Seneca College</p>
            </div>
            
            <div className="education-details">
              <div className="education-timeline">
                <h4>Jan 2023 – Dec 2024</h4>
                <p>Toronto, Canada</p>
              </div>
              
              <div className="education-description">
                <p>
                  Comprehensive program focusing on digital media creation, interactive user experiences, 
                  project management, and modern design principles. Developed robust skills in 
                  managing complex workflows and evaluating digital strategies which support 
                  operational business requirements and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
