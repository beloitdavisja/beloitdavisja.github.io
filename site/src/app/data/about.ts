export interface SkillGroup {
  name: string;
  items: string[];
}

export const about = {
  paragraphs: [
    'I\'m a software engineer with 20+ years of experience building and modernizing eRSP, a healthcare SaaS platform used by 1,000+ home-care agencies and 30,000+ caregivers for scheduling, payroll, billing, insurance claims, and EVV compliance.',
    'My day-to-day is Java and Spring Boot on Azure Kubernetes Service. I\'ve rebuilt legacy Windows services as containerized Spring Boot services, built CI/CD pipelines across 50+ repositories with GitHub Actions, led application security remediation, and cut release prep from two days to a few hours.',
    'I also build mobile apps, with years of iOS and Android work in Ionic, NativeScript, and React Native. I mentor engineers, lead code reviews, and care about automated testing.',
  ],
  skills: [
    { name: 'Languages', items: ['Java', 'C#', 'T-SQL', 'TypeScript', 'JavaScript', 'CFML'] },
    { name: 'Backend', items: ['Spring Boot', 'REST APIs', 'Microservices', 'RabbitMQ'] },
    {
      name: 'Cloud & DevOps',
      items: ['Azure', 'AKS / Kubernetes', 'Docker', 'GitHub Actions', 'Jenkins', 'Maven'],
    },
    { name: 'Data', items: ['SQL Server', 'Azure SQL Managed Instance', 'Redis'] },
    {
      name: 'Frontend & Mobile',
      items: ['React Native', 'Angular', 'Flutter', 'NativeScript', 'Ionic'],
    },
    {
      name: 'Practices',
      items: ['JUnit / TestBox', 'Application security', 'Code review', 'Mentoring'],
    },
  ] satisfies SkillGroup[],
};
