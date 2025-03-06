import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, Building, CheckCircle, Clock, Hammer, HardHat, Shield } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-pattern py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-orange-500">SINSA</span> - Soluciones Industriales
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expertos en construcciones metálicas y obras civiles, entregando proyectos llave en mano con excelencia y
              compromiso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/proyectos">Ver Proyectos</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contacto">Contáctanos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-850">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Sobre <span className="text-orange-500">SINSA</span>
              </h2>
              <p className="text-gray-300 mb-6">
                SINSA es una empresa líder en el sector metalúrgico y de construcción, especializada en ofrecer
                soluciones integrales para proyectos industriales y comerciales. Con más de 15 años de experiencia, nos
                hemos consolidado como un referente en la región por nuestra capacidad de entregar proyectos llave en
                mano que combinan estructuras metálicas y obras civiles.
              </p>
              <p className="text-gray-300 mb-6">
                Nuestro equipo multidisciplinario de ingenieros, arquitectos y técnicos especializados trabaja en
                estrecha colaboración con nuestros clientes para entender sus necesidades y ofrecer soluciones
                personalizadas que cumplan con los más altos estándares de calidad y seguridad.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Misión</h3>
                    <p className="text-gray-400">
                      Proporcionar soluciones integrales en metalurgia y construcción que superen las expectativas de
                      nuestros clientes, contribuyendo al desarrollo industrial y comercial mediante proyectos
                      innovadores, seguros y sostenibles.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">Visión</h3>
                    <p className="text-gray-400">
                      Ser reconocidos como la empresa líder en soluciones industriales integrales en Argentina,
                      destacándonos por nuestra excelencia técnica, innovación constante y compromiso con la calidad y
                      la satisfacción del cliente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              {/* Aquí irá una imagen de la empresa */}
              <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                <p className="text-white text-center p-4">Espacio para imagen de la empresa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Nuestros <span className="text-orange-500">Servicios</span>
            </h2>
            <p className="text-gray-300">
              Ofrecemos una amplia gama de servicios especializados en metalurgia y construcción, adaptados a las
              necesidades específicas de cada cliente y sector industrial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gray-800 border-orange-900/20 hover:border-orange-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="bg-orange-500/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Building className="text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Construcciones Metálicas</h3>
                <p className="text-gray-400 mb-4">
                  Diseño, fabricación y montaje de estructuras metálicas para naves industriales, galpones, entrepisos y
                  todo tipo de construcciones.
                </p>
                <Link
                  href="/servicios"
                  className="text-orange-500 hover:text-orange-400 inline-flex items-center gap-1"
                >
                  Saber más <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-orange-900/20 hover:border-orange-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="bg-orange-500/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <HardHat className="text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Obras Civiles</h3>
                <p className="text-gray-400 mb-4">
                  Ejecución de obras de hormigón, cimentaciones, pavimentos industriales y construcciones
                  complementarias para proyectos integrales.
                </p>
                <Link
                  href="/servicios"
                  className="text-orange-500 hover:text-orange-400 inline-flex items-center gap-1"
                >
                  Saber más <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-orange-900/20 hover:border-orange-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="bg-orange-500/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Hammer className="text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Mantenimiento Industrial</h3>
                <p className="text-gray-400 mb-4">
                  Servicios de mantenimiento preventivo y correctivo para instalaciones industriales, incluyendo
                  impermeabilización y reparaciones estructurales.
                </p>
                <Link
                  href="/servicios"
                  className="text-orange-500 hover:text-orange-400 inline-flex items-center gap-1"
                >
                  Saber más <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-850">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Proyectos <span className="text-orange-500">Destacados</span>
              </h2>
              <p className="text-gray-300">Conoce algunos de nuestros trabajos más recientes y representativos.</p>
            </div>
            <Button asChild className="mt-4 md:mt-0">
              <Link href="/proyectos">Ver todos los proyectos</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <p className="text-gray-400">
                    Impermeabilización y reparación de cubiertas de hormigón en instalaciones frigoríficas para Black
                    Bamboo Enterprise S.A.
                  </p>
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
                  <p className="text-gray-400">
                    Diseño y construcción de nave industrial con estructura metálica y cerramientos térmicos para
                    empresa del sector agroindustrial.
                  </p>
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
                  <p className="text-gray-400">
                    Ampliación y modernización de planta procesadora de alimentos con soluciones mixtas de hormigón y
                    estructura metálica.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-900">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              ¿Por qué <span className="text-orange-500">elegirnos</span>?
            </h2>
            <p className="text-gray-300">
              En SINSA nos distinguimos por nuestro compromiso con la excelencia y la satisfacción del cliente en cada
              proyecto que emprendemos.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-gray-800 border-orange-900/20 text-center">
              <CardContent className="p-6">
                <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-orange-500 h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Experiencia</h3>
                <p className="text-gray-400">
                  Más de 15 años de experiencia en el sector industrial y de construcción.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-orange-900/20 text-center">
              <CardContent className="p-6">
                <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-orange-500 h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Calidad</h3>
                <p className="text-gray-400">
                  Compromiso con los más altos estándares de calidad en todos nuestros proyectos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-orange-900/20 text-center">
              <CardContent className="p-6">
                <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-orange-500 h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Puntualidad</h3>
                <p className="text-gray-400">Cumplimiento riguroso de los plazos establecidos para cada proyecto.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-orange-900/20 text-center">
              <CardContent className="p-6">
                <div className="bg-orange-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HardHat className="text-orange-500 h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Profesionalismo</h3>
                <p className="text-gray-400">Equipo altamente calificado y comprometido con la excelencia técnica.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">¿Listo para iniciar tu próximo proyecto?</h2>
            <p className="text-white/90 mb-8">
              Contáctanos hoy mismo para discutir tus necesidades y cómo podemos ayudarte a llevar tu proyecto a la
              realidad.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contacto">Solicitar presupuesto</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

