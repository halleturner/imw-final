console.log('test');

// async function searchBooks() {
//     try {
//         const searchTerm = document.getElementById("searchInput").value;
//         const response = await fetch(`https://api.lyrics.ovh/v1/[{artist}/{title}]${searchTerm}`);

//         if (!response.ok) {
//             throw new Error("Could not fetch resource");
//         }
//         const data = await application.json();
//         const resultsDiv = document.getElementById("results");
//         resultsDiv.innerHTML = '';

//     }
// }


// const inputField = document.getElementById("button")



// Call the random_bg_color function to set a random background color.
// random_bg_color();

function getRandomId() {
    return Math.floor(Math.random() * 826);
}

function getCharacter(id) {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(function (response) {
            return response.json();
        })
}
// function random_bg_color() {
//     var x = Math.floor(Math.random() * 256);
//     var y = Math.floor(Math.random() * 256);
//     var z = Math.floor(Math.random() * 256);
//     // Construct the RGB color string.
//     var bgColor = "rgb(" + x + "," + y + "," + z + ")";
//     // Output the generated color to the console.
//     console.log(bgColor);
//     // Set the background color of the document body to the generated color.
//     document.body.style.background = bgColor;
// }


$(document).ready(function () {
    console.log('HTML finished loading...');

    const container = $('#my-container');

    $('#my-button').on('click', function () {
        getCharacter(getRandomId()).then(function (data) {
            console.log('got something');
            console.log(data);
            container.html(`<div class="content">
                <div><strong>Name: </strong>${data.name}</div>
                <div><strong>ID: </strong>${data.id}</div>
                <div><strong>Status: </strong>${data.status}</div>
                <div><img src="${data.image}"/></div>
            </div>`)
        })
        $('#my-button').on("click", function () {
            const curColour = document.body.style.backgroundColor;

            var x = Math.floor(Math.random() * 256);
            var y = Math.floor(Math.random() * 256);
            var z = Math.floor(Math.random() * 256);

            var bgColor = "rgb(" + x + "," + y + "," + z + ")";

            document.body.style.backgroundColor = bgColor;
        });
    });

});

// var button = document.querySelector("my-button");

// button.addEventListener("click", function () {
//     const curColour = document.body.style.backgroundColor;

//     // var x = Math.floor(Math.random() * 256);
//     // var y = Math.floor(Math.random() * 256);
//     // var z = Math.floor(Math.random() * 256);

//     // var bgColor = "rgb(" + x + "," + y + "," + z + ")";

//     document.body.style.backgroundColor = bgColor;
// })

const searchTerm = 'hello';
