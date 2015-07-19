Template.layout.onRendered(function () {
  var w = 1440,
      h = 820;

  var svg = d3.select("body").append("svg:svg")
      .attr("width", w)
      .attr("height", h);

  var data = d3.range(1000).map(function(index){
    if(index == 0) var title = "Blog"
    return {
      x: w * Math.random(),
      y: h * Math.random(),
      dx: Math.random() - .5,
      dy: Math.random() - .5,
      id:index,
      title: title
    };
  });

  var circle = svg.selectAll("circle")
      .data(data)
    .enter().append("svg:circle")
      .attr("r", function(d){
        if (d.id == 0) return 100;
        return 2.5;
      })
      .attr("fill", function(d){
        if(d.id == 0) return "blue"
        return "white";
      })
      .attr("id", function(d){
        if(d.id == 0) return "blogCircle";
      })
      .on('click', function(d){
        if(d.id == 0){
          return blogtext;
        }
        // window.location.href = "blog";
      })
  // var text = svg.append("svg:text")
  //     .attr("x", 20)
  //     .attr("y", 20);

  var start = Date.now(),
      frames = 0;

  var blogtext = svg.append("svg:text")
    .attr("id", "blog-title-text")
    .attr("x", 40)
    .attr("y", 40)
    .attr("fill", "white")
    .text("Blog");

  // svg.selectAll("text")
  // .data(data, function(d){ return d.id; })
  //   .enter()
  //     .append("text")
  //       .text(function(d){ return d.title; })
  //       .attr("text-anchor", "middle")
  //       .attr("font-size", "12")
  //       .classed("unselectable", true);

  d3.timer(function() {

    // Update the FPS meter.
    // var now = Date.now(), duration = now - start;
    // text.text(~~(++frames * 1000 / duration));
    // if (duration >= 1000) frames = 0, start = now;

    // Update the circle positions.
    circle
        .attr("cx", function(d) { d.x += d.dx; if (d.x > w) d.x -= w; else if (d.x < 0) d.x += w; return d.x; })
        .attr("cy", function(d) { d.y += d.dy; if (d.y > h) d.y -= h; else if (d.y < 0) d.y += h; return d.y; });
  });
  var blogCircle = $("#blogCircle");
  blogtext
    .attr("cx", blogCircle[0].cx.baseVal.value)
    .attr("cy", blogCircle[0].cy.baseVal.value);
  // var text = $("#blog-title-text");
  // text.x =
  // console.log("asdf");
  // $("#blog-title-text").html()

});
