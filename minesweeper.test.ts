import { assertEquals } from "jsr:@std/assert";

const mine = "*.....\n......\n.*...."

function grille(numero: number){

    console.log("Longueur obligatoire de ligne : 6 ! \n");

    let mine_adjust = "";

    for (let x = 0; x < mine.length; x++){
    
        if ( mine[x] === "."){
            mine_adjust+=".";
        }
        if ( mine[x] === "*"){
            mine_adjust+="*";
        }
        
    }

    console.log(mine_adjust);
    
    //let grille : Array<string| number> = [];
    let compterD = -1;
    let compterG = -1;
    let compterH = -1;
    let compterB = -1;
    let compterHD = -1;
    let compterHG = -1;
    let compterBD = -1;
    let compterBG = -1;
    let compterPerso;
    let bombe = -2;
    
    console.log(mine_adjust[numero-1]);




    //Detection de mine 0;

        if(mine_adjust[numero] === "*"){

            return bombe;
        }

            
        if(mine_adjust[numero] === "."){

             
            //droite vide
            if (mine_adjust[numero + 1] === "." || mine_adjust[numero + 1] === undefined){
                compterD += 1;
            }
            //droite bombe
            if (mine_adjust[numero + 1] === "*"){
                compterD += 2;
            }
            //gauche vide
            if (mine_adjust[numero - 1] === "."  || mine_adjust[numero - 1] === undefined){
                compterG += 1;
            }
            //gauche bobme
            if (mine_adjust[numero - 1] === "*"){
                compterG += 2;
            }
            //bas vide
            if(mine_adjust[numero + 6] === "." || mine_adjust[numero + 6] === undefined){
                compterB += 1;
            }
            //haut vide
            if(mine_adjust[numero - 6] === "." ){
                compterH += 1;
            }
            //bas bombe
            if(mine_adjust[numero + 6] === "*"){
                compterB += 2;
            }
            //haut bombe
            if(mine_adjust[numero - 6] === "*"){
                compterH += 2;
            }
            //HD bombe
            if(mine_adjust[numero - 5] === "*"){
                compterHD += 2;
            }
            //HG bombe
            if(mine_adjust[numero - 7] === "*"){
                compterHG += 2;
            }
            //HD vide
            if(mine_adjust[numero - 5] === "." || mine_adjust[numero - 5] === undefined){
                compterHD += 1;
            }
            //HG vide
            if(mine_adjust[numero - 7] === "." || mine_adjust[numero - 7] === undefined){
                compterHG += 1;
            }
            //BG vide
            if(mine_adjust[numero + 5] === "." || mine_adjust[numero + 5] === undefined){
                compterBG += 1;
            }
            //BD vide
            if(mine_adjust[numero + 7] === "." || mine_adjust[numero + 7] === undefined){
                compterBD += 1;
            }

            //BG bombe
            if(mine_adjust[numero + 5] === "*"){
                compterBG += 2;
            }
            //BD bombe
            if(mine_adjust[numero + 7] === "*"){
                compterBD += 2;
            }

            
            
            compterPerso = compterB + compterH + compterD + compterG + compterBD + compterBG + compterHD + compterHG;;
        }
        
    return compterPerso;
}

Deno.test("test case vide droite", () => {
  
  assertEquals(grille(0), 0);
});

Deno.test("test case bombe droite", () => {
  
  assertEquals(grille(0), 1);
});

Deno.test("test case vide droite et gauche", () => {
  
  assertEquals(grille(1), 0);
});

Deno.test("test case vide gauche et case bombe droite", () => {
  
  assertEquals(grille(1), 1);
});

Deno.test("test case bombe gauche et droite", () => {
  
  assertEquals(grille(1), 2);
});

Deno.test("test case bombe", () => {
  
  assertEquals(grille(0), -2);
});

Deno.test("test case vide en bas", () => {
  
  assertEquals(grille(0), 0);
});


Deno.test("test case vide en haut", () => {
  
  assertEquals(grille(6), 0);
});

Deno.test("test case bombe en bas", () => {
  
  assertEquals(grille(0), 1);
});

Deno.test("test case bombe en haut", () => {
  
  assertEquals(grille(6), 2);
});

Deno.test("test case bombe en haut droite", () => {
  
  assertEquals(grille(6), 1);
});

Deno.test("test case bombe en haut gauche", () => {
  
  assertEquals(grille(13), 1);
});

Deno.test("test case vide H HG HD", () => {
  
  assertEquals(grille(13), 0);
});

Deno.test("test case vide B BG BD", () => {
  
  assertEquals(grille(7), 0);
});

Deno.test("test case bombe BG", () => {
  
  assertEquals(grille(7), 1);
});

Deno.test("test case bombe BD", () => {
  
  assertEquals(grille(7), 1);
});

Deno.test("test case bombe BG B BD", () => {
  
  assertEquals(grille(7), 3);
});

Deno.test("test case gauche vide", () => {
  
  assertEquals(grille(0), 0);
});

Deno.test("test case droite vide", () => {
  
  assertEquals(grille(17), 0);
});

Deno.test("test case haute vide", () => {
  
  assertEquals(grille(0), 0);
});

Deno.test("test case bas vide", () => {
  
  assertEquals(grille(17), 0);
});

Deno.test("test case haut bombe, BD bombe, gauche vide", () => {
  
  assertEquals(grille(6), 2);
});











