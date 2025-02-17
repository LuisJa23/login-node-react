import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const res = await axios.post("http://localhost:5000/auth/register", { username, password });
            if (res.data.success) navigate("/");
            else alert("Usuario ya existe");
        } catch (error) {
            alert("Error en el registro");
        }
    };

    return (
        <div>
            <h2>Registro</h2>
            <input type="text" placeholder="Usuario" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Registrar</button>
        </div>
    );
}
export default RegisterPage;
