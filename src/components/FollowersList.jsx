import React from 'react';

export default function FollowersList() {
  const followers = [
    { id: 1, name: 'Sophie Lefebvre', avatar: 'https://via.placeholder.com/40', status: 'online' },
    { id: 2, name: 'Lucas Bernard', avatar: 'https://via.placeholder.com/40', status: 'offline' },
    { id: 3, name: 'Emma Petit', avatar: 'https://via.placeholder.com/40', status: 'online' },
    { id: 4, name: 'Hugo Dubois', avatar: 'https://via.placeholder.com/40', status: 'online' },
    { id: 5, name: 'Léa Moreau', avatar: 'https://via.placeholder.com/40', status: 'offline' },
    { id: 6, name: 'Gabriel Roux', avatar: 'https://via.placeholder.com/40', status: 'online' },
    { id: 7, name: 'Camille Martin', avatar: 'https://via.placeholder.com/40', status: 'offline' },
    { id: 8, name: 'Thomas Dubois', avatar: 'https://via.placeholder.com/40', status: 'online' },
    { id: 9, name: 'Julie Lambert', avatar: 'https://via.placeholder.com/40', status: 'online' },
    { id: 10, name: 'Nicolas Fournier', avatar: 'https://via.placeholder.com/40', status: 'offline' },
  ];

  return (
    <main className="flex-1 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <h2 className="text-xl font-bold mb-4">Mes abonnés</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {followers.map(follower => (
            <div key={follower.id} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                  <img src={follower.avatar} alt={follower.name} className="w-full h-full object-cover" />
                </div>
                {follower.status === 'online' && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></div>
                )}
              </div>
              <div>
                <div className="font-medium">{follower.name}</div>
                <div className="text-sm text-gray-500">{follower.status === 'online' ? 'En ligne' : 'Hors ligne'}</div>
              </div>
              <button className="ml-auto bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm hover:bg-blue-200">
                Suivre
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}