const texts = {
  "en": {
    greeting: "Hello! I'm going to make the biggest fruit salad in the world!",
    button: "عربي",
    langCode: "en-US"
  },
  "ar": {
    greeting: "مرحبًا! سأصنع أكبر سلطة فواكه في العالم!",
    button: "English",
    langCode: "ar-SA"
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  document.getElementById('speech').innerText = texts[lang].greeting;
  document.getElementById('langToggle').innerText = texts[lang].button;
}

function speak(text, lang) {
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = lang;
  speechSynthesis.speak(msg);
}

document.getElementById('playSpeech').onclick = () => {
  speak(texts[currentLang].greeting, texts[currentLang].langCode);
};

document.getElementById('langToggle').onclick = () => {
  currentLang = (currentLang === 'en') ? 'ar' : 'en';
  setLanguage(currentLang);
};

// Drag and Drop
const items = document.querySelectorAll('.draggable');
const box = document.querySelector('.droppable');

items.forEach(item => {
  item.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', e.target.src);
  });
});

box.addEventListener('dragover', e => e.preventDefault());
box.addEventListener('drop', e => {
  e.preventDefault();
  const data = e.dataTransfer.getData('text/plain');
  if(data.includes('blueberry')) {
    speak(currentLang === 'en' ? 'Correct!' : 'إجابة صحيحة!', texts[currentLang].langCode);
    box.src = data;
  } else {
    speak(currentLang === 'en' ? 'Try again!' : 'حاول مرة أخرى!', texts[currentLang].langCode);
  }
});

// تشغيل تلقائي للصوت عند تحميل الصفحة
window.onload = () => setLanguage(currentLang);
