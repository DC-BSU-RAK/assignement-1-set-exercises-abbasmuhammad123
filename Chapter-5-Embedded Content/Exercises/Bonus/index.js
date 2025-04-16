document.addEventListener('DOMContentLoaded', function() { // wait for the DOM  to be fully loaded 
    const audioPlayer = document.getElementById('audio-player');
    const soundButtons = document.querySelectorAll('.sound-button');//this code  gets all elements sound class button 
    const ttsInput = document.getElementById('tts-input');
    const ttsButton = document.getElementById('tts-button'); 
    const volumeControl = document.getElementById('volume-control'); 
    
    // Function to play audio clips
    function triggerAudio(audioFile) {
        console.log("Initiating audio:", audioFile); // Log
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        
        // Set audio source directly
        audioPlayer.src = audioFile;
        
        // Attempt to play audio and catch errors
        const audioPromise = audioPlayer.play();
        
        if (audioPromise !== undefined) {
            audioPromise.then(() => {
                // Audio started
                console.log("Audio is playing");
            })
            .catch(err => {
                console.error('Playback failed:', err);
                alert('Playback issue: ' + err.message);
            });
        }
    }
    
    // Attach click handlers to buttons
    soundButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Clear active state from all buttons
            soundButtons.forEach(btn => btn.classList.remove('highlight'));
            
            // Highlight clicked button
            this.classList.add('highlight');
            
            // Trigger audio playback
            const audioFile = this.getAttribute('data-audio');
            triggerAudio(audioFile);
        });
    });
    
    // Handle text-to-speech
    ttsButton.addEventListener('click', function() {
        const inputText = ttsInput.value.trim();
        
        if (inputText && 'speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance(inputText);
            
            // Select a US English female voice if possible
            const voices = window.speechSynthesis.getVoices();
            const usVoice = voices.find(voice => 
                voice.lang.includes('en-US') && voice.name.includes('Female')
            );
            
            if (usVoice) {
                speech.voice = usVoice;
            }
            
            // Adjust voice properties
            speech.pitch = 1.2;
            speech.rate = 1.0;
            
            window.speechSynthesis.speak(speech);
        }
    });
    
    // Load speech synthesis voices
    if ('speechSynthesis' in window) {
        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = function() {
                // Voices ready for use
            };
        }
    }
    
    // Volume control functionality
    volumeControl.addEventListener('input', function() {
        audioPlayer.volume = this.value;
        console.log("Volume set to:", this.value);
    });
    
    // Audio readiness check
    audioPlayer.addEventListener('canplay', function() {
        console.log("Audio is ready to play");
    });
    
    // this code Handles audio errors
    audioPlayer.addEventListener('error', function(e) {
        console.error("Audio issue:", e);
        alert("Audio problem: " + (audioPlayer.error ? audioPlayer.error.message : "unknown issue"));
    });
});