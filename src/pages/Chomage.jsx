import React from 'react';
import { Card } from '../components/ui/card';
import { Alert } from '../components/ui/alert';
import { FileCheck, Upload, HelpCircle, Clock } from 'lucide-react';

const Chomage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-600 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">Chômage</h1>
          <p className="text-xl">Gérez vos allocations de chômage en ligne</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Alert className="mb-8">
          <div className="text-green-700">
            N'oubliez pas d'introduire votre carte de contrôle avant le 3 du mois prochain.
          </div>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <FileCheck className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="font-semibold text-lg">Carte de contrôle</h3>
                <p className="text-gray-600">Complétez votre carte mensuelle</p>
              </div>
            </div>
            <a 
              href="#" 
              className="mt-4 inline-block w-full text-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Accéder
            </a>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <Upload className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="font-semibold text-lg">Documents</h3>
                <p className="text-gray-600">Envoyez vos documents</p>
              </div>
            </div>
            <a 
              href="#" 
              className="mt-4 inline-block w-full text-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Envoyer
            </a>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <Clock className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="font-semibold text-lg">Suivi</h3>
                <p className="text-gray-600">État de vos paiements</p>
              </div>
            </div>
            <a 
              href="#" 
              className="mt-4 inline-block w-full text-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Consulter
            </a>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Informations utiles</h2>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold">Chômage temporaire</h4>
                  <p className="text-gray-600 mt-2">
                    Informations sur les conditions et procédures pour le chômage temporaire
                  </p>
                  <a href="#" className="text-green-600 hover:text-green-700 mt-2 inline-block">
                    En savoir plus →
                  </a>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold">Chômage complet</h4>
                  <p className="text-gray-600 mt-2">
                    Tout savoir sur vos droits et obligations en tant que chômeur complet
                  </p>
                  <a href="#" className="text-green-600 hover:text-green-700 mt-2 inline-block">
                    En savoir plus →
                  </a>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Besoin d'aide ?</h2>
            <div className="space-y-4">
              <button className="w-full flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50">
                <HelpCircle className="text-green-600" />
                <div className="text-left">
                  <h4 className="font-semibold">FAQ</h4>
                  <p className="text-sm text-gray-600">Réponses aux questions fréquentes</p>
                </div>
              </button>

              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold">Contactez-nous</h4>
                <p className="text-sm text-gray-600 mt-2">
                  Nos conseillers sont disponibles du lundi au vendredi de 8h30 à 12h30
                </p>
                <a 
                  href="#" 
                  className="mt-3 inline-block text-green-600 hover:text-green-700"
                >
                  Voir les permanences →
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chomage;