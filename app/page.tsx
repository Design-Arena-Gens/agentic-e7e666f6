'use client'

import { useState } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-3xl font-bold gradient-text">Intelliwave</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#accueil" className="text-gray-700 hover:text-primary transition">Accueil</a>
              <a href="#services" className="text-gray-700 hover:text-primary transition">Services</a>
              <a href="#avantages" className="text-gray-700 hover:text-primary transition">Avantages</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition">Contact</a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#accueil" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Accueil</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Services</a>
              <a href="#avantages" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Avantages</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-100">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
            Transformez votre entreprise avec l'<span className="gradient-text">IA</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Intelliwave crée des chatbots intelligents sur mesure et automatise vos processus avec n8n
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="gradient-bg text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition transform hover:-translate-y-1">
              Démarrer votre projet
            </a>
            <a href="#services" className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition transform hover:-translate-y-1">
              Découvrir nos services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Nos Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Chatbots sur Mesure</h3>
              <p className="text-gray-600">
                Conception et développement de chatbots intelligents adaptés à vos besoins spécifiques.
                Support client, génération de leads, assistance automatisée.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Automatisation n8n</h3>
              <p className="text-gray-600">
                Création de workflows automatisés puissants avec n8n. Connectez vos outils,
                automatisez vos tâches répétitives et gagnez en productivité.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-red-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Intelligence Artificielle</h3>
              <p className="text-gray-600">
                Intégration d'IA avancée (GPT, Claude) dans vos processus.
                Analyse de données, traitement du langage naturel, prédictions intelligentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="avantages" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Pourquoi choisir Intelliwave ?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Rapidité</h3>
              <p className="text-gray-600">Déploiement rapide de vos solutions</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Personnalisé</h3>
              <p className="text-gray-600">Solutions sur mesure adaptées à vos besoins</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-xl font-bold mb-2">ROI Optimal</h3>
              <p className="text-gray-600">Réduction des coûts et gains de productivité</p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-4xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Fiable</h3>
              <p className="text-gray-600">Support continu et maintenance assurée</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à automatiser votre entreprise ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Discutons de votre projet et découvrez comment nos chatbots peuvent transformer votre activité
          </p>
          <a href="#contact" className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg inline-block hover:shadow-2xl transition transform hover:-translate-y-1">
            Demander une consultation gratuite
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            Contactez-nous
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Nom complet</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Téléphone</label>
              <input
                type="tel"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="+33 6 12 34 56 78"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Projet</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Décrivez votre projet..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full gradient-bg text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition transform hover:-translate-y-1"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-3xl font-bold mb-4 gradient-text">Intelliwave</div>
          <p className="text-gray-400 mb-6">
            Votre partenaire en automatisation AI et chatbots intelligents
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white transition">GitHub</a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Intelliwave. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}
