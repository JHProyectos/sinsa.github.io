"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-orange-900/20 bg-gray-900/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-orange-500 text-white font-bold text-xl p-2 rounded">SINSA</div>
          <span className="hidden md:inline-block text-white font-medium">Soluciones Industriales</span>
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-white hover:text-orange-400 transition-colors">
            Inicio
          </Link>
          <Link href="/proyectos" className="text-sm font-medium text-white hover:text-orange-400 transition-colors">
            Proyectos
          </Link>
          <Link href="/servicios" className="text-sm font-medium text-white hover:text-orange-400 transition-colors">
            Servicios
          </Link>
          <Link href="/nosotros" className="text-sm font-medium text-white hover:text-orange-400 transition-colors">
            Nosotros
          </Link>
          <Button asChild variant="default">
            <Link href="/contacto">Contacto</Link>
          </Button>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-orange-900/20">
          <div className="container py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium text-white hover:text-orange-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/proyectos"
              className="text-sm font-medium text-white hover:text-orange-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Proyectos
            </Link>
            <Link
              href="/servicios"
              className="text-sm font-medium text-white hover:text-orange-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="/nosotros"
              className="text-sm font-medium text-white hover:text-orange-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Button asChild variant="default" className="w-full">
              <Link href="/contacto" onClick={() => setIsMenuOpen(false)}>
                Contacto
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

