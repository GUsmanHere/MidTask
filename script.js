document.addEventListener('DOMContentLoaded', function () {
    
    var questions = document.querySelectorAll('.question');
    
    questions.forEach(function (question) {
        question.addEventListener('click', function () {
            
            this.classList.toggle('active');
            var answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});