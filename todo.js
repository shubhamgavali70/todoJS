var ul = document.getElementById('list');
var li;
var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem);

var removeAllButton = document.getElementById('removeAll');
removeAllButton.addEventListener('click',removeAllItems);

function addItem(){
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item);

    if(item == ""){
        alert('Please enter text');
        return false;
        //assignment
    }
    else{
        li = document.createElement('li');

        //chechbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id','check');
    
        //label
        var label = document.createElement('label');
        label.setAttribute('for','item');

        //add these element on web page
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);
        setTimeout(() => {
            li.className = 'visual';
        }, 3);


        input.value ='';
    }
}

function removeItem(){
    console.log("Remove button clicked");
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index]);
        }                
    }
}
function removeAllItems(){
    li = ul.children;
    ul.remove(li);
    
}

