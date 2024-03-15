

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


//-----------Slider2-----------------

document.addEventListener('DOMContentLoaded', function () {
    const frame2 = document.querySelector('.our-clients-content .hero-text');
    const cards_container = frame2.querySelector('img');

    let slider2_index = 0;

    const images2 = [
        'images/microsoft.png',
        'images/portfol.png',
        'images/buhone.png',
    ];

    // Добавляем первое изображение в cards_container
    cards_container.src = images2[0];

    const [leftButton, rightButton] = document.querySelectorAll('.our-clients-content .triggers2 button');

    rightButton.onclick = () => {
        slider2_index = (slider2_index + 1) % images2.length;
        cards_container.src = images2[slider2_index];
        changeActiveBtn2();
    };

    leftButton.onclick = () => {
        slider2_index = (slider2_index - 1 + images2.length) % images2.length;
        cards_container.src = images2[slider2_index];
        changeActiveBtn2();
    };

    const slider2_btns = document.querySelector('.our-clients-content .slider2_btns');

    // Добавляем кнопки выбора слайда
    images2.forEach((_, i) => {
        const round_btn = document.createElement('button');
        round_btn.className = 'round_btn';
        slider2_btns.appendChild(round_btn);

        round_btn.onclick = () => {
            slider2_index = i;
            cards_container.src = images2[slider2_index];
            changeActiveBtn2();
        };
    });

    function changeActiveBtn2() {
        const all_btns = document.querySelectorAll('.our-clients-content .round_btn');
        all_btns.forEach((elem, index) => {
            if (slider2_index === index) {
                elem.classList.add('active');
            } else {
                elem.classList.remove('active');
            }
        });
    }

    changeActiveBtn2();
});
