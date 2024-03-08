
    // Функция для изменения текста ссылки
    // function changeLinkText() {
    //     let links = document.querySelectorAll(".linkText");
    //     links.forEach(link => {
    //         if (window.innerWidth <= 803) {
    //             link.textContent = "Все кейсы";
    //         } else {
    //             link.textContent = "ПОДРОБНЕЕ";
    //         }
    //     });
    // }
    
    // // Вызываем функцию при загрузке страницы и при изменении размера окна
    // window.onload = changeLinkText;
    // window.onresize = changeLinkText;
    

    function changeLinkText() {
        console.log("Function called"); // добавьте эту строку для проверки
        let links = document.querySelectorAll(".linkText");
        links.forEach(link => {
            if (window.innerWidth <= 803) {
                link.textContent = "Все кейсы";
            } else {
                link.textContent = "ПОДРОБНЕЕ";
            }
        });
    }
    