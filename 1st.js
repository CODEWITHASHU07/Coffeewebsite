// for navigation
let Search=document.getElementById('search');
let Searchbar=document.getElementById('input');
let Eraser = document.getElementById('eraser');
let sliderbar = document.getElementById('asideright');
// console.log(input)
// all nav elements
let Section =document.querySelectorAll(".section a");
console.log(Section);
// const section =document.querySelectorAll(".part")
function funtoor(event)
{
   let element=document.getElementById(`${event.target.innerText}`);
   setTimeout(()=>{element.scrollIntoView({ behavior:"smooth",block:"end",inline:"start"});},1000)
}
   
Section.forEach(element => {
    element.addEventListener('click',funtoor)



});
// console.log(Searchbar);

Search.addEventListener('click',()=>{
    Searchbar.classList.toggle('toggle');
    Searchbar.value='';

})
Searchbar.addEventListener('input',()=>{
    Eraser.style.display='block';
    // console.log(Eraser);
    
})
Eraser.addEventListener('click',()=>{
    Searchbar.value='';
    Eraser.style.display='none';
})
// funtion for sliding
function slider()
{
    sliderbar.classList.toggle('slide')
}
// response
const navigationmenu =document.getElementById("ulbar");
let toggle = true;
function nav_visible(){
    console.log(document.getElementsByClassName("movmentofnav")[0]);
    
    
    navigationmenu.classList.toggle("movmentofnav")

}

