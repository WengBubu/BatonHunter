//component init
$("#question").load("components/truefalsequestion/truefalsequestion.html"); 

//global variable declaration
var enemy;
var user;

$(document).ready(function (){
  //count down clock init
  batontimer.setUpClock('#counter', 20);
  batontimer.reset();
  batontimer.start();
  //blood obj init

  var medicine = [new Herb(1, -100),new Herb(1, -100),new Herb(1, 100),new Herb(1,100)];
  user = new Unit(new HP(1000, $('#user-hp')),medicine);
  user.onHerbsCountChanged = onHerbsCountChanged;
  user.onHerbsCountChanged(user.herbs.getCount(new Herb(1, 100)),new Herb(1, 100));

  enemy = new Unit(new HP(1000, $('#enemy-hp')),[]);
  

  function onHerbsCountChanged(number,herb){
    if(herb.healVal == 100 && herb.hpType == 1){
      $('#herbsCount').text(' X ' + number);
    }
  }
});
