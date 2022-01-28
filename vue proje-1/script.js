new Vue({
    el:"#app",
    data: {
      value : 0,
    },
    computed : {
        result : function(){
            return this.value == 33 ? "Tamamlandı" : "Henüz Bitmedi!!"
            console.log(value);
        }
    },
    watch : {
        result : function(value){            
            setTimeout(function(){
                this.value = 0;
            }, 2000)
        }
    },

  });
