'use client'
import React, { useState } from 'react';
import { Clock, User, Bot, Database, BarChart3, TrendingUp, Shield, Settings, Zap, Users } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "MCP will be the death of low-code automation, and other spooky stories",
    author: "Andrew Green",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "AI",
    featured: false
  },
  {
    id: 2,
    title: "Introducing Evaluations for AI workflows",
    author: "Charley Mann",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "AI",
    featured: false
  },
  {
    id: 3,
    title: "Community nodes available on n8n Cloud",
    author: "Marketing team",
    readTime: "3 min read",
    image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "Tools Alternatives",
    featured: false
  },
  {
    id: 4,
    title: "Build an AI Agent Powered by MongoDB Atlas for Memory and Vector Search (+ Free Workflow Template)",
    author: "Pavel Duchovny",
    readTime: "12 min read",
    image: "https://images.pexels.com/photos/8386421/pexels-photo-8386421.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "Database",
    featured: false
  },
  {
    id: 5,
    title: "11 Game-Changing Open-Source AI Tools Every Dev Should Know About",
    author: "Yulia Dmitrievna, Eduard Peradejordi",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/8386427/pexels-photo-8386427.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "AI",
    featured: false
  },
  {
    id: 6,
    title: "How to Run a Local LLM: Complete Guide to Setup & Best Models [2025]",
    author: "Mihai Faraon",
    readTime: "15 min read",
    image: "https://images.pexels.com/photos/8386426/pexels-photo-8386426.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "AI",
    featured: false
  },
  {
    id: 7,
    title: "How To Build Your First AI Agent (+Free Workflow Template)",
    author: "Mihai Faraon",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/8386425/pexels-photo-8386425.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "AI",
    featured: false
  },
  {
    id: 8,
    title: "9 AI Agent Frameworks Battle: Why Developers Prefer n8n",
    author: "Yulia Dmitrievna, Eduard Peradejordi",
    readTime: "12 min read",
    image: "https://images.pexels.com/photos/8386424/pexels-photo-8386424.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "AI",
    featured: false
  },
  {
    id: 9,
    title: "n8n closes €55M Series B round led by Highland Europe",
    author: "Jan Oberhauser",
    readTime: "4 min read",
    image: "https://images.pexels.com/photos/8386423/pexels-photo-8386423.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "Marketing automation",
    featured: false
  },
  {
    id: 10,
    title: "15 Practical AI Agent Examples to Scale Your Business in 2025",
    author: "Federico Trotta",
    readTime: "14 min read",
    image: "https://images.pexels.com/photos/8386419/pexels-photo-8386419.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "AI",
    featured: false
  },
  {
    id: 11,
    title: "8 best AI coding tools for developers: tested & compared!",
    author: "Yulia Dmitrievna, Eduard Peradejordi",
    readTime: "11 min read",
    image: "https://images.pexels.com/photos/8386418/pexels-photo-8386418.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    category: "AI",
    featured: false
  }
];

const categories = [
  { name: 'AI', icon: Bot },
  { name: 'Database', icon: Database },
  { name: 'Marketing automation', icon: BarChart3 },
  { name: 'Sales', icon: TrendingUp },
  { name: 'SecOps', icon: Shield },
  { name: 'ITOps', icon: Settings },
  { name: 'Tools Alternatives', icon: Zap },
  { name: 'Bot', icon: Users }
];

export default function blog () {
  const [activeCategory, setActiveCategory] = useState('AI');
  const [visiblePosts, setVisiblePosts] = useState(9);

  const filteredPosts = activeCategory === 'AI' ? blogPosts : blogPosts.filter(post => post.category === activeCategory);

  const loadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  return (
    <div className="min-h-screen">


      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0  to-transparent"></div>
          <div className="relative z-10 max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white rounded-full opacity-60"></div>
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full opacity-40"></div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              7 Best AI Agent Builders: An Expert Market Breakdown
            </h1>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed max-w-3xl">
              Explore 7 top AI agent builders: workflow-native, AI-native & hybrid. Compare AI agent builder platforms by use case, integration & flexibility!
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop" alt="Author" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop" alt="Author" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop" alt="Author" className="w-10 h-10 rounded-full border-2 border-white" />
              </div>
              <div className="text-sm text-purple-200">
                <span className="font-medium">Yulia Dmitrievna and others</span>
                <div className="flex items-center space-x-2 mt-1">
                  <span>June 19, 2024</span>
                  <span>•</span>
                  <span>15 min read</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-cyan-400/20 to-transparent rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-400/20 to-transparent rounded-full transform translate-x-16 translate-y-16"></div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-100 text-center mb-8">Explore by use case</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.name
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 shadow-sm'
                }`}
              >
                <IconComponent className="h-4 w-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(0, visiblePosts).map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        {visiblePosts < filteredPosts.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Load more
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

