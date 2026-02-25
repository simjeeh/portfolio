export const projectsConfig = {
  frontCard: {
    subText: "Click to see details",
  },
  backCard: {
    techStack: "Tech Stack:",
    code: "Code",
    live: "Live",
    subText: "Click to flip back",
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
      image: '/projects/portfolio.jpg',
    },
    {
      title: "Home Server",
      description: "Created server",
      techStack: [
        "Linux",
        "Debian",
        "Docker",
        "Podman",
      ],
      image: '/projects/portfolio.jpg',
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
      image: '/projects/keyboardhero.jpg',
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
  ]
}
