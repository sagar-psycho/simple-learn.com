document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('start-btn');
    const submitButton = document.getElementById('submit-btn');
    const quizContainer = document.getElementById('quiz-content');
    const resultsContainer = document.getElementById('results-container');
    const quizQuestions = [
        {
            question: "What is SEO?",
            answers: {
                a: "Search Engine Optimization",
                b: "Social Engagement Optimization",
                c: "Search Engine Operation"
            },
            correctAnswer: "a"
        },
        {
            question: "What does ROI stand for?",
            answers: {
                a: "Return On Investment",
                b: "Rate of Income",
                c: "Risk of Investment"
            },
            correctAnswer: "a"
        },
        {
            question: "What is CTR in digital marketing?",
            answers: {
                a: "Click Through Rate",
                b: "Conversion Rate",
                c: "Customer Target Rate"
            },
            correctAnswer: "a"
        }
    ];

    let currentQuestion = 0;
    let score = 0;

    startButton.addEventListener('click', startQuiz);
    submitButton.addEventListener('click', submitQuiz);

    function startQuiz() {
        startButton.style.display = 'none';
        quizContainer.style.display = 'block';
        showQuestion();
        startTimer();
    }

    function startTimer() {
        let totalSeconds = 0;
        setInterval(() => {
            totalSeconds++;
            const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
            const seconds = (totalSeconds % 60).toString().padStart(2, '0');
            document.getElementById('timer').innerText = `${minutes}:${seconds}`;
        }, 1000);
    }

    function showQuestion() {
        const currentQuizData = quizQuestions[currentQuestion];
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `<p>${currentQuizData.question}</p>`;
        for (const option in currentQuizData.answers) {
            questionElement.innerHTML += `<label>
                                                <input type="radio" name="question${currentQuestion}" value="${option}">
                                                ${currentQuizData.answers[option]}
                                            </label><br>`;
        }
        document.getElementById('questions').appendChild(questionElement);
    }

    function submitQuiz() {
        const answerContainers = document.querySelectorAll(`#questions div`);
        answerContainers.forEach((container, index) => {
            const selectedOption = container.querySelector(`input[name=question${index}]:checked`);
            if (selectedOption) {
                if (selectedOption.value === quizQuestions[index].correctAnswer) {
                    score++;
                }
            }
        });
        showResults();
    }

    function showResults() {
        quizContainer.style.display = 'none';
        resultsContainer.style.display = 'block';
        document.getElementById('correct-answers').innerText = `Correct Answers: ${score}`;
        document.getElementById('total-questions').innerText = `Total Questions: ${quizQuestions.length}`;
        const timeTaken = document.getElementById('timer').innerText;
        document.getElementById('time-taken').innerText = `Time Taken: ${timeTaken}`;
        const resultsElement = document.getElementById('results');
        resultsElement.innerHTML = '';
        if (score === quizQuestions.length) {
            resultsElement.innerHTML = '<p>Congratulations! You answered all questions correctly.</p>';
            document.getElementById('brilliant').style.display = 'block';
        } else {
            resultsElement.innerHTML = '<p>Better luck next time!</p>';
        }
    }
});
