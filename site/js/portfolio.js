const avatar = document.getElementById('avatar')
const Host = "http://172.30.128.1:5500"
// #750ff7
avatar.addEventListener('click',()=>{
    avatar.classList.toggle("avatar")
    avatar.classList.toggle("avatar-alt")

})
const getName = document.getElementById('getName')
getName.addEventListener('click',()=>{
   
    const color = prompt('Give me a color:  #750ff7')
   const description = document.getElementById('description')
  
   description.style.backgroundColor = color
   const pinkText = document.querySelectorAll('h2.pink-text')
   const aLinks = document.querySelectorAll('a')
   console.log()
   for (let index = 0; index < pinkText.length; index++) {
        pinkText[index].style.color = color;}
   for (let index = 0; index < aLinks.length; index++) {
        aLinks[index].style.color = color;}


    //description.style.color = color
    const name =  prompt('What is your Name')
   const nameDom = document.getElementById('name')
   nameDom.innerText = name
   nameDom.style.color = "white"
})



const frontDevTools = document.getElementById('front-dev-tools')
const changeName = document.getElementById('changeName')
changeName.addEventListener('click',()=>{
    frontDevTools.children[0].textContent ="VSCode"
    frontDevTools.children[1].textContent ="GitHub"
    frontDevTools.children[2].textContent ="Terminal"

})

const backEnd = document.getElementById('back-end')
backEnd.addEventListener('click',()=>{
    const value = document.getElementById('back-endValue').value
    const val = document.createElement('li')
    val.innerText = value;

    
    document.getElementById('Back-end-List').appendChild(val)
})
