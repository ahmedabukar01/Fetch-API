const btnText = document.querySelector('#getText');
const btnUsers = document.getElementById("getusers");
const btnPosts = document.querySelector('#getposts');
const post = document.querySelector('#post');
const output = document.getElementById("output");

btnText.addEventListener('click',getText);
btnUsers.addEventListener('click',getUsers);
btnPosts.addEventListener('click',getPosts);
post.addEventListener('submit',postForm);

function getText(){
    fetch('simple.txt')
    .then(text=> text.text())
    .then(text=>{
        output.innerHTML=text;
    })
    .catch(err=>console.log(err));
}
function getUsers(){
    fetch('data.json')
    .then(user=>user.json())
    .then(user=>{
        let outputData = '<h2>Users Data </h2>';
        user.forEach(res=>{
            outputData+= `
            <ul>
                <li>ID: ${res.id}</li>
                <li>Name: ${res.name}</li>
                <li>Email: ${res.email}</li>
            </ul>
            `
        });
        output.innerHTML +=outputData;
    })
    .catch(err=>console.log(err));
}

function getPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(data=>data.json())
    .then(posts=>{
        let iio = '<h2>Posts</h2>';
        posts.forEach(post=>{
            iio +=`
            <div>
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            </div>
            `
        });
        output.innerHTML+=iio;
    })
    .catch(err=>console.log("fetch error",err.message));
}

// post

function postForm(e){
    e.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'content-type': 'application/json'
        },
        body:JSON.stringify({title:title, body:body})
    })
    .then(res=>res.json())
    .then(data=>console.log(data));
}