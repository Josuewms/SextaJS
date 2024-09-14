// Abriria uma conexão com o banco de dados
// Consulta os dados no banco de dados
// Pega o retorno e armazena na variável questions no formato ARRAY

const questions = [
    {
        question: "Qual é a capital da França?",
        options: ["Londres", "Berlim", "Paris", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Qual é o maior planeta do sistema Solar?",
        options: ["Tera", "Júpter", "Marte", "Saturno"],
        answer: "Júpter"
    },
    {
        question: "Quem foi jogado na cova dos leões?",
        options: ["Davi", "José", "Dário", "Daniel"],
        answer: "Daniel"
    }
];

let currentQuestionIndex = 0;

function showQuestion(question)
{
    // Pegar o elemento da function vazia no html
    const questionContainer = document.getElementById("question-container");
    console.log(questionContainer);
    // Incluir a questão dentro da div vazia
    questionContainer.innerHTML = `
        <div>
            <h2>${question.question}</h2>
            ${
                question.options.map(
                    (option, index) =>`
                        <button class="option-btn">${option}</button>
                    `
                ).join('')
            }
        </div>        
`;
}

showQuestion(questions[currentQuestionIndex]);