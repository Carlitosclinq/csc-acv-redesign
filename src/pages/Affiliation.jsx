import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Alert, AlertDescription } from '../components/ui/alert';
import { Euro, Users, FileText, HelpCircle } from 'lucide-react';

const Affiliation = () => {
  const avantages = [
    {
      title: 'Protection juridique',
      description: 'Assistance juridique gratuite pour tous les problèmes liés au travail',
      icon: FileText
    },
    {
      title: 'Service chômage',
      description: 'Gestion et paiement rapide de vos allocations',
      icon: Euro
    },
    {
      title: 'Action collective',
      description: 'Participation aux négociations et actions syndicales',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Rejoignez la CSC</h1>
            <p className="text-xl mb-8">
              Plus de 1,5 million de membres nous font confiance pour défendre leurs droits
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50">
              S'affilier maintenant
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Alert className="mb-8 border-green-200 bg-green-50">
          <AlertDescription>
            La première année d'affiliation, vous bénéficiez d'une réduction de 25% sur votre cotisation
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {avantages.map((avantage, index) => {
            const Icon = avantage.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Icon className="h-8 w-8 text-green-600" />
                    <h3 className="text-xl font-semibold">{avantage.title}</h3>
                  </div>
                  <p className="text-gray-600">{avantage.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Cotisations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold">Temps plein</h4>
                    <p className="text-2xl font-bold text-green-600 mt-2">17,39€ / mois</p>
                    <p className="text-gray-600 mt-1">Cotisation standard pour les travailleurs à temps plein</p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold">Temps partiel</h4>
                    <p className="text-2xl font-bold text-green-600 mt-2">10,72€ / mois</p>
                    <p className="text-gray-600 mt-1">Cotisation réduite pour les travailleurs à temps partiel</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Questions fréquentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <HelpCircle className="text-green-600" />
                      <h4 className="font-semibold">Comment s'affilier ?</h4>
                    </div>
                    <p className="text-gray-600 mt-2">
                      Remplissez le formulaire en ligne ou rendez-vous dans un de nos centres
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <HelpCircle className="text-green-600" />
                      <h4 className="font-semibold">Quand suis-je couvert ?</h4>
                    </div>
                    <p className="text-gray-600 mt-2">
                      La couverture commence dès la validation de votre affiliation
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliation;