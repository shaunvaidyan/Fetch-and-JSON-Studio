window.addEventListener("load", function(){
    const url = "https://handlers.education.launchcode.org/static/astronauts.json"
    fetch(url)
    .then(function(response){
      response.json().then(function(json){
        const container = document.getElementById("container");
        container.innerHTML = `<h2> The number of Astronauts is ${json.length}</h2>`
        json.sort(function (a,b){
          return b.hoursInSpace - a.hoursInSpace;
        });
        for (i = 0; i < json.length; i++){
            let skills = json[i].skills
            let hoursInSpace = json[i].hoursInSpace
            container.innerHTML += `<div class="astronaut">
            <div class="bio">
                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                <ul>
                <li>Hours in space: ${hoursInSpace}</li>
                <li id="${json[i].active}">Active: ${json[i].active}</li>
                <li>Skills: ${skills.join(", ")}</li>
                </ul>
            </div>
            <img class="avatar" src="${json[i].picture}">
            </div>`}
      });
    });
  });