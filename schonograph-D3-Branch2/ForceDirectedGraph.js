export default class ForceDirectedGraph {
  
  constructor(nodes, links, width, height, mouseover, mouseout, clicked) {
    this.simulation = this.buildForceSimulation(nodes, links);
    this.svg = this.buildSvg(width, height);
    this.link = this.buildLink(links);
    this.node = this.buildNode(nodes, mouseover, mouseout, clicked);

    this.node.append('circle').attr('r', 20);
    this.simulation.nodes(nodes).on('tick', this.ticked.bind(this));
    this.simulation.force('link').links(links);
  }

  buildForceSimulation(nodes, links) {
    const forceNode = d3.forceManyBody();
    const forceLink = d3.forceLink(links).id(function (d) {
      return d.id;
    });
    return d3
      .forceSimulation(nodes)
      .force('link', forceLink)
      .force('charge', forceNode)
      .force('center', d3.forceCenter())
      .force('collision', d3.forceCollide().radius(50))
      .on('tick', this.ticked.bind(this));
  }

  buildSvg(width, height) {
    return d3
      .select('body')
      .append('svg')
      .style('transform-origin', '50% 50% 0')
      .attr('width', width)
      .attr('height', height)
      .attr('viewBox', [-width / 2, -height / 2, width, height])
      .attr('style', 'max-width: 100%; height: auto; height: intrinsic;')
      .call(
        d3
          .zoom()
          .on('zoom', (event) =>
            this.svg.style('transform', `scale(${event.transform.k})`)
          )
      )
      .on('mousedown.zoom', null);
  }
  buildLink(links) {
    return this.svg
      .append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(links)
      .enter()
      .append('line')
      .attr('stroke', '#fff')
      .attr('stroke-width', 1)
      .attr('class', 'link');
  }

  buildNode(nodes, mouseover, mouseout, clicked) {
    return this.svg
      .append('g')
      .attr('class', 'nodes')
      .selectAll('g')
      .data(nodes)
      .enter()
      .append('g')
      .attr('class', 'node')
      .call(this.drag().bind(this))
      .on('mouseover', mouseover)
      .on('mouseout', mouseout)
      .on('click', clicked);
  }

  addLabels() {
    const labels = this.node
      .append('text')
      .text(function (d) {
        return d.id;
      })
      .attr('x', 30)
      .attr('dy', '.35em')
      .style('font-size', '20px');

    this.node.append('title').text(function (d) {
      return d.id;
    });

    return labels;
  }

  ticked() {
    this.link
      .attr('x1', (d) => d.source.x)
      .attr('y1', (d) => d.source.y)
      .attr('x2', (d) => d.target.x)
      .attr('y2', (d) => d.target.y);

    this.node.attr('transform', (d) => `translate(${d.x},${d.y})`);
  }

  drag() {
    const dragstarted = (event) => {
      if (!event.active) this.simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    };

    const dragged = (event) => {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    };

    const dragended = (event) => {
      if (!event.active) this.simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    };

    return d3
      .drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended);
  }
}


