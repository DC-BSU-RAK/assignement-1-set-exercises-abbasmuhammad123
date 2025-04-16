document.addEventListener("DOMContentLoaded", function() {
    // this code Selects all elements with the class 'sample'
    const samples = document.querySelectorAll('.sample');

    // this code Adds click event listener to each sample element
    samples.forEach(sample => {
        sample.addEventListener('click', function() {
            // Get the audio file path from the data-audio attribute
            const audioFile = this.getAttribute('data-audio');
            // Play the audio file
            playSound(audioFile);
        });
    });

    // this code Function to play an audio file
    function playSound(audioFile) {
        //this code Creates a new Audio object with the provided file
        const audio = new Audio(audioFile);
        // Play the audio
        audio.play();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // this code Gets the text input element for text-to-speech
    const textToSpeechInput = document.getElementById("text-to-speech");
    // this code Gets the button element that triggers text-to-speech
    const speakButton = document.getElementById("speak-button");

    // this code Functions to convert text to speech
    function textToAudio() {
        // Get the text from the input field
        let msg = textToSpeechInput.value;
        // this code Creates a new SpeechSynthesisUtterance object
        let speech = new SpeechSynthesisUtterance();
        // Set language to English (Uk)
        speech.lang = "en-Uk";
        // this code Sets the text to be spoken
        speech.text = msg;
        // Set volume (0 to 1, multiplied for effect)
        speech.volume = 3;
        // Set speech rate (0.1 to 10)
        speech.rate = 0.5;
        // Set pitch (0 to 2)
        speech.pitch = 1;
        // Trigger the speech synthesis
        window.speechSynthesis.speak(speech);
    }

    // Add click event listener to the speak button
    speakButton.addEventListener("click", function() {
        //this code Adds animation class to input field
        textToSpeechInput.classList.add("animate-input");
        // this code Adds animation class to button
        speakButton.classList.add("animate-button");

        // Delay text-to-speech execution for animation effect
        setTimeout(textToAudio, 500);
        // this code Removes animation classes after 1 second
        setTimeout(function() {
            textToSpeechInput.classList.remove("animate-input");
            speakButton.classList.remove("animate-button");
        }, 1000);
    });
});