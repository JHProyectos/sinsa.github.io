import { Card, CardContent } from "@/components/ui/card"

export default function InformeTecnicoCompleto() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 p-6">
      {/* PORTADA */}
      <div className="text-center py-12 border-b">
        <div className="mb-8">
          <div className="bg-primary/10 inline-block p-4 rounded-full mb-4">
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
              className="text-primary"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-2">MANTENIMIENTO DE CUBIERTA DE HORMIGÓN</h1>
        <h2 className="text-2xl font-semibold text-muted-foreground mb-8">INFORME TÉCNICO N°1</h2>
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

      {/* ÍNDICE */}
      <Card>
        <CardContent className="p-6">
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
        </CardContent>
      </Card>

      {/* 1. INTRODUCCIÓN */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">1. INTRODUCCIÓN</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">1.1. Objetivo</h3>
              <p>
                Proveer información detallada sobre el estado en que se encontraron las cubiertas de hormigón de las
                instalaciones de Black Bamboo Enterprise S.A., documentar los trabajos y procedimientos ejecutados para
                su impermeabilización, y establecer recomendaciones para el mantenimiento futuro que garantice la
                integridad estructural y funcional de las mismas.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">1.2. Alcance del proyecto</h3>
              <p>
                El presente informe abarca la evaluación, diagnóstico e intervención realizada en las cubiertas de
                hormigón de las instalaciones frigoríficas, con especial énfasis en las áreas que presentaban
                filtraciones y deterioro significativo. Se incluye documentación fotográfica del estado inicial, proceso
                de trabajo y resultados obtenidos, así como recomendaciones técnicas para el mantenimiento preventivo.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 2. DIAGNÓSTICO INICIAL */}
      <Card>
        <CardContent className="p-6">
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
                  <span className="font-medium">Deterioro de la impermeabilización existente:</span> Se observó un
                  deterioro significativo de la membrana asfáltica previamente instalada, con desprendimientos y falta
                  de adherencia al hormigón base.
                </li>
                <li>
                  <span className="font-medium">Acumulación de agua:</span> Deficiencias en la pendiente de desagüe que
                  provocaban acumulación de agua en diversos sectores de la cubierta.
                </li>
                <li>
                  <span className="font-medium">Obstrucción de desagües:</span> Presencia de sedimentos, residuos y
                  vegetación en bocas de desagüe, comprometiendo la evacuación eficiente del agua pluvial.
                </li>
                <li>
                  <span className="font-medium">Fisuras y grietas:</span> Presencia de grietas de tamaño significativo
                  en la losa de hormigón, permitiendo filtraciones hacia el interior de las instalaciones.
                </li>
                <li>
                  <span className="font-medium">Deficiencias en cubierta metálica:</span> En el sector de cuarteo y
                  cámaras, se identificaron líneas de encuentro de chapas sueltas, tornillería en mal estado y falta de
                  estructura soporte en el interior.
                </li>
              </ul>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                    <p className="text-sm text-center p-2">Imagen 1: Deterioro de membrana asfáltica</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Deterioro por falta de pendiente y acumulación de sedimentos
                  </p>
                </div>
                <div>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                    <p className="text-sm text-center p-2">Imagen 2: Acumulación de agua en canaleta</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Falta de pendiente adecuada en canaleta de desagüe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 3. IMPORTANCIA DEL MANTENIMIENTO */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">3. IMPORTANCIA DEL MANTENIMIENTO EN INSTALACIONES FRIGORÍFICAS</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">3.1. Impacto en la calidad de los alimentos</h3>
              <p className="mb-2">
                Las instalaciones frigoríficas requieren condiciones estrictas de higiene y control de temperatura para
                asegurar la conservación de los productos. La filtración de agua debido a techos en mal estado genera
                problemas como:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-medium">Contaminación bacteriana:</span> La humedad excesiva en el interior de
                  las instalaciones puede favorecer la proliferación de hongos y bacterias, comprometiendo la inocuidad
                  de los alimentos.
                </li>
                <li>
                  <span className="font-medium">Condensación excesiva:</span> La presencia de filtraciones puede alterar
                  la temperatura y humedad del ambiente, afectando la correcta refrigeración y conservación de los
                  productos.
                </li>
                <li>
                  <span className="font-medium">Pérdida de certificaciones sanitarias:</span> Una instalación con
                  problemas de filtración puede ser sancionada o perder certificaciones de calidad, impactando
                  directamente en la operatividad del negocio.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">3.2. Deterioro estructural y aumento de costos</h3>
              <p className="mb-2">
                La falta de mantenimiento en la impermeabilización de los techos provoca un deterioro acelerado de la
                infraestructura del frigorífico. Entre los problemas más comunes se encuentran:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-medium">Corrosión de estructuras metálicas:</span> La exposición continua al
                  agua causa oxidación en vigas, columnas y demás estructuras, debilitándolas con el tiempo.
                </li>
                <li>
                  <span className="font-medium">Degradación de paneles aislantes:</span> Los paneles de poliuretano y
                  otros materiales aislantes pueden perder su capacidad térmica si se ven afectados por filtraciones,
                  incrementando el consumo energético y reduciendo la eficiencia del sistema de refrigeración.
                </li>
                <li>
                  <span className="font-medium">Fallas en instalaciones eléctricas:</span> El agua puede infiltrarse en
                  los sistemas eléctricos, generando cortocircuitos y poniendo en riesgo la seguridad operativa.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">3.3. Solución propuesta</h3>
              <p className="mb-2">
                Es de fundamental importancia implementar un sistema de impermeabilización efectivo, utilizando
                materiales de alta resistencia y durabilidad, como membranas líquidas de poliuretano, elastómeros o
                sistemas bi-componentes de alto desempeño. Por lo que recomendamos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Inspecciones periódicas para detectar fisuras y puntos críticos antes de que se conviertan en
                  problemas mayores.
                </li>
                <li>
                  Limpieza y mantenimiento constante de los desagües y canaletas para evitar acumulaciones de agua.
                </li>
                <li>
                  Revisión y reforzamiento de juntas y sellados en techos y paredes para garantizar la estanqueidad del
                  recinto.
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 4. METODOLOGÍA DE TRABAJO */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">4. METODOLOGÍA DE TRABAJO</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">4.1. Análisis y preparación de las áreas afectadas</h3>
              <p className="mb-2">
                Se realizó un análisis detallado de los materiales previamente instalados, la pendiente, las fisuras y
                las posibles filtraciones. Durante la evaluación se identificaron los siguientes aspectos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Deterioro significativo del hormigón base en múltiples áreas.</li>
                <li>Uso inadecuado de la membrana asfáltica, con falta de adherencia al sustrato.</li>
                <li>Presencia de grietas y fisuras que permitían el ingreso de agua.</li>
              </ul>

              <p className="mt-2">El proceso de preparación incluyó:</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Remoción completa del material impermeabilizante existente en las zonas afectadas.</li>
                <li>Apertura de grietas con discos de corte para hormigón para su posterior tratamiento.</li>
                <li>Limpieza exhaustiva con agua y cloro para eliminar residuos, hongos y contaminantes.</li>
              </ol>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                    <p className="text-sm text-center p-2">Imagen 3: Preparación de superficie</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Retiro de membrana con cero adherencia a hormigón base
                  </p>
                </div>
                <div>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                    <p className="text-sm text-center p-2">Imagen 4: Apertura de grietas</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Preparación de grietas para tratamiento</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">4.2. Procedimiento de impermeabilización</h3>
              <p className="mb-2">
                Una vez preparadas y secas las áreas de trabajo, se implementó el siguiente procedimiento de
                impermeabilización:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  <span className="font-medium">Aplicación de imprimación:</span> Se aplicó pintura asfáltica (MegaFlex)
                  diluida para lograr mayor fijación en las paredes de las grietas y fisuras.
                </li>
                <li>
                  <span className="font-medium">Refuerzo con velos de fibra:</span> Sobre las grietas más afectadas, se
                  aplicaron velos de fibra que, junto con la pintura asfáltica, funcionan como una membrana flexible que
                  evita la rotura de las capas superficiales.
                </li>
                <li>
                  <span className="font-medium">Sellado con emulsión asfáltica:</span> Se aplicaron tres manos
                  consecutivas de emulsión asfáltica para sellar completamente las rajaduras.
                </li>
                <li>
                  <span className="font-medium">Acabado final:</span> Una vez curado el esquema de sellado, se aplicó
                  pintura para techos (Colorin para techos) como terminación hidrófuga y con control térmico.
                </li>
                <li>
                  <span className="font-medium">Tratamiento de puntos críticos:</span> En lugares críticos como
                  encuentros entre vigas, losas y paredes, se aplicó membrana asfáltica sellada con calor como refuerzo
                  adicional.
                </li>
              </ol>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                    <p className="text-sm text-center p-2">Imagen 5: Aplicación de emulsión asfáltica</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Aplicación sobre grieta y superficie</p>
                </div>
                <div>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                    <p className="text-sm text-center p-2">Imagen 6: Aplicación de membrana asfáltica</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Encuentro entre losa, viga y pared</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">4.3. Control de calidad</h3>
              <p className="mb-2">
                Para garantizar la efectividad de los trabajos realizados, se implementaron los siguientes controles de
                calidad:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-medium">Pruebas de estanqueidad:</span> Se realizaron pruebas para verificar que
                  no existieran filtraciones después de la aplicación del sistema de impermeabilización.
                </li>
                <li>
                  <span className="font-medium">Inspección visual y técnica:</span> Se llevó a cabo una revisión
                  detallada para asegurar la correcta aplicación de los materiales y la uniformidad del recubrimiento.
                </li>
                <li>
                  <span className="font-medium">Verificación de adherencia:</span> Se evaluó la adherencia del material
                  impermeabilizante a la superficie para evitar desprendimientos y fallos prematuros.
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 5. BENEFICIOS COMERCIALES */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">5. BENEFICIOS COMERCIALES</h2>

          <div className="space-y-4">
            <p>
              La implementación del sistema de impermeabilización en las cubiertas de hormigón proporciona los
              siguientes beneficios comerciales para la operación del frigorífico:
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Reducción de Costos Operativos</h3>
                <p className="text-sm">
                  Minimiza gastos en reparaciones imprevistas, fallas estructurales y pérdidas de productos por
                  contaminación o cambios en la temperatura.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Optimización del Consumo Energético</h3>
                <p className="text-sm">
                  Evita la degradación del aislamiento térmico, reduciendo el consumo de energía para mantener
                  temperaturas óptimas dentro del frigorífico.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Preservación de la Calidad de los Alimentos</h3>
                <p className="text-sm">
                  Garantiza que los productos almacenados cumplan con los estándares sanitarios, evitando pérdidas
                  económicas por deterioro o decomiso.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Mayor Vida Útil de la Infraestructura</h3>
                <p className="text-sm">
                  Protege techos, paredes y estructuras metálicas del desgaste prematuro, reduciendo la necesidad de
                  renovaciones costosas.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Mejora en la Seguridad Laboral</h3>
                <p className="text-sm">
                  Previene accidentes por filtraciones, corrosión de estructuras y fallas eléctricas, asegurando un
                  ambiente de trabajo más seguro para los empleados.
                </p>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Cumplimiento de Normativas y Certificaciones</h3>
                <p className="text-sm">
                  Facilita la obtención y mantenimiento de certificaciones sanitarias y de calidad, esenciales para la
                  continuidad del negocio y la confianza de los clientes.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 6. CONCLUSIONES Y RECOMENDACIONES */}
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

      {/* 7. ANEXO FOTOGRÁFICO */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-4">7. ANEXO FOTOGRÁFICO</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Cubierta de Hormigón</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                    <p className="text-sm text-center p-2">Foto 1: Deterioro de membrana asfáltica</p>
                  </div>
                  <p className="text-sm mt-2">
                    Se observa deterioro de membrana asfáltica por falta de pendiente, acumulación de sedimentos y
                    residuos en boca de desagüe, crecimiento de vegetación.
                  </p>
                </div>

                <div>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                    <p className="text-sm text-center p-2">Foto 2: Acumulación de agua en canaleta</p>
                  </div>
                  <p className="text-sm mt-2">
                    Se evidencia acumulación de agua y sedimentos por falta de pendiente en canaleta de desagüe,
                    deterioro de membrana asfáltica con acumulación de agua, presencia de rajaduras en losa de tamaños
                    significativos.
                  </p>
                </div>

                <div>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                    <p className="text-sm text-center p-2">Foto 3: Aplicación de emulsión asfáltica</p>
                  </div>
                  <p className="text-sm mt-2">
                    Proceso de aplicación de emulsión asfáltica sobre grietas previamente tratadas.
                  </p>
                </div>

                <div>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                    <p className="text-sm text-center p-2">Foto 4: Aplicación de velo sobre rajaduras</p>
                  </div>
                  <p className="text-sm mt-2">
                    Detalle de la aplicación de velo de fibra sobre rajaduras para reforzar el sistema
                    impermeabilizante.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Cubierta Metálica</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                    <p className="text-sm text-center p-2">Foto 5: Cubierta metálica sobre cámaras</p>
                  </div>
                  <p className="text-sm mt-2">
                    El cliente informa de filtraciones en el sector de cuarteo y cámaras. Se evidenciaron líneas de
                    encuentro de chapas sueltas, tornillería en mal estado, faltante de estructura soporte en el
                    interior, ingreso de agua por viento sur.
                  </p>
                </div>

                <div>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                    <p className="text-sm text-center p-2">Foto 6: Detalle de cubierta metálica</p>
                  </div>
                  <p className="text-sm mt-2">
                    Detalle de la cubierta metálica donde se observan problemas de sellado y fijación.
                  </p>
                </div>

                <div>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                    <p className="text-sm text-center p-2">Foto 7: Babetas de cierre perimetral</p>
                  </div>
                  <p className="text-sm mt-2">
                    Las babetas de cierre perimetral se encuentran sueltas en algunos sectores y atornilladas con
                    autoperforantes para chapa, roscada a la mampostería.
                  </p>
                </div>

                <div>
                  <div className="aspect-video bg-muted rounded-md flex items-center justify-center text-muted-foreground">
                    <p className="text-sm text-center p-2">Foto 8: Detalle de babetas</p>
                  </div>
                  <p className="text-sm mt-2">
                    Detalle de las babetas de cierre perimetral que requieren intervención para garantizar la
                    estanqueidad.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t">
            <p className="text-center font-medium">Fin del Informe</p>
            <div className="flex justify-center items-center gap-2 mt-4">
              <p className="text-sm text-muted-foreground">Elaborado por:</p>
              <p className="text-sm font-medium">Departamento Técnico</p>
            </div>
            <div className="flex justify-center items-center gap-2 mt-1">
              <p className="text-sm text-muted-foreground">Contacto:</p>
              <p className="text-sm font-medium">soporte.tecnico@empresa.com</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

