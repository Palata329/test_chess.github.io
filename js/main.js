document.addEventListener('DOMContentLoaded', function() {

//Если изменяете в девтулсе ширину экрана, то перезагрузите страницу, чтобы сработал js именно для нужной ширины, а то многие элементы не скроются и будет казаться что адаптив сломан.

  let participantItem1 = document.getElementById('participantItem1');
  let participantItem2 = document.getElementById('participantItem2');
  let participantItem3 = document.getElementById('participantItem3');
  let participantItem4 = document.getElementById('participantItem4');
  let participantItem5 = document.getElementById('participantItem5');
  let participantItem6 = document.getElementById('participantItem6');

  let participantCount = document.getElementById('participantsCount');

  let participantsBtnLeft = document.getElementById('participantsBtnLeft');
  let participantsBtnRight = document.getElementById('participantsBtnRight');

  //немного анимации для перехода по кнопкам меню
  let peventsBtnLink = document.getElementById('eventsBtnLink');
  let participantBtnLink = document.getElementById('participantBtnLink');

  peventsBtnLink.onclick = function() {
    events.style.animation = 'anim 2s, anim-2 1s';
    //удалим анимации через 2 секунды, чтобы они срабатывали всегда без перезагрузки страницы
    setTimeout(function(){
      events.style.removeProperty('animation');
    },2200);
  }

  participantBtnLink.onclick = function() {
    participants.style.animation = 'anim 2s, anim-3 1s';
    //удалим анимации через 2 секунды, чтобы они срабатывали всегда без перезагрузки страницы
    setTimeout(function(){
      participants.style.removeProperty('animation');
    },2200);
  }

// напишем поведение сайта для узкой версии экрана,
  if (document.documentElement.clientWidth < 1280) {

    participantItem2.classList.add("invisible");
    participantItem3.classList.add("invisible");
    participantItem4.classList.add("invisible");
    participantItem5.classList.add("invisible");
    participantItem6.classList.add("invisible");

    // функция автоматической смены карточек игроков раз в 4 секунды
    setInterval(function() {
      if (participantItem1.classList.contains('invisible') === false ) {
        participantItem1.classList.toggle("invisible");
        participantItem2.classList.toggle("invisible");
        participantCount.innerHTML = '2&nbsp;<span>/&nbsp;6</span>';
        participantsBtnLeft.removeAttribute('disabled');
      }
      else if (participantItem2.classList.contains('invisible') === false ) {
        participantItem2.classList.toggle("invisible");
        participantItem3.classList.toggle("invisible");
        participantCount.innerHTML = '3&nbsp;<span>/&nbsp;6</span>';
      }
      else if (participantItem3.classList.contains('invisible') === false ) {
        participantItem3.classList.toggle("invisible");
        participantItem4.classList.toggle("invisible");
        participantCount.innerHTML = '4&nbsp;<span>/&nbsp;6</span>';
      }
      else if (participantItem4.classList.contains('invisible') === false ) {
        participantItem4.classList.toggle("invisible");
        participantItem5.classList.toggle("invisible");
        participantCount.innerHTML = '5&nbsp;<span>/&nbsp;6</span>';
      }
      else if (participantItem5.classList.contains('invisible') === false ) {
        participantItem5.classList.toggle("invisible");
        participantItem6.classList.toggle("invisible");
        participantCount.innerHTML = '6&nbsp;<span>/&nbsp;6</span>';
        participantsBtnRight.setAttribute('disabled', '');
      }
      else if (participantItem6.classList.contains('invisible') === false ) {
        participantItem6.classList.toggle("invisible");
        participantItem1.classList.toggle("invisible");
        participantCount.innerHTML = '1&nbsp;<span>/&nbsp;6</span>';
        participantsBtnLeft.setAttribute('disabled', '');
        participantsBtnRight.removeAttribute('disabled');
      }
      else {
        console.log('что-то не так')
      }

    },4000);

    // добавим переключение по кнопкам, не зря же они есть, но авто переключение останавливать не будем
    // Для правой кнопки
    participantsBtnRight.onclick = function() {
      if (participantItem1.classList.contains('invisible') === false ) {
        participantItem1.classList.toggle("invisible");
        participantItem2.classList.toggle("invisible");
        participantCount.innerHTML = '2&nbsp;<span>/&nbsp;6</span>';
        participantsBtnLeft.removeAttribute('disabled');
      }
      else if (participantItem2.classList.contains('invisible') === false ) {
        participantItem2.classList.toggle("invisible");
        participantItem3.classList.toggle("invisible");
        participantCount.innerHTML = '3&nbsp;<span>/&nbsp;6</span>';
      }
      else if (participantItem3.classList.contains('invisible') === false ) {
        participantItem3.classList.toggle("invisible");
        participantItem4.classList.toggle("invisible");
        participantCount.innerHTML = '4&nbsp;<span>/&nbsp;6</span>';
      }
      else if (participantItem4.classList.contains('invisible') === false ) {
        participantItem4.classList.toggle("invisible");
        participantItem5.classList.toggle("invisible");
        participantCount.innerHTML = '5&nbsp;<span>/&nbsp;6</span>';
      }
      else if (participantItem5.classList.contains('invisible') === false ) {
        participantItem5.classList.toggle("invisible");
        participantItem6.classList.toggle("invisible");
        participantCount.innerHTML = '6&nbsp;<span>/&nbsp;6</span>';
        participantsBtnRight.setAttribute('disabled', '');
      }
      else {
        console.log('что-то не так')
      }
    }

    //Для левой кнопки
    participantsBtnLeft.onclick = function() {
      if (participantItem6.classList.contains('invisible') === false ) {
        participantItem6.classList.toggle("invisible");
        participantItem5.classList.toggle("invisible");
        participantCount.innerHTML = '5&nbsp;<span>/&nbsp;6</span>';
        participantsBtnRight.removeAttribute('disabled');
      }
      else if (participantItem5.classList.contains('invisible') === false ) {
        participantItem5.classList.toggle("invisible");
        participantItem4.classList.toggle("invisible");
        participantCount.innerHTML = '4&nbsp;<span>/&nbsp;6</span>';
      }
      else if (participantItem4.classList.contains('invisible') === false ) {
        participantItem3.classList.toggle("invisible");
        participantItem4.classList.toggle("invisible");
        participantCount.innerHTML = '3&nbsp;<span>/&nbsp;6</span>';
      }
      else if (participantItem3.classList.contains('invisible') === false ) {
        participantItem3.classList.toggle("invisible");
        participantItem2.classList.toggle("invisible");
        participantCount.innerHTML = '2&nbsp;<span>/&nbsp;6</span>';
      }
      else if (participantItem2.classList.contains('invisible') === false ) {
        participantItem2.classList.toggle("invisible");
        participantItem1.classList.toggle("invisible");
        participantCount.innerHTML = '1&nbsp;<span>/&nbsp;6</span>';
        participantsBtnLeft.setAttribute('disabled', '');
      }
      else {
        console.log('что-то не так')
      }
    }



    //Сделаем переключатель этапов преображения
    let stagesCell1 = document.getElementById('stagesCell1');
    let stagesCell2 = document.getElementById('stagesCell2');
    let stagesCell3 = document.getElementById('stagesCell3');
    let stagesCell4 = document.getElementById('stagesCell4');
    let stagesCell5 = document.getElementById('stagesCell5');
    let stagesCell6 = document.getElementById('stagesCell6');
    let stagesCell7 = document.getElementById('stagesCell7');

    let stagesKolobok1 = document.getElementById('stagesKolobok1');
    let stagesKolobok2 = document.getElementById('stagesKolobok2');
    let stagesKolobok3 = document.getElementById('stagesKolobok3');
    let stagesKolobok4 = document.getElementById('stagesKolobok4');
    let stagesKolobok5 = document.getElementById('stagesKolobok5');

    let stagesBtnLeft = document.getElementById('stagesBtnLeft');
    let stagesBtnRight = document.getElementById('stagesBtnRight');

    stagesCell3.classList.add("invisible");
    stagesCell4.classList.add("invisible");
    stagesCell5.classList.add("invisible");
    stagesCell6.classList.add("invisible");
    stagesCell7.classList.add("invisible");

    stagesKolobok1.style.fill = '#313131';
    stagesKolobok2.style.fill = '#D9D9D9';
    stagesKolobok3.style.fill = '#D9D9D9';
    stagesKolobok4.style.fill = '#D9D9D9';
    stagesKolobok5.style.fill = '#D9D9D9';

    if (stagesCell1.classList.contains("invisible") === false) {
      stagesBtnLeft.setAttribute('disabled', '');
    };

    if (stagesCell7.classList.contains("invisible") === false) {
      stagesBtnRight.setAttribute('disabled', '');
    };

    stagesBtnRight.onclick = function() {
      if (stagesCell1.classList.contains('invisible') === false ) {
        stagesCell1.classList.toggle("invisible");
        stagesCell2.classList.toggle("invisible");
        stagesCell3.classList.toggle("invisible");
        stagesKolobok1.style.fill = '#D9D9D9';
        stagesKolobok2.style.fill = '#313131';
        stagesBtnLeft.removeAttribute('disabled');
      }
      else if (stagesCell3.classList.contains('invisible') === false ) {
        stagesCell3.classList.toggle("invisible");
        stagesCell4.classList.toggle("invisible");
        stagesCell5.classList.toggle("invisible");
        stagesKolobok2.style.fill = '#D9D9D9';
        stagesKolobok3.style.fill = '#313131';
      }
      else if (stagesCell4.classList.contains('invisible') === false ) {
        stagesCell4.classList.toggle("invisible");
        stagesCell5.classList.toggle("invisible");
        stagesCell6.classList.toggle("invisible");
        stagesKolobok3.style.fill = '#D9D9D9';
        stagesKolobok4.style.fill = '#313131';
      }
      else if (stagesCell6.classList.contains('invisible') === false ) {
        stagesCell6.classList.toggle("invisible");
        stagesCell7.classList.toggle("invisible");
        stagesKolobok4.style.fill = '#D9D9D9';
        stagesKolobok5.style.fill = '#313131';
        stagesBtnRight.setAttribute('disabled', '');
      }
      else {
        console.log('что-то не так')
      }
    };

    stagesBtnLeft.onclick = function() {
      if (stagesCell7.classList.contains('invisible') === false ) {
        stagesCell6.classList.toggle("invisible");
        stagesCell7.classList.toggle("invisible");
        stagesKolobok5.style.fill = '#D9D9D9';
        stagesKolobok4.style.fill = '#313131';
        stagesBtnRight.removeAttribute('disabled');
      }
      else if (stagesCell6.classList.contains('invisible') === false ) {
        stagesCell4.classList.toggle("invisible");
        stagesCell5.classList.toggle("invisible");
        stagesCell6.classList.toggle("invisible");
        stagesKolobok4.style.fill = '#D9D9D9';
        stagesKolobok3.style.fill = '#313131';
      }
      else if (stagesCell4.classList.contains('invisible') === false ) {
        stagesCell4.classList.toggle("invisible");
        stagesCell5.classList.toggle("invisible");
        stagesCell3.classList.toggle("invisible");
        stagesKolobok3.style.fill = '#D9D9D9';
        stagesKolobok2.style.fill = '#313131';
      }
      else if (stagesCell3.classList.contains('invisible') === false ) {
        stagesCell3.classList.toggle("invisible");
        stagesCell1.classList.toggle("invisible");
        stagesCell2.classList.toggle("invisible");
        stagesKolobok2.style.fill = '#D9D9D9';
        stagesKolobok1.style.fill = '#313131';
        stagesBtnLeft.setAttribute('disabled', '');
      }
      else {
        console.log('что-то не так')
      }
    };


    // ниже код для широкого экрана
    // На широком экране карточки игроков будут меняться автоматически, но так же можно менять нажимая на кнопки
  } else {
    participantItem4.classList.add("invisible");
    participantItem5.classList.add("invisible");
    participantItem6.classList.add("invisible");

    setInterval(function() {
      if (participantItem1.classList.contains('invisible') === false ) {
        participantItem1.classList.toggle("invisible");
        participantItem2.classList.toggle("invisible");
        participantItem3.classList.toggle("invisible");
        participantItem4.classList.toggle("invisible");
        participantItem5.classList.toggle("invisible");
        participantItem6.classList.toggle("invisible");
        participantCount.innerHTML = '6&nbsp;<span>/&nbsp;6</span>';
      } else {
        participantItem1.classList.toggle("invisible");
        participantItem2.classList.toggle("invisible");
        participantItem3.classList.toggle("invisible");
        participantItem4.classList.toggle("invisible");
        participantItem5.classList.toggle("invisible");
        participantItem6.classList.toggle("invisible");
        participantCount.innerHTML = '3&nbsp;<span>/&nbsp;6</span>';
      }
    },4000);

    function onclickParticipantsBtns() {
      if (participantItem1.classList.contains('invisible') === false ) {
        participantItem1.classList.toggle("invisible");
        participantItem2.classList.toggle("invisible");
        participantItem3.classList.toggle("invisible");
        participantItem4.classList.toggle("invisible");
        participantItem5.classList.toggle("invisible");
        participantItem6.classList.toggle("invisible");
        participantCount.innerHTML = '6&nbsp;<span>/&nbsp;6</span>';
      } else {
        participantItem1.classList.toggle("invisible");
        participantItem2.classList.toggle("invisible");
        participantItem3.classList.toggle("invisible");
        participantItem4.classList.toggle("invisible");
        participantItem5.classList.toggle("invisible");
        participantItem6.classList.toggle("invisible");
        participantCount.innerHTML = '3&nbsp;<span>/&nbsp;6</span>';
      }
    }

    participantsBtnLeft.onclick = onclickParticipantsBtns;
    participantsBtnRight.onclick = onclickParticipantsBtns;

  }
});
