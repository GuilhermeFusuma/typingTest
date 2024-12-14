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
});

// ---------------typing logic------------------------------------------

