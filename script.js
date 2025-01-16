const students = [
    {
      name: "Team 1",
      url: "https://final-project-starter-repo.vercel.app/",
    },
    {
      name: "Team 2",
      url: "https://weatherdashboard-pied.vercel.app/",
    },
    {
      name: "Team 3",
      url: "https://final-project-starter-repo-gray.vercel.app/",
    },
    {
      name: "Team 4",
      url: "https://final-project-67336.vercel.app/",
    },
    {
      name: "Team 5",
      url: "https://final-project-67336.vercel.app/",
    },
  ];
  
  const gridContainer = document.getElementById("grid-container");
  
  students.forEach((student) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <iframe src="${student.url}" title="${student.name}'s Website"></iframe>
      <h3>${student.name}</h3>
      <a href="${student.url}" target="_blank">Visit Website</a>
    `;
    gridContainer.appendChild(card);
  });
  