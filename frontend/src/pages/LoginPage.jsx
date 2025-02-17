import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await axios.post("http://localhost:5000/auth/login", { username, password });
            if (res.data.success) navigate("/welcome");
            else alert("Login fallido");
        } catch (error) {
            alert("Error en el login");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="Usuario" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Iniciar sesión</button>
            <p><Link to="/register">Registrarse</Link></p>
        </div>
    );
}
export default LoginPage;
