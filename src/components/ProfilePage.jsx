import React, { useState, useEffect } from 'react';

export default function ProfilePage() {
  const [showMiniHeader, setShowMiniHeader] = useState(false);
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
  const [activeTab, setActiveTab] = useState('publications');
  const [searchFollowers, setSearchFollowers] = useState('');
  const [searchFollowing, setSearchFollowing] = useState('');
  
  const userProfile = {
    name: "Votre Nom",
    username: "@votrenom",
    coverPhoto: "https://via.placeholder.com/1200x300",
    avatar: "https://via.placeholder.com/150",
    bio: "Développeur web passionné | Amateur de photographie | Voyageur",
    location: "Paris, France",
    joinDate: "Membre depuis Janvier 2023",
    stats: {
      posts: 42,
      followers: 128,
      following: 97
    },
    followers: [
      { id: 1, name: 'Sophie Lefebvre', avatar: 'https://via.placeholder.com/40', status: 'online' },
      { id: 2, name: 'Lucas Bernard', avatar: 'https://via.placeholder.com/40', status: 'offline' },
      { id: 3, name: 'Emma Petit', avatar: 'https://via.placeholder.com/40', status: 'online' },
      { id: 4, name: 'Hugo Dubois', avatar: 'https://via.placeholder.com/40', status: 'online' },
      { id: 5, name: 'Léa Moreau', avatar: 'https://via.placeholder.com/40', status: 'offline' },
      { id: 6, name: 'Gabriel Roux', avatar: 'https://via.placeholder.com/40', status: 'online' },
      { id: 7, name: 'Camille Martin', avatar: 'https://via.placeholder.com/40', status: 'offline' },
      { id: 8, name: 'Thomas Dubois', avatar: 'https://via.placeholder.com/40', status: 'online' },
    ]
  };

  // Données des personnes suivies
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
    person => person.name.toLowerCase().includes(searchFollowing.toLowerCase())
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowMiniHeader(true);
      } else {
        setShowMiniHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      author: userProfile.name, // Nom de l'utilisateur connecté
      avatar: userProfile.avatar,
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
    
    console.log("Nouvelle annonce créée:", newPost);
    
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
    <main className="flex-1 overflow-y-auto bg-gray-100 relative">
      {/* Mini header qui apparaît lors du défilement */}
      {showMiniHeader && (
        <div className="fixed top-16 left-0 right-0 bg-white shadow-md py-2 px-4 z-10 flex items-center justify-between">
          <div className="w-8"></div> {/* Espace pour équilibrer */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img src={userProfile.avatar} alt={userProfile.name} className="w-full h-full object-cover" />
            </div>
            <h2 className="font-medium">{userProfile.name}</h2>
          </div>
          <div className="w-8"></div> {/* Espace pour équilibrer */}
        </div>
      )}

      {/* Post Form Modal - Exactement comme dans Feed */}
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
                    <img src={userProfile.avatar} alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 flex items-center">
                      {userProfile.name}
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
                
                {/* Durée */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Type de location</label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className={`relative flex items-center p-3 rounded-xl border ${durationType === 'courte' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} cursor-pointer hover:border-blue-300 transition-colors`}>
                      <input 
                        type="radio" 
                        name="durationType" 
                        value="courte" 
                        checked={durationType === 'courte'}
                        onChange={() => setDurationType('courte')}
                        className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
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
                
                {/* Prix */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Prix (€/mois)</label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 transition-colors hover:border-blue-300"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Ex: 800"
                    required
                  />
                </div>
                
                {/* Surface */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Surface (m²)</label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 transition-colors hover:border-blue-300"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="Ex: 45"
                    required
                  />
                </div>
                
                {/* Nombre de pièces */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Nombre de pièces</label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 transition-colors hover:border-blue-300"
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    placeholder="Ex: 3"
                    required
                  />
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
                  <label className="block text-sm font-medium text-gray-700">Équipements</label>
                  <div className="grid grid-cols-2 gap-4">
                    <label className={`flex items-center space-x-2 ${amenities.includes('wifi') ? 'text-blue-600' : 'text-gray-600'}`}>
                      <input 
                        type="checkbox" 
                        className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                        checked={amenities.includes('wifi')}
                        onChange={() => handleAmenityToggle('wifi')}
                      />
                      <span>Wi-Fi</span>
                    </label>
                    <label className={`flex items-center space-x-2 ${amenities.includes('parking') ? 'text-blue-600' : 'text-gray-600'}`}>
                      <input 
                        type="checkbox" 
                        className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                        checked={amenities.includes('parking')}
                        onChange={() => handleAmenityToggle('parking')}
                      />
                      <span>Parking</span>
                    </label>
                    <label className={`flex items-center space-x-2 ${amenities.includes('garage') ? 'text-blue-600' : 'text-gray-600'}`}>
                      <input 
                        type="checkbox" 
                        className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                        checked={amenities.includes('garage')}
                        onChange={() => handleAmenityToggle('garage')}
                      />
                      <span>Garage</span>
                    </label>
                    <label className={`flex items-center space-x-2 ${amenities.includes('terrasse') ? 'text-blue-600' : 'text-gray-600'}`}>
                      <input 
                        type="checkbox" 
                        className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                        checked={amenities.includes('terrasse')}
                        onChange={() => handleAmenityToggle('terrasse')}
                      />
                      <span>Terrasse</span>
                    </label>
                    <label className={`flex items-center space-x-2 ${amenities.includes('ascenseur') ? 'text-blue-600' : 'text-gray-600'}`}>
                      <input 
                        type="checkbox" 
                        className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                        checked={amenities.includes('ascenseur')}
                        onChange={() => handleAmenityToggle('ascenseur')}
                      />
                      <span>Ascenseur</span>
                    </label>
                    <label className={`flex items-center space-x-2 ${amenities.includes('salleDeSport') ? 'text-blue-600' : 'text-gray-600'}`}>
                      <input 
                        type="checkbox" 
                        className="h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                        checked={amenities.includes('salleDeSport')}
                        onChange={() => handleAmenityToggle('salleDeSport')}
                      />
                      <span>Salle de sport</span>
                    </label>
                  </div>
                </div>
                
                {/* Images */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">Images</label>
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
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Vidéo */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Vidéo</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed hover:border-blue-400 rounded-md">
                    <div className="space-y-1 text-center">
                      <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="video-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none">
                          <span>Télécharger une vidéo</span>
                          <input id="video-upload" name="video-upload" type="file" className="sr-only" accept="video/*" onChange={handleVideoUpload} />
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
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Bouton de soumission */}
              <div className="flex justify-end">
                <button 
                  type="submit" 
                  className="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Publier
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto bg-white shadow-sm">
        {/* Couverture et photo de profil */}
        <div className="relative">
          <div className="h-64 w-full bg-gray-300 overflow-hidden">
            <img src={userProfile.coverPhoto} alt="Couverture" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-0 left-8 transform translate-y-1/2 border-4 border-white rounded-full overflow-hidden shadow-lg">
            <div className="w-32 h-32 bg-gray-200">
              <img src={userProfile.avatar} alt={userProfile.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Informations du profil */}
        <div className="mt-16 px-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold">{userProfile.name}</h1>
              <p className="text-gray-500">{userProfile.username}</p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Modifier le profil
            </button>
          </div>
          
          <p className="mt-4 text-gray-700">{userProfile.bio}</p>
          
          <div className="flex items-center mt-2 text-gray-600">
            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
            </svg>
            <span>{userProfile.location}</span>
            <span className="mx-2">•</span>
            <span>{userProfile.joinDate}</span>
          </div>
          
          <div className="flex space-x-6 mt-4 pt-4 border-t">
            <div>
              <span className="font-bold">{userProfile.stats.posts}</span>
              <span className="text-gray-500 ml-1">Publications</span>
            </div>
            <div>
              <span className="font-bold">{userProfile.stats.followers}</span>
              <span className="text-gray-500 ml-1">Abonnés</span>
            </div>
            <div>
              <span className="font-bold">{userProfile.stats.following}</span>
              <span className="text-gray-500 ml-1">Abonnements</span>
            </div>
          </div>
        </div>
        
        {/* Navigation du profil */}
        <div className="mt-6 border-t">
          <div className="flex px-4">
            <button 
              className={`px-4 py-3 font-medium ${activeTab === 'publications' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setActiveTab('publications')}
            >
              Publications
            </button>
            <button 
              className={`px-4 py-3 font-medium ${activeTab === 'abonnés' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setActiveTab('abonnés')}
            >
              Abonnés
            </button>
            <button 
              className={`px-4 py-3 font-medium ${activeTab === 'suivis' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setActiveTab('suivis')}
            >
              Suivi(e)s
            </button>
            <button 
              className={`px-4 py-3 font-medium ${activeTab === 'apropos' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => setActiveTab('apropos')}
            >
              À propos
            </button>
          </div>
        </div>
        
        {/* Contenu selon l'onglet actif */}
        <div className="p-4">
          {activeTab === 'publications' && (
            <>
              {/* Contenu existant des publications */}
              <div className="bg-white rounded-lg shadow p-4 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                    <img src={userProfile.avatar} alt="Profile" className="w-full h-full object-cover" />
                  </div>
                  <input 
                    type="text" 
                    className="flex-1 bg-gray-100 rounded-full px-4 py-2" 
                    placeholder="Quoi de neuf ?" 
                    onClick={() => setShowPostForm(true)}
                    readOnly
                  />
                </div>
                <div className="flex justify-center mt-3 pt-3 border-t">
                  <button 
                    className="flex items-center text-gray-600 hover:bg-gray-100 px-2 py-1 rounded"
                    onClick={() => setShowPostForm(true)}
                  >
                    <svg className="w-5 h-5 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
                    </svg>
                    Photo/Vidéo
                  </button>
                </div>
              </div>
              
              {/* Publications */}
              <div className="space-y-4">
                {[1, 2, 3].map(id => (
                  <div key={id} className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img src={userProfile.avatar} alt="Profile" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="font-medium">{userProfile.name}</div>
                        <div className="text-xs text-gray-500">il y a {id} jour{id > 1 ? 's' : ''}</div>
                      </div>
                    </div>
                    
                    {/* Tags colorés - déplacés au-dessus du contenu */}
                    <div className="mb-3 py-2 border-y border-gray-100">
                      <div className="flex flex-wrap gap-2">
                        {id === 1 && (
                          <>
                            <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">#coding</span>
                            <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">#webdev</span>
                          </>
                        )}
                        {id === 2 && (
                          <>
                            <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">#nature</span>
                            <span className="px-2 py-1 rounded-full text-xs bg-amber-100 text-amber-800">#randonnée</span>
                          </>
                        )}
                        {id === 3 && (
                          <>
                            <span className="px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-800">#tech</span>
                            <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">#meetup</span>
                          </>
                        )}
                      </div>
                    </div>
                    
                    <p className="mb-3">
                      {id === 1 && "Nouvelle mise à jour du projet ! #coding #webdev"}
                      {id === 2 && "Belle journée pour une randonnée en montagne. La vue est magnifique !"}
                      {id === 3 && "Qui est partant pour un meetup tech ce weekend ?"}
                    </p>
                    {id !== 3 && (
                      <div className="rounded-lg overflow-hidden mb-3">
                        <img src={`https://via.placeholder.com/600x400?text=Post+${id}`} alt="Post" className="w-full" />
                      </div>
                    )}
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                        </svg>
                        <span>{10 + id * 5}</span>
                      </div>
                      <div className="flex space-x-4">
                        <div className="flex items-center space-x-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path>
                          </svg>
                          <span>{3 + id}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
                          </svg>
                          <span>{id * 2}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions des posts */}
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
            </>
          )}
          
          {activeTab === 'abonnés' && (
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b">
                <div className="relative">
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 pl-10 border rounded-lg bg-gray-100" 
                    placeholder="Rechercher parmi les abonnés" 
                    value={searchFollowers}
                    onChange={(e) => setSearchFollowers(e.target.value)}
                  />
                  <svg className="w-5 h-5 text-gray-500 absolute left-3 top-2.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                  </svg>
                </div>
              </div>
              
              <div className="p-2">
                {userProfile.followers
                  .filter(follower => follower.name.toLowerCase().includes(searchFollowers.toLowerCase()))
                  .map(follower => (
                  <div 
                    key={follower.id} 
                    className="flex items-center p-2 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <div className="relative mr-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-100">
                        <img src={follower.avatar} alt={follower.name} className="w-full h-full object-cover" />
                      </div>
                      {follower.status === 'online' && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm text-gray-800 truncate">{follower.name}</div>
                      <div className="text-xs text-gray-500 flex items-center">
                        <span className={`inline-block w-1.5 h-1.5 rounded-full mr-1 ${follower.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                        {follower.status === 'online' ? 'En ligne' : 'Hors ligne'}
                      </div>
                    </div>
                    <button className="ml-2 bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors">
                      Suivre
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'suivis' && (
            <div className="bg-white rounded-lg shadow">
              <div className="p-4 border-b">
                <div className="relative">
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 pl-10 border rounded-lg bg-gray-100" 
                    placeholder="Rechercher parmi les personnes suivies" 
                    value={searchFollowing}
                    onChange={(e) => setSearchFollowing(e.target.value)}
                  />
                  <svg className="w-5 h-5 text-gray-500 absolute left-3 top-2.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                  </svg>
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
              </div>
            </div>
          )}
          
          {/* Autres onglets... */}
        </div>
      </div>
    </main>
  );
}










