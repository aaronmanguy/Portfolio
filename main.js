const front_projects = document.getElementById("front-projects");
const all_projects = document.getElementById("all-projects");
const button = document.getElementById("projects-button");

//  VV reminder: you CAN do this VV
//  button.style.color = "var(--yellow)"

function projectsButton() {
  if (front_projects.style.display != "none") {
    showProjects();
  } else {
    hideProjects();
  }
}

function showProjects() {
  front_projects.style.animation = "fade-out 0.5s";
  setTimeout(() => {
    front_projects.style.display = "none";
  }, 500);

  all_projects.style.animation = "fade-in 0.5s";
  setTimeout(() => {
    all_projects.style.display = "grid";
    button.innerHTML = "See Less";
    // button.style.marginTop = "1000px;"
  }, 500);
}

function hideProjects() {
  all_projects.style.animation = "fade-out 0.5s";
  setTimeout(() => {
    all_projects.style.display = "none";
  }, 500);

  front_projects.style.animation = "fade-in 0.5s";
  setTimeout(() => {
    front_projects.style.display = "grid";
    button.innerHTML = "See More";
    // button.style.marginTop = "30px;"
  }, 500);
}
