// js/i18n.js
// Bilingual support for Chaclacayo Landing Page

const translations = {
  es: {
    // Skip / Nav
    skip_link: "Saltar al contenido",
    nav_gallery: "Galería",
    nav_details: "Detalles",
    nav_location: "Ubicación",
    nav_investment: "Inversión",
    nav_faq: "FAQ",
    nav_contact: "Contacto",

    // SEO
    seo_title: "Casa Multi-Unidad en Chaclacayo, Lima — A 10 min de UPeU · Venta Directa",
    seo_desc: "Propiedad multi-unidad en Chaclacayo: 330 m², 15 habitaciones, 10 cocinas, 10 baños. A 10 min de la Universidad Peruana Unión (UPeU). Venta directa por su dueño.",

    // Hero
    hero_badge: "Venta Directa — Sin Intermediarios",
    hero_headline: "Tu Oasis en Chaclacayo",
    hero_subheadline: "Casa multi-unidad · 330 m² · 15 habitaciones · A 10 min de UPeU",
    hero_subline: "Venta directa por su dueño · A 40 min de Lima · Ideal hospedaje, Airbnb o alquiler estudiantil",
    hero_cta_contact: "Contactar a Carlos",
    hero_cta_gallery: "Ver galería ↓",
    hero_trust_1: "✓ Propietario verificado",
    hero_trust_2: "✓ Documentos en regla",
    hero_trust_3: "✓ Visitas con cita",
    hero_scroll: "SCROLL",

    // Value Prop
    value_kicker: "Lo esencial",
    value_title: "Por qué elegir esta propiedad",
    value_1_title: "A 10 min de UPeU",
    value_1_desc: "Universidad Peruana Unión — comunidad universitaria adventista activa todo el año",
    value_2_title: "Multi-unidad lista para rentar",
    value_2_desc: "15 habitaciones, 10 cocinas, 10 baños · ideal hospedaje, Airbnb o alquiler estudiantil",
    value_3_title: "Contacto directo con el dueño",
    value_3_desc: "Sin intermediarios, sin comisiones — atención personal de Carlos",
    value_4_title: "Clima cálido todo el año",
    value_4_desc: "A 40 min de Lima · valle templado · sol incluso en invierno",

    // Gallery
    gallery_kicker: "La propiedad",
    gallery_title: "Conoce tu próximo hogar",
    gallery_video_title: "Video Tour",

    // Lifestyle
    lifestyle_kicker: "El estilo de vida",
    lifestyle_title: "Un día en Chaclacayo",
    lifestyle_intro: "No vendemos solo una casa. Vendemos un valle templado, un cielo limpio y el sonido del río al fondo.",
    life_1_time: "06:30",
    life_1_desc: "El sol calienta antes que en Lima",
    life_2_time: "09:00",
    life_2_desc: "Aire limpio, sin tráfico, sin ruido",
    life_3_time: "13:00",
    life_3_desc: "Restaurantes campestres a minutos",
    life_4_time: "16:00",
    life_4_desc: "El Rímac y los cerros, tu patio",
    life_5_time: "19:00",
    life_5_desc: "El cielo se enciende todos los días",
    life_6_time: "21:00",
    life_6_desc: "Cielo despejado lejos de la ciudad",

    // Details (§5)
    details_kicker: "La propiedad en cifras",
    details_title: "Detalles de la propiedad",
    spec_total_area: "Área total",
    spec_total_value: "330 m²",
    spec_bedrooms: "Habitaciones",
    spec_bed_value: "15",
    spec_baths: "Baños",
    spec_bath_value: "10",
    spec_kitchens: "Cocinas",
    spec_kitchen_value: "10",
    spec_patios: "Patios",
    spec_patios_value: "3",
    spec_rooftop: "Azotea",
    spec_rooftop_value: "1 amplia",
    spec_year: "Año construcción",
    spec_year_value: "Constantemente remodelada",
    spec_price: "Precio",
    spec_price_value: "$350,000 USD (Precio Terreno)",
    services_title: "Servicios incluidos",
    service_water: "💧 Agua potable",
    service_power: "⚡ Electricidad",
    service_fiber: "📡 Internet fibra",
    service_sewer: "🚰 Alcantarillado",
    service_green: "🌳 Áreas verdes",
    service_fruit: "🍋 Árboles frutales",
    service_cistern: "🛢️ Cisterna",
    service_security: "🛡️ Seguridad",
    legal_title: "Documentación legal",
    legal_1: "✓ Título de propiedad",
    legal_2: "✓ HR / PU al día",
    legal_3: "✓ Sin gravámenes",
    legal_4: "✓ Inscrita en SUNARP",

    // Location (§6)
    location_kicker: "Dónde está",
    location_title: "Ubicación y entorno",
    address_sub: "Chaclacayo · Lima · Perú · Acceso directo desde Carretera Central",
    location_directions: "🧭 Cómo llegar",
    distances_title: "Distancias clave",
    dist_1: "Aeropuerto Jorge Chávez",
    dist_2: "Centro de Lima",
    dist_3: "Carretera Central",
    dist_4: "Universidad Peruana Unión",
    dist_5: "Hospital de Chaclacayo",
    dist_6: "Clínica Good Hope",
    dist_7: "Plaza Vea / Mercado",
    dist_8: "La Granja Azul",
    dist_9: "Centro Vacacional Huampaní",
    dist_10: "Chosica",
    dist_11: "Río Rímac",
    poi_title: "Puntos de interés cercanos",
    poi_edu: "Educación",
    poi_edu_3: "Colegio Particular Adventista · ~5 min",
    poi_edu_4: "Diversos colegios públicos y particulares",
    poi_health: "Salud",
    poi_health_2: "Centro de Salud (MINSA) · ~5 min",
    poi_health_4: "Farmacias 24h dentro del distrito",
    poi_shop: "Compras y Servicios",
    poi_shop_2: "Mercado Central de Chaclacayo · ~8 min",
    poi_shop_3: "Bancos: BCP, Interbank, BBVA",
    poi_shop_4: "Gimnasios, peluquerías, lavanderías",
    poi_food: "Gastronomía",
    poi_food_2: "El Rancho (parrillas) · cerca",
    poi_food_3: "Restaurantes campestres con piscina",
    poi_food_4: "Cafeterías y panaderías locales",
    poi_nature: "Naturaleza y Recreación",
    poi_nature_1: "Río Rímac (caminatas) · <1 km",
    poi_nature_2: "Cerros de Chaclacayo (trekking ligero)",
    poi_nature_4: "Plaza de Armas y áreas verdes",
    poi_connect: "Conectividad",
    poi_connect_1: "Carretera Central · acceso directo",
    poi_connect_2: "Líneas de buses y combis frecuentes",
    poi_connect_3: "Servicios de taxi / Uber / InDriver",
    poi_connect_4: "Aeropuerto Jorge Chávez · ~60 min",
    advantages_title: "Ventajas de la zona",
    adv_1: "A 40 min de Lima centro por Carretera Central",
    adv_2: "Clima tropical cálido todo el año (incluso en invierno)",
    adv_3: "Ideal para salud y bienestar (alergias, adultos mayores)",
    adv_4: "Rodeado de naturaleza, río Rímac y cerros",
    adv_5: "Zona consolidada en crecimiento sostenido",
    adv_6: "Agua, luz, internet de fibra disponibles",
    adv_7: "Cooperativa establecida y segura",
    adv_8: "Cerca de universidades y hospitales",

    // UPeU featured block (§6)
    upeu_badge: "A 10 minutos · ventaja única",
    upeu_title: "Universidad Peruana Unión (UPeU)",
    upeu_sub: "La universidad adventista más importante de Sudamérica. Una comunidad universitaria activa todo el año a un trayecto corto de la propiedad — alumnos, docentes, familias en visita y eventos académicos generan demanda constante de hospedaje y alquiler.",
    upeu_s1: "825+ reseñas Google",
    upeu_s2: "Año de fundación",
    upeu_s3: "De la propiedad",
    upeu_s4: "Universidades adventistas LatAm",
    upeu_why: "Por qué importa: con 15 habitaciones, 10 cocinas y 10 baños, esta propiedad es ideal como hospedaje universitario, casa de huéspedes o multi-unidad de alquiler. La comunidad UPeU + adventista es estable, recurrente y con alta retención.",
    upeu_link: "Ver UPeU en Google Maps ↗",

    // Investment (§7) — multi-unidad / hospedaje estudiantil
    investment_kicker: "Por qué invertir aquí",
    investment_title: "Inversión y potencial",
    investment_intro: "Una propiedad multi-unidad ya construida, a 10 minutos de la universidad adventista más grande de Sudamérica. Los números cierran.",
    inv_b1: "Unidades independientes",
    inv_b2: "Habitaciones rentables",
    inv_b3: "A UPeU",
    inv_b4: "PEN · EUR · BTC aceptados",
    roi_title: "Calcula tu retorno potencial",
    roi_lead: "Modelo de hospedaje estudiantil o alquiler corto. Ajusta los valores según tu estrategia y observa el potencial anual.",
    roi_rate: "Renta por habitación / mes (USD)",
    roi_occ: "Ocupación promedio (%)",
    roi_months: "Habitaciones rentadas",
    roi_price: "Precio propiedad (USD)",
    roi_r1: "Ingreso anual estimado",
    roi_r2: "ROI bruto anual",
    roi_r3: "Recuperación (años)",
    roi_note: "* Cálculo referencial. La demanda de UPeU y la comunidad adventista mantiene la ocupación alta durante el ciclo académico. Hablemos para los números reales y la operación actual.",
    payment_title: "Opciones de pago",
    pay_1: "💵 Contado (USD / PEN / EUR)",
    pay_2: "🏦 Financiamiento bancario",
    pay_3: "📋 Cuotas directas (negociable)",
    pay_4: "₿ Crypto (BTC / USDT)",

    // Owner (§8)
    owner_kicker: "Una nota personal",
    owner_title: "Carta del propietario",
    owner_p1: "\"Soy Carlos Carpio. Esta propiedad ha sido parte de mi vida.\"",
    owner_p2: "Hoy decido venderla directamente, sin intermediarios, porque creo en hablar de tú a tú con quien será su próximo dueño.",
    owner_p3: "Pregunta lo que quieras. Visítala con calma. Toma la decisión informada que merece una compra de este tamaño. Te respondo personalmente.",

    // Testimonials (§9)
    testimonials_kicker: "Confianza",
    testimonials_title: "Lo que dicen quienes han visitado",
    stat_1: "Tiempo promedio de respuesta",
    stat_2: "Documentos verificados",
    stat_3: "Intermediarios o comisiones",
    t1_quote: "\"Lo que más valoro es hablar directo con el dueño. Sin presión de agencia, sin agendas ocultas. Me mostró todo y respondió cada pregunta con calma.\"",
    t1_role: "Visitante interesada · Lima",
    t2_quote: "\"Chaclacayo es lo que Lima no es: cielo limpio, aire tibio, restaurantes a minutos. La propiedad cumple lo que la página promete.\"",
    t2_role: "Inversor · Miami",
    t3_quote: "\"Buscábamos casa de retiro y aquí encontramos clima, tranquilidad y conexión. Carlos atendió cada detalle.\"",
    t3_role: "Pareja · Europa",

    // FAQ (§10)
    faq_kicker: "Preguntas frecuentes",
    faq_title: "Resolvemos tus dudas antes que las hagas",
    faq_q0a: "¿La propiedad puede operarse como hospedaje o casa de huéspedes?",
    faq_a0a: "Sí. Con 15 habitaciones, 10 cocinas y 10 baños, está pensada para ser usada como propiedad multi-unidad. Es ideal para hospedaje universitario, casa de huéspedes, alquileres por temporada (Airbnb) o vivienda compartida — todo a 10 minutos de UPeU.",
    faq_q0b: "¿Qué tan cerca está realmente de UPeU y por qué importa?",
    faq_a0b: "Aproximadamente 10 minutos en auto por la Carretera Central. La Universidad Peruana Unión es la universidad adventista más grande de Sudamérica (fundada en 1919, 4.5★ en Google) y genera demanda constante de hospedaje: estudiantes, docentes, padres en visita, eventos académicos y comunidad adventista que prefiere alojarse cerca del campus.",
    faq_q1: "¿Por qué se vende directamente sin agencia?",
    faq_a1: "Porque queremos transparencia y trato directo. Sin intermediarios, el comprador habla con el dueño, conoce la historia real de la propiedad y se ahorra comisiones que en Perú suelen ser entre 3% y 5%.",
    faq_q2: "¿La propiedad tiene los papeles en regla?",
    faq_a2: "Sí. Título de propiedad, HR/PU al día, sin gravámenes e inscrita en SUNARP. Toda la documentación se entrega para revisión legal antes de cualquier compromiso.",
    faq_q3: "¿Aceptan pago en dólares, soles o euros?",
    faq_a3: "Sí. Aceptamos USD, PEN y EUR. También evaluamos pagos en cuotas directas y financiamiento bancario con BCP, Interbank y BBVA.",
    faq_q4: "¿Puedo agendar una visita? ¿Cómo?",
    faq_a4: "Sí, con cita previa los fines de semana o entre semana coordinando. Escríbeme por correo o WhatsApp y agendamos. La propiedad está en Cooperativa Alfonso Cobián, Mz B Lt 25, Chaclacayo.",
    faq_q5: "¿Hay opción de financiamiento?",
    faq_a5: "Sí. Trabajamos con los principales bancos peruanos para crédito hipotecario. También evaluamos pago directo en cuotas, según perfil del comprador.",
    faq_q6: "¿Qué servicios incluye? (luz, agua, internet)",
    faq_a6: "Agua potable, electricidad, alcantarillado e internet de fibra óptica. La cooperativa cuenta con áreas verdes, seguridad y servicios completos.",
    faq_q7: "¿Es seguro Chaclacayo?",
    faq_a7: "Chaclacayo es uno de los distritos más tranquilos de Lima Este. La Cooperativa Alfonso Cobián es una urbanización consolidada con vigilancia y comunidad establecida.",
    faq_q8: "Soy extranjero, ¿puedo comprar en Perú?",
    faq_a8: "Sí. La ley peruana permite a extranjeros adquirir bienes inmuebles. Solo necesitas pasaporte y carné de extranjería o RUC. Te orientamos en todo el trámite notarial.",
    faq_q9: "¿Cuál es el precio final? ¿Es negociable?",
    faq_a9: "El precio se conversa de forma directa, transparente y caso a caso, según la modalidad de pago. Contáctame y vemos los números reales.",
    faq_q10: "¿Cuándo se puede entregar?",
    faq_a10: "La propiedad está disponible para entrega inmediata tras firma de minuta y escritura pública.",

    // Lead Magnet (§11)
    lm_kicker: "Descarga gratis",
    lm_title: "El dossier completo de la propiedad",
    lm_sub: "Plano, fotos en alta resolución, documentación legal y datos de inversión en un PDF listo para imprimir o compartir.",
    lm_ph_name: "Nombre",
    lm_cta: "Recibir dossier",
    lm_success: "¡Listo! Te enviaremos el dossier en breve.",

    // Contact (§12)
    contact_kicker: "Habla con el dueño",
    contact_title: "Contáctanos directamente",
    contact_intro: "Para más información o agendar una visita, escríbeme directamente. Respondo personalmente.",
    contact_info_title: "Carlos Carpio",
    contact_info_sub: "Propietario · Atención directa, sin intermediarios",
    contact_response: "Respuesta en menos de 24 h",
    contact_cta_email: "📧 Enviar correo",
    contact_cta_wa: "💬 WhatsApp",
    form_name: "Nombre",
    form_phone: "Teléfono",
    form_email: "Email",
    form_date: "Cuándo te gustaría visitarla",
    form_message: "Mensaje",
    form_message_ph: "Cuéntame qué te interesa de la propiedad...",
    form_err_name: "Por favor ingresa tu nombre",
    form_err_email: "Email inválido",
    form_submit: "Enviar mensaje a Carlos",
    form_success: "Gracias, Carlos se pondrá en contacto contigo pronto.",
    form_error: "Hubo un problema enviando el mensaje. Intenta por correo directo.",

    // Closing (§13)
    closing_kicker: "Una decisión que vale conversarse",
    closing_title: "Oportunidad única en Chaclacayo",
    closing_text: "Propiedades con estas características y potencial no aparecen con frecuencia. Hablemos hoy mismo.",
    closing_cta_1: "Contactar a Carlos ahora",
    closing_cta_2: "💬 WhatsApp",

    // Footer
    footer_tagline: "Venta directa por su dueño. Sin intermediarios. Sin comisiones.",
    footer_explore: "Explorar",
    footer_contact: "Contacto",
    footer_legal: "© 2026 Carlos Carpio · Todos los derechos reservados",
    footer_disclaimer: "Precio referencial · La compraventa se formaliza ante notario público."
  },

  en: {
    // Skip / Nav
    skip_link: "Skip to content",
    nav_gallery: "Gallery",
    nav_details: "Details",
    nav_location: "Location",
    nav_investment: "Investment",
    nav_faq: "FAQ",
    nav_contact: "Contact",

    // SEO
    seo_title: "Multi-Unit Property in Chaclacayo, Lima — 10 min from UPeU · Direct Sale",
    seo_desc: "Multi-unit property in Chaclacayo: 330 m², 15 bedrooms, 10 kitchens, 10 bathrooms. 10 min from Universidad Peruana Unión (UPeU). Direct sale by the owner. Ideal lodging, Airbnb or student rental.",

    // Hero
    hero_badge: "Direct Sale — No Middlemen",
    hero_headline: "Your Oasis in Chaclacayo",
    hero_subheadline: "Multi-unit property · 330 m² · 15 bedrooms · 10 min from UPeU",
    hero_subline: "Sold directly by the owner · 40 min from Lima · Ideal for lodging, Airbnb or student rental",
    hero_cta_contact: "Contact Carlos",
    hero_cta_gallery: "View gallery ↓",
    hero_trust_1: "✓ Verified owner",
    hero_trust_2: "✓ All documents in order",
    hero_trust_3: "✓ Viewings by appointment",
    hero_scroll: "SCROLL",

    // Value Prop
    value_kicker: "The essentials",
    value_title: "Why choose this property",
    value_1_title: "10 min from UPeU",
    value_1_desc: "Universidad Peruana Unión — active Adventist university community year-round",
    value_2_title: "Multi-unit, ready to rent",
    value_2_desc: "15 bedrooms, 10 kitchens, 10 bathrooms · ideal for lodging, Airbnb or student rental",
    value_3_title: "Direct owner contact",
    value_3_desc: "No middlemen, no commissions — Carlos handles everything personally",
    value_4_title: "Warm climate year-round",
    value_4_desc: "40 min from Lima · temperate valley · sunshine even in winter",

    // Gallery
    gallery_kicker: "The property",
    gallery_title: "Discover your next home",
    gallery_video_title: "Video Tour",

    // Lifestyle
    lifestyle_kicker: "The lifestyle",
    lifestyle_title: "A day in Chaclacayo",
    lifestyle_intro: "We don't just sell a house. We sell a temperate valley, a clean sky and the sound of the river in the background.",
    life_1_time: "06:30",
    life_1_desc: "Sun rises warmer than in Lima",
    life_2_time: "09:00",
    life_2_desc: "Clean air, no traffic, no noise",
    life_3_time: "13:00",
    life_3_desc: "Country restaurants minutes away",
    life_4_time: "16:00",
    life_4_desc: "The Rímac river and hills, your backyard",
    life_5_time: "19:00",
    life_5_desc: "The sky lights up every single day",
    life_6_time: "21:00",
    life_6_desc: "Clear skies far from the city",

    // Details
    details_kicker: "The property in numbers",
    details_title: "Property details",
    spec_total_area: "Total area",
    spec_total_value: "330 m²",
    spec_bedrooms: "Bedrooms",
    spec_bed_value: "15",
    spec_baths: "Bathrooms",
    spec_bath_value: "10",
    spec_kitchens: "Kitchens",
    spec_kitchen_value: "10",
    spec_patios: "Patios",
    spec_patios_value: "3",
    spec_rooftop: "Rooftop",
    spec_rooftop_value: "1 large rooftop",
    spec_year: "Year built",
    spec_year_value: "Constantly remodeled",
    spec_price: "Price",
    spec_price_value: "$350,000 USD (Lot value)",
    services_title: "Included services",
    service_water: "💧 Running water",
    service_power: "⚡ Electricity",
    service_fiber: "📡 Fiber internet",
    service_sewer: "🚰 Sewage",
    service_green: "🌳 Green areas",
    service_fruit: "🍋 Fruit trees",
    service_cistern: "🛢️ Cistern",
    service_security: "🛡️ Security",
    legal_title: "Legal documentation",
    legal_1: "✓ Property title",
    legal_2: "✓ Property tax up to date",
    legal_3: "✓ No liens",
    legal_4: "✓ Registered in SUNARP",

    // Location
    location_kicker: "Where it is",
    location_title: "Location & surroundings",
    address_sub: "Chaclacayo · Lima · Peru · Direct access from Carretera Central highway",
    location_directions: "🧭 Get directions",
    distances_title: "Key distances",
    dist_1: "Jorge Chávez Airport",
    dist_2: "Lima downtown",
    dist_3: "Carretera Central",
    dist_4: "Universidad Peruana Unión",
    dist_5: "Chaclacayo Hospital",
    dist_6: "Good Hope Clinic",
    dist_7: "Plaza Vea / Market",
    dist_8: "La Granja Azul",
    dist_9: "Huampaní Resort",
    dist_10: "Chosica",
    dist_11: "Rímac River",
    poi_title: "Nearby points of interest",
    poi_edu: "Education",
    poi_edu_3: "Adventist Private School · ~5 min",
    poi_edu_4: "Multiple public and private schools",
    poi_health: "Health",
    poi_health_2: "Public Health Center (MINSA) · ~5 min",
    poi_health_4: "24h pharmacies in the district",
    poi_shop: "Shopping & Services",
    poi_shop_2: "Chaclacayo Central Market · ~8 min",
    poi_shop_3: "Banks: BCP, Interbank, BBVA",
    poi_shop_4: "Gyms, hair salons, laundries",
    poi_food: "Dining",
    poi_food_2: "El Rancho (BBQ) · nearby",
    poi_food_3: "Country restaurants with pool",
    poi_food_4: "Local cafés and bakeries",
    poi_nature: "Nature & Recreation",
    poi_nature_1: "Rímac River (walks) · <1 km",
    poi_nature_2: "Chaclacayo hills (light hiking)",
    poi_nature_4: "Main square and green areas",
    poi_connect: "Connectivity",
    poi_connect_1: "Carretera Central · direct access",
    poi_connect_2: "Frequent bus & shared van lines",
    poi_connect_3: "Taxi / Uber / InDriver services",
    poi_connect_4: "Jorge Chávez Airport · ~60 min",
    advantages_title: "Area advantages",
    adv_1: "40 min from downtown Lima via the Carretera Central",
    adv_2: "Warm tropical climate year-round (even in winter)",
    adv_3: "Ideal for health and wellness (allergies, seniors)",
    adv_4: "Surrounded by nature, the Rímac river and hills",
    adv_5: "Established area in sustained growth",
    adv_6: "Water, electricity, fiber internet available",
    adv_7: "Established and secure cooperative community",
    adv_8: "Close to universities and hospitals",

    // UPeU featured block
    upeu_badge: "10 minutes away · unique edge",
    upeu_title: "Universidad Peruana Unión (UPeU)",
    upeu_sub: "The most important Adventist university in South America. An active university community year-round just a short drive away — students, faculty, visiting families and academic events drive constant demand for lodging and rentals.",
    upeu_s1: "825+ Google reviews",
    upeu_s2: "Founded",
    upeu_s3: "From the property",
    upeu_s4: "Adventist universities in LatAm",
    upeu_why: "Why it matters: with 15 bedrooms, 10 kitchens and 10 bathrooms, this property is ideal as student housing, a guesthouse or a multi-unit rental. The UPeU + Adventist community is stable, recurring and high-retention.",
    upeu_link: "View UPeU on Google Maps ↗",

    // Investment — multi-unit / student housing
    investment_kicker: "Why invest here",
    investment_title: "Investment & potential",
    investment_intro: "An already-built multi-unit property, 10 minutes from the largest Adventist university in South America. The numbers add up.",
    inv_b1: "Independent units",
    inv_b2: "Rentable bedrooms",
    inv_b3: "To UPeU",
    inv_b4: "PEN · EUR · BTC accepted",
    roi_title: "Calculate your potential return",
    roi_lead: "Student housing or short-rental model. Adjust the values to your strategy and see the annual potential.",
    roi_rate: "Rent per bedroom / month (USD)",
    roi_occ: "Average occupancy (%)",
    roi_months: "Bedrooms rented",
    roi_price: "Property price (USD)",
    roi_r1: "Estimated annual income",
    roi_r2: "Annual gross ROI",
    roi_r3: "Payback (years)",
    roi_note: "* Reference calculation. UPeU and Adventist community demand keeps occupancy high during the academic cycle. Talk to me for real numbers and current operations.",
    payment_title: "Payment options",
    pay_1: "💵 Cash (USD / PEN / EUR)",
    pay_2: "🏦 Bank financing",
    pay_3: "📋 Direct installments (negotiable)",
    pay_4: "₿ Crypto (BTC / USDT)",

    // Owner
    owner_kicker: "A personal note",
    owner_title: "Letter from the owner",
    owner_p1: "\"I'm Carlos Carpio. This property has been part of my life.\"",
    owner_p2: "Today I'm selling it directly, with no middlemen, because I believe in speaking face to face with whoever will be its next owner.",
    owner_p3: "Ask anything. Visit at your own pace. Make the informed decision a purchase of this size deserves. I'll reply to you personally.",

    // Testimonials
    testimonials_kicker: "Trust",
    testimonials_title: "What people say after visiting",
    stat_1: "Average response time",
    stat_2: "Verified documents",
    stat_3: "Middlemen or commissions",
    t1_quote: "\"What I value most is talking directly to the owner. No agency pressure, no hidden agendas. He showed me everything and answered every question calmly.\"",
    t1_role: "Interested visitor · Lima",
    t2_quote: "\"Chaclacayo is what Lima isn't: clean sky, warm air, restaurants minutes away. The property delivers what the page promises.\"",
    t2_role: "Investor · Miami",
    t3_quote: "\"We were looking for a retirement home and here we found climate, calm and connection. Carlos handled every detail.\"",
    t3_role: "Couple · Europe",

    // FAQ
    faq_kicker: "Frequently asked questions",
    faq_title: "We answer your doubts before you ask",
    faq_q0a: "Can the property be operated as lodging or a guesthouse?",
    faq_a0a: "Yes. With 15 bedrooms, 10 kitchens and 10 bathrooms, it's designed for multi-unit use. It's ideal for student housing, a guesthouse, seasonal rentals (Airbnb) or shared living — all 10 minutes from UPeU.",
    faq_q0b: "How close is it really to UPeU and why does that matter?",
    faq_a0b: "About 10 minutes by car via the Carretera Central. Universidad Peruana Unión is the largest Adventist university in South America (founded 1919, 4.5★ on Google) and drives constant demand for lodging: students, faculty, visiting parents, academic events, and the Adventist community that prefers to stay near campus.",
    faq_q1: "Why is it sold directly without an agency?",
    faq_a1: "Because we want transparency and direct contact. Without middlemen, the buyer talks to the owner, knows the real story of the property and saves commissions that in Peru are usually between 3% and 5%.",
    faq_q2: "Is the property documentation in order?",
    faq_a2: "Yes. Property title, taxes up to date, no liens, registered in SUNARP. All documentation is provided for legal review before any commitment.",
    faq_q3: "Do you accept payment in USD, PEN or EUR?",
    faq_a3: "Yes. We accept USD, PEN and EUR. We also evaluate direct installments and bank financing with BCP, Interbank and BBVA.",
    faq_q4: "Can I schedule a visit? How?",
    faq_a4: "Yes, by appointment on weekends or weekdays. Email or WhatsApp me and we'll schedule. The property is at Cooperativa Alfonso Cobián, Mz B Lt 25, Chaclacayo.",
    faq_q5: "Is financing available?",
    faq_a5: "Yes. We work with the main Peruvian banks for mortgage credit. We also evaluate direct installment payment, depending on the buyer's profile.",
    faq_q6: "What services are included? (electricity, water, internet)",
    faq_a6: "Running water, electricity, sewage and fiber-optic internet. The cooperative has green areas, security and full services.",
    faq_q7: "Is Chaclacayo safe?",
    faq_a7: "Chaclacayo is one of the calmest districts in East Lima. Cooperativa Alfonso Cobián is a consolidated neighborhood with surveillance and an established community.",
    faq_q8: "I'm a foreigner, can I buy in Peru?",
    faq_a8: "Yes. Peruvian law allows foreigners to acquire real estate. You only need a passport and foreigner's ID or tax ID. We guide you through the entire notarial process.",
    faq_q9: "What's the final price? Is it negotiable?",
    faq_a9: "The price is discussed directly, transparently and case by case, according to the payment method. Contact me and we'll see real numbers.",
    faq_q10: "When can it be handed over?",
    faq_a10: "The property is available for immediate handover after signing the deed and public scripture.",

    // Lead Magnet
    lm_kicker: "Free download",
    lm_title: "The complete property dossier",
    lm_sub: "Floor plan, high-res photos, legal documentation and investment data in a print-ready, share-ready PDF.",
    lm_ph_name: "Name",
    lm_cta: "Send me the dossier",
    lm_success: "Done! We'll send you the dossier shortly.",

    // Contact
    contact_kicker: "Talk to the owner",
    contact_title: "Contact us directly",
    contact_intro: "For more information or to schedule a visit, contact me directly. I reply personally.",
    contact_info_title: "Carlos Carpio",
    contact_info_sub: "Owner · Direct service, no middlemen",
    contact_response: "Reply in less than 24h",
    contact_cta_email: "📧 Send email",
    contact_cta_wa: "💬 WhatsApp",
    form_name: "Name",
    form_phone: "Phone",
    form_email: "Email",
    form_date: "When would you like to visit",
    form_message: "Message",
    form_message_ph: "Tell me what interests you about the property...",
    form_err_name: "Please enter your name",
    form_err_email: "Invalid email",
    form_submit: "Send message to Carlos",
    form_success: "Thank you, Carlos will get in touch with you soon.",
    form_error: "There was a problem sending the message. Try direct email instead.",

    // Closing
    closing_kicker: "A decision worth talking through",
    closing_title: "Unique opportunity in Chaclacayo",
    closing_text: "Properties with these features and potential don't come along often. Let's talk today.",
    closing_cta_1: "Contact Carlos now",
    closing_cta_2: "💬 WhatsApp",

    // Footer
    footer_tagline: "Sold directly by the owner. No middlemen. No commissions.",
    footer_explore: "Explore",
    footer_contact: "Contact",
    footer_legal: "© 2026 Carlos Carpio · All rights reserved",
    footer_disclaimer: "Reference price · Sale formalized before public notary."
  }
};

let currentLang = 'es';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-content]').forEach(el => {
    const key = el.getAttribute('data-i18n-content');
    if (translations[lang][key] !== undefined) {
      el.setAttribute('content', translations[lang][key]);
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key] !== undefined) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  document.documentElement.lang = lang;

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.textContent = lang === 'es' ? 'EN | ES' : 'ES | EN';
  }

  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang');
  // Por defecto siempre será español ('es') si no hay una preferencia guardada
  const initialLang = savedLang || 'es';

  setLanguage(initialLang);

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'es' ? 'en' : 'es');
    });
  }
});
