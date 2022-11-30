let mypage =[];
let posts = [
    {'postid' : '1',
    'posttitle' : 'olala i first post 1',
    'bodypost' : 'hi, ani lo yoda ma lchitov ;)'},
    {'postid' : '2',
    'posttitle' : 'I am the second post 2',
    'bodypost' : 'hi, adayn ein li mushag ;)'},
    {'postid' : '1',
    'posttitle' : 'Oh I am the last post 3',
    'bodypost' : 'lo nora cvar syamti im apostim ;)'}
]
let comments = [
    {'comntToPost' : '1',
    'commentTitle' : 'kishkush 1',
    'bodycomment' : ' Lorem ipsum dolor sit amet consectetur adipisicing elit.  quisquam.'},
    {'comntToPost' : '1',
    'commentTitle' : 'balabush 1',
    'bodycomment' : 'Maxime quia quas numquam mollitia, at, soluta dolorum rerum quod explicabo autem sit rem voluptate odio?.'},
    {'comntToPost' : '2',
    'commentTitle' : 'bla bla bla 2',
    'bodycomment' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio harum sit id.'},
    {'comntToPost' : '2',
    'commentTitle' : 'aaaaaa 2',
    'bodycomment' : 'Atque reprehenderit nisi quis consequatur autem, officia eum.'},
    {'comntToPost' : '3',
    'commentTitle' : 'lorem 3',
    'bodycomment' : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique atque optio nostrum odio? Tenetur, qui enim?'},
    {'comntToPost' : '3',
    'commentTitle' : 'ipsum 3',
    'bodycomment' : 'totam mollitia repellendus dicta recusandae molestiae doloremque. Officia, odit laudantium.'}
]
function getpost (){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(posts);
        },2000);
        mypage.push(posts);
    })
}
function getcomment (){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(comments);
        },3500);
        mypage.push(comments);
    })
}

function ptintToHTML(){
    let content="";
    mypage[0].forEach((post) => {
        content += `<h2>${post.posttitle}</h2><p>${post.bodypost}</p>`;
        mypage[1].forEach((comment)=>{
            if (post.postid==comment.comntToPost){
            content+= `<h3>${comment.commentTitle}</h3><p>${comment.bodycomment}</p>`}
        })
    });
    document.body.innerHTML=content;
}

getpost().then(getcomment()).then(ptintToHTML());
console.log(mypage);