import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

export const LandingRoute = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold mb-4">
          Welcome to React Seed Template
        </h1>
        <p className="text-lg">
          Get started by editing this page or adding a new route in{' '}
          <code className="bg-black text-white px-2 py-1 rounded">
            router.jsx
          </code>
          .
        </p>
      </header>

      <Card className="w-full max-w-md p-5 bg-white text-black shadow-md rounded-lg">
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>
            Follow the instructions below to explore the template.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Edit the{' '}
              <code className="bg-gray-100 text-black px-2 py-1 rounded">
                LandingPage.jsx
              </code>{' '}
              file to customize this page.
            </li>
            <li>
              Add a new route in{' '}
              <code className="bg-gray-100 text-black px-2 py-1 rounded">
                router.jsx
              </code>{' '}
              to create a new page.
            </li>
            <li>
              Use Tailwind CSS for styling and explore Shadcn components for
              building UI.
            </li>
          </ul>
        </CardContent>
      </Card>

      <footer className="mt-10">
        <Button
          variant="default"
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2"
        >
          Explore Components
        </Button>
      </footer>
    </div>
  );
};
