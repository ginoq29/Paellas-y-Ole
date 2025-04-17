import { ReactNode } from "react";

interface StructureCardProps {
  title: string;
  description: string;
  codeExample: string;
  icon: ReactNode;
  iconBgColor: string;
  iconTextColor: string;
}

export function StructureCard({
  title,
  description,
  codeExample,
  icon,
  iconBgColor,
  iconTextColor,
}: StructureCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center mb-4`}>
          <div className={`${iconTextColor}`}>
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-neutral-medium mb-4">
          {description}
        </p>
        <div className="bg-gray-50 p-3 rounded-md">
          <code className="text-xs font-mono text-neutral-dark block">
            <pre>{codeExample}</pre>
          </code>
        </div>
      </div>
    </div>
  );
}

export default StructureCard;
