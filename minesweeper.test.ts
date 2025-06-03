import { assertEquals } from "jsr:@std/assert";

const mine = [
            ".", ".", ".", ".", ".", ".",
            ".", ".", "*", ".", ".", ".",
            ".", ".", ".", ".", ".", ".",
]

function grille(numero: number){

    let grille : Array<string| number> = [];


    //Detection de mine 0;

        /*if(mine[numero] === "*"){

            grille[numero] = "*";
        }*/

            /*
        if(mine[i] === "."){

            let compter = 0; 

            if (mine[])




        }*/

    return grille[numero];
}

Deno.test("test case vide", () => {
  
  assertEquals(grille(0), 0);
});
