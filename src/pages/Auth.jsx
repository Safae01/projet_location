import React, { useState } from 'react';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Aperçu du site (côté gauche) */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center p-8">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          
          
          <div className="h-96 overflow-y-auto pr-2 -mr-2">
            {/* Posts miniatures */}
            <div className="border rounded-lg p-3 mb-3 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                  <img src="https://via.placeholder.com/40" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-medium text-sm">Marie Dupont</p>
                  <p className="text-xs text-gray-500">il y a 2h</p>
                </div>
              </div>
              <p className="text-sm mb-2">Bonjour à tous ! Voici une photo de mon dernier voyage.</p>
              <div className="rounded-lg overflow-hidden h-32 bg-gray-200">
                <img src="https://via.placeholder.com/600x400" alt="Post" className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>12 j'aime</span>
                <span>3 commentaires</span>
              </div>
            </div>
            
            <div className="border rounded-lg p-3 mb-3 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                  <img src="https://via.placeholder.com/40" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-medium text-sm">Thomas Martin</p>
                  <p className="text-xs text-gray-500">il y a 5h</p>
                </div>
              </div>
              <p className="text-sm">Je viens de terminer ce projet incroyable !</p>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>8 j'aime</span>
                <span>1 commentaire</span>
              </div>
            </div>
            
            <div className="border rounded-lg p-3 mb-3 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                  <img src="https://via.placeholder.com/40" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-medium text-sm">Sophie Dubois</p>
                  <p className="text-xs text-gray-500">il y a 1j</p>
                </div>
              </div>
              <p className="text-sm mb-2">J'ai adoré cette conférence sur le développement web !</p>
              <div className="rounded-lg overflow-hidden h-32 bg-gray-200">
                <img src="https://via.placeholder.com/600x400" alt="Post" className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>24 j'aime</span>
                <span>7 commentaires</span>
              </div>
            </div>
            
            <div className="border rounded-lg p-3 mb-3 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                  <img src="https://via.placeholder.com/40" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-medium text-sm">Pierre Moreau</p>
                  <p className="text-xs text-gray-500">il y a 2j</p>
                </div>
              </div>
              <p className="text-sm">Quelqu'un connaît un bon restaurant dans le quartier ?</p>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>3 j'aime</span>
                <span>15 commentaires</span>
              </div>
            </div>
            
            <div className="border rounded-lg p-3 mb-3 shadow-sm">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                  <img src="https://via.placeholder.com/40" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-medium text-sm">Julie Lambert</p>
                  <p className="text-xs text-gray-500">il y a 3j</p>
                </div>
              </div>
              <p className="text-sm mb-2">Mon nouveau bureau à la maison !</p>
              <div className="rounded-lg overflow-hidden h-32 bg-gray-200">
                <img src="https://via.placeholder.com/600x400" alt="Post" className="w-full h-full object-cover" />
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>32 j'aime</span>
                <span>5 commentaires</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Formulaire d'authentification (côté droit) */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-10 md:hidden">
            <h1 className="text-3xl font-bold text-blue-600">Mini Facebook</h1>
            <p className="mt-2 text-gray-600">Connectez-vous avec vos amis et le monde qui vous entoure.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {isLogin ? 'Connexion' : 'Inscription'}
            </h2>
            
            <form className="space-y-4">
              {!isLogin && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                      <input
                        type="text"
                        id="firstName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Prénom"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                      <input
                        type="text"
                        id="lastName"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Nom"
                      />
                    </div>
                  </div>
                </>
              )}
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Email"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Mot de passe"
                />
              </div>
              
              {!isLogin && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirmer le mot de passe</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Confirmer le mot de passe"
                  />
                </div>
              )}
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {isLogin ? 'Se connecter' : 'S\'inscrire'}
              </button>
            </form>
            
            {isLogin && (
              <div className="mt-4 text-center">
                <a href="#" className="text-sm text-blue-600 hover:underline">Mot de passe oublié ?</a>
              </div>
            )}
            
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600">
                {isLogin ? 'Vous n\'avez pas de compte ?' : 'Vous avez déjà un compte ?'}
                <button
                  type="button"
                  className="ml-1 text-blue-600 hover:underline font-medium"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? 'S\'inscrire' : 'Se connecter'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



