///Вычисляем размеры окна h - высота; w - ширина
const h = document.documentElement.clientHeight;
const w = document.documentElement.clientWidth;
////////////
///Получаем DOM объекты

const body = document.body;
const txtDiv = document.getElementById("textDiv");
const header = document.getElementById("header");
const avatarDiv = document.getElementById("avatarDiv");
avatarDiv.style.transition = `all 2s`;

////Счетчики для написания всегда в 0;
let counterText = 0;
let counterTextHTML = 0;
////////////
const textSpeed = 10; //Скорость побуквенного вывода
const textHTMLSpeed = 200; //Скорость вывода построчно ( HTML work )

///Установка текста
const arText = [ //Текст внизу
"Приветствую! Меня зовут.Роман мне 27 лет",
"\nПисать код для меня одно удовольствие!",
"\nЯ ищу работу на должность Front-End разработчика.",
"\nВладею JavaScript(Vanila), CSS3, HTML5, DOM, React, ReactDOM",
"\nПостоянно занимаюсь саморазвитием и самообучением,",
"\nХочу связать свою жизнь с кодом.",
]
///Текст ссылок
const arrA = [
`https://wa.me/+79143260720/?text=Привет!Я с твоего блога!`,
`https://telegram.im/@JSExpertMan`,
`mailto:greatjavadev@gmail.com`,
]
const arrMessage = [
  'img/wa.png',
  'img/tg.png',
  'img/gmail.png',
  ]
///Меню
const topMenuArray = ["Главная","Портфолио","Контакты","Статьи"];
let counter = 1000;
///Функция для создания элементов
const makeElem = (tagStr,textStr,classStr,placeDOM) => {
	const elem = document.createElement(tagStr);
	elem.innerText = (textStr);
	placeDOM.appendChild(elem);
	elem.setAttribute('class',classStr);

	///Изменение css. Позже вынести в отдельную функцию.
	switch(classStr) {
		case ".textDiv":
			elem.style.fontFamily = "Open Sans Condensed";
			elem.style.filter = "opacity(0)";
			elem.style.color = "#e0e0e1";
			elem.style.transition = "all 3s";
			elem.style.fontSize = "90%";
			elem.style.backgroundColor = "green";
			elem.style.marginRight = "70%";
			elem.style.paddingBottom = "5%";
			console.log(classStr);
			setTimeout(()=>elem.style.filter = "opacity(1)",counter);
			setTimeout(()=>elem.style.marginRight = "30%",counter);
			counter+=1000;
			break;
	}
}
///Описание создания верхнего меню
const createMenu = (arrayMenu) => {
  document.getElementById('topMenuUl').style.position = 'absolute';
  document.getElementById('topMenuUl').style.marginTop = `${h/6}px`;
  document.getElementById('topMenuUl').style.marginRight = `0`;
  document.getElementById('topMenuUl').style.marginLeft = `0`;
  document.getElementById('topMenuUl').style.paddingLeft = `${w/h*6}px`;
 // document.getElementById('topMenuUl').style.transition = 'all .5s';
  for(let menu of arrayMenu) {
    const li = document.createElement("li");
    li.style.display = "block";
    //li.style.marginRight = "5%"
    li.style.marginLeft = `${w/1.2}px`;
    li.style.marginTop = `${h/70}px`;
    li.style.backgroundColor = "#e0e0e1";
    li.style.padding = `${(w/h)*3}px`;
    //li.style.borderRadius = "20px";
    li.style.fontSize = `${(w/h)*10}px`;
    li.innerText = menu;
    document.getElementById("topMenuUl").appendChild(li);
  }
}
///Описание создание меню месседжеров
const messageMenu = (parrentDOM,arrMessage,arrA) => {
  let distance = 0;
  for(let i = 0;i<arrMessage.length;i++) {
    const a = document.createElement('a');
    const img = document.createElement('img');
    a.setAttribute('href',arrA[i]);
    img.setAttribute('src',arrMessage[i]);
    img.style.width = `${(w/h)*30}px`;
    img.style.height = `${(w/h)*30}px`;
    a.style.position = `absolute`;
    a.style.marginLeft = `${(w/1.3)+distance}px`;
    a.style.marginTop = `.5%`;
    a.appendChild(img);
    parrentDOM.appendChild(a);
    distance += (w/h)*32;
  }
}
///Описание создания текста по-символьно.
const makeText = (elem,txtArray) => {
	for(let str of txtArray) {
		for(let ch of str) {
		setTimeout(()=> elem.innerHTML += ch,counterText);
		counterText += textSpeed;
		}
  }
}
///Если вдруг нужен текст с HTML кодом
const makeTextHTML = (elem,txtArray) => {
	for(let str of txtArray) {
		elem.innerHTML += str;
		//counterTextHTML += textHTMLSpeed;
	}
}
///Создаем аватар
const makeAvatar = (imgSrcStr) => {
	const avatar = document.createElement(tagStr);
}

//////////////////////////////////Исполнение/////////////////////////////////////

///Работа с аватаркой
const avaDiv = document.querySelector('.avatarClass');
avaDiv.style.width = `${w/h*160}px`;
avaDiv.style.height = `${w/h*160}px`;
setTimeout(()=>avatarDiv.style.marginLeft = `-100%`,2000);
///Создаем текст
makeText(document.getElementById("mainP"),arText); //Сначало нижний
///Создаем меню
createMenu(topMenuArray);
///Создаем меню месседжеров
messageMenu(header,arrMessage,arrA);
///Меняем размер верхнего header под высоту экрана
header.style.height = `${w/14}px`;

