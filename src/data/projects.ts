export interface RelatedWork {
  name: string
  tags: string[]
  image?: { src: string; alt: string }
  approach: { heading: string; body: string }[]
  outcome: string[]
}

export interface ProjectDetail {
  role: string
  image?: { src: string; alt: string }
  approach: { heading: string; body: string }[]
  outcome: string[]
  related?: RelatedWork[]
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
    name: 'Mailchimp Design System',
    description:
      "Engineering Tech Lead. Led design system engineering at Intuit Mailchimp, including the component library and token architecture, CSS variable dark mode, and the 2025 product redesign.",
    tags: ['React', 'TypeScript', 'CSS Variables', 'Design Tokens', 'Storybook', 'a11y', 'Technical Leadership'],
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
      related: [
        {
          name: 'Intuit Mailchimp App Redesign',
          tags: ['React', 'TypeScript', 'UI Components', 'CSS Theming', 'Technical Leadership'],
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
        {
          name: 'Dark Mode',
          tags: ['CSS Variables', 'Design Tokens', 'CSS Theming'],
          approach: [
            {
              heading: 'Token package integration',
              body: "Pulled in the Intuit Design System token package and mapped its global primitive tokens to Mailchimp's semantic CSS variable layer. This gave both light and dark values a single source of truth tied to the Intuit ecosystem.",
            },
            {
              heading: 'CSS variable architecture',
              body: 'Implemented runtime theme switching using CSS custom properties scoped to a data attribute on the root element. Component code required no changes to support dark mode. Theming is handled entirely at the token layer.',
            },
            {
              heading: 'Surface migration',
              body: "Audited Mailchimp's product surfaces for raw color values and migrated them to the semantic token layer as part of the rollout. This brought each surface into compliance with the new theming architecture.",
            },
          ],
          outcome: [
            'Dark mode shipped across Mailchimp product surfaces.',
            'Zero component code changes required. Theme switching is handled at the CSS variable layer.',
            "Mailchimp's token architecture aligned with the Intuit Design System token package.",
            'Raw color values replaced with semantic tokens across migrated product surfaces.',
          ],
        },
      ],
    },
  },
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
    name: 'This Portfolio',
    description:
      'Built with Vite and React. Substack posts fetched at build time via a custom Vite plugin. Fully static and deployed on Vercel.',
    tags: ['Vite', 'React', 'CSS Modules'],
    url: 'https://github.com/aylinmarie/portfolio',
  },
]
