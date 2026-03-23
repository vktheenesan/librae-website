'use client';
import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

export default function MerkleVisualizer() {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const el = svgRef.current;
    el.innerHTML = '';
    const W = el.clientWidth || 800;
    const H = 420;

    const svg = d3.select(el)
      .attr('viewBox', `0 0 ${W} ${H}`)
      .attr('preserveAspectRatio', 'xMidYMid meet');

    const defs = svg.append('defs');
    const glow = defs.append('filter').attr('id', 'glow');
    glow.append('feGaussianBlur').attr('stdDeviation', 3).attr('result', 'coloredBlur');
    const feMerge = glow.append('feMerge');
    feMerge.append('feMergeNode').attr('in', 'coloredBlur');
    feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

    // Tree data
    const nodes = [
      { id: 'root', label: 'Merkle Root', x: W/2, y: 40, type: 'root', hash: 'a3f9..2b7c', level: 0 },
      { id: 'hash-L', label: 'Hash L', x: W*0.3, y: 140, type: 'branch', hash: 'f2d4..78ab', level: 1 },
      { id: 'hash-R', label: 'Hash R', x: W*0.7, y: 140, type: 'branch', hash: '9c1e..34fg', level: 1 },
      { id: 'leaf1', label: 'Drone KML', x: W*0.15, y: 260, type: 'leaf', hash: 'b71a..cc23', level: 2 },
      { id: 'leaf2', label: 'Land Deed', x: W*0.35, y: 260, type: 'leaf', hash: 'e45d..9910', level: 2 },
      { id: 'leaf3', label: 'SAR Image', x: W*0.55, y: 260, type: 'leaf', hash: '2af6..5577', level: 2 },
      { id: 'leaf4', label: 'Soil Sensor', x: W*0.75, y: 260, type: 'leaf', hash: 'd9b2..3381', level: 2 },
      { id: 'raw1', label: 'MPOB Plot 1', x: W*0.1, y: 370, type: 'raw', hash: 'SHA-256', level: 3 },
      { id: 'raw2', label: 'Farmer GPS', x: W*0.25, y: 370, type: 'raw', hash: 'SHA-256', level: 3 },
      { id: 'raw3', label: 'GeoJSON', x: W*0.42, y: 370, type: 'raw', hash: 'SHA-256', level: 3 },
      { id: 'raw4', label: 'PDF Deed', x: W*0.57, y: 370, type: 'raw', hash: 'SHA-256', level: 3 },
      { id: 'raw5', label: 'Sentinel-2', x: W*0.67, y: 370, type: 'raw', hash: 'SHA-256', level: 3 },
      { id: 'raw6', label: 'LoRa Data', x: W*0.79, y: 370, type: 'raw', hash: 'SHA-256', level: 3 },
    ];

    const edges = [
      ['root','hash-L'],['root','hash-R'],
      ['hash-L','leaf1'],['hash-L','leaf2'],
      ['hash-R','leaf3'],['hash-R','leaf4'],
      ['leaf1','raw1'],['leaf1','raw2'],
      ['leaf2','raw3'],['leaf2','raw4'],
      ['leaf3','raw5'],['leaf4','raw6'],
    ];

    const nodeMap = {};
    nodes.forEach(n => nodeMap[n.id] = n);

    // Draw edges
    const edgeGroup = svg.append('g').attr('class','edges');
    edges.forEach(([from, to]) => {
      const a = nodeMap[from], b = nodeMap[to];
      edgeGroup.append('line')
        .attr('x1', a.x).attr('y1', a.y)
        .attr('x2', b.x).attr('y2', b.y)
        .attr('stroke', '#D4AF37')
        .attr('stroke-opacity', 0.25)
        .attr('stroke-width', 1.5)
        .attr('stroke-dasharray', '4 4');
    });

    // Draw nodes
    const nodeGroup = svg.append('g').attr('class','nodes');
    nodes.forEach(node => {
      const g = nodeGroup.append('g')
        .attr('transform', `translate(${node.x},${node.y})`)
        .style('cursor','pointer');

      const color = node.type === 'root' ? '#D4AF37'
        : node.type === 'branch' ? '#2E8B57'
        : node.type === 'leaf' ? '#1466CC'
        : '#607090';

      const r = node.type === 'root' ? 28 : node.type === 'branch' ? 22 : node.type === 'leaf' ? 18 : 14;

      g.append('circle')
        .attr('r', r)
        .attr('fill', `${color}1A`)
        .attr('stroke', color)
        .attr('stroke-width', node.type === 'root' ? 2.5 : 1.5)
        .attr('filter', node.type !== 'raw' ? 'url(#glow)' : null);

      g.append('text')
        .attr('y', -r - 8)
        .attr('text-anchor','middle')
        .attr('fill', color)
        .attr('font-size', node.type === 'root' ? 11 : 9)
        .attr('font-family','Outfit,sans-serif')
        .attr('font-weight',700)
        .text(node.label);

      g.append('text')
        .attr('y', 4)
        .attr('text-anchor','middle')
        .attr('fill', '#607090')
        .attr('font-size', 7.5)
        .attr('font-family','Space Mono,monospace')
        .text(node.hash);

      // Hover
      g.on('mouseenter', function() {
        d3.select(this).select('circle')
          .transition().duration(200)
          .attr('fill', `${color}40`)
          .attr('r', r * 1.2);
      }).on('mouseleave', function() {
        d3.select(this).select('circle')
          .transition().duration(200)
          .attr('fill', `${color}1A`)
          .attr('r', r);
      });
    });

    // Animate edges
    svg.selectAll('line')
      .attr('stroke-dashoffset', 100)
      .transition()
      .duration(2000)
      .delay((d,i) => i * 150)
      .attr('stroke-dashoffset', 0);

  }, []);

  return (
    <svg ref={svgRef} style={{ width:'100%', height:'420px', overflow:'visible' }} />
  );
}
