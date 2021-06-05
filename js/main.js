const textSpeed = 10; //Скорость побуквенного вывода
const textHTMLSpeed = 200; //Скорость вывода построчно ( HTML work )
///Установка текста
const arText = [ ///Текст внизу
"Приветствую! Меня зовут.Роман мне 27 лет",
"\nПисать код для меня одно удовольствие!",
"\nЯ ищу работу на должность Front-End разработчика.",
"\nВладею JavaScript(Vanila), CSS3, HTML5, DOM, React, ReactDOM",
"\nПостоянно занимаюсь саморазвитием и самообучением,",
"\nХочу связать свою жизнь с кодом.",
]
const arTextTop = [ ///Текст вверху
"Мои контактные данные:<br>",
" What's app: <a href='https://wa.me/+79143260720/?text=Привет!Я с твоего блога!'>Send to</a><br>",
" Telegram: <a href='https://telegram.im/@JSExpertMan' target='_blank'>Send to</a><br>",
" EMail: <a href='mailto:greatjavadev@gmail.com'>greatjavadev@gmail.com</a><br>",
"<br>    В начале письма просьба писать \n\t'предложение по работе'",

]

///Получаем BODY
const body = document.body;
const txtDiv = document.getElementById("textDiv");
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

////Счетчики для написания всегда в 0;
let counterText = 0;
let counterTextHTML = 0;
const makeText = (elem,txtArray) => {
	for(let str of txtArray) {
		for(let ch of str) {
		setTimeout(()=> elem.innerHTML += ch,counterText);
		counterText += textSpeed;
		}
	}
}
//Если вдруг нужен текст с HTML кодом
const makeTextHTML = (elem,txtArray) => {
	for(let str of txtArray) {
		setTimeout(()=> elem.innerHTML += str,counterTextHTML);
		counterTextHTML += textHTMLSpeed;
	}
}
///Создаем аватар
const makeAvatar = (imgSrcStr) => {
	const avatar = document.createElement(tagStr);
	
}
///Задаем размер аватарки
const avaDiv = document.querySelector('.avatarClass');
const h = document.documentElement.clientHeight;
const w = document.documentElement.clientWidth;
avaDiv.style.width = `${w/h*140}px`;
avaDiv.style.height = `${w/h*160}px`;
///Создаем текст
//makeElem("p","Привет! Меня зовут Роман! Это моя визитка!",".textDiv",txtDiv);
makeText(document.getElementById("mainP"),arText); //Сначало нижний
makeTextHTML(document.getElementById("topP"),arTextTop);
