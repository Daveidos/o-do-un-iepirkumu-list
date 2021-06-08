window.addEventListener('load', function(){
    const ToDoList = document.querySelector('#ToDoList ul');
    const PirkList = document.querySelector('#PirkList ul');
    const list = document.querySelectorAll('.list-content ul');
    const addBtn = document.querySelectorAll('.addBtn');

    var ToDoliCount = 0;
    var PirkliCount = 0;
    const maxliCount = 14;

    // To-Do list
    list[0].addEventListener('click', (e) => 
    {
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
            ToDoliCount--;
            if(ToDoliCount > 0)
                document.querySelector('#ToDoList h2').style.display = "none";
            else
                document.querySelector('#ToDoList h2').style.display = "block";
        }
    });
    // Pirkumu list
    list[1].addEventListener('click', (e) => 
    {
        if(e.target.className == 'delete'){
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
            PirkliCount--;
            if(PirkliCount > 0)
                document.querySelector('#PirkList h2').style.display = "none";
            else
                document.querySelector('#PirkList h2').style.display = "block";
        }
    });
    // To-Do button
    addBtn[0].addEventListener('click', (e) =>
    {
        const value = document.querySelectorAll('.Text-adding input')[0].value;
        const li = document.createElement('li');
        const delBtn = document.createElement('span');
        const text = document.createElement('span');

        if(ToDoliCount < maxliCount)
        {
            if(value != ''){
                text.textContent = value;
                delBtn.textContent = 'Delete';
    
                text.classList.add('name');
                delBtn.classList.add('delete');
    
                li.appendChild(text);
                li.appendChild(delBtn);
                ToDoList.appendChild(li);
                ToDoliCount++;
                console.log("To-do:" + ToDoliCount);
                if(liCount(ToDoliCount))
                    document.querySelector('#ToDoList h2').style.display = "none";
                else
                    document.querySelector('#ToDoList h2').style.display = "block";
            }
            else
                alert("Enter the task name!");
        }
        else
            alert("Iesniegts maksimums tasku skaits");
    });
    // Pirkumu button
    addBtn[1].addEventListener('click', (e) =>
    {
        const value = document.querySelectorAll('.Text-adding input')[1].value;
        const li = document.createElement('li');
        const delBtn = document.createElement('span');
        const text = document.createElement('span');

        if(PirkliCount < maxliCount)
        {
            if(value != ''){
                text.textContent = value;
                delBtn.textContent = 'Delete';
    
                text.classList.add('name');
                delBtn.classList.add('delete');
    
                li.appendChild(text);
                li.appendChild(delBtn);
                PirkList.appendChild(li);
                PirkliCount++;
                if(liCount(PirkliCount))
                    document.querySelector('#PirkList h2').style.display = "none";
                else
                    document.querySelector('#PirkList h2').style.display = "block";
            }
            else
                alert("Enter the task name!");
        }
        else
            alert("Iesniegts maksimums tasku skaits");
    });
    function liCount(liCount){
        if(liCount > 0)
            return true;
        else
            return false;
    }
})