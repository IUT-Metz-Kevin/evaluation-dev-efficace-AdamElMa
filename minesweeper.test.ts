import { assertEquals } from "jsr:@std/assert";

const mine = ".*...."
function grille(numero: number){

    //let grille : Array<string| number> = [];
    let compter = -1;

    //Detection de mine 0;

        /*if(mine[numero] === "*"){

            grille[numero] = "*";
        }*/

            
        if(mine[numero] === "."){

             

            if (mine[numero + 1] === "."){
                compter += 1;
            }



        }
        
    return compter;
}

Deno.test("test case vide droite", () => {
  
  assertEquals(grille(0), 0);
});

Deno.test("test case bombe droite", () => {
  
  assertEquals(grille(0), 0);
});
