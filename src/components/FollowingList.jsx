import React, { useState } from 'react';

export default function FollowingList() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const following = [
    { id: 1, name: 'Antoine Dupont', avatar: 'https://via.placeholder.com/40', status: 'online' },
    { id: 2, name: 'Marie Laurent', avatar: 'https://via.placeholder.com/40', status: 'offline' },
    { id: 3, name: 'Paul Mercier', avatar: 'https://via.placeholder.com/40', status: 'online' },
    { id: 4, name: 'Claire Rousseau', avatar: 'https://via.placeholder.com/40', status: 'offline' },
    { id: 5, name: 'Julien Leroy', avatar: 'https://via.placeholder.com/40', status: 'online' },
    { id: 6, name: 'Émilie Girard', avatar: 'https://via.placeholder.com/40', status: 'online' },
    { id: 7, name: 'Thomas Morel', avatar: 'https://via.placeholder.com/40', status: 'offline' },
    { id: 8, name: 'Camille Fournier', avatar: 'https://via.placeholder.com/40', status: 'online' },
  ];

  // Filtrer les personnes suivies en fonction de la recherche
  const filteredFollowing = following.filter(
    person => person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="flex-1 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-800">Personnes que je suis</h2>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <input
                type="text"
                className="w-40 px-3 py-1 pl-8 text-sm border rounded-full bg-gray-50"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg className="w-4 h-4 text-gray-400 absolute left-2 top-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div className="text-xs px-2 py-1 bg-red-50 text-red-600 font-medium rounded-full">{following.length}</div>
          </div>
        </div>
        
        <div className="p-2">
          {filteredFollowing.map(person => (
            <div 
              key={person.id} 
              className="flex items-center p-2 rounded-md hover:bg-gray-50 transition-colors"
            >
              <div className="relative mr-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-red-100">
                  <img src={person.avatar} alt={person.name} className="w-full h-full object-cover" />
                </div>
                {person.status === 'online' && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm text-gray-800 truncate">{person.name}</div>
                <div className="text-xs text-gray-500 flex items-center">
                  <span className={`inline-block w-1.5 h-1.5 rounded-full mr-1 ${person.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                  {person.status === 'online' ? 'En ligne' : 'Hors ligne'}
                </div>
              </div>
              <button className="ml-2 bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-medium hover:bg-red-100 transition-colors">
                Ne plus suivre
              </button>
            </div>
          ))}
          
          {filteredFollowing.length === 0 && (
            <div className="text-center py-4 text-gray-500 text-sm">
              Aucune personne trouvée
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

