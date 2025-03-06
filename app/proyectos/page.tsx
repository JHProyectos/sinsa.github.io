import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Filter } from "lucide-react"

export default function ProyectosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Nuestros <span className="text-orange-500">Proyectos</span>
            </h1>
            <p className="text-xl text-gray-300">
              Descubre nuestra trayectoria a través de los proyectos que hemos realizado para clientes de diversos
              sectores industriales.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 bg-gray-900">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="bg-gray-800 rounded-lg p-6 sticky top-20">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Filter size={18} className="text-orange-500" />
                  Filtrar proyectos
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Tipo de proyecto</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
                        <input type="checkbox" className="rounded text-orange-500 focus:ring-orange-500" />
                        Construcción metálica
                      </label>
                      <label className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
                        <input type="checkbox" className="rounded text-orange-500 focus:ring-orange-500" />
                        Obra civil
                      </label>
                      <label className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
                        <input type="checkbox" className="rounded text-orange-500 focus:ring-orange-500" />
                        Mantenimiento
                      </label>
                      <label className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
                        <input type="checkbox" className="rounded text-orange-500 focus:ring-orange-500" />
                        Proyecto integral
                      </label>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Sector</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
                        <input type="checkbox" className="rounded text-orange-500 focus:ring-orange-500" />
                        Agroindustrial
                      </label>
                      <label className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
                        <input type="checkbox" className="rounded text-orange-500 focus:ring-orange-500" />
                        Alimenticio
                      </label>
                      <label className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
                        <input type="checkbox" className="rounded text-orange-500 focus:ring-orange-500" />
                        Logístico
                      </label>
                      <label className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
                        <input type="checkbox" className="rounded text-orange-500 focus:ring-orange-500" />
                        Industrial
                      </label>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-2">Año</h4>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
                        <input type="checkbox" className="rounded text-orange-500 focus:ring-orange-500" />
                        2025
                      </label>
                      <label className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
                        <input type="checkbox" className="rounded text-orange-500 focus:ring-orange-500" />
                        2024
                      </label>
                      <label className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
                        <input type="checkbox" className="rounded text-orange-500 focus:ring-orange-500" />
                        2023
                      </label>
                      <label className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
                        <input type="checkbox" className="rounded text-orange-500 focus:ring-orange-500" />
                        Anteriores
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-grow">
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/proyectos/mantenimiento-cubierta-hormigon" className="block">
                  <Card className="bg-gray-800 border-orange-900/20 overflow-hidden project-card h-full">
                    <div className="relative h-48">
                      {/* Aquí irá una imagen del proyecto */}
                      <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                        <p className="text-white text-center p-4">Imagen del proyecto de mantenimiento</p>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-orange-500 text-sm mb-2">
                        <Clock size={16} />
                        <span>Febrero 2025</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">Mantenimiento de Cubierta de Hormigón</h3>
                      <p className="text-gray-400 mb-4">
                        Impermeabilización y reparación de cubiertas de hormigón en instalaciones frigoríficas para
                        Black Bamboo Enterprise S.A.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-orange-500/10 text-orange-400 text-xs px-2 py-1 rounded">
                          Mantenimiento
                        </span>
                        <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">Frigorífico</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="#" className="block">
                  <Card className="bg-gray-800 border-orange-900/20 overflow-hidden project-card h-full">
                    <div className="relative h-48">
                      {/* Aquí irá una imagen del proyecto */}
                      <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                        <p className="text-white text-center p-4">Imagen de proyecto futuro</p>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-orange-500 text-sm mb-2">
                        <Clock size={16} />
                        <span>Enero 2025</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">Construcción de Nave Industrial</h3>
                      <p className="text-gray-400 mb-4">
                        Diseño y construcción de nave industrial con estructura metálica y cerramientos térmicos para
                        empresa del sector agroindustrial.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-orange-500/10 text-orange-400 text-xs px-2 py-1 rounded">
                          Construcción metálica
                        </span>
                        <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">Agroindustrial</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="#" className="block">
                  <Card className="bg-gray-800 border-orange-900/20 overflow-hidden project-card h-full">
                    <div className="relative h-48">
                      {/* Aquí irá una imagen del proyecto */}
                      <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                        <p className="text-white text-center p-4">Imagen de proyecto futuro</p>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-orange-500 text-sm mb-2">
                        <Clock size={16} />
                        <span>Diciembre 2024</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">Ampliación de Planta Procesadora</h3>
                      <p className="text-gray-400 mb-4">
                        Ampliación y modernización de planta procesadora de alimentos con soluciones mixtas de hormigón
                        y estructura metálica.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-orange-500/10 text-orange-400 text-xs px-2 py-1 rounded">
                          Proyecto integral
                        </span>
                        <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">Alimenticio</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Link href="#" className="block">
                  <Card className="bg-gray-800 border-orange-900/20 overflow-hidden project-card h-full">
                    <div className="relative h-48">
                      {/* Aquí irá una imagen del proyecto */}
                      <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                        <p className="text-white text-center p-4">Imagen de proyecto futuro</p>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-orange-500 text-sm mb-2">
                        <Clock size={16} />
                        <span>Noviembre 2024</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">Centro de Distribución Logístico</h3>
                      <p className="text-gray-400 mb-4">
                        Construcción de centro de distribución con estructura metálica, oficinas administrativas y playa
                        de maniobras.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-orange-500/10 text-orange-400 text-xs px-2 py-1 rounded">
                          Construcción metálica
                        </span>
                        <span className="bg-orange-500/10 text-orange-400 text-xs px-2 py-1 rounded">Obra civil</span>
                        <span className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">Logístico</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

