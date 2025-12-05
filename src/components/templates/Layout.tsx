import React from "react"
import Header from "../organisms/Header"
import Footer from "../organisms/Footer"

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow container mx-auto px-3 md:px-4 py-4 md:py-6">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout