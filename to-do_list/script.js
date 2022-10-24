document.getElementById("Addbtn").addEventListener("click",function(){
    var task=document.getElementById("todo").value;
    if(task=="" || task==null)
    {
        alert("First, Enter some task");
    }
    else{
    var old= document.getElementById("list").innerHTML;
    var newrecord =`
        <li>
        <table id="table" border=> 
        <tr>
            <td rowspan=3 id="td">
            ${task}
            </td>
            <td>
            <button id="ongoing" onclick="ongoing(this)">Ongoing</button>
            </td><br>
            <tr>
            <td>
            <button id="completed" onclick="completed(this)">Completed</button>
            </td><br>
        </tr>
        <tr>
        <td>
            <button id="remove" onclick="remove(this)">Remove</button>
            </td>
        </tr>

        </tr>
        </table>
        </li>
    `;
    document.getElementById("list").innerHTML=old+newrecord;
    document.getElementById("todo").value="";   
}
});

function ongoing(target){
    target.parentElement.parentElement.parentElement.style=`background-color:orange;color:white`;
}

function completed(target){
    target.parentElement.parentElement.parentElement.style=`background-color:green;color:white;`;
    

}

function remove(target){
    target.parentElement.parentElement.parentElement.remove();
}