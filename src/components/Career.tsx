import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Executive Coordinator <br/> Office of CEO</h4>
                <h5>Daniel Design Studio</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Acted as an extension of the CEO, leading core operations and finance functions.
              Modernized enterprise workflows, accelerating execution by 30–38% and reducing costs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Administrative Assistant</h4>
                <h5>Shelter Canadian Properties Ltd.</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Managed daily office operations, coordinated vendor communications,
              and handled financial administration including invoice processing
              and budget coordination.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Director of Business Development</h4>
                <h5>Mermaids Manatees & More LLC</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Drove business growth by identifying new market opportunities and
              building strategic partnerships. Led cross-functional teams and
              optimized performance using data insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
