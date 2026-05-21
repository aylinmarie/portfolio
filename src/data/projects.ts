export interface ProjectDetail {
  role: string
  image?: { src: string; alt: string }
  approach: { heading: string; body: string }[]
  outcome: string[]
}

export interface Project {
  name: string
  description: string
  tags: string[]
  url: string | null
  slug?: string
  detail?: ProjectDetail
}

export const projects: Project[] = [
  {
    name: 'Knit Gauge Converter',
    description:
      'Web app that helps knitters substitute yarns by estimating gauge adjustments and needle recommendations. Features Ravelry pattern import and AI-powered guidance via Claude.',
    tags: ['Next.js', 'React', 'Supabase', 'Claude AI'],
    url: 'https://knit-gauge-converter.vercel.app/',
  },
  {
    name: 'Elegant Knit',
    description:
      'Personal inspiration board for saving favorite modern knit patterns, built with the Ravelry API.',
    tags: ['React', 'Material UI', 'Ravelry API'],
    url: 'https://elegant-knit.vercel.app/',
  },
  {
    name: 'Mailchimp Design System',
    description:
      "Engineering Tech Lead. Component library and design token architecture built for accessibility, scale, and cross-team consistency across Mailchimp's product suite.",
    tags: ['React', 'TypeScript', 'Storybook', 'CSS Variables', 'Vite', 'a11y'],
    url: null,
    slug: 'mailchimp-design-system',
    detail: {
      role: 'Engineering Tech Lead. Led the team that built the component library and token architecture used across all Mailchimp product surfaces.',
      approach: [
        {
          heading: 'Token architecture',
          body: 'Implemented a two-tier token system: primitive tokens defining the raw palette and spacing scale, and semantic tokens aliasing them to component-level roles. This let themes swap cleanly without touching component code, and gave designers and engineers a shared vocabulary for decisions across teams.',
        },
        {
          heading: 'Component API design',
          body: 'Led API design reviews so component interfaces stayed consistent, composable, and accessible by default. Wrote the contribution guide and review process that engineers across multiple product teams adopted to cut review cycles and reduce integration friction.',
        },
        {
          heading: 'Accessibility pipeline',
          body: 'Led accessibility testing with Fable on the design system component library against WCAG 2.1 AA criteria. Documented accessible usage patterns for every component in the library.',
        },
      ],
      outcome: [
        'Adopted by all new Mailchimp product surfaces as the baseline UI foundation.',
        'Reduced design inconsistency bugs reported across product teams after rollout.',
        'Multiple teams shipped accessible UI without additional accessibility review cycles.',
        'Cross-functional contribution model brought engineers from 4+ teams with zero breaking changes.',
      ],
    },
  },
  {
    name: 'Intuit Mailchimp App Redesign',
    description:
      'Staff Software Engineer. Led the technical implementation of the Mailchimp app redesign, directing 8 engineers across 21 releases to deliver 686 development tickets, 221 critical bug fixes, and 50+ new core UI components.',
    tags: ['React', 'TypeScript', 'UI Components', 'CSS Theming', 'Technical Leadership'],
    url: null,
    slug: 'mailchimp-app-redesign',
    detail: {
      role: 'Led the technical implementation of the Intuit Mailchimp app redesign with a team of 8 engineers, starting February 2025.',
      image: {
        src: '/mailchimp-app-redesign.png',
        alt: 'Mailchimp app redesign showing the new navigation and home screen',
      },
      approach: [
        {
          heading: 'Ecosystem integration',
          body: "Led the strategic alignment of Mailchimp's UI architecture with the Intuit global ecosystem. Standardized iconography and design tokens for cross-platform consistency and shared library interoperability across Intuit products.",
        },
        {
          heading: 'Release engineering',
          body: 'Directed a team of 8 engineers across 21 releases and managed a pipeline of 686 development tickets. Structured triage kept the release cadence on schedule.',
        },
        {
          heading: 'Component delivery',
          body: 'Directed the design and delivery of 50+ new core UI components as part of the product redesign. Shipped alongside 221 critical bug fixes across all 21 releases.',
        },
      ],
      outcome: [
        '686 development tickets delivered across 21 releases.',
        '221 critical bug fixes shipped across the rollout.',
        '50+ new core UI components delivered as part of the product redesign.',
        'Mailchimp UI architecture standardized with the Intuit global design system tooling.',
      ],
    },
  },
  {
    name: 'This Portfolio',
    description:
      'Built with Vite and React. Substack posts fetched at build time via a custom Vite plugin. Fully static and deployed on Vercel.',
    tags: ['Vite', 'React', 'CSS Modules'],
    url: 'https://github.com/aylinmarie/portfolio',
  },
]
