const buttons = document.querySelectorAll(".input-btn")
const screen = document.querySelector(".screen input")
const clear = document.getElementById("clear")
const equal = document.getElementById("equal")
const del = document.getElementById("del")
var flag;
buttons.forEach((x)=> {
    x.addEventListener("click",()=> {
        if(flag) {
            screen.value="";
            flag=0;
        }
        screen.value+=x.innerHTML;
    })
})

clear.addEventListener("click",()=> {
    flag=1;
    screen.value="0";
})

equal.addEventListener("click",()=> {

    screen.value=eval(screen.value)
})

del.addEventListener("click",()=> {
    let value = screen.value;
    let string = "";
    if(value.length==1 && value==="0") {
        flag=1
        return
    }
    else if(value.length==1 && value!=="0") {
        screen.value="0"
        return
    }
    
    else {
        for(let i=0;i<value.length-1;i++) {
            string+=value[i];
        }
    }
    screen.value = string;
})
