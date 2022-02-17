//data
const time = [
    "2020-01","2020-02","2020-03","2020-04","2020-05","2020-06","2020-07","2020-08","2020-09","2020-10","2020-11","2020-12","2021-01","2021-02","2021-03","2021-04","2021-05","2021-06","2021-07","2021-08","2021-09","2021-10","2021-11"
];


//setting
const Width = 800;
const Height = Width * 3;
const svg = d3.select("svg").attr("width", Width).attr("height", Height).style("background", "red")

svg.append("rect").attr("width", Width).attr("height", Width).attr("fill", "blue")


//scale
let dateYscale = d3.scaleLinear().domain([0, time.length]).range([0, Height]);
//date

function dateChange(e){
    dateYscale = d3.scaleLinear().domain([0, time.length]).range([0, e]);
    svg
    .append("g")
    .attr("transform", "translate(10, 50)")
    .selectAll("text")
    .data(time)
    .join("text")
    .text((e) => e)
    .attr("x", 700)
    .attr("y", function(d,i){ return dateYscale(i)})
    ;
}


function update(e){
    const test = e;
    dateChange(test)
}

update(Height);


