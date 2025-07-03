document.getElementById('predicate-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get semester test marks
    const semester1 = parseFloat(document.getElementById('semester1').value);
    const semester2 = parseFloat(document.getElementById('semester2').value);

    // Get class test marks
    const classTests = [];
    for (let i = 1; i <= 5; i++) {
        classTests.push(parseFloat(document.getElementById('class' + i).value));
    }

    // Get assignment mark
    const assignment = parseFloat(document.getElementById('assignment').value);

    // Calculate weighted averages
    const semesterAvg = (semester1 + semester2) / 2;
    const classAvg = classTests.reduce((a, b) => a + b, 0) / classTests.length;

    const finalScore = (semesterAvg * 0.6) + (classAvg * 0.3) + (assignment * 0.1);

    // Display result
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Final Predicate Score: ${finalScore.toFixed(2)}`;
});
