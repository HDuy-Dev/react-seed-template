# React Seed Template

This is a template for starting React projects using some of the best tools available in the ecosystem. The template is optimized for modern JavaScript development and includes a pre-configured setup to speed up your development process.

## Key Features

### Core Setup

- **Vite + JavaScript**: A fast and modern build tool for React projects with hot module replacement and optimized performance.

### Tools Included

1. **Tailwind CSS**: A utility-first CSS framework for rapid UI development with a responsive design system.
2. **React Router**: A powerful routing library for handling dynamic and nested routes in your React applications.
3. **Storybook**: A tool for building and showcasing individual UI components in isolation, making it easy to develop and test components.
4. **TanStack Query**: A powerful tool for managing server-state in React apps, including data fetching, caching, and synchronization.
5. **tailwind-merge**: A utility for intelligently merging Tailwind CSS classes to avoid conflicts and redundancy.
6. **Class Variance Authority (CVA)**: A utility for managing complex className logic in a structured way, especially useful with Tailwind CSS.
7. **clsx**: A small utility for conditionally combining classNames in React components.
8. **React Error Boundary**: A library for gracefully handling JavaScript errors in React components.
9. **shadcn UI**: A set of beautifully designed, accessible components built with Tailwind CSS for rapid development.
10. **Prettier**: A code formatter that enforces consistent coding style across your project.
11. **ESLint**: A linter to ensure code quality and consistency by identifying problematic patterns in your JavaScript code.

### Project Structure

The project is organized into the following structure for scalability and maintainability:

```
project-root/
├── src/
│   ├── app/                # Main application logic and pages
│   ├── assets/             # Static assets like images, fonts, etc.
│   ├── components/        # Reusable React components
│   ├── utils/             # Utility functions and helpers
│   ├── config/            # Configuration files for the project
│   ├── features/          # Feature-specific modules
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Shared libraries and modules
│   ├── test/              # Test utilities and mock data
```

### Absolute Path Setup

The project has been pre-configured to use absolute paths. You can import modules from the `src` folder using the `@` alias. For example:

```javascript
import Button from '@/components/Button';
import useFetch from '@/hooks/useFetch';
```

## Usage

To create a new project using this template, run the following command:

```bash
npx react-seed-template [project-name]
```

Replace `[project-name]` with the desired name of your new project.

The command will:

1. Clone this template repository.
2. Set up the project in the specified folder.
3. Install dependencies using `yarn`.

Once the setup is complete, you can navigate to the project folder and start the development server:

```bash
cd [project-name]
yarn dev
```

Your project is now ready to use!
