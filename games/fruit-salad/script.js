// تشغيل الصوت التقديمي
document.getElementById('playAudio').onclick = () => {
    document.getElementById('voiceIntro').play();
};

// خاصية السحب والإفلات
const items = document.querySelectorAll('.draggable');
const box = document.querySelector('.droppable');
const correctSound = document.getElementById('correctSound');
const wrongSound = document.getElementById('wrongSound');

items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
});

box.addEventListener('dragover', dragOver);
box.addEventListener('drop', dropItem);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
}

function dragOver(e) {
    e.preventDefault();
}

function dropItem(e) {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    // تحقق بسيط (يمكنك توسعة المنطق هنا)
    if(draggable.id === 'item1' || draggable.id === 'item2') {
        box.src = "images/box.png";
        draggable.style.display = 'none';
        correctSound.play();
    } else {
        wrongSound.play();
    }
}
