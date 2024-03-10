

const frame = document.querySelector('.frame');
const textSlidesContainer = document.querySelector('.hero-text.container');
let slider_index = 0;

const texts = [
    'По любому вопросу',
    'Мы решим вашу задачу',
    'Сотрудники с опытом',
    'Обращайтесь к нам'
];

const title = document.querySelector('.hero-text h1');

const [leftBtn, rightBtn] = document.querySelectorAll('.triggers > button');

rightBtn.onclick = () => {
    if (slider_index !== texts.length - 1) {
        slider_index++;
    } else {
        slider_index = 0;
    }
    updateText();
};

leftBtn.onclick = () => {
    if (slider_index !== 0) {
        slider_index--;
    } else {
        slider_index = texts.length - 1;
    }
    updateText();
};

const slider_btns = document.querySelector('.slider_btns');

for (let i = 0; i < texts.length; i++) {
    const round_btn = document.createElement('button');
    round_btn.className = 'round_btn';
    slider_btns.append(round_btn);

    round_btn.onclick = () => {
        slider_index = i;
        updateText();
    };
}

function updateText() {
    title.textContent = texts[slider_index];
    changeActiveBtn();
}

function changeActiveBtn() {
    const all_btns = document.querySelectorAll('.round_btn');
    all_btns.forEach((elem, index) => {
        if (slider_index === index) {
            elem.classList.add('active');
        } else {
            elem.classList.remove('active');
        }
    });
}
