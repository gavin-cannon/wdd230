let date = new Date()
let year = date.getFullYear()

document.querySelector("#copyright").innerHTML = "&copy;" + year;

document.querySelector("#lastUpdated").innerHTML = `Last Updated: ${document.lastModified}`;