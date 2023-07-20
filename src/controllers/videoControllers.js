let videos = [
    {
        title : "First Video",
        rating : 5,
        comments : 2,
        createdAt : "2 minutes ago",
        views : 1,
        id : 1
    },     
    {
        title : "Second Video",
        rating : 5,
        comments : 2,
        createdAt : "2 minutes ago",
        views : 59,
        id : 2
    },        
    {
        title : "Third Video",
        rating : 5,
        comments : 2,
        createdAt : "2 minutes ago",
        views : 59,
        id : 3
    },        
];

// =======================================================
// server.js에서 pug 관련 설정을 해주었기 때문에 Express에서 
// pug 모듈로 render를 해준다.
// render는 view탬플릿과 탬플릿으로 보낼 변수의 인자를 같는다.
// =======================================================
export const trending = (req, res) => {    
    return res.render("home", {pageTitle : "Home", videos });
} 
    
export const watch = (req, res) => { 
    const { id } = req.params; 
    const video = videos[id-1];
    return res.render("watch", {pageTitle : `Watching : ${video.title}`, video:video });
};
export const getEdit = (req, res) => {    
    const { id } = req.params; 
    const video = videos[id-1];
    return res.render("edit", {pageTitle : `Editing : ${video.title}`, video});
}
export const postEdit = (req, res) => {   
    const { id } = req.params;
    //Form Action의 Value는 req.body로 받는다.
    const title = req.body.title;
    videos[id-1].title = title;
    //const { title } = req.body;
    console.log(title);
    
    return res.redirect(`/videos/${id}`);
} 