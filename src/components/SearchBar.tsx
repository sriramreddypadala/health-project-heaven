import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const SearchBar = ({ searchTerm, onSearchChange }: SearchBarProps) => {
  return (
    <div className="relative max-w-2xl mx-auto mb-16">
      <div className="relative group">
        <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 group-focus-within:text-teal-500 transition-colors duration-300" />
        <Input
          type="text"
          placeholder="Search healthcare projects..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-16 pr-8 py-6 text-lg bg-white/95 backdrop-blur-sm border-2 border-gray-200 rounded-full shadow-2xl focus:ring-4 focus:ring-teal-500/20 focus:border-teal-500 transition-all duration-300 hover:shadow-3xl hover:bg-white placeholder:text-gray-400"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default SearchBar;