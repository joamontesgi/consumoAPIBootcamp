function consumo() {
    var endPoint = document.getElementById('endPoint').value;
    fetch(endPoint)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
        .catch(function (error) {
            console.log('Error: ' + error);
        });
}

var data = [
    {
        x: ['giraffes', 'orangutans', 'monkeys'],
        y: [20, 14, 23],
        type: 'bar'
    }
];

Plotly.newPlot('myDiv', data);
