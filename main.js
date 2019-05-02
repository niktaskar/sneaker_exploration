$.getJSON('https://api.myjson.com/bins/1cebo0', function(data) {
  console.log(data.Shoes.length);
  for(var i = 0; i < 32; i++){
    console.log(data.Shoes[i]);
    document.getElementById("content-div").innerHTML += '<img src="' + data.Shoes[i].id + '.jpg" alt="' + data.Shoes[i].name + '">'
  }
});

function showSneakers() {
  document.getElementById("content-div").innerHTML = " ";
  $.getJSON('https://api.myjson.com/bins/1cebo0', function(data) {
    console.log(data.Shoes.length);
    for(var i = 0; i < 8; i++){
      console.log(data.Shoes[i]);
      document.getElementById("content-div").innerHTML += '<img src="' + data.Shoes[i].id + '.jpg" alt="' + data.Shoes[i].name + '">'
    }
  });
}

function showSandals() {
  document.getElementById("content-div").innerHTML = " ";
  $.getJSON('https://api.myjson.com/bins/1cebo0', function(data) {
    console.log(data.Shoes.length);
    for(var i = 8; i < 16; i++){
      console.log(data.Shoes[i]);
      document.getElementById("content-div").innerHTML += '<img src="' + data.Shoes[i].id + '.jpg" alt="' + data.Shoes[i].name + '">'
    }
  });
}

function showBoots() {
  document.getElementById("content-div").innerHTML = " ";
  $.getJSON('https://api.myjson.com/bins/1cebo0', function(data) {
    console.log(data.Shoes.length);
    for(var i = 16; i < 24; i++){
      console.log(data.Shoes[i]);
      document.getElementById("content-div").innerHTML += '<img src="' + data.Shoes[i].id + '.jpg" alt="' + data.Shoes[i].name + '">'
    }
  });
}

function showSkate() {
  document.getElementById("content-div").innerHTML = " ";
  $.getJSON('https://api.myjson.com/bins/1cebo0', function(data) {
    console.log(data.Shoes.length);
    for(var i = 24; i < 32; i++){
      console.log(data.Shoes[i]);
      document.getElementById("content-div").innerHTML += '<img src="' + data.Shoes[i].id + '.jpg" alt="' + data.Shoes[i].name + '">'
    }
  });
}
