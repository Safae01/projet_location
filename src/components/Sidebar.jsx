import React from 'react';

export default function Sidebar({ onShowFollowers, onShowFollowing, onShowGroups, onShowVideos, onShowSavedPosts, onShowRecommendations }) {
  return (
    <div className="w-1/5 p-4 bg-white shadow hidden md:block overflow-y-auto h-screen sticky top-16">
      <div className="space-y-4">
        <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
            <img src="https://via.placeholder.com/40" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <span className="font-medium">Votre Nom</span>
        </div>
        
        <div 
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          onClick={onShowFollowers}
        >
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
          </div>
          <span className="font-medium">Abonnés</span>
        </div>
        
        <div 
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          onClick={onShowFollowing}
        >
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
          </div>
          <span className="font-medium">Suivi(e)s</span>
        </div>
        
        <div 
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          onClick={onShowGroups}
        >
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
          </div>
          <span className="font-medium">Groupes</span>
        </div>
        
        <div 
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          onClick={onShowVideos}
        >
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
          </div>
          <span className="font-medium">Vidéo</span>
        </div>
        
        <div 
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          onClick={onShowSavedPosts}
        >
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"></path>
            </svg>
          </div>
          <span className="font-medium">Enregistrements</span>
        </div>
        
        <div 
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
          onClick={onShowRecommendations}
        >
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
            </svg>
          </div>
          <span className="font-medium">Recommandations</span>
        </div>
      </div>
    </div>
  );
}



