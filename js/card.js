// карточка с выбором
var clickCount = 0;
document.getElementById('myButton').addEventListener('click', function() {
  var select = document.getElementById('mySelect');
  var paragraph = document.getElementById('myParagraph');
  var div1 = document.getElementById('div1');
  var div2 = document.getElementById('div2');
  var div3 = document.getElementById('div3');
  select.innerHTML = ''; // очищаем select
  var options = [];
  var text = '';

  switch (clickCount % 3) {
    case 0:
      options = ['9 класс', '11 класс'];
      text = 'Выбрать класс';
      div1.style.opacity = '0.25';
      div3.style.opacity = '0.25';
      div2.style.opacity = '1';
      break;
    case 1:
      options = ['VK', 'INST'];
      text = 'Способ связи с вами';
      div2.style.opacity = '0.25';
      div1.style.opacity = '0.25';
      div3.style.opacity = '1';
      break;
    case 2:
      options = ['Математика', 'Физика'];
      text = 'Выбрать предмет';
      div2.style.opacity = '0.25';
      div3.style.opacity = '0.25';

      div1.style.opacity = '1';
      break;
  }  

  for (var i = 0; i < options.length; i++) {
    var option = document.createElement('option');
    option.text = options[i];
    option.value = i + 1;
    select.add(option);
  }

  paragraph.textContent = text;

  clickCount++;
});

// бургер меню
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})



// кнопка вверх

$(document).ready(function(){
  // При нажатии на кнопку
  $('#backToTopButton').click(function(){
    // Анимированное перемещение вверх
    $('html, body').animate({scrollTop: 0}, 'slow');
  });
});
// Показать или скрыть кнопку при прокрутке
$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
    $('#backToTopButton').fadeIn();
  } else {
    $('#backToTopButton').fadeOut();
  }
});

// модульное окно
$(document).ready(function($) {
	$('.box-1__cnt-2__btn').click(function() {
		$('.popup-fade').fadeIn();
		return false;
	});	
	
	$('.popup-close').click(function() {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});
	
	$('.popup-fade').click(function(e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});



// маска ввода
$(function(){
  //2. Получить элемент, к которому необходимо добавить маску
  $("#phone").mask("8(999) 999-9999");
});

// показать больше кнопка
function myreadMoreFunction() {
  let dots = document.getElementById("dots-1");
  let moreText = document.getElementById("more-1");
  let btnText = document.getElementById("myReadBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Показать больше";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Показать меньше";
    moreText.style.display = "block";
  }
}

