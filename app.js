const btn = document.querySelector('#getText');
btn.addEventListener('click',getText);
function getText(){
    fetch('simple.txt')
    .then(text=>{
        return text.text();
    })
    .then(text=>console.log(text));
}