function generateTable() {
    var number = document.getElementById('number').value;
    var range = document.getElementById('range').value;
    var tableOutput = document.getElementById('tableOutput');
    tableOutput.innerHTML = ''; // Clear previous table

    // Create table header
    var headerRow = '<tr><th>Number</th><th>Sign</th><th>Sequence</th><th>Sign</th><th>Result</th></tr>';
    tableOutput.innerHTML += headerRow;

    // Generate table rows
    for (var i = 1; i <= range; i++) {
        var result = number * i;
        var randomColor = getRandomColor();
        var row = '<tr style="background-color: ' + randomColor + ';">' +
                    '<td>' + number + '</td>' +
                    '<td>x</td>' +
                    '<td>' + i + '</td>' +
                    '<td>=</td>' +
                    '<td>' + result + '</td>' +
                  '</tr>';
        tableOutput.innerHTML += row;
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
