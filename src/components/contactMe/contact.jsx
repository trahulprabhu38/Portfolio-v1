import "./contact.css";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-container">
      <div className="contact-header">
        <h2 className="contact-title">Let's Connect</h2>
        <p className="contact-subtitle">
          Open to opportunities, collaborations, and interesting DevOps conversations
        </p>
      </div>

      <div className="social-grid">
        <a href="mailto:trahulprabhu38@gmail.com" className="social-card email-card">
          <div className="social-icon">
            <img src="./gmail.png" alt="Email" />
          </div>
          <div className="social-info">
            <h4>Email</h4>
            <p>trahulprabhu38@gmail.com</p>
          </div>
        </a>

        <a href="https://github.com/trahulprabhu38" target="_blank" rel="noopener noreferrer" className="social-card github-card">
          <div className="social-icon">
            <img src="./github.png" alt="GitHub" />
          </div>
          <div className="social-info">
            <h4>GitHub</h4>
            <p>trahulprabhu38</p>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/trahulprabhu38/" target="_blank" rel="noopener noreferrer" className="social-card linkedin-card">
          <div className="social-icon">
            <img src="./linkedIn.png" alt="LinkedIn" />
          </div>
          <div className="social-info">
            <h4>LinkedIn</h4>
            <p>trahulprabhu38</p>
          </div>
        </a>

        <a href="https://leetcode.com/u/trahulprabhu38/" target="_blank" rel="noopener noreferrer" className="social-card leetcode-card">
          <div className="social-icon">
            <img src="./leetcode.png" alt="LeetCode" />
          </div>
          <div className="social-info">
            <h4>LeetCode</h4>
            <p>trahulprabhu38</p>
          </div>
        </a>

        <a href="https://medium.com/@trahulprabhu38" target="_blank" rel="noopener noreferrer" className="social-card medium-card">
          <div className="social-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
          </div>
          <div className="social-info">
            <h4>Medium</h4>
            <p>@trahulprabhu38</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ContactMe;