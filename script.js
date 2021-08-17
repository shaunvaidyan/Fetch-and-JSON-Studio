window.addEventListener("load", function(){
    console.log("You're DOING IT!");
    const url = "https://handlers.education.launchcode.org/static/astronauts.json"
    fetch(url)
    .then(function(response){
      response.json().then(function(json){
        const container = document.getElementById("container");
        for (i = 0; i < json.length; i++){
            console.log(i);
            container.innerHTML += `<div class="astronaut">
            <div class="bio">
                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                <ul>
                <li>Hours in space: ${json[i].hoursInSpace}</li>
                <li>Active: ${json[i].active}</li>
                <li>Skills: Physician, Chemical Engineer</li>
                </ul>
            </div>
            <img class="avatar" src="${json[i].picture}">
            </div>`}
      });
    });
  });

// const url1 = "https://handlers.education.launchcode.org/static/astronauts.json"
// fetch url1.then(function (response){
//     const astronauts = documents.getElementById("container");
//     let index = 0;
//     destination.addEventListener("click", function(){
//     for(i = 0; i<json.length; i++){
//     }
// }