import React from 'react';
import Gallery from '../../Components/photos';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-500">
      <header className="bg-gray-800 text-white text-center py-4">
        <h1 className="text-3xl font-bold"> (الامام الحسين عليه السلام) "والحياة في موتكم قاهرين"</h1>
      </header>
      <main className="p-4">
        <Gallery />
      </main>
      <footer className=" bg-gray-800 text-white text-center py-2 mt-8">
        <p>ها هو الجنوب يتلو المأتم</p>
      </footer>
    </div>
  );
};

export default HomePage;
