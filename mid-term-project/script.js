// Story objects
const story = [
    {
        text: "You are standing at a crossroads. Which path will you take?",
        choices: ["Go left", "Go right"],
        consequences: [1, 3],
        image: "download1.jpeg"
    },
    {
        text: "You chose the left path. You encounter a troll. What will you do?",
        choices: ["Fight", "Run away"],
        consequences: [2, 4],
        image: "download2.jpeg"
    },
    {
        text: "You chose the right path. You find a treasure chest. What will you do?",
        choices: ["Open it", "Leave it"],
        consequences: [5, 6],
        image: "download3.jpeg"
    },
    // Add more story stages as needed
    {
        text: "You fought the troll bravely but unfortunately lost the battle.",
        choices: ["Try again"],
        consequences: [0],
        image: "ending1.jpeg"
    },
    {
        text: "You managed to run away from the troll and find a hidden passage leading to safety.",
        choices: ["Try again"],
        consequences: [0],
        image: "ending2.jpeg"
    },
    {
        text: "You opened the treasure chest and found it empty. Disappointed, you continue your journey.",
        choices: ["Try again"],
        consequences: [0],
        image: "ending3.jpeg"
    },
    {
        text: "You decided to leave the treasure chest untouched and proceed on your adventure.",
        choices: ["Try again"],
        consequences: [0],
        image: "ending4.jpeg"
    },
    {
        text: "You chose a different path, but it led to a dead end. You decide to turn back.",
        choices: ["Try again"],
        consequences: [0],
        image: "ending5.jpeg"
    },
    {
        text: "You wandered off into the woods and got lost. Unable to find your way back, your adventure ends here.",
        choices: ["Try again"],
        consequences: [0],
        image: "ending6.jpeg"
    },
    {
        text: "You stumbled upon a hidden village and decided to settle down. Your adventure takes an unexpected turn.",
        choices: ["Try again"],
        consequences: [0],
        image: "ending7.jpeg"
    },
    {
        text: "You reached the end of your journey and fulfilled your quest. Congratulations!",
        choices: ["Try again"],
        consequences: [0],
        image: "ending8.jpeg"
    }
];

let currentStage = 0;

// Function to start/restart the game
function startGame() {
    currentStage = 0;
    updatePage();
}

// Function to update page display
function updatePage() {
    const stage = story[currentStage];
    document.getElementById("story-text").textContent = stage.text;
    document.getElementById("choices").innerHTML = "";

    stage.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => {
            currentStage = stage.consequences[index];
            updatePage();
        });
        document.getElementById("choices").appendChild(button);
    });

    document.getElementById("story-image").src = stage.image;
}

// Start the game initially
startGame();

// Restart game button
document.getElementById("restart-btn").addEventListener("click", startGame);
