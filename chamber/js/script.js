function copyright(){

    document.querySelector("#copyright").innerHTML = new Date().getFullYear();
    let x = document.lastModified;
    document.getElementById("modified").innerHTML = `Last Updated: ${x}`;

}

