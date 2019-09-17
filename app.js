const svgWidth = 800;
const svgHeight = 400;

const svg = d3
        .select('#chart')
        .append('svg')
        .attr('width', svgWidth)
        .attr('height', svgHeight)

diagonalLineWidth = 5;

const diagonalLine = svg
        .append('line')
        .attr('x1', 100)
        .attr('x2', 700)
        .attr('y1', 100)
        .attr('y2', 300)
        .attr('stroke', 'black')
        .attr('stroke-width', diagonalLineWidth)
