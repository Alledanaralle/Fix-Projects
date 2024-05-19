const input = document.querySelectorAll('.input'),
    result = document.getElementById('result'),
    check = document.querySelector('.checking'),
    math = Math.floor(Math.random() * 100)

let timeOut
function yourResult() {
    result.innerHTML = `Your love probability is ${math}%`
}

function resultLove() {
    let allInputsFilled = true

    input.forEach((item) => {
        if (item.value === "") {
            allInputsFilled = false
        }
    })

    if (allInputsFilled) {
        check.classList.toggle('active')
        timeOut = setTimeout(yourResult, 3000)
    } else {
        window.alert("Please fill all inputs")
    }
}

input.forEach((item)=>{
    item.addEventListener('keypress', function(event){
        if(event.key === 'Enter'){
            resultLove()
        }
    })
})
function resetWeb() {
    window.location.reload();
}