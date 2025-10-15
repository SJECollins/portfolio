document.addEventListener("DOMContentLoaded", function () {
  // Toggling the right project nav
  const rightNavToggle = document.getElementById("toggle-right");

  rightNavToggle.addEventListener("click", function () {
    if (document.getElementById("project-nav").classList.contains("hidden")) {
      rightNavToggle.innerHTML = "&rsaquo;";
      document.querySelectorAll(".right-side")[0].style.width = "120px";
      setTimeout(function () {
        document.getElementById("project-nav").style.display = "flex";
      }, 200);
      document.getElementById("project-nav").classList.remove("hidden");
    } else {
      rightNavToggle.innerHTML = "&lsaquo;";
      document.getElementById("project-nav").style.display = "none";
      document.querySelectorAll(".right-side")[0].style.width = "28px";
      document.getElementById("project-nav").classList.add("hidden");
    }
  });

  // Populating the right project nav
  const projectNav = document.querySelector("#project-nav ul");

  for (let project of PROJECTS) {
    const li = document.createElement("li");
    li.classList.add("on-right", "project-links");
    li.dataset.index = PROJECTS.indexOf(project);
    li.innerHTML = "Project " + (PROJECTS.indexOf(project) + 1);
    projectNav.appendChild(li);
  }

  // Changing the project

  let projectIndex = 0;
  let imageIndex = 0;

  const changeProject = (e) => {
    imageIndex = 0;
    if (e.target.id === "chevron-down") {
      projectIndex++;
      if (projectIndex > PROJECTS.length - 1) {
        projectIndex = 0;
      }
    } else if (e.target.id === "chevron-up") {
      projectIndex--;
      if (projectIndex < 0) {
        projectIndex = PROJECTS.length - 1;
      }
    }
    if (e.target.dataset.index) {
      projectIndex = e.target.dataset.index;
    }

    document.getElementById("project-title").innerHTML =
      PROJECTS[projectIndex].title;
    document.getElementById("project-description").innerHTML =
      PROJECTS[projectIndex].description;
    document.getElementById("tech").innerHTML =
      PROJECTS[projectIndex].tech.join(", ");
    document.getElementById("project-image").src =
      PROJECTS[projectIndex].images[0];
    document.getElementById("project-image").alt = PROJECTS[projectIndex].title;
    document.getElementById("github-link").href =
      PROJECTS[projectIndex].links[0].url;
    if (PROJECTS[projectIndex].links[1]) {
      document.getElementById("live-link").href =
        PROJECTS[projectIndex].links[1].url;
      document.getElementById("live-link").style.visibility = "visible";
    } else {
      document.getElementById("live-link").style.visibility = "hidden";
    }

    for (let project of projectLinks) {
      if (project.dataset.index == projectIndex) {
        project.classList.add("here");
      } else {
        project.classList.remove("here");
      }
    }
  };

  const projectLinks = document.querySelectorAll(".project-links");
  for (let project of projectLinks) {
    project.addEventListener("click", changeProject);
  }

  const upBtn = document.getElementById("chevron-up");
  const downBtn = document.getElementById("chevron-down");
  upBtn.addEventListener("click", changeProject);
  downBtn.addEventListener("click", changeProject);

  changeProject({ target: { dataset: { index: 0 } } });

  // Changing the project images
  const rightBtn = document.getElementById("chevron-right");
  const leftBtn = document.getElementById("chevron-left");

  const changeProjectImages = (e) => {
    if (e.target.id === "chevron-right") {
      imageIndex++;
      if (imageIndex > PROJECTS[projectIndex].images.length - 1) {
        imageIndex = 0;
      }
    } else if (e.target.id === "chevron-left") {
      imageIndex--;
      if (imageIndex < 0) {
        imageIndex = PROJECTS[projectIndex].images.length - 1;
      }
    }
    document.getElementById("project-image").src =
      PROJECTS[projectIndex].images[imageIndex];
  };

  rightBtn.addEventListener("click", changeProjectImages);
  leftBtn.addEventListener("click", changeProjectImages);

  // Toggle between slide and gallery view
  const toggleDisplayBtn = document.getElementById("toggle-display");
  const slideView = document.getElementById("slide-view");
  const galleryView = document.getElementById("gallery-view");
  let isSlideView = true;

  // Populate gallery
  const populateGallery = () => {
    const grid = document.getElementById("projects-grid");
    grid.innerHTML = "";

    PROJECTS.forEach((project, index) => {
      const card = document.createElement("div");
      card.classList.add("project-card");
      card.dataset.index = index;

      card.innerHTML = `
      <h3>${project.title}</h3>
      <img src="${project.images[0]}" alt="${project.title}">
      <p>${project.description}</p>
      <p class="project-card-tech">Built with: ${project.tech.join(", ")}</p>
    `;

      card.addEventListener("click", () => {
        projectIndex = index;
        imageIndex = 0;
        isSlideView = true;
        toggleDisplayBtn.textContent = "Gallery View";
        slideView.style.display = "flex";
        galleryView.style.display = "none";
        changeProject({ target: { dataset: { index: index } } });
      });

      grid.appendChild(card);
    });
  };

  const centerContent = document.querySelector(".center-content");

  toggleDisplayBtn.addEventListener("click", () => {
    isSlideView = !isSlideView;

    if (isSlideView) {
      toggleDisplayBtn.textContent = "Gallery View";
      slideView.style.display = "flex";
      galleryView.style.display = "none";
      centerContent.style.overflow = "visible";
    } else {
      toggleDisplayBtn.textContent = "Slide View";
      slideView.style.display = "none";
      galleryView.style.display = "block";
      centerContent.style.overflow = "hidden";
      populateGallery();
    }
  });

  // Initialize gallery on load
  populateGallery();
});
