import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin } from "lucide-react";

export default function PoliticaDatosPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-white relative overflow-hidden border-b border-limonar-sandDark">
        <div className="container-limonar relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="h-16 w-16 text-limonar-lime mx-auto mb-4" />
            <h1 className="font-display font-bold text-4xl md:text-5xl text-limonar-charcoal mb-4">
              Política de Tratamiento de Datos Personales
            </h1>
            <p className="text-limonar-charcoalLight text-lg">
              Última actualización: 25 de mayo de 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-limonar-cream">
        <div className="container-limonar max-w-4xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-warm border border-limonar-sand/60 space-y-8">
            
            {/* Introducción */}
            <div>
              <h2 className="font-display font-bold text-2xl text-limonar-charcoal mb-4 flex items-center gap-2">
                <FileText className="h-6 w-6 text-limonar-terracotta" />
                1. Introducción
              </h2>
              <p className="text-limonar-charcoalLight leading-relaxed mb-4">
                <strong>LADRILLERA LIMONAR S.A.S.</strong> (en adelante "LIMONAR" o "la Empresa"), 
                con domicilio principal en Km 6 Vía Puerto Tejada-Villa Rica, Cauca, Colombia, en cumplimiento de la Ley 1581 de 2012, 
                el Decreto 1377 de 2013 y demás normas concordantes sobre protección de datos personales, así como el Reglamento General 
                de Protección de Datos (GDPR) de la Unión Europea, adopta la presente Política de Tratamiento de Datos Personales.
              </p>
              <p className="text-limonar-charcoalLight leading-relaxed">
                Esta política aplica a todos los datos personales registrados en las bases de datos de LIMONAR, incluyendo clientes, 
                proveedores, empleados, contratistas, maestros constructores, transportadores, partners y visitantes del sitio web.
              </p>
            </div>

            {/* Definiciones */}
            <div>
              <h2 className="font-display font-bold text-2xl text-limonar-charcoal mb-4">
                2. Definiciones
              </h2>
              <div className="space-y-3 text-limonar-charcoalLight">
                <p><strong>Dato Personal:</strong> Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables.</p>
                <p><strong>Titular:</strong> Persona natural cuyos datos personales sean objeto de tratamiento.</p>
                <p><strong>Tratamiento:</strong> Cualquier operación o conjunto de operaciones sobre datos personales, tales como recolección, almacenamiento, uso, circulación o supresión.</p>
                <p><strong>Responsable del Tratamiento:</strong> LADRILLERA LIMONAR S.A.S., quien decide sobre la base de datos y/o el tratamiento de los datos.</p>
                <p><strong>Encargado del Tratamiento:</strong> Persona natural o jurídica que realiza el tratamiento de datos personales por cuenta del responsable.</p>
                <p><strong>Autorización:</strong> Consentimiento previo, expreso e informado del titular para llevar a cabo el tratamiento de datos personales.</p>
              </div>
            </div>

            {/* Principios */}
            <div>
              <h2 className="font-display font-bold text-2xl text-limonar-charcoal mb-4">
                3. Principios Rectores
              </h2>
              <div className="space-y-3 text-limonar-charcoalLight">
                <p><strong>Legalidad:</strong> El tratamiento se realiza conforme a la legislación colombiana e internacional vigente.</p>
                <p><strong>Finalidad:</strong> Los datos se recolectan con fines específicos, explícitos y legítimos, informados al titular.</p>
                <p><strong>Libertad:</strong> El tratamiento solo puede ejercerse con el consentimiento previo, expreso e informado del titular.</p>
                <p><strong>Veracidad:</strong> La información debe ser veraz, completa, exacta, actualizada, comprobable y comprensible.</p>
                <p><strong>Transparencia:</strong> Se garantiza el derecho del titular a obtener información sobre el tratamiento de sus datos.</p>
                <p><strong>Acceso y Circulación Restringida:</strong> Los datos solo son accesibles a personas autorizadas y para los fines autorizados.</p>
                <p><strong>Seguridad:</strong> Se implementan medidas técnicas, humanas y administrativas para proteger los datos.</p>
                <p><strong>Confidencialidad:</strong> Todas las personas que intervengan en el tratamiento están obligadas a garantizar la reserva de la información.</p>
              </div>
            </div>

            {/* Datos Recolectados */}
            <div>
              <h2 className="font-display font-bold text-2xl text-limonar-charcoal mb-4 flex items-center gap-2">
                <Eye className="h-6 w-6 text-limonar-terracotta" />
                4. Datos Personales Recolectados
              </h2>
              <p className="text-limonar-charcoalLight mb-4">LIMONAR podrá recolectar los siguientes tipos de datos personales:</p>
              <ul className="list-disc list-inside space-y-2 text-limonar-charcoalLight ml-4">
                <li><strong>Datos de identificación:</strong> Nombre completo, tipo y número de documento de identidad, fecha y lugar de nacimiento, nacionalidad.</li>
                <li><strong>Datos de contacto:</strong> Dirección física, correo electrónico, números telefónicos (fijo y móvil).</li>
                <li><strong>Datos demográficos:</strong> Edad, género, estado civil.</li>
                <li><strong>Datos profesionales:</strong> Ocupación, experiencia laboral, certificaciones (para maestros constructores).</li>
                <li><strong>Datos comerciales:</strong> Historial de compras, preferencias de productos, cotizaciones solicitadas.</li>
                <li><strong>Datos financieros:</strong> Información bancaria para pagos y transacciones comerciales.</li>
                <li><strong>Datos de navegación:</strong> Dirección IP, cookies, páginas visitadas, tiempo de navegación.</li>
                <li><strong>Datos sensibles:</strong> Solo cuando sea estrictamente necesario y con autorización expresa (ej: datos de salud para seguros laborales).</li>
              </ul>
            </div>

            {/* Finalidades */}
            <div>
              <h2 className="font-display font-bold text-2xl text-limonar-charcoal mb-4">
                5. Finalidades del Tratamiento
              </h2>
              <p className="text-limonar-charcoalLight mb-4">Los datos personales recolectados serán utilizados para:</p>
              <ul className="list-disc list-inside space-y-2 text-limonar-charcoalLight ml-4">
                <li>Gestionar la relación comercial con clientes, proveedores y partners.</li>
                <li>Procesar pedidos, cotizaciones y facturación.</li>
                <li>Administrar el programa "Maestros Limonar" y beneficios asociados.</li>
                <li>Gestionar la red de transportadores y logística de entregas.</li>
                <li>Enviar información comercial, promociones y novedades (con opción de opt-out).</li>
                <li>Realizar estudios de mercado, encuestas de satisfacción y análisis estadísticos.</li>
                <li>Cumplir obligaciones legales, contables y tributarias.</li>
                <li>Gestionar procesos de selección, contratación y administración de personal.</li>
                <li>Garantizar la seguridad de las instalaciones y sistemas de información.</li>
                <li>Atender solicitudes, quejas y reclamos.</li>
                <li>Mejorar la experiencia del usuario en el sitio web mediante análisis de navegación.</li>
                <li>Prevenir fraudes y actividades ilícitas.</li>
              </ul>
            </div>

            {/* Derechos del Titular */}
            <div>
              <h2 className="font-display font-bold text-2xl text-limonar-charcoal mb-4">
                6. Derechos de los Titulares
              </h2>
              <p className="text-limonar-charcoalLight mb-4">Como titular de datos personales, usted tiene derecho a:</p>
              <ul className="list-disc list-inside space-y-2 text-limonar-charcoalLight ml-4">
                <li><strong>Conocer, actualizar y rectificar</strong> sus datos personales frente a LIMONAR.</li>
                <li><strong>Solicitar prueba de la autorización</strong> otorgada para el tratamiento de sus datos.</li>
                <li><strong>Ser informado</strong> sobre el uso que se ha dado a sus datos personales.</li>
                <li><strong>Presentar quejas</strong> ante la Superintendencia de Industria y Comercio por infracciones a la ley.</li>
                <li><strong>Revocar la autorización</strong> y/o solicitar la supresión de sus datos cuando no se respeten los principios, derechos y garantías constitucionales y legales.</li>
                <li><strong>Acceder de forma gratuita</strong> a sus datos personales que hayan sido objeto de tratamiento.</li>
                <li><strong>Oponerse al tratamiento</strong> de sus datos personales por razones legítimas.</li>
                <li><strong>Portabilidad de datos:</strong> Solicitar la transferencia de sus datos a otro responsable (cuando aplique).</li>
                <li><strong>No ser objeto de decisiones automatizadas</strong> que produzcan efectos jurídicos o le afecten significativamente.</li>
              </ul>
            </div>

            {/* Procedimiento */}
            <div>
              <h2 className="font-display font-bold text-2xl text-limonar-charcoal mb-4">
                7. Procedimiento para Ejercer sus Derechos
              </h2>
              <p className="text-limonar-charcoalLight mb-4">
                Para ejercer sus derechos, el titular o su representante legal podrá presentar una solicitud a través de los siguientes canales:
              </p>
              <div className="bg-limonar-sand/30 rounded-xl p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-limonar-terracotta flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-limonar-charcoal">Correo electrónico:</p>
                    <p className="text-limonar-charcoalLight">protecciondatos@limonar.co</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-limonar-terracotta flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-limonar-charcoal">Dirección física:</p>
                    <p className="text-limonar-charcoalLight">Km 6 Vía Puerto Tejada-Villa Rica, Cauca, Colombia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-limonar-terracotta flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-limonar-charcoal">Teléfono:</p>
                    <p className="text-limonar-charcoalLight">+57 300 123 4567</p>
                  </div>
                </div>
              </div>
              <p className="text-limonar-charcoalLight mt-4">
                <strong>Plazo de respuesta:</strong> LIMONAR responderá su solicitud dentro de los diez (10) días hábiles siguientes a la fecha de recibo. 
                Cuando no fuere posible atender la solicitud en dicho término, se informará al interesado los motivos de la demora y la fecha en que se atenderá, 
                la cual no podrá superar los cinco (5) días hábiles siguientes al vencimiento del primer término.
              </p>
            </div>

            {/* Seguridad */}
            <div>
              <h2 className="font-display font-bold text-2xl text-limonar-charcoal mb-4 flex items-center gap-2">
                <Lock className="h-6 w-6 text-limonar-terracotta" />
                8. Medidas de Seguridad
              </h2>
              <p className="text-limonar-charcoalLight mb-4">
                LIMONAR implementa medidas técnicas, humanas y administrativas para proteger los datos personales y evitar su adulteración, 
                pérdida, consulta, uso o acceso no autorizado o fraudulento:
              </p>
              <ul className="list-disc list-inside space-y-2 text-limonar-charcoalLight ml-4">
                <li>Encriptación de datos sensibles mediante protocolos SSL/TLS.</li>
                <li>Control de acceso mediante autenticación y autorización por roles.</li>
                <li>Firewalls y sistemas de detección de intrusos.</li>
                <li>Copias de seguridad periódicas y planes de recuperación ante desastres.</li>
                <li>Capacitación continua del personal en protección de datos.</li>
                <li>Acuerdos de confidencialidad con empleados y terceros.</li>
                <li>Auditorías de seguridad periódicas.</li>
                <li>Actualización constante de sistemas y parches de seguridad.</li>
              </ul>
            </div>

            {/* Transferencia */}
            <div>
              <h2 className="font-display font-bold text-2xl text-limonar-charcoal mb-4">
                9. Transferencia y Transmisión de Datos
              </h2>
              <p className="text-limonar-charcoalLight mb-4">
                LIMONAR podrá transferir o transmitir datos personales a terceros cuando:
              </p>
              <ul className="list-disc list-inside space-y-2 text-limonar-charcoalLight ml-4">
                <li>Sea necesario para la ejecución de un contrato entre el titular y LIMONAR.</li>
                <li>Exista una obligación legal o reglamentaria.</li>
                <li>Se cuente con la autorización expresa del titular.</li>
                <li>Sea necesario para la prestación de un servicio (ej: empresas de mensajería, procesadores de pago).</li>
              </ul>
              <p className="text-limonar-charcoalLight mt-4">
                En caso de transferencia internacional de datos, LIMONAR garantizará que el país receptor cuente con niveles adecuados de protección 
                o que el receptor se comprometa contractualmente a aplicar estándares de protección equivalentes.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="font-display font-bold text-2xl text-limonar-charcoal mb-4">
                10. Uso de Cookies y Tecnologías Similares
              </h2>
              <p className="text-limonar-charcoalLight mb-4">
                El sitio web de LIMONAR utiliza cookies y tecnologías similares para mejorar la experiencia del usuario, analizar el tráfico 
                y personalizar contenido. Las cookies pueden ser:
              </p>
              <ul className="list-disc list-inside space-y-2 text-limonar-charcoalLight ml-4">
                <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento del sitio.</li>
                <li><strong>Cookies de rendimiento:</strong> Recopilan información sobre cómo los usuarios utilizan el sitio.</li>
                <li><strong>Cookies de funcionalidad:</strong> Permiten recordar preferencias del usuario.</li>
                <li><strong>Cookies de publicidad:</strong> Utilizadas para mostrar anuncios relevantes.</li>
              </ul>
              <p className="text-limonar-charcoalLight mt-4">
                Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
              </p>
            </div>

            {/* Retención */}
            <div>
              <h2 className="font-display font-bold text-2xl text-limonar-charcoal mb-4">
                11. Tiempo de Retención de Datos
              </h2>
              <p className="text-limonar-charcoalLight">
                Los datos personales serán conservados durante el tiempo necesario para cumplir con las finalidades para las cuales fueron recolectados 
                y para cumplir con obligaciones legales, contables y fiscales. Una vez cumplidas estas finalidades y obligaciones, los datos serán 
                eliminados de forma segura o anonimizados para fines estadísticos.
              </p>
            </div>

            {/* Menores */}
            <div>
              <h2 className="font-display font-bold text-2xl text-limonar-charcoal mb-4">
                12. Tratamiento de Datos de Menores de Edad
              </h2>
              <p className="text-limonar-charcoalLight">
                LIMONAR no recolecta intencionalmente datos personales de menores de 18 años sin el consentimiento de sus padres o representantes legales. 
                Si un menor proporciona información sin autorización, los padres o tutores pueden solicitar su eliminación contactando a 
                protecciondatos@limonar.co.
              </p>
            </div>

            {/* Modificaciones */}
            <div>
              <h2 className="font-display font-bold text-2xl text-limonar-charcoal mb-4">
                13. Modificaciones a la Política
              </h2>
              <p className="text-limonar-charcoalLight">
                LIMONAR se reserva el derecho de modificar esta política en cualquier momento. Las modificaciones serán comunicadas a través del sitio web 
                y, cuando sea aplicable, mediante correo electrónico a los titulares registrados. Se recomienda revisar periódicamente esta política 
                para estar informado sobre cómo protegemos sus datos.
              </p>
            </div>

            {/* Autoridad */}
            <div>
              <h2 className="font-display font-bold text-2xl text-limonar-charcoal mb-4">
                14. Autoridad de Control
              </h2>
              <p className="text-limonar-charcoalLight mb-4">
                La autoridad competente para conocer de las reclamaciones relacionadas con el tratamiento de datos personales en Colombia es:
              </p>
              <div className="bg-limonar-sand/30 rounded-xl p-6">
                <p className="font-semibold text-limonar-charcoal mb-2">Superintendencia de Industria y Comercio (SIC)</p>
                <p className="text-limonar-charcoalLight text-sm">Delegatura para la Protección de Datos Personales</p>
                <p className="text-limonar-charcoalLight text-sm">Carrera 13 No. 27-00, Pisos 1 y 3</p>
                <p className="text-limonar-charcoalLight text-sm">Bogotá D.C., Colombia</p>
                <p className="text-limonar-charcoalLight text-sm">Línea gratuita: 01 8000 910 165</p>
                <p className="text-limonar-charcoalLight text-sm">www.sic.gov.co</p>
              </div>
            </div>

            {/* Aceptación */}
            <div className="bg-limonar-lime/10 border-2 border-limonar-lime/30 rounded-xl p-6">
              <h2 className="font-display font-bold text-xl text-limonar-charcoal mb-3">
                15. Aceptación de la Política
              </h2>
              <p className="text-limonar-charcoalLight">
                Al proporcionar sus datos personales a LIMONAR y/o utilizar nuestros servicios, usted declara haber leído, entendido y aceptado 
                los términos de esta Política de Tratamiento de Datos Personales. Si no está de acuerdo, por favor absténgase de proporcionar 
                sus datos personales.
              </p>
            </div>

            {/* Contacto */}
            <div className="text-center pt-6 border-t border-limonar-sandDark">
              <p className="text-limonar-charcoalLight mb-4">
                Para cualquier consulta sobre esta política, contáctenos en:
              </p>
              <a href="mailto:protecciondatos@limonar.co" className="text-limonar-lime hover:text-limonar-limeLight font-semibold">
                protecciondatos@limonar.co
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
