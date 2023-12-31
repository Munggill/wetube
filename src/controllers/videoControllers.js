import videoModel from "../models/Video"; 

// Video.find({},(error, videosDocument) => {});
// =======================================================
// server.js에서 pug 관련 설정을 해주었기 때문에 Express에서 
// pug 모듈로 render를 해준다.
// render는 view탬플릿과 탬플릿으로 보낼 변수의 인자를 같는다.
// ===================================================== == 
export const home =  async(req, res) => {     
    //try{
        const videos = await videoModel.find({}).sort({createdAt:"asc"})//.sort({ createdAt: -1 })
        return res.render("home", {pageTitle : "Home", videos:videos }); 
    //} catch{ 
        //return res.render("server-error", {error : Error});
    //}    
};
export const watch = async (req, res) => { 
    try{        
        const { id } = req.params;  
        const video = await videoModel.findById(id);
        if(video){
            return res.render("watch", {pageTitle : video.title, video : video });
        }
        return res.status(404).render("404", {pageTitle:"Video not Found"});
    } catch (error){
        console.log(error);
        return res.render("server-error", {error : Error});
    }
};
export const getEdit = async(req, res) => {    
    const { id } = req.params;  
    const video = await videoModel.findById(id);

    if(video === null){
        return res.status(404).render("404", {pageTitle:"Video not Found"});
    } 
    return res.render("edit", {pageTitle : `Editing : ${video.title}`, video : video});
};
export const postEdit = async(req, res) => {   
    const { id } = req.params;
    //Form Action의 Value는 req.body로 받는다.
    const param = req.body;  
    const video = await videoModel.exists({_id : id});   
    
    if(video === null){
        return res.status(404).render("404", {pageTitle:"Video not Found"});
    } 
    await videoModel.findByIdAndUpdate(id, {
        title : param.title,
        description : param.description,
        hashtags : videoModel.formatHashTags(param.hashtags),
    });

    return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
    return res.render("upload", {pageTitle : "Upload Video"});
};

export const postUpload = async (req, res) => {
    const { title, description, hashtags } = req.body; 
    try {    
        const video = new videoModel({
            title : title,
            description : description , 
            hashtags : videoModel.formatHashTags(hashtags),
        }); 
        await video.save(); 
        return res.redirect("/");
    }
    catch(error) { 
        return res.status(404).render("upload", {
            pageTitle:"UploadVideo", 
            errorMessage : error._message
    });
    } 
};

export const deleteVideo = async(req, res) =>{
    const { id } = req.params; 
    await videoModel.findByIdAndDelete(id);
    return res.redirect("/");
};

export const search = async (req, res) => { 
    const {keyword} = req.query    
    let videos = [];
    if(keyword) {
        videos = await videoModel.find({
            title:{
                $regex: new RegExp(keyword, "i")
            }
        })        
    }
    
    return res.render("search", {pageTitle: "Search", videos:videos});
}