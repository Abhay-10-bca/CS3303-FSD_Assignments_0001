import React from "react";

function Account() {
  return (
    <main className="page">

      <div className="account-container">

        <h1>My Account</h1>

        <div className="account-card">

          <div className="profile-icon">
            👤
          </div>

          <div>
            <h2>Abhay M Biju</h2>
            <p>abhay@example.com</p>
          </div>

        </div>

        <div className="account-options">

          <div className="account-option">
            <h3>Personal Information</h3>
            <p>Manage your name, email and contact information.</p>
            <button>Edit Information</button>
          </div>

          <div className="account-option">
            <h3>Address</h3>
            <p>Manage your delivery addresses.</p>
            <button>Manage Addresses</button>
          </div>

          <div className="account-option">
            <h3>Payment Methods</h3>
            <p>Manage your saved payment methods.</p>
            <button>Manage Payments</button>
          </div>

        </div>

      </div>

    </main>
  );
}

export default Account;