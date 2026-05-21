---
name: add-project
description: Add a new project entry to src/data/projects.ts. Prompts for name, role, tags, URL or slug, approach blocks, and outcome bullets. Applies anti-AI writing rules automatically.
---

When invoked, ask the user for:
1. Project name
2. Their role/title
3. Tags (comma-separated)
4. External URL, or null if it is an internal case study (if null, generate a slug from the project name)
5. Approach blocks (1-3): heading + body for each
6. Outcome bullets (3-5 specific, measurable results)

Writing rules — apply to every field, no exceptions:
- No em dashes. Use periods to break clauses.
- No "to ensure / ensuring". Rewrite as a direct statement.
- No trailing -ing participials ("reducing X", "managing Y"). Convert to a new sentence.
- No puffery: "high-velocity", "groundbreaking", "vibrant", "pivotal", "crucial", "tapestry", "underscore", "testament", "seamless".
- No vague trailing purpose clauses: "to modernize X", "to drive consistency".
- Use specific numbers and facts wherever the user provides them.
- Prefer short sentences and periods over complex clause chains.

Once you have all inputs, append the new project to the `projects` array in `src/data/projects.ts`, inserting it before the "This Portfolio" entry. Then run `npm run build` to confirm it type-checks.
