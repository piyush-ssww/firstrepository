let totalCalories = 0;
let calorieGoal = 2000;
let goalReached = false;

function addMeal() {
    let date = document.getElementById("mealDate").value;
    let day = document.getElementById("mealDay").value;
    let name = document.getElementById("mealName").value;
    let type = document.getElementById("mealType").value;
    let calories = parseInt(document.getElementById("calories").value);
    
    if (!date || !day || !name || !type || isNaN(calories)) return;
    
    totalCalories += calories;
    document.getElementById("totalCalories").innerText = totalCalories;
    
    let mealList = document.getElementById("mealList");
    let listItem = document.createElement("li");
    listItem.innerHTML = `${date} (${day}) - ${name} (${type}) - ${calories} cal <button class='remove-btn' onclick='removeMeal(this, ${calories})'>Remove</button>`;
    
    mealList.appendChild(listItem);
    updateProgress();
}

function removeMeal(element, calories) {
    totalCalories -= calories;
    document.getElementById("totalCalories").innerText = totalCalories;
    element.parentElement.remove();
    goalReached = false;
    updateProgress();
}

function updateGoal() {
    calorieGoal = parseInt(document.getElementById("calorieGoal").value) || 2000;
    goalReached = false;
    updateProgress();
}

function updateProgress() {
    let percentage = (totalCalories / calorieGoal) * 100;
    if (percentage >= 100 && !goalReached) {
        alert("Congratulations! You have reached 100% of your daily goal.");
        goalReached = true;
    }
    percentage = percentage > 100 ? 100 : percentage;
    document.getElementById("progressBar").style.width = percentage + "%";
    document.getElementById("progressBar").innerText = Math.round(percentage) + "%";
}