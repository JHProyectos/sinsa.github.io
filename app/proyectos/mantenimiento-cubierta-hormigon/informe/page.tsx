import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download, Printer } from "lucide-react"

export default function InformeTecnicoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="hero-pattern py-8">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <Link
                href="/proyectos/mantenimiento-cubierta-hormigon"
                className="text-orange-500 hover:text-orange-400 inline-flex items-center gap-1"
              >
                <ArrowLeft size={16} />
                Volver al proyecto
              </Link>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h1 className="text-3xl font-bold text-white">Informe Técnico: Mantenimiento de Cubierta de Hormigón</h1>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Printer size={16} />
                  Imprimir
                </Button>
                <Button size="sm" className="gap-1">
                  <Download size={16} />
                  Descargar PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informe Content */}
      <section className="py-12 bg-gray-900">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white text-gray-900">
              <CardContent className="p-8">
                <div className="text-center py-12 border-b border-gray-200">
                  <div className="mb-8">
                    <div className="bg-orange-500/10 inline-block p-4 rounded-full mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-orange-500"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold mb-2">MANTENIMIENTO DE CUBIERTA DE HORMIGÓN</h1>
                  <h2 className="text-2xl font-semibold text-gray-600 mb-8">INFORME TÉCNICO N°1</h2>
                  <div className="grid grid-cols-2 gap-4 max-w-md mx-auto text-left">
                    <div className="font-medium">Cliente Nro:</div>
                    <div>2725</div>
                    <div className="font-medium">Nombre:</div>
                    <div>Black Bamboo Enterprise S.A.</div>
                    <div className="font-medium">Dirección:</div>
                    <div>RN8 KM 302.54 - Hughes, Santa Fe</div>
                    <div className="font-medium">Fecha:</div>
                    <div>18/02/2025</div>
                  </div>
                </div>

                {/* Índice */}
                <div className="py-6 border-b border-gray-200">
                  <h2 className="text-xl font-bold mb-4">ÍNDICE</h2>
                  <ol className="space-y-2">
                    <li>
                      <div className="flex items-baseline">
                        <span className="font-medium mr-2">1.</span>
                        <span className="font-medium">INTRODUCCIÓN</span>
                      </div>
                      <ol className="ml-6 mt-1 space-y-1">
                        <li>1.1. Objetivo</li>
                        <li>1.2. Alcance del proyecto</li>
                      </ol>
                    </li>
                    <li>
                      <div className="flex items-baseline">
                        <span className="font-medium mr-2">2.</span>
                        <span className="font-medium">DIAGNÓSTICO INICIAL</span>
                      </div>
                      <ol className="ml-6 mt-1 space-y-1">
                        <li>2.1. Áreas evaluadas</li>
                        <li>2.2. Problemáticas identificadas</li>
                      </ol>
                    </li>
                    <li>
                      <div className="flex items-baseline">
                        <span className="font-medium mr-2">3.</span>
                        <span className="font-medium">IMPORTANCIA DEL MANTENIMIENTO EN INSTALACIONES FRIGORÍFICAS</span>
                      </div>
                      <ol className="ml-6 mt-1 space-y-1">
                        <li>3.1. Impacto en la calidad de los alimentos</li>
                        <li>3.2. Deterioro estructural y aumento de costos</li>
                        <li>3.3. Solución propuesta</li>
                      </ol>
                    </li>
                    <li>
                      <div className="flex items-baseline">
                        <span className="font-medium mr-2">4.</span>
                        <span className="font-medium">METODOLOGÍA DE TRABAJO</span>
                      </div>
                      <ol className="ml-6 mt-1 space-y-1">
                        <li>4.1. Análisis y preparación de áreas afectadas</li>
                        <li>4.2. Procedimiento de impermeabilización</li>
                        <li>4.3. Control de calidad</li>
                      </ol>
                    </li>
                    <li>
                      <div className="flex items-baseline">
                        <span className="font-medium mr-2">5.</span>
                        <span className="font-medium">BENEFICIOS COMERCIALES</span>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-baseline">
                        <span className="font-medium mr-2">6.</span>
                        <span className="font-medium">CONCLUSIONES Y RECOMENDACIONES</span>
                      </div>
                      <ol className="ml-6 mt-1 space-y-1">
                        <li>6.1. Conclusiones técnicas</li>
                        <li>6.2. Plan de mantenimiento preventivo recomendado</li>
                        <li>6.3. Próximas intervenciones sugeridas</li>
                      </ol>
                    </li>
                    <li>
                      <div className="flex items-baseline">
                        <span className="font-medium mr-2">7.</span>
                        <span className="font-medium">ANEXO FOTOGRÁFICO</span>
                      </div>
                    </li>
                  </ol>
                </div>

                {/* 1. INTRODUCCIÓN */}
                <div className="py-6 border-b border-gray-200">
                  <h2 className="text-2xl font-bold mb-4">1. INTRODUCCIÓN</h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">1.1. Objetivo</h3>
                      <p>
                        Proveer información detallada sobre el estado en que se encontraron las cubiertas de hormigón de
                        las instalaciones de Black Bamboo Enterprise S.A., documentar los trabajos y procedimientos
                        ejecutados para su impermeabilización, y establecer recomendaciones para el mantenimiento futuro
                        que garantice la integridad estructural y funcional de las mismas.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">1.2. Alcance del proyecto</h3>
                      <p>
                        El presente informe abarca la evaluación, diagnóstico e intervención realizada en las cubiertas
                        de hormigón de las instalaciones frigoríficas, con especial énfasis en las áreas que presentaban
                        filtraciones y deterioro significativo. Se incluye documentación fotográfica del estado inicial,
                        proceso de trabajo y resultados obtenidos, así como recomendaciones técnicas para el
                        mantenimiento preventivo.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Resto del informe (versión resumida para esta página) */}
                <div className="py-6 border-b border-gray-200">
                  <h2 className="text-2xl font-bold mb-4">2. DIAGNÓSTICO INICIAL</h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">2.1. Áreas evaluadas</h3>
                      <p>Se realizó una evaluación exhaustiva de las siguientes áreas:</p>
                      <ul className="list-disc pl-6 space-y-1 mt-2">
                        <li>Sector de cámaras de oreo</li>
                        <li>Pasillos 01</li>
                        <li>Sector de cámaras de cuarteo</li>
                        <li>Bocas de desagües</li>
                        <li>Encuentros entre vigas y losas</li>
                        <li>Zonas críticas con grietas y rasgaduras</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">2.2. Problemáticas identificadas</h3>
                      <p>Durante la evaluación inicial se identificaron las siguientes problemáticas:</p>
                      <ul className="list-disc pl-6 space-y-2 mt-2">
                        <li>
                          <span className="font-medium">Deterioro de la impermeabilización existente:</span> Se observó
                          un deterioro significativo de la membrana asfáltica previamente instalada, con
                          desprendimientos y falta de adherencia al hormigón base.
                        </li>
                        <li>
                          <span className="font-medium">Acumulación de agua:</span> Deficiencias en la pendiente de
                          desagüe que provocaban acumulación de agua en diversos sectores de la cubierta.
                        </li>
                        <li>
                          <span className="font-medium">Obstrucción de desagües:</span> Presencia de sedimentos,
                          residuos y vegetación en bocas de desagüe, comprometiendo la evacuación eficiente del agua
                          pluvial.
                        </li>
                      </ul>

                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                          <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center text-gray-500">
                            <p className="text-sm text-center p-2">Imagen 1: Deterioro de membrana asfáltica</p>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            Deterioro por falta de pendiente y acumulación de sedimentos
                          </p>
                        </div>
                        <div>
                          <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center text-gray-500">
                            <p className="text-sm text-center p-2">Imagen 2: Acumulación de agua en canaleta</p>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">
                            Falta de pendiente adecuada en canaleta de desagüe
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 6. CONCLUSIONES Y RECOMENDACIONES */}
                <div className="py-6 border-b border-gray-200">
                  <h2 className="text-2xl font-bold mb-4">6. CONCLUSIONES Y RECOMENDACIONES</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">6.1. Conclusiones Técnicas</h3>
                      <p className="mb-2">
                        La intervención realizada en las cubiertas de hormigón de Black Bamboo Enterprise S.A. ha
                        permitido:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          Resolver las filtraciones existentes mediante un sistema integral de impermeabilización que
                          combina emulsión asfáltica, velos de fibra y membrana asfáltica en puntos críticos.
                        </li>
                        <li>
                          Eliminar las acumulaciones de humedad que comprometían la integridad estructural del edificio
                          y las condiciones sanitarias requeridas para la operación del frigorífico.
                        </li>
                        <li>
                          Restablecer la estanqueidad en las áreas tratadas, garantizando un ambiente controlado que
                          cumple con las normativas sanitarias aplicables.
                        </li>
                        <li>
                          Extender la vida útil de la infraestructura al proteger elementos estructurales de hormigón y
                          metálicos del deterioro prematuro causado por la humedad.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">6.2. Plan de Mantenimiento Preventivo Recomendado</h3>
                      <p className="mb-2">
                        Para garantizar la durabilidad del sistema de impermeabilización implementado y prevenir futuras
                        patologías, se recomienda establecer un programa de mantenimiento preventivo que incluya:
                      </p>
                      <table className="w-full border-collapse mb-4">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border p-2 text-left">Actividad</th>
                            <th className="border p-2 text-left">Frecuencia</th>
                            <th className="border p-2 text-left">Observaciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border p-2">Inspección visual de cubiertas</td>
                            <td className="border p-2">Trimestral</td>
                            <td className="border p-2">
                              Verificar ausencia de fisuras, desprendimientos o deterioro del sistema impermeabilizante
                            </td>
                          </tr>
                          <tr>
                            <td className="border p-2">Limpieza de bocas de desagüe</td>
                            <td className="border p-2">Mensual</td>
                            <td className="border p-2">
                              Eliminar sedimentos, vegetación y residuos que puedan obstruir el drenaje
                            </td>
                          </tr>
                          <tr>
                            <td className="border p-2">Evaluación técnica especializada</td>
                            <td className="border p-2">Anual</td>
                            <td className="border p-2">
                              Realizar una inspección exhaustiva por personal especializado
                            </td>
                          </tr>
                          <tr>
                            <td className="border p-2">Mantenimiento de canaletas</td>
                            <td className="border p-2">Semestral</td>
                            <td className="border p-2">
                              Verificar pendientes y estado de canaletas para garantizar evacuación eficiente
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">6.3. Próximas Intervenciones Sugeridas</h3>
                      <p className="mb-2">
                        Basado en el diagnóstico integral realizado, se recomienda priorizar las siguientes
                        intervenciones:
                      </p>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li>
                          <span className="font-medium">Evaluación integral de toda la cubierta:</span> Realizar un
                          relevamiento completo del estado actual de la totalidad de la cubierta, considerando que las
                          áreas no intervenidas presentan deterioro similar al tratado en esta etapa.
                        </li>
                        <li>
                          <span className="font-medium">Proyecto de impermeabilización global:</span> Desarrollar un
                          proyecto integral que contemple la impermeabilización de toda la cubierta, estableciendo
                          etapas de intervención según criticidad.
                        </li>
                        <li>
                          <span className="font-medium">Optimización del sistema de drenaje:</span> Rediseñar el sistema
                          de evacuación pluvial, considerando:
                          <ul className="list-disc pl-6 mt-1">
                            <li>Análisis y corrección de pendientes insuficientes</li>
                            <li>Instalación de nuevos puntos de desagüe en áreas con acumulación</li>
                            <li>Redimensionamiento de canaletas existentes</li>
                          </ul>
                        </li>
                      </ol>
                    </div>

                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h3 className="text-xl font-semibold mb-2">Conclusión Final</h3>
                      <p>
                        La intervención realizada ha resuelto eficazmente las problemáticas puntuales identificadas,
                        demostrando la efectividad del sistema de impermeabilización implementado. Sin embargo, el
                        estado general de deterioro observado en el resto de la cubierta evidencia la necesidad de un
                        abordaje integral y sistemático.
                      </p>
                      <p className="mt-2">
                        Implementar las recomendaciones propuestas no solo garantizará la integridad estructural del
                        edificio, sino que también optimizará las condiciones operativas del frigorífico, asegurando el
                        cumplimiento de normativas sanitarias, reduciendo costos de mantenimiento correctivo y
                        previniendo interrupciones en la cadena de frío que podrían comprometer la calidad de los
                        productos.
                      </p>
                      <p className="mt-2 font-medium">
                        La inversión en un sistema integral de impermeabilización y en un programa de mantenimiento
                        preventivo representa una decisión estratégica con alto retorno en términos de seguridad
                        operativa, cumplimiento normativo y optimización de costos a mediano y largo plazo.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Firma */}
                <div className="mt-8 pt-6">
                  <p className="text-center font-medium">Fin del Informe</p>
                  <div className="flex justify-center items-center gap-2 mt-4">
                    <p className="text-sm text-gray-500">Elaborado por:</p>
                    <p className="text-sm font-medium">SINSA - Departamento Técnico</p>
                  </div>
                  <div className="flex justify-center items-center gap-2 mt-1">
                    <p className="text-sm text-gray-500">Contacto:</p>
                    <p className="text-sm font-medium">soporte.tecnico@sinsa.com.ar</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

