var {add} = require('./model01.js');
var Vue = require("./vue.min")
var VM = new Vue({
    el:"#app",
    data:{
        name:'黑马程序员',
        num1:0,
        num2:0,
        result:0,
    },
    methods:{
        change:function () {
            this.result=Number.parseInt(this.num1)+Number.parseInt(this.num2)
        }
    }
})