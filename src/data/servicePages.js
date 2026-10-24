/**
 * Contenu des pages de service (une page = un service = une intention de recherche).
 * Chaque page a son propre <title>, sa description, son H1, son texte, sa FAQ.
 * `wa` = message WhatsApp pré-rempli propre à la page.
 */
export const SERVICE_PAGES = {
  /* ------------------------------------------------------------------ */
  airport: {
    fr: {
      seoTitle: 'Transfert aéroport Oran – Chauffeur privé | Benadda DreamCar',
      seoDesc:
        "Transfert privé depuis ou vers l’aéroport d’Oran Ahmed Ben Bella : accueil, suivi de vol et trajet direct vers votre hôtel. Réservation sur WhatsApp.",
      h1: 'Transfert aéroport à Oran avec chauffeur privé',
      lead: 'Atterrissez à Oran sans stress : votre chauffeur vous attend à l’aéroport Ahmed Ben Bella et vous conduit directement à votre hôtel, à votre domicile ou à votre rendez-vous — et inversement pour votre départ.',
      sections: [
        {
          h2: 'Un accueil pensé pour les arrivées',
          p: 'Nous suivons l’évolution de votre vol : si vous arrivez en avance ou en retard, votre chauffeur s’adapte. Vous n’avez pas à chercher un moyen de transport à la sortie du terminal : tout est organisé à l’avance et confirmé par message.',
        },
        {
          h2: 'Départs et arrivées, à toute heure',
          p: 'Nous assurons les transferts de jour comme de nuit, ce qui convient aux vols très tôt le matin ou tardifs. Pour un départ, indiquez-nous l’heure de votre vol et votre adresse de prise en charge : nous prévoyons le départ pour que vous arriviez à l’aéroport sereinement.',
        },
      ],
      included: [
        'Accueil à l’aéroport',
        'Suivi de votre vol',
        'Trajet direct vers votre destination',
        'Véhicule climatisé et confortable',
      ],
      faq: [
        {
          q: 'Comment réserver un transfert depuis l’aéroport d’Oran ?',
          a: 'Écrivez-nous sur WhatsApp avec votre date, l’heure, votre numéro de vol et votre destination. Nous confirmons votre réservation par message.',
        },
        {
          q: 'Que se passe-t-il si mon vol est en retard ?',
          a: 'Votre chauffeur est informé de l’évolution de votre vol et adapte son arrivée. Pensez simplement à nous communiquer votre numéro de vol.',
        },
        {
          q: 'Proposez-vous aussi le trajet vers l’aéroport au départ ?',
          a: 'Oui. Indiquez-nous l’heure de votre vol et votre adresse : nous organisons la prise en charge pour que vous arriviez à l’aéroport dans de bonnes conditions.',
        },
        {
          q: 'Quel est le tarif d’un transfert aéroport ?',
          a: 'Le tarif dépend de votre destination et de l’horaire. Demandez un devis sur WhatsApp : nous vous communiquons le prix avant la réservation.',
        },
      ],
      wa: 'Bonjour, je souhaite réserver un transfert aéroport à Oran.',
    },
    en: {
      seoTitle: 'Oran Airport Transfer – Private Chauffeur | Benadda DreamCar',
      seoDesc:
        'Private transfer to or from Oran Ahmed Ben Bella Airport: meet & greet, flight tracking and a direct ride to your hotel or home. Book on WhatsApp.',
      h1: 'Oran airport transfer with a private chauffeur',
      lead: 'Arrive in Oran without stress: your chauffeur meets you at Ahmed Ben Bella Airport and drives you straight to your hotel, home or meeting — and back again when you leave.',
      sections: [
        {
          h2: 'A welcome designed for arrivals',
          p: 'We follow your flight status, so if you land early or late your chauffeur adjusts. There is no need to look for transport outside the terminal: everything is arranged in advance and confirmed by message.',
        },
        {
          h2: 'Departures and arrivals, at any hour',
          p: 'We run transfers day and night, which suits early-morning and late-night flights. For a departure, tell us your flight time and pickup address and we plan the pickup so you reach the airport calmly.',
        },
      ],
      included: [
        'Meet & greet at the airport',
        'Flight tracking',
        'Direct ride to your destination',
        'Air-conditioned, comfortable vehicle',
      ],
      faq: [
        {
          q: 'How do I book an Oran airport transfer?',
          a: 'Message us on WhatsApp with your date, time, flight number and destination. We confirm your booking by message.',
        },
        {
          q: 'What if my flight is delayed?',
          a: 'Your chauffeur is kept informed of your flight status and adjusts the pickup. Just remember to send us your flight number.',
        },
        {
          q: 'Do you also drive me to the airport when I leave?',
          a: 'Yes. Tell us your flight time and your address, and we arrange the pickup so you arrive at the airport comfortably.',
        },
        {
          q: 'How much does an airport transfer cost?',
          a: 'The price depends on your destination and the time of day. Request a quote on WhatsApp and we will give you the price before you book.',
        },
      ],
      wa: 'Hello, I would like to book an airport transfer in Oran.',
    },
    ar: {
      seoTitle: 'التوصيل من وإلى مطار وهران – سائق خاص 24/7 | Benadda DreamCar',
      seoDesc:
        'توصيل خاص من وإلى مطار وهران أحمد بن بلة: استقبال في المطار، ومتابعة للرحلة، وتوصيل مباشر إلى فندقك أو منزلك. احجز عبر واتساب.',
      h1: 'التوصيل من وإلى مطار وهران مع سائق خاص',
      lead: 'صل إلى وهران دون أي توتر: يستقبلك سائقك في مطار أحمد بن بلة ويوصلك مباشرة إلى فندقك أو منزلك أو موعدك، وكذلك عند مغادرتك.',
      sections: [
        {
          h2: 'استقبال مصمم للقادمين',
          p: 'نتابع حالة رحلتك الجوية، فإذا وصلت مبكرًا أو متأخرًا يتكيف السائق مع ذلك. لا حاجة للبحث عن وسيلة نقل خارج المبنى، فكل شيء يُنظَّم مسبقًا ويُؤكَّد برسالة.',
        },
        {
          h2: 'للمغادرة والوصول في أي ساعة',
          p: 'نؤمّن التوصيل ليلًا ونهارًا، وهذا مناسب للرحلات المبكرة جدًا أو المتأخرة. عند المغادرة، أخبرنا بموعد رحلتك وعنوان الانطلاق، ونرتب وقت الانطلاق لتصل إلى المطار باطمئنان.',
        },
      ],
      included: ['استقبال في المطار', 'متابعة رحلتك الجوية', 'توصيل مباشر إلى وجهتك', 'سيارة مكيّفة ومريحة'],
      faq: [
        {
          q: 'كيف أحجز التوصيل من مطار وهران؟',
          a: 'راسلنا عبر واتساب مع ذكر التاريخ والوقت ورقم الرحلة والوجهة، وسنؤكد لك الحجز برسالة.',
        },
        {
          q: 'ماذا لو تأخرت رحلتي؟',
          a: 'يكون السائق على اطلاع بحالة رحلتك ويعدّل موعد استقبالك. فقط تذكّر أن ترسل لنا رقم الرحلة.',
        },
        {
          q: 'هل توفرون التوصيل إلى المطار عند المغادرة؟',
          a: 'نعم. أخبرنا بموعد رحلتك وعنوانك، وسنرتب الانطلاق لتصل إلى المطار براحة.',
        },
        {
          q: 'كم تكلفة التوصيل من وإلى المطار؟',
          a: 'يعتمد السعر على الوجهة ووقت الرحلة. اطلب عرض سعر عبر واتساب وسنخبرك بالسعر قبل الحجز.',
        },
      ],
      wa: 'مرحبًا، أرغب في حجز توصيل من/إلى مطار وهران.',
    },
  },

  /* ------------------------------------------------------------------ */
  hotel: {
    fr: {
      seoTitle: 'Transfert hôtel à Oran – Chauffeur privé | Benadda DreamCar',
      seoDesc:
        'Chauffeur privé pour vos trajets entre hôtels, aéroport, restaurants et centres d’affaires à Oran. Ponctuel, discret, 24h/24. Réservez sur WhatsApp.',
      h1: 'Transfert hôtel à Oran : un chauffeur privé, sans attente',
      lead: 'Vous séjournez à Oran ? Nous vous conduisons entre votre hôtel, l’aéroport, les restaurants, les centres d’affaires et les principaux lieux de la ville, à l’heure convenue.',
      sections: [
        {
          h2: 'Pour les voyageurs',
          p: 'Une course réservée à l’avance, un chauffeur ponctuel et un véhicule confortable : vous vous déplacez dans Oran sans chercher de transport ni vous soucier du retour.',
        },
        {
          h2: 'Pour les hôtels',
          p: 'Vous êtes un hôtel ? Nous proposons des transferts clients, un accueil VIP et des mises à disposition, avec un interlocuteur dédié pour organiser les déplacements de vos hôtes.',
        },
      ],
      included: [
        'Trajets entre hôtels, aéroport et restaurants',
        'Accueil VIP pour les hôtels partenaires',
        'Chauffeur ponctuel et discret',
        'Disponible 24h/24',
      ],
      faq: [
        {
          q: 'Pouvez-vous venir me chercher directement à mon hôtel ?',
          a: 'Oui. Indiquez-nous le nom de l’hôtel, l’heure souhaitée et votre destination : votre chauffeur vous prend en charge à l’heure convenue.',
        },
        {
          q: 'Les hôtels peuvent-ils devenir partenaires ?',
          a: 'Oui. Nous proposons aux hôtels des transferts clients, un accueil VIP, des transferts aéroport et des mises à disposition. Contactez-nous sur WhatsApp pour organiser un partenariat.',
        },
        {
          q: 'Puis-je réserver plusieurs trajets pendant mon séjour ?',
          a: 'Oui. Vous pouvez réserver chaque trajet à l’avance, ou demander un chauffeur à disposition à l’heure ou à la journée.',
        },
      ],
      wa: 'Bonjour, je souhaite réserver un transfert hôtel à Oran.',
    },
    en: {
      seoTitle: 'Hotel Transfers in Oran – Private Chauffeur | Benadda DreamCar',
      seoDesc:
        'Private chauffeur for rides between hotels, the airport, restaurants and business centres in Oran. Punctual, discreet, available 24/7. Book on WhatsApp.',
      h1: 'Hotel transfers in Oran: a private chauffeur, no waiting',
      lead: 'Staying in Oran? We drive you between your hotel, the airport, restaurants, business centres and the city’s main locations, right on time.',
      sections: [
        {
          h2: 'For travellers',
          p: 'A ride booked in advance, a punctual chauffeur and a comfortable vehicle: you get around Oran without hunting for transport or worrying about the way back.',
        },
        {
          h2: 'For hotels',
          p: 'Are you a hotel? We offer guest transfers, VIP welcome and chauffeur-at-disposal service, with a dedicated contact to organise your guests’ journeys.',
        },
      ],
      included: [
        'Rides between hotels, the airport and restaurants',
        'VIP welcome for partner hotels',
        'Punctual, discreet chauffeur',
        'Available 24/7',
      ],
      faq: [
        {
          q: 'Can you pick me up directly at my hotel?',
          a: 'Yes. Tell us the hotel name, the time you want and your destination, and your chauffeur collects you at the agreed time.',
        },
        {
          q: 'Can hotels become partners?',
          a: 'Yes. We offer hotels guest transfers, VIP welcome, airport transfers and chauffeur-at-disposal service. Contact us on WhatsApp to set up a partnership.',
        },
        {
          q: 'Can I book several rides during my stay?',
          a: 'Yes. You can book each ride in advance, or ask for a chauffeur at your disposal by the hour or by the day.',
        },
      ],
      wa: 'Hello, I would like to book a hotel transfer in Oran.',
    },
    ar: {
      seoTitle: 'التنقل بين الفنادق في وهران – سائق خاص | Benadda DreamCar',
      seoDesc:
        'سائق خاص للتنقل بين الفنادق والمطار والمطاعم ومراكز الأعمال في وهران. دقيق في المواعيد وكتوم ومتوفر 24/7. احجز عبر واتساب.',
      h1: 'التنقل بين الفنادق في وهران: سائق خاص دون انتظار',
      lead: 'هل تقيم في وهران؟ نوصلك بين فندقك والمطار والمطاعم ومراكز الأعمال وأبرز أماكن المدينة، في الموعد المتفق عليه.',
      sections: [
        {
          h2: 'للمسافرين',
          p: 'رحلة محجوزة مسبقًا، وسائق دقيق في مواعيده، وسيارة مريحة: تتنقل في وهران دون البحث عن وسيلة نقل ودون قلق بشأن العودة.',
        },
        {
          h2: 'للفنادق',
          p: 'هل أنتم فندق؟ نقدم توصيل النزلاء واستقبال VIP وخدمة سائق تحت الطلب، مع مسؤول اتصال مخصص لتنظيم تنقلات نزلائكم.',
        },
      ],
      included: [
        'التنقل بين الفنادق والمطار والمطاعم',
        'استقبال VIP للفنادق الشريكة',
        'سائق دقيق وكتوم',
        'متوفر 24/7',
      ],
      faq: [
        {
          q: 'هل يمكنكم استقبالي مباشرة من فندقي؟',
          a: 'نعم. أخبرنا باسم الفندق والوقت المطلوب ووجهتك، ويأتي سائقك في الموعد المتفق عليه.',
        },
        {
          q: 'هل يمكن للفنادق أن تصبح شريكة لكم؟',
          a: 'نعم. نقدم للفنادق توصيل النزلاء واستقبال VIP والتوصيل من وإلى المطار وخدمة سائق تحت الطلب. تواصل معنا عبر واتساب لترتيب الشراكة.',
        },
        {
          q: 'هل يمكنني حجز عدة رحلات خلال إقامتي؟',
          a: 'نعم. يمكنك حجز كل رحلة مسبقًا، أو طلب سائق تحت الطلب بالساعة أو باليوم.',
        },
      ],
      wa: 'مرحبًا، أرغب في حجز توصيل بين الفنادق في وهران.',
    },
  },

  /* ------------------------------------------------------------------ */
  business: {
    fr: {
      seoTitle: 'Chauffeur privé d’entreprise à Oran | Benadda DreamCar',
      seoDesc:
        'Déplacements professionnels à Oran : dirigeants, délégations, rendez-vous et événements. Chauffeur ponctuel et discret, 24h/24. Devis sur WhatsApp.',
      h1: 'Chauffeur privé pour vos déplacements professionnels à Oran',
      lead: 'Dirigeants, délégations, clients à accueillir : nous organisons vos déplacements d’affaires avec ponctualité et discrétion, pour que vous vous concentriez sur l’essentiel.',
      sections: [
        {
          h2: 'Un service pensé pour les professionnels',
          p: 'Rendez-vous d’affaires, accueil de clients à l’aéroport, transport de délégations ou événements professionnels : nous planifions chaque trajet avec précision et nous adaptons à votre programme.',
        },
        {
          h2: 'Un interlocuteur dédié',
          p: 'Les entreprises disposent d’un interlocuteur dédié pour organiser les déplacements de leurs collaborateurs et de leurs invités, selon leurs besoins.',
        },
      ],
      included: [
        'Déplacements de collaborateurs',
        'Accueil de clients et de partenaires',
        'Transport de délégations',
        'Événements professionnels',
      ],
      faq: [
        {
          q: 'Pouvez-vous accueillir un client à l’aéroport pour mon entreprise ?',
          a: 'Oui. Communiquez-nous le nom de la personne et son numéro de vol : le chauffeur l’accueille et la conduit à sa destination.',
        },
        {
          q: 'Proposez-vous un chauffeur pour la journée ?',
          a: 'Oui, un chauffeur peut rester à votre disposition à l’heure ou à la journée, selon votre programme.',
        },
        {
          q: 'Comment organiser les déplacements de plusieurs collaborateurs ?',
          a: 'Contactez-nous sur WhatsApp avec les dates, les horaires et les lieux : nous organisons l’ensemble et vous confirmons la réservation.',
        },
      ],
      wa: 'Bonjour, je souhaite organiser un chauffeur pour des déplacements professionnels à Oran.',
    },
    en: {
      seoTitle: 'Corporate Chauffeur in Oran | Benadda DreamCar',
      seoDesc:
        'Business travel in Oran: executives, delegations, meetings and events. Punctual, discreet chauffeur available 24/7. Request a quote on WhatsApp.',
      h1: 'Private chauffeur for business travel in Oran',
      lead: 'Executives, delegations, clients to welcome: we organise your business travel with punctuality and discretion, so you can focus on what matters.',
      sections: [
        {
          h2: 'A service designed for professionals',
          p: 'Business meetings, welcoming clients at the airport, delegation transport or corporate events: we plan each journey precisely and adapt to your schedule.',
        },
        {
          h2: 'A dedicated contact',
          p: 'Companies get a dedicated contact to organise travel for their employees and guests, according to their needs.',
        },
      ],
      included: [
        'Employee travel',
        'Welcoming clients and partners',
        'Delegation transport',
        'Corporate events',
      ],
      faq: [
        {
          q: 'Can you welcome a client at the airport for my company?',
          a: 'Yes. Send us the person’s name and flight number: the chauffeur welcomes them and drives them to their destination.',
        },
        {
          q: 'Do you offer a chauffeur for the whole day?',
          a: 'Yes, a chauffeur can stay at your disposal by the hour or by the day, depending on your schedule.',
        },
        {
          q: 'How do I organise travel for several colleagues?',
          a: 'Message us on WhatsApp with the dates, times and locations: we organise everything and confirm the booking.',
        },
      ],
      wa: 'Hello, I would like to arrange a chauffeur for business travel in Oran.',
    },
    ar: {
      seoTitle: 'سائق خاص للشركات في وهران – رحلات العمل | Benadda DreamCar',
      seoDesc:
        'رحلات العمل في وهران: المسؤولون والوفود والاجتماعات والفعاليات. سائق دقيق وكتوم متوفر 24/7. اطلب عرض سعر عبر واتساب.',
      h1: 'سائق خاص لرحلات العمل في وهران',
      lead: 'مسؤولون ووفود وعملاء يجب استقبالهم: ننظم تنقلاتكم المهنية بدقة وكتمان لتتفرغوا لما يهمكم.',
      sections: [
        {
          h2: 'خدمة مصممة للمهنيين',
          p: 'اجتماعات العمل واستقبال العملاء في المطار ونقل الوفود والفعاليات المهنية: نخطط كل رحلة بدقة ونتكيف مع برنامجكم.',
        },
        {
          h2: 'مسؤول اتصال مخصص',
          p: 'تحصل الشركات على مسؤول اتصال مخصص لتنظيم تنقلات الموظفين والضيوف حسب احتياجاتها.',
        },
      ],
      included: ['تنقلات الموظفين', 'استقبال العملاء والشركاء', 'نقل الوفود', 'الفعاليات المهنية'],
      faq: [
        {
          q: 'هل يمكنكم استقبال عميل في المطار نيابة عن شركتي؟',
          a: 'نعم. أرسلوا لنا اسم الشخص ورقم رحلته، فيستقبله السائق ويوصله إلى وجهته.',
        },
        {
          q: 'هل توفرون سائقًا ليوم كامل؟',
          a: 'نعم، يمكن أن يبقى السائق تحت تصرفكم بالساعة أو باليوم حسب برنامجكم.',
        },
        {
          q: 'كيف أنظم تنقلات عدة زملاء؟',
          a: 'راسلونا عبر واتساب مع التواريخ والأوقات والأماكن، وسننظم كل شيء ونؤكد لكم الحجز.',
        },
      ],
      wa: 'مرحبًا، أرغب في ترتيب سائق لرحلات عمل في وهران.',
    },
  },

  /* ------------------------------------------------------------------ */
  disposal: {
    fr: {
      seoTitle: 'Chauffeur à disposition à Oran | Benadda DreamCar',
      seoDesc:
        'Chauffeur à disposition à l’heure ou à la journée à Oran et au-delà : rendez-vous, visites, événements. Devis sur WhatsApp.',
      h1: 'Chauffeur à disposition à Oran, à l’heure ou à la journée',
      lead: 'Plusieurs rendez-vous, une journée de visites ou un événement : gardez un chauffeur à votre disposition et déplacez-vous en toute liberté, à Oran et au-delà.',
      sections: [
        {
          h2: 'La liberté d’un chauffeur rien que pour vous',
          p: 'Au lieu de réserver chaque trajet séparément, vous disposez d’un chauffeur et d’un véhicule pour la durée dont vous avez besoin. Vous définissez le programme, nous nous occupons de la conduite.',
        },
        {
          h2: 'Pour quelles occasions ?',
          p: 'Journées d’affaires, tourisme, événements, enchaînement de rendez-vous : la mise à disposition s’adapte à votre emploi du temps.',
        },
      ],
      included: [
        'Un chauffeur dédié pour la durée choisie',
        'À l’heure ou à la journée',
        'Trajets à Oran et au-delà',
        'Véhicule climatisé et confortable',
      ],
      faq: [
        {
          q: 'Quelle est la différence avec un simple transfert ?',
          a: 'Un transfert couvre un trajet précis, d’un point A à un point B. Avec la mise à disposition, le chauffeur reste avec vous pendant la durée choisie et enchaîne vos déplacements.',
        },
        {
          q: 'Puis-je sortir d’Oran avec le chauffeur ?',
          a: 'Oui, la mise à disposition peut inclure des déplacements hors d’Oran. Précisez votre programme lors de la demande de devis.',
        },
        {
          q: 'Comment obtenir un tarif ?',
          a: 'Envoyez-nous sur WhatsApp la date, la durée souhaitée et votre programme : nous vous communiquons un devis.',
        },
      ],
      wa: 'Bonjour, je souhaite un devis pour un chauffeur à disposition à Oran.',
    },
    en: {
      seoTitle: 'Chauffeur at Disposal in Oran | Benadda DreamCar',
      seoDesc:
        'A chauffeur at your disposal by the hour or day in Oran and beyond: meetings, sightseeing, events. Comfortable vehicle. Quote on WhatsApp.',
      h1: 'Chauffeur at your disposal in Oran, by the hour or by the day',
      lead: 'Several meetings, a day of sightseeing or an event: keep a chauffeur at your disposal and move freely around Oran and beyond.',
      sections: [
        {
          h2: 'The freedom of a chauffeur just for you',
          p: 'Instead of booking each ride separately, you have a chauffeur and a vehicle for as long as you need. You set the plan, we take care of the driving.',
        },
        {
          h2: 'For which occasions?',
          p: 'Business days, tourism, events or back-to-back meetings: chauffeur-at-disposal service adapts to your schedule.',
        },
      ],
      included: [
        'A dedicated chauffeur for the time you choose',
        'By the hour or by the day',
        'Trips in Oran and beyond',
        'Air-conditioned, comfortable vehicle',
      ],
      faq: [
        {
          q: 'How is this different from a simple transfer?',
          a: 'A transfer covers one specific ride, from point A to point B. With chauffeur at disposal, the driver stays with you for the time you choose and links your journeys together.',
        },
        {
          q: 'Can I leave Oran with the chauffeur?',
          a: 'Yes, the service can include trips outside Oran. Share your plan when you request a quote.',
        },
        {
          q: 'How do I get a price?',
          a: 'Send us the date, the duration you need and your plan on WhatsApp, and we will send you a quote.',
        },
      ],
      wa: 'Hello, I would like a quote for a chauffeur at my disposal in Oran.',
    },
    ar: {
      seoTitle: 'سائق تحت الطلب في وهران – بالساعة أو باليوم | Benadda DreamCar',
      seoDesc:
        'سائق تحت الطلب بالساعة أو باليوم في وهران وخارجها: اجتماعات وجولات وفعاليات. سيارة مريحة وسائق كتوم. عرض سعر عبر واتساب.',
      h1: 'سائق تحت الطلب في وهران بالساعة أو باليوم',
      lead: 'عدة مواعيد، أو يوم من الجولات، أو مناسبة خاصة: احتفظ بسائق تحت تصرفك وتنقل بحرية في وهران وخارجها.',
      sections: [
        {
          h2: 'حرية أن يكون لك سائق خاص',
          p: 'بدل حجز كل رحلة على حدة، يكون لديك سائق وسيارة طوال المدة التي تحتاجها. أنت تحدد البرنامج ونحن نتولى القيادة.',
        },
        {
          h2: 'لأي مناسبة؟',
          p: 'أيام العمل والسياحة والفعاليات والمواعيد المتتالية: خدمة السائق تحت الطلب تتكيف مع جدولك.',
        },
      ],
      included: [
        'سائق مخصص للمدة التي تختارها',
        'بالساعة أو باليوم',
        'رحلات داخل وهران وخارجها',
        'سيارة مكيّفة ومريحة',
      ],
      faq: [
        {
          q: 'ما الفرق بينها وبين التوصيل العادي؟',
          a: 'التوصيل يغطي رحلة محددة من نقطة إلى أخرى. أما مع السائق تحت الطلب فيبقى السائق معك طوال المدة التي تختارها وينقلك بين وجهاتك المتتالية.',
        },
        {
          q: 'هل يمكنني مغادرة وهران مع السائق؟',
          a: 'نعم، يمكن أن تشمل الخدمة رحلات خارج وهران. حدد برنامجك عند طلب عرض السعر.',
        },
        {
          q: 'كيف أحصل على السعر؟',
          a: 'أرسل لنا عبر واتساب التاريخ والمدة المطلوبة وبرنامجك، وسنرسل لك عرض سعر.',
        },
      ],
      wa: 'مرحبًا، أرغب في طلب سائق تحت الطلب في وهران.',
    },
  },

  /* ------------------------------------------------------------------ */
  outoftown: {
    fr: {
      seoTitle: 'Courses hors wilaya depuis Oran | Benadda DreamCar',
      seoDesc:
        'Voyagez depuis Oran vers d’autres villes d’Algérie avec un chauffeur privé : confort, ponctualité et trajet organisé à l’avance. Devis sur WhatsApp.',
      h1: 'Courses hors wilaya depuis Oran avec chauffeur privé',
      lead: 'Un rendez-vous à Tlemcen, un déplacement à Alger ou un week-end à Mostaganem ? Voyagez en tout confort avec un chauffeur privé, sans souci de conduite.',
      sections: [
        {
          h2: 'Les longs trajets sans la fatigue',
          p: 'Sur les trajets interurbains, le confort compte : véhicule climatisé, espace généreux pour les passagers et chauffeur professionnel. Profitez du trajet pour vous reposer ou travailler.',
        },
        {
          h2: 'Un trajet organisé à l’avance',
          p: 'Indiquez-nous votre ville de départ, votre destination, la date et l’heure. Nous confirmons les détails et le tarif avant le départ, pour que vous voyagiez sans surprise.',
        },
      ],
      included: [
        'Trajets vers d’autres wilayas',
        'Aller simple ou aller-retour sur demande',
        'Véhicule climatisé et confortable',
        'Chauffeur professionnel et ponctuel',
      ],
      faq: [
        {
          q: 'Vers quelles villes pouvez-vous m’emmener ?',
          a: 'Nous effectuons des trajets depuis Oran vers d’autres villes d’Algérie, selon votre besoin. Indiquez-nous votre destination sur WhatsApp pour confirmer la faisabilité et le tarif.',
        },
        {
          q: 'Puis-je faire un aller-retour dans la journée ?',
          a: 'Oui, selon la distance. Précisez vos horaires lors de la demande et nous vous confirmons l’organisation.',
        },
        {
          q: 'Comment réserver une course hors wilaya ?',
          a: 'Par WhatsApp : date, heure, lieu de prise en charge et destination.',
        },
      ],
      wa: 'Bonjour, je souhaite réserver une course depuis Oran vers une autre ville.',
    },
    en: {
      seoTitle: 'Out-of-Town Trips from Oran | Benadda DreamCar',
      seoDesc:
        'Travel from Oran to other cities in Algeria with a private chauffeur: comfort, punctuality and a ride arranged in advance. Quote on WhatsApp.',
      h1: 'Out-of-town trips from Oran with a private chauffeur',
      lead: 'A meeting in Tlemcen, a trip to Algiers or a weekend in Mostaganem? Travel in complete comfort with a private chauffeur, without worrying about the drive.',
      sections: [
        {
          h2: 'Long journeys without the fatigue',
          p: 'On intercity routes comfort matters: an air-conditioned vehicle, generous passenger space and a professional chauffeur. Use the ride to rest or to work.',
        },
        {
          h2: 'A journey arranged in advance',
          p: 'Tell us your departure city, destination, date and time. We confirm the details and the price before you leave, so you travel without surprises.',
        },
      ],
      included: [
        'Trips to other wilayas',
        'One-way or return on request',
        'Air-conditioned, comfortable vehicle',
        'Professional, punctual chauffeur',
      ],
      faq: [
        {
          q: 'Which cities can you take me to?',
          a: 'We run trips from Oran to other cities in Algeria, depending on your needs. Tell us your destination on WhatsApp to confirm feasibility and price.',
        },
        {
          q: 'Can I do a return trip in one day?',
          a: 'Yes, depending on the distance. Share your timings when you ask and we will confirm the arrangement.',
        },
        {
          q: 'How do I book an out-of-town trip?',
          a: 'On WhatsApp: date, time, pickup location and destination.',
        },
      ],
      wa: 'Hello, I would like to book a trip from Oran to another city.',
    },
    ar: {
      seoTitle: 'رحلات خارج وهران – سائق خاص بين المدن | Benadda DreamCar',
      seoDesc:
        'سافر من وهران إلى مدن جزائرية أخرى مع سائق خاص: راحة ودقة في المواعيد ورحلة منظمة مسبقًا. عرض سعر عبر واتساب.',
      h1: 'رحلات خارج الولاية انطلاقًا من وهران مع سائق خاص',
      lead: 'موعد في تلمسان، أو سفر إلى الجزائر العاصمة، أو عطلة نهاية أسبوع في مستغانم؟ سافر براحة تامة مع سائق خاص دون عناء القيادة.',
      sections: [
        {
          h2: 'مسافات طويلة دون تعب',
          p: 'في الرحلات بين المدن تهم الراحة: سيارة مكيّفة ومساحة واسعة للركاب وسائق محترف. استغل الطريق للراحة أو للعمل.',
        },
        {
          h2: 'رحلة منظمة مسبقًا',
          p: 'أخبرنا بمدينة الانطلاق والوجهة والتاريخ والوقت. نؤكد التفاصيل والسعر قبل الانطلاق لتسافر دون مفاجآت.',
        },
      ],
      included: [
        'رحلات نحو ولايات أخرى',
        'ذهاب فقط أو ذهاب وإياب عند الطلب',
        'سيارة مكيّفة ومريحة',
        'سائق محترف ودقيق في مواعيده',
      ],
      faq: [
        {
          q: 'إلى أي المدن يمكنكم نقلي؟',
          a: 'ننظم رحلات انطلاقًا من وهران نحو مدن جزائرية أخرى حسب حاجتك. أخبرنا بوجهتك عبر واتساب لنؤكد إمكانية الرحلة والسعر.',
        },
        {
          q: 'هل يمكنني القيام برحلة ذهاب وإياب في اليوم نفسه؟',
          a: 'نعم، حسب المسافة. حدد مواعيدك عند الطلب وسنؤكد لك التنظيم.',
        },
        {
          q: 'كيف أحجز رحلة خارج الولاية؟',
          a: 'عبر واتساب: التاريخ والوقت ومكان الانطلاق والوجهة.',
        },
      ],
      wa: 'مرحبًا، أرغب في حجز رحلة من وهران إلى مدينة أخرى.',
    },
  },
};

export function getServicePage(id, lang) {
  return SERVICE_PAGES[id]?.[lang] ?? SERVICE_PAGES[id]?.fr;
}
