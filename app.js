const btnText = document.querySelector('#getText');
const btnUsers = document.getElementById("getusers");
const output = document.getElementById("output");

btnText.addEventListener('click',getText);
btnUsers.addEventListener('click',getUsers);

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