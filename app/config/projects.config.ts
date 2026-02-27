export const projectsConfig = {
  title: "Projects",
  data: {
    card: {
      front: {
        subtext: "Click to see details",
      },
      back: {
        techStack: "Tech Stack:",
        code: "Code",
        live: "Live",
        subtext: "Click to flip back",
      },
    },
    projects: [
      {
        title: "Portfolio",
        description: "Created fullstack website",
        techStack: [
          "Nuxt",
          "Vue.js",
          "TypeScript",
          "TailwindCSS",
        ],
        code: "https://github.com/simjeeh/portfolio",
        live: "https://huzaifahsimjee.com",
        image: "/projects/portfolio.jpg",
      },
      {
        title: "Home Server",
        description: "Created a home server to work as a NAS using Debian and Podman to deploy applications for personal, friends, and family use. Applications include Ente, OpenCloud, Jellyfin, Sonarr, Radarr, and Bazaar",
        techStack: [
          "Linux",
          "Debian",
          "Docker",
          "Podman",
        ],
        image: "/projects/homeserver.png",
      },
      {
        title: "Rshell",
        description: "Used APIs, system calls, and data structures to create a shell program inspired from Bash\nDeveloped support for commands, nested parentheses and quotations, and file redirection",
        techStack: [
          "C++",
          "Make",
          "Bash",
        ],
        code: "https://github.com/hsimjee/rshell",
        image: "/projects/rshell.png",
      },
      {
        title: "Keyboard Hero",
        description: "Being an embedded systems project, C was used to program an ATmega1284 to run a game called Keyboard Hero based off of the popular game Guitar Hero.\nHardware such as shift registers, a LCD Screen, and a LED Matrix were used to implement the game.",
        techStack: [
          "C",
          "C++",
          "Make",
        ],
        code: "https://github.com/simjeeh/Keyboard-Hero",
        image: "/projects/keyboardhero.jpg",
      },
      {
        title: "Ocular-Echo",
        description: "To help the visually impaired, made hardware that provides tactile feedback as the wearer comes into proximity of potentially hazardous objects",
        techStack: [
          "Arduino",
        ],
        code: "https://github.com/simjeeh/Ocular-Echo",
        image: "/projects/ocularecho.jpg",
      },
      {
        title: "sentimentalgifts.shop",
        description: "Used CSS, HTML, and Bootstrap 4 to create a fully responsive website for a U.K. based company",
        techStack: [
          "HTML",
          "CSS",
        ],
        code: "https://github.com/simjeeh/SentimentalGifts",
        live: "https://www.sentimentalgifts.shop",
        image: '/projects/sentimentalgifts.png',
      },
      {
        title: "Golden Bear Claw Adventure",
        description: "Fabricated game concepts and created a text-based adventure game using\nCreated object models to parse user input, generate maps, and place items",
        techStack: [
          "C++",
        ],
        code: "https://github.com/simjeeh/Cutie-Hack-2017",
        image: '/projects/goldenbearclawadventure.png',
      },
      {
        title: "Bulletin Board",
        description: "Made a bulletin board using objects to create messages and replies",
        techStack: [
          "C++",
        ],
        code: "https://github.com/simjeeh/Bulletin-Board",
        image: '/projects/bboard.jpg',
      },
      {
        title: "Battleship",
        description: "Replicated game form and constructed maps with randomly placed ships\nProgrammed AI to play with random attacks, not allowing repetition",
        techStack: [
          "Java",
        ],
        code: "https://github.com/simjeeh/Battleship",
        image: '/projects/battleship.png',
      },
      {
        title: "The Toothpick Game",
        description: "Created options for playing against another person or against an AI with three difficulties",
        techStack: [
          "Java",
        ],
        code: "https://github.com/hsimjee/The-Toothpick-Game",
        image: '/projects/toothpick.png',
      },
    ],
  },
}
