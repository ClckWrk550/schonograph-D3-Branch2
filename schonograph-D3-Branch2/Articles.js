//import { createArticleNodeSvg } from './ArticleNode.js';
//import ForceDirectedGraph from './ForceDirectedGraph.js';

var nodes = [
  {"id": "Article 1", "group": 1},
  {"id": "Article 2", "group": 1},
  {"id": "Article 3", "group": 1},
  {"id": "Article 4", "group": 1},
  {"id": "Article 5", "group": 1},
  {"id": "Article 6", "group": 1},
  {"id": "Article 7", "group": 1},
  {"id": "Article 8", "group": 1},
  {"id": "Article 9", "group": 1},
  {"id": "Article 10", "group": 1},
  {"id": "Article 18", "group": 2},
  {"id": "Article 11", "group": 2},
  {"id": "Article 12", "group": 3},
  {"id": "Article 13", "group": 2},
  {"id": "Article 14", "group": 2},
  {"id": "Article 15", "group": 2},
  {"id": "Article 16", "group": 3},
  {"id": "Article 17", "group": 3},
  {"id": "Article 19", "group": 3},
  {"id": "Article 20", "group": 3},
  {"id": "Article 21", "group": 3},
  {"id": "Article 22", "group": 3},
  {"id": "Article 23", "group": 3},
  {"id": "Article 24", "group": 3},
  {"id": "Article 25", "group": 4},
  {"id": "Article 26", "group": 4},
  {"id": "Article 27", "group": 5},
  {"id": "Article 28", "group": 4},
  {"id": "Article 29", "group": 0},
  {"id": "Article 30", "group": 2},
  {"id": "Article 31", "group": 3},
  {"id": "Article 32", "group": 2},
  {"id": "Article 33", "group": 2},
  {"id": "Article 34", "group": 2},
  {"id": "Article 35", "group": 2},
  {"id": "Article 36", "group": 2},
  {"id": "Article 37", "group": 2},
  {"id": "Article 38", "group": 2},
  {"id": "Article 39", "group": 2},
  {"id": "Article 40", "group": 4},
  {"id": "Article 41", "group": 6},
  {"id": "Article 42", "group": 4},
  {"id": "Article 43", "group": 4},
  {"id": "Article 44", "group": 5},
  {"id": "Article 45", "group": 0},
  {"id": "Article 46", "group": 0},
  {"id": "Article 47", "group": 7},
  {"id": "Article 48", "group": 7},
  {"id": "Article 49", "group": 8},
  {"id": "Article 50", "group": 5},
  {"id": "Article 51", "group": 5},
  {"id": "Article 52", "group": 5},
  {"id": "Article 53", "group": 5},
  {"id": "Article 54", "group": 5},
  {"id": "Article 55", "group": 5},
  {"id": "Article 56", "group": 8},
  {"id": "Article 57", "group": 5},
  {"id": "Article 58", "group": 8},
  {"id": "Article 59", "group": 8},
  {"id": "Article 60", "group": 8},
];
var links = [
  // initialize nodes in the force directed graph
  {"source": "Article 2", "target": "Article 1", "value": 1},
  {"source": "Article 3", "target": "Article 1", "value": 8},
  {"source": "Article 4", "target": "Article 1", "value": 10},
  {"source": "Article 4", "target": "Article 3", "value": 6},
  {"source": "Article 5", "target": "Article 1", "value": 1},
  {"source": "Article 6", "target": "Article 1", "value": 1},
  {"source": "Article 7", "target": "Article 1", "value": 1},
  {"source": "Article 8", "target": "Article 1", "value": 1},
  {"source": "Article 9", "target": "Article 1", "value": 2},
  {"source": "Article 10", "target": "Article 1", "value": 1},
  {"source": "Article 11", "target": "Article 18", "value": 1},
  {"source": "Article 11", "target": "Article 4", "value": 3},
  {"source": "Article 11", "target": "Article 3", "value": 3},
  {"source": "Article 11", "target": "Article 1", "value": 5},
  {"source": "Article 12", "target": "Article 11", "value": 1},
  {"source": "Article 13", "target": "Article 11", "value": 1},
  {"source": "Article 14", "target": "Article 11", "value": 1},
  {"source": "Article 15", "target": "Article 11", "value": 1},
  {"source": "Article 17", "target": "Article 16", "value": 4},
  {"source": "Article 19", "target": "Article 16", "value": 4},
  {"source": "Article 19", "target": "Article 17", "value": 4},
  {"source": "Article 20", "target": "Article 16", "value": 4},
  {"source": "Article 20", "target": "Article 17", "value": 4},
  {"source": "Article 20", "target": "Article 19", "value": 4},
  {"source": "Article 21", "target": "Article 16", "value": 3},
  {"source": "Article 21", "target": "Article 17", "value": 3},
  {"source": "Article 21", "target": "Article 19", "value": 3},
  {"source": "Article 21", "target": "Article 20", "value": 4},
  {"source": "Article 22", "target": "Article 16", "value": 3},
  {"source": "Article 22", "target": "Article 17", "value": 3},
  {"source": "Article 22", "target": "Article 19", "value": 3},
  {"source": "Article 22", "target": "Article 20", "value": 3},
  {"source": "Article 22", "target": "Article 21", "value": 5},
  {"source": "Article 23", "target": "Article 16", "value": 3},
  {"source": "Article 23", "target": "Article 17", "value": 3},
  {"source": "Article 23", "target": "Article 19", "value": 3},
  {"source": "Article 23", "target": "Article 20", "value": 3},
  {"source": "Article 23", "target": "Article 21", "value": 4},
  {"source": "Article 23", "target": "Article 22", "value": 4},
  {"source": "Article 24", "target": "Article 16", "value": 3},
  {"source": "Article 24", "target": "Article 17", "value": 3},
  {"source": "Article 24", "target": "Article 19", "value": 3},
  {"source": "Article 24", "target": "Article 20", "value": 3},
  {"source": "Article 24", "target": "Article 21", "value": 4},
  {"source": "Article 24", "target": "Article 22", "value": 4},
  {"source": "Article 24", "target": "Article 23", "value": 4},
  {"source": "Article 24", "target": "Article 12", "value": 2},
  {"source": "Article 24", "target": "Article 11", "value": 9},
  {"source": "Article 25", "target": "Article 24", "value": 2},
  {"source": "Article 25", "target": "Article 11", "value": 7},
  {"source": "Article 26", "target": "Article 25", "value": 13},
  {"source": "Article 26", "target": "Article 24", "value": 1},
  {"source": "Article 26", "target": "Article 11", "value": 12},
  {"source": "Article 27", "target": "Article 25", "value": 4},
  {"source": "Article 27", "target": "Article 11", "value": 31},
  {"source": "Article 27", "target": "Article 16", "value": 1},
  {"source": "Article 27", "target": "Article 26", "value": 1},
  {"source": "Article 28", "target": "Article 11", "value": 17},
  {"source": "Article 28", "target": "Article 24", "value": 5},
  {"source": "Article 28", "target": "Article 26", "value": 5},
  {"source": "Article 28", "target": "Article 25", "value": 1},
  {"source": "Article 28", "target": "Article 27", "value": 1},
  {"source": "Article 29", "target": "Article 11", "value": 8},
  {"source": "Article 29", "target": "Article 28", "value": 1},
  {"source": "Article 30", "target": "Article 24", "value": 1},
  {"source": "Article 30", "target": "Article 28", "value": 1},
  {"source": "Article 30", "target": "Article 11", "value": 2},
  {"source": "Article 31", "target": "Article 24", "value": 1},
  {"source": "Article 32", "target": "Article 31", "value": 2},
  {"source": "Article 32", "target": "Article 11", "value": 3},
  {"source": "Article 32", "target": "Article 24", "value": 2},
  {"source": "Article 32", "target": "Article 28", "value": 1},
  {"source": "Article 33", "target": "Article 11", "value": 1},
  {"source": "Article 34", "target": "Article 11", "value": 2},
  {"source": "Article 34", "target": "Article 28", "value": 1},
  {"source": "Article 35", "target": "Article 11", "value": 3},
  {"source": "Article 35", "target": "Article 30", "value": 2},
  {"source": "Article 36", "target": "Article 11", "value": 3},
  {"source": "Article 36", "target": "Article 35", "value": 3},
  {"source": "Article 36", "target": "Article 30", "value": 2},
  {"source": "Article 37", "target": "Article 35", "value": 2},
  {"source": "Article 37", "target": "Article 36", "value": 2},
  {"source": "Article 37", "target": "Article 11", "value": 2},
  {"source": "Article 37", "target": "Article 30", "value": 1},
  {"source": "Article 38", "target": "Article 35", "value": 2},
  {"source": "Article 38", "target": "Article 36", "value": 2},
  {"source": "Article 38", "target": "Article 37", "value": 2},
  {"source": "Article 38", "target": "Article 11", "value": 2},
  {"source": "Article 38", "target": "Article 30", "value": 1},
  {"source": "Article 39", "target": "Article 35", "value": 2},
  {"source": "Article 39", "target": "Article 36", "value": 2},
  {"source": "Article 39", "target": "Article 37", "value": 2},
  {"source": "Article 39", "target": "Article 38", "value": 2},
  {"source": "Article 39", "target": "Article 11", "value": 2},
  {"source": "Article 39", "target": "Article 30", "value": 1},
  {"source": "Article 40", "target": "Article 26", "value": 1},
  {"source": "Article 41", "target": "Article 26", "value": 1},
  {"source": "Article 42", "target": "Article 25", "value": 2},
  {"source": "Article 42", "target": "Article 26", "value": 3},
  {"source": "Article 43", "target": "Article 42", "value": 2},
  {"source": "Article 43", "target": "Article 26", "value": 2},
  {"source": "Article 43", "target": "Article 25", "value": 1},
  {"source": "Article 44", "target": "Article 11", "value": 3},
  {"source": "Article 44", "target": "Article 27", "value": 1},
  {"source": "Article 44", "target": "Article 28", "value": 1},
  {"source": "Article 45", "target": "Article 29", "value": 3},
  {"source": "Article 45", "target": "Article 11", "value": 1},
  {"source": "Article 46", "target": "Article 29", "value": 2},
  {"source": "Article 48", "target": "Article 47", "value": 1},
  {"source": "Article 49", "target": "Article 48", "value": 2},
  {"source": "Article 49", "target": "Article 26", "value": 1},
  {"source": "Article 49", "target": "Article 28", "value": 1},
  {"source": "Article 49", "target": "Article 11", "value": 1},
  {"source": "Article 50", "target": "Article 27", "value": 3},
  {"source": "Article 50", "target": "Article 11", "value": 2},
  {"source": "Article 51", "target": "Article 50", "value": 1},
  {"source": "Article 51", "target": "Article 25", "value": 1},
  {"source": "Article 52", "target": "Article 50", "value": 9},
  {"source": "Article 52", "target": "Article 27", "value": 2},
  {"source": "Article 52", "target": "Article 11", "value": 2},
  {"source": "Article 53", "target": "Article 52", "value": 1},
  {"source": "Article 53", "target": "Article 40", "value": 1},
  {"source": "Article 54", "target": "Article 52", "value": 1},
  {"source": "Article 55", "target": "Article 52", "value": 2},
  {"source": "Article 55", "target": "Article 50", "value": 1},
  {"source": "Article 55", "target": "Article 27", "value": 1},
  {"source": "Article 56", "target": "Article 52", "value": 6},
  {"source": "Article 56", "target": "Article 50", "value": 12},
  {"source": "Article 56", "target": "Article 40", "value": 1},
  {"source": "Article 56", "target": "Article 55", "value": 1},
  {"source": "Article 56", "target": "Article 27", "value": 21},
  {"source": "Article 56", "target": "Article 11", "value": 19},
  {"source": "Article 56", "target": "Article 16", "value": 1},
  {"source": "Article 56", "target": "Article 26", "value": 2},
  {"source": "Article 56", "target": "Article 42", "value": 5},
  {"source": "Article 56", "target": "Article 49", "value": 4},
  {"source": "Article 57", "target": "Article 50", "value": 1},
  {"source": "Article 57", "target": "Article 56", "value": 1},
  {"source": "Article 58", "target": "Article 56", "value": 1},
  {"source": "Article 58", "target": "Article 42", "value": 1},
  {"source": "Article 58", "target": "Article 49", "value": 1},
  {"source": "Article 59", "target": "Article 56", "value": 7},
  {"source": "Article 59", "target": "Article 49", "value": 7},
  {"source": "Article 59", "target": "Article 28", "value": 6},
  {"source": "Article 59", "target": "Article 58", "value": 1},
  {"source": "Article 59", "target": "Article 11", "value": 4},
  {"source": "Article 60", "target": "Article 59", "value": 15},
  {"source": "Article 60", "target": "Article 56", "value": 5},
  {"source": "Article 60", "target": "Article 49", "value": 6},
]; 

var color = d3
  .scaleOrdinal(d3.schemeDark2)
  .domain(nodes)
  .range(['#f6b45e', '#69b3a2', 'blue', 'darkgreen', 'Brown','Pink', 'steelblue', '#8565c4']);

var width = 400,
  height = 400;

  const forceNode = d3.forceManyBody();
  const forceLink = d3.forceLink(links).id(function (d) {
    return d.id;
  });
  
  const simulation = d3
    .forceSimulation(nodes)
    .force("link", forceLink)
    .force("charge", forceNode)
    .force("center", d3.forceCenter())
    .force("collision", d3.forceCollide().radius(11))
    .on("tick", ticked);

  const svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [-width / 2, -height / 2, width, height])
    .call(
      d3
        .zoom()
        .on("zoom", (event) =>
          svg.style("transform", `scale(${event.transform.k})`)
        )
    )
    .on("mousedown.zoom", null);
    
    var keys = [
      'Science',
      'Technology',
      'Engineering',
      'Math',
      'Computation',
      'Philosophy',
      'Religion',
      'Sports'
      ];
  
  var color = d3
    .scaleOrdinal(d3.schemeDark2)
    .domain(nodes)
    .range(['#f6b45e', '#69b3a2', 'blue', 'darkgreen', 'Brown','Pink', 'steelblue', '#8565c4']);
  
  svg.selectAll("mydots")
    .data(keys)
    .enter()
    .append("circle")
      .attr("cx", -370)
      .attr("cy", function(d,i){ return -150 + i*25}) 
      .attr("r", 7)
      .style("fill", function(d){ return color(d)})
  
  svg.selectAll("mylabels")
    .data(keys)
    .enter()
    .append("text")
      .attr("x", -350)
      .attr("y", function(d,i){ return -150 + i*25}) 
      .text(function(d){ return d})
      .attr("text-anchor", "left")
      .style("alignment-baseline", "middle")

  var link = svg
    .append("g")
    .attr("class", "links")
    .selectAll("line")
    .data(links)
    .enter()
    .append("line")
    .attr("stroke", "#fff")
    .attr("stroke-width", 1.5)
    .attr("class", "link")
    .attr("opacity", .5);
    
  var node = svg
    .append("g")
    .attr("class", "nodes")
    .selectAll("g")
    .data(nodes)
    .enter()
    .append("g")
    .attr("class", "node")
    .call(drag(simulation))
    .on("mouseover", mouseover)
    .on("mouseout", mouseout)
    .on("click", clicked)
    .style('fill', function (d) {
      return color(d.group);
    })

  var circles = node.append("circle").attr("r", 6)

  var labels = node
    .append("text")
    .attr("x", 10)
    .attr("fill", "black")
    .attr("dy", ".35em")
    .style("font-size", "5px");


  node.append("title").text(function (d) {
    return d.id;
  });

  simulation.nodes(nodes).on("tick", ticked);
  simulation.force("link").links(links);

  resize(); // Call resize

  d3.select(window).on("resize", resize); // Call resize with every window update

  function ticked() {
    link
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);
    node.attr("transform", (d) => `translate(${d.x},${d.y})`);
  }


  function clicked(event) {
    // this function deals with a click event on a node
    if (event.defaultPrevented) return; // node was dragged, not clicked
    svg.remove();
    //createArticleNodeSvg();
    window.location.href = "ArticleNode.html";

  }
  
  function mouseover(event) {
    // this function deals with mouseover a node event
    d3.select(event.target).transition().duration(550).attr("r", 20);
    //d3.select('body').append('p').text('Hello');
  }


  function mouseout(event) {
    // this function deals with mouseaway or mouseout event on a node
    d3.select(event.target)
      .transition() // Make specific node reappear
      .duration(750)
      .attr("r", 6);
  }


  function drag(simulation) {
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }


    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }


    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return d3
      .drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  }


  function resize() {
    // Resizes d3 graph position to fit window
    (width = window.innerWidth), (height = window.innerHeight);
    svg.attr("width", width).attr("height", height);
  }

