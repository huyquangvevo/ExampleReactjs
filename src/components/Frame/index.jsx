import React,{Component} from 'react';
import * as d3 from 'd3';
import "./style.css";

class Frame extends Component {

    constructor(props){
        super(props);
        this.state = { 
            locations : [],
            shape : this.props.shape,
        };
    }

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
                });
        });
    }


    scaleCircle = () =>{
        d3.selectAll("circle").transition()
            .duration(7500)
            .delay(function(d, i) { return i * 10; })
            .attr("r", function() { return Math.sqrt(80); });
    }

    scaleRect = () =>{
        d3.selectAll("rect").transition()
            .duration(7500)
            .delay(function(d,i){return i*10;})
            .attr("width",function(){return Math.sqrt(400)})
            .attr("height",function(){return Math.sqrt(400)})
            .attr("rx",function(){return Math.sqrt(25)})
            .attr("ry",function(){return Math.sqrt(25)});
    }
 
    renderCircle = () => {
        d3.selectAll("rect").remove();
        d3.select("svg").append("g")
            .selectAll("circle")
            .data(this.state.locations)
            .enter().append("circle")
                .attr("r",Math.random())
                .attr("cx",function(d){return d.x})
                .attr("cy",function(d){return d.y});
        this.scaleCircle();
    }

    renderRect = () =>{
        d3.selectAll("circle").remove();
        d3.select("svg").append("g")
            .selectAll("rect")
            .data(this.state.locations)
            .enter().append("rect")
                .attr("x",function(d){return d.x})
                .attr("y",function(d){return d.y})
        this.scaleRect();
    }

    addPoints = shape => {
        if(shape==='circle'){
           this.renderCircle();
        } else {
           this.renderRect();
        }
    }

    render() {
        this.addPoints(this.props.shape);
        return ( 
            <div className="col col-lg-2">
                <svg width={1200} height = {650} viewBox = "0 0 800 450" color="blue">
                </svg>
            </div>
            
         );
    }
}
 
export default Frame;
