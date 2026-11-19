export const caseStudies = {
  icsh: {
    title: "ICSH — Digital Transformation and Workflow Automation",
    client: "Islamic and Cultural Society of Harrow",
    type: "Website Modernisation, Full-Stack Systems Development, CRM Integration and Process Automation",
    intro: [
      "Led the digital transformation of the Islamic and Cultural Society of Harrow (ICSH), modernising its website and coordinating the development of an integrated digital platform for membership management, event bookings, online payments, communications and internal administration.",
      "Using AI-assisted development, workflow design, third-party API integrations and iterative testing, I helped transform previously manual administrative activities into connected digital processes.",
    ],
    screenshots: [
      {
        src: "/images/portfolio/icsh-homepage.webp",
        width: 1800,
        height: 860,
        alt: "ICSH homepage with community photography and links for membership and events",
        caption: "Public website with clearer routes into membership and community events.",
      },
      {
        src: "/images/portfolio/icsh-organiser-workspace.webp",
        width: 1800,
        height: 809,
        alt: "ICSH organiser workspace showing separate entry points for the Admin Hub and Events Hub",
        caption: "Organiser workspace with separate access to administration and event management.",
      },
    ],
    sections: [
      {
        title: "Website redesign & community services",
        paragraphs: [
          "Modernised the public website with consistent ICSH branding, clearer navigation and calls to action, and layouts that work on mobile and desktop. Replaced a rotating homepage feature with a stable poster-based event display and gave donations and community services, including Rishta, clearer routes to online submissions.",
        ],
      },
      {
        title: "Membership, renewals & payments",
        paragraphs: [
          "Connected membership registration to Zoho Bigin CRM, with validation, duplicate checks, and support for paid and eligible free memberships. Coordinated rolling 12-month renewals with renewal history, early-renewal rules, and reminders that stop after verified payment.",
          "Integrated Stripe payment journeys for memberships, event tickets and donations. Automated booking confirmations after payment verification so incomplete checkouts weren’t treated as paid bookings.",
        ],
      },
      {
        title: "Reusable event bookings",
        paragraphs: [
          "Designed booking forms that calculate adult and child ticket prices based on the lead booker’s membership eligibility. The forms collect attendee names according to ticket quantities and apply a separate capacity limit for each event, with a message when bookings close.",
          "Digitised Harrow Food Festival participation and stall-hire applications, including fundraising options and notifications to the events team.",
        ],
      },
      {
        title: "A restricted Events Hub",
        paragraphs: [
          "Coordinated a self-service Events Hub where authorised organisers can update venues, pricing, booking forms, posters and menus. Planning tools help volunteers assign tasks, set deadlines and share files. Organisers can review attendance and revenue summaries, search submissions and export booking records as CSV.",
        ],
      },
      {
        title: "Communications & event publicity",
        paragraphs: [
          "Developed transactional email and application notification workflows, and assessed email and WhatsApp messaging options through Zoho CPaaS. Created reusable event publicity materials for the website, email and WhatsApp, including posters and clickable booking PDFs.",
        ],
      },
      {
        title: "Testing, release & ongoing operations",
        paragraphs: [
          "Used AI-assisted development and iterative testing to refine form validation, standardise UK date formats and troubleshoot issues with menu saving and booking status. Coordinated GitHub and Vercel releases and documented recurring infrastructure and messaging costs for the volunteer-led team.",
          "The project brought membership, bookings, payments, communications and reporting together while giving organisers tools to update event information directly.",
        ],
      },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "Stripe", "Zoho Bigin", "Zoho CPaaS", "WhatsApp integrations", "GitHub", "Vercel", "Canva", "ChatGPT"],
    competencies: ["Digital transformation", "AI-assisted software development", "Business process automation", "Systems integration", "User experience design", "Requirements gathering", "Software testing", "Troubleshooting", "Technical project coordination"],
    link: "https://icsh.org.uk",
    linkLabel: "Visit icsh.org.uk",
    report: "/portfolio/icsh-case-study.pdf",
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
