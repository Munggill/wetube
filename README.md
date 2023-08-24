# WeTube 

<div align="center">
<img src="http://resume.anmg.store/clickonce/file/wetube/wetubeLogo.png">
</div>
<div align="center">
<img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/Munggill/hit-counter"/>
</div>
 

# Wetube Web Site
> **풀스텍 입문을 위한 소규모 개발** <br/> **개발기간: 2023.07 ~ ing**


## 배포주소(10월 Open 예정)
 
```
http://resume.anmg.store:3999
```

## 웹개발팀 소개

|      안명길       |                   |                |                                                                                                               
| :------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | 
|   <img width="160px" src="http://resume.anmg.store/clickonce/file/anmg.jpg" />    |                      <img width="160px" src="http://resume.anmg.store/clickonce/file/white.png" />    |                   <img width="160px" src="http://resume.anmg.store/clickonce/file/white.png"/>   |
|   [@Anmyeonggil](https://github.com/Munggill)   |      |   |
| 고려사이버대학교 소프트웨어공학과 |  |  |

## 프로젝트 소개
Wetube는 비디오를 업로드, 시청하며 유저들끼리 소통하는 웹 페이지입니다. 개발자 본인은 주로 C#으로 CS프로그램을 서비스 하였는데 이는 프론트와 백앤드가 나뉘어져있지 않음에 아쉬움을 느껴 명확한 백앤드와 프론트앤드를 경험해 보고자 만들어 졌습니다. Wetube에서는 동영상 업로드, 시청, 좋아요 등의 기능을 제공하고 댓글, 쪽지를 통하여 유저간의 소통이 이루어집니다.

#### Wetube에서는 아래와 같은 기능을 제공합니다.

동영상을 업로드하며 유저별로 소통할 수 있습니다.
1. 내 동영상을 올려 다른 유저들의 반응을 확인하세요.
2. 다른 유저의 동영상에 좋아요와 댓글 등으로 나의 관심을 표현하세요.
3. 동영상 업로더에게 비밀스럽게 문의할 내용이 있으면 쪽지 기능을 사용하세요

   
<br>

## 시작 가이드
### Requirements
For building and running the application you need:

- [Node.js 18.16](https://nodejs.org/ca/blog/release/v18.16.0/)
- [Npm 9.5.1](https://www.npmjs.com/package/npm/v/9.5.1)

<br>

## installation

```
$ git clone https://github.com/Munggill/wetube.git
$ cd Voluntain-2nd
```



GlobalRouter
/ => HOME
/join => Join
/login => Login
/search => Search

/users/:id => See User
/users/logout => Log Out
/users/edit => Edit MY Profile
/users/delete => Delete MY Profile

/videos/:id => See Video
/videos/:id/edit => Edit Video  
/videos/:id/delete => Delete Video
/videos/upload => Upload Video
// 재 Commit을 위한 임시 주석
