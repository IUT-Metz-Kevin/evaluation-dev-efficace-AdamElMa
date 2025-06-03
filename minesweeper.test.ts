import { assertEquals } from "jsr:@std/assert";

const mine = "*.*..."
function grille(numero: number){

    //let grille : Array<string| number> = [];
    let compterD = -1;
    let compterG = -1;
    let compterH = -1;
    let compterB = -1;
    let compterHD = -1;
    let compterHG = -1;
    let compterBD = -1;
    let compterBG = -1;
    let compter = compterB + compterH + compterD + compterG + compterBD + compterBG + compterHD + compterHG;
    let compterPerso;
    let bombe;
    

    //Detection de mine 0;

        /*if(mine[numero] === "*"){

            grille[numero] = "*";
        }*/

            
        if(mine[numero] === "."){

             
            
            if (mine[numero + 1] === "."){
                compterD += 1;
            }

            if (mine[numero + 1] === "*"){
                compterD += 2;
            }

            if (mine[numero - 1] === "."){
                compterG += 1;
            }

            if (mine[numero - 1] === "*"){
                compterG += 2;
            }

            
            
            compterPerso = compterD + compterG;
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