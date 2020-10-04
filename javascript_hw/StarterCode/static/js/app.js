// from data.js
var tableData = data;

// YOUR CODE HERE!

// Creating References
var $tbody = d3.select("tbody");
var filter_button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

// Inputing the data into the HTML
var addData = (data_html) => {
    data_html.forEach(sightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(sightings[column])
        )
    });
}

addData(tableData);

// Button Functions
filter_button.on("click", function() {

    // Prevents page refresh
    d3.event.preventDefault();
    
    // Input data
    var inputDate = inputFieldDate.property("value").trim();

    // Filter data/output
    var filter = tableData.filter(tableData => tableData.datetime === inputDate);
    
    $tbody.html("");

    // Response
    let response = {filter}

    if(response.filter.length !== 0) {addData(filter);}
    
    else {$tbody.append("tr").append("td").text("No UFO sightings on this day");}
})