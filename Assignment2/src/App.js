import "./App.css";

function App() {
  return (
    <div className="App">

      {/* Header */}
      <header className="header">

        <div className="logo">
          <h2>amazon</h2>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search Amazon" />
          <button>Search</button>
        </div>

        <div className="nav-links">
          <div>
            <p>Hello, Sign in</p>
            <h4>Account & Lists</h4>
          </div>

          <div>
            <p>Returns</p>
            <h4>& Orders</h4>
          </div>

          <div>
            <h4>Cart 🛒</h4>
          </div>
        </div>

      </header>

      {/* Main Content */}
      <main className="content">
        <h1>Amazon Header & Footer Clone</h1>
        <p>This page demonstrates the layout of a real-world website.</p>
      </main>

      {/* Footer */}
      <footer className="footer">

        <div className="footer-top">
          <a href="/">Back to Top</a>
        </div>

        <div className="footer-links">

          <div>
            <h3>Get to Know Us</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Press Releases</p>
          </div>

          <div>
            <h3>Connect with Us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>

          <div>
            <h3>Make Money with Us</h3>
            <p>Sell Products</p>
            <p>Affiliate Program</p>
            <p>Advertise</p>
          </div>

          <div>
            <h3>Let Us Help You</h3>
            <p>Your Account</p>
            <p>Help Centre</p>
            <p>Returns</p>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 Amazon Clone | React Assignment
        </div>

      </footer>

    </div>
  );
}

export default App;