import { Button } from "@/components/ui/button";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                Welcome to PostIQ Social
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-[600px]">
                Aggregate insights from your favorite tech blogs including Medium, Dev.to, and StackOverflow.
                AI-powered summaries at your fingertips.
            </p>
            <div className="flex gap-4">
                <Button size="lg">Get Started</Button>
                <Button size="lg" variant="outline">Learn More</Button>
            </div>

            <div className="mt-12 p-6 border rounded-lg bg-white shadow-sm max-w-2xl w-full">
                <h2 className="text-2xl font-semibold mb-4">Architecture Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div className="p-4 bg-slate-50 rounded">
                        <h3 className="font-medium mb-1">Frontend</h3>
                        <p className="text-sm text-slate-600">Vite + React + Tailwind + Shadcn UI</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded">
                        <h3 className="font-medium mb-1">Routing</h3>
                        <p className="text-sm text-slate-600">React Router Dom v7</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded">
                        <h3 className="font-medium mb-1">State</h3>
                        <p className="text-sm text-slate-600">React Context / Hooks</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded">
                        <h3 className="font-medium mb-1">Structure</h3>
                        <p className="text-sm text-slate-600">Feature-based & Modular</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
