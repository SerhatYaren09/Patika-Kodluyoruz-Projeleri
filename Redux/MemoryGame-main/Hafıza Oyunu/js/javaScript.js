(function() {
  var countDown;
  var wasteOfTime ;
  var moveIncrease;
  var kartTersi;
  var hamle = document.getElementsByClassName('move')[0];
  var sure = document.getElementsByClassName('timee')[0];
  var oyunBitir = document.getElementsByClassName('gameEnd')[0];

  function kartAl() {
    var kart = document.getElementsByClassName('card');
    var resimler = ["url('assets/1.jpg')", "url('assets/2.jpg')", "url('assets/3.jpg')", "url('assets/4.jpg')", "url('assets/5.jpg')", "url('assets/6.jpg')", "url('assets/1.jpg')", "url('assets/2.jpg')", "url('assets/3.jpg')", "url('assets/4.jpg')", "url('assets/5.jpg')", "url('assets/6.jpg')"];
    wasteOfTime = 40;
    moveIncrease = 0;
    kartTersi = [];
    oyunBitir.style.display = 'none';
    shuffle(resimler);
    for (var i = 0; i < kart.length; i++) {
      if(kart[i].classList.contains('flipped')) {
        kart[i].classList.toggle('flipped');
      }
      kart[i].querySelector('.back').style.backgroundImage = resimler[i];
      kart[i].addEventListener('click', flip);
    }
    hamle.innerText = '00';
    startTimer();
  }
  function flip() {
    if (!this.classList.contains('flipped') && kartTersi.length < 2) {
      this.classList.toggle('flipped');
      kartTersi.push(this);

      if (kartTersi.length === 2) {
        checkMatch();
      }
    }
  }
  function checkMatch() {
    if (kartTersi[0].querySelector('.back').style.backgroundImage === kartTersi[1].querySelector('.back').style.backgroundImage) {
      kartTersi = [];
      hamle.innerText = '0' + ++moveIncrease;
    }
    else {
      setTimeout(flipBack, 1500);
    }
  }
  function flipBack() {
    kartTersi[0].classList.toggle('flipped');
    kartTersi[1].classList.toggle('flipped');
    kartTersi = [];
  }
  function startTimer() {
    sure.innerText = '0:40';
    countDown = setInterval(decrementTime, 1000);
  }
  function decrementTime() {
    if (wasteOfTime === 0) {
      sure.innerText = '0:0' + wasteOfTime;
      clearInterval(wasteOfTime);
      finalize();
    }
    if (wasteOfTime < 10) {
      sure.innerText = '0:0' + wasteOfTime;
    }
    if (wasteOfTime >= 10) {
      sure.innerText = '0:' + wasteOfTime;
    }
    if (moveIncrease === 6){
      clearInterval(wasteOfTime);
      finalize();
    }
    wasteOfTime--;
  }
  function finalize() {
    var restart = document.getElementsByTagName('button')[0];
    restart.addEventListener('click', kartAl);
    oyunBitir.style.display = 'flex';
    if (moveIncrease === 6) {
      oyunBitir.querySelector('h1').innerText = 'Tebrikler ! Kazandınız';
    }
    else {
      oyunBitir.querySelector('h1').innerText = 'Kaybettiniz';
    }
    oyunBitir.querySelector('.final-score').innerText = 'Hamle: ' + moveIncrease;
    oyunBitir.querySelector('.time').innerText = 'Kalan Zaman: ' + wasteOfTime + ' saniye kala bitirdiniz:)';
  }
  function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  kartAl();
})();
