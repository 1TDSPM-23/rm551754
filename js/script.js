console.log("Olá Mundo");



        var nr1 = 10;
        var nr2 = 5;

        console.log(nr1);
        console.log(nr2);

        // + / - / * e /

        
        /*console.log("Resultado " + (nr1+nr2));
        console.log("Resultado " + (parseInt (nr1) + parseInt (nr2)));
        console.log(`Resultado adição:  + ${parseInt (nr1) + parseInt (nr2)}`);

        
        console.log(`Resultado Subtração: ${parseInt (nr1) - parseInt (nr2)}`);

        
        console.log(`Resultado Multiplicação: ${parseInt (nr1) * parseInt (nr2)}`);

        
        console.log(`Resultado divisão: ${parseInt (nr1) / parseInt (nr2)}`);*/


        //DESCOBRINDO SE O NÚMERO É PAR OU IMPAR
        //UTILIZANDO OPERADOR TERNÁRIO (?).
        
        var nr1 = "10";
        var nr2 = "5";
        var resultado;

        resultado = !(parseInt(nr1)%parseInt(nr2)) ? "PAR" : "IMPAR";
        console.log(`O NÚMERO É : ${resultado}`);

        //diferença entre var/let/const
       // var nome1 = "Leonardo";
        //let nome2 = "Enzo";
        
        // regras do const
        //1ª regra = inicializar na declaração 
        //const nome3 = "Vitor"; 

        //nome3 = "Lukid";

        //const PI = 3.14;


        var nome = "Enzo";

        if(nome !== ""){
            var nome = "Edson";

        }
        
    console.log(nome);