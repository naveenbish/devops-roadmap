import { Roadmap } from "@/types/roadmap";

export const devopsRoadmap: Roadmap = {
  title: "DevOps Roadmap",
  description: "From zero to DevOps engineer — a beginner-friendly learning path",
  sections: [
    // ============================================================
    // PHASE 1: ABSOLUTE BASICS (Weeks 1-4)
    // ============================================================
    {
      id: "phase1-basics",
      title: "Phase 1: Absolute Basics",
      description: "Start here if you're new to tech. No prior knowledge assumed.",
      topics: [
        {
          id: "how-internet-works",
          title: "How the Internet Works",
          description: "Understand servers, clients, and how websites actually work",
          resources: [
            {
              id: "internet-aaron",
              title: "How the Internet Works in 5 Minutes",
              url: "https://www.youtube.com/watch?v=7_LPdttKXPc",
              channel: "Aaron",
              duration: "5m",
            },
            {
              id: "internet-codecademy",
              title: "How Does the Internet Work? (Full Course)",
              url: "https://www.youtube.com/watch?v=zNt2E9xtEqY",
              channel: "freeCodeCamp.org",
              duration: "1h",
            },
            {
              id: "internet-kunal",
              title: "How Internet Works | Networking Basics in Hindi",
              url: "https://www.youtube.com/watch?v=Pr8R6fqkCK0",
              channel: "Kunal Kushwaha",
              duration: "20m",
            },
          ],
        },
        {
          id: "what-is-os",
          title: "Operating System Basics",
          description: "Understand what an OS is, files, folders, and processes",
          resources: [
            {
              id: "os-crash",
              title: "Operating Systems: Crash Course Computer Science",
              url: "https://www.youtube.com/watch?v=26QPDBe-NB8",
              channel: "CrashCourse",
              duration: "14m",
            },
            {
              id: "os-basics",
              title: "What is an Operating System?",
              url: "https://www.youtube.com/watch?v=pV0EAwQmXUI",
              channel: "Gary Explains",
              duration: "10m",
            },
          ],
        },
        {
          id: "terminal-intro",
          title: "Introduction to Terminal",
          description: "Learn to use the command line (don't be scared, it's just text)",
          resources: [
            {
              id: "terminal-fcc",
              title: "Command Line Crash Course for Beginners",
              url: "https://www.youtube.com/watch?v=uwAqEzhyjtw",
              channel: "Traversy Media",
              duration: "35m",
            },
            {
              id: "terminal-hindi",
              title: "Command Line Tutorial in Hindi",
              url: "https://www.youtube.com/watch?v=GY8PAhShvAU",
              channel: "CodeWithHarry",
              duration: "30m",
            },
            {
              id: "terminal-mac",
              title: "Terminal for Beginners (Mac/Linux)",
              url: "https://www.youtube.com/watch?v=aKRYQsKR46I",
              channel: "NetworkChuck",
              duration: "20m",
            },
          ],
        },
        {
          id: "git-beginner",
          title: "Git & GitHub for Beginners",
          description: "Learn to save your code and collaborate with others",
          resources: [
            {
              id: "git-fcc",
              title: "Git and GitHub for Beginners - Crash Course",
              url: "https://www.youtube.com/watch?v=RGOj5yH7evk",
              channel: "freeCodeCamp.org",
              duration: "1h",
            },
            {
              id: "git-mosh",
              title: "Git Tutorial for Beginners: Learn Git in 1 Hour",
              url: "https://www.youtube.com/watch?v=8JJ101D3knE",
              channel: "Programming with Mosh",
              duration: "1h",
            },
            {
              id: "git-hindi",
              title: "Git & GitHub Tutorial in Hindi",
              url: "https://www.youtube.com/watch?v=gwWKnnCMQDc",
              channel: "CodeWithHarry",
              duration: "45m",
            },
          ],
        },
      ],
    },

    // ============================================================
    // PHASE 2: LINUX & SCRIPTING (Weeks 5-8)
    // ============================================================
    {
      id: "phase2-linux",
      title: "Phase 2: Linux & Scripting",
      description: "Master Linux and learn to automate tasks with scripts",
      topics: [
        {
          id: "linux-basics",
          title: "Linux Fundamentals",
          description: "The OS that runs the internet — learn to use it",
          resources: [
            {
              id: "linux-fcc",
              title: "Introduction to Linux – Full Course for Beginners",
              url: "https://www.youtube.com/watch?v=sWbUDq4S6Y8",
              channel: "freeCodeCamp.org",
              duration: "6h",
            },
            {
              id: "linux-fireship",
              title: "100+ Linux Things You Need to Know",
              url: "https://www.youtube.com/watch?v=LKCVKw9CzFo",
              channel: "Fireship",
              duration: "12m",
            },
            {
              id: "linux-hindi",
              title: "Linux Tutorial for Beginners in Hindi",
              url: "https://www.youtube.com/watch?v=V1y-mO4kFCg",
              channel: "Technical Guftgu",
              duration: "2h",
            },
          ],
        },
        {
          id: "linux-commands",
          title: "Essential Linux Commands",
          description: "Navigate, manage files, and get things done in Linux",
          resources: [
            {
              id: "commands-nana",
              title: "Linux Commands for Beginners",
              url: "https://www.youtube.com/watch?v=gd7BXuUQ91w",
              channel: "Kunal Kushwaha",
              duration: "45m",
            },
            {
              id: "commands-networkchuck",
              title: "Linux Commands You NEED to Know",
              url: "https://www.youtube.com/watch?v=ZtqBQ68cfJc",
              channel: "NetworkChuck",
              duration: "25m",
            },
            {
              id: "commands-hindi",
              title: "Linux Basic Commands in Hindi",
              url: "https://www.youtube.com/watch?v=iOHRY3hLdJg",
              channel: "Technical Guftgu",
              duration: "40m",
            },
          ],
        },
        {
          id: "bash-scripting",
          title: "Bash Scripting Basics",
          description: "Automate repetitive tasks with shell scripts",
          resources: [
            {
              id: "bash-nana",
              title: "Bash Scripting Tutorial for Beginners",
              url: "https://www.youtube.com/watch?v=PNhq_4d-5ek",
              channel: "TechWorld with Nana",
              duration: "1h",
            },
            {
              id: "bash-hindi",
              title: "Shell Scripting Tutorial in Hindi",
              url: "https://www.youtube.com/watch?v=_nY8POSk4bc",
              channel: "Simplilearn",
              duration: "1h 30m",
            },
            {
              id: "bash-beginners",
              title: "Bash Scripting Full Course",
              url: "https://www.youtube.com/watch?v=e7BufAVwDHM",
              channel: "Linux Hint",
              duration: "1h 15m",
            },
          ],
        },
        {
          id: "python-basics",
          title: "Python for Beginners",
          description: "A friendly programming language for automation",
          resources: [
            {
              id: "python-mosh",
              title: "Python Tutorial for Beginners - Full Course",
              url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
              channel: "Programming with Mosh",
              duration: "6h",
            },
            {
              id: "python-hindi",
              title: "Python Tutorial in Hindi",
              url: "https://www.youtube.com/watch?v=gfDE2a7MKjA",
              channel: "CodeWithHarry",
              duration: "4h",
            },
            {
              id: "python-fcc",
              title: "Python for Everybody - Full Course",
              url: "https://www.youtube.com/watch?v=8DvywoWv6fI",
              channel: "freeCodeCamp.org",
              duration: "15h",
            },
          ],
        },
      ],
    },

    // ============================================================
    // PHASE 3: NETWORKING FUNDAMENTALS (Weeks 9-10)
    // ============================================================
    {
      id: "phase3-networking",
      title: "Phase 3: Networking Fundamentals",
      description: "Understand how computers talk to each other",
      topics: [
        {
          id: "networking-basics",
          title: "Networking Basics",
          description: "IP addresses, ports, and how data moves",
          resources: [
            {
              id: "net-aron",
              title: "Networking Basics | What is a Switch, Router, Gateway",
              url: "https://www.youtube.com/watch?v=1z0ULvgpWxw",
              channel: "PowerCert Animated Videos",
              duration: "10m",
            },
            {
              id: "net-practical",
              title: "Computer Networking Course - Network Fundamentals",
              url: "https://www.youtube.com/watch?v=qiQR5rTSshw",
              channel: "freeCodeCamp.org",
              duration: "3h",
            },
            {
              id: "net-hindi",
              title: "Networking Basics in Hindi",
              url: "https://www.youtube.com/watch?v=XaHv0OOd8dM",
              channel: "Technical Guftgu",
              duration: "30m",
            },
          ],
        },
        {
          id: "dns-http",
          title: "DNS & HTTP",
          description: "How websites load and servers respond",
          resources: [
            {
              id: "dns-explained",
              title: "DNS Explained | How the Internet Works",
              url: "https://www.youtube.com/watch?v=72snZctFFtA",
              channel: "PowerCert Animated Videos",
              duration: "6m",
            },
            {
              id: "http-crash",
              title: "HTTP Crash Course",
              url: "https://www.youtube.com/watch?v=iYM2zFP3Zn0",
              channel: "Traversy Media",
              duration: "25m",
            },
            {
              id: "dns-bytebytego",
              title: "Everything You Need to Know About DNS",
              url: "https://www.youtube.com/watch?v=27r4Bzuj5NQ",
              channel: "ByteByteGo",
              duration: "6m",
            },
          ],
        },
      ],
    },

    // ============================================================
    // PHASE 4: DOCKER BASICS (Weeks 11-14)
    // ============================================================
    {
      id: "phase4-docker",
      title: "Phase 4: Docker Basics",
      description: "Package your applications to run anywhere",
      topics: [
        {
          id: "docker-intro",
          title: "What is Docker?",
          description: "Understand containers without the jargon",
          resources: [
            {
              id: "docker-what",
              title: "What is Docker? | Container vs Virtual Machine",
              url: "https://www.youtube.com/watch?v=a1N5gJ-BfD0",
              channel: "IBM Technology",
              duration: "8m",
            },
            {
              id: "docker-simple",
              title: "Docker in 100 Seconds",
              url: "https://www.youtube.com/watch?v=Gjnup-PuquQ",
              channel: "Fireship",
              duration: "2m",
            },
            {
              id: "docker-explain",
              title: "Docker Explained Simply",
              url: "https://www.youtube.com/watch?v=rOTqprHv1YE",
              channel: "Web Dev Simplified",
              duration: "15m",
            },
          ],
        },
        {
          id: "docker-hands-on",
          title: "Docker Hands-On Tutorial",
          description: "Actually use Docker — run your first container",
          resources: [
            {
              id: "docker-fcc",
              title: "Docker Tutorial for Beginners - Full Course",
              url: "https://www.youtube.com/watch?v=fqMOX6JJhGo",
              channel: "freeCodeCamp.org",
              duration: "2h",
            },
            {
              id: "docker-nana",
              title: "Docker Tutorial for Beginners | Full Course",
              url: "https://www.youtube.com/watch?v=3c-iBn73dDE",
              channel: "TechWorld with Nana",
              duration: "1h 30m",
            },
            {
              id: "docker-hindi",
              title: "Docker Tutorial in Hindi",
              url: "https://www.youtube.com/watch?v=17Bl31mMjhs",
              channel: "CodeWithHarry",
              duration: "1h 30m",
            },
          ],
        },
        {
          id: "docker-compose",
          title: "Docker Compose",
          description: "Run multiple containers together",
          resources: [
            {
              id: "compose-tutorial",
              title: "Docker Compose Tutorial",
              url: "https://www.youtube.com/watch?v=HG6yIjZapSA",
              channel: "NetworkChuck",
              duration: "45m",
            },
            {
              id: "compose-nana",
              title: "Docker Compose Explained",
              url: "https://www.youtube.com/watch?v=whwShRhoZjs",
              channel: "TechWorld with Nana",
              duration: "30m",
            },
          ],
        },
      ],
    },

    // ============================================================
    // PHASE 5: CI/CD BASICS (Weeks 15-18)
    // ============================================================
    {
      id: "phase5-cicd",
      title: "Phase 5: CI/CD Basics",
      description: "Automate testing and deployment",
      topics: [
        {
          id: "cicd-intro",
          title: "What is CI/CD?",
          description: "Understand why we automate builds and deployments",
          resources: [
            {
              id: "cicd-nana",
              title: "What is CI/CD? | Simply Explained",
              url: "https://www.youtube.com/watch?v=1Y2qFX1KlP0",
              channel: "TechWorld with Nana",
              duration: "14m",
            },
            {
              id: "cicd-simple",
              title: "CI/CD Explained in 5 Minutes",
              url: "https://www.youtube.com/watch?v=xZv4a5HJSXY",
              channel: "IBM Technology",
              duration: "5m",
            },
            {
              id: "cicd-hindi",
              title: "CI/CD Pipeline in Hindi",
              url: "https://www.youtube.com/watch?v=YQ6nHVmxDmE",
              channel: "Technical Guftgu",
              duration: "30m",
            },
          ],
        },
        {
          id: "github-actions",
          title: "GitHub Actions Basics",
          description: "Create your first automated pipeline",
          resources: [
            {
              id: "gha-fcc",
              title: "GitHub Actions CI/CD - Full Course",
              url: "https://www.youtube.com/watch?v=R8_veQiYBjI",
              channel: "freeCodeCamp.org",
              duration: "1h",
            },
            {
              id: "gha-crash",
              title: "GitHub Actions Crash Course",
              url: "https://www.youtube.com/watch?v=nyKZTKQS_0E",
              channel: "Traversy Media",
              duration: "30m",
            },
            {
              id: "gha-nana",
              title: "GitHub Actions Tutorial",
              url: "https://www.youtube.com/watch?v=58QuqxubjzI",
              channel: "TechWorld with Nana",
              duration: "45m",
            },
          ],
        },
      ],
    },

    // ============================================================
    // PHASE 6: CLOUD BASICS (Weeks 19-22)
    // ============================================================
    {
      id: "phase6-cloud",
      title: "Phase 6: Cloud Basics",
      description: "Deploy applications to the cloud",
      topics: [
        {
          id: "cloud-intro",
          title: "What is Cloud Computing?",
          description: "Understand AWS, Azure, GCP at a high level",
          resources: [
            {
              id: "cloud-explained",
              title: "Cloud Computing Explained",
              url: "https://www.youtube.com/watch?v=M988_fsOSWo",
              channel: "TechWorld with Nana",
              duration: "15m",
            },
            {
              id: "cloud-basics",
              title: "What is Cloud Computing? | Amazon AWS",
              url: "https://www.youtube.com/watch?v=mxT233EdY5w",
              channel: "Amazon Web Services",
              duration: "6m",
            },
            {
              id: "cloud-hindi",
              title: "Cloud Computing in Hindi",
              url: "https://www.youtube.com/watch?v=R8VEFRBQbLs",
              channel: "Edureka Hindi",
              duration: "20m",
            },
          ],
        },
        {
          id: "aws-basics",
          title: "AWS Basics",
          description: "Create an AWS account and launch your first server",
          resources: [
            {
              id: "aws-fcc",
              title: "AWS Fundamentals - Full Course",
              url: "https://www.youtube.com/watch?v=3hLmDS179YE",
              channel: "freeCodeCamp.org",
              duration: "4h",
            },
            {
              id: "aws-beginners",
              title: "AWS Tutorial for Beginners",
              url: "https://www.youtube.com/watch?v=k1RI5locZE4",
              channel: "Edureka",
              duration: "5h",
            },
            {
              id: "aws-hindi",
              title: "AWS Tutorial in Hindi",
              url: "https://www.youtube.com/watch?v=VwNjwx-2YKM",
              channel: "Technical Guftgu",
              duration: "2h",
            },
          ],
        },
      ],
    },

    // ============================================================
    // PHASE 7: KUBERNETES BASICS (Weeks 23-28) — INTERMEDIATE
    // ============================================================
    {
      id: "phase7-kubernetes",
      title: "Phase 7: Kubernetes Basics",
      description: "Orchestrate containers at scale (Intermediate)",
      topics: [
        {
          id: "k8s-intro",
          title: "What is Kubernetes?",
          description: "Understand why we need orchestration",
          resources: [
            {
              id: "k8s-explained",
              title: "Kubernetes Explained in 5 Minutes",
              url: "https://www.youtube.com/watch?v=QJ4fODH6DXI",
              channel: "ByteByteGo",
              duration: "5m",
            },
            {
              id: "k8s-why",
              title: "Why Kubernetes?",
              url: "https://www.youtube.com/watch?v=PH-2FfFD2Kc",
              channel: "IBM Technology",
              duration: "8m",
            },
            {
              id: "k8s-hindi",
              title: "Kubernetes in Hindi",
              url: "https://www.youtube.com/watch?v=AY0pH5xXrJ4",
              channel: "Kunal Kushwaha",
              duration: "4h",
            },
          ],
        },
        {
          id: "k8s-basics",
          title: "Kubernetes Fundamentals",
          description: "Pods, Deployments, Services — the basics",
          resources: [
            {
              id: "k8s-nana",
              title: "Kubernetes Tutorial for Beginners | Full Course",
              url: "https://www.youtube.com/watch?v=X48VuDVv0do",
              channel: "TechWorld with Nana",
              duration: "3h 30m",
            },
            {
              id: "k8s-fcc",
              title: "Kubernetes Course - Full Beginners Tutorial",
              url: "https://www.youtube.com/watch?v=d6WC5n9G_sM",
              channel: "freeCodeCamp.org",
              duration: "3h 45m",
            },
          ],
        },
      ],
    },

    // ============================================================
    // PHASE 8: INFRASTRUCTURE AS CODE (Weeks 29-32) — INTERMEDIATE
    // ============================================================
    {
      id: "phase8-iac",
      title: "Phase 8: Infrastructure as Code",
      description: "Write code to create infrastructure (Intermediate)",
      topics: [
        {
          id: "terraform-intro",
          title: "Terraform Basics",
          description: "Define infrastructure in code",
          resources: [
            {
              id: "tf-nana",
              title: "Terraform Tutorial for Beginners | Full Course",
              url: "https://www.youtube.com/watch?v=7xngnjfIlK4",
              channel: "TechWorld with Nana",
              duration: "2h",
            },
            {
              id: "tf-fcc",
              title: "Terraform Course - Automate AWS Infrastructure",
              url: "https://www.youtube.com/watch?v=SLB_c_ayRMo",
              channel: "freeCodeCamp.org",
              duration: "3h",
            },
            {
              id: "tf-hindi",
              title: "Terraform Tutorial in Hindi",
              url: "https://www.youtube.com/watch?v=YcPT6pH7hVQ",
              channel: "Technical Guftgu",
              duration: "2h",
            },
          ],
        },
      ],
    },

    // ============================================================
    // PHASE 9: MONITORING (Weeks 33-36) — INTERMEDIATE
    // ============================================================
    {
      id: "phase9-monitoring",
      title: "Phase 9: Monitoring & Observability",
      description: "Keep an eye on your systems (Intermediate)",
      topics: [
        {
          id: "monitoring-intro",
          title: "Monitoring Basics",
          description: "Logs, metrics, and alerts explained",
          resources: [
            {
              id: "monitor-explained",
              title: "What is Monitoring? | Observability Explained",
              url: "https://www.youtube.com/watch?v=4tE2C8z5YH0",
              channel: "Grafana",
              duration: "10m",
            },
            {
              id: "prometheus-nana",
              title: "Prometheus Tutorial - Monitoring & Alerting",
              url: "https://www.youtube.com/watch?v=7gW5pSM6dlU",
              channel: "TechWorld with Nana",
              duration: "1h",
            },
            {
              id: "grafana-nana",
              title: "Grafana Tutorial for Beginners",
              url: "https://www.youtube.com/watch?v=fHFmKX9OrBw",
              channel: "TechWorld with Nana",
              duration: "45m",
            },
          ],
        },
      ],
    },
  ],
};
