const app= Vue.createApp({
    data(){
        return{
            title:"Vue.js Bootcamp 1.Gün",
            content:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde aut, dicta ipsa ducimus cupiditate alias recusandae odio? Magni laboriosam rerum tempore, at ea assumenda illum, odit natus autem, voluptates hic.",
            eduflow:{
                title:"Müfredat ve açıklamalar için tıklayınız",
                target:"_blank",
                url:"https://eduflow.kablosuzkedi.com",
                alt:"mufredat-kablosuzkesi-vue-bootcamp"
            },
            coords:{
                x:0,
                y:0,
            },
            };          
    },
    methods:{
        changeTitle(pTitle){
            this.title=pTitle
        },
        updateCoords(message,event){
        //   console.log(message,event.x,event.y);
          this.coords={
            x:event.x,
            y:event.y,
          };
        },
    },
}).mount("#app");