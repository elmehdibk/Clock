const clockDisplay =document.querySelector('#clock')
const ampm=document.querySelector('#ampm')
var am =true    
setInterval(()=>{
    const date = new Date()
    let H=date.getHours()
    let M=date.getMinutes()
    let S=date.getSeconds()
    if (am) {
        H=(H<10?'0'+H:H)
        clockDisplay.innerHTML=H+':'+(M<10?'0'+M:M)+':'+(S<10?'0'+S:S)
        
    }else{
        let am_pm= H>=12?'PM':'AM'
        H=H>12?H-12:H
        clockDisplay.innerHTML=(H<10?'0'+H:H)+':'+(M<10?'0'+M:M)+':'+(S<10?'0'+S:S)+am_pm
    }
},500)
ampm.addEventListener('click',()=>{
    am=!am
   console.log(am); 
   if (am) {
       ampm.innerHTML='AM/PM <i class="fa fa-refresh fa-spin" style="font-size:15px"></i>'
   }else{
       ampm.innerHTML='24H <i class="fa fa-refresh fa-spin" style="font-size:15px"></i>'
   }
})


