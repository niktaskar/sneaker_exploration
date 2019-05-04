function showAll() {
    document.getElementById("content-div").innerHTML = " ";
    $.getJSON('https://api.myjson.com/bins/gul64', function (data) {
        for (var i = 0; i < 32; i++) {
            document.getElementById("content-div").innerHTML += '<img class="listImg" onclick="moreInfo(' + i + ')" src="' + data.Shoes[i].id + '.jpg" alt="' + data.Shoes[i].name + '">';
        }
    });
}

function showSneakers() {
    document.getElementById("content-div").innerHTML = " ";
    $.getJSON('https://api.myjson.com/bins/gul64', function (data) {
        for (var i = 0; i < 8; i++) {
            document.getElementById("content-div").innerHTML += '<img class="listImg" onclick="moreInfo(' + i + ')" src="' + data.Shoes[i].id + '.jpg" alt="' + data.Shoes[i].name + '">';
        }
    });
}

function showSandals() {
    document.getElementById("content-div").innerHTML = " ";
    $.getJSON('https://api.myjson.com/bins/gul64', function (data) {
        for (var i = 8; i < 16; i++) {
            document.getElementById("content-div").innerHTML += '<img class="listImg" onclick="moreInfo(' + i + ')" src="' + data.Shoes[i].id + '.jpg" alt="' + data.Shoes[i].name + '">';
        }
    });
}

function showBoots() {
    document.getElementById("content-div").innerHTML = " ";
    $.getJSON('https://api.myjson.com/bins/gul64', function (data) {
        for (var i = 16; i < 24; i++) {
            document.getElementById("content-div").innerHTML += '<img class="listImg" onclick="moreInfo(' + i + ')" src="' + data.Shoes[i].id + '.jpg" alt="' + data.Shoes[i].name + '">';
        }
    });
}

function showSkate() {
    document.getElementById("content-div").innerHTML = " ";
    $.getJSON('https://api.myjson.com/bins/gul64', function (data) {
        for (var i = 24; i < 32; i++) {
            document.getElementById("content-div").innerHTML += '<img class="listImg" onclick="moreInfo(' + i + ')" src="' + data.Shoes[i].id + '.jpg" alt="' + data.Shoes[i].name + '">';
        }
    });
}

function moreInfo(d) {
    document.getElementById("content-div").innerHTML = "";
    $.getJSON('https://api.myjson.com/bins/gul64', function (data) {
        document.getElementById("content-div").innerHTML += '<p class="shoeName">' + data.Shoes[d].brand + " " + data.Shoes[d].name + '</p>';
        document.getElementById("content-div").innerHTML += '<img class="moreInfoImg" src="' + data.Shoes[d].id + '.jpg" alt="' + data.Shoes[d].name + '">';
        document.getElementById("content-div").innerHTML += '<p class="shoePrice">$' + data.Shoes[d].price + '</p>';
        document.getElementById("content-div").innerHTML += '<p class="shoeDesc">' + data.Shoes[d].description + '</p>';
        var div = document.createElement("div");
        div.setAttribute("class", "query");
        div.setAttribute("id", "query-div")
        document.getElementById("content-div").append(div);

        searchAPI(data.Shoes[d].name);
    });
}

showAll();

function searchAPI(q) {
    console.log(q);
    function query() {
        // 2. Initialize the JavaScript client library.
        gapi.client.init({
            'apiKey': 'AIzaSyDiSNpVFbmMh88aexS32k9Qj6vFJ4gDdlg'
            // clientId and scope are optional if auth is not required.
            // 'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
            // 'scope': 'profile',
        }).then(function () {
            // 3. Initialize and make the API request.
            return gapi.client.request({
                'path': 'https://www.googleapis.com/customsearch/v1?key=AIzaSyDiSNpVFbmMh88aexS32k9Qj6vFJ4gDdlg&cx=007248899485392168599:63b2p03bdio&q=' + q,
            })
        }).then(function (response) {
            console.log(response.result);
            var res = response.result.items;
            var searchHeader = document.createElement("h3");
            searchHeader.innerText = "Google Search Results";
            searchHeader.setAttribute("id", "searchHeader");
            document.getElementById("query-div").append(document.createElement("hr"));
            document.getElementById("query-div").append(searchHeader);
            for (var i = 0; i < res.length; i++) {
                var div = document.createElement("div");
                div.setAttribute("id", i);

                var link = document.createElement("a");
                link.setAttribute("class", "searchResults");
                link.setAttribute("href", res[i].link);
                link.innerText = res[i].title;
                link.setAttribute("color", "blue");

                var bold = document.createElement("strong");
                bold.setAttribute("class", "searchResultsBold");
                bold.innerText = res[i].title;

                var desc = document.createElement("p");
                desc.setAttribute("class", "searchResults");
                desc.innerText = res[i].snippet;

                div.append(bold);
                div.append(document.createElement("br"));
                div.append(link);
                div.append(document.createElement("br"));
                div.append(desc);

                document.getElementById("query-div").append(div);
                document.getElementById("query-div").append(document.createElement("hr"));
            }
        }, function (reason) {
            console.log('Error: ' + reason.result.error.message);
        });
    };
    // 1. Load the JavaScript client library.

    gapi.load('client', query);
}
