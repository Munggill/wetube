import UserModel from "../models/User";

export const getJoin = (req, res) => res.render("join", {pageTitle:"Join"});
export const postJoin = async (req, res) => {
    const {name, email, username, password, password2, location} = req.body;
    const pageTitle = "Join";
    if(password !== password2){
        return res.status(400).render("join", {
            pageTitle : pageTitle,
            errorMessage:"패스워드가 일치하지 않습니다.",
        });
    }

    const usernameExists = await UserModel.exists({$or:[{username:username}, {email:email}] });     
    if(usernameExists){ 
        return res.status(400).render("join", {
            pageTitle : pageTitle,
            errorMessage:"이미 사용중인 유저명/이메일 입니다.",
        });
    };    
    try{

        await UserModel.create({        
            name : name,         
            email,         
            username,        
            password,
            location
        });    
        return res.redirect("/login");
    } catch(error) {         
        return res.status(404).render("upload", {            
            pageTitle:"UploadVideo", 
            errorMessage : error._message
        });
    };
}
export const getLogin = (req, res) => res.render("Login", {
    pageTitle:"Login"
});

export const postLogin = async (req, res) => {
    const { username, password } = req.body;
    const exists = await UserModel.exists({username:username});
    if(!exists){
        return res.status(400).render("login", {
            pageTitle:"Login", 
            errorMessage:`${username}의 유저명이 존재하지 않습니다.`
        });
    }
    res.end();
}

export const edit = (req, res) => res.send("Edit User");
export const remove = (req, res) => res.send("remove"); 
export const logout = (req, res) => res.send("Log out"); 
export const see = (req, res) => res.send("see User");   

// 재 Commit을 위한 임시 주석