'use client'; // Enables client-side rendering

import React, { useState } from 'react';
import Form from 'next/form'; // Import Next.js Form component
import { Search, X } from 'lucide-react';

const SearchBar = () => {
    const [query, setQuery] = useState(''); // Manage the search input state

    // Update query state when the input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    // Clear the search input field
    const handleClear = () => {
        setQuery('');
    };

    // Handle form submission
    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const searchQuery = formData.get('query') as string;
        if (searchQuery.trim()) {
            console.log(`Searching for: ${searchQuery}`); // Replace with your actual search logic
        }
    };

    return (
        <Form
            action="/" // The target endpoint for your search logic
            // onSubmit={handleSearch}
            className="search-form"
        >
            {/* Search Input */}
            <input
                type="text"
                name="query"
                value={query}
                onChange={handleInputChange}
                className="search-input"
                placeholder="Search for something..."
            />

            {/* Clear All Button */}
            {query && (
                <button
                    type="button"
                    onClick={handleClear}
                    className='search-btn text-white'        >
                    <X size={25} />
                </button>
            )}

            {/* Search Button */}
            <button
                type="submit"
                className='search-btn text-white'      >
                <Search size={25} />
            </button>
        </Form>
    );
};

export default SearchBar;
