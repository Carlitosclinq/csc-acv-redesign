import React from 'react';
import { Card } from '../components/ui/card';
import { Bell, FileText, Calendar } from 'lucide-react';

const MaCSC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full md:w-64">
            <Card className="p-4">
              <div className="space-y-2">
                <div className="p-2 bg-green-50 rounded-lg">
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-sm text-gray-600">Membre depuis 2020</p>
                </div>
                <nav className="space-y-1">
                  <a href="#" className="block px-4 py-2 rounded-lg hover:bg-green-50 text-green-700">
                    Mes documents
                  </a>
                  <a href="#" className="block px-4 py-2 rounded-lg hover:bg-green-50">
                    Mes paiements
                  </a>
                  <a href="#" className="block px-4 py-2 rounded-lg hover:bg-green-50">
                    Mes données
                  </a>
                </nav>
              </div>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <h1 className="text-3xl font-bold mb-6">Mon espace CSC</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <Card className="p-4">
                <div className="flex items-center space-x-3">
                  <Bell className="text-green-600" />
                  <div>
                    <h3 className="font-semibold">Notifications</h3>
                    <p className="text-sm text-gray-600">3 nouvelles</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center space-x-3">
                  <FileText className="text-green-600" />
                  <div>
                    <h3 className="font-semibold">Dossiers actifs</h3>
                    <p className="text-sm text-gray-600">2 en cours</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-green-600" />
                  <div>
                    <h3 className="font-semibold">Rendez-vous</h3>
                    <p className="text-sm text-gray-600">1 à venir</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Dossiers en cours</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold">Demande de chômage temporaire</h4>
                    <p className="text-sm text-gray-600">Dernière mise à jour: 15/01/2025</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                      En traitement
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MaCSC;