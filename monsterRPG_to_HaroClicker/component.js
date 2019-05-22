new Vue({
  el:'#app',
  data:{
    totalHaro: 0,
    haroPerClick:1,
    tutorial:true,
    width:100,
    timer: 0,
    runner:true,
    clicked:{
      age:true,GGundam: true,
    },
  },
  watch:{
    runner(value){
      let haro = this

      if(!this.runner){
        setInterval(function(){ haro.totalHaro++ }, this.timer);
      }
    }
  },
  methods:{
    clickCalculated(amount,adder,position){
      this.clicked[position] = !this.clicked[position]
      this.totalHaro -= amount
      this.haroPerClick += 2
    },
    runnerChanger(){
      this.runner = !this.runner
      this.upgrade(5,1000)
    },
    upgrade(howMuch,howFast){
      this.totalHaro -= howMuch
      this.timer = howFast
    }
  }

})
