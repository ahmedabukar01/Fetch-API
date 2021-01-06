const btnText = document.querySelector('#getText');
const btnUsers = document.getElementById("getusers");
const btnPosts = document.querySelector('#getposts');
const output = document.getElementById("output");

btnText.addEventListener('click',getText);
btnUsers.addEventListener('click',getUsers);
btnPosts.addEventListener('click',getPosts);

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
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            `
        });
        output.innerHTML+=iio;
    })
    .catch(err=>console.log("fetch error",err.message));
}
