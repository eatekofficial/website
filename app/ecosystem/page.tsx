import React from "react"
import EcosystemMap from "@/components/ecosystem-map"
import { getAllNodesByCategory } from "@/lib/ecosystem-data"
import Link from "next/link"

export default function EcosystemPage() {
  const coreNodes = getAllNodesByCategory("core")
  const educationNodes = getAllNodesByCategory("education")
  const artNodes = getAllNodesByCategory("art")
  const technologyNodes = getAllNodesByCategory("technology")
  const serviceNodes = getAllNodesByCategory("service")

  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">EATEK Ecosystem</h1>
        <p className="text-xl text-gray-600">
          Explore our interconnected ecosystem of education, art, and technology initiatives designed to drive
          innovation and positive change.
        </p>
      </div>

      <div className="mb-16">
        <EcosystemMap />
      </div>

      <div className="grid gap-16">
        <section>
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="bg-indigo-500 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </span>
            Core
          </h2>
          <div className="grid md:grid-cols-1 gap-4">
            {coreNodes.map((node) => (
              <Link
                key={node.id}
                href={`/ecosystem/${node.slug}`}
                className="p-6 rounded-lg border border-gray-200 hover:border-indigo-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: node.color }}>
                    {React.createElement(node.icon, { className: "text-white", size: 24 })}
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{node.name}</h3>
                    <p className="text-gray-600 text-sm">{node.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </span>
            Education
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {educationNodes.map((node) => (
              <Link
                key={node.id}
                href={`/ecosystem/${node.slug}`}
                className="p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="flex flex-col gap-3">
                  <div className="p-2 rounded-lg w-fit" style={{ backgroundColor: node.color }}>
                    {React.createElement(node.icon, { className: "text-white", size: 20 })}
                  </div>
                  <h3 className="font-medium">{node.name}</h3>
                  <p className="text-gray-600 text-sm">{node.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="bg-pink-500 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </span>
            Art
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {artNodes.map((node) => (
              <Link
                key={node.id}
                href={`/ecosystem/${node.slug}`}
                className="p-6 rounded-lg border border-gray-200 hover:border-pink-300 hover:shadow-md transition-all"
              >
                <div className="flex flex-col gap-3">
                  <div className="p-2 rounded-lg w-fit" style={{ backgroundColor: node.color }}>
                    {React.createElement(node.icon, { className: "text-white", size: 20 })}
                  </div>
                  <h3 className="font-medium">{node.name}</h3>
                  <p className="text-gray-600 text-sm">{node.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="bg-emerald-500 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </span>
            Technology
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {technologyNodes.map((node) => (
              <Link
                key={node.id}
                href={`/ecosystem/${node.slug}`}
                className="p-6 rounded-lg border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all"
              >
                <div className="flex flex-col gap-3">
                  <div className="p-2 rounded-lg w-fit" style={{ backgroundColor: node.color }}>
                    {React.createElement(node.icon, { className: "text-white", size: 20 })}
                  </div>
                  <h3 className="font-medium">{node.name}</h3>
                  <p className="text-gray-600 text-sm">{node.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="bg-purple-500 w-8 h-8 rounded-full flex items-center justify-center mr-3 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </span>
            Services
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {serviceNodes.map((node) => (
              <Link
                key={node.id}
                href={`/ecosystem/${node.slug}`}
                className="p-6 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg" style={{ backgroundColor: node.color }}>
                    {React.createElement(node.icon, { className: "text-white", size: 24 })}
                  </div>
                  <div>
                    <h3 className="font-medium">{node.name}</h3>
                    <p className="text-gray-600 text-sm">{node.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
