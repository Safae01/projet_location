import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Feed from './components/Feed';
import Contacts from './components/Contacts';

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 bg-gray-100">
        <Sidebar />
        <Feed />
        <Contacts />
      </div>
    </div>
  );
}