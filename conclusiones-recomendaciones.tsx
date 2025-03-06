import { Card, CardContent } from "@/components/ui/card"

export default function ConclusionesRecomendaciones() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-6">
      <Card className="border-l-4 border-l-primary">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">6. CONCLUSIONES Y RECOMENDACIONES</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">6.1. Conclusiones Técnicas</h3>
              <p className="mb-2">
                La intervención realizada en las cubiertas de hormigón de Black Bamboo Enterprise S.A. ha permitido:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Resolver las filtraciones existentes mediante un sistema integral de impermeabilización que combina
                  emulsión asfáltica, velos de fibra y membrana asfáltica en puntos críticos.
                </li>
                <li>
                  Eliminar las acumulaciones de humedad que comprometían la integridad estructural del edificio y las
                  condiciones sanitarias requeridas para la operación del frigorífico.
                </li>
                <li>
                  Restablecer la estanqueidad en las áreas tratadas, garantizando un ambiente controlado que cumple con
                  las normativas sanitarias aplicables.
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
                  <tr className="bg-muted">
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
                    <td className="border p-2">Realizar una inspección exhaustiva por personal especializado</td>
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
                Basado en el diagnóstico integral realizado, se recomienda priorizar las siguientes intervenciones:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <span className="font-medium">Evaluación integral de toda la cubierta:</span> Realizar un relevamiento
                  completo del estado actual de la totalidad de la cubierta, considerando que las áreas no intervenidas
                  presentan deterioro similar al tratado en esta etapa.
                </li>
                <li>
                  <span className="font-medium">Proyecto de impermeabilización global:</span> Desarrollar un proyecto
                  integral que contemple la impermeabilización de toda la cubierta, estableciendo etapas de intervención
                  según criticidad.
                </li>
                <li>
                  <span className="font-medium">Optimización del sistema de drenaje:</span> Rediseñar el sistema de
                  evacuación pluvial, considerando:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Análisis y corrección de pendientes insuficientes</li>
                    <li>Instalación de nuevos puntos de desagüe en áreas con acumulación</li>
                    <li>Redimensionamiento de canaletas existentes</li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">Intervención en cubierta metálica:</span> Abordar las deficiencias
                  detectadas en la cubierta metálica sobre cámaras, incluyendo:
                  <ul className="list-disc pl-6 mt-1">
                    <li>Refuerzo de estructura soporte interior</li>
                    <li>Reemplazo de tornillería deteriorada</li>
                    <li>Fijación adecuada de babetas perimetrales</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Conclusión Final</h3>
              <p>
                La intervención realizada ha resuelto eficazmente las problemáticas puntuales identificadas, demostrando
                la efectividad del sistema de impermeabilización implementado. Sin embargo, el estado general de
                deterioro observado en el resto de la cubierta evidencia la necesidad de un abordaje integral y
                sistemático.
              </p>
              <p className="mt-2">
                Implementar las recomendaciones propuestas no solo garantizará la integridad estructural del edificio,
                sino que también optimizará las condiciones operativas del frigorífico, asegurando el cumplimiento de
                normativas sanitarias, reduciendo costos de mantenimiento correctivo y previniendo interrupciones en la
                cadena de frío que podrían comprometer la calidad de los productos.
              </p>
              <p className="mt-2 font-medium">
                La inversión en un sistema integral de impermeabilización y en un programa de mantenimiento preventivo
                representa una decisión estratégica con alto retorno en términos de seguridad operativa, cumplimiento
                normativo y optimización de costos a mediano y largo plazo.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

