// show that the content is running
console.log("The content is running");

// variables
var width;
var height;

polution = 0;

// recieve a message from the background
chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(request, sender, sendResponse){
    polution = request * 7;
    // myDiv.style.width = polution + "px";
    width = polution;
    height = polution;
    //console.log(polution);

    // access body
var bodySelection = d3.select("body")
.style('margin', "0");

// add an svg for the dots
var svg = bodySelection.append("svg")
.attr("width", width)
.attr("height", height)
.style("position", "fixed")
.style("top", "0px");

var points = d3.range(polution).map(function(d) {
return [Math.random() * width, Math.random() * height];
});

var voronoi = d3.voronoi().extent([[0, 0], [width, height]]);

// draw voronoi
var triangle = svg.append("g")
        .style("fill", "none")
        .style("stroke", "black")
    .selectAll("path")
    .data(voronoi.triangles(points))
    .enter().append("path")
        .classed("primary", function(d) { return d[0] === points[0] || d[1] === points[0] || d[2] === points[0]; })
        .attr("d", function(d) { return "M" + d.join("L") + "Z"; })
        //.attr("fill", function(d,i) {return "#"+((1<<24)*Math.random()|0).toString(16)} )
        //.attr("fill", function(d,i) {return "rgba(0, 0, 0," + (Math.random() * (i*.5)) + ")"})
        .attr("fill", "none")

    // draw points
var point = svg.append("g")
        .attr("class", "sites")
    .selectAll("circle")
    .data(points)
    .enter().append("circle")
        .attr("r", width/200)
        .attr("cx", function(d) { return d[0]; })
        .attr("cy", function(d) { return d[1]; });

    //  var poly = svg.append("g").selectAll("path")
    //             .data( voronoi.polygons(points)  ).enter().append("path")
    //             .attr("stroke","none") 
    //             .attr("fill", function(d,i) {return "rgba(0, 0, 0," + (Math.random() * (i*.01)) + ")"} )
    //             .attr("d", function(d) { return "M" + d.join("L") + "Z" } );
}