// Podesavanje linkova stranica

function main(){
 let linkovistranica=document.getElementsByClassName('linkovi');
 for(let i=0;i<5;i++){
   let adresasajtasajta="";
   switch(i){
  	 case 1:
      adresasajta="education/education.html";
      break;      
   	 case 2:
      adresasajta="games/games.html";
      break;      
   	 case 3:
      adresasajta="quiz/quiz.html";
      break;      
   	 case 4:
      adresasajta="contact/contact.html";
      break;     
   	 default:
      adresasajta="index.html";
   }
   linkovistranica[i].addEventListener("click",function(){
      location.href = adresasajta;
   });	
 }
}
