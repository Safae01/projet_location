import React from 'react';

export default function SavedPosts() {
  const savedPosts = [
    {
      id: 1,
      author: "Marie Dupont",
      avatar: "https://via.placeholder.com/40",
      time: "Enregistré le 15 mai 2023",
      content: "Superbe appartement avec vue sur la Tour Eiffel ! Idéal pour un couple, entièrement rénové et meublé.",
      image: "https://via.placeholder.com/600x400",
      likes: 245,
      comments: 37,
      details: {
        postType: "Location",
        location: "Paris 7ème",
        durationType: "long-term",
        price: "1800",
        area: "65",
        rooms: "2",
        furnishingStatus: "equipped",
        amenities: ["Balcon", "Ascenseur", "Parking"]
      }
    },
    {
      id: 2,
      author: "Thomas Martin",
      avatar: "https://via.placeholder.com/40",
      time: "Enregistré le 10 mai 2023",
      content: "Studio disponible immédiatement dans le quartier du Marais. Idéal pour étudiant ou jeune actif.",
      image: "https://via.placeholder.com/600x400",
      likes: 124,
      comments: 18,
      details: {
        postType: "Location",
        location: "Paris 4ème",
        durationType: "long-term",
        price: "950",
        area: "28",
        rooms: "1",
        furnishingStatus: "equipped",
        amenities: ["Cuisine équipée", "Internet"]
      }
    },
    {
      id: 3,
      author: "Sophie Bernard",
      avatar: "https://via.placeholder.com/40",
      time: "Enregistré le 5 mai 2023",
      content: "Maison familiale avec jardin à vendre. Proche des écoles et des commerces. Quartier calme et résidentiel.",
      image: "https://via.placeholder.com/600x400",
      video: "https://assets.mixkit.co/videos/preview/mixkit-living-room-in-a-modern-apartment-4704-large.mp4",
      likes: 312,
      comments: 45,
      details: {
        postType: "Vente",
        location: "Bordeaux",
        price: "450000",
        area: "120",
        rooms: "5",
        furnishingStatus: "unfurnished",
        amenities: ["Jardin", "Garage", "Cave"]
      }
    }
  ];

  const handleRemoveSaved = (id) => {
    console.log(`Retirer le post ${id} des enregistrements`);
    // Logique pour retirer un post des enregistrements
  };

  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Annonces enregistrées</h1>
        
        {savedPosts.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
            </svg>
            <h3 className="text-lg font-medium text-gray-500">Aucune annonce enregistrée</h3>
            <p className="text-gray-500 mt-1">Les annonces que vous enregistrez apparaîtront ici</p>
          </div>
        ) : (
          <div className="space-y-6">
            {savedPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow overflow-hidden relative">
                <button 
                  onClick={() => handleRemoveSaved(post.id)}
                  className="absolute top-3 right-3 text-gray-500 hover:text-red-600 bg-white rounded-full p-1 shadow"
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
                    {post.video && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <button className="bg-white bg-opacity-75 rounded-full p-3">
                          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>
                )}
                
              <div className="p-4 border-t border-gray-100">
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
              <div className="flex justify-between border-t pt-3">
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
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}





