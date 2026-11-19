export const caseStudies = {
  icsh: {
    title: "ICSH — Digital Transformation and Workflow Automation",
    client: "Islamic and Cultural Society of Harrow",
    type: "Website Modernisation, Full-Stack Systems Development, CRM Integration and Process Automation",
    intro: [
      "Led the digital transformation of the Islamic and Cultural Society of Harrow (ICSH), modernising its website and coordinating the development of an integrated digital platform for membership management, event bookings, online payments, communications and internal administration.",
      "Using AI-assisted development, workflow design, third-party API integrations and iterative testing, I helped transform previously manual administrative activities into connected digital processes.",
    ],
    sections: [
      { title: "Membership, payments & communications", paragraphs: ["The project included creating an automated membership registration and renewal system, integrating customer records with Zoho Bigin CRM, connecting Stripe for secure online payments, developing automated email communications, and implementing event management and booking capabilities."] },
      { title: "A restricted Events Hub", paragraphs: ["I also coordinated the development of a restricted Events Hub that enables authorised organisers to manage event information, booking forms, ticket pricing, capacity limits, guest registrations, planning tasks and financial summaries without requiring direct access to the underlying website code."] },
      { title: "Refinement, testing & deployment", paragraphs: ["Additional work included improving responsive page layouts, introducing consistent branding, enhancing form validation, resolving production issues, standardising UK date formats and coordinating software deployment through GitHub and Vercel."] },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "Stripe", "Zoho Bigin", "Zoho CPaaS", "WhatsApp integrations", "GitHub", "Vercel", "Canva", "ChatGPT"],
    competencies: ["Digital transformation", "AI-assisted software development", "Business process automation", "Systems integration", "User experience design", "Requirements gathering", "Software testing", "Troubleshooting", "Technical project coordination"],
    link: "https://icsh.org.uk",
    linkLabel: "Visit icsh.org.uk",
  },
  "the-table": {
    title: "The Table — From Everyday Need to Commercial Web App",
    client: "Unmake Studio · Independent product",
    type: "Digital Product Creation, Full-Stack Web App Development, E-commerce Integration and Automated Buyer Access",
    intro: [
      "Created The Table, a meal-planning and grocery-list web app, from an everyday need for a simpler way to decide what to cook and remember what to buy. I developed the product and its sales website under Unmake Studio, using AI-assisted development to turn a personal workflow into a commercial digital product.",
      "The project brought together product requirements, interface design, household data, payment processing, account access, email communications and deployment. The goal was a focused app that people could use without navigating a complicated dashboard.",
    ],
    sections: [
      { title: "A focused meal-planning product", paragraphs: ["Built weekly meal planning, grocery lists, an inventory of main ingredients, saved favourites and custom menus for different dietary needs or preferences. Added customisable mealtimes and colour themes so users could adapt the app to the way their household plans meals.", "Refined layouts, spacing, buttons and mobile behaviour through repeated use and feedback, keeping the interface consistent with the Unmake Studio website."] },
      { title: "A sales website & Paddle checkout", paragraphs: ["Created a dedicated product page explaining the app, its features and the one-time purchase. Integrated Paddle so buyers could purchase without signing in first, then create an account using their checkout email.", "Connected signed payment webhooks to the backend to support automatic buyer access, keeping payment confirmation separate from the public checkout interface."] },
      { title: "Private household access & invitations", paragraphs: ["Implemented accounts and household-based access backed by Supabase, with database access controls designed to keep each household’s data separate. Built an invitation flow for household owners to add members by email.", "Improved the invitation experience with a prefilled email address, password setup for new members, identifiable member emails, and an option for members to leave a household themselves."] },
      { title: "Email workflows & everyday access", paragraphs: ["Configured branded authentication emails through Resend and Supabase, covering account confirmation, invitations, email changes and password resets. Added emailed household invitations and account controls for changing email or resetting a password.", "Built a first-sign-in welcome experience, theme selection and guidance for adding The Table to a phone’s home screen, with returning users directed to the app."] },
      { title: "Testing, troubleshooting & release", paragraphs: ["Worked through real purchase and onboarding flows, resolved authentication redirects and expired-link handling, and refined checkout and account setup. Coordinated source changes and production deployments through GitHub and Vercel, with checks around invitation handling and household access."] },
    ],
    technologies: ["ChatGPT", "Next.js", "React", "Supabase", "Paddle", "Resend", "GitHub", "Vercel"],
    competencies: ["Product development", "AI-assisted software development", "User experience design", "E-commerce integration", "Webhook integration", "Authentication & access control", "Workflow automation", "Email integration", "Software testing", "Troubleshooting", "Deployment coordination"],
    link: "https://www.un-make.com/table",
    linkLabel: "Explore The Table",
  },
};
