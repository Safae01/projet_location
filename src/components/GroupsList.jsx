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
          comments: 7,
          details: {
            postType: "Appartement",
            location: "Paris 6ème",
            price: "1450",
            area: "65",
            durationType: "monthly"
          }
        },
        {
          id: 102,
          author: "Thomas Martin",
          avatar: "https://via.placeholder.com/40",
          time: "il y a 1j",
          content: "Quelqu'un connaît un bon agent immobilier sur Lyon ?",
          likes: 5,
          comments: 12,
          details: {
            postType: "Recherche",
            location: "Lyon",
            price: "",
            area: "",
            durationType: ""
          }
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
          comments: 18,
          details: {
            postType: "Conseil",
            location: "",
            price: "",
            area: "",
            durationType: ""
          }
        },
        {
          id: 202,
          author: "Lucas Bernard",
          avatar: "https://via.placeholder.com/40",
          time: "il y a 2j",
          content: "Problème d'humidité dans mon appartement, comment le résoudre ?",
          likes: 12,
          comments: 23,
          details: {
            postType: "Question",
            location: "Nantes",
            price: "",
            area: "42",
            durationType: ""
          }
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
          comments: 15,
          details: {
            postType: "Investissement",
            location: "Paris Centre",
            price: "",
            area: "",
            durationType: ""
          }
        }
      ]
    }
  ];

  // Créer une liste plate de tous les posts avec leur groupe associé
  const allPosts = groups.flatMap(group => 
    group.posts.map(post => ({
      ...post,
      groupName: group.name,
      groupImage: group.image,
      groupMembers: group.members
    }))
  );

  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Groupes</h1>
        <div className="space-y-6">
          {allPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow overflow-hidden relative">
              <button 
                className="absolute top-3 right-3 text-gray-500 hover:text-blue-600 bg-white rounded-full p-1 shadow"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
                </svg>
              </button>
              
              <div className="p-4">
                {/* Informations du groupe */}
                <div className="flex items-center space-x-2 mb-3 pb-2 border-b border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-gray-300 overflow-hidden">
                    <img src={post.groupImage} alt={post.groupName} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-medium text-sm text-blue-600">{post.groupName}</div>
                    <div className="text-xs text-gray-500">{post.groupMembers} membres</div>
                  </div>
                </div>
                
                {/* Informations de l'auteur */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                    <img src={post.avatar} alt={post.author} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-medium">{post.author}</div>
                    <div className="text-xs text-gray-500">{post.time}</div>
                  </div>
                </div>
                
                {post.details && (
                  <div className="mt-3 mb-3 py-2 border-y border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {post.details.postType && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {post.details.postType}
                        </span>
                      )}
                      {post.details.location && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {post.details.location}
                        </span>
                      )}
                      {post.details.price && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {post.details.price}€{post.details.durationType === "monthly" ? "/mois" : ""}
                        </span>
                      )}
                      {post.details.area && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          {post.details.area}m²
                        </span>
                      )}
                    </div>
                  </div>
                )}
                
                <p className="mt-3">{post.content}</p>
              </div>
              
              {post.image && (
                <div className="h-48 overflow-hidden">
                  <img src={post.image} alt="" className="w-full h-full object-cover" />
                </div>
              )}
              
              {/* Compteurs */}
              <div className="flex justify-between text-sm text-gray-500 mb-3">
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                  </svg>
                  <span>{post.likes}</span>
                </div>
                <div className="flex space-x-4">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
                    </svg>
                    <span>{post.comments}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
                    </svg>
                    <span>Partages</span>
                  </div>
                </div>
              </div>

              {/* Boutons d'action */}
              <div className="flex justify-between pt-3 border-t">
                <button className="flex-1 flex flex-col items-center text-gray-600 hover:text-blue-600">
                  <svg className="w-5 h-5 mb-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                  </svg>
                  <span className="text-sm">J'aime</span>
                </button>
                <button className="flex-1 flex flex-col items-center text-gray-600 hover:text-blue-600">
                  <svg className="w-5 h-5 mb-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-sm">Commenter</span>
                </button>
                <button className="flex-1 flex flex-col items-center text-gray-600 hover:text-blue-600">
                  <svg className="w-5 h-5 mb-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
                  </svg>
                  <span className="text-sm">Partager</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}








