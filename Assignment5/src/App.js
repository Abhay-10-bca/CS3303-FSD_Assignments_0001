import React, { useState } from "react";
import "./App.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">StudentHub</div>

      <div className="header-right">
        <span>🔔</span>
        <div className="profile">AB</div>
      </div>
    </header>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Menu</h3>

      <ul>
        <li className="active">🏠 Dashboard</li>
        <li>📚 Courses</li>
        <li>📝 Assignments</li>
        <li>📊 Results</li>
        <li>⚙️ Settings</li>
      </ul>
    </aside>
  );
}

function WelcomeCard() {
  return (
    <div className="welcome-card">
      <h1>Welcome back, Abhay!</h1>
      <p>
        Here is a quick overview of your academic activities.
      </p>
    </div>
  );
}

function StatCard({ title, value, icon }) {
  return (
    <div className="stat-card">
      <div className="stat-icon">{icon}</div>
      <div>
        <p>{title}</p>
        <h2>{value}</h2>
      </div>
    </div>
  );
}

function CourseCard({ course, teacher, progress }) {
  return (
    <div className="course-card">
      <h3>{course}</h3>
      <p>{teacher}</p>

      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <span>{progress}% completed</span>
    </div>
  );
}

function TodoItem({ task, completed, onToggle }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={onToggle}
      />

      <span className={completed ? "completed" : ""}>
        {task}
      </span>
    </div>
  );
}

function TodoSection() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Complete React assignment",
      completed: false,
    },
    {
      id: 2,
      text: "Study JavaScript",
      completed: true,
    },
    {
      id: 3,
      text: "Prepare presentation",
      completed: false,
    },
  ]);

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  return (
    <div className="todo-section">
      <div className="section-heading">
        <h2>My Tasks</h2>
        <span>
          {completedCount}/{tasks.length} completed
        </span>
      </div>

      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task.text}
          completed={task.completed}
          onToggle={() => toggleTask(task.id)}
        />
      ))}
    </div>
  );
}

function Dashboard() {
  return (
    <main className="dashboard">
      <WelcomeCard />

      <div className="stats">
        <StatCard
          title="Courses"
          value="6"
          icon="📚"
        />

        <StatCard
          title="Assignments"
          value="12"
          icon="📝"
        />

        <StatCard
          title="Attendance"
          value="87%"
          icon="📊"
        />

        <StatCard
          title="CGPA"
          value="8.4"
          icon="🎓"
        />
      </div>

      <h2 className="section-title">My Courses</h2>

      <div className="courses">
        <CourseCard
          course="Full Stack Development"
          teacher="Prof. Sharma"
          progress={80}
        />

        <CourseCard
          course="Data Structures"
          teacher="Prof. Kumar"
          progress={65}
        />

        <CourseCard
          course="Data Science"
          teacher="Prof. Rao"
          progress={70}
        />
      </div>

      <TodoSection />
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 StudentHub | React Assignment</p>
    </footer>
  );
}

function App() {
  return (
    <div className="app">
      <Header />

      <div className="layout">
        <Sidebar />
        <Dashboard />
      </div>

      <Footer />
    </div>
  );
}

export default App;