const prompt = require('prompt-sync')(); 

let jeu = {

    chance : 3, 
    compteur : 0,
    min : 0,
    max : 9,
    msgGagnant : 'Vous avez gagné ! ', 
    msgPerdant : 'Vous avez perdu ', 
    msgEssai : 'Réessayez '
}

//let chance = 3; 
//let count = 0; 
//let min = 0; 
//let max = 9; 

let nbSecret = Math.round(Math.random() * (jeu.max - jeu.min) + jeu.min); 

while(jeu.compteur < jeu.chance){
    
        let x = prompt('Entrez un nombre : '); 
        
        x = Number(x); 

        jeu.compteur++; 

        if(x == nbSecret){

            console.log(jeu.msgGagnant); 
            break; 
    
        } else {
            
            if(jeu.compteur < jeu.chance ){

                console.log(jeu.msgEssai); 

            } else {

                console.log(jeu.msgPerdant); 

            }

        }

    }
