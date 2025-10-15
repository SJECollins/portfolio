const PROJECTS = [
  {
    title: "The Chillibox",
    description:
      "E-commerce website for a fictional business selling chilli pepper seeds and hot sauce. Features include user profiles, shopping cart, checkout, payment processing, stock management and full CRUD functionality.",
    tech: ["Django", "Bootstrap", "Stripe", "PostgreSQL"],
    images: [
      "assets/images/chillibox-1.webp",
      "assets/images/chillibox-2.webp",
      "assets/images/chillibox-3.webp",
      "assets/images/chillibox-4.webp",
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/SJECollins/ci-pp5-the-chillibox",
      },
    ],
    keywords: ["e-commerce", "shopping cart", "checkout", "payment", "CRUD"],
  },
  {
    title: "The Plant Exchange",
    description:
      "Social site for plant lovers to exchange plants and advice. Features include user profiles, an exhange for users' to advertise plants to swap, messaging, blog, and forums.",
    tech: ["Django REST Framework", "React", "TailwindCSS", "PostgreSQL"],
    images: [
      "assets/images/tpex-1.webp",
      "assets/images/tpex-2.webp",
      "assets/images/tpex-3.webp",
      "assets/images/tpex-4.webp",
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/SJECollins/tpev2",
      },
    ],
    keywords: ["social", "exchange", "messaging", "blog", "forums"],
  },
  {
    title: "Mo Leabharlann",
    description:
      "A reading app for users to track their books and reading. Features include user profiles, friends list, book database, tracking progress, and tracking sharing/borrowing books.",
    tech: ["Django", "Bootstrap", "HTMX", "PostgreSQL"],
    images: [
      "assets/images/leabharlann-1.webp",
      "assets/images/leabharlann-2.webp",
      "assets/images/leabharlann-3.webp",
      "assets/images/leabharlann-4.webp",
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/SJECollins/leabharlann",
      },
    ],
    keywords: ["reading", "books", "tracking", "social", "friends"],
  },
  {
    title: "Pixel's Arcade",
    description:
      "A vanilla JavaScript project with a collection of browser games. Second Code Institute portfolio project, began with 4 games and now over 20.",
    tech: ["HTML", "CSS", "JavaScript"],
    images: [
      "assets/images/arcade-1.webp",
      "assets/images/arcade-2.webp",
      "assets/images/arcade-3.webp",
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/SJECollins/pixels-arcade",
      },
      {
        name: "Live",
        url: "https://sjecollins.github.io/pixels-arcade/",
      },
    ],
    keywords: ["games", "JavaScript", "HTML", "CSS", "browser"],
  },
  {
    title: `PetR<sub>x</sub>`,
    description:
      "A Django app for vets to track their patients and prescriptions. Features include animal prescription records, vet profiles, and automatic calculation of prescriptions.",
    tech: ["Django", "Bootstrap", "HTMX", "PostgreSQL", "EmailJS"],
    images: [
      "assets/images/petrx-1.webp",
      "assets/images/petrx-2.webp",
      "assets/images/petrx-3.webp",
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/SJECollins/ci-pp4-pet-rx",
      },
    ],
    keywords: ["vet", "prescriptions", "records", "CRUD", "HTMX"],
  },
  {
    title: `Animal House`,
    description:
      "A Flask/React app for a fictional animal charity. Features include animal profiles, adoption applications, donations, and email integration.",
    tech: ["Flask", "React", "TailwindCSS", "Stripe", "MongoDB"],
    images: [
      "assets/images/animal-1.webp",
      "assets/images/animal-2.webp",
      "assets/images/animal-3.webp",
      "assets/images/animal-4.webp",
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/SJECollins/animalhouse",
      },
    ],
    keywords: ["animals", "adoption", "donations", "CRUD", "email"],
  },
  {
    title: "Bridge Lucey, Psychologist",
    description: "A static website for a clinical psychologist in Ireland.",
    tech: ["HTML", "CSS", "JavaScript"],
    images: [
      "assets/images/bridge-1.webp",
      "assets/images/bridge-2.webp",
      "assets/images/bridge-3.webp",
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/SJECollins/bridge-lucey",
      },
      {
        name: "Live",
        url: "https://bridgelucey.com",
      },
    ],
    keywords: ["static", "clinic", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Book Tracker",
    description: "A mobile app to track your reading habits.",
    tech: ["React Native", "Expo", "SQLite"],
    images: [
      "assets/images/bookapp-1.webp",
      "assets/images/bookapp-2.webp",
      "assets/images/bookapp-3.webp",
      "assets/images/bookapp-4.webp",
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/SJECollins/booktrackerapp",
      },
    ],
    keywords: ["mobile", "app", "reading", "React Native", "SQLite"],
  },
  {
    title: "Do It Already",
    description: "A productivity app to help you get things done.",
    tech: ["React Native", "Expo", "SQLite"],
    images: [
      "assets/images/doitalready-1.webp",
      "assets/images/doitalready-2.webp",
      "assets/images/doitalready-3.webp",
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/SJECollins/doitalready",
      },
    ],
    keywords: ["mobile", "app", "productivity", "React Native", "SQLite"],
  },
  {
    title: "Track It",
    description: "A habit tracking app to help you build good habits.",
    tech: ["React Native", "Expo", "SQLite"],
    images: [
      "assets/images/trackit-1.webp",
      "assets/images/trackit-2.webp",
      "assets/images/trackit-3.webp",
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/SJECollins/trackit",
      },
    ],
    keywords: ["mobile", "app", "habits", "React Native", "SQLite"],
  },
  {
    title: "Housesitter",
    description: "A browser anomaly detection game built with ThreeJS.",
    tech: ["HTML", "CSS", "JavaScript", "ThreeJS"],
    images: [
      "assets/images/housesitter-1.webp",
      "assets/images/housesitter-2.webp",
      "assets/images/housesitter-3.webp",
      "assets/images/housesitter-4.webp",
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/SJECollins/housesitter",
      },
      {
        name: "Live",
        url: "https://sjecollins.github.io/housesitter/",
      },
    ],
    keywords: ["game", "JavaScript", "ThreeJS", "HTML", "CSS"],
  },
  {
    title: "Old Folk's Dome",
    description: "A granny battling browser game built with Godot.",
    tech: ["Godot", "GDScript"],
    images: [
      "assets/images/ofd-1.webp",
      "assets/images/ofd-2.webp",
      "assets/images/ofd-3.webp",
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/SJECollins/oldfolksdome",
      },
      {
        name: "Live",
        url: "https://sjecollins.github.io/oldfolksdome/",
      },
    ],
    keywords: ["game", "Godot", "GDScript", "indie", "battler"],
  },
];
