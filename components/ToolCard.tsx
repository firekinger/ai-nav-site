import Image from 'next/image';

interface ToolCardProps {
  tool: {
    id: number;
    name: string;
    description: string;
    url: string;
    icon: string;
    category: string;
    slug: string; // Ensure this is in your tools.json
  };
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <a
      href={`/tools/${tool.slug}`} // This is the corrected line
      className="flex flex-col items-start p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex items-center mb-4">
        <Image 
          src={tool.icon} 
          alt={`${tool.name} icon`} 
          width={40} 
          height={40} 
          className="rounded-lg" 
        />
        <h3 className="ml-4 text-xl font-semibold text-gray-900">{tool.name}</h3>
      </div>
      <p className="text-gray-600 mb-4 text-sm">{tool.description}</p>
      <div className="flex items-center justify-between w-full">
        <span className="text-xs text-gray-500 font-medium">
          {tool.category}
        </span>
      </div>
    </a>
  );
}