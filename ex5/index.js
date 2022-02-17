//data
const time = [
    "2020-01","2020-02","2020-03","2020-04","2020-05","2020-06","2020-07","2020-08","2020-09","2020-10","2020-11","2020-12","2021-01","2021-02","2021-03","2021-04","2021-05","2021-06","2021-07","2021-08","2021-09","2021-10"
];
const dsa = [
    {Alkoholfreies : [104.8,105.3,104.1,105.4,105.1,105,102.4,102.8,104.6,103.6,103.9,103.7,103.9,105.4,105.9,106.7,106.7,106.3,107.2,107.4,106.8,106.7,107.5]},
    {Alkoholische : [104.1,104.2,103.8,103.7,104.4,104.2,102.1,101.9,102.2,102.3,101.9,102.6,101.9,103.9,105,105.2,104.9,104.8,104.9,105.2,105.3,105.2,105.3]},
    {Andere : [106.6,106.8,105.4,105.2,106.9,105.9,104.2,103.7,104.3,104.5,103.4,105.3,103.4,104.9,107.3,107.3,106.7,106.4,106.4,107.2,107.3,107.2,107.5]},
    {Biermixgetränke : [108.9,109.2,109.2,109.3,108.3,107.6,105.3,105.9,106.4,106.1,106.7,106.6,106.7,108.2,109.1,109.3,109,108.3,109.2,110.2,109.1,109.4,110]},
    {Erfrischungsmixgetränke : [103.1,103.6,103.8,103.4,104,104.5,102,101.6,101.5,102.2,102.5,102.2,102.5,103.5,104,104,104.5,104,104.5,103.9,103.6,104.1,104.8]},   
    {Liköre : [103.8,103.7,103.5,103.6,104,104.1,101.9,101.8,102,102,101.9,102.1,101.9,104.5,104.7,105.1,105.1,104.9,104.9,105.1,105.2,105.2,105.2]},
    {Untergäriges : [106.4,106.5,104.8,104.3,106.5,105.6,104,103.2,103.8,104.1,102.7,105,102.7,104.2,106.9,107.1,106,105.7,105.7,106.4,106.8,106.7,106.9]},
    {Wein : [103.5,103.4,103.3,103.3,103.7,103.8,101.6,101.5,101.7,101.7,101.7,101.8,101.7,104.1,104.3,104.6,104.6,104.5,104.5,104.6,104.7,104.8,104.8]},
    {Wein : [107.8,107.9,108.1,106.6,107.7,108.6,107.4,107.3,106.4,107.2,107.6,107.4,107.6,109.1,109.1,109.4,110.2,110.8,110.9,111.7,112.1,111.3,111.9]},
    {Weizenbier : [108.4,108.5,108.6,109.1,110.2,108.3,106.6,107.7,107,108.1,106.4,107.9,106.4,108.2,110.5,108.9,111.3,111.4,109.9,111.4,110.7,109.9,110.7]}
];


const ds = dsa.map((e) => Object.keys(e))
console.log(ds);
const va = dsa.map((e,i) => Object.values(e))
const newA = va.join("").split(",")
console.log(newA)
//Alkoholfreies bier

const titles = ["Alkoholfreies bier" , "Biermixgetränke", "Wein", "WeizenBier"]
const date1 = [104.8,105.3,104.1,105.4,105.1,105,102.4,102.8,104.6,103.6,103.9,103.7,103.9,105.4,105.9,106.7,106.7,106.3,107.2,107.4,106.8,106.7]
// Biermixgetränke
const date2 = [108.9,109.2,109.2,109.3,108.3,107.6,105.3,105.9,106.4,106.1,106.7,106.6,106.7,108.2,109.1,109.3,109,108.3,109.2,110.2,109.1,109.4]
// Wein
const date3 = [103.5,103.4,103.3,103.3,103.7,103.8,101.6,101.5,101.7,101.7,101.7,101.8,101.7,104.1,104.3,104.6,104.6,104.5,104.5,104.6,104.7,104.8]
// WeizenBier
const date4 = [108.4,108.5,108.6,109.1,110.2,108.3,106.6,107.7,107,108.1,106.4,107.9,106.4,108.2,110.5,108.9,111.3,111.4,109.9,111.4,110.7,109.9]

//setting
const Width = 800;
const Height = Width * 3;
const svg = d3.select("svg").attr("width", Width).attr("height", Height + 200).style("background", "#e8e8e4")
console.log("d")
svg.append("rect").attr("width", Width).attr("height", Width).attr("fill", "#e8e8e4")

//date Group
svg
.append("g")
.attr("transform", "translate(730, 150)")
.classed("date", true);


let gXscale = d3.scaleLinear().domain([1, 4]).range([100, 550]);
let gtXscale = d3.scaleLinear().domain([1, 4]).range([100, 550]);
svg
.append("g")
.attr("transform", `translate(${gXscale(1)},150 )`)
.classed("circle1", true);
svg
.append("g")
.attr("transform",`translate(${gXscale(2)},150 )`)
.classed("circle2", true);
svg
.append("g")
.attr("transform",`translate(${gXscale(3)},150 )`)
.classed("circle3", true);
svg
.append("g")
.attr("transform",`translate(${gXscale(4)},150 )`)
.classed("circle4", true);

svg
.append("g")
.selectAll("text")
.data(titles)
.join("text")
.text(function(e) {return e})
.attr("x", function(e,i){ return gtXscale(i + 1) })
.attr("y", 80)
.style("position", "fixed")

function dateChange(e, r){
    let dateYscale = d3.scaleLinear().domain([0, time.length]).range([0, e]);
    let circleScale = d3.scaleLinear().domain([d3.min(newA), d3.max(newA)]).range([r/10, r]);
    let circleColorScale = d3.scaleSequential().domain([d3.min(newA), d3.max(newA)]).interpolator(d3.interpolateCool);
    
    //date
    d3
    .select(".date")
    .selectAll("text")
    .data(time)
    .join("text")
    .text((e) => e)
    .transition()
    .duration(2000)
    .attr("x", 0)
    .attr("y", function(d,i){ return dateYscale(i)})
    .attr("fill", () => e === 0 ? "#e8e8e4" : "black")

    d3
    .select(".circle1")    
    .selectAll("circle")
    .data(date1)
    .join("circle")
    .transition()
    .duration(2000)
    .attr("cx", 0)
    .attr("cy", function(d,i){ return dateYscale(i)})
    .attr("r", function(d, i){return circleScale(d)})
    .attr("fill", function(d){
       return circleColorScale(d)
    })


    d3
    .select(".circle2")    
    .selectAll("circle")
    .data(date2)
    .join("circle")
    .transition()
    .duration(2000)
    .attr("cx", 0)
    .attr("cy", function(d,i){ return dateYscale(i)})
    .attr("r", function(d, i){return circleScale(d)})
    .attr("fill", function(d){
       return circleColorScale(d)
    })

    d3
    .select(".circle3")    
    .selectAll("circle")
    .data(date3)
    .join("circle")
    .transition()
    .duration(2000)
    .attr("cx", 0)
    .attr("cy", function(d,i){ return dateYscale(i)})
    .attr("r", function(d, i){return circleScale(d)})
    .attr("fill", function(d){
       return circleColorScale(d)
    })
    d3
    .select(".circle4")    
    .selectAll("circle")
    .data(date4)
    .join("circle")
    .transition()
    .duration(2000)
    .attr("cx", 0)
    .attr("cy", function(d,i){ return dateYscale(i)})
    .attr("r", function(d, i){return circleScale(d)})
    .attr("fill", function(d){
       return circleColorScale(d)
    })




    
}


function updateAll(e, r){
    dateChange(e, r)
}

updateAll(0);



d3
.select("body")
.append("div")
.classed("btnBox", true)
//button1
d3
.select(".btnBox")
.append("button")
.classed("btn1", true)
.text("dain")
.on("click", () =>  updateAll(Height, 70))

d3
.select(".btnBox")
.append("button")
.classed("btn1", true)
.text("dain")
.on("click", () =>  updateAll(600, 20))


