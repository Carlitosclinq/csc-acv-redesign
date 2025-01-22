import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

const LoginForm = ({ redirectTo = '/ma-csc' }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    try {
      const result = await login(username, password);
      if (result.success) {
        navigate(redirectTo);
      } else {
        setError('Identifiants incorrects');
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Connexion à votre espace CSC</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg flex items-center">
              <AlertCircle className="h-5 w-5 mr-2" />
              {error}
            </div>
          )}

          <div>
            <label 
              htmlFor="username" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Numéro de membre ou email
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="CSC123456 ou email@example.com"
            />
          </div>

          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mot de passe
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <span className="ml-2 text-sm text-gray-600">Se souvenir de moi</span>
            </label>

            <a 
              href="/forgot-password"
              className="text-sm text-green-600 hover:text-green-700"
            >
              Mot de passe oublié ?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {loading ? 'Connexion en cours...' : 'Se connecter'}
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Pas encore membre ?{' '}
            <a href="/affiliation" className="text-green-600 hover:text-green-700">
              S'affilier
            </a>
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;