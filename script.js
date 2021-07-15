let typedText = document.getElementById("textInput")
const button = document.getElementById("countButton");

const letterCounts = {};

button.addEventListener("click", function() {  
   
   typedText.value = typedText.value.toLowerCase(); // aqui vai substituir tds as letras para minusculas
   typedText.value = typedText.value.replace(/[^a-z'\s]+/g, "") // libra tds caracteres, exceto letras comuns epaços e apostrofos
   
   
   for (let i = 0; i < typedText.value.length; i++) {
       
        currentLetter = typedText.value[i];
       // faça algo com cada letra 
        if(letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
        }else{
            letterCounts[currentLetter]++; 
        }
    }
    for (let letter in letterCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent; 
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span); 

       

     }
  

        //  words = typedText.split(/\s/);

     
         const word = document.getElementById("wordsDiv"); // declaro variavel pegando o id da div
         const p = document.createElement("p") //crio elemento p para exibir meu resultado
         words = typedText.value.split(/\s/); //separo string de entrada em palavras separando nos espaços
         p.innerText = words;
         word.appendChild(p)
      
});