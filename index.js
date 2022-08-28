window.onload = function(){
    openBurgerMenu();
console.log("Вёрстка валидная +10\n Вёрстка семантическая +20\n В коде странице присутствуют следующие элементы (указано минимальное количество, может быть больше):\n <header>, <main>, <footer> +2\n шесть элементов <section> (по количеству секций) +2\n только один заголовок <h1> +2\n пять заголовков <h2> (количество секций минус одна, у которой заголовок <h1>) +2\n один элемент <nav> (панель навигации) +2\n два списка ul > li > a (панель навигации, ссылки на соцсети) +2\n десять кнопок <button> +2\n два инпута:  +2\n один элемент <textarea> +2\n три атрибута placeholder +2\n Вёрстка соответствует макету +48\n блок <header> +6\n секция hero +6\n секция skills +6\n секция portfolio +6\n секция video +6\n секция price +6\n секция contacts +6\n блок <footer> +6\n Требования к css + 12\n для построения сетки используются флексы или гриды +2\n при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\n фоновый цвет тянется на всю ширину страницы +2\n иконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2\n изображения добавлены в формате .jpg +2\n есть favicon +2\n Интерактивность, реализуемая через css +20\n плавная прокрутка по якорям +5\n ссылки в футере ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ +5\n интерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта.\n Если в макете указаны стили при наведении и клике, для элемента указываем эти стили.\n Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +5\n обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5");
}




let openBurgerMenu = () => {
    let burgerMenu = document.querySelector(".burger-menu");
    let burgerButton = document.querySelector(".burger-menu-button");
    let burgerLinks = document.querySelector(".main-nav");

    let toggleMenu = () => {
        burgerMenu.classList.toggle("burger-menu-active");

        if(burgerMenu.classList.contains("burger-menu-active")){
            document.body.style.overflow = "hidden";
        } else{
            document.body.style.overflow = "visible";
        }
      }

      burgerButton.addEventListener("click", (e) => {
        e.preventDefault();
        toggleMenu();
    });
    burgerLinks.addEventListener("click", (e) => {
        if(e.target.classList.contains("burger-menu-link")) {
            toggleMenu()
        }
    });
}

//////////////////////////PORTFOLIO///////////////////////////////////////

const portfolioBtns = document.querySelector(".time-of-the-year");
const portfolioButtons = document.querySelectorAll(".time-of-the-year-button");
const portfolioImages = document.querySelectorAll('.portfolio-image');
const seasons = ['winter', 'spring', 'summer', 'autumn'];

portfolioBtns.onclick = function changeImage(event) {
    if(event.target.classList.contains("time-of-the-year-button")) {
        let seasonName = event.target;
        portfolioButtons.forEach((button, index) => {
            button.classList.remove("active");
        });
        changeClassActive("active", seasonName);

        if(seasonName.classList.contains("winter")){
            portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
        } else if(seasonName.classList.contains("spring")){
            portfolioImages.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
        } else if(seasonName.classList.contains('summer')){
            portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
        }else {
            portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
        }
    }
  }

let preloadImages = (seasons) => {
    seasons.forEach((season, index) => {
        for(let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./assets/img/${season}/${i}.jpg`;
        }
    })
};
let changeClassActive = (className, elementTarget) => {
    elementTarget.classList.add(className);
}

//////////////////////////LANGUAGE///////////////////////////////////////

const i18Obj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-description-1-span-1': 'One location',
      'price-description-1-span-2': '120 photos in color',
      'price-description-1-span-3': '12 photos in retouch',
      'price-description-1-span-4': 'Readiness 2-3 weeks',
      'price-description-1-span-5': 'Make up, visage',
      'price-description-2-span-1': 'One or two locations',
      'price-description-2-span-2': '200 photos in color',
      'price-description-2-span-3': '20 photos in retouch',
      'price-description-2-span-4': 'Readiness 1-2 weeks',
      'price-description-2-span-5': 'Make up, visage',
      'price-description-3-span-1': 'Three locations or more',
      'price-description-3-span-2': '300 photos in color',
      'price-description-3-span-3': '50 photos in retouch',
      'price-description-3-span-4': 'Readiness 1 week',
      'price-description-3-span-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'bel': {
      'skills': 'Навыкі',
      'portfolio': 'Партфоліа',
      'video': 'Відэа',
      'price': 'Цэны',
      'contacts': 'Кантакты',
      'hero-title': 'Аляксандра Райс',
      'hero-text': 'Захавайце шчырыя эмоцыі, рамантычныя перажыванні і шчаслівыя моманты жыцця разам з прафесійным фатографам',
      'hire': 'Запрасіць',
      'skill-title-1': 'Фотаздымак',
      'skill-text-1': 'Высакаякасныя фота ў студыі і на прыродзе',
      'skill-title-2': 'Відэаздымка',
      'skill-text-2': 'Захавайце лепшыя моманты, каб яны назаўсёды заставаліся з вамі',
      'skill-title-3': 'Рэтуш',
      'skill-text-3': 'Я імкнуся да таго, каб фатаграфія перавышала рэальнасць',
      'skill-title-4': 'Гук',
      'skill-text-4': 'Прафесійны запіс гука для відэа, рэкламы, партфоліа',
      'winter': 'Зіма',
      'spring': 'Вясна',
      'summer': 'Лета',
      'autumn': 'Восень',
      'price-description-1-span-1': 'Адна лакацыя',
      'price-description-1-span-2': '120 каляровых фота',
      'price-description-1-span-3': '12 адрэтушаваных фота',
      'price-description-1-span-4': 'Гатоўнасць праз 2-3 тыдні',
      'price-description-1-span-5': 'Макіяж, візаж',
      'price-description-2-span-1': 'Адна-дзве лакацыі',
      'price-description-2-span-2': '200 каляровых фота',
      'price-description-2-span-3': '20 адрэтушаваных фота',
      'price-description-2-span-4': 'Гатоўнасць праз 1-2 тыдні',
      'price-description-2-span-5': 'Макіяж, візаж',
      'price-description-3-span-1': 'Тры лакацыі і больш',
      'price-description-3-span-2': '300 каляровых фота',
      'price-description-3-span-3': '50 адрэтушаваных фота',
      'price-description-3-span-4': 'Гатоўнасць праз 1 тыдзень',
      'price-description-3-span-5': 'Макіяж, візаж, прычоска',
      'order': 'Замовіць здымку',
      'contact-me': 'Звязацца',
      'send-message': 'Даслаць'
    }
  }
const languageBtns = document.querySelector(".change-lang");
const translateList = document.querySelectorAll('[data-i18]');

let getTranslate = (language) => {
    lang = language;
    translateList.forEach((elem) => {
        elem.textContent = i18Obj[language][elem.dataset.i18]; 
    });
}
 let changeTheme = (theme) => {
    let elementsChange = ["skills", "portfolio","video","price"];

        elementsChange.forEach((elem, index) => {
        document.querySelector("." + `${elem}`).classList.toggle('light-theme');

        if(theme = "dark"){
            theme = "light";
        } else{
            theme = "dark";
        }
        })
 }
languageBtns.onclick = function getTranslateLang(event) {
    let language = event.target.textContent;
    if(event.target.classList.contains("bel-lang")) {
        changeClassActive("active", event.target);
        document.querySelector('.eng-lang').classList.remove("active");
        getTranslate(language);
    }else if(event.target.classList.contains("eng-lang")){
        changeClassActive("active", event.target);
        document.querySelector('.bel-lang').classList.remove("active");
        getTranslate(language);
    }else if(event.target.classList.contains("light-theme-button")){
        changeTheme(theme);
    }
}

//////////////////////////LOCAL STORAGE///////////////////////////////////////
let lang = "en";
let theme  = "dark";
function setLocalStorage() {
    localStorage.setItem('lang', lang);
    localStorage.setItem('theme', theme);
  }
function getLocalStorage() {
    if(localStorage.getItem('lang')) {
      const lang = localStorage.getItem('lang');
      const theme = localStorage.getItem('theme');
      getTranslate(lang);
      changeTheme(theme)
    }
}

  window.addEventListener('beforeunload', setLocalStorage);
  window.addEventListener('load', getLocalStorage)
  window.addEventListener('load', changeTheme)

///
preloadImages(seasons);