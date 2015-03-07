var Unit = function(){
    var herbs =[];
    var hp;
    this.onHerbsCountChanged = null;

    this.setHerbs = function(herbs){
        this.herbs = herbs;
    };

    this.setHp = function(hp){
        this.hp = hp;
    };

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

        this.onHerbsCountChanged(this.getHerbsCount(herb),herb);
    }

    this.addHerb = function(herb) {
        this.herbs.push(herb);
    }

    this.getHerbsCount = function(herb) {
        var count = 0;
        for (var i = 0; i < this.herbs.length; i++) {
            if(this.herbs[i].healVal == herb.healVal && this.herbs[i].hpType == herb.hpType)
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







