new Vue({
  el:'#app',
  data:{
    totalHaro: 0,
    haroPerClick:1,
    tutorial:true,
    width:100,
    clicked:{
      age:true
    },
  },
  methods:{
    clickCalculated:function(){
      this.clicked.age = !this.clicked.age
      this.totalHaro -= 5
      this.haroPerClick += 2
    },
  }

})
