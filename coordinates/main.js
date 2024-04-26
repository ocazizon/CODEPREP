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

document.addEventListener('mousemove', (event) => {
    console.log(`${event.clientX} ${event.clientY}`) // 항상 이벤트 오브젝트가 작동을 한다. 이벤드의 clientX를 받아올것이다. 
})