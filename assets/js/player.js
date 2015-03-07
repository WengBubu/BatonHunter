
var Unit = function(hp,herbs){
	this.hp = hp;
	this.herbs = herbs;
    this.onHerbsCountChanged = null;

    this.takeHerb = function(herb){

        if (this.hp.isFull() && (herb.healVal > 0)) {
            return;
        }

        if (!removeherb(this.herbs,herb)) {
            return;
        }

        var addValue = herb.healVal;
        var hpType = herb.hpType;
        this.hp.modifyHP(addValue,hpType);

        this.onHerbsCountChanged(this.herbs.getCount(herb),herb);
    }

    this.addHerb = function(herb) {
        this.herbs.push(herb);
    }

    this.herbs.getCount = function(herb) {
        var count = 0;
        for (var i = 0; i < this.length; i++) {
            if(this[i].healVal == herb.healVal && this[i].hpType == herb.hpType)
            count++;
    };

    return count;
}

function removeherb(herbs,herb){
   for (var i = 0, leng = herbs.length; i < leng; ++i) {
      if (herb.equals(herbs[i])){
         herbs.splice(i,1);
         return true;
     }
 }
 return false;
}
}







