(function() {

    var i = 0;

    var root = {
        x0: 0,
        y0: 0,
        name: '7/10',
        children: [
            { 
                name: '1/5',
                children: [
                    {
                        name: '2/3',
                        children: [
                            {
                                name: '0/1',
                            },
                            {
                                name: '1/2'
                            }
                        ]
                    },
                    {
                        name: '1/2',
                        children: []
                    }
                ]
            },
            {
                name: '2/4',
                children: [
                    {
                        name: '1/2'
                    },
                    {
                        name: '1/1',
                        children: [
                            {
                                name: '0/0'
                            }
                        ]
                    },
                    {
                        name: '0/1'
                    }
                ]
            },
            {
                name: '0/1',
                children: []
            }
        ],
    };

    $(document).ready(function() {

        var h = d3.hierarchy(root);

        var layout = d3.tree().nodeSize([100, 100])(h);

        var x0 = Math.Inf;
        var x1 = -x0;

        layout.each(function(d) {
            if (d.x > x1) x1 = d.x;
            if (d.y < x0) x0 = d.y;
        });

        var tree = d3.select('#tree-visual')
            .append('svg')
            .attr('width', '700')
            .attr('height', '400');

        var g = tree.append('g')
            .attr('transform', 'translate(350, 40)');

        const link = g.append("g")
              .attr("fill", "none")
              .attr("stroke", "#555")
              .attr("stroke-opacity", 0.4)
              .attr("stroke-width", 1.5)
              .selectAll("path")
              .data(layout.links())
              .enter().append("path")
              .attr("d", d3.linkVertical()
                    .x(function(d) { return d.x; })
                    .y(function(d) { return d.y; }));

        var node = g.append("g")
              .attr("stroke-linejoin", "round")
              .attr("stroke-width", 3)
              .selectAll("g")
              .data(layout.descendants().reverse())
              .enter().append("g")
              .attr("transform", function(d) { return 'translate(' + d.x + ',' + d.y + ')'; });
        
        node.append('circle')
            .attr('fill', function(d) { 
                return d.depth % 2 ? '#fff' : '#000'; 
            })
            .attr('stroke', '#aaa')
            .attr('stroke-width', 1)
            .attr('r', 8);

        node.append('text')
            .attr('dy', '1.5em')
            .attr('font-size', '0.4em')
            .attr('x', function(d) { return d.children ? -6 : 6; })
            .attr('text-anchor', function(d) { return d.depth % 2 ? 'start' : 'end'; })
            .text(function(d) { return d.data.name; })
            .clone(true).lower()
            .attr('stroke', 'white');

        return tree.node();
    });

})();
