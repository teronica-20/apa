document.addEventListener('DOMContentLoaded', function() {
    const ctxBar = document.getElementById('barChart').getContext('2d');
    const ctxLine = document.getElementById('lineChart').getContext('2d');

    const labels = ['Mangga', 'Alpukat', 'Anggur', 'Stroberi', 'Pisang', 'Coklat', 'Permen Karet', 'Kelapa'];
    const prices = [25000, 27000, 30000, 28000, 26000, 32000, 29000, 31000];

    const barChart = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Harga Kopi (Rp)',
                data: prices,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const lineChart = new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Harga Kopi (Rp)',
                data: prices,
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

var lineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ['Mangga', 'Alpukat', 'Anggur', 'Stroberi', 'Pisang', 'Coklat', 'Permen Karet', 'Kelapa'],
        datasets: [{
            label: 'Harga Kopi (Rp)',
            data: [20000, 25000, 22000, 24000, 23000, 26000, 24000, 28000],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
            fill: false
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});