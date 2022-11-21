// import the data from data.js
const tableData = data;

//Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }

  //Creating a table
  function buildTable(data) {
    tbody.html("");

  //Adding the forEach function
  data.forEach(dataRow)=> {
    let row = tbody.append("tr");

  Object.values(dataRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
            }
        );
    });
  }

//Adding filters
  function handleClick() {

    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {

      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);

    // Attach an event to listen for the form button
    d3.selectAll("#filter-btn").on("click", handleClick);

    // Build the table when the page loads
    buildTable(tableData);
  };