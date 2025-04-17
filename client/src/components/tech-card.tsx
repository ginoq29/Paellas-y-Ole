import { ReactNode } from "react";

interface TechCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export function TechCard({ title, description, icon }: TechCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-neutral-medium text-sm">
        {description}
      </p>
    </div>
  );
}

export default TechCard;
