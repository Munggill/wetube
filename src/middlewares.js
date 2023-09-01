// ========================================================
// Locals는 Express Session 엔진에서 전역변수로 사용되는
// 객체변수이다.
// 해당 locals 객체는 글로벌 변수로 내부 프레임워크 로직을 통해서
// 모든 Pug 탬플릿에 전달됩니다.
// ========================================================
export const localsMiddleware = (req, res, next) =>{    
    //console.log(req.session);
    res.locals.loggedIn = Boolean(req.session.loggedIn);
    res.locals.siteName ="Wetube";
    res.locals.loggedInUser = req.session.user;
    console.log(res.locals);
    next();
};