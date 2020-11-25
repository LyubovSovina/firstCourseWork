
// let moreArticles = document.querySelector("#buttonLoadMore");


// console.log(Array.from($(".arrayLoadMore")));

// $('#buttonLoadMore').click(function() {
//   if ($("#box").is(":hidden")) {
//     $("#box").show("slow");
//   } else {
//     $("#box").slideUp();
//   }
// });
//

// $(document).ready( function(){
//   $('#buttonLoadMore').click(function() {
//     for(let i = 0; i <= $(".arrayLoadMore").length; i++){
//       if ($(".arrayLoadMore").hasClass("d-none")) {
//         $(".arrayLoadMore").removeClass("d-none");
//         $(".arrayLoadMore").addClass("d-flex");
//         if(i = $(".arrayLoadMore").length){
//           $('#buttonLoadMore').hide("fast");
//         }
//       }
//       console.log(i);
//     }
//   });
// });

// let $arrayEl1 = '<div class="arrayLoadMore d-flex justify-content-start mr-2 mb-2"><div class="col-6"><div class="card"> <img class="card-img-top" src="img/1.jpg" alt="Card image cap"><div class="card-body"><h5 class="card-title">Сравнение движков: Unreal Engine 4 против Unity 5</h5><p class="card-text">Выбрать движок дело не простое, а особенно когда оба очень хороши. В статье мы проведем сравнение двух программ и выясним какой движок использовать именно Вам!</p><a href="#" class="btn btn-warning">Читать далее</a></div></div></div><div class="col-6"><div class="card"><img class="card-img-top" src="img/2.jpg" alt="Card image cap"><div class="card-body"><h5 class="card-title">7 девушек айтишниц из фильмов и сериалов</h5><p class="card-text">Много ли вы знаете фильмов и сериалов, где главные персонажы это девушки программисты? Мы подобрали 7 фильмов с такой концепцией.</p><a href="#" class="btn btn-warning">Читать далее</a></div></div></div></div><div class="d-flex arrayLoadMore d-flex justify-content-start mr-2 mb-2"><div class="col-6"><div class="card"><img class="card-img-top" src="img/3.jpg" alt="Card image cap"><div class="card-body"><h5 class="card-title">11 полезных инструментов для веб-разработчика</h5><p class="card-text">Разработчики постоянно пытаются сделать свою жизнь проще или расширить собственные возможности. Мы подготовили 11 инструментов, которые это обеспечат.</p><a href="#" class="btn btn-warning">Читать далее</a></div></div></div><div class="col-6"><div class="card"><img class="card-img-top" src="img/4.jpg" alt="Card image cap"><div class="card-body"><h5 class="card-title">Что такое Deep Learning? Как работает глубокое обучение?</h5><p class="card-text">Как работает глубокое обучение и что оно из себя представляет? В ходе статьи мы расскажем про Deep Learning и разберемся с его ключевыми понятиями.</p><a href="#" class="btn btn-warning">Читать далее</a></div></div></div></div>'

// let array = [$arrayEl1, $arrayEl2];
// // console.log(array.length);
// $(document).ready( function(){
//   $('#buttonLoadMore').click(function() {
//     for(let i = 0; i <= array.length; i++){
//       $(array[i]).insertBefore( "#buttonLoadMore" );
//       if(i == array.length)
//         $('#buttonLoadMore').hide("fast");
//     }
//   });
// });


// $(document).ready( function(){
//   $('#buttonLoadMore').click(function() {
//     for(let i = 0; i <= array.length; i++){
//       $(array[i]).insertBefore( "#buttonLoadMore" );
//       if(i == array.length)
//         $('#buttonLoadMore').hide("fast");
//     }
//   });
// });


 // $('#buttonLoadMore').click(function(){
 //   for(let i = 0; i < $(".arrayLoadMore").length; i++){
 //
 //   }
 // });










// НАЧИНАЙ СМОТРЕТЬ ОТСЮДА

let article_1 = {
'photo': 'img/article_1.jpg',
'title': 'Устаревшие языки, которые уже не стоит изучать',
'intro': 'Есть много ЯП, которые уже отжили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоит изучать, хотя многие до сих пор делают это.'
};
let article_2 = {
'photo': 'img/article_2.jpg',
'title': 'Зачем нужен язык программирования Rust?',
'intro': 'Rust набирает популярность, но при этом многие до сих пор не понимают его ценности и функций. Мы расскажем про основные преимущества языка программирования Rust.'
};
let article_3 = {
'photo': 'img/article_3.jpg',
'title': 'Что выбрать C++ или C#? С чего лучше начать?',
'intro': 'Между собой оба языка очень похожи, при отсутствии опыта разобраться в различиях очень сложно. Статья поможет расставить всё по своим местам и укажет верный язык на основании поставленных задач.'
};
let article_4 = {
'photo': 'img/article_4.jpg',
'title': '3 логические задачи для настоящего программиста',
'intro': 'Компании любят проверять молодых специалистов на различные логические задачи. Мы подобрали три интересных задачи, которые заставят вас задуматься.'
};
let article_5 = {
'photo': 'img/article_5.jpg',
'title': 'Как создать свою криптовалюту?',
'intro': 'Создание собственной криптовалюты это сложная задача, на которую уйдет не мало сил и времени. Мы расскажем вам общий алгоритм создания своей собственной криптовалюты!'
};
let article_6 = {
'photo': 'img/article_6.jpg',
'title': 'ТОП 10: Подборка хобби для программиста',
'intro': 'Мы подобрали 10 хороших хобби, чтобы можно было с удовольствием провести время вне работы, а также улучшить логические и креативные способности мозга.'
};
let article_7 = {
'photo': 'img/article_7.jpg',
'title': 'СЕО-продвижение – верный способ улучшить свой бизнес',
'intro': 'Продвижение сайта это сложная работа, требующая вложений как денег, так и времени. Мы расскажем про верные способы СЕО-продвижения, позволяющие раскрутить сайт!'
};
let article_8 = {
'photo': 'img/article_8.jpg',
'title': '10 самых популярных сайтов написанных на Django',
'intro': 'Django набирает популярность и многие крупные компании используют его для создания веб проектов. Мы подобрали 10 популярных сайтов, написанных на Django.'
};

// Переменные
let articles = [article_1, article_2, article_3, article_4, article_5, article_6, article_7, article_8];
let start = 0;

$(".js-buttonLoadMore").on("click", function () {
	let htmlToInsert = ''; // Сюда запишем весь HTML для размещения на странице

	for(let i = start; i < articles.length; i++) {
		if(3 + start < i) // Всегда отображаем лишь по 4 статьи, поэтому если больше 3, то выходим из цикла
			break;
		htmlToInsert += "<div class='card col-md-5 col-12 notMarginLR'><img src='" + articles[i].photo + "' class='card-img-top' alt='" + articles[i].title + "'><div class='card-body'><h5 class='card-title'>" + articles[i].title + "</h5><p class='card-text'>" + articles[i].intro + "</p><a href='#' class='btn btn-warning'>Читать далее</a></div></div>";

		// Если индекс сейчас равен количеству элементов и минус один, то мы скрываем кнопку загрузить больше
		// if(i == articles.length - 1) {
		// 	$("#buttonLoadMore").hide(600);
		// 	break;
		// }

		// hide почему-то не работает

		// if(i == articles.length - 1) {
		// 	$("#buttonLoadMore").removeClass("d-block");
		// 	$("#buttonLoadMore").addClass("d-none");
		// 	break;
		// }

		if(i === articles.length - 1) {
			$(this).hide("slow");
			break;
		}
	}
	// Вставляем в конец блока все новые статьи, плюс в конце ставим разделение между блоками
	$("#loadMoreBlock").append(htmlToInsert);

	start += 4; // Добавляем 4, чтобы в следующий раз начинали с тех статей, которые еще не отображены
});

let searchOvelay = '<div id="myOverlay" class="overlay"><span class="closebtn" onclick="closeSearch()"title="Close Overlay">×</span><div class="overlay-content"><form action="/action_page.php"><input type="text" placeholder="Search.." name="search"><button type="submit"><i class="fa fa-search"></i></button></form></div></div>'

function openSearch() {
  document.querySelector("#myOverlay").style.display = "block";
	document.querySelector(".inputHeader").style.display = "none";
}

function closeSearch() {
  document.querySelector("#myOverlay").style.display = "none";
	document.querySelector(".inputHeader").style.display = "block";
}
