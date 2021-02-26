
    var reponses_correctes=new Array('print','int','input','diff','while','append','remove','def','len','capitalize','dict','del','try','r','w');
    var mauvaises_reponses= new Array();
    function get_reponse(identfiant,j){

            if(j>3){
              
        try {
            return     document.getElementById(identfiant+j).childNodes[0].nodeValue.trim();

        } catch (error) {
            return " ";            
        }           
            }
            else{

                for(i=0;i<3;i++){
                    if(document.getElementsByName(identfiant+j)[i].checked){

                       return document.getElementsByName(identfiant+j)[i].value.trim();
                        }
                    
                      }
                return " ";      
                      
                }
            
    }
    let score=0;
    function evaluer(){
        
        let j=0;
        var  a_repondu=true;
        for(j=0;j<15;j++){
            if(j<=3 && get_reponse("question",j)==" "){
                alert("vous devez répondre à toutes les questions");
                score=0;
                a_repondu=false;

                break;

                
            }
            

           if(reponses_correctes[j] == get_reponse("question",j)){
               score++;
              

           }else{
                if(j<=3){
                    for(i=0;i<3;i++){
                        if(document.getElementsByName('question'+j)[i].checked){
                          var parent_wrong = document.getElementsByName('question'+j)[i];
                          
                            }
                         if(document.getElementsByName('question'+j)[i].value.trim()==reponses_correctes[j]){
                             var parent_correct=document.getElementsByName('question'+j)[i];
                         }   
                       }
                       var child =document.createElement('span');
                       child.innerText=" x";
                       child.style.color="red";
                       parent_wrong.nextElementSibling.appendChild(child); 

                       var child2 =document.createElement('span');
                       child2.innerHTML=" &Sqrt;";
                       child2.style.color="green";
                       parent_correct.nextElementSibling.appendChild(child2); 

                    }else{
                        var parent  = document.getElementById('question'+j).parentElement;
                        var child =document.createElement('p');
                        child.innerText="la bonne réponse est  : "+reponses_correctes[j];
                        child.style.color="green";
                        parent.appendChild(child);
           
                    }
                }
              
           }
          
        
       if(a_repondu==true){
        alert("vous avez obtenu "+(score/15)*100+" %");
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.getElementById("evaluer").setAttribute("hidden",true);  
        document.getElementById("rapport").innerHTML="Vous avez obtenu "+((score/15)*100)+" % <br>"+ score + " réponses correctes <br>"+(15-score)+" réponses fausses";
        if(score<8){
            document.getElementById("rapport").innerHTML+="<br> vous devez revoir vos leçons";
        }
        else{
            document.getElementById("rapport").innerHTML+="<br>bravo vous avez passé le test avec succés";

        }
       }
        
       }
