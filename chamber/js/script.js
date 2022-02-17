const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
const fulldateUK = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);

document.querySelector("#currentdate").innerHTML = `${fulldate}`;
document.querySelector("aside").innerHTML = `${fulldateUK}`;

document.querySelector("#copyright").innerHTML = `${now.getFullYear()}`;
let x = document.lastModified;
document.getElementById("modified").innerHTML = `Last Updated: ${x}`;