import React from 'react';

export default function GroupsList() {
  const groups = [
    {
      id: 1,
      name: "Amateurs d'immobilier",
      members: 1250,
      image: "https://via.placeholder.com/100",
      posts: [
        {
          id: 101,
          author: "Marie Dupont",
          avatar: "https://via.placeholder.com/40",
          time: "il y a 3h",
          content: "Je viens de visiter un appartement incroyable dans le 6ème arrondissement !",
          image: "https://via.placeholder.com/600x400",
          likes: 24,
          comments: 7
        },
        {
          id: 102,
          author: "Thomas Martin",
          avatar: "https://via.placeholder.com/40",
          time: "il y a 1j",
          content: "Quelqu'un connaît un bon agent immobilier sur Lyon ?",
          likes: 5,
          comments: 12
        }
      ]
    },
    {
      id: 2,
      name: "Propriétaires et locataires",
      members: 3420,
      image: "https://via.placeholder.com/100",
      posts: [
        {
          id: 201,
          author: "Sophie Dubois",
          avatar: "https://via.placeholder.com/40",
          time: "il y a 5h",
          content: "Conseils pour réduire sa facture d'électricité pendant l'hiver",
          image: "https://via.placeholder.com/600x400",
          likes: 45,
          comments: 18
        },
        {
          id: 202,
          author: "Lucas Bernard",
          avatar: "https://via.placeholder.com/40",
          time: "il y a 2j",
          content: "Problème d'humidité dans mon appartement, comment le résoudre ?",
          likes: 12,
          comments: 23
        }
      ]
    },
    {
      id: 3,
      name: "Investisseurs immobiliers",
      members: 890,
      image: "https://via.placeholder.com/100",
      posts: [
        {
          id: 301,
          author: "Pierre Moreau",
          avatar: "https://via.placeholder.com/40",
          time: "il y a 1j",
          content: "Rendement locatif moyen dans le centre de Paris en 2023",
          image: "https://via.placeholder.com/600x400",
          likes: 32,
          comments: 15
        }
      ]
    }
  ];

  return (
    <main className="flex-1 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <h2 className="text-xl font-bold mb-4">Mes groupes</h2>
        
        {groups.map(group => (
          <div key={group.id} className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-14 h-14 rounded-lg bg-gray-300 overflow-hidden">
                <img src={group.image} alt={group.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{group.name}</h3>
                <p className="text-sm text-gray-500">{group.members} membres</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {group.posts.map(post => (
                <div key={post.id} className="bg-white rounded-lg shadow overflow-hidden relative">
                  <button 
                    className="absolute top-3 right-3 text-gray-500 hover:text-blue-600 bg-white rounded-full p-1 shadow"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
                    </svg>
                  </button>
                  
                  <div className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                        <img src={post.avatar} alt={post.author} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="font-medium">{post.author}</div>
                        <div className="text-xs text-gray-500">{post.time}</div>
                      </div>
                    </div>
                    <p className="mt-3">{post.content}</p>
                  </div>
                  
                  {post.image && (
                    <div className="relative">
                      <img src={post.image} alt="" className="w-full h-64 object-cover" />
                    </div>
                  )}
                  
                  <div className="p-4 border-t border-gray-100">
                    <div className="flex space-x-4">
                      <div className="flex items-center space-x-1 text-gray-500">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                        </svg>
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-500">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
                        </svg>
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
