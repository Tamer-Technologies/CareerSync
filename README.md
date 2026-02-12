# CareerSync

A job tracking application built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.  
The project focuses on clean architecture, realistic data flow, and scalable frontend patterns rather than feature bloat.

## ✨ Features

- Browse tracked job applications
- View detailed information for each job
- Clear separation between list and details views
- Reusable and composable UI components
- Accessible and SEO-friendly pages
- Mocked data structured to be API-ready

## 🧱 Tech Stack

- **Next.js 15** (App Router, Server Components)
- **TypeScript**
- **Tailwind CSS**
- **Shadcn**
- **Lucide Icons**

## 🧩 TypeScript Philosophy

The following principles guided all TypeScript decisions in this project:

### 1. `type` vs `interface`

- Use **`type`** when defining a closed unit that is unlikely to change  
  (e.g. domain values, unions, visual mappings)
- Use **`interface`** when:
  - Extending existing types
  - Defining component props
  - Expecting future extension

This improves readability and long-term maintainability.

### 2. Domain Types vs UI Types

All domain-related types (Jobs, Status, Metadata) live outside components.

Components:

- Consume types
- Do not define business meaning

This keeps UI flexible and domain logic reusable across pages.
