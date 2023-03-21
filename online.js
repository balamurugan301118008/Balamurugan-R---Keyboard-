let totalvalues = document.querySelectorAll(".key")
let caps = document.querySelector(".caps")
let datas = document.querySelector("#store")
let shift = document.querySelector(".shift")
let emj = document.querySelector(".emojie")
console.log(emj);
let emjDiv = document.querySelector(".emj")
let td = document.querySelector("td")
let del = document.querySelector(".delete")
// let change = document.querySelectorAll(".change")
// let before = document.querySelector(".number")
// console.log(numbers);


window.addEventListener("keyup", (e) => {
    for (let i = 0; i < totalvalues.length; i++) {
        if (totalvalues[i].value.toUpperCase() === e.key.toUpperCase()) {
            totalvalues[i].classList.add('sam')
            setTimeout(() => {
                totalvalues[i].classList.remove('sam')
            }, 200)
        }
    }
})

window.addEventListener("keydown", (e) => {
    let store = e.key
    if (store != "Backspace" && store != "Enter" && store != "Delete" && store != ".com" && store !="Escape"  && store !="Home" && store !="Alt" && store !="Control" &&
    store != "Shift" && store != "Tab" && store != "CapsLock" && store != "Emoji" && store!='PageUp' && store !='PageDown' && store !="ArrowUp" && store !="ArrowDown" && store !="ArrowLeft" && store !="ArrowRight") {
        datas.value = datas.value + store
    }
    else if (store == "Backspace") {
        datas.value = datas.value.slice(0, datas.value.length - 1)
    }
    else if (store == "Enter") {
        datas.value = datas.value + '\n';
    } else if (store == "Tab") {
        datas.value = datas.value + "    ";
    } else if (store == "Delete") {
        datas.value = "";
    } else if (store == "Space") {
        datas.value = datas.value + " ";
    }
})


shift.addEventListener("keydown", (e) => {
    shift.style.color = "green";
    for (let i = 0; i < totalvalues.length; i++) {
        totalvalues[i].addEventListener("keyup", (e) => {
            let val = e.key.toLowerCase()
            datas.append(val)
        })
    }
})
for (let i = 0; i < totalvalues.length; i++) {
    totalvalues[i].addEventListener("click", (e) => {
        // if (totalvalues[i].value !== "Shift") {
            if (totalvalues[i].value === "Backspace") {
                datas.value = datas.value.slice(0, datas.value.length - 1)
            }
            else if (totalvalues[i].value == "Enter") {
                datas.value = datas.value + '\n';
            }
            else if (totalvalues[i].value == "Space") {
                datas.value = datas.value + " ";
            }
            else if (totalvalues[i].value == "Tab") {
                datas.value = datas.value + "    ";
            }
            else if (totalvalues[i].value == "Delete") {
                datas.value = "";
            } else if (totalvalues[i].value == "Emoji") {
                datas.innerHTML += ""
            }
            else if (totalvalues[i].value == "Alt") {
                datas.innerHTML += ""
            }
            else if(totalvalues[i].value == "Shift"){
                datas.innerHTML +=""
            }
            else if (totalvalues[i].classList.contains("caps")) {
                caps.classList.toggle("show")
                for (let c = 0; c < totalvalues.length; c++) {
                    if (caps.classList.contains("show")) {
                        if (totalvalues[c].innerText !== "Enter" && totalvalues[c].innerText !== "Shift" && totalvalues[c].innerText !== "Backspace" && totalvalues[c].innerText !== "Space" && totalvalues[c].innerText !== "Emoji" &&
                            totalvalues[c].innerText !== "Tab" &&  totalvalues[c].innerText !== ".com" &&  totalvalues[c].innerText !== "Delete") {
                            totalvalues[c].innerText = totalvalues[c].innerText.toLowerCase()
                            caps.style.color = "#3f7bad";
                            caps.style.backgroundColor = "#aaf683"
                        }
                    }
                    else {
                        if (totalvalues[c].innerText !== "Enter" && totalvalues[c].innerText !== "Shift" && totalvalues[c].innerText !== "Backspace" && totalvalues[c].innerText !== "Space" && totalvalues[c].innerText !== "Emoji" &&
                            totalvalues[c].innerText !== "Tab" &&  totalvalues[c].innerText !== ".com"  && totalvalues[c].innerText !== "Delete") {
                            totalvalues[c].innerText = totalvalues[c].innerText.toUpperCase()
                            caps.style.color = "#3f7bad";
                            caps.style.backgroundColor = "#8addff"
                        }
                    }
                }
            } else {
                datas.value += e.target.innerText
                datas.style.textTransform = 'toLowerCase'
                totalvalues[i].classList.add('sam')
                setTimeout(() => {
                    totalvalues[i].classList.remove('sam')
                }, 200)
            }
        // }

    })

}
let storeEmj = ['&#128512', '&#128513',
    '&#128514',
    '&#128515', '&#128516', '&#128517',
    '&#128518', '&#128519', '&#128520',
    '&#128521', '&#128522', '&#128523',
    '&#128524', '&#128525', '&#128526',
    '&#128527', '&#128528', '&#128529',
    '&#128530', '&#128531', '&#128532',
    '&#128533', '&#128534', '&#128535',
    '&#128536', '&#128537', '&#128538',
    '&#128539', '&#128540', '&#128542']

emj.addEventListener("click", () => {
    // alert("Sf")
    for (let i = 0; i < storeEmj.length; i++) {
        let p = document.createElement("td")
        p.innerHTML = storeEmj[i]
        // emj.style.classList.add('final')
        emjDiv.append(p)
        emjDiv.style.visibility = "visible"
        p.addEventListener("click", (e) => {
            let targerted = e.target.innerText
            datas.append(targerted)
        })

    }
})

window.addEventListener('click',(e)=>{
    if(e.target.innerText != "Emoji"){
        emjDiv.style.visibility = "hidden"
    }
})

// function shiftKey(){
//     for(let i=0; change.length; i++){
//         change.classList.toggle('num')
//     }
//     for(let i=0; i<numbers.length; i++){
//         numbers.classList.toggle('')
//     }
// }

    // for(let i=-0;before.length; i++){
    //     before[i].classList.toggle('number')
    // }
    // for(let i=0; i<numbers.length; i++){
    //     numbers[i].classList.toggle('change')
    // }