function showSneakers() {
  console.log("sneakers");
  console.log(event.target.id);

  $.getJSON('https://api.myjson.com/bins/e7m40', function(data) {
    console.log(data);
  });
}

function showSandals() {
  console.log("sandals");
}

function showBoots() {
  console.log("boots");
}

function showDress() {
  console.log("dress shoes");
}
