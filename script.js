const poses = [
    { name: "Mountain Pose (Tadasana)", duration: 60, gif: "tadasana.gif" },
    { name: "Forward Fold (Uttanasana)", duration: 120, gif: "uttanasana.gif" },
    { name: "Cat-Cow Stretch (Marjaryasana-Bitilasana)", duration: 180, gif: "marjaryasana.gif" },
    { name: "Downward-Facing Dog (Adho Mukha Svanasana)", duration: 120, gif: "adho_mukha_svanasana.gif" },
    { name: "Cobra Pose (Bhujangasana)", duration: 120, gif: "bhujangasana.gif" },
    { name: "Child’s Pose (Balasana)", duration: 180, gif: "balasana.gif" },
    { name: "Seated Forward Bend (Paschimottanasana)", duration: 120, gif: "paschimottanasana.gif" },
    { name: "Final Relaxation (Savasana)", duration: 120, gif: "savasana.gif" }
];

let currentPoseIndex = 0;
let timeRemaining;
let timerInterval;

const poseNameElement = document.getElementById('pose-name');
const timerElement = document.getElementById('timer');
const poseGifElement = document.getElementById('pose-gif');
const startButton = document.getElementById('start-button');

startButton.addEventListener('click', startRoutine);

function startRoutine() {
    startButton.disabled = true;
    document.getElementById('pose-container').style.display = 'block';
    startPreparation();
}

function startPreparation() {
    poseNameElement.innerText = `Prepare for ${poses[currentPoseIndex].name}`;
    poseGifElement.src = `assets/${poses[currentPoseIndex].gif}`;
    startCountdown(10, startAsana);
}

function startAsana() {
    const pose = poses[currentPoseIndex];
    poseNameElement.innerText = pose.name;
    startCountdown(pose.duration, startTransition);
}

function startTransition() {
    currentPoseIndex++;
    if (currentPoseIndex < poses.length) {
        poseNameElement.innerText = `Next Pose: ${poses[currentPoseIndex].name}`;
        poseGifElement.src = `assets/${poses[currentPoseIndex].gif}`;
        startCountdown(20, startAsana);
    } else {
        poseNameElement.innerText = "Routine Complete!";
        timerElement.innerText = "";
        poseGifElement.src = "";
        playBeep();
        startButton.disabled = false;
    }
}

function startCountdown(duration, callback) {
    timeRemaining = duration;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            playBeep();
            callback();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    timerElement.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function playBeep() {
    const beep = new Audio('assets/beep.mp3');
    beep.play();
}
