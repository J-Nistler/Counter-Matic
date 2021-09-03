const headerRow = document.getElementById("header-row");
const tableBody = document.getElementById("table-body");

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

// Converts string of date to date format
function datify(string) {
  date = new Date(string);
  return date;
}

function monthify(arr) {
  month_array = [];
  for (let i = 0; i < arr.length; i++) {
    let new_format =
      monthNames[datify(arr[i]).getUTCMonth()] +
      " " +
      datify(arr[i]).getUTCFullYear();
    month_array.push(new_format);
  }
  return month_array;
}

function getDates(json) {
  let date_array = [];
  for (let j = 0; j < json.length; j++) {
    for ([key, value] of Object.entries(json[j])) {
      if (key == "platform" || key == "database" || key == "metric") {
      } else {
        if (date_array.includes(key)) {
        } else {
          date_array.push(key);
        }
      }
    }
  }
  return sortDates(date_array);
}

function sortDates(arr) {
  let sorted_dates = [];
  for (let i = 0; i < arr.length; i++) {
    let new_date = datify(arr[i]);
    sorted_dates.push(new_date);
  }
  sorted_dates.sort((a, b) => (a > b ? 1 : -1));
  return arr;
}

function renderTableHeaders(json) {
  let date_headers = monthify(getDates(json));
  for (let j = 0; j < date_headers.length; j++) {
    let header = document.createElement("th");
    header.textContent = date_headers[j];
    header.scope = "col";
    headerRow.appendChild(header);
  }
}

function renderTableRow(obj, dates_arr) {
    let tr = document.createElement("tr");
    let td_platform = document.createElement("td")
    td_platform.textContent = obj['platform']
    tr.appendChild(td_platform)
    let td_database = document.createElement("td")
    td_database.textContent = obj['database']
    tr.appendChild(td_database)
    let td_metric = document.createElement("td")
    td_metric.textContent = obj['metric']
    tr.appendChild(td_metric)

    for (let j = 0; j < dates_arr.length; j++) {
        let dp = document.createElement("td")
        if (obj[dates_arr[j]]){
            dp.textContent= obj[dates_arr[j]]
        }
        else {
            dp.textContent= "0"
        }
        tr.appendChild(dp)
    }

    return tr    
}

function renderTableBody(json) {
    let date_headers = getDates(json);
  for (let j = 0; j < json.length; j++) {
      tableBody.appendChild(renderTableRow(json[j], date_headers))
         }
}


renderTableHeaders(USAGE);
renderTableBody(USAGE);
