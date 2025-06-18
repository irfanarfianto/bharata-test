import { useState, FormEvent } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // handle search action here if needed
  };

  return (
    <form
      className="relative w-full md:max-w-xs"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <span className="absolute inset-y-0 left-2 flex items-center text-gray-500 dark:text-gray-400">
        <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeWidth={2}
            d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.5 6.5a7.5 7.5 0 0 0 10.6 10.6Z"
          />
        </svg>
      </span>
      <input
        value={search}
        onChange={handleChange}
        className="w-full pl-8 pr-3 py-2 bg-gray-100 dark:bg-[#232325] text-sm text-gray-800 dark:text-gray-200 rounded outline-none border border-transparent focus:border-yellow-300 transition"
        type="text"
        placeholder="Search for files, messages, reports etc."
      />
    </form>
  );
}