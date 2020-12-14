var tableData = data
// object is from {}
var tbody=d3.select('tbody')
data.forEach ((row)=>{
    // we will loop through every key value in each ...
    // tr is an html element meaning row
    var cells = tbody.append('tr')
    Object.values(row).forEach((value)=>{
        // td is a cell
    cells.append('td').text(value)
    })
})
function buttonclick(){
    // html has different properties
    // 'value' is in quotes as a string
    tbody.html('')
var date = d3.selectAll('#datetime').property('value')
filterData = tableData.filter(obj=>obj.datetime==date)
filterData.forEach ((row)=>{
    // we will loop through every key value in each ...
    // tr is an html element meaning row
    var cells = tbody.append('tr')
    Object.values(row).forEach((value)=>{
        // td is a cell
    cells.append('td').text(value)
    })
})
}
// button click is a funtion. Refer to line 44 in html id=filter-btn
d3.selectAll('#filter-btn').on('click',buttonclick)