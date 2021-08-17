window.addEventListener("load", function(){
    console.log("You're DOING IT!");
    const url = "https://handlers.education.launchcode.org/static/astronauts.json"
    fetch(url)
    .then(function(response){
      response.json().then(function(json){
        const container = document.getElementById("container");
        for (i = 0; i < json.length; i++){
            console.log(i);
            let skills = json[i].skills
            console.log(skills)
            container.innerHTML += `<div class="astronaut">
            <div class="bio">
                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                <ul>
                <li>Hours in space: ${json[i].hoursInSpace}</li>
                <li>Active: ${json[i].active}</li>
                <li>Skills: ${skills.join(", ")}</li>
                </ul>
            </div>
            <img class="avatar" src="${json[i].picture}">
            </div>`}
      });
    });
  });