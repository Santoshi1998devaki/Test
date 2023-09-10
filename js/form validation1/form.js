const labelvalue= document.querySelector('#labelvalue')
const inputtype= document.querySelector('#inputtype')
const form =document.querySelector("#form")
labelvalue.addEventListener('keyup',(e)=>{
 const keypress = e.key

 if(keypress==="Enter"){
    const type = inputtype.value
    const  label = labelvalue.value
const div=document.createElement("div")
const textarea =document.createElement('textarea')
const input = document.createElement('input')
const newlabel = document.createElement('label')
form.appendChild(div)
if(type!="submit"){
div.appendChild(newlabel)

}if(type=="submit"){
input.classList.add('btn')

input.classList.add("btn-success")
input.value=label
// div.appendChild(newlabel)

}
if(type=="textarea"){
   div.appendChild(textarea)
}
div.appendChild(input)

newlabel.innerHTML=label
input.type=type
newlabel.classList.add('form-label',"textsize")
input.classList.add("form-control" ,"textsize")
textarea.classList.add('form-control',"textsize")


}
}
)
