import { motion } from "framer-motion";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";
import StructureCard from "@/components/structure-card";
import TechCard from "@/components/tech-card";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary py-12 sm:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              React + Express Fullstack
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Modern fullstack project structure with TypeScript, React, Express, and more
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-medium shadow-md">
                Run Project
              </button>
              <button className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium">
                View Documentation
              </button>
            </div>
          </motion.div>
        </section>

        {/* Project Structure */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Project Structure</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StructureCard
                title="Frontend (Client)"
                description="React 18 with TypeScript, TailwindCSS, React Query, Framer Motion and Wouter"
                codeExample={`/client
  /src
    /assets
    /components
    /hooks
    /pages
    /utils
    App.tsx
    main.tsx
  index.html
  package.json
  tailwind.config.js
  vite.config.ts`}
                icon={
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25Z" fill="currentColor" />
                    <path d="M12 2.25C11.9202 2.25 11.8405 2.25 11.7607 2.25C11.538 2.25225 10.7539 2.3115 9.95548 2.928C9.28125 3.4455 8.86328 4.24275 8.59253 4.9455C8.55783 5.0415 8.52618 5.1375 8.49677 5.235C8.42355 5.43674 8.3559 5.64 8.2917 5.844C8.18978 6.16436 8.09797 6.4874 8.01675 6.813C7.65056 6.96276 7.28833 7.12199 6.93053 7.2915C6.72525 7.3842 6.51998 7.4824 6.31695 7.584C6.07943 7.70287 5.84474 7.82625 5.6134 7.9545C5.13675 8.2215 4.4055 8.64 3.87975 9.31875C3.3075 10.0515 3.3075 10.9815 3.87975 11.7165C4.01625 11.893 4.1775 12.0615 4.35675 12.225C4.54972 12.3979 4.74788 12.5642 4.95075 12.7237C5.06273 12.816 5.1757 12.9052 5.28967 12.9915C4.97247 13.8097 4.7344 14.6624 4.57725 15.5355C4.52648 15.8015 4.484 16.07 4.45025 16.338C4.41 16.6455 4.36425 17.136 4.43025 17.622C4.5765 18.792 5.1855 19.689 6.05775 20.0663C6.93225 20.4435 7.9875 20.232 9.03525 19.7625C9.31091 19.6329 9.58138 19.4913 9.84825 19.3377C10.017 19.2502 10.1857 19.1582 10.3545 19.062C10.6335 19.2045 10.913 19.338 11.1925 19.4625C11.463 19.584 11.7335 19.6942 12.006 19.794C12.3615 19.9215 12.7012 20.0242 13.035 20.1045C13.2825 20.163 13.536 20.214 13.794 20.2493C14.031 20.283 14.2733 20.3047 14.5158 20.3138C14.9857 20.341 15.4581 20.2973 15.9112 20.1045C16.7212 19.7588 17.3475 18.9113 17.5215 17.625C17.5215 17.541 17.5463 17.3348 17.571 17.1285C17.592 16.9222 17.613 16.716 17.613 16.5773C17.6295 16.2007 17.6273 15.8233 17.6063 15.447C17.586 15.09 17.55 14.733 17.505 14.3805C17.8214 14.2207 18.1308 14.0485 18.432 13.8645C18.6367 13.7423 18.8371 13.613 19.032 13.4767C19.3035 13.2997 19.566 13.11 19.8142 12.9075C20.0175 12.7402 20.2103 12.5602 20.3918 12.369C20.7608 12.0555 21.0878 11.6055 21.0945 11.0678C21.0878 10.245 20.4503 9.54225 19.8525 9.10125C19.491 8.83207 19.1121 8.58712 18.7185 8.3685C18.4553 8.22 18.1867 8.0805 17.913 7.9515C17.8305 7.9095 17.748 7.869 17.6655 7.8285C17.5819 7.7173 17.4914 7.61161 17.3947 7.512C17.3482 7.43783 17.2993 7.36591 17.2482 7.2965C17.136 7.1228 17.0238 6.94909 16.9117 6.77539C16.8638 6.6922 16.8159 6.609 16.7679 6.5258C16.692 6.41175 16.6125 6.29925 16.536 6.1875C16.3815 5.9595 16.2217 5.73775 16.0702 5.52525C15.6525 4.91325 15.2047 4.26 14.4495 3.795C13.752 3.36975 13.0178 3.36975 12.39 3.36975C12.261 3.36975 12.135 3.36975 12.0165 3.36975C12.0165 3.2865 12.015 3.20325 12.0135 3.12C12.0135 3.0765 12.012 3.033 12.012 2.99025C12.012 2.31675 12.0015 2.25 12 2.25Z" fill="currentColor" />
                  </svg>
                }
                iconBgColor="bg-blue-100"
                iconTextColor="text-primary"
              />

              <StructureCard
                title="Backend (Server)"
                description="Express with TypeScript, Drizzle ORM, and PostgreSQL integration"
                codeExample={`/server
  /src
    /config
    /controllers
    /db
    /middlewares
    /routes
    /types
    /utils
    index.ts
  package.json
  tsconfig.json`}
                icon={
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 13.5V10C20 8.89543 19.1046 8 18 8H6C4.89543 8 4 8.89543 4 10V13.5M20 13.5V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V13.5M20 13.5H4M8 8V4M16 8V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                }
                iconBgColor="bg-purple-100"
                iconTextColor="text-secondary"
              />

              <StructureCard
                title="Shared"
                description="Common types and schemas with Zod for type safety across the stack"
                codeExample={`/shared
  /constants
  /schemas
  /types
  /utils
  index.ts`}
                icon={
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L12 2M12 2L9 5M12 2V8M12 22C16.4183 22 20 18.4183 20 14C20 10.5252 17.7029 7.56766 14.5 6.5C14.1358 6.37907 13.8382 6.02763 13.8382 5.65V5.65C13.8382 5.10772 14.2959 4.65 14.8382 4.65C15.1526 4.65 15.446 4.79024 15.6382 5.02175C16.9099 6.53582 17.6997 8.51454 17.6997 10.7154C17.6997 15.531 13.8154 19.4154 8.99973 19.4154C8.51841 19.4154 8.03708 19.3792 7.56421 19.3068C7.00468 19.22 6.64539 18.6961 6.7322 18.1366V18.1366C6.80539 17.6458 7.2474 17.2948 7.74473 17.3355C10.0482 17.5473 12.1349 16.1162 12.9789 14.0621" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
                iconBgColor="bg-green-100"
                iconTextColor="text-accent"
              />
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <TechCard
                title="React 18"
                description="Modern UI library for building component-based interfaces with the latest features"
                icon={
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25Z" fill="currentColor" />
                    <path d="M12 2.25C11.9202 2.25 11.8405 2.25 11.7607 2.25C11.538 2.25225 10.7539 2.3115 9.95548 2.928C9.28125 3.4455 8.86328 4.24275 8.59253 4.9455C8.55783 5.0415 8.52618 5.1375 8.49677 5.235C8.42355 5.43674 8.3559 5.64 8.2917 5.844C8.18978 6.16436 8.09797 6.4874 8.01675 6.813C7.65056 6.96276 7.28833 7.12199 6.93053 7.2915C6.72525 7.3842 6.51998 7.4824 6.31695 7.584C6.07943 7.70287 5.84474 7.82625 5.6134 7.9545C5.13675 8.2215 4.4055 8.64 3.87975 9.31875C3.3075 10.0515 3.3075 10.9815 3.87975 11.7165C4.01625 11.893 4.1775 12.0615 4.35675 12.225C4.54972 12.3979 4.74788 12.5642 4.95075 12.7237C5.06273 12.816 5.1757 12.9052 5.28967 12.9915C4.97247 13.8097 4.7344 14.6624 4.57725 15.5355C4.52648 15.8015 4.484 16.07 4.45025 16.338C4.41 16.6455 4.36425 17.136 4.43025 17.622C4.5765 18.792 5.1855 19.689 6.05775 20.0663C6.93225 20.4435 7.9875 20.232 9.03525 19.7625C9.31091 19.6329 9.58138 19.4913 9.84825 19.3377C10.017 19.2502 10.1857 19.1582 10.3545 19.062C10.6335 19.2045 10.913 19.338 11.1925 19.4625C11.463 19.584 11.7335 19.6942 12.006 19.794C12.3615 19.9215 12.7012 20.0242 13.035 20.1045C13.2825 20.163 13.536 20.214 13.794 20.2493C14.031 20.283 14.2733 20.3047 14.5158 20.3138C14.9857 20.341 15.4581 20.2973 15.9112 20.1045C16.7212 19.7588 17.3475 18.9113 17.5215 17.625C17.5215 17.541 17.5463 17.3348 17.571 17.1285C17.592 16.9222 17.613 16.716 17.613 16.5773C17.6295 16.2007 17.6273 15.8233 17.6063 15.447C17.586 15.09 17.55 14.733 17.505 14.3805C17.8214 14.2207 18.1308 14.0485 18.432 13.8645C18.6367 13.7423 18.8371 13.613 19.032 13.4767C19.3035 13.2997 19.566 13.11 19.8142 12.9075C20.0175 12.7402 20.2103 12.5602 20.3918 12.369C20.7608 12.0555 21.0878 11.6055 21.0945 11.0678C21.0878 10.245 20.4503 9.54225 19.8525 9.10125C19.491 8.83207 19.1121 8.58712 18.7185 8.3685C18.4553 8.22 18.1867 8.0805 17.913 7.9515C17.8305 7.9095 17.748 7.869 17.6655 7.8285C17.5819 7.7173 17.4914 7.61161 17.3947 7.512C17.3482 7.43783 17.2993 7.36591 17.2482 7.2965C17.136 7.1228 17.0238 6.94909 16.9117 6.77539C16.8638 6.6922 16.8159 6.609 16.7679 6.5258C16.692 6.41175 16.6125 6.29925 16.536 6.1875C16.3815 5.9595 16.2217 5.73775 16.0702 5.52525C15.6525 4.91325 15.2047 4.26 14.4495 3.795C13.752 3.36975 13.0178 3.36975 12.39 3.36975C12.261 3.36975 12.135 3.36975 12.0165 3.36975C12.0165 3.2865 12.015 3.20325 12.0135 3.12C12.0135 3.0765 12.012 3.033 12.012 2.99025C12.012 2.31675 12.0015 2.25 12 2.25Z" fill="currentColor" />
                  </svg>
                }
              />

              <TechCard
                title="TypeScript"
                description="Strongly typed JavaScript for better developer experience and fewer runtime errors"
                icon={
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 9.4L12.5736 4.89855C12.4386 4.74354 12.2235 4.75194 12.0977 4.91692L7.5 10.5M16.5 9.4L13.6768 13.7748C13.6768 13.7748 12.6173 12.903 11.5283 12M16.5 9.4C16.8333 9.83333 17.5 10.9 17.5 12C17.5 13.4 16.6667 14.5 16.25 14.75M7.5 10.5L11.5283 12M7.5 10.5C7.16667 11 6.5 12.3 6.5 13.5C6.5 14.7 7.16667 15.8333 7.5 16.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
              />

              <TechCard
                title="TailwindCSS"
                description="Utility-first CSS framework for rapid UI development without leaving your HTML"
                icon={
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.306 12.691C6.306 10.043 8.402 7.95 11.05 7.95H12.95C15.598 7.95 17.694 10.043 17.694 12.691M5.5 7.95V16.95M18.5 7.95V16.95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
              />

              <TechCard
                title="Drizzle ORM"
                description="TypeScript-first ORM with a focus on type safety and developer experience"
                icon={
                  <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.25 6.375C20.25 8.65317 16.5563 10.5 12 10.5C7.44365 10.5 3.75 8.65317 3.75 6.375M20.25 6.375C20.25 4.09683 16.5563 2.25 12 2.25C7.44365 2.25 3.75 4.09683 3.75 6.375M20.25 6.375V17.625C20.25 19.9032 16.5563 21.75 12 21.75C7.44365 21.75 3.75 19.9032 3.75 17.625V6.375M20.25 6.375V10.125M3.75 6.375V10.125M20.25 10.125V13.875C20.25 16.1532 16.5563 18 12 18C7.44365 18 3.75 16.1532 3.75 13.875V10.125M20.25 10.125C20.25 12.4032 16.5563 14.25 12 14.25C7.44365 14.25 3.75 12.4032 3.75 10.125" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                }
              />
            </div>
          </div>
        </section>

        {/* Example Code Section */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Example Code</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Frontend Example */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="bg-neutral-dark px-4 py-3 flex items-center">
                  <h3 className="text-white font-medium">App.tsx</h3>
                  <span className="ml-auto text-xs text-gray-400">client/src/App.tsx</span>
                </div>
                <div className="p-4 bg-gray-900 text-gray-300 overflow-x-auto">
                  <pre className="text-sm font-mono"><code>{`import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { motion } from 'framer-motion'
import { Route, Switch } from 'wouter'

function App() {
  const [count, setCount] = useState(0)
  
  const { data, isLoading } = useQuery({
    queryKey: ['hello'],
    queryFn: async () => {
      const response = await fetch('/api/hello')
      return response.json()
    }
  })

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50 flex items-center justify-center"
    >
      <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          React + Express Fullstack
        </h1>
        
        {isLoading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : (
          <p className="text-center text-lg text-gray-800">
            {data?.message || "Hello World!"}
          </p>
        )}
        
        <div className="mt-8 flex justify-center">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={() => setCount(count + 1)}
          >
            Count: {count}
          </button>
        </div>
      </div>
    </motion.div>
  )
}`}</code></pre>
                </div>
              </div>
              
              {/* Backend Example */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="bg-neutral-dark px-4 py-3 flex items-center">
                  <h3 className="text-white font-medium">index.ts</h3>
                  <span className="ml-auto text-xs text-gray-400">server/src/index.ts</span>
                </div>
                <div className="p-4 bg-gray-900 text-gray-300 overflow-x-auto">
                  <pre className="text-sm font-mono"><code>{`import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import { drizzle } from 'drizzle-orm/neon-http'
import { neon } from '@neondatabase/serverless'

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())

// Database setup
const sql = neon(process.env.DATABASE_URL!)
const db = drizzle(sql)

// API routes
app.get('/api/hello', (req, res) => {
  res.json({ message: '¡Hola Mundo desde Express!' })
})

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../../client/dist')))
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'))
  })
}

// Start the server
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`)
})`}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Getting Started</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Development Commands</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 text-primary font-mono p-2 rounded min-w-[120px] text-sm">
                        npm run dev
                      </div>
                      <div>
                        <p className="text-neutral-medium">Start development server with hot reloading</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 text-primary font-mono p-2 rounded min-w-[120px] text-sm">
                        npm run build
                      </div>
                      <div>
                        <p className="text-neutral-medium">Build the application for production</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 text-primary font-mono p-2 rounded min-w-[120px] text-sm">
                        npm start
                      </div>
                      <div>
                        <p className="text-neutral-medium">Run the application in production mode</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-semibold mb-2">Environment Setup</h4>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <code className="text-xs font-mono text-neutral-dark block">
                        <pre>{`# .env example
PORT=3000
DATABASE_URL=postgres://user:password@hostname:5432/database
NODE_ENV=development`}</pre>
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
