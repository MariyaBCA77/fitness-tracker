function calculateFitness(){
    let steps = Number(document.getElementById("steps").value);
    let workout = Number(document.getElementById("workout").value);
    let water = Number(document.getElementById("water").value);

    // Check if inputs are filled
    if(steps === 0 && workout === 0 && water === 0){
        alert("Please enter your daily steps, workout minutes, and water intake!");
        return;
    }

    let score = (steps * 0.01) + (workout * 2) + (water * 1);

    document.getElementById("result").innerHTML = 
        "Your Fitness Score: " + score.toFixed(1);

    let suggestion = "";

    if(steps < 5000){
        suggestion += "Try walking more steps.<br>";
    }
    if(workout < 30){
        suggestion += "Do at least 30 min workout.<br>";
    }
    if(water < 8){
        suggestion += "Drink more water.<br>";
    }

    if(suggestion === ""){
        suggestion = "Great job! You are staying fit! 💪";
    }

    document.getElementById("suggestion").innerHTML = suggestion;
}