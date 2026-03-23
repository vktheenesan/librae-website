'use client';
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function D3Network() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const width = containerRef.current.clientWidth;
    const height = 400;

    // Clear previous SVG if re-rendered
    d3.select(containerRef.current).selectAll('svg').remove();

    const svg = d3.select(containerRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('background', 'rgba(0,10,26,0.3)')
      .style('border-radius', '16px')
      .style('border', '1px solid rgba(212,175,55,0.15)')
      .style('box-shadow', '0 10px 40px rgba(0,0,0,0.5)');

    // Mock Data representing estates connecting to Librae L2
    const nodes = [
      { id: 'L2', group: 0, radius: 25, label: 'Polygon L2' },
      { id: 'node1', group: 1, radius: 10, label: 'KML Data' },
      { id: 'node2', group: 1, radius: 12, label: 'GeoJSON' },
      { id: 'node3', group: 1, radius: 8, label: 'Estate Boundary' },
      { id: 'node4', group: 2, radius: 15, label: 'Drone Scan' },
      { id: 'node5', group: 2, radius: 10, label: 'IoT Sensor' },
      { id: 'node6', group: 3, radius: 14, label: 'Sentinel-2' },
      { id: 'node7', group: 3, radius: 11, label: 'Landsat-8' },
    ];

    const links = [
      { source: 'node1', target: 'L2' },
      { source: 'node2', target: 'L2' },
      { source: 'node3', target: 'L2' },
      { source: 'node4', target: 'L2' },
      { source: 'node5', target: 'node4' },
      { source: 'node6', target: 'L2' },
      { source: 'node7', target: 'L2' },
    ];

    // Glow filter
    const defs = svg.append("defs");
    const filter = defs.append("filter").attr("id", "glow");
    filter.append("feGaussianBlur").attr("stdDeviation", "3.5").attr("result", "coloredBlur");
    const feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "coloredBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    // Force simulation
    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id).distance(100))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2));

    // Links
    const link = svg.append('g')
      .attr('stroke', 'rgba(212,175,55,0.3)')
      .attr('stroke-width', 1.5)
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('class', 'network-link');

    // Nodes
    const colorScale = d3.scaleOrdinal()
      .domain([0, 1, 2, 3])
      .range(['#D4AF37', '#2E8B57', '#4A9EFF', '#7B4AFF']);

    const node = svg.append('g')
      .selectAll('circle')
      .data(nodes)
      .join('circle')
      .attr('r', d => d.radius)
      .attr('fill', d => colorScale(d.group))
      .style('filter', 'url(#glow)')
      .call(drag(simulation));

    // Labels
    const labels = svg.append('g')
      .selectAll('text')
      .data(nodes)
      .join('text')
      .text(d => d.label)
      .attr('font-size', '10px')
      .attr('font-family', 'Space Mono')
      .attr('fill', '#A0B0CC')
      .attr('dx', 15)
      .attr('dy', 4);

    // Continuous Pulse Animation for central node
    function pulse() {
      node.filter(d => d.id === 'L2')
        .transition()
        .duration(1500)
        .attr('r', 32)
        .attr('fill', '#F0D060')
        .transition()
        .duration(1500)
        .attr('r', 25)
        .attr('fill', '#D4AF37')
        .on('end', pulse); // recursive loop
    }
    pulse();

    // Data packet animations along links
    setInterval(() => {
      const activeLink = links[Math.floor(Math.random() * links.length)];
      svg.append('circle')
        .attr('r', 3)
        .attr('fill', '#fff')
        .style('filter', 'url(#glow)')
        .attr('cx', activeLink.source.x)
        .attr('cy', activeLink.source.y)
        .transition()
        .duration(1000)
        .attr('cx', activeLink.target.x)
        .attr('cy', activeLink.target.y)
        .remove();
    }, 400);

    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);

      labels
        .attr('x', d => d.x)
        .attr('y', d => d.y);
    });

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
      return d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended);
    }
  }, []);

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <p style={{ position: 'absolute', top: 15, left: 15, color: '#D4AF37', fontFamily: 'Space Mono', fontSize: '0.8rem', zIndex: 10 }}>
        [LIVE] D3.js Polygon Ingestion Feed
      </p>
      <div ref={containerRef} style={{ width: '100%' }} />
    </div>
  );
}
