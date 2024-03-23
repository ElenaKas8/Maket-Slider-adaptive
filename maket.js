

// const banner_container = document.querySelector('.banner.slider_container')
//  const clients_container = document.querySelector('.clients.slider_container')
// const div_banner_round = document.querySelector('.banner_round_btns')
// const container = document.querySelector('.container')

// let banner_data = [
//     {text: 'Бухгалтерские услуги в вашем городе', btn_text: 'Наша презентация'},
//     {text: 'Всегда рады помочь', btn_text: 'Обращайтесь'},
//     {text: 'Бухгалтерские услуги от профессионалов', btn_text: 'Наши услуги'},
//     {text: 'Наши специалисты помогут Вам', btn_text: 'Наша презентация '},
// ]
//  let client_data = Array(8)

// let slide_width = container.clientWidth

// let slider_index = {
//     banner: 0,
//     clients: 0
// }

// for (let i = 0; i < banner_data.length; i++){
//     const div_container = document.createElement('div')
//     const h_text = document.createElement('h2')
//     const btn_elem = document.createElement('button')

//     div_container.className = 'banner_elem'
//     h_text.className = 'banner_text'
//     btn_elem.className = 'main_btn'

//     h_text.innerText = banner_data[i].text
//     btn_elem.innerText = banner_data[i].btn_text

//     div_container.append(h_text, btn_elem)
//     banner_container.append(div_container)

//     const round_btn = document.createElement('button')
//     div_banner_round.append(round_btn)

//     round_btn.onclick = () => {
//         slider_index.banner = i
//         banner_container.style.left = `${-1 * slider_index.banner * slide_width}px`
//         chnageActiveBtns()
//     }
// }

// let [banner_left_btn, banner_right_btn] = document.querySelectorAll('.banner_triggers_btns > button')

// banner_right_btn.onclick = () => {
//     if (slider_index.banner !== banner_data.length - 1){
//         slider_index.banner++
//         banner_container.style.left = `${-1 * slider_index.banner * slide_width}px`
//     } else {
//         slider_index.banner = 0
//         banner_container.style.left = '0px'
//     }
//     chnageActiveBtns()
// }

// banner_left_btn.onclick = () => {
//     if (slider_index.banner !== 0){
//         slider_index.banner--
//     } else {
//         slider_index.banner = banner_data.length - 1
//     }
//     banner_container.style.left = `${-1 * slider_index.banner * slide_width}px`
//     chnageActiveBtns()
// }

// for (let i = 0; i < client_data.length; i++){
//     const client_img = document.createElement('img')
//     client_img.src = './images/microsoft.png'
//     clients_container.append(client_img)
// }


// function chnageActiveBtns(){
//     const all_btns = document.querySelectorAll('.banner_round_btns > button')
//     console.log(all_btns);
//     all_btns.forEach( (elem, index) => {
//         if (slider_index.banner === index){
//             elem.classList.add('active')
//         } else {
//             elem.classList.remove('active')
//         }
//     })
// }




// chnageActiveBtns()

// //-----------Slider2-----------------




// const clientsContainer = document.querySelector('.clients.slider_container');
// const leftButton = document.querySelector('.btn_slider.left');
// const rightButton = document.querySelector('.btn_slider.right');
// let clientIndex = 0;

// // Создание клиентских элементов
// const clientCount = 8;
// const slideWidth = clientsContainer.clientWidth;

// for (let i = 0; i < clientCount; i++) {
//     const clientImg = document.createElement('img');
//     clientImg.src = './images/microsoft.png';
//     clientsContainer.appendChild(clientImg);
// }

// // Функция для обновления позиции слайдера
// function updateSliderPosition() {
//     clientsContainer.style.transform = `translateX(-${clientIndex * slideWidth}px)`;
// }

// // Обработчик события для кнопки "Влево"
// leftButton.addEventListener('click', () => {
//     if (clientIndex > 1) {
//         clientIndex -= 2;
//         updateSliderPosition();
//     }
// });

// // Обработчик события для кнопки "Вправо"
// rightButton.addEventListener('click', () => {
//     if (clientIndex < clientCount - 2) {
//         clientIndex += 2;
//         updateSliderPosition();
//     }
// });


// updateSliderPosition();






// Для первого слайдера (banner)
const banner_container = document.querySelector('.banner.slider_container');
const div_banner_round = document.querySelector('.banner_round_btns');
const container = document.querySelector('.container');

let banner_data = [
    {text: 'Бухгалтерские услуги в вашем городе', btn_text: 'Наша презентация'},
    {text: 'Всегда рады помочь', btn_text: 'Обращайтесь'},
    {text: 'Бухгалтерские услуги от профессионалов', btn_text: 'Наши услуги'},
    {text: 'Наши специалисты помогут Вам', btn_text: 'Наша презентация'},
];

let slide_width = container.clientWidth;

let slider_index = {
    banner: 0,
};

for (let i = 0; i < banner_data.length; i++){
    const div_container = document.createElement('div');
    const h_text = document.createElement('h2');
    const btn_elem = document.createElement('button');

    div_container.className = 'banner_elem';
    h_text.className = 'banner_text';
    btn_elem.className = 'main_btn';

    h_text.innerText = banner_data[i].text;
    btn_elem.innerText = banner_data[i].btn_text;

    div_container.append(h_text, btn_elem);
    banner_container.append(div_container);

    const round_btn = document.createElement('button');
    div_banner_round.append(round_btn);

    round_btn.onclick = () => {
        slider_index.banner = i;
        banner_container.style.left = `${-1 * slider_index.banner * slide_width}px`;
        changeActiveBtns();
    };
}

let [banner_left_btn, banner_right_btn] = document.querySelectorAll('.banner_triggers_btns > button');

banner_right_btn.onclick = () => {
    if (slider_index.banner !== banner_data.length - 1){
        slider_index.banner++;
        banner_container.style.left = `${-1 * slider_index.banner * slide_width}px`;
    } else {
        slider_index.banner = 0;
        banner_container.style.left = '0px';
    }
    changeActiveBtns();
};

banner_left_btn.onclick = () => {
    if (slider_index.banner !== 0){
        slider_index.banner--;
    } else {
        slider_index.banner = banner_data.length - 1;
    }
    banner_container.style.left = `${-1 * slider_index.banner * slide_width}px`;
    changeActiveBtns();
};

function changeActiveBtns(){
    const all_btns = document.querySelectorAll('.banner_round_btns > button');
    all_btns.forEach( (elem, index) => {
        if (slider_index.banner === index){
            elem.classList.add('active');
        } else {
            elem.classList.remove('active');
        }
    });
}

changeActiveBtns();

// Для второго слайдера (clients)
const clientsContainer = document.querySelector('.clients.slider_container');
const leftButton = document.querySelector('.btn_slider.left');
const rightButton = document.querySelector('.btn_slider.right');
let clientIndex = 0;

// Создание клиентских элементов
const clientCount = 8;
const slideWidth = clientsContainer.clientWidth;

for (let i = 0; i < clientCount; i++) {
    const clientImg = document.createElement('img');
    clientImg.src = './images/microsoft.png';
    clientsContainer.appendChild(clientImg);
}

// Функция для обновления позиции слайдера
function updateSliderPosition() {
    clientsContainer.style.transform = `translateX(-${clientIndex * slideWidth}px)`;
}

// Обработчик события для кнопки "Влево"
leftButton.addEventListener('click', () => {
    if (clientIndex > 1) {
        clientIndex -= 2;
        updateSliderPosition();
    }
});

// Обработчик события для кнопки "Вправо"
rightButton.addEventListener('click', () => {
    if (clientIndex < clientCount - 2) {
        clientIndex += 2;
        updateSliderPosition();
    }
});

updateSliderPosition();






// ------------customer feedback---------------

document.addEventListener('DOMContentLoaded', function () {
    const reviews = [
      "Lorem Ipsum - это текст-'рыба', часто используемый в печати и веб-дизайне. Lorem Ipsum является стандартной 'рыбой' для текстов на латинице с начала XVI века.",
      "В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.",
      "Lorem Ipsum - это текст-'рыба', часто используемый в печати и веб-дизайне.",
      
    ];
  
    const feedback = document.querySelector('.customer-feedback p');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const sliderBtns = document.querySelector('.slider3_btns');
  
    let currentIndex = 0;
  
    
    function updateFeedback() {
      feedback.textContent = reviews[currentIndex];
      updateSliderBtns();
    }
  
   
    prevBtn.addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
      updateFeedback();
    });
  

    nextBtn.addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % reviews.length;
      updateFeedback();
    });
  
    
    function updateSliderBtns() {
      sliderBtns.innerHTML = '';
      for (let i = 0; i < reviews.length; i++) {
        const roundBtn = document.createElement('button');
        roundBtn.className = 'round3_btn';
        if (i === currentIndex) {
          roundBtn.classList.add('active');
        }
        sliderBtns.appendChild(roundBtn);
        roundBtn.addEventListener('click', function () {
          currentIndex = i;
          updateFeedback();
        });
      }
    }
  
    // Первоначальное обновление текста отзыва и круглых кнопок
    updateFeedback();
  });
  
  
  