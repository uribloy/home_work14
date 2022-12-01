let mypage =[];
let posts = [
    {'postid' : '1',
    'posttitle' : 'olala i first post 1',
    'bodypost' : 'hi, ani lo yoda ma lchitov ;)'},
    {'postid' : '2',
    'posttitle' : 'I am the second post 2',
    'bodypost' : 'hi, adayn ein li mushag ;)'},
    {'postid' : '3',
    'posttitle' : 'Oh I am the last post 3',
    'bodypost' : 'lo nora cvar syamti im apostim ;)'}
]
let comments = [
    {'comntToPost' : '1',
    'commentTitle' : 'kishkush 1',
    'bodycomment' : ' Lorem ipsum 11111111111111.'},
    {'comntToPost' : '1',
    'commentTitle' : 'balabush 1',
    'bodycomment' : 'Maxime quia 111111111111111.'},
    {'comntToPost' : '2',
    'commentTitle' : 'bla bla bla 2',
    'bodycomment' : 'Lorem ipsum 22222222222222.'},
    {'comntToPost' : '2',
    'commentTitle' : 'aaaaaa 2',
    'bodycomment' : 'Atque reprehenderit 222222222222222.'},
    {'comntToPost' : '3',
    'commentTitle' : 'lorem 3',
    'bodycomment' : 'Lorem ipsum 33333333333333.'},
    {'comntToPost' : '3',
    'commentTitle' : 'ipsum 3',
    'bodycomment' : 'totam mollitia 3333333333333.'}
]
function getpost (){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(posts);
        },2500);
        mypage.push(posts);
    })
}
function getcomment (){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(comments);
        },4500);
        mypage.push(comments);
    })
}

// function ptintToHTML(){
//     let content="";
//     mypage[0].forEach((post) => {
//         content += `<h2>${post.posttitle}</h2><p>${post.bodypost}</p>`;
//         mypage[1].forEach((comment)=>{
//             if (comment.comntToPost==post.postid){
//             content+= `<h3>${comment.commentTitle}</h3><p>${comment.bodycomment}</p>`}
//         })
//     });
//     document.body.innerHTML=content;
// }

getpost()
.then(getcomment())
.then(function ptintToHTML(){
    let content="";
    mypage[0].forEach((post) => {
        content += `<div class="post"><h2>${post.posttitle}</h2><p>${post.bodypost}</p></div>`
        mypage[1].forEach((comment)=>{
            if (comment.comntToPost==post.postid){
            content+= `<div class=comment><h4>${comment.commentTitle}</h4><p>${comment.bodycomment}</p></div>`}
        })
    });
    document.body.innerHTML=content;
});
console.log(mypage[1]);