const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.getElementsByClassName("list")[0];

button.addEventListener("click", function() { 

    let chapter = input.value;

    if (chapter.length > 0){

        let newchap = document.createElement("li");
        let deletebutton = document.createElement("button");
        newchap.innerHTML = chapter;
        deletebutton.innerHTML = "❌";
        newchap.appendChild(deletebutton);
        list.appendChild(newchap);

        deletebutton.addEventListener("click", function(){

            list.removeChild(newchap);

        })

        input.focus();

    }

    input.value = "";

});

