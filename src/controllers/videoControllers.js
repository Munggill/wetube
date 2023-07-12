export const trending = (req, res) => res.send("Home Page Videos");
export const see = (req, res) => { 
    return res.send(`Watch Video ID ${req.params.id}`);
}
export const edit = (req, res) => { 
    res.send("Edit");
}
export const search =(req, res) => res.send("Search");
export const upload =(req, res) => {
    console.log("TEST!");
    res.send("Upload");
}
export const deleteVideo =(req, res) => res.send("DeleteVideo");