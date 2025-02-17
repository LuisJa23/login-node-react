let users = [{ username: "root", password: "1123" }];

exports.login = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    user ? res.json({ success: true }) : res.status(401).json({ success: false });
};

exports.register = (req, res) => {
    const { username, password } = req.body;
    if (users.find(u => u.username === username)) {
        return res.status(400).json({ success: false, message: "Usuario ya existe" });
    }
    users.push({ username, password });
    res.json({ success: true });
};
