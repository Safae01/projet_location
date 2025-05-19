import React, { useState } from 'react';

export default function Feed() {
  const [showPostForm, setShowPostForm] = useState(false);
  const [postType, setPostType] = useState('');
  const [location, setLocation] = useState('');
  const [durationType, setDurationType] = useState('');
  const [price, setPrice] = useState('');
  const [area, setArea] = useState('');
  const [rooms, setRooms] = useState('');
  const [furnishingStatus, setFurnishingStatus] = useState('');
  const [amenities, setAmenities] = useState([]);
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(null);
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Marie Dupont',
      avatar: 'https://via.placeholder.com/40',
      time: 'il y a 2h',
      content: 'Bonjour à tous ! Voici une photo de mon dernier voyage.',
      image: 'https://via.placeholder.com/600x400',
      likes: 42,
      comments: 8
    },
    {
      id: 2,
      author: 'Thomas Martin',
      avatar: 'https://via.placeholder.com/40',
      time: 'il y a 5h',
      content: 'Je viens de terminer ce projet incroyable !',
      image: 'https://via.placeholder.com/600x400',
      likes: 23,
      comments: 5
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
    if (e.target.files) {
      const newImages = Array.from(e.target.files).map(file => URL.createObjectURL(file));
      setImages([...images, ...newImages]);
    }
  };

  const handleVideoUpload = (e) => {
    // Simuler l'upload de vidéo
    if (e.target.files && e.target.files[0]) {
      setVideo(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Créer une nouvelle annonce
    const newPost = {
      id: Date.now(), // Utiliser timestamp comme ID unique
      author: 'Votre Nom', // Remplacer par le nom de l'utilisateur connecté
      avatar: 'https://via.placeholder.com/40',
      time: 'à l\'instant',
      content: `${postType} à ${location} - ${price}€/mois - ${area}m² - ${rooms} pièces - ${furnishingStatus === 'equipped' ? 'Meublé' : 'Non meublé'}`,
      image: images.length > 0 ? images[0] : null,
      video: video,
      likes: 0,
      comments: 0,
      // Ajouter les détails spécifiques à l'annonce
      details: {
        postType,
        location,
        durationType,
        price,
        area,
        rooms,
        furnishingStatus,
        amenities
      }
    };
    
    // Ajouter le nouveau post au début de la liste
    setPosts([newPost, ...posts]);
    
    // Réinitialiser le formulaire
    setShowPostForm(false);
    setPostType('');
    setLocation('');
    setDurationType('');
    setPrice('');
    setArea('');
    setRooms('');
    setFurnishingStatus('');
    setAmenities([]);
    setImages([]);
    setVideo(null);
  };

  return (
    <main className="flex-1 p-4 overflow-y-auto">
      {/* Stories */}
      <div className="flex space-x-2 overflow-x-auto pb-4 mb-4">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="flex-shrink-0 w-32 h-48 rounded-xl bg-gray-300 relative overflow-hidden">
            <img src={`https://via.placeholder.com/150?text=Story${i}`} className="absolute inset-0 w-full h-full object-cover" alt="Story" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2">
              <div className="text-white text-xs font-medium">Histoire {i}</div>
            </div>
            <div className="absolute top-2 left-2 w-8 h-8 rounded-full border-4 border-blue-500 bg-gray-200"></div>
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
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4a.5.5 0 01-.5-.5V5.5A.5.5 0 014 5h12a.5.5 0 01.5.5v9.5a.5.5 0 01-.5.5z" clipRule="evenodd"></path></svg>
            <span>Photo/Vidéo</span>
          </button>
        </div>
      </div>

      {/* Post Form Modal */}
      {showPostForm && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-xl max-h-[80vh] overflow-y-auto">
            {/* En-tête */}
            <div className="p-5 border-b border-gray-200 sticky top-0 bg-white z-10">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">Créer une annonce immobilière</h2>
                <button 
                  className="text-gray-500 hover:text-gray-700 transition-colors rounded-full p-1 hover:bg-gray-100"
                  onClick={() => setShowPostForm(false)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
              </div>
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
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="text-sm text-blue-600">Compte vérifié</div>
                  </div>
                </div>
                
                {/* Type de bien */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Type de bien</label>
                  <div className="relative">
                    <select 
                      className="w-full pl-3 pr-10 py-3 border border-gray-300 bg-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 appearance-none transition-colors hover:border-blue-300"
                      value={postType}
                      onChange={(e) => setPostType(e.target.value)}
                      required
                    >
                      <option value="">Sélectionnez un type</option>
                      <option value="maison">Maison</option>
                      <option value="appartement">Appartement</option>
                      <option value="chambre">Chambre</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Localisation */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Localisation (ville, quartier)</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 transition-colors hover:border-blue-300"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Ex: Paris 11ème, Bastille"
                    required
                  />
                </div>
                
                {/* Type de location */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Type de location</label>
                  <div className="flex space-x-4">
                    <label className={`relative flex items-center p-3 rounded-xl border ${durationType === 'courte' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} cursor-pointer hover:border-blue-300 transition-colors`}>
                      <input 
                        type="radio" 
                        name="durationType" 
                        value="courte" 
                        checked={durationType === 'courte'}
                        onChange={() => setDurationType('courte')}
                        className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                        required
                      />
                      <span className="ml-3 text-gray-700">Courte durée</span>
                    </label>
                    <label className={`relative flex items-center p-3 rounded-xl border ${durationType === 'longue' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} cursor-pointer hover:border-blue-300 transition-colors`}>
                      <input 
                        type="radio" 
                        name="durationType" 
                        value="longue" 
                        checked={durationType === 'longue'}
                        onChange={() => setDurationType('longue')}
                        className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-3 text-gray-700">Longue durée</span>
                    </label>
                  </div>
                </div>
                
                {/* Prix, Superficie et nombre de pièces */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Prix (€/mois)</label>
                    <div className="relative rounded-xl shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">€</span>
                      </div>
                      <input 
                        type="number" 
                        className="w-full pl-7 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 transition-colors hover:border-blue-300"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="0.00"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Superficie (m²)</label>
                    <div className="relative rounded-xl shadow-sm">
                      <input 
                        type="number" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 transition-colors hover:border-blue-300"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        placeholder="0"
                        required
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">m²</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Nombre de pièces</label>
                    <input 
                      type="number" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 transition-colors hover:border-blue-300"
                      value={rooms}
                      onChange={(e) => setRooms(e.target.value)}
                      placeholder="0"
                      required
                    />
                  </div>
                </div>
                
                {/* Équipé ou non */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">État du bien</label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className={`relative flex items-center p-4 rounded-xl border ${furnishingStatus === 'equipped' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} cursor-pointer hover:border-blue-300 transition-colors`}>
                      <input 
                        type="radio" 
                        name="furnishingStatus" 
                        value="equipped" 
                        checked={furnishingStatus === 'equipped'}
                        onChange={() => setFurnishingStatus('equipped')}
                        className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                        required
                      />
                      <div className="ml-3">
                        <span className="block text-sm font-medium text-gray-700">Équipé/Meublé</span>
                        <span className="block text-xs text-gray-500">Prêt à emménager</span>
                      </div>
                    </label>
                    <label className={`relative flex items-center p-4 rounded-xl border ${furnishingStatus === 'notEquipped' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} cursor-pointer hover:border-blue-300 transition-colors`}>
                      <input 
                        type="radio" 
                        name="furnishingStatus" 
                        value="notEquipped" 
                        checked={furnishingStatus === 'notEquipped'}
                        onChange={() => setFurnishingStatus('notEquipped')}
                        className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <div className="ml-3">
                        <span className="block text-sm font-medium text-gray-700">Non équipé/Non meublé</span>
                        <span className="block text-xs text-gray-500">À aménager</span>
                      </div>
                    </label>
                  </div>
                </div>
                
                {/* Équipements */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">Équipements disponibles</label>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 hover:border-blue-200 transition-colors">
                    <div className="grid grid-cols-2 gap-3">
                      {['Wi-Fi', 'Cuisine équipée', 'Lave-linge', 'Sèche-linge', 'Parking', 'Balcon', 'Terrasse', 'Ascenseur'].map(amenity => (
                        <label key={amenity} className="inline-flex items-center p-2 rounded-lg hover:bg-blue-50 transition-colors">
                          <input 
                            type="checkbox" 
                            className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                            checked={amenities.includes(amenity)}
                            onChange={() => handleAmenityToggle(amenity)}
                          />
                          <span className="ml-2 text-gray-700">{amenity}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Images */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">Images (obligatoire)</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-blue-400 transition-colors">
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                          <span>Télécharger des fichiers</span>
                          <input 
                            id="file-upload" 
                            name="file-upload" 
                            type="file" 
                            className="sr-only" 
                            multiple
                            onChange={handleImageUpload}
                            accept="image/*"
                          />
                        </label>
                        <p className="pl-1">ou glisser-déposer</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF jusqu'à 10MB</p>
                    </div>
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
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Vidéo */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Vidéo (obligatoire)</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed hover:border-blue-400 rounded-md">
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="video-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                          <span>Télécharger une vidéo</span>
                          <input id="video-upload" name="video-upload" type="file" className="sr-only" accept="video/*" onChange={handleVideoUpload} required={!video} />
                        </label>
                        <p className="pl-1">ou glisser-déposer</p>
                      </div>
                      <p className="text-xs text-gray-500">MP4, MOV jusqu'à 100MB</p>
                    </div>
                  </div>
                  {video && (
                    <div className="mt-2 relative">
                      <video src={video} controls className="w-full h-48 object-cover rounded"></video>
                      <button 
                        type="button"
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                        onClick={() => setVideo(null)}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                      </button>
                    </div>
                  )}
                </div>
                
                
                
                {/* Boutons d'action */}
                <div className="flex justify-center space-x-3 pt-6 border-t border-gray-200">
                  <button 
                    type="submit" 
                    className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Publier
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Posts */}
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow">
            <div className="p-4">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                  <img src={post.avatar} alt={post.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-semibold">{post.author}</div>
                  <div className="text-xs text-gray-500">{post.time}</div>
                </div>
              </div>
              <p className="mb-3">{post.content}</p>
              
              {/* Media container avec hauteur fixe */}
              {(post.image || post.video) && (
                <div className="rounded-lg overflow-hidden mb-3 relative" style={{ maxHeight: '400px' }}>
                  {post.image && (
                    <img 
                      src={post.image} 
                      alt="Post" 
                      className="w-full h-full object-contain bg-black" 
                    />
                  )}
                  {post.video && (
                    <video 
                      src={post.video} 
                      controls 
                      className="w-full h-full object-contain bg-black"
                    ></video>
                  )}
                </div>
              )}
              
              {/* Affichage des détails de l'annonce */}
              {post.details && (
                <div className="bg-gray-50 p-3 rounded-lg mb-3 text-sm">
                  <div className="grid grid-cols-2 gap-2">
                    <div><span className="font-medium">Type:</span> {post.details.postType}</div>
                    <div><span className="font-medium">Prix:</span> {post.details.price}€/mois</div>
                    <div><span className="font-medium">Surface:</span> {post.details.area}m²</div>
                    <div><span className="font-medium">Pièces:</span> {post.details.rooms}</div>
                    <div><span className="font-medium">Durée:</span> {post.details.durationType === 'courte' ? 'Courte durée' : 'Longue durée'}</div>
                    <div><span className="font-medium">État:</span> {post.details.furnishingStatus === 'equipped' ? 'Meublé' : 'Non meublé'}</div>
                  </div>
                  {post.details.amenities.length > 0 && (
                    <div className="mt-2">
                      <span className="font-medium">Équipements:</span> {post.details.amenities.join(', ')}
                    </div>
                  )}
                </div>
              )}
              
              <div className="flex justify-between text-gray-500 text-sm">
                <div>{post.likes} J'aime</div>
                <div>{post.comments} commentaires</div>
              </div>
            </div>
            <div className="border-t px-4 py-2">
              <div className="flex justify-around">
                <button className="flex items-center space-x-1 text-gray-600 hover:bg-gray-100 px-2 py-1 rounded">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path></svg>
                  <span>J'aime</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:bg-gray-100 px-2 py-1 rounded">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path></svg>
                  <span>Commenter</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-600 hover:bg-gray-100 px-2 py-1 rounded">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg>
                  <span>Partager</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
