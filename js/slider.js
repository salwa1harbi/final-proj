

// for slider 
// Range-Health
var slider = document.getElementById("Range-Health");
var output = document.getElementById("demo-Health");
output.innerHTML = slider.value;
console.log(slider);
slider.oninput = function() {
  output.innerHTML = this.value;
}

// Range-development
var slider1 = document.getElementById("Range-development");
var output1 = document.getElementById("demo-development");
output1.innerHTML = slider1.value;
slider1.oninput = function() {
  output1.innerHTML = this.value;
}
// Range-recreation
var slider2 = document.getElementById("Range-recreation");
var output2 = document.getElementById("demo-recreation");
output2.innerHTML = slider2.value;
slider2.oninput = function() {
  output2.innerHTML = this.value;
}
// Range-family
var slider3 = document.getElementById("Range-family");
var output3 = document.getElementById("demo-family");
output3.innerHTML = slider3.value;
slider3.oninput = function() {
  output3.innerHTML = this.value;
}
// Range-Business
var slider4 = document.getElementById("Range-Business");
var output4 = document.getElementById("demo-Business");
output4.innerHTML = slider4.value;
slider4.oninput = function() {
  output4.innerHTML = this.value;
}
// Range-religion
var slider5 = document.getElementById("Range-religion");
var output5 = document.getElementById("demo-religion");
output5.innerHTML = slider5.value;
slider5.oninput = function() {
  output5.innerHTML = this.value;
}
// Range-contribution
var slider6 = document.getElementById("Range-contribution");
var output6 = document.getElementById("demo-contribution");
output6.innerHTML = slider6.value;
slider6.oninput = function() {
  output6.innerHTML = this.value;
}
// Range-finance
var slider7 = document.getElementById("Range-finance");
var output7 = document.getElementById("demo-finance");
output7.innerHTML = slider7.value;
slider7.oninput = function() {
  output7.innerHTML = this.value;
}

// navigation buttons

$(".test-two").hide();
$("#next-bnt").click(function(){
  $(".test-one").hide();
  $(".test-two").show();
});


new Chart(document.getElementById("polar-chart"), {
  type: 'polarArea',
  data: {
    labels: ["A", "B", "C", "D", "E","F","G","H"],
    datasets: [
      {
        label: "Student B",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#8e5ea2","#3e95cd","#3cba9f"],
        data: [$[slider],10,3,4,5,6,7,8]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    }
  }
});

