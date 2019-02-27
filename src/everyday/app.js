const soundboard = {};

soundboard.speak = function(text, callback) {
  var msg = new SpeechSynthesisUtterance(text);
  var voices = speechSynthesis.getVoices();
  msg.voice = voices[0];
  msg.voiceURI = 'native';
  msg.volume = 1;
  msg.rate = 0.75;
  msg.pitch = 1;
  msg.text = text;
  msg.lang = 'en-US';
  msg.onend = callback;

  speechSynthesis.speak(msg);

  return msg;
}

soundboard.displayClear = function() {
  var heroText = document.querySelector('.hero-text');
  heroText.innerHTML = "";
};

soundboard.displayAppendText = function(text) {
  var heroText = document.querySelector('.hero-text');
  heroText.innerHTML += text;
};

const main = (environment) => {
  var { activity, soundboardMediaUrl } = environment;
  var startAudio = new Audio(soundboardMediaUrl+"hey");
  var endAudio = new Audio(soundboardMediaUrl+"chop/everyday");

  startAudio.load();
  endAudio.load();

  const go = () => {
    startAudio.play().then(() => {

      startAudio.addEventListener("ended", function() {
        utterence = soundboard.speak(activity, function() {
          soundboard.displayClear();
          soundboard.displayAppendText(activity);
          endAudio.play();
        });

        var parts = activity.split(" ");

        utterence.onboundary = function(event) {
          if(event.name === "word") {
            var part = parts.shift();
            if(!part) {
              return
            }
            part += " ";
            soundboard.displayAppendText(part);
          }
        };
      });


    });
  };

  var clickOverlay = document.querySelector('.play-overlay');

  clickOverlay.addEventListener('click', function() {
    clickOverlay.remove();
    go();
  }, false);


};

main(window.ENVIRONMENT);
