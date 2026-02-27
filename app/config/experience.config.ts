export const experienceConfig = {
  title: "Experience",
  data: {
    card: {
      front: {
        subtext: "Click to see responsibilities",
      },
      back: {
        title: "Key Responsibilities",
        bullet: "•",
        subtext: "Click to flip back",
      },
    },
    experiences: [
      {
        role: "Senior DevOps Engineer",
        company: "Nvidia",
        location: "Santa Clara, CA",
        period: "Aug 2024 - Present",
        responsibilities: [
          "Own infrastructure strategy and delivery for the GPU-Health product. Lead the team to deliver highly available, scalable, and cost-optimized AWS and Kubernetes infrastructure",
          "Lead design and operation of infrastructure CI/CD. Built terraform stacks, Helm charts, and deployment pipelines, supporting smooth onboarding and upgrades for internal and enterprise customers",
          "Manage reliable and scalable multi-cluster k8 (EKS) infrastructure using ArgoCD",
        ],
        image: '/experience/nvidia.png',
      },
      {
        role: "Software Development Engineer",
        company: "Amazon",
        location: "Santa Monica, CA",
        period: "Nov 2022 - Aug 2024",
        responsibilities: [
          "Worked on key features to optimize data intake and processing for Measurement and Advertising",
          "Maintained and created key features for highly scalable distributed systems managing petabytes of data while processing millions of requests per minute",
          "Developed big data and search solutions for sellers on and off the Amazon platform to track KPIs like conversion rates, total ad impact, and more",
        ],
        image: '/experience/amazon.png',
      },
      {
        role: "Software Engineer",
        company: "Shoreline Software",
        location: "Redwood City, CA",
        period: "Jun 2019 - Oct 2022",
        responsibilities: [
          "Managed demos demonstrating Shoreline end-to-end using a full-stack demo app showing product comparisons to customers",
          "Developed a tool for self hosting the Shoreline backend, which deploys backend and agent AWS infrastructure using Terraform and Helm",
          "Worked with AWS, GCP, and Azure using tools such as EKS, GKE, and AKS as well as ASG, MIGs, and VMSS to add support for multi-cloud agent setups",
          "Created Shoreline Eagle, an internal app used for reserving and scaling k8s cluster and vm environments in AWS",
        ],
        image: '/experience/shoreline.png',
      },
    ],
  },
}
