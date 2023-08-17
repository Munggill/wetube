import UserModel from "../models/User";

export const getJoin = (req, res) => res.render("join", {pageTitle:"Join"});
export const postJoin = async (req, res) => {
    const {name, email, username, password, location} = req.body;
    const usernameExists = await UserModel.exists({username});
    if(usernameExists){
        return res.render("join", {
            pageTitle : "Join",
            errorMessage:"이미 사용중인 유저명입니다."
        })
    }
    await UserModel.create({        
        name,         
        email,         
        username,        
        password,
        location
    });    
    return res.redirect("/login");
};
export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("remove");
export const login = (req, res) => res.send("Login");
export const logout = (req, res) => res.send("Log out"); 
export const see = (req, res) => res.send("see User");   

// 재 Commit을 위한 임시 주석