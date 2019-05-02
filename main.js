$.getJSON('https://api.myjson.com/bins/gul64', function(data) {
  console.log(data.Shoes.length);
  for(var i = 0; i < 32; i++){
    console.log(data.Shoes[i]);
    document.getElementById("content-div").innerHTML += '<img onclick="moreInfo(' + i + ')" src="' + data.Shoes[i].id + '.jpg" alt="' + data.Shoes[i].name + '">'
  }
});

// function init() {
//   gapi.client.setApiKey("AIzaSyB9xKnolfm9SuuGvC79P5poa7Ejs_zQxBM");
//   gapi.client.load("youtube", "v3", function() {
//
//   }
// }

function showAll() {
  document.getElementById("content-div").innerHTML = " ";
  $.getJSON('https://api.myjson.com/bins/gul64', function(data) {
    console.log(data.Shoes.length);
    for(var i = 0; i < 32; i++){
      console.log(data.Shoes[i]);
      document.getElementById("content-div").innerHTML += '<img onclick="moreInfo(' + i + ')" src="' + data.Shoes[i].id + '.jpg" alt="' + data.Shoes[i].name + '">'
    }
  });
}

function showSneakers() {
  document.getElementById("content-div").innerHTML = " ";
  $.getJSON('https://api.myjson.com/bins/gul64', function(data) {
    console.log(data.Shoes.length);
    for(var i = 0; i < 8; i++){
      console.log(data.Shoes[i]);
      document.getElementById("content-div").innerHTML += '<img onclick="moreInfo(' + data.Shoes[i] + ')" src="' + data.Shoes[i].id + '.jpg" alt="' + data.Shoes[i].name + '">'
    }
  });
}

function showSandals() {
  document.getElementById("content-div").innerHTML = " ";
  $.getJSON('https://api.myjson.com/bins/gul64', function(data) {
    console.log(data.Shoes.length);
    for(var i = 8; i < 16; i++){
      console.log(data.Shoes[i]);
      document.getElementById("content-div").innerHTML += '<img onclick="moreInfo(' + data.Shoes[i] + ')" src="' + data.Shoes[i].id + '.jpg" alt="' + data.Shoes[i].name + '">'
    }
  });
}

function showBoots() {
  document.getElementById("content-div").innerHTML = " ";
  $.getJSON('https://api.myjson.com/bins/gul64', function(data) {
    console.log(data.Shoes.length);
    for(var i = 16; i < 24; i++){
      console.log(data.Shoes[i]);
      document.getElementById("content-div").innerHTML += '<img onclick="moreInfo(' + data.Shoes[i] + ')" src="' + data.Shoes[i].id + '.jpg" alt="' + data.Shoes[i].name + '">'
    }
  });
}

function showSkate() {
  document.getElementById("content-div").innerHTML = " ";
  $.getJSON('https://api.myjson.com/bins/gul64', function(data) {
    console.log(data.Shoes.length);
    for(var i = 24; i < 32; i++){
      console.log(data.Shoes[i]);
      document.getElementById("content-div").innerHTML += '<img onclick="moreInfo(' + data.Shoes[i] + ')" src="' + data.Shoes[i].id + '.jpg" alt="' + data.Shoes[i].name + '">'
    }
  });
}

function moreInfo(data) {
  console.log(data);
  $.getJSON('https://api.myjson.com/bins/gul64', function(data) {
    console.log(data.Shoes[1]);
    console.log(typeof(data));
    // document.getElementById("content-div").innerHTML += '<img onclick="moreInfo(' + i + ')" src="' + data.Shoes[i].id + '.jpg" alt="' + data.Shoes[i].name + '">'
  });
}
