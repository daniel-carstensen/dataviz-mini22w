export const ColorLegend = ({
    colorScale,
    tickSpacing = 20,
    tickSize = 10,
    tickTextOffset = 20,
    onHover, //onHover is a stand-in for setHoveredValue
    hoveredValue,
    fadeOpacity
  }) =>
  //we access the colorScale parameter, and get the values and indeces of the colors to write out the names 
    colorScale.domain().map((domainValue, i) => (
      <g
        className="tick"
        //this lets us place the colors one after another depending on their position in the color list
        transform={`translate(0,${i * tickSpacing})`}
        //if the mouse hovers over a value, that is now the hoveredValue
        //note where we're getting hoveredvalue from here.
        onMouseEnter={() => {
          onHover(domainValue);
        }}
        onMouseOut={() => {
          onHover(null);//if Mouse is not hovering over one of our labels, there should be no label with onHover
        }}
        //here, if we don't put in the conditional, if we just say domainValue !== hoveredValue, 
        //we throw an error if there's no hoveredValue. If there is no hoveredvalue, default is one.
        //if it does exist, we check and give it the fadeOpacity if it isn't the hoveredValue
        opacity={hoveredValue && domainValue !== hoveredValue ? fadeOpacity : 1}
      >
        //draw the stuff
        <circle fill={colorScale(domainValue)} r={tickSize} />
        {/* draws circle */}
        <text x={tickTextOffset} dy=".32em">
          {/* writes the name of the color */}
          {domainValue}
        </text>
      </g>
    ));
  
  