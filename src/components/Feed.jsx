import React, { useState } from 'react';

export default function Feed() {
  const [showPostForm, setShowPostForm] = useState(false);
  const [amenities, setAmenities] = useState([]);
  const [images, setImages] = useState([]);
  const [showComments, setShowComments] = useState({});
  
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Julie Dubois',
      avatar: 'https://via.placeholder.com/40',
      time: 'il y a 2h',
      content: 'Appartement à louer dans le 7ème arrondissement. Proche des transports et des commerces.',
      image: 'https://via.placeholder.com/600x400',
      likes: 42,
      comments: 8,
      details: {
        postType: 'Appartement',
        location: 'Paris 7ème',
        price: '1200',
        area: '45',
        durationType: 'monthly'
      }
    },
    {
      id: 2,
      author: 'Thomas Martin',
      avatar: 'https://via.placeholder.com/40',
      time: 'il y a 5h',
      content: 'Je viens de terminer ce projet incroyable !',
      image: 'https://via.placeholder.com/600x400',
      likes: 23,
      comments: 5,
      details: {
        postType: 'Maison',
        location: 'Lyon Centre',
        price: '950',
        area: '80',
        durationType: 'monthly'
      }
    }
  ]);

  const handleAmenityToggle = (amenity) => {
    if (amenities.includes(amenity)) {
      setAmenities(amenities.filter(a => a !== amenity));
    } else {
      setAmenities([...amenities, amenity]);
    }
  };

  const handleImageUpload = (e) => {
    // Simuler l'upload d'images
    const files = Array.from(e.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages([...images, ...newImages]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour soumettre le formulaire
    console.log('Formulaire soumis');
    setShowPostForm(false);
  };

  const handleSavePost = (postId) => {
    console.log('Post sauvegardé:', postId);
    // Logique pour sauvegarder un post
  };

  const toggleComments = (postId) => {
    setShowComments(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  return (
    <main className="flex-1 p-4 overflow-y-auto">
      {/* Stories */}
      <div className="flex space-x-2 overflow-x-auto pb-4 mb-4">
        {/* Option "Ajouter une story" */}
        <div className="flex-shrink-0 w-32 h-48 rounded-xl bg-gray-100 relative overflow-hidden cursor-pointer hover:bg-gray-200 transition-colors">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-2">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </div>
            <span className="text-sm font-medium text-gray-700">Ajouter une story</span>
          </div>
        </div>
        
        {/* Stories existantes */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="flex-shrink-0 w-32 h-48 rounded-xl bg-gray-300 relative overflow-hidden cursor-pointer">
            <img src={`https://via.placeholder.com/150?text=Story${index + 1}`} alt={`Story ${index + 1}`} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-black to-transparent">
              <div className="text-white text-xs font-medium truncate">Utilisateur {index + 1}</div>
            </div>
            <div className="absolute top-2 left-2 w-8 h-8 rounded-full border-2 border-blue-500 overflow-hidden">
              <img src={`https://via.placeholder.com/40?text=U${index + 1}`} alt={`User ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>

      {/* Create Post */}
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
            <img src="https://via.placeholder.com/40" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <input 
            className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm" 
            placeholder="Ajoutez votre annonce immobilière..." 
            onClick={() => setShowPostForm(true)}
            readOnly
          />
        </div>
        <div className="border-t pt-3 flex justify-center">
          <button 
            className="flex items-center space-x-1 text-gray-600 hover:bg-gray-100 px-2 py-1 rounded"
            onClick={() => setShowPostForm(true)}
          >
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
            <span>Annonce immobilière</span>
          </button>
        </div>
      </div>

      {/* Modal pour créer un post */}
      {showPostForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-xl font-semibold">Créer une annonce immobilière</h2>
              <button 
                onClick={() => setShowPostForm(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              {/* Contenu du formulaire */}
              <div className="space-y-6 mb-8">
                {/* Bloc utilisateur */}
                <div className="flex items-center space-x-3 bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden border-2 border-blue-300">
                    <img src="https://via.placeholder.com/40" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 flex items-center">
                      Votre Nom
                      <svg className="w-5 h-5 text-blue-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="text-sm text-gray-500">Visible par tous</div>
                  </div>
                </div>
                
                {/* Type d'annonce */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type d'annonce</label>
                  <div className="flex space-x-2">
                    <button type="button" className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg">Location</button>
                    <button type="button" className="flex-1 py-2 px-4 bg-gray-200 text-gray-700 rounded-lg">Vente</button>
                    <button type="button" className="flex-1 py-2 px-4 bg-gray-200 text-gray-700 rounded-lg">Colocation</button>
                  </div>
                </div>
                
                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea 
                    className="w-full border border-gray-300 rounded-lg p-3 h-32 resize-none focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Décrivez votre bien immobilier..."
                  ></textarea>
                </div>
                
                {/* Localisation */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Localisation</label>
                  <input 
                    type="text" 
                    className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Adresse du bien"
                  />
                </div>
                
                {/* Prix et surface */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Prix</label>
                    <div className="relative">
                      <input 
                        type="number" 
                        className="w-full border border-gray-300 rounded-lg p-3 pr-12 focus:ring-blue-500 focus:border-blue-500" 
                        placeholder="Prix"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <span className="text-gray-500">€/mois</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Surface</label>
                    <div className="relative">
                      <input 
                        type="number" 
                        className="w-full border border-gray-300 rounded-lg p-3 pr-12 focus:ring-blue-500 focus:border-blue-500" 
                        placeholder="Surface"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <span className="text-gray-500">m²</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Nombre de pièces et état */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre de pièces</label>
                    <select className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500">
                      <option>Studio</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">État du bien</label>
                    <select className="w-full border border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500">
                      <option>Meublé</option>
                      <option>Non meublé</option>
                      <option>Neuf</option>
                      <option>Rénové</option>
                      <option>À rénover</option>
                    </select>
                  </div>
                </div>
                
                {/* Équipements */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Équipements</label>
                  <div className="flex flex-wrap gap-2">
                    {['Ascenseur', 'Parking', 'Balcon', 'Terrasse', 'Jardin', 'Piscine', 'Climatisation', 'Internet'].map(amenity => (
                      <button
                        key={amenity}
                        type="button"
                        onClick={() => handleAmenityToggle(amenity)}
                        className={`px-3 py-1 rounded-full text-sm ${
                          amenities.includes(amenity) 
                            ? 'bg-blue-100 text-blue-800 border border-blue-300' 
                            : 'bg-gray-100 text-gray-800 border border-gray-200'
                        }`}
                      >
                        {amenity}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Photos et vidéos */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Photos et vidéos</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      multiple
                      accept="image/*,video/*"
                      className="hidden"
                      id="file-upload"
                      onChange={handleImageUpload}
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <p className="mt-1 text-sm text-gray-600">
                        Cliquez pour ajouter des photos ou vidéos
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        PNG, JPG, GIF, MP4 jusqu'à 10MB
                      </p>
                    </label>
                  </div>
                  
                  {/* Aperçu des images */}
                  {images.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {images.map((img, index) => (
                        <div key={index} className="relative rounded-xl overflow-hidden h-24 group">
                          <img src={img} alt={`Preview ${index}`} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
                            <button 
                              type="button"
                              className="opacity-0 group-hover:opacity-100 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none transition-opacity"
                              onClick={() => setImages(images.filter((_, i) => i !== index))}
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 border-t pt-4">
                <button 
                  type="button" 
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  onClick={() => setShowPostForm(false)}
                >
                  Annuler
                </button>
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Publier
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Posts */}
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow overflow-hidden relative">
            <button 
              onClick={() => handleSavePost(post.id)}
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
              
              {post.details && (
                <div className="mt-3 mb-3 py-2 border-y border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {post.details.postType}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {post.details.location}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {post.details.price}€/mois
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      {post.details.area}m²
                    </span>
                  </div>
                </div>
              )}
              
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
            
            <div className="px-4 py-2 border-t border-gray-100">
              <div className="flex justify-between">
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    <span>{post.likes}</span>
                  </button>
                  <button 
                    className="flex items-center space-x-1 text-gray-500 hover:text-blue-600"
                    onClick={() => toggleComments(post.id)}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                    <span>{post.comments}</span>
                  </button>
                </div>
                <button className="text-gray-500 hover:text-blue-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Section commentaires */}
            {showComments[post.id] && (
              <div className="bg-gray-50 p-4 border-t">
                <div className="mb-4 space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img src="https://via.placeholder.com/40?text=User1" alt="Commentateur" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 bg-white rounded-lg p-2 shadow-sm">
                      <div className="font-medium text-xs">Utilisateur 1</div>
                      <p className="text-sm">Super photo ! J'adore le cadrage.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden">
                      <img src="https://via.placeholder.com/40?text=User2" alt="Commentateur" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 bg-white rounded-lg p-2 shadow-sm">
                      <div className="font-medium text-xs">Utilisateur 2</div>
                      <p className="text-sm">Très beau contenu, continue comme ça !</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img src="https://via.placeholder.com/40?text=You" alt="Vous" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 relative">
                    <input 
                      type="text" 
                      className="w-full border rounded-full py-1 px-3 pr-10 text-sm" 
                      placeholder="Ajouter un commentaire..." 
                    />
                    <button className="absolute right-2 top-1 text-blue-500">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
