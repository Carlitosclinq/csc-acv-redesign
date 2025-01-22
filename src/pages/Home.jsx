import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
        <p className="text-sm text-yellow-700">
          Information importante : Manifestation nationale le 31 janvier 2025
        </p>
      </div>

      <section className="bg-green-600 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Bienvenue à la CSC</h1>
            <p className="text-xl mb-6">Votre syndicat à vos côtés pour défendre vos droits</p>
            <div className="space-x-4">
              <Link to="/ma-csc" className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50">
                Accéder à mon espace
              </Link>
              <Link to="/affiliation" className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800">
                S'affilier
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          <Link to="/affiliation" className="flex p-4 bg-white rounded-lg shadow hover:shadow-md border-2 border-green-500">
            <div>
              <h3 className="font-semibold text-gray-900">S'affilier</h3>
              <p className="text-sm text-gray-600">Rejoignez le plus grand syndicat de Belgique</p>
            </div>
          </Link>
          <Link to="/chomage" className="flex p-4 bg-white rounded-lg shadow hover:shadow-md">
            <div>
              <h3 className="font-semibold text-gray-900">Chômage</h3>
              <p className="text-sm text-gray-600">Gestion et paiement de vos allocations</p>
            </div>
          </Link>
          <Link to="/travailleurs" className="flex p-4 bg-white rounded-lg shadow hover:shadow-md">
            <div>
              <h3 className="font-semibold text-gray-900">Action syndicale</h3>
              <p className="text-sm text-gray-600">Défense des travailleurs et négociations</p>
            </div>
          </Link>
          <Link to="/contact" className="flex p-4 bg-white rounded-lg shadow hover:shadow-md">
            <div>
              <h3 className="font-semibold text-gray-900">Contact</h3>
              <p className="text-sm text-gray-600">Nos bureaux et permanences</p>
            </div>
          </Link>
        </div>
      </section>

      <section className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Action syndicale</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Négociations en cours</h3>
                <p className="text-gray-600">Suivi des négociations sectorielles</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Dernières victoires</h3>
                <p className="text-gray-600">Résultats des actions syndicales</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Événements</h2>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <div className="w-16 text-center">
                  <span className="text-green-600 font-semibold">31 Jan</span>
                </div>
                <div>
                  <h3 className="font-semibold">Manifestation nationale</h3>
                  <p className="text-sm text-gray-600">Pour la défense du pouvoir d'achat</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="w-16 text-center">
                  <span className="text-green-600 font-semibold">15 Fév</span>
                </div>
                <div>
                  <h3 className="font-semibold">Formation syndicale</h3>
                  <p className="text-sm text-gray-600">Droits et devoirs des délégués</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;