
console.log( window.screenX)
console.log( window.screenY)
console.log( window.inner)
console.log("window.inner:",window.innerHeight,window.innerWidth)
console.log("window.screen:",window.screen.availHeight,window.screen.availWidth)

const vertical = document.querySelector('.vertical')
const horozontal = document.querySelector('.horozontal')
const target = document.querySelector('.target')
const tag = document.querySelector('.tag')
const b1 = document.querySelector('.b1')
const scorebtn = document.querySelector('.scorebtn')

let ccount = 0;
b1.addEventListener('click', () => {

    ccount = ccount + 1;
    console.log(ccount);
    scorebtn.innerHTML = `${ccount} POINTS!`;
})


document.addEventListener('mousemove', (e) => {
    // console.log(`${e.clientX} ${e.clientY}`) // 항상 이벤트 오브젝트가 작동을 한다. 이벤드의 clientX를 받아올것이다. 
    tag.innerHTML=`${e.clientX} ${e.clientY}`

    // const ex = target.style.translate = e.clientX+20;  //element.style.transform = "rotate(45deg)"; -> element = quary selector 이다.
    // const ey = target.style.translate = e.clientY-20;
    // tag.innerHTML= `${ex} ${ey}`
    const a = -60;
    target.style.transform = `translate(${e.clientX+a}px,${e.clientY+a}px )`
    vertical.style.transform = `translate(${e.clientX}px,0px )`
    horozontal.style.transform = `translate(0px,${e.clientY}px )`
    tag.style.top = `${e.clientY}px`
    tag.style.left = `${e.clientX}px`


})
// let boxwidth = box1.clientWidth

let pixY = Math.floor(Math.random() * window.innerHeight)
let pixX = Math.floor(Math.random() * window.innerwidth)

console.log(pixY)
console.log(reg)
b1.addEventListener('click', () =>{
    
    pixX = Math.floor(Math.random() * box1.clientWidth)
    pixY = Math.floor(Math.random() * box1.clientHeight)
    b1.style.transform = `translate(${pixX}px, ${pixY}px)`
    
})
const box1 = document.querySelector('.box')


//공이 랜덤위치에 나왔다가 
//3초 후에 사라진다.
//start 버튼을 누르면 시작한다.
//total score 는 누적이 된다.
//라운드 2번째까지 생성해본다.
