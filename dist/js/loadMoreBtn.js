
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










// рабочий варик

let article_1 = {
'photo': '../img/kramer.jpeg',
'title': 'Умножение матриц',
'intro': 'Какой-то текст',
'href': ''
};
let article_2 = {
'photo': '../img/kramer.jpeg',
'title': 'Возведение в степень',
'intro': 'Какой-то текст',
'href': ''
};
let article_3 = {
'photo': '../img/kramer.jpeg',
'title': 'Ранг матрицы',
'intro': 'Какой-то текст',
'href': ''
};
let article_4 = {
'photo': '../img/kramer.jpeg',
'title': 'Сумма матриц',
'intro': 'Какой-то текст',
'href': ''
};
let article_5 = {
'photo': '../img/kramer.jpeg',
'title': 'Транспозиция матрицы',
'intro': 'Какой-то текст',
'href': ''
};
let article_6 = {
'photo': '../img/kramer.jpeg',
'title': 'определитель матрицы',
'intro': 'Какой-то текст.',
'href': ''
};
let article_7 = {
'photo': '../img/kramer.jpeg',
'title': 'Какой-то текст',
'intro': 'Какой-то текст',
'href': ''
};
let article_8 = {
'photo': '../img/kramer.jpeg',
'title': 'Какой-то текст',
'intro': 'Какой-то текст.',
'href': ''
};

// Переменные
let articles = [article_1, article_2, article_3, article_4, article_5, article_6, article_7, article_8];
let start = 0;

$(".js-buttonLoadMore").on("click", function () {
	let htmlToInsert = ''; // Сюда запишем весь HTML для размещения на странице

	for(let i = start; i < articles.length; i++) {
		if(3 + start < i) // Всегда отображаем лишь по 4 статьи, поэтому если больше 3, то выходим из цикла
			break;
		htmlToInsert += "<div class='card col-md-5 col-12 notMarginLR'><img src='" + articles[i].photo + "' class='card-img-top' alt='" + articles[i].title + "'><div class='card-body'><h5 class='card-title'>" + articles[i].title + "</h5><p class='card-text'>" + articles[i].intro + "</p><a href='#' class='btn btn-primary'>Читать далее</a></div></div>";

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

