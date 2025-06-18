import { useState } from "react";

type Tab = {
  key: string;
  label: string;
  count?: number;
};

const tabs: Tab[] = [
  { key: "new", label: "NEW", count: 162 },
  { key: "todo", label: "TODO", count: 38 },
  { key: "distributed", label: "DISTRIBUTED", count: 926 },
];

export default function TabNav() {
  const [active, setActive] = useState<string>(tabs[0].key);

  return (
    <nav className="gap-4 hidden md:flex">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          className={`flex items-center px-2 py-1 rounded transition-colors text-xs font-semibold
            text-[var(--color-dark)] dark:[var(--color-dark)] hover:text-yellow-600 dark:hover:text-yellow-200
            ${active === tab.key ? "text-yellow-700 dark:text-yellow-300" : ""}`}
          onClick={() => setActive(tab.key)}
          type="button"
        >
          <span>{tab.label}</span>
          {tab.count !== undefined && (
            <span
              className="ml-1 px-1.5 rounded-full text-[11px] font-bold
              bg-[#353945] dark:bg-gray-700 text-white dark:text-gray-200"
            >
              {tab.count}
            </span>
          )}
        </button>
      ))}
    </nav>
  );
}