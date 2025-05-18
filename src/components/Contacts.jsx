import React from 'react';

export default function Contacts() {
  const contacts = [
    { id: 1, name: 'Sophie Lefebvre', avatar: 'https://via.placeholder.com/40', status: 'online' },
    { id: 2, name: 'Lucas Bernard', avatar: 'https://via.placeholder.com/40', status: 'online' },
    { id: 3, name: 'Emma Petit', avatar: 'https://via.placeholder.com/40', status: 'offline' },
    { id: 4, name: 'Hugo Dubois', avatar: 'https://via.placeholder.com/40', status: 'online' },
    { id: 5, name: 'Léa Moreau', avatar: 'https://via.placeholder.com/40', status: 'offline' },
    { id: 6, name: 'Gabriel Roux', avatar: 'https://via.placeholder.com/40', status: 'online' },
  ];

  return (
    <div className="w-1/5 p-4 bg-white shadow hidden lg:block overflow-y-auto h-screen sticky top-16">
      <div className="mb-4">
        <h2 className="text-gray-500 font-semibold mb-2 flex justify-between items-center">
          <span>Contacts</span>
          <div className="flex space-x-1">
            <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path></svg>
            </button>
          </div>
        </h2>
      </div>
      
      <div className="space-y-2">
        {contacts.map(contact => (
          <div key={contact.id} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                <img src={contact.avatar} alt={contact.name} className="w-full h-full object-cover" />
              </div>
              {contact.status === 'online' && (
                <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></div>
              )}
            </div>
            <span className="font-medium">{contact.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


