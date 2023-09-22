const clockDisplay =document.querySelector('#clock')
const ampm=document.querySelector('#ampm')
setInterval(()=>{
    const date = new Date()
    let H=date.getHours()
    let M=date.getMinutes()
    let S=date.getSeconds()
    if (am) {
        clockDisplay.innerHTML=H+':'+M+':'+S+' AM'
        
    }else{
       
        H=H>12?H-12:H
        clockDisplay.innerHTML=H+':'+M+':'+S+' PM'
    }
},500)
var am =true    
ampm.addEventListener('click',()=>{
    am=!am
   console.log(am); 
   if (am) {
       ampm.innerHTML='PM <i class="fa fa-refresh fa-spin" style="font-size:15px"></i>'
   }else{
       ampm.innerHTML='AM <i class="fa fa-refresh fa-spin" style="font-size:15px"></i>'
   }
})


