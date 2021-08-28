let valid = document.getElementById('valid');

valid.addEventListener("click",Validation);

function Validation(){
    let organeA = document.getElementById('organe-a');
    let organeB = document.getElementById('organe-b');
    let organeC = document.getElementById('organe-c');

    let reponseJuste = 0 ;
    let reponseFausse = 0 ;

   if(organeA.value == 'oesophage'){
       reponseJuste = reponseJuste + 1 ;
   }else{
       reponseFausse = reponseFausse + 1 ;
   }

   if(organeB.value == 'foie'){
    reponseJuste = reponseJuste + 1 ;
   }else{
    reponseFausse = reponseFausse + 1 ;
   }

  if(organeC.value == 'estomac'){
    reponseJuste = reponseJuste + 1 ;
  }else{
    reponseFausse = reponseFausse + 1 ;
  }

  if(reponseJuste == 3){

    let reponse = document.getElementById('reponse');
    reponse.innerHTML = "Vous avez trouver <br>toutes les réponses!"

    reponse.style.backgroundColor = "rgba(4, 196, 4, 0.6)";
  }

  if(reponseJuste == 2){
    let reponse = document.getElementById('reponse');
    reponse.innerHTML = "Vous avez trouver <br>deux réponses!"

    reponse.style.backgroundColor = "rgb(253, 166, 5)";
  }
  
  if(reponseJuste == 1){
    let reponse = document.getElementById('reponse');
    reponse.innerHTML = "Vous avez trouver <br>une réponses!"

    reponse.style.backgroundColor = "rgb(237, 117, 43)";
  }

  if(reponseJuste == 0){
    let reponse = document.getElementById('reponse');
    reponse.innerHTML = "Vous n'avez trouver <br>aucune réponses!!"

    reponse.style.backgroundColor = "rgba(227, 19, 19, 0.844)";
  }
    
}