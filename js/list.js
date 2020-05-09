function myList(){
    var item=document.getElementById("input").value;
    var text=document.createTextNode(item);
    
    var newItem=document.createElement("li");
    newItem.appendChild(text);
    document.getElementById("myList").appendChild(newItem);
    console.log(newItem);
    
    
    }
    
    function deleteList(){
        var list=document.getElementById("myList");
        list.removeChild(list.childNodes[0]);
       


    }
    function editList(){

      
       
         
    }
    