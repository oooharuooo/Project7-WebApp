// Alert Banner
const alertBanner = document.getElementById("alert");
const alertBannerClose = document.querySelectorAll(".alert-banner-close");
const flexList = document.querySelectorAll('.flex-list');
// // create the html for the banner
alertBanner.innerHTML =
`
<div class="alert-banner">
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-close">X</p>
</div>
`
// Alert X button remove
alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-close")) {
    alertBanner.style.display = "none"
    }
});

//Bell Button
const drop = document.querySelector('.dropBtn');
drop.addEventListener('click',e => {
    document.getElementById("myDropdown").classList.toggle("show");
  }) 

$(".listNotifications").on("click", "button", function(e) {
    const listNotifications = $('.listNotifications');
    const flex = $('.flex-list');
    const dot = $('.dot');
    e.preventDefault();
   this.parentNode.remove();
   if(listNotifications.find(flex).length === 0) {
       listNotifications.hide();
       dot.hide();
   };
});
  

// Traffic-chart
const trafficCanvas = document.getElementById('traffic-chart');
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
            "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};
let trafficOptions = {
    aspectRatio: 2.5,
    animation: {duration: 0},
    scales: {
        yAxes: [{
            ticks: {
            beginAtZero:true
            }
        }]
    },
    legend : {display: false}
};
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

// Traffic Navigation
const trafficNav = document.querySelector('.traffic-nav');
trafficNav.addEventListener('click',e => {
    // random Number
    const random = () => {
        let array = [];
        for (let i = 0; i < 11; i++) {
          let randomNumber = Math.floor(Math.random() *2500 +100)
            array.push(randomNumber)
        }
       return array
     }
    const dataTraffic = trafficData.datasets[0].data = random();
    trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
    });
});
// Daily-chart
const dailyCanvas = document.getElementById("daily-chart");
const dailyData = {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};
const dailyOptions = {
        scales: {
            yAxes: [{
                ticks: {
                beginAtZero:true
            }
        }]
        },
        legend : {display: false}
}
let dailyChart = new Chart(dailyCanvas, {
        type: 'bar',
        data: dailyData,
        options: dailyOptions
});

// Donut chart
const mobileCanvas = document.getElementById("mobile-chart");
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
        '#7477BF',
        '#78CF82',
        '#51B6C8'
    ]
}]
};
const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
    }
}
};
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

// Message User
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");
send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
        alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});
    



