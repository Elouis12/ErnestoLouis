let addUser = (projectsObject) => {


    // alert(projectsObject[0].info);


    let project = Object.keys( projectsObject ); // so we can access the properties

    let cardContainer = document.getElementById( "card-container" ); // so we can insert into the card container
    let card;


    for( let x = 0; x < project.length; x+=1 ){

        card =
        `
             <div class="card">
                <div class="card-content">
                  <h2 class="card-title">
                    ${ projectsObject[x].project_name }
                  </h2>
                  <p class="card-body">
                    ${ projectsObject[x].summary }
                  </p>
                  <a class="button" href="#">Learn More</a>
                </div>
              </div>
        
        `


        cardContainer.insertAdjacentHTML("beforeend", card );
  }

}


const showOverlay = () => {

    let overlayElement = document.getElementById("overlayElement")

    overlayElement.className = "overlay";
}

const closeOverlay = () => {

    let overlayElement = document.getElementById("overlayElement")


    // e.classList.remove('overlay');
        overlayElement.className = "hide";
}