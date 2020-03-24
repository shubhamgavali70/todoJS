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

    if(item == ''){
        // let p = document.createElement('p')
        // let alertVal = document.createTextNode("Please enter some value")
        // p.appendChild(alertVal)
        // document.querySelector('#input').appendChild(p)
        let x = document.getElementById('input')
        x.insertAdjacentHTML('afterend','<p style="color:red">Please enter some value</p>')
        return false;
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
        // <ul id="list">
           //     <li class="mycheck"> <input type="checkbox" id="check"> <label>Complete the course</label> </li>
             //   <li class="mycheck"> <input type="checkbox" id="check" checked> <label>Do some exercise</label> </li>
        //  </ul>
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
        return true
    }
    
}

function removeItem(){
    //console.log("Remove button clicked");
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

