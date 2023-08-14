export const getJoin = (req, res) => res.render("join", {pageTitle:"Join"});
export const postJoin = (req, res) => {
    console.log(req.body);
    res.end();
};
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("remove");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Log out"); 
export const see = (req, res) => res.send("see User");   

// 재 Commit을 위한 임시 주석