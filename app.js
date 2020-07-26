
function Additem(){
    var todo_item=document.getElementById("todo-item")
    var list = document.getElementById("list")
    var li= document.createElement("li")
    li.setAttribute("class","container dot")

    var text = document.createTextNode(todo_item.value)
    li.appendChild(text)
    list.appendChild(li)
    todo_item.value=""
    var dlt_btn = document.createElement("button")
    var dlt_text = document.createTextNode("Delete")
    dlt_btn.appendChild(dlt_text)
    dlt_btn.setAttribute("onclick","deleteitem(this)")
    li.appendChild(dlt_btn)
    var edt_btn = document.createElement("button")
    var edt_text = document.createTextNode("Edit")
    edt_btn.appendChild(edt_text)
    edt_btn.setAttribute("onclick","edititem(this)")
    li.appendChild(edt_btn)


}


function deleteitem(a){
    
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

