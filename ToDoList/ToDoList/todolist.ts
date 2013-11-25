
class Todo {
    table : HTMLElement;
    description: String;  

    constructor(table: HTMLElement, description : String) {
        this.table = table;
        this.description = description;
    }

    create() {
        var tr = document.createElement("tr");
        var tdDesc = document.createElement("td");
        var tdIsDone = document.createElement("td");
        tr.appendChild(tdDesc);
        tdDesc.innerText += this.description;

        tr.setAttribute("id", count);
        tr.appendChild(tdIsDone);
        this.table.appendChild(tr);
        var label = document.createElement("label");
        tdIsDone.appendChild(label);
        var input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.setAttribute("id", "checkbox" + count);
        input.setAttribute("name", "checkbox" + count);
        label.appendChild(input);
    }   
}

declare var count: any;
count = 0;

function addNewToDo() {  
    var el = document.getElementById("tbody");
    var textArea = <HTMLTextAreaElement>document.getElementById("textarea");
    var desc = textArea.value;
    textArea.value = "";
    var todo = new Todo(el, desc);
    todo.create();
    count += 1;      
}

function clearChecked() {
    var cnt2 = 0;
    for (var i = 0; i < count; i++) {
        var checkbox = <HTMLInputElement> document.getElementById("checkbox" + i);
        if (checkbox.checked) {
            var element = document.getElementById(i.toString());
            element.parentNode.removeChild(element);
            cnt2 += 1;
        }
        else { 
            var element = document.getElementById(i.toString());
            element.setAttribute("id", (i - cnt2).toString());
            checkbox.setAttribute("id", "checkbox" + (i - cnt2));
        }
    }
    count -= cnt2;
}
 

