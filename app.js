
function Additem(){
    var todo_item=document.getElementById("todo-item")
    var list = document.getElementById("list")
    var li= document.createElement("li")
    var div1 = document.createElement("div")
    var div2 = document.createElement("div")
    li.setAttribute("class","row")
    li.appendChild(div1)
    li.appendChild(div2)
    div1.setAttribute("class","col-xs col-sm col-md col-lg col-xl")
    div2.setAttribute("class","col-xs col-sm col-md col-lg col-xl")

    
    var text = document.createTextNode(todo_item.value)
    div1.appendChild(text)
    list.appendChild(li)
    todo_item.value=""
    var dlt_btn = document.createElement("button")
    var dlt_text = document.createTextNode("Delete")
    dlt_btn.appendChild(dlt_text)
    dlt_btn.setAttribute("onclick","deleteitem(this)")
    div2.appendChild(dlt_btn)
    var edt_btn = document.createElement("button")
    var edt_text = document.createTextNode("Edit")
    edt_btn.appendChild(edt_text)
    edt_btn.setAttribute("onclick","edititem(this)")
    div2.appendChild(edt_btn)


}


function deleteitem(a){
    a.parentNode.previousSibling.remove()
    a.parentNode.remove()
    
    

}



function deleteall(){
    list.innerHTML = ""
}

function edititem(a){
    var val = a.parentNode.firstChild
    var editvalue = prompt("enter new value")
    a.parentNode.firstChild.nodeValue = editvalue
    
}

