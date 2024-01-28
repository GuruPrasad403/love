"use strict"
const values = document.querySelector("#values");
const img = document.querySelector("[alt = 'Love']");
const err = document.querySelector("#err")
values.addEventListener("change",()=>{
    console.log("option changed");
    values.blur();
})
values.addEventListener("blur", ()=>{
    console.log(values.value)
    console.log(typeof(values.value))
    let count 
    if(values.value == '144'){
        err.style.display="none"
        img.classList.add("fade")
        img.setAttribute("src",`./720.png`)
        img.style.visibility = "visible"
        img.style.filter = "blur(30px)"
        setTimeout(()=>{
            img.classList.remove("fade")
        },2000)
    }
    else if(values.value =='240'){
        img.classList.add("fade")
        img.setAttribute("src",`./720.png`)
        img.style.visibility = "visible"
        img.style.filter = "blur(20px)"
        setTimeout(()=>{
            img.classList.remove("fade")
        },2000)
    }
    else if(values.value =='720'){
        img.classList.add("fade")
        img.setAttribute("src",`./720.png`)
        img.style.visibility = "visible"
        img.style.filter = "blur(6px)"
        setTimeout(()=>{
            img.classList.remove("fade")
        },2000)
    }
    else if(values.value =='1080'){
        img.classList.add("beat")
        img.setAttribute("src",`./2140.jpeg`)
        img.style.visibility = "visible"
        img.style.filter="blur(0px)"
        void img.offsetWidth;
    }
    else if(values.value =='2140'){
        img.classList.remove("beat")
        img.classList.add("fade")
        img.setAttribute("src",`./love.png`)
        img.style.visibility = "visible"
        img.style.width="19rem"
        img.style.filter="blur(0px)"
        void img.offsetWidth;
        setTimeout(()=>{
            img.classList.remove("fade")
        },2000)
    }        
})
