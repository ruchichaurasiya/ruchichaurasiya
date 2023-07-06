var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
if(!sidebarOpen) {
sidebar.classList.add("sidebar-responsive");
sidebarOpen = true;
}
}

function closeSidebar() {
if(sidebarOpen) {
sidebar.classList.remove("sidebar-responsive");
sidebarOpen = false;
}
}

var barChartOptions = {
          series: [{
          data: [18, 15, 10, 5, 3]
        }],
          chart: {
          type: 'bar',
          height: 350,
          toolbar: {
          show: false;f
        },
},

colors:[
"#246dec",
"#cc3c43",
"#367952",
"#f5b74f",
"#4f35a1",
],

        plotOptions: {
          bar: {
            distributed:true;
            borderRadius: 4,
            horizontal: false,
            columnwidth:'40%',
          }
        },
        dataLabels: {
          enabled: false
        },
        legend:{
           show:false
},
        xaxis: {
          categories: ["bowling", "batting", "wicket-keeping", "Fielding","captaincy"],
        };
yaxis: {
title: {
text:"count"
}
}
};


        var chart = new ApexCharts(document.querySelector("#bar-chart"), barChartoptions);
        barChart.render();
      
      
    