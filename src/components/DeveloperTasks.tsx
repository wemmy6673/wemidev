import React from 'react';

interface Task {
  title: string;
  tasks: string[];
}

const developerTasks: Task[] = [
  {
    title: "UI Development",
    tasks: [
      "Build responsive layouts",
      "Create reusable components",
      "Implement modern UI/UX designs",
      "Ensure accessibility standards"
    ]
  },
  {
    title: "Frontend Logic",
    tasks: [
      "Write clean TypeScript code",
      "Manage state and data flow",
      "Handle API integrations",
      "Optimize performance"
    ]
  }
];

const DeveloperTasks: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          My Development Focus
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {developerTasks.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300 border border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.tasks.map((task, taskIndex) => (
                  <li
                    key={taskIndex}
                    className="flex items-start group"
                  >
                    <span className="inline-block w-1.5 h-1.5 mt-2 mr-2 bg-purple-500 rounded-full group-hover:bg-purple-400 transition-colors"></span>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperTasks; 