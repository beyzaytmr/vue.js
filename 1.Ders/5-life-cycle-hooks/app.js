const app=Vue.createApp({
   data(){
    return{
       title:"Test Başlığı",
       itemList:[],
    };
   },
   beforeCreate(){
    console.log("BeforeCreate Çalıştı..");
   },
   created(){
    console.log("Created Çalıştı..");
    setTimeout(()=>{
        this.itemList=[1,2,3,4,5,6,7,8,9];
    },2000)

    setTimeout(()=>{
        this.title="Bu yeni Başlık...";
    },3000);
   },
   beforeMount(){
    console.log("beforeMount Çalıştı..");
   },
   mounted(){
    console.log("mounted Çalıştı..");
   },
   beforeUpdate(){
    console.log("beforeUpdate Çalıştı..");
   },
   update(){
    console.log("update Çalıştı..");
   },
   beforeUnmount(){
    console.log("beforeUnmount Çalıştı..");
   },
   unmounted(){
    console.log("unmounted Çalıştı..");
   }

});
app.mount("#app");

setTimeout(()=>{
    app.unmount();
},5000);