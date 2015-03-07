//component init
$("#question").load("components/truefalsequestion/truefalsequestion.html"); 

//global variable declaration
var enemy = new Unit();
var user = new Unit();

$(document).ready(function (){
  //count down clock init
  batontimer.setUpClock('#counter', 20);
  batontimer.reset();
  batontimer.start();
  //blood obj init

  user.setHp(new HP(1000, $('#user-hp')));

  user.onHerbsCountChanged = onHerbsCountChanged;
  user.onHerbsCountChanged(user.getHerbsCount(new Herb(1, 100)),new Herb(1, 100));

  enemy = new Unit(new HP(1000, $('#enemy-hp')),[]);
  

  function onHerbsCountChanged(number,herb){
    if(herb.healVal == 100 && herb.hpType == 1){
      $('#herbsCount').text(' X ' + number);
    }
  }
});

(function init(){
  function getHerb(){
    //TODO:Casey07032015 Refator with a real getter to get init herbs 
    return [new Herb(1, -100),new Herb(1, -100),new Herb(1, 100),new Herb(1,100)];
  };

  user.setHerbs(getHerb());


})();
