const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

document.querySelector("#currentdate").innerHTML = `${fulldate}`;

document.querySelector("#copyright").innerHTML = `${now.getFullYear()}`;
let x = document.lastModified;
document.getElementById("modified").innerHTML = `Last Updated: ${x}`;

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }