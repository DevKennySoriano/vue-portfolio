import { ref } from 'vue'

export function useExperienceTimeline() {
  const expandedIndex = ref(-1)

  const timeline = [
    {
      period: '2026',
      title: 'OJT Intern - Product Development',
      company: 'Wizzard Technologies Inc.',
      duration: 'Completed 300 hours',
      dateRange: 'January 2026 - March 2026',
      facebook: 'https://www.facebook.com/wtiwizzard',
      maps: 'https://www.google.com/maps/place/Wizzard+Technologies,+Inc./@14.5845565,121.0600478,17z/data=!3m1!4b1!4m6!3m5!1s0x3397c81136017fcd:0x99ee0dccd4b379b9!8m2!3d14.5845565!4d121.0626227!16s%2Fg%2F11f_p7ql63?entry=ttu&g_ep=EgoyMDI2MDMyOS4wIKXMDSoASAFQAw%3D%3D',
      tech: [
        { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Vue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
        { name: 'Nuxt UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
        { name: 'Tailwind', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
        { name: 'Node', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
      ],
      description:
        'Completed a 300-hour On-the-Job Training at Wizzard Technologies Inc. as a requirement for my BS Computer Science degree at STI College. I was given backend tasks like system logic, database work, and server-side coding. I also worked with a team to build and complete a full system in a professional setting.',
    },
    {
      period: '2025',
      title: 'Front End Development Libraries',
      company: 'FreeCodeCamp',
      duration: 'Completed 300 hours',
      dateRange: 'July 2025',
      description:
        'Completed comprehensive Front End Development Libraries course on FreeCodeCamp with 300 hours of self-paced learning. Mastered modern JavaScript frameworks and libraries with hands-on projects. Developed proficiency in building interactive and responsive user interfaces with industry-standard tools.',
      tech: [
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      ],
      freecodecamp: 'https://www.freecodecamp.org/',
      isSimple: false,
    },
    {
      period: '2024 - 2025',
      title: 'Programming, Networking, and Cybersecurity Foundations',
      company: 'STI College',
      sti: 'https://www.sti.edu/',
      dateRange: '2024',
      description:
        'At STI College, I developed practical software skills in Python and PHP, gained exposure to cybersecurity principles aligned with ISO standards, and strengthened my understanding of networking concepts such as IPv4 and IPv6.',
      tech: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'Cybersecurity', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
        { name: 'IPv4', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg' },
        { name: 'IPv6', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/networkx/networkx-original.svg' },
      ],
      isSimple: false,
    },
    {
      period: '2023',
      title: 'Data Structures and Algorithms',
      company: 'STI College',
      sti: 'https://www.sti.edu/',
      dateRange: '2023',
      description:
        'My coursework at STI College focused on core data structures and algorithmic thinking, supported by hands-on practice in sorting techniques and performance-oriented problem solving.',
      tech: [
        { name: 'Algorithms', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
        { name: 'Sorting', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
        { name: 'Data Structures', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      ],
      isSimple: false,
    },
    {
      period: '2022 - 2023',
      title: 'Oracle Java Fundamentals',
      company: 'STI College',
      sti: 'https://www.sti.edu/',
      dateRange: '2022 - 2023',
      description:
        'Through Oracle Java Fundamentals at STI College, I built a strong foundation in object-oriented programming, data structures, and Java best practices, including exception handling, collections, and multithreading.',
      tech: [
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'OOP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Collections', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'Exceptions', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      ],
      isSimple: false,
    },
    {
      period: '2021',
      title: 'Hello World',
      company: 'Started Learning Programming',
      sti: 'https://www.sti.edu/',
      w3schools: 'https://www.w3schools.com/',
      dateRange: '2021',
      description:
        'This stage marked the beginning of my programming journey, where I learned web development fundamentals and established the technical foundation that continues to support my growth in tech.',
      tech: [
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      ],
      isSimple: true,
    },
  ]

  const toggleExpand = (index) => {
    expandedIndex.value = expandedIndex.value === index ? -1 : index
  }

  return {
    expandedIndex,
    timeline,
    toggleExpand,
  }
}