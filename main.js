$.getJSON('https://api.myjson.com/bins/gul64', function(data) {
  for(var i = 0; i < 32; i++){
    // document.getElementById("content-div").innerHTML += '<img id="' + i + '" src="' + data.Shoes[i].id + '.jpg" alt="' + data.Shoes[i].name + '">'
    // document.getElementById(i).addEventListener("click", moreInfo());
    document.getElementById("content-div").innerHTML += '<img class="listImg" onclick="moreInfo(' + i + ')" src="' + data.Shoes[i].id + '.jpg" alt="' + data.Shoes[i].name + '">'
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
    for(var i = 0; i < 32; i++){
      document.getElementById("content-div").innerHTML += '<img class="listImg" onclick="moreInfo(' + i + ')" src="' + data.Shoes[i].id + '.jpg" alt="' + data.Shoes[i].name + '">'
    }
  });
}

function showSneakers() {
  document.getElementById("content-div").innerHTML = " ";
  $.getJSON('https://api.myjson.com/bins/gul64', function(data) {
    for(var i = 0; i < 8; i++){
      document.getElementById("content-div").innerHTML += '<img class="listImg" onclick="moreInfo(' + i + ')" src="' + data.Shoes[i].id + '.jpg" alt="' + data.Shoes[i].name + '">'
    }
  });
}

function showSandals() {
  document.getElementById("content-div").innerHTML = " ";
  $.getJSON('https://api.myjson.com/bins/gul64', function(data) {
    for(var i = 8; i < 16; i++){
      document.getElementById("content-div").innerHTML += '<img class="listImg" onclick="moreInfo(' + i + ')" src="' + data.Shoes[i].id + '.jpg" alt="' + data.Shoes[i].name + '">'
    }
  });
}

function showBoots() {
  document.getElementById("content-div").innerHTML = " ";
  $.getJSON('https://api.myjson.com/bins/gul64', function(data) {
    for(var i = 16; i < 24; i++){
      document.getElementById("content-div").innerHTML += '<img class="listImg" onclick="moreInfo(' + i + ')" src="' + data.Shoes[i].id + '.jpg" alt="' + data.Shoes[i].name + '">'
    }
  });
}

function showSkate() {
  document.getElementById("content-div").innerHTML = " ";
  $.getJSON('https://api.myjson.com/bins/gul64', function(data) {
    for(var i = 24; i < 32; i++){
      document.getElementById("content-div").innerHTML += '<img class="listImg" onclick="moreInfo(' + i + ')" src="' + data.Shoes[i].id + '.jpg" alt="' + data.Shoes[i].name + '">'
    }
  });
}

function moreInfo(d) {
  document.getElementById("content-div").innerHTML = " ";
  $.getJSON('https://api.myjson.com/bins/gul64', function(data) {
    document.getElementById("content-div").innerHTML += '<p class="shoeName">' + data.Shoes[d].brand + " " + data.Shoes[d].name + '</p>'
    document.getElementById("content-div").innerHTML += '<img class="moreInfoImg" src="' + data.Shoes[d].id + '.jpg" alt="' + data.Shoes[d].name + '">'
    document.getElementById("content-div").innerHTML += '<p class="shoePrice">$' + data.Shoes[d].price + '</p>'
    document.getElementById("content-div").innerHTML += '<p class="shoeDesc">' + data.Shoes[d].description + '</p>'
  });
}
