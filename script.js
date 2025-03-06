
        var tasks=document.getElementById("task")
        var list=document.getElementById("list")
        function add(){
            var item=document.createElement("li")
            item.innerHTML=tasks.value+"<button class='btn' onclick='delet(event)' >x</button>"
            list.append(item)
            console.log(tasks.value)
        }
        function delet(event){
            event.target.parentElement.remove()
        }
    