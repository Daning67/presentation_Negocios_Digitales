// ==========================================================================
// The Didi's House - Datos Editables de la Presentación
// ==========================================================================
// Puedes editar cualquier texto, número, métrica, nota o pregunta en este
// archivo sin necesidad de modificar el código visual ni los componentes.

import trendsTimeImg from '../assets/trends-time.jpg'
import trendsGeoImg from '../assets/trends-geo.jpg'

export const PRESENTATION_META = {
  title: 'The Didi’s House',
  subtitle: 'Pitch final',
  tagline: 'Un cuarto seguro cerca de tu universidad.',
  description:
    'Plataforma para estudiantes foráneos y caseros verificados, organizada en comunidades por universidad.',
  teamMembers:
    'Andy Navarrete · Abner González · Josué Palacios · Diego Martínez · Mateo Salazar',
  teamDetails:
    'Sección 1 · Prof. Edwin Berríos · Pitch final, 23 de noviembre de 2026',
  courseTag: 'Equipo Didi´s · Negocios Digitales en las Economías Globales',
  totalTimeSeconds: 480 // 8 minutos
}

export const SECTIONS = [
  { n: 'Problema', end: 60 },
  { n: 'Problema', end: 60 },
  { n: 'Solución y demo', end: 180 },
  { n: 'Solución y demo', end: 180 },
  { n: 'Evidencia', end: 240 },
  { n: 'Modelo de negocio', end: 330 },
  { n: 'Datos e IA', end: 390 },
  { n: 'Lanzamiento y cierre', end: 480 },
  { n: 'Lanzamiento y cierre', end: 480 },
  { n: 'Preguntas', end: null }
]

export const SLIDES_DATA = [
  // --------------------------------------------------------------------------
  // 1. PORTADA
  // --------------------------------------------------------------------------
  {
    id: 's1',
    title: 'Portada',
    section: 'Problema',
    theme: 'dark',
    maxStep: 0,
    tag: 'Equipo Didi´s · Negocios Digitales en las Economías Globales',
    titleText: 'The Didi’s House',
    lema: 'Un cuarto seguro cerca de tu universidad.',
    sub: 'Plataforma para estudiantes foráneos y caseros verificados, organizada en comunidades por universidad.',
    team: 'Andy Navarrete · Abner González · Josué Palacios · Diego Martínez · Mateo Salazar',
    teamDetails:
      'Sección 1 · Prof. Edwin Berríos · Pitch final, 23 de noviembre de 2026',
    houseLabel: 'Cuarto verificado',
    notes: [
      'Habla: [quién]',
      'Frase de apertura: «Un cuarto seguro cerca de tu universidad.»',
      'Presentar al equipo y a la startup en 10 segundos. Criterio 7: comunicación.'
    ]
  },

  // --------------------------------------------------------------------------
  // 2. EL PROBLEMA
  // --------------------------------------------------------------------------
  {
    id: 's2',
    title: 'El problema',
    section: 'Problema',
    theme: 'light',
    maxStep: 5,
    tag: 'Problema · 1 min',
    heading: 'Buscar cuarto en una ciudad nueva es un riesgo',
    pains: [
      {
        step: 1,
        metric: '7 de 10',
        text: 'llegaron <b>solos o casi solos</b> a una ciudad que no conocían.'
      },
      {
        step: 2,
        metric: '6 de 10',
        text: 'sacrificaron la cercanía y viajan <b>de 20 minutos a 1 hora</b> en tráfico pesado.'
      },
      {
        step: 3,
        metric: '6 de 10',
        text: 'buscaron en Facebook o Marketplace; <b>2 de 8 descartaron anuncios</b> por desconfianza.'
      }
    ],
    quote: {
      step: 4,
      author: 'Estudiante 5',
      text: '«Si hubiera agarrado un lugar más cerca me tardaría 5 o 10 minutos, pero tengo que tomar como 20 minutos, a veces hasta una hora.»'
    },
    news: {
      step: 5,
      headline:
        'Detienen a dos hombres señalados de ofertar apartamentos con imágenes falsas',
      source: 'Diario El Mundo, 30 de abril de 2026'
    },
    source:
      'Fuente: 8 entrevistas a estudiantes foráneos (Avance 2); Diario El Mundo (2026).',
    notes: [
      'Habla: [quién]',
      '¿Qué duele? Inseguridad, distancia y soledad. ¿A quién? A estudiantes foráneos. ¿Cuánto? [costo promedio de un cuarto, si lo tienen]',
      'Los números son de 8 entrevistas. Decirlo así: «8 entrevistas», no «mucha gente».',
      'Akerlof (1970): el estudiante no distingue un cuarto bueno de uno malo hasta que ya pagó.',
      'Criterio 1: problema y oportunidad (15 %).'
    ]
  },

  // --------------------------------------------------------------------------
  // 3. LA SOLUCIÓN
  // --------------------------------------------------------------------------
  {
    id: 's3',
    title: 'La solución',
    section: 'Solución y demo',
    theme: 'light',
    maxStep: 4,
    tag: 'Solución y demo · 2 min',
    heading: 'Dos lados, una casa: comunidades por universidad',
    arrows: {
      step: 3,
      studentLabel: 'busca y reseña',
      landlordLabel: 'publica'
    },
    nodes: [
      {
        id: 'n-est',
        step: 1,
        title: 'Estudiantes foráneos',
        role: 'Usuarios · usan gratis',
        desc: 'Encuentran un cuarto seguro y cercano, con fotos reales y reseñas de su universidad.'
      },
      {
        id: 'n-cen',
        step: 3,
        title: 'The Didi’s House',
        role: 'Una comunidad por universidad',
        desc: 'El estudiante ve cuartos cerca de su campus y recomendaciones de sus compañeros.'
      },
      {
        id: 'n-cas',
        step: 2,
        title: 'Caseros verificados',
        role: 'Clientes · pagan',
        desc: 'Llenan sus cuartos con estudiantes de confianza y firman contratos claros.'
      }
    ],
    features: [
      {
        step: 4,
        left: '80px',
        title: 'Verificación',
        desc: 'de identidad y de cada inmueble.'
      },
      {
        step: 4,
        left: '394px',
        title: 'Búsqueda por universidad',
        desc: 'con el costo total desde el inicio.'
      },
      {
        step: 4,
        left: '708px',
        title: 'Confianza visible',
        desc: 'fotos reales, recorrido virtual y reseñas.'
      },
      {
        step: 4,
        left: '1022px',
        width: '190px',
        title: 'Contrato digital',
        desc: 'con alternativas al fiador.'
      }
    ],
    source: 'Fuente: Avances 1 y 2 del proyecto.',
    notes: [
      'Habla: [quién]',
      'Usuarios = estudiantes (gratis). Clientes = caseros (pagan).',
      'Las comunidades por universidad dan confianza y resuelven el arranque: el casero solo paga si ve estudiantes.',
      'Criterio 2: propuesta de valor (20 %).'
    ]
  },

  // --------------------------------------------------------------------------
  // 4. DEMO DEL PROTOTIPO
  // --------------------------------------------------------------------------
  {
    id: 's4',
    title: 'Demo del prototipo',
    section: 'Solución y demo',
    theme: 'dark',
    maxStep: 0,
    tag: 'Solución y demo · 2 min',
    heading: 'Así se ve en uso',
    prototypeUrl:
      'https://ai.studio/apps/fc59e70a-f81f-4188-aab3-e1745e996192?fullscreenApplet=true',
    defaultCaptions: ['Pantalla 1', 'Pantalla 2', 'Pantalla 3'],
    emptyMessage:
      'Plan B sin internet\nHaz clic para agregar una captura del prototipo',
    buttonText: 'Abrir el prototipo en vivo',
    instructions: [
      '<b>Demostración del prototipo funcionando:</b> usuario, acción y resultado, en voz alta.',
    ],
  },

  // --------------------------------------------------------------------------
  // 5. EVIDENCIA
  // --------------------------------------------------------------------------
  {
    id: 's5',
    title: 'Evidencia',
    section: 'Evidencia',
    theme: 'light',
    maxStep: 3,
    tag: 'Evidencia · 1 min',
    heading: 'Lo que dicen 8 estudiantes y lo que buscan en Google',
    bars: [
      {
        metric: '9 de 10',
        text: 'la familia participó en la búsqueda del cuarto',
        width: '90%'
      },
      {
        metric: '7 de 10',
        text: 'llegaron solos o casi solos',
        width: '70%'
      },
      {
        metric: '6 de 10',
        text: 'buscaron en Facebook o Marketplace',
        width: '60%'
      },
      {
        metric: '6 de 10',
        text: 'sacrificaron cercanía a la universidad',
        width: '60%'
      }
    ],
    trends: {
      tabs: ['Interés en el tiempo', 'Por departamento'],
      images: [
        {
          src: trendsTimeImg,
          alt: 'Gráfico de Google Trends: interés a lo largo del tiempo, últimos 5 años'
        },
        {
          src: trendsGeoImg,
          alt: 'Mapa de Google Trends: interés por departamento, últimos 5 años'
        }
      ],
      caption:
        'Google Trends, El Salvador, últimos 5 años: «Pupilaje», «Alquiler de cuartos» y «Habitaciones en alquiler». Las búsquedas se disparan por temporadas.'
    },
    stat: {
      value: '82.2 %',
      text: 'de la población salvadoreña usa internet: el canal digital ya es el habitual.'
    },
    source:
      'Fuente: entrevistas (Avance 2, n = 8); Google (s. f.), Google Trends; Kemp (2026), Digital 2027: El Salvador.',
  },

  // --------------------------------------------------------------------------
  // 6. MODELO DE NEGOCIO
  // --------------------------------------------------------------------------
  {
    id: 's6',
    title: 'Modelo de negocio',
    section: 'Modelo de negocio',
    theme: 'light',
    maxStep: 0,
    tag: 'Modelo de negocio · 1 min 30 s',
    heading: 'Quién paga y cuánto vale cada cliente',
    canvas: [
      {
        title: 'Clientes: quienes pagan',
        text: 'Caseros con habitaciones para estudiantes'
      },
      {
        title: 'Usuarios: quienes usan gratis',
        text: 'Estudiantes foráneos que buscan un lugar cerca de su universidad para hospedarse'
      },
      {
        title: 'Propuesta de valor',
        text: 'Un cuarto seguro y cercano, con propietario verificado y reseñas de la misma universidad'
      },
      {
        title: 'Cómo llegamos a ellos',
        text: 'Comunidades por universidad y recomendación de amigos cercanos'
      },
      {
        title: 'Cómo ganamos dinero',
        text: 'A través de comisiones por publicación a los caseros',
      },
      {
        title: 'Costos principales',
        text: 'Mantener infraestructura y legalización de contratos digitales',
      }
    ],
    calc: {
      title: '¿Cuánto vale un cliente?',
      fields: [
        { id: 'c_precio', label: 'Precio por mes (US$)', placeholder: '0' },
        {
          id: 'c_margen',
          label: 'Margen de ganancia (%)',
          placeholder: '0',
          max: 100
        },
        { id: 'c_meses', label: 'Meses que se queda', placeholder: '0' },
        { id: 'c_gasto', label: 'Marketing al mes (US$)', placeholder: '0' },
        { id: 'c_nuevos', label: 'Clientes nuevos al mes', placeholder: '0' }
      ],
      targetRatio: 3,
      defaultVerdict:
        'La meta es LTV ÷ CAC de 3 o más.',
      healthyVerdict:
        'Modelo sano: cada cliente deja al menos 3 veces lo que costó conseguirlo.',
      warningVerdict:
        'Está por debajo de 3. Propongan un cambio: subir el precio, retener al cliente más meses o conseguirlo más barato.'
    },
    source:
      'LTV = precio × margen × meses. CAC = marketing ÷ clientes nuevos. Usar los datos del Avance 3.',
  },

  // --------------------------------------------------------------------------
  // 7. DATOS E IA
  // --------------------------------------------------------------------------
  {
    id: 's7',
    title: 'Datos e IA',
    section: 'Datos e IA',
    theme: 'light',
    maxStep: 0,
    tag: 'Datos e IA · 1 min',
    heading: 'Qué datos usamos y para qué sirve la IA',
    columns: [
      {
        title: 'Qué datos usamos',
        text: '[completar: qué datos recopila la plataforma y para qué]',
        law: 'Ley para la Protección de Datos Personales (Decreto Legislativo n.º 144, 2024).'
      },
      {
        title: 'Nuestro caso de IA',
        text: '[completar: qué problema del cliente resuelve la IA y si funcionaría sin ella]',
        law: 'Ley para la Protección de Datos Personales (Decreto Legislativo n.º 144, 2024).'
      },
      {
        title: 'Cómo cuidamos los datos',
        text: 'Políticas de privacidad, consentimiento informado y medidas de seguridad para nombre, contacto, documento de identidad e información de pagos.',
        law: 'Ley para la Protección de Datos Personales (Decreto Legislativo n.º 144, 2024).'
      }
    ],
    source:
      'Fuente: Asamblea Legislativa de la República de El Salvador (2024).',
    notes: [
      'Habla: [quién]',
      'Qué datos, qué problema resuelve la IA y si funcionaría sin ella. Cumplimiento: Decreto 144 (2024).',
      'Criterio 4: uso de datos e IA (10 %).'
    ]
  },

  // --------------------------------------------------------------------------
  // 8. PRIMEROS 100 CLIENTES
  // --------------------------------------------------------------------------
  {
    id: 's8',
    title: 'Primeros 100 clientes',
    section: 'Lanzamiento y cierre',
    theme: 'light',
    maxStep: 0,
    tag: 'Lanzamiento y cierre · 1 min 30 s',
    heading: 'Cómo llegamos a los primeros 100 clientes',
    targetClients: 100,
    circumference: 879.6,
    months: [
      {
        month: 1,
        label: 'Mes 1',
        text: '[completar: qué hacemos este mes]',
        placeholder: true
      },
      {
        month: 2,
        label: 'Mes 2',
        text: '[completar]',
        placeholder: true
      },
      {
        month: 3,
        label: 'Mes 3',
        text: '[completar]',
        placeholder: true
      }
    ],
    meta: {
      mainChannel: '[completar]',
      mainChannelPlaceholder: true,
      cacDefaultText: 'Calcúlalo en la lámina anterior'
    },
    source:
      'Datos del Avance 3. El anillo se llena con los clientes de cada mes.',
    notes: [
      'Habla: [quién]',
      'Meta concreta, no promesas: «100 clientes en 3 meses» suma; «todos van a usar la app» resta.',
      'Criterio 6: plan de lanzamiento (10 %). Bonus: plan hacia Centroamérica o la diáspora (hasta 0.5 puntos).'
    ]
  },

  // --------------------------------------------------------------------------
  // 9. DÓNDE ESTAMOS Y QUÉ NECESITAMOS
  // --------------------------------------------------------------------------
  {
    id: 's9',
    title: 'Dónde estamos y qué necesitamos',
    section: 'Lanzamiento y cierre',
    theme: 'dark',
    maxStep: 0,
    tag: 'Lanzamiento y cierre · 1 min 30 s',
    heading: 'Dónde estamos y qué necesitamos',
    stages: [
      {
        name: 'Recursos propios',
        desc: 'Se valida la idea con entrevistas y prototipo.'
      },
      {
        name: 'Presemilla',
        desc: 'Primer capital externo para lanzar el producto.'
      },
      {
        name: 'Semilla',
        desc: 'Hay clientes; se busca el modelo que funciona.'
      },
      {
        name: 'Serie A, B, C…',
        desc: 'El modelo funciona; el dinero es para crecer.'
      },
      {
        name: 'Salida',
        desc: 'Venta a otra empresa o bolsa.'
      }
    ],
    needsHeading: 'Para pasar a la siguiente etapa necesitamos',
    needsChips: ['Dinero', 'Aliados', 'Clientes piloto'],
    needsLine:
      '[completar: cuánto dinero, qué aliado o qué clientes piloto concretos]',
    needsPlaceholder: true,
    closureText: 'Un cuarto seguro cerca de tu universidad.',
    notes: [
      'Habla: [quién]',
      'Decir en qué etapa están y qué necesitan para pasar a la siguiente: dinero, aliados o clientes piloto.',
      'Cerrar con la frase: «Un cuarto seguro cerca de tu universidad.» Al minuto 8 el ayudante detiene el pitch.'
    ]
  },

  // --------------------------------------------------------------------------
  // 10. PREGUNTAS
  // --------------------------------------------------------------------------
  {
    id: 's10',
    title: 'Preguntas',
    section: 'Preguntas',
    theme: 'dark',
    maxStep: 0,
    tag: 'Preguntas · 3 min',
    heading: '¿Preguntas?',
    crew: [
      { name: 'Andy Navarrete', role: 'Investigación de mercado' },
      { name: 'Abner González', role: 'Director general' },
      { name: 'Josué Palacios', role: 'Estrategia y finanzas' },
      { name: 'Diego Martínez', role: 'Producto y diseño' },
      { name: 'Mateo Salazar', role: 'Análisis de datos' }
    ],
    notes: [
      'Responder en máximo 30 segundos, con un dato, y que conteste quien conoce mejor el tema (tecla Q: banco de preguntas). Criterio 8: defensa y participación (10 %).'
    ]
  }
]

export const QA_LIST = [
  {
    question:
      '¿Cómo saben que el problema es real y no algo que ustedes suponen?',
    answer:
      '8 entrevistas: 5 de 8 llegaron solos o casi solos, 4 de 8 sacrificaron cercanía, 4 de 8 buscaron en Facebook y 2 de 8 descartaron anuncios por desconfianza. Google Trends muestra búsquedas por temporadas y hay noticias de estafas con fotos falsas (Diario El Mundo, 2026). Falta entrevistar a caseros.'
  },
  {
    question:
      '¿Quién paga, cuánto y cuántos clientes necesitan para cubrir los costos del primer año?',
    answer:
      'Pagan los caseros; el estudiante usa gratis. Precio y costos: completar con el Avance 3 (calculadora LTV y CAC de la lámina 6).'
  },
  {
    question:
      'Si un competidor grande copia su idea mañana, ¿qué les queda?',
    answer:
      'Las comunidades por universidad y las reseñas verificadas: efectos de red que se construyen con tiempo. Facebook Marketplace y Encuentra24 ya existen, pero no verifican identidad ni inmueble.'
  },
  {
    question:
      '¿Qué problema del cliente resuelve la IA que proponen? ¿Funcionaría sin ella?',
    answer: 'Completar con el caso de IA del Avance 3 (lámina 7).'
  },
  {
    question:
      '¿Qué datos personales recopilan y cómo cumplen la ley de protección de datos?',
    answer:
      'Nombre, contacto, documento de identidad y, eventualmente, pagos. Ley para la Protección de Datos Personales (Decreto 144, 2024): políticas de privacidad, consentimiento informado y medidas de seguridad.'
  },
  {
    question:
      '¿Cómo consiguen sus primeros 100 clientes y cuánto les cuesta cada uno?',
    answer:
      'Completar con el plan de lanzamiento del Avance 3 (lámina 8): canal principal, clientes por mes y CAC de la calculadora.'
  }
]

export const KEYBOARD_SHORTCUTS = [
  { key: '→ o Espacio', desc: 'Siguiente paso o lámina' },
  { key: '←', desc: 'Paso o lámina anterior' },
  { key: 'G', desc: 'Plano: saltar a cualquier lámina' },
  { key: 'P', desc: 'Vista del presentador (otra ventana, para la laptop)' },
  { key: 'T', desc: 'Mostrar u ocultar el cronómetro' },
  { key: 'E', desc: 'Editar textos y guardar una copia' },
  { key: 'F', desc: 'Pantalla completa' },
  { key: 'H / ?', desc: 'Esta ayuda' }
]
