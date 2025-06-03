import { assertEquals } from "jsr:@std/assert";

const mine = "\n . . . . . . \n . . . . . . \n . . . . . . \n"

function grille(numero: number){

    //let grille : Array<string| number> = [];
    let compter = 0;

    //Detection de mine 0;

        /*if(mine[numero] === "*"){

            grille[numero] = "*";
        }*/

            
        if(mine[numero] === "."){

             

            if (mine[numero + 1] === "." || mine[numero + 1] === "\n"){
                compter += 0;
            }


        }

    return compter;
}

Deno.test("test case vide droite", () => {
  
  assertEquals(grille(0), 0);
});
