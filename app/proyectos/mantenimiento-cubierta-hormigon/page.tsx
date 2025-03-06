import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock, MapPin, User } from "lucide-react"

export default function MantenimientoCubiertaHormigonPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link href="/proyectos" className="text-orange-500 hover:text-orange-400 inline-flex items-center gap-1">
                <ArrowLeft size={16} />
                Volver a proyectos
              </Link>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Mantenimiento de Cubierta de Hormigón</h1>
            <div className="flex flex-wrap gap-6 text-gray-300 mb-6">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-orange-500" />
                <span>Febrero 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-orange-500" />
                <span>Hughes, Santa Fe</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={18} className="text-orange-500" />
                <span>Black Bamboo Enterprise S.A.</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-orange-500" />
                <span>Duración: 3 semanas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-12 bg-gray-900">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-gray-800 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Descripción del Proyecto</h2>

                <div className="space-y-6 text-gray-300">
                  <p>
                    El proyecto consistió en la evaluación, diagnóstico e intervención de las cubiertas de hormigón de
                    las instalaciones frigoríficas de Black Bamboo Enterprise S.A., ubicadas en Hughes, Santa Fe. El
                    objetivo principal fue resolver los problemas de filtraciones que afectaban la operatividad del
                    frigorífico y comprometían la calidad de los productos almacenados.
                  </p>

                  <div className="relative h-80 rounded-lg overflow-hidden">
                    {/* Aquí irá una imagen del proyecto */}
                    <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                      <p className="text-white text-center p-4">Imagen panorámica del proyecto</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Problemática Identificada</h3>
                  <p>
                    Durante la evaluación inicial se identificaron diversas problemáticas que afectaban la integridad de
                    las cubiertas:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>
                      Deterioro significativo de la membrana asfáltica previamente instalada, con desprendimientos y
                      falta de adherencia al hormigón base.
                    </li>
                    <li>
                      Deficiencias en la pendiente de desagüe que provocaban acumulación de agua en diversos sectores de
                      la cubierta.
                    </li>
                    <li>Obstrucción de desagües por presencia de sedimentos, residuos y vegetación.</li>
                    <li>
                      Presencia de grietas de tamaño significativo en la losa de hormigón, permitiendo filtraciones
                      hacia el interior.
                    </li>
                    <li>Deficiencias en cubierta metálica del sector de cuarteo y cámaras.</li>
                  </ul>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      {/* Aquí irá una imagen del problema */}
                      <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                        <p className="text-white text-center p-4">Imagen de deterioro inicial</p>
                      </div>
                    </div>
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      {/* Aquí irá una imagen del problema */}
                      <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                        <p className="text-white text-center p-4">Imagen de filtraciones</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Solución Implementada</h3>
                  <p>Se implementó un sistema integral de impermeabilización que incluyó:</p>
                  <ol className="list-decimal pl-6 space-y-2 mt-2">
                    <li>Remoción completa del material impermeabilizante existente en las zonas afectadas.</li>
                    <li>Apertura y tratamiento de grietas con discos de corte para hormigón.</li>
                    <li>
                      Aplicación de pintura asfáltica diluida para lograr mayor fijación en las paredes de las grietas y
                      fisuras.
                    </li>
                    <li>Refuerzo con velos de fibra sobre las grietas más afectadas.</li>
                    <li>
                      Aplicación de tres manos consecutivas de emulsión asfáltica para sellar completamente las
                      rajaduras.
                    </li>
                    <li>Acabado final con pintura para techos como terminación hidrófuga y con control térmico.</li>
                    <li>
                      Tratamiento especial en puntos críticos como encuentros entre vigas, losas y paredes, con membrana
                      asfáltica sellada con calor.
                    </li>
                  </ol>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      {/* Aquí irá una imagen del proceso */}
                      <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                        <p className="text-white text-center p-4">Imagen del proceso de impermeabilización</p>
                      </div>
                    </div>
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      {/* Aquí irá una imagen del resultado */}
                      <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                        <p className="text-white text-center p-4">Imagen del resultado final</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Resultados y Beneficios</h3>
                  <p>La intervención realizada permitió:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Eliminar por completo las filtraciones existentes.</li>
                    <li>Restablecer la estanqueidad en las áreas tratadas.</li>
                    <li>Garantizar un ambiente controlado que cumple con las normativas sanitarias aplicables.</li>
                    <li>Extender la vida útil de la infraestructura.</li>
                    <li>Optimizar las condiciones operativas del frigorífico.</li>
                    <li>Reducir costos de mantenimiento correctivo a futuro.</li>
                  </ul>

                  <div className="relative h-80 rounded-lg overflow-hidden mt-6">
                    {/* Aquí irá una imagen del resultado final */}
                    <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                      <p className="text-white text-center p-4">Imagen panorámica del resultado final</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mt-8 mb-4">Informe Técnico</h3>
                  <p>Como parte del proyecto, se elaboró un informe técnico detallado que incluye:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Diagnóstico inicial de las cubiertas.</li>
                    <li>Metodología de trabajo implementada.</li>
                    <li>Materiales utilizados y procedimientos aplicados.</li>
                    <li>Resultados obtenidos y pruebas de calidad realizadas.</li>
                    <li>Recomendaciones para el mantenimiento preventivo.</li>
                    <li>Documentación fotográfica del antes, durante y después de la intervención.</li>
                  </ul>

                  <div className="mt-8">
                    <Button asChild>
                      <Link href="/proyectos/mantenimiento-cubierta-hormigon/informe">
                        Ver informe técnico completo
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-800 rounded-lg p-6 sticky top-20">
                <h3 className="text-xl font-semibold text-white mb-4">Detalles del Proyecto</h3>

                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Cliente</h4>
                    <p>Black Bamboo Enterprise S.A.</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Ubicación</h4>
                    <p>RN8 KM 302.54, Hughes, Santa Fe</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Fecha de ejecución</h4>
                    <p>Febrero 2025</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Duración</h4>
                    <p>3 semanas</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Tipo de proyecto</h4>
                    <p>Mantenimiento industrial</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Sector</h4>
                    <p>Frigorífico</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Servicios realizados</h4>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                      <li>Impermeabilización de cubiertas</li>
                      <li>Reparación de grietas y fisuras</li>
                      <li>Tratamiento de juntas</li>
                      <li>Optimización de desagües</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-4">Otros proyectos similares</h3>

                  <div className="space-y-4">
                    <Link href="#" className="block group">
                      <div className="flex gap-3 items-start">
                        <div className="w-16 h-16 bg-gray-700 rounded-md flex-shrink-0 overflow-hidden">
                          {/* Aquí irá una imagen del proyecto */}
                          <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                            <p className="text-white text-xs text-center">Imagen</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-white group-hover:text-orange-500 transition-colors">
                            Reparación de Techos Industriales
                          </h4>
                          <p className="text-xs text-gray-400">Rosario, Santa Fe</p>
                        </div>
                      </div>
                    </Link>

                    <Link href="#" className="block group">
                      <div className="flex gap-3 items-start">
                        <div className="w-16 h-16 bg-gray-700 rounded-md flex-shrink-0 overflow-hidden">
                          {/* Aquí irá una imagen del proyecto */}
                          <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                            <p className="text-white text-xs text-center">Imagen</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-white group-hover:text-orange-500 transition-colors">
                            Impermeabilización de Planta Industrial
                          </h4>
                          <p className="text-xs text-gray-400">Venado Tuerto, Santa Fe</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-4">¿Necesitas un proyecto similar?</h3>
                  <p className="text-gray-400 mb-4">
                    Contáctanos para discutir tus necesidades específicas y cómo podemos ayudarte.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/contacto">Solicitar presupuesto</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

