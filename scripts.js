<html>
<head>
<title>My JSP Page</title>
</head>
<body>

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
          data: [10, 8, 6, 4, 2]
        }],
          chart: {
          type: 'bar',
          height: 350,
          toolbar: {
          show: false
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
            distributed:true,
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
          categories: ["bowling", "batting", "wicket-keeping", "Fielding", "captaincy"],

        },
yaxis: {
title: {
text:"count"
}
}
};


        var barChart = new ApexCharts(document.querySelector("bar-chart"), barChartOptions);
        barChart.render();
      
        var areahartOptions = {
            series: [{
            name: 'bowling',
            data: [31, 40, 28, 51, 42, 109, 140]
          }, {
            name: 'Batting',
            data: [11, 32, 45, 32, 34, 52, 41]
          }],
            chart: {
            height: 350,
            type: 'area',
  toolbar: {
  show:false,
          },
  },
  colors:["#4f35a1", "#246dec"],
  dataLabels:{
  enabled:false,
  },
          stroke: {
            curve: 'smooth'
          },
  labels:["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  markers:{
  size:0
  },
          
          yaxis: [
            {
              title: {
                text: 'Bowling',
              },
            },
            {
              opposite: true,
              title: {
                text: 'Batting',
              },
            },
          ],
          tooltip: {
            shared: true,
            intersect: false,
  }
  };
          
  
          var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
          areaChart.render();
    </body>
</html>
    
      
        