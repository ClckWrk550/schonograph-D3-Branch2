import ForceDirectedGraph from './ForceDirectedGraph.js';
createArticleNodeSvg()

function createArticleNodeSvg() {

  var nodes = [
    { id: 'Core Findings' },
    { id: 'Methods' },     
    { id: 'Research Context' },
    { id: 'Knowledge Domain' },
    { id: 'Manuscript' },
  ];

  var links = [
    // initialize nodes in the force directed graph
    { source: 'Core Findings', target: 'Core Findings' },
    { source: 'Methods', target: 'Core Findings' },
    { source: 'Research Context', target: 'Core Findings' },
    { source: 'Knowledge Domain', target: 'Core Findings' },
    { source: 'Manuscript', target: 'Core Findings' },
  ];

  
  var width = 800,
    height = 400;

  const graph = new ForceDirectedGraph(
    nodes,
    links,
    width,
    height,
    mouseover,
    mouseout,
    clicked
  );
  const svg = graph.svg;

  let i = 0;
  let j = 0;
  let k = 0;
  let l = 0;

  const node = graph.node;
  node.attr('id', () => `node${++i}`);
  const link = graph.link;
  link.attr('id', () => `label${++j}`);

  var keys = [
    'Core Findings',
    'Knowledge Domain',
    'Methods',
    'Manuscript',
    'Research Context',
  ];
  var color = d3
    .scaleOrdinal()
    .domain(keys)
    .range(['Red', 'Blue', 'Purple', 'Green', 'Yellow']);

  var size = 30;

  svg
    .selectAll('legend')
    .data(keys)
    .enter()
    .append("circle")
      .attr("cx", -360)
      .attr("cy", function(d,i){ return -96 + i*30.9}) 
      .attr("r", 9)
      .style("fill", function(d){ return color(d)})
      .attr('id', () => `lcircle${++k}`)
      .attr('opacity', 1);

  svg
    .selectAll('label')
    .data(keys)
    .enter()
    .append('text')
    .attr('x', -380 + size * 1.5)
    .attr('y', function (d, i) {
      return -129 + i * (size + 1) + size / 1;
    })
    .attr('id', () => `key${++l}`)
    .attr('opacity', 1)
    .style('fill', function (d) {
      return color(d);
    })
    .text(function (d) {
      return d;
    })
    .attr('text-anchor', 'left')
    .style('alignment-baseline', 'middle')
    .attr('dy', '.30em')
    .style('font-size', '13px')
    .style('fill', '#000000');

  var articleTitle = ['Title: Analysis of Dijkstra’s Algorithm and A* Algorithm in Shortest Path Problem'];
  var authorName = ['Authors: Dian Rachmawati and Lysander Gustin'];
  var publicationDate = ['Date of Publication: 2020'];

  svg
    .selectAll('Article Title')
    .data(articleTitle)
    .enter()
    .append('text')
    .attr('y', function (d, i) {
      return -204 + i * (size + 5) + size / 2;
    })
    .style('fill', '#000000')
    .text(function (d) {
      return d;
    })
    .attr('text-anchor', 'middle')
    .style('alignment-baseline', 'middle')
    .attr('dy', '.50em')
    .style('font-size', '18px')
    .attr('id', 'ArticleTitle')
    .attr('opacity', 1)
    .style('font', 'sans-serif');

  svg
    .selectAll('Author Name')
    .data(authorName)
    .enter()
    .append('text')
    .attr('y', function (d, i) {
      return -179 + i * (size + 5) + size / 2;
    })
    .style('fill', '#000000')
    .text(function (d) {
      return d;
    })
    .attr('text-anchor', 'middle')
    .style('alignment-baseline', 'middle')
    .attr('dy', '.50em')
    .attr('id', 'AuthorName')
    .attr('opacity', 1)
    .style('font-size', '11px');

  svg
    .selectAll('Date of Publication')
    .data(publicationDate)
    .enter()
    .append('text')
    .attr('y', function (d, i) {
      return -157+ i * (size + 5) + size / 2;
    })
    .style('fill', '#000000')
    .text(function (d) {
      return d;
    })
    .attr('text-anchor', 'middle')
    .style('alignment-baseline', 'middle')
    .attr('dy', '.25em')
    .attr('id', 'PubDate')
    .attr('opacity', 1)
    .style('font-size', '9px');

  node.append("title").text(function (d) {
      return d.id;
  });

  resize(); // Call resize
  d3.select(window).on('resize', resize); // Call resize with every window update

  d3.select('#node1').select('circle').attr('r', 30); // set core findings node to a bigger size than remaining nodes 

  /*function mouseover(event) {
    // this function deals with mouseover a node event
    d3.select(event.target).transition().duration(550).attr('r', 30);
  }

  function mouseout(event) {
    // this function deals with mouseaway or mouseout event on a node
    d3.select(event.target)
      .transition() // Make specific node reappear
      .duration(750)
      .attr('r', 20);
  }
  */


  // node content variables (names correspond to specific node)
  let knowledgeDomainText = 'This is Knowledge Domain';
  let methodsText = 'This is Methods';
  let methodsArticle = "In this implementation, we will use 2 examples from the University of Sumatera Utara at Jl. Universitas No. 9-A (starting point) to Wisma Benteng Restaurant at Jl. Kapt. Maulana Lubis No. 6 (1st destination point) and from the University of Sumatera Utara at Jl. Universitas No. 9-A (starting point) to the State University of Medan at Jl. William Iskandar Ps. V (2nd destination point). Between the starting point and destination point, we manually generate plenty of points (nodes), which is an intersection between 2 or more roads and find the distance between them (edges). After that, we apply the data to Dijkstras Algorithm, A* algorithm, and make a comparison between the two algorithms based on the running time, the number of loops with the number of points as the factor.";
  let manuscriptText = "1: Kairanbay M, and Mat Jani H 2013 A Review And Evaluations Of Shortest Path Algorithms. Int. J. of Sci. & Tech.Res.2 6 99. 2: Sharma P, and Khurana N 2013 Study of Optimal Path Finding Techniques. Int. J. of Adv.in Tech.4 2, 124. 3: Talan K, and Bamnote G R 2015 Shortest Path Finding Using a Star Algorithm and Minimum Weight Node First Principle. Int. J. of Innovative Res. in Computer and Communication Engineering 3 2 1258 4: Hart E, Nilsson N J and Raphael, B 1968 A Formal Basis for the Heuristic Determination of Minimum Cost Paths Systems Science and Cybernetics 4 2 100-107. 5: Pratiwi A B, Pratama A, Sadiyah I and Suprajitno H 2019 Vehicle routing problem with time windows using natural inspired algorithms Department of Mathematics, Faculty of Science and Technology, Universitas Airlangga, Surabaya, Indonesia 6: Wahyuningsih D and Syahreza E 2018 Shortest Path Search Futsal Field Location With Dijkstra Algorithm. Indonesian J. of Computing and Cybernetics Systems 12 2 161-170. 7: Goyal A et al 2 14 Path Finding: A* Or Dijkstras? Int.J. of Innovative Trends in Engineering, 2 1, 1-15. 8: Windarto, S. W. Indratno, N. Nuraini, and E. Soewono 2019 A comparison of binary and continuous genetic algorithm in parameter estimation of a logistic growth model AIP Conf. Proc.1587 pp. 139-142 doi: 10.1063/1.4866550.";
  let manuscriptLink = "https://iopscience.iop.org/article/10.1088/1742-6596/1566/1/012061/pdf";
  let researchContextText = 'This is Research Context';
  let researchContextArticle = "The shortest path problem has been studied for many years. The shortest path problem is the problem that finds the minimum distance or pathway between nodes or vertices in a graph (for this case, road network). A graph is an abstract mathematical object, which contains sets of vertices and edges [1]. Regarding to journal from Parveen Sharma and Neha Khurana, the shortest path problem is defined as that of finding a minimum-length (cost) path between a given pair of nodes [2] and according to Karishma Talan and G. R. Bamnote, shortest path problem is the problem of looking for the quickest way to get route from one location to another [3]. Expressed more formally, in a graph in which vertices are joined by edges and in which each edge has a value or cost, it is a problem of finding the lowestcost path between two vertices [4]."
  let coreFindingsText = 'This is Core Findings';
  let coreFindingsArticle = "The use of Dijkstra’s algorithm and A* algorithm in the shortest path is essential will give the same output in no time when being used on the town or regional scale maps. But on a large scale map, A* will provide the solution faster than Dijkstra. A* scan the area only in the direction of destination because of the heuristic value that counted in the calculation, whereas Dijkstra searches by expanding out equally in every direction and usually ends up exploring a much larger area before the target is found resulting making it slower than A*. This can be proven by the loop count of Dijkstra and A*, the more points (nodes) the higher the difference between the loop count nor the time.";
  
  
  //var methodsTextSummarized = getSummary(methodsArticle)
  //var coreFindingsSummarized = getSummary(coreFindingsArticle);

  // Break article into lines
  var coreFindingsParagraph = stringToLines(coreFindingsArticle);
  var methodsParagraph = stringToLines(methodsArticle);
  var manuscriptParagraph = stringToLines(manuscriptText);
  var researchContextParagraph = stringToLines(researchContextArticle)
 // var researchContextParagraph = stringToLines();
  
  // append node content to appropriate node
  
  d3.select('#node1')
    .append('text')
    .attr('text-anchor', 'middle')
    .style('font-size', '10px')
    .attr('fill', 'black')
    .html("<tspan x='0' dy='-10em'>" + coreFindingsText + "</tspan>"
    + "<tspan x='0' dy='4em'>" + coreFindingsParagraph[0] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + coreFindingsParagraph[1] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + coreFindingsParagraph[2] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + coreFindingsParagraph[3] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + coreFindingsParagraph[4] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + coreFindingsParagraph[5] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + coreFindingsParagraph[6] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + coreFindingsParagraph[7] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + coreFindingsParagraph[8] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + coreFindingsParagraph[9] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + coreFindingsParagraph[10] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + coreFindingsParagraph[11] + "</tspan>")
    .attr('id', 'coreFindingsText')
    .attr('opacity', 0); // appends text to Core Findings node
  

  d3.select('#node4')
    .append('text')
    .attr('text-anchor', 'middle')
    .style('font-size', '10px')
    .attr('fill', 'black')
    .attr('id', 'knowledgeDomainText')
    .attr('opacity', 0); // appends text to Knowledge Domain node
 
  d3.select('#node5')
    .append('text')
    .attr('text-anchor', 'middle')
    .style('font-size', '8px')
    .attr('fill', 'black')
    .html("<tspan x='0' dy='-16em'>This is Manuscript</tspan>"
    + "<tspan x='0' dy='4em'>" + manuscriptParagraph[0] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + manuscriptParagraph[1] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + manuscriptParagraph[2] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + manuscriptParagraph[3] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + manuscriptParagraph[4] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + manuscriptParagraph[5] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + manuscriptParagraph[6] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + manuscriptParagraph[7] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + manuscriptParagraph[8] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + manuscriptParagraph[9] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + manuscriptParagraph[10] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + manuscriptParagraph[11] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + manuscriptParagraph[12] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + manuscriptParagraph[13] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + manuscriptParagraph[14] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + manuscriptParagraph[15] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + manuscriptParagraph[16] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + manuscriptParagraph[17] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + manuscriptParagraph[18] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + manuscriptParagraph[19] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + manuscriptParagraph[20] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + manuscriptParagraph[21] + "</tspan>"
    + "<tspan x='0' dy='1.5em'> </tspan>"
    + "<tspan x='0' dy='1.5em'>" + manuscriptLink + "</tspan>")
    .attr('id', 'manuscriptText')
    .attr('opacity', 0); // appends text to Manuscript node
 
  d3.select('#node2')
    .append('text')
    .attr('text-anchor', 'middle')
    .style('font-size', '10px')
    .attr('fill', 'black')
    .html("<tspan x='0' dy='-12em'>" + methodsText + "</tspan>"
    + "<tspan x='0' dy='4em'>" + methodsParagraph[0] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + methodsParagraph[1] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + methodsParagraph[2] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + methodsParagraph[3] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + methodsParagraph[4] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + methodsParagraph[5] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + methodsParagraph[6] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + methodsParagraph[7] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + methodsParagraph[8] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + methodsParagraph[9] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + methodsParagraph[10] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + methodsParagraph[11] + "</tspan>")  
    .attr('id', 'methodsText')
    .attr('opacity', 0); // appends text to Methods node
  
  d3.select('#node3')
    .append('text')
    .attr('text-anchor', 'middle')
    .style('font-size', '10px')
    .attr('fill', 'black')
    .html("<tspan x='0' dy='-12em'>" + researchContextText + "</tspan>"
    + "<tspan x='0' dy='4em'>" + researchContextParagraph[0] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + researchContextParagraph[1] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + researchContextParagraph[2] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + researchContextParagraph[3] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + researchContextParagraph[4] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + researchContextParagraph[5] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + researchContextParagraph[6] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + researchContextParagraph[7] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + researchContextParagraph[8] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + researchContextParagraph[9] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + researchContextParagraph[10] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + researchContextParagraph[11] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + researchContextParagraph[12] + "</tspan>"
    + "<tspan x='0' dy='1.5em'>" + researchContextParagraph[13] + "</tspan>")
    .attr('id', 'rContextText')
    .attr('opacity', 0); // appends text to Research Context node
  
    function setNodeColors(){
      d3.select('#node5').attr('fill', 'green');
      d3.select('#node2').attr('fill', 'purple');
      d3.select('#node1').attr('fill', 'red');
      d3.select('#node3').attr('fill', 'yellow');
      d3.select('#node4').attr('fill', 'blue');
      
    }
    setNodeColors();
  

  function createBackButton() {
    let btn = document.createElement('button');
    btn.innerHTML = 'Back';
    btn.className = 'btn-back';
    btn.onclick = backHandler;
    document.body.appendChild(btn);
  }

  function backHandler(event) {
    svg.remove();
    this.remove();
    createArticlesNetworkSvg();
  }

  function clicked(event) {
    // this function deals with a click event on a node

    if (event.defaultPrevented) return; // node was dragged, not clicked

    // Everything disappears on-click
    d3.select(this).raise();
    d3.select('#ArticleTitle').transition().attr('opacity', 0);
    d3.select('#PubDate').transition().attr('opacity', 0);
    d3.select('#AuthorName').transition().attr('opacity', 0);
    d3.select('#lcircle1').transition().attr('opacity', 0);
    d3.select('#lcircle2').transition().attr('opacity', 0);
    d3.select('#lcircle3').transition().attr('opacity', 0);
    d3.select('#lcircle4').transition().attr('opacity', 0);
    d3.select('#lcircle5').transition().attr('opacity', 0);
    d3.select('#key1').transition().attr('opacity', 0);
    d3.select('#key2').transition().attr('opacity', 0);
    d3.select('#key3').transition().attr('opacity', 0);
    d3.select('#key4').transition().attr('opacity', 0);
    d3.select('#key5').transition().attr('opacity', 0);

    // Clicked node reappears, increases radius

    //makes decision based on which node is clicked to show appropriate text
    switch (event.target.__data__.id) {
      case 'Core Findings':
        d3.select(this).select('circle').transition().attr('r', 250);
        d3.select('#coreFindingsText').transition().attr('opacity', 1); // show Core Findings text
        d3.select('#node1').transition().attr('fill', '#ADD8E6');
        break;
      case 'Knowledge Domain':
        if(window.confirm("Continue and Explore Knowledge Domain?"))
          window.location.href = "index.html";
        break;
      case 'Manuscript':
        d3.select(this).select('circle').transition().attr('r', 250);
        d3.select('#manuscriptText').transition().attr('opacity', 1); // show Manuscript text
        d3.select('#node5').transition().attr('fill', '#ADD8E6');
        break;
      case 'Methods':
        d3.select(this).select('circle').transition().attr('r', 250);
        d3.select('#methodsText').transition().attr('opacity', 1); // show Methods text
        d3.select('#node2').transition().attr('fill', '#ADD8E6');
        break;
      case 'Research Context':
        d3.select(this).select('circle').transition().attr('r', 250);
        d3.select('#rContextText').transition().attr('opacity', 1); // show Research Context text
        d3.select('#node3').transition().attr('fill', '#ADD8E6');
        break;
      default:
        break;
    }
  }

  var linear = d3
    .scaleLinear()
    .domain([0, 10])
    .range(['rgb(46, 73, 123)', 'rgb(71, 187, 94)']);

  svg
    .append('g')
    .attr('class', 'legendLinear')
    .attr('transform', 'translate(20,20)');

  var legendLinear = d3
    .legendColor()
    .shapeWidth(30)
    .cells([1, 2, 3, 6, 8])
    .orient('horizontal')
    .scale(linear);

  svg.select('.legendLinear').call(legendLinear);

  function mouseover() {
    // this function deals with mouseover a node event
    if(event.target.__data__.id == 'Core Findings'){
      d3.select(this).select('circle').transition().duration(550).attr('r', 40);
    }else{
      d3.select(this).select('circle').transition().duration(550).attr('r', 30); 
    }
    //d3.select('body').append('p').text('Hello');
  }

  function mouseout(event) {
    // this function deals with mouseaway or mouseout event on a node

    d3.select('#ArticleTitle').transition().attr('opacity', 1);
    d3.select('#PubDate').transition().attr('opacity', 1);
    d3.select('#AuthorName').transition().attr('opacity', 1);
    d3.select('#lcircle1').transition().attr('opacity', 1);
    d3.select('#lcircle2').transition().attr('opacity', 1);
    d3.select('#lcircle3').transition().attr('opacity', 1);
    d3.select('#lcircle4').transition().attr('opacity', 1);
    d3.select('#lcircle5').transition().attr('opacity', 1);
    d3.select('#key1').transition().attr('opacity', 1);
    d3.select('#key2').transition().attr('opacity', 1);
    d3.select('#key3').transition().attr('opacity', 1);
    d3.select('#key4').transition().attr('opacity', 1);
    d3.select('#key5').transition().attr('opacity', 1);

    // makes decision based on which node is clicked to hide appropriate text
    switch (event.target.__data__.id) {
      case 'Core Findings':
        d3.select('#coreFindingsText').transition().attr('opacity', 0); // hide Core Findings text
        d3.select('#node1').transition().duration(550).attr('fill', 'Red');
        d3.select(this).select('circle').transition().duration(550).attr('r', 30);
        break;
      case 'Knowledge Domain':
        d3.select('#knowledgeDomainText').transition().attr('opacity', 0); // hide Knowledge Domain text
        d3.select(this).select('circle').transition().duration(550).attr('r', 20);
        break;
      case 'Manuscript':
        d3.select('#manuscriptText').transition().attr('opacity', 0); // hide Manuscript text
        d3.select('#node5').transition().duration(550).attr('fill', 'Green');
        d3.select(this).select('circle').transition().duration(550).attr('r', 20);
        break;
      case 'Methods':
        d3.select('#methodsText').transition().attr('opacity', 0); // hide Methods text
        d3.select('#node2').transition().duration(550).attr('fill', 'Purple');
        d3.select(this).select('circle').transition().duration(550).attr('r', 20);
        break;
      case 'Research Context':
        d3.select('#rContextText').transition().attr('opacity', 0); // hide Research Context text
        d3.select('#node3').transition().duration(550).attr('fill', 'Yellow');
        d3.select(this).select('circle').transition().duration(550).attr('r', 20);
        break;
      default:
        break;
    }
  }
  
  function resize() {
    // Resizes d3 graph position to fit window
    (width = window.innerWidth), (height = window.innerHeight);
    svg.attr('width', width).attr('height', height);
  }
  
  function stringToLines(str) {
    // Breaks article string into lines, edit {0,8} parameter to specify word count
    var lines = str.match(/\b[\w']+(?:[^\w\n]+[\w']+){0,10}\b/g);
    return lines;
  }
  

  ////////////////////////////////////////CODE BREAKER//////////////////////////////////////////////////

  

  /*
  function returnLines(arr)
  {
    for (let x = 0; x < arr.size; x++)
    {
      let line = "<tspan x='0' dy='1.5em'>" + arr[x] + "</tspan>"
      return line;
    }
  }
  
  
}

async function textSummarizer(text){

  const { Configuration, OpenAIApi } = require("openai");


  let OPENAI_API_KEY = "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";

  const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
  });

const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "text-davinci-002",
  prompt: text,
  temperature: 0.7,
  max_tokens: 100, 
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
  });

  return JSON.stringify(response.data.choices[0].text);
}

*/

////////////////////////////////////////END CODE BREAKER//////////////////////////////////////////////////
}
