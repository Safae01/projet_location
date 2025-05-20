import React from 'react';

export default function FollowingList() {
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

  return (
    <main className="flex-1 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <h2 className="text-xl font-bold mb-4">Personnes que je suis</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {following.map(person => (
            <div key={person.id} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                  <img src={person.avatar} alt={person.name} className="w-full h-full object-cover" />
                </div>
                {person.status === 'online' && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></div>
                )}
              </div>
              <div>
                <div className="font-medium">{person.name}</div>
                <div className="text-sm text-gray-500">{person.status === 'online' ? 'En ligne' : 'Hors ligne'}</div>
              </div>
              <button className="ml-auto bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm hover:bg-red-200">
                Ne plus suivre
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}