
console.log( window.screenX)
console.log( window.screenY)
console.log( window.inner)
console.log("window.inner:",window.innerHeight,window.innerWidth)
console.log("window.screen:",window.screen.availHeight,window.screen.availWidth)

const vertical = document.querySelector('.vertical')
const horozontal = document.querySelector('.horozontal')
const target = document.querySelector('.target')
const tag = document.querySelector('.tag')

// document.querySelector('.line').addEventListener('mousemove', () =>{
//     document.querySelector('.vertical').computedStyleMap.left = window.screenX
// })

document.addEventListener('mousemove', (e) => {
    console.log(`${e.clientX} ${e.clientY}`) // 항상 이벤트 오브젝트가 작동을 한다. 이벤드의 clientX를 받아올것이다. 
    tag.innerHTML=`${e.clientX} ${e.clientY}`
    console.log(e.clientX+20)
    // const ex = target.style.translate = e.clientX+20;  //element.style.transform = "rotate(45deg)"; -> element = quary selector 이다.
    // const ey = target.style.translate = e.clientY-20;
    // tag.innerHTML= `${ex} ${ey}`
    const a = -60;
    target.style.transform = `translate(${e.clientX+a}px,${e.clientY+a}px )`
    vertical.style.transform = `translate(${e.clientX}px,0px )`
    horozontal.style.transform = `translate(0px,${e.clientY}px )`
    // vertical.style.left = `${e.clientX}px`
    // horozontal.style.top = `${e.clientY}px`
    // target.style.top = `${e.clientY}px`
    // target.style.left = `${e.clientX}px`
    tag.style.top = `${e.clientY}px`
    tag.style.left = `${e.clientX}px`

})