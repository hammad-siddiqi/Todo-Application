var list = document.getElementById("list");

function addTodo(){
    var todo_item = document.getElementById("todo-item");
    var li = document.createElement('li');
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText);
    list.appendChild(li);
    todo_item.value = "";
    var delbtn = document.createElement('button');
    var delBtnText = document.createTextNode('DELETE');
    delbtn.appendChild(delBtnText);
    li.appendChild(delbtn);
    delbtn.setAttribute("onclick","deleteItem(this)");
    var editbtn = document.createElement('button');
    var editBtnText = document.createTextNode('EDIT');
    editbtn.appendChild(editBtnText);
    li.appendChild(editbtn);
    editbtn.setAttribute("onclick","editItem(this)");
    

}

function deleteItem(e){
e.parentNode.remove();
}

function deleteAll(){
    list.innerHTML = "";
}

function editItem (e){

    var val = prompt("Enter new value",e.parentNode.firstChild.nodeValue);
    if ( val != "" && val != null){
        
        e.parentNode.firstChild.nodeValue = val;
    }
        
    
    
 
}