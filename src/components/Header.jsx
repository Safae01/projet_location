import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow px-4 py-3 flex justify-between items-center sticky top-0 z-10">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-blue-600">Locabook</h1>
      </div>
      <div className="flex-1 max-w-xl mx-4">
        <div className="relative">
          <input className="w-full px-4 py-2 pl-10 border rounded-full bg-gray-100" placeholder="Rechercher sur Facebook" />
          <svg className="w-5 h-5 text-gray-500 absolute left-3 top-2.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        </div>
      </div>
      <div className="flex items-center space-x-2">
      <button className="p-2 bg-gray-200 rounded-full">
      <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>        </button>
        <button className="p-2 bg-gray-200 rounded-full">
          <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
        </button>
        <button className="p-2 bg-gray-200 rounded-full">
          <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"></path><path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path></svg>
        </button>
        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
          <img src="https://via.placeholder.com/40" alt="Profile" className="w-full h-full object-cover" />
        </div>
      </div>
    </header>
  );
}

