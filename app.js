var list = document.getElementById("list");
firebase.database().ref('todos').on('child_added',function(data){
    console.log(data.val())
    var li = document.createElement('li');
    var liText = document.createTextNode(data.val().value);
    li.appendChild(liText);
    list.appendChild(li);
    
    var delbtn = document.createElement('button');
    var delBtnText = document.createTextNode('DELETE');
    delbtn.setAttribute('id',data.val().key)
    delbtn.appendChild(delBtnText);
    li.appendChild(delbtn);
    delbtn.setAttribute("onclick","deleteItem(this)");
    var editbtn = document.createElement('button');
    var editBtnText = document.createTextNode('EDIT');
    editbtn.appendChild(editBtnText);
    editbtn.setAttribute('id',data.val().key);
    li.appendChild(editbtn);
    editbtn.setAttribute("onclick","editItem(this)");


})

function addTodo(){
    var todo_item = document.getElementById("todo-item");
    var database = firebase.database().ref('todos');
    var key = database.push().key;
    var todo = {
        value : todo_item.value,
        key : key
    }
    database.child(key).set(todo);
    todo_item.value = "";

        

}

function deleteItem(e){
e.parentNode.remove();
firebase.database().ref('todos').child(e.id).remove();
}

function deleteAll(){
    firebase.database().ref('todos').remove();
    list.innerHTML = "";

}

function editItem (e){

    var val = prompt("Enter new value",e.parentNode.firstChild.nodeValue);

    if ( val != "" && val != null){
        var editTodo = {
            value : val,
            key : e.id
        }
        firebase.database().ref('todos').child(e.id).set(editTodo)
         
        e.parentNode.firstChild.nodeValue = val;
    }
        
    
    
 
}