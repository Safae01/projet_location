import React from 'react';

export default function Feed() {
  const posts = [
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
    },
    {
      id: 3,
      author: 'Thomas Martin',
      avatar: 'https://via.placeholder.com/40',
      time: 'il y a 5h',
      content: 'Je viens de terminer ce projet incroyable !',
      image: 'https://via.placeholder.com/600x400',
      likes: 23,
      comments: 5
    },
    {
      id: 4,
      author: 'Thomas Martin',
      avatar: 'https://via.placeholder.com/40',
      time: 'il y a 5h',
      content: 'Je viens de terminer ce projet incroyable !',
      image: 'https://via.placeholder.com/600x400',
      likes: 23,
      comments: 5
    }
  ];

  return (
    <main className="flex-1 p-4 overflow-y-auto">
      {/* Stories */}
      <div className="flex space-x-2 overflow-x-auto pb-4 mb-4">
        {[1, 2, 3, 4, 5,6].map(i => (
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
            placeholder="Quoi de neuf ?" 
          />
        </div>
        <div className="border-t pt-3 flex justify-between">
          <button className="flex items-center space-x-1 text-gray-600 hover:bg-gray-100 px-2 py-1 rounded">
            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
            <span>Vidéo en direct</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600 hover:bg-gray-100 px-2 py-1 rounded">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4a.5.5 0 01-.5-.5V5.5A.5.5 0 014 5h12a.5.5 0 01.5.5v9.5a.5.5 0 01-.5.5z" clipRule="evenodd"></path></svg>
            <span>Photo/Vidéo</span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600 hover:bg-gray-100 px-2 py-1 rounded">
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"></path></svg>
            <span>Humeur</span>
          </button>
        </div>
      </div>

      {/* Posts */}
      {posts.map(post => (
        <div key={post.id} className="bg-white rounded-lg shadow mb-4">
          <div className="p-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                <img src={post.avatar} alt={post.author} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-semibold">{post.author}</div>
                <div className="text-xs text-gray-500">{post.time}</div>
              </div>
            </div>
            <p className="mt-3">{post.content}</p>
          </div>
          
          {post.image && (
            <div className="w-full">
              <img src={post.image} alt="Post" className="w-full" />
            </div>
          )}
          
          <div className="px-4 py-2 border-t border-b flex justify-between text-gray-500 text-sm">
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"></path></svg>
              <span>{post.likes} J'aime</span>
            </div>
            <div>{post.comments} commentaires</div>
          </div>
          
          <div className="p-2 flex justify-between">
            <button className="flex-1 flex items-center justify-center space-x-2 p-2 hover:bg-gray-100 rounded">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path></svg>
              <span>J'aime</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 p-2 hover:bg-gray-100 rounded">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path></svg>
              <span>Commenter</span>
            </button>
            <button className="flex-1 flex items-center justify-center space-x-2 p-2 hover:bg-gray-100 rounded">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg>
              <span>Partager</span>
            </button>
          </div>
        </div>
      ))}
    </main>
  );
}

