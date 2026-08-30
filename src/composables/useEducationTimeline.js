export function useEducationTimeline() {
  const education = [
    {
      date: '2022 - 2026',
      title: 'Bachelor of Science in Computer Science',
      school: 'STI College - Novaliches, Quezon City',
      description:
        'Completed a degree in Computer Science with studies covering software development, cybersecurity fundamentals, ISO standards awareness, system design principles, and modern web technologies.',
      image: '/images/edu/stinova.webp',
    },
    {
      date: '2021 - 2022',
      title: 'Bachelor of Science in Computer Science',
      school: 'STI College - Calamba, Laguna',
      description:
        'Built a strong programming foundation through hands-on projects using multiple programming languages and core web technologies, focusing on problem-solving and application development.',
      image: '/images/edu/sticalamba.webp',
    },
    {
      date: '2019 - 2021',
      title: 'Senior High School - ICT Strand',
      school: 'Mabalacat National Senior High School - Dau, Mabalacat, Pampanga',
      description:
        'Specialized in Information and Communications Technology with practical experience in basic programming, computer systems, networking concepts, and technical fundamentals.',
      image: '/images/edu/shs.webp',
    },
  ]

  return {
    education,
  }
}