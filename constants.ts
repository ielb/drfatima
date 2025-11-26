import { TranslationData, GalleryItem } from './types';

export const DOCTOR_NAME = "Docteur Fatima zahra Abouliatim";
export const TAGLINE = "Dermatologie Interventionnelle | Médecine Esthétique & Anti-âge | Lasers Médicaux";

export const COORDINATES = {
  lat: 35.7531819,
  lng: -5.7997443
};

export const CONTACT_INFO = {
  address: "P4602, Tanger 90060, Morocco (Rond point Dar Tounsi, lot Nahda 5)",
  phone1: "+212 696-370264",
  phone2: "+212 531 04 55 69",
  mapUrl: `https://www.google.com/maps/search/?api=1&query=${COORDINATES.lat},${COORDINATES.lng}`
};

// Mock Data for Gallery - Using Unsplash placeholders
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    category: 'anti_age',
    title: 'Rajeunissement Facial',
    beforeUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600&h=600&sat=-50', // Desaturated for "before" effect
    afterUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600&h=600'
  },
  {
    id: '2',
    category: 'acne',
    title: 'Traitement Cicatrices',
    beforeUrl: 'https://images.unsplash.com/photo-1552699609-8cf59176f778?auto=format&fit=crop&q=80&w=600&h=600&blur=2',
    afterUrl: 'https://images.unsplash.com/photo-1552699609-8cf59176f778?auto=format&fit=crop&q=80&w=600&h=600'
  },
  {
    id: '3',
    category: 'hair',
    title: 'Mesothérapie Capillaire',
    beforeUrl: 'https://images.unsplash.com/photo-1585579247656-3a55e975a6c9?auto=format&fit=crop&q=80&w=600&h=600&sat=-40',
    afterUrl: 'https://images.unsplash.com/photo-1585579247656-3a55e975a6c9?auto=format&fit=crop&q=80&w=600&h=600'
  },
  {
    id: '4',
    category: 'laser',
    title: 'Détatouage Laser',
    beforeUrl: 'https://images.unsplash.com/photo-1560963689-0933ccf61545?auto=format&fit=crop&q=80&w=600&h=600&sat=-20',
    afterUrl: 'https://images.unsplash.com/photo-1560963689-0933ccf61545?auto=format&fit=crop&q=80&w=600&h=600&brightness=1.1'
  },
  {
    id: '5',
    category: 'anti_age',
    title: 'Injections & Volume',
    beforeUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600&h=600&sat=-30',
    afterUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600&h=600'
  },
  {
    id: '6',
    category: 'acne',
    title: 'Peeling Chimique',
    beforeUrl: 'https://images.unsplash.com/photo-1616790876844-97c0c6057364?auto=format&fit=crop&q=80&w=600&h=600&contrast=1.2',
    afterUrl: 'https://images.unsplash.com/photo-1616790876844-97c0c6057364?auto=format&fit=crop&q=80&w=600&h=600'
  }
];

export const TRANSLATIONS: Record<'fr' | 'ar', TranslationData> = {
  fr: {
    nav: {
      home: "Accueil",
      services: "Expertise",
      gallery: "Galerie",
      about: "Le Docteur",
      contact: "Contact",
      book: "Rendez-vous"
    },
    hero: {
      subtitle: "Expertise médicale de pointe au cœur de Tanger",
      title: "Révélez Votre Éclat Naturel",
      cta: "Prendre Rendez-vous"
    },
    about: {
      title: "Rencontrez le Dr. Abouliatim",
      subtitle: "Dermatologue & Spécialiste Esthétique",
      bio: "Le Dr. Fatima zahra Abouliatim est une référence en dermatologie et médecine esthétique à Tanger. Alliant rigueur scientifique et vision artistique, elle met son expertise au service de votre peau. Diplômée et constamment formée aux dernières innovations, elle privilégie une approche éthique et personnalisée pour chaque patient.",
      philosophy_title: "Notre Philosophie",
      philosophy: "\"Sublimer sans transformer.\" Nous croyons en une beauté naturelle et durable. Chaque traitement est conçu sur-mesure pour respecter l'harmonie de votre visage et la santé de votre peau, en évitant toute standardisation.",
      technology_title: "Technologie Avancée",
      technology: "Le cabinet est doté d'un plateau technique de pointe (Lasers Médicaux, appareils de diagnostic cutané, dispositifs d'injection) garantissant une sécurité optimale et des résultats probants dans un environnement stérile et luxueux.",
      qualifications: ["Doctorat en Médecine", "Spécialiste en Dermatologie", "Expert en Lasers Médicaux"]
    },
    services: {
      title: "Nos Soins & Expertises",
      items: [
        { 
          id: '1', 
          title: "Dermatologie Interventionnelle", 
          description: "Traitement des pathologies cutanées complexes.",
          imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
        },
        { 
          id: '2', 
          title: "Médecine Esthétique & Anti-âge", 
          description: "Rajeunissement naturel et prévention.",
          imageUrl: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80"
        },
        { 
          id: '3', 
          title: "Lasers Médicaux", 
          description: "Technologies avancées pour la peau.",
          imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
        },
        { 
          id: '4', 
          title: "PRP (Plasma Riche en Plaquettes)", 
          description: "Régénération cellulaire capillaire et cutanée.",
          imageUrl: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=800&q=80"
        },
        { 
          id: '5', 
          title: "Mésothérapie", 
          description: "Hydratation profonde et éclat.",
          imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80"
        },
        { 
          id: '6', 
          title: "Peelings Chimiques", 
          description: "Rénovation de la texture de la peau.",
          imageUrl: "https://images.unsplash.com/photo-1556228720-1957be83f707?auto=format&fit=crop&w=800&q=80"
        },
        { 
          id: '7', 
          title: "Comblement & Botox", 
          description: "Correction des rides et restauration des volumes.",
          imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
        },
        { 
          id: '8', 
          title: "Traitement Cicatrices & Acné", 
          description: "Solutions pour une peau lisse.",
          imageUrl: "https://images.unsplash.com/photo-1552699609-8cf59176f778?auto=format&fit=crop&w=800&q=80"
        },
        { 
          id: '9', 
          title: "Détatouage", 
          description: "Effacement sûr et efficace.",
          imageUrl: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&w=800&q=80"
        },
      ]
    },
    gallery: {
      title: "Résultats Patients",
      subtitle: "L'art de la transformation naturelle",
      filters: {
        all: "Tous",
        anti_age: "Anti-Âge",
        acne: "Acné & Cicatrices",
        hair: "Cheveux",
        laser: "Laser"
      },
      labels: {
        before: "Avant",
        after: "Après"
      }
    },
    trust: {
      rating: "4.7/5 Note Google",
      review_count: "Avis Patients",
      quote: "\"Le Dr. Abouliatim est décrite comme bienveillante, attentive et professionnelle, prenant le temps d'expliquer clairement les traitements.\""
    },
    info: {
      title: "Informations Pratiques",
      address_label: "Adresse",
      hours_label: "Horaires d'ouverture",
      phone_label: "Téléphone",
      get_directions: "Obtenir l'itinéraire",
      mon_fri: "Lun - Ven",
      sat: "Sam",
      sun: "Dim",
      closed: "Fermé"
    },
    footer: {
      rights: "Tous droits réservés."
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      services: "خدماتنا",
      gallery: "المعرض",
      about: "الدكتورة",
      contact: "اتصل بنا",
      book: "حجز موعد"
    },
    hero: {
      subtitle: "خبرة طبية متطورة في قلب طنجة",
      title: "اكتشفي إشراقتك الطبيعية",
      cta: "احجز موعداً"
    },
    about: {
      title: "تعرف على الدكتورة أبواليتيم",
      subtitle: "أخصائية الأمراض الجلدية والتجميل",
      bio: "الدكتورة فاطمة الزهراء أبواليتيم مرجع في طب الأمراض الجلدية والتجميل في طنجة. تجمع بين الدقة العلمية والرؤية الفنية لتضع خبرتها في خدمة بشرتك. بصفتها طبيبة مؤهلة ومواكبة لأحدث الابتكارات، فهي تعطي الأولوية لنهج أخلاقي وشخصي لكل مريض.",
      philosophy_title: "فلسفتنا",
      philosophy: "\"التحسين دون تغيير الملامح\". نحن نؤمن بالجمال الطبيعي والمستدام. تم تصميم كل علاج خصيصًا لاحترام تناسق وجهك وصحة بشرتك، مع تجنب أي تنميط.",
      technology_title: "تكنولوجيا متقدمة",
      technology: "العيادة مجهزة بأحدث المنصات التقنية (ليزر طبي، أجهزة تشخيص البشرة، أدوات الحقن) مما يضمن أقصى درجات الأمان ونتائج مثبتة في بيئة معقمة وفاخرة.",
      qualifications: ["دكتوراه في الطب", "أخصائية في الأمراض الجلدية", "خبيرة في الليزر الطبي"]
    },
    services: {
      title: "العلاجات والخبرات",
      items: [
        { 
          id: '1', 
          title: "الأمراض الجلدية التداخلية", 
          description: "علاج الأمراض الجلدية المعقدة.",
          imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
        },
        { 
          id: '2', 
          title: "الطب التجميلي ومكافحة الشيخوخة", 
          description: "تجديد الشباب والوقاية الطبيعية.",
          imageUrl: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80"
        },
        { 
          id: '3', 
          title: "الليزر الطبي", 
          description: "تقنيات متقدمة للبشرة.",
          imageUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
        },
        { 
          id: '4', 
          title: "PRP (البلازما الغنية بالصفائح)", 
          description: "تجديد الخلايا للشعر والبشرة.",
          imageUrl: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=800&q=80"
        },
        { 
          id: '5', 
          title: "الميزوثيرابي", 
          description: "ترطيب عميق ونضارة.",
          imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80"
        },
        { 
          id: '6', 
          title: "التقشير الكيميائي", 
          description: "تجديد ملمس البشرة.",
          imageUrl: "https://images.unsplash.com/photo-1556228720-1957be83f707?auto=format&fit=crop&w=800&q=80"
        },
        { 
          id: '7', 
          title: "الفيلر والبوتوكس", 
          description: "تصحيح التجاعيد واستعادة الحجم.",
          imageUrl: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
        },
        { 
          id: '8', 
          title: "علاج حب الشباب والندبات", 
          description: "حلول لبشرة ناعمة.",
          imageUrl: "https://images.unsplash.com/photo-1552699609-8cf59176f778?auto=format&fit=crop&w=800&q=80"
        },
        { 
          id: '9', 
          title: "إزالة الوشم", 
          description: "إزالة آمنة وفعالة.",
          imageUrl: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&w=800&q=80"
        },
      ]
    },
    gallery: {
      title: "نتائج المرضى",
      subtitle: "فن التحول الطبيعي",
      filters: {
        all: "الكل",
        anti_age: "مكافحة الشيخوخة",
        acne: "حب الشباب",
        hair: "الشعر",
        laser: "ليزر"
      },
      labels: {
        before: "قبل",
        after: "بعد"
      }
    },
    trust: {
      rating: "4.7/5 تقييم جوجل",
      review_count: "آراء المرضى",
      quote: "\"يصف المرضى الدكتورة أبواليتيم بأنها لطيفة، منتبهة، ومهنية، وتأخذ الوقت لشرح العلاجات بوضوح.\""
    },
    info: {
      title: "معلومات عملية",
      address_label: "العنوان",
      hours_label: "ساعات العمل",
      phone_label: "الهاتف",
      get_directions: "احصل على الاتجاهات",
      mon_fri: "الاثنين - الجمعة",
      sat: "السبت",
      sun: "الأحد",
      closed: "مغلق"
    },
    footer: {
      rights: "جميع الحقوق محفوظة."
    }
  }
};