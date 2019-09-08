import React,{Component} from 'react';
import * as d3 from 'd3';

class Frame extends Component {
    state = { 
        
     };

    projection  = () => {
        return d3.geoMercator()
        .scale(100)
        .translate([800/2,450/2])
    };

    
    componentDidMount(){
        var svg = d3.select("svg");

        d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then(function(data){
            // Draw the map
            svg.append("g")
                .selectAll("path")
                .data(data.features)
                .enter().append("path")
                    .attr("fill", "#69b3a2")
                    .attr("d", d3.geoPath()
                        .projection(d3.geoMercator()
                        .scale(100)
                        .translate([800/2,450/2]))
                    )
                    .style("stroke", "#fff")
        });

    }

    render() {
        return ( 
            <svg width={800} height = {450} viewBox = "0 0 800 450" color="blue">
               <g fill="white" stroke="green" strokeWidth="5">
                   <circle
                    cx = {this.projection()([8,48])[0]}
                    cy = {this.projection()([8,48])[1]}
                    r = {10}
                    fill = "#E91E63"
                   />
                    <path d={"M 10 10 H 90 V 90 H 10 L 10 10"}></path>
                </g>
            </svg>
         );
    }
}
 
export default Frame;
