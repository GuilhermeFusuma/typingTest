const palavras = [
    "teclado", "digitação", "prática", "velocidade", "precisão", "eficiência", "desempenho", 
    "memorização", "técnica", "habilidade", "foco", "sucesso", "educação", "carreira", 
    "experiência", "produtividade", "desafio", "estratégia", "treinamento", "controle", 
    "tecnologia", "internet", "aprendizado", "organização", "frequência", "automatização", 
    "tempo", "resiliência", "análise", "gestão"
];
const maxWords = 30;
const textBox = document.getElementById('textbox');

function montarTexto(arr, maxWord) {
    
    for (let i = 0; i < maxWord; i++) {
        const randomNum = Math.floor(Math.random() * arr.length);
        const word = document.createElement('div');
        word.classList.add('word');
        separarPalavra(arr[randomNum]).forEach(item => {
            const letter = document.createElement('div');
            letter.classList.add('letter');
            letter.innerText = item;
            word.appendChild(letter)
        });

        textBox.appendChild(word);
    }
}

function separarPalavra(word) {
    let letters = [];
    
    for (let i = 0; i < word.length; i++) {
       letters.push(word.charAt(i));
    }
    return letters;
}

document.addEventListener('DOMContentLoaded', () => {
    montarTexto(palavras, maxWords);
    typingLogic();
});

// ---------------typing logic------------------------------------------

// const wordsList = document.querySelectorAll('.word');


// wordsList.forEach(word => {
//     separarPalavra(word).forEach(letter => {
//         while(!letter.classList.contains('typed')) {
//             const userInput = document.getElementById('userInput');
//             userInput.addEventListener('keydown', () => {
//                 userInput.value = '';
//                 alert('sexo');
//                 letter.classList.add('typed');
//             })
//         }
//     })
// });

//chatgpt
function typingLogic() {
    const letters = document.querySelectorAll('.letter'); // Select all letters
    let currentLetterIndex = 0; // Start with the first letter

    userInput.addEventListener('keydown', (e) => {
        if (currentLetterIndex < letters.length) {
            const currentLetter = letters[currentLetterIndex];
            const typedKey = e.key; // Get the key pressed

            // Match input key with current letter's text
            if (typedKey === currentLetter.innerText) {
                currentLetter.classList.add('typed'); // Add the class to mark as typed
                currentLetterIndex++; // Move to the next letter
                userInput.value = ''; // Clear the input box
            } else {
                // Optional: Provide feedback for incorrect typing
                currentLetter.classList.add('incorrect');
                setTimeout(() => currentLetter.classList.remove('incorrect'), 300);
                userInput.value = '';
            }
        }
    });
}
