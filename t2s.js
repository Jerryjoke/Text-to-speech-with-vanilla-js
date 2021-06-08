const speak = () => {
  const message = document.querySelector("#textTospeech").value;
  var speech = new SpeechSynthesisUtterance();

  speech.lang = "en-US";
  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
};