import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">CSC | ACV</h3>
            <p className="text-gray-400">Le plus grand syndicat de Belgique</p>
            <div className="mt-4 space-y-2">
              <a href="https://www.facebook.com/lacsc" className="block text-gray-400 hover:text-white">
                Facebook
              </a>
              <a href="https://twitter.com/la_csc" className="block text-gray-400 hover:text-white">
                Twitter
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/ma-csc" className="text-gray-400 hover:text-white">
                  Mon espace
                </Link>
              </li>
              <li>
                <Link to="/chomage" className="text-gray-400 hover:text-white">
                  Chômage
                </Link>
              </li>
              <li>
                <Link to="/affiliation" className="text-gray-400 hover:text-white">
                  S'affilier
                </Link>
              </li>
              <li>
                <Link to="/travailleurs" className="text-gray-400 hover:text-white">
                  Travailleurs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-green-500" />
                <span className="text-gray-400">02 246 31 11</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-green-500" />
                <a href="mailto:info@acv-csc.be" className="text-gray-400 hover:text-white">
                  info@acv-csc.be
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-green-500" />
                <address className="text-gray-400 not-italic">
                  Chaussée de Haecht, 579<br />
                  1030 Bruxelles<br />
                  Belgique
                </address>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Informations légales</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Vie privée
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Accessibilité
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Nous contacter
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} CSC-ACV. Tous droits réservés.
            </p>
            <div className="mt-4 md:mt-0">
              <select 
                className="bg-gray-700 text-white rounded px-3 py-1 text-sm"
                defaultValue="fr"
              >
                <option value="fr">Français</option>
                <option value="nl">Nederlands</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;