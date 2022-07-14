let new_date = Date.now();
let last_time = Number(window.localStorage.getItem("previous_visit"));
let calculate_difference = ((new_date - last_time) / 86400000).toFixed();
if (last_time == null) {
    let message = "Welcome to my site!"
} else {
    message = `It has been ${calculate_difference} days since your last visit.`
}
document.querySelector(".today").innerHTML = message
localStorage.setItem("previous_visit", new_date);