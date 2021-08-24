// -----------------------------------------------------------------//
// NAVSLIDE FOR MOBILE NAVIGATION
// -----------------------------------------------------------------//
const navSlide = () => {
  // Grab HTML elements
  const navBurger = document.querySelector(".nav-burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  // TOGGLE NAV
  // Listen for click on the nav-burger element
  navBurger.addEventListener("click", () => {
    // Toggle the transformation
    nav.classList.toggle("nav-active");

    // ANIMATE LINKS
    navLinks.forEach((link, index) => {
      // If the animation has already occured, remove it so it can play again on re-open
      if (link.style.animation) {
        link.style.animation = "";
      }
      // Play animation with slight delay based on number of elements
      else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
  });
};

// Call Function
navSlide();

// -----------------------------------------------------------------//
// Dashboard Visualization
// -----------------------------------------------------------------//
//Create Constants
const selectvendor = document.getElementById("select-vendor");
const selectdatabase = document.getElementById("select-database");

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Set Cleared Data
const clearedData = {
  data: [
    ["Jan", null],
    ["Feb", null],
    ["Mar", null],
    ["Apr", null],
    ["May", null],
    ["Jun", null],
    ["Jul", null],
    ["Aug", null],
    ["Sep", null],
    ["Oct", null],
    ["Nov", null],
    ["Dec", null],
  ],
};

//Set Highcharts Settings
Highcharts.setOptions({
  lang: {
    thousandsSep: ",",
    decimalPoint: ".",
  },
  colors: [
    "#046A38",
    "#C99700",
    "#500778",
    "#f7a35c",
    "#8085e9",
    "#f15c80",
    "#e4d354",
    "#2b908f",
    "#f45b5b",
    "#91e8e1",
  ],
  credits: {
    text: 'NOVA Libraries',
    href: '#'
},
});

const chart1 = Highcharts.chart("chart1", {
  chart: {
    type: "spline",
  },
  title: {
    text: "Searches - Regular",
  },
  subtitle: {
    text: "Database",
  },
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yAxis: {
    title: {
      text: "Regular Searches",
    },
  },
  plotOptions: {
    spline: {
      dataLabels: {
        enabled: true,
      },
      enableMouseTracking: true,
    },
  },
  series: [
    {
      name: "2019",
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
    },
    {
      name: "2020",
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
    },
    {
      name: "2021",
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
    },
  ],
  labels: {
    formatter: function () {
      return Highcharts.numberFormat(this.value, 2);
    },
  },
});

const chart2 = Highcharts.chart("chart2", {
  chart: {
    type: "spline",
  },
  title: {
    text: "Searches - Federated",
  },
  subtitle: {
    text: "Database",
  },
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yAxis: {
    title: {
      text: "Federated Searches",
    },
  },
  plotOptions: {
    spline: {
      dataLabels: {
        enabled: true,
      },
      enableMouseTracking: true,
    },
  },
  series: [
    {
      name: "2019",
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
    },
    {
      name: "2020",
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
    },
    {
      name: "2021",
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
    },
  ],
});

const chart3 = Highcharts.chart("chart3", {
  chart: {
    type: "spline",
  },
  title: {
    text: "Item Investigations",
  },
  subtitle: {
    text: "Database",
  },
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yAxis: {
    title: {
      text: "Item Investigations",
    },
  },
  plotOptions: {
    spline: {
      dataLabels: {
        enabled: true,
      },
      enableMouseTracking: true,
    },
  },
  series: [
    {
      name: "2019",
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
    },
    {
      name: "2020",
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
    },
    {
      name: "2021",
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
    },
  ],
});

const chart4 = Highcharts.chart("chart4", {
  chart: {
    type: "spline",
  },
  title: {
    text: "Item Requests",
  },
  subtitle: {
    text: "Database",
  },
  xAxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yAxis: {
    title: {
      text: "Item Requests",
    },
  },
  plotOptions: {
    spline: {
      dataLabels: {
        enabled: true,
      },
      enableMouseTracking: true,
    },
  },
  series: [
    {
      name: "2019",
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
    },
    {
      name: "2020",
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
    },
    {
      name: "2021",
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
    },
  ],
});

//Gather all charts into array
const allCharts = [chart1, chart2, chart3, chart4];

function genVendors(jsondata) {
  let vendors = ["All Vendors"];
  for (let j = 0; j < jsondata.length; j++) {
    if (vendors.includes(jsondata[j].platform)) {
    } else {
      vendors.push(jsondata[j].platform);
    }
  }
  return vendors;
}

function genDatabases(jsondata, vendor) {
  let databases = [];
  for (let j = 0; j < jsondata.length; j++) {
    if (vendor) {
      if (databases.includes(jsondata[j].database)) {
      } else if (jsondata[j].platform == vendor) {
        databases.push(jsondata[j].database);
      }
    } else {
      if (databases.includes(jsondata[j].database)) {
      } else {
        databases.push(jsondata[j].database);
      }
    }
  }
  databases.sort((a, b) => (a.toUpperCase() > b.toUpperCase() ? 1 : -1));
  databases.unshift("Select a Database")
  return databases;
}

// Converts string of date to date format
function datify(string) {
  date = new Date(string);
  return date;
}

function buildSeriesData(jsondata) {
  //Compile all years in dataset and create array of unique years
  let finalseries = [];
  let years = [];
  let datakeys = [];
  for ([key, value] of Object.entries(jsondata)) {
    if (key == "platform" || key == "database" || key == "metric") {
    } else {
      //create datapoint key list
      let dpk = datify(key);
      datakeys.push(dpk);
      //create years list
      let year = datify(key).getUTCFullYear();
      if (years.includes(year)) {
      } else {
        years.push(year);
      }
    }
  }
  // sort years from oldest to newest
  years.sort();

  // sort datapoint keys from oldest to newest
  const sortedDatakeys = datakeys.sort((a, b) => b.date - a.date);

  //for each year
  for (let j = 0; j < years.length; j++) {
    let yeardict = {};
    let dps = [];
    let year = years[j];
    let platform = "";
    let database = "";
    let metric = "";
    for ([key, value] of Object.entries(jsondata)) {
      if (key == "platform") {
        platform = value;
      } else if (key == "database") {
        database = value;
      } else if (key == "metric") {
        metric = value;
      } else {
        if (datify(key).getUTCFullYear() == year)
          dps.push([monthNames[datify(key).getUTCMonth()], parseInt(value)]);
      }
    }
    let pointdict = {
      platform: platform,
      database: database,
      metric: metric,
      name: year,
      data: dps,
    };
    finalseries.push(pointdict);
  }
  return finalseries; //subseries
}

function chartData(datasource) {
  let series = [];
  for (let j = 0; j < datasource.length; j++) {
    subseries = buildSeriesData(datasource[j]);
    series.push(subseries);
  }
  return series;
}

function filterData(jsondata, database) {
  let filtereddata = [];
  for (let j = 0; j < jsondata.length; j++) {
    if (jsondata[j].database == database) {
      filtereddata.push(jsondata[j]);
    }
  }
  return filtereddata;
}

function renderList(list, target) {
  let element = target;
  element.innerHTML = "";
  for (let j = 0; j < list.length; j++) {
    let option = document.createElement("option");
    option.textContent = list[j];
    option.value = list[j];
    element.appendChild(option);
  }
}

function updateChart(chart, dps) {
  // chart.setTitle(null, { text: dps.database })
  for (let j = 0; j < dps.length; j++) {
    chart.series[j].setData(dps[j].data, (redraw = true));
  }
}

function clearChart(chart, dps) {
  // chart.setTitle(null, { text: dps.database })
  for (let j = 0; j < dps.length; j++) {
    chart.series[j].setData(clearedData, (redraw = true));
  }
}

function getMetrics (datasource) {
  let metricarray = []
  for (let j = 0; j < datasource.length; j++) {
    if (metricarray.includes(datasource[j][0].metric)){

    }
    else{
      metricarray.push(datasource[j][0].metric)
    };
  }
  return metricarray
}

function renderCharts(datasource) {
  let metrics = getMetrics(datasource)
  for (let j = 0; j < datasource.length; j++) {
    let dps = datasource[j];
    if (dps[0].metric == "Searches_Regular") {
      let chart = chart1;
      updateChart(chart, dps);
    }
    else if (!metrics.includes("Searches_Regular")){
      let chart = chart1;
      clearChart(chart, dps);
    }
    if (dps[0].metric == "Searches_Automated") {
      let chart = chart2;
      updateChart(chart, dps);
    }
    else if (!metrics.includes("Searches_Automated")){
      let chart = chart2;
      clearChart(chart, dps);
    }
    if (dps[0].metric == "Total_Item_Investigations") {
      let chart = chart3;
      updateChart(chart, dps);
    }
    else if (!metrics.includes("Total_Item_Investigations")){
      let chart = chart3;
      clearChart(chart, dps);
    }
    if (dps[0].metric == "Total_Item_Requests") {
      let chart = chart4;
      updateChart(chart, dps);
    }
    else if (!metrics.includes("Total_Item_Requests")){
      let chart = chart4;
      clearChart(chart, dps);
    }
  }
}

renderList(genVendors(USAGE), selectvendor);
renderList(genDatabases(USAGE), selectdatabase);

selectvendor.addEventListener("change", (e) => {
  let vendor = e.target.value;
  if (vendor == "All Vendors") {
    renderList(genDatabases(USAGE), selectdatabase);
  } else {
    renderList(genDatabases(USAGE, vendor), selectdatabase);
  }
});

selectdatabase.addEventListener("change", (e) => {
  let database = e.target.value;
  let data = chartData(filterData(USAGE, database));
  Highcharts.charts.forEach((chart) => {
    chart.setTitle(null, { text: database });
  });
  renderCharts(data);
});
