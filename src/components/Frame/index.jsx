import React,{Component} from 'react';
import * as d3 from 'd3';
import "./style.css";

class Frame extends Component {
    state = { 
        locations : []
    };
    componentDidMount(){
        d3.json("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson").then(function(data){
            // Draw the map
            d3.select("svg").append("g")
                .selectAll("path")
                .data(data.features)
                .enter().append("path")
                    .attr("fill", "#69b3a2")
                    .attr("d", d3.geoPath()
                        .projection(
                            d3.geoMercator()
                                .scale(100)
                                .translate([800/2,450/2])
                        )
                    )
                    .style("stroke", "#fff");
        })
        .then(()=>{
            fetch('https://my-json-server.typicode.com/huyquangvevo/FakeJSON/locations')
                .then(res => {
                    return res.json();
                })
                .then((result) => {
                    this.setState({
                        locations : result
                    });
                
                })
                .then( () => {
                    d3.select("svg").append("g")
                    .selectAll("circle")
                    .data(this.state.locations)
                    .enter().append("circle").attr("r",Math.random())
                    .attr("cx",function(d){return d.x})
                    .attr("cy",function(d){return d.y})
                    // .attr("stroke","black").attr("strokeWidth",3)
                    // .attr("fill","red");
                })
                .then(()=>{
                    this.handleScale();
                });
        });
    }

    handleScale = () =>{
        d3.selectAll("circle").transition()
            .duration(7500)
            .delay(function(d, i) { return i * 10; })
            .attr("r", function(d) { return Math.sqrt(80); });
    }

    render() {
        return ( 
            <div id="frame-container">
                <svg width={1200} height = {450} viewBox = "0 0 800 450" color="blue">
                </svg>
            </div>
            
         );
    }
}
 
export default Frame;
