let qEle = document.querySelectorAll(".q")
qEle.forEach(function(item){
item.addEventListener("click", ()=>{
    let ansEle = item.nextElementSibling
    ansEle.classList.toggle("d-none")
})
})

const btnEle =document.getElementById("btn")
const nameEle = document.getElementById("name")
const emailEle = document.getElementById("email")
const phoneEle = document.getElementById("phone")
const addressEle = document.getElementById("address")
const messageEle = document.getElementById("message")
btnEle.addEventListener("click",(e)=>{
    e.preventDefault()
    if(nameEle.value ==""){
        alert("please enter your name")
    }else{
        if(emailEle.value ==""){
alert("please provide an email")
        }else{
            if(phoneEle.value.length !== 11){
alert("please provide a 11 digit valid number")
            }else{
                if(addressEle.value==""){
                    alert("please write your address")
                }else{
                    if(messageEle.value==""){
                        alert("please fill up message field")
                    }else{
                         alert("submitted")
                         nameEle.value=""
                         emailEle.value=""
                         phoneEle.value=""
                         addressEle.value=""
                         messageEle.value=""
                    }
                }
            }
        }
    }
})
