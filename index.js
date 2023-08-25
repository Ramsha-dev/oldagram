const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const ulEl = document.getElementById('UnorderedEl');

window.onload = function(){
    render();
}

function createList(post){
    let liEl = document.createElement('li');
    ulEl.appendChild(liEl);

    let userDivEl = document.createElement('div');
    userDivEl.setAttribute('class','user');

    let userAvatarImg = document.createElement('img');
    userAvatarImg.setAttribute('class','user-avatar')
    userAvatarImg.src = post.avatar;
    userAvatarImg.alt = 'post of vangough';
    
    let userInfodiv = document.createElement('div');
    userInfodiv.setAttribute('class','user-info');
    
    userInfodiv.innerHTML = `<div class="username">${post.name}</div>
    <div class="userlocation">${post.location}</div>`;

    userDivEl.appendChild(userAvatarImg);
    userDivEl.appendChild(userInfodiv);

    let userPostDiv = document.createElement('div');
    userPostDiv.setAttribute('class','userpost');
    userPostDiv.innerHTML = `<img class="post-img" src=${post.post} alt="post of vangough"/>`;

    let activitysectionDiv = document.createElement('div');
    activitysectionDiv.setAttribute('class', 'activitysection');

    let likecmntdmDiv = document.createElement('div');
    likecmntdmDiv.setAttribute('class','like-cmnt-dm');
    likecmntdmDiv.innerHTML = `<img src="images/icon-heart.png">
    <img src="images/icon-comment.png">
    <img src="images/icon-dm.png">`;

    activitysectionDiv.appendChild(likecmntdmDiv);

    let likeCountdiv = document.createElement('div');
    likeCountdiv.setAttribute('class','likes-count');
    likeCountdiv.innerHTML = `<p>${post.likes} Likes</p>`;

    activitysectionDiv.appendChild(likeCountdiv);

    let commentsDiv = document.createElement('div');
    commentsDiv.setAttribute('class','comment-section');
    commentsDiv.innerHTML = `<p>${post.username}</p>
    <p class="comment-txt">${post.comment}</p>`;

    activitysectionDiv.appendChild(commentsDiv);

    liEl.appendChild(userDivEl);
    liEl.appendChild(userPostDiv);
    liEl.appendChild(activitysectionDiv);

}

function render(){
    for(let i = 0 ; i < posts.length ; i++)
    {
        createList(posts[i]);
    }
}