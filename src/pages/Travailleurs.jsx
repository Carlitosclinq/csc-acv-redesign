import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { Shield, FileText, Users, Building, ArrowRight } from 'lucide-react';

const Travailleurs = () => {
  const secteurs = [
    { nom: 'Alimentation et Services', membres: '120.000+' },
    { nom: 'Bâtiment - Industrie & Énergie', membres: '280.000+' },
    { nom: 'Transport et Communications', membres: '90.000+' },
    { nom: 'Services Publics', membres: '170.000+' }
  ];

  const actualites = [
    {
      date: '20 janvier 2025',
      titre: 'Négociations salariales dans le secteur alimentaire',
      description: 'Les syndicats demandent une augmentation de 3% pour tous les travailleurs.'
    },
    {
      date: '18 janvier 2025',
      titre: 'Nouvelles mesures pour le bien-être au travail',
      description: 'La CSC obtient des avancées majeures pour la protection des travailleurs.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-green-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Espace Travailleurs</h1>
          <p className="text-xl">Défendons ensemble vos droits et votre bien-être au travail</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card>
            <CardContent className="p-6">
              <Shield className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Protection juridique</h3>
              <p className="text-gray-600 mb-4">Assistance juridique gratuite pour tous les problèmes liés au travail</p>
              <Link to="/services/juridique" className="text-green-600 hover:text-green-700 flex items-center">
                En savoir plus <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <FileText className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Conseils personnalisés</h3>
              <p className="text-gray-600 mb-4">Des experts à votre écoute pour toutes vos questions</p>
              <Link to="/contact" className="text-green-600 hover:text-green-700 flex items-center">
                Nous contacter <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Users className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Action collective</h3>
              <p className="text-gray-600 mb-4">Participez aux actions syndicales et faites entendre votre voix</p>
              <Link to="/actions" className="text-green-600 hover:text-green-700 flex items-center">
                Voir les actions <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Building className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Secteurs professionnels</h3>
              <p className="text-gray-600 mb-4">Trouvez les informations spécifiques à votre secteur</p>
              <Link to="/secteurs" className="text-green-600 hover:text-green-700 flex items-center">
                Voir les secteurs <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Actualités syndicales</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {actualites.map((actu, index) => (
                    <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                      <span className="text-sm text-green-600">{actu.date}</span>
                      <h4 className="font-semibold mt-1">{actu.titre}</h4>
                      <p className="text-gray-600 mt-2">{actu.description}</p>
                      <Link to="#" className="text-green-600 hover:text-green-700 mt-2 inline-block">
                        Lire la suite →
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Nos secteurs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {secteurs.map((secteur, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold">{secteur.nom}</h4>
                      <p className="text-sm text-gray-600 mt-1">{secteur.membres} membres</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travailleurs;