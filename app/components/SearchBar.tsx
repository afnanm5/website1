// app/components/SearchBar.tsx
'use client'

export default function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className="mb-4">
            <input
                type="text"
                className="p-2 rounded-lg"
                placeholder="Search Projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
}
