const cursor = document.getElementById('cursor')
document.addEventListener('mousemove', e =>{
    cursor.style.top = e.clientY + "px"
    cursor.style.left = e.clientX + "px"
})