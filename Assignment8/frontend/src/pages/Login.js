import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!username || !password) {
            setError("All fields are required");
            return;
        }

        localStorage.setItem("loggedInUser", username);

        onLogin(username);

        navigate("/");
    }

    return (
        <div className="page">
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <br />
                <br />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <br />
                <br />

                <button type="submit">
                    Login
                </button>
            </form>

            {error && <p>{error}</p>}
        </div>
    );
}

export default Login;