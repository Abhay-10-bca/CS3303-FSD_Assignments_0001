import React from "react";

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.resume}>
        <h1 style={styles.name}>Abhay M Biju</h1>
        <h3 style={styles.role}>BCA Student | Full Stack Web Development Enthusiast</h3>

        <hr />

        <section>
          <h2>Contact</h2>
          <p>Email: abhay@example.com</p>
          <p>Phone: +91 XXXXXXXXXX</p>
          <p>Location: Kerala, India</p>
        </section>

        <hr />

        <section>
          <h2>Career Objective</h2>
          <p>
            Motivated Bachelor of Computer Applications student with a strong
            interest in Full Stack Web Development. Passionate about building
            responsive web applications and continuously improving programming
            skills through practical projects and internships.
          </p>
        </section>

        <hr />

        <section>
          <h2>Education</h2>

          <h4>Bachelor of Computer Applications (BCA)</h4>
          <p>Current Student</p>

          <h4>Minor Specialization</h4>
          <p>Data Science</p>
        </section>

        <hr />

        <section>
          <h2>Technical Skills</h2>

          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript (ES6)</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB Atlas</li>
            <li>Mongoose</li>
            <li>Git & GitHub</li>
            <li>REST API Development</li>
          </ul>
        </section>

        <hr />

        <section>
          <h2>Projects</h2>

          <h4>Responsive Portfolio Website</h4>
          <p>
            Designed and developed a responsive personal portfolio using HTML,
            CSS and JavaScript with modern layout techniques.
          </p>

          <h4>TaskFlow Lite</h4>
          <p>
            Developed a task management application with task creation,
            editing, deletion, completion tracking and local storage support.
          </p>

          <h4>TaskFlow REST API</h4>
          <p>
            Built a RESTful backend using Node.js and Express.js implementing
            complete CRUD operations with middleware, routing and validation.
          </p>

          <h4>TaskFlow Database Integration</h4>
          <p>
            Integrated MongoDB Atlas using Mongoose with advanced features
            including search, pagination, sorting and indexing.
          </p>
        </section>

        <hr />

        <section>
          <h2>Tools</h2>

          <ul>
            <li>Visual Studio Code</li>
            <li>GitHub</li>
            <li>Thunder Client</li>
            <li>MongoDB Atlas</li>
            <li>Postman</li>
          </ul>
        </section>

        <hr />

        <section>
          <h2>Languages</h2>

          <ul>
            <li>English</li>
            <li>Malayalam</li>
            <li>Hindi</li>
          </ul>
        </section>

      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },

  resume: {
    width: "750px",
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    fontFamily: "Arial, sans-serif",
  },

  name: {
    textAlign: "center",
    marginBottom: "5px",
  },

  role: {
    textAlign: "center",
    color: "gray",
    marginTop: 0,
  },
};

export default App;