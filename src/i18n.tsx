import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en' | 'es';

type Translations = {
  [key in Language]: {
    nav: {
      home: string;
      about: string;
      schedule: string;
      ministries: string;
      messages: string;
      donations: string;
      contact: string;
    };
    hero: {
      welcome: string;
      headline: string;
      verse: string;
      verseRef: string;
      primaryBtn: string;
      secondaryBtn: string;
    };
    about: {
      title: string;
      subtitle: string;
      whoWeAre: { title: string; text: string };
      history: { title: string; text: string };
      missionVision: { 
        title: string; 
        missionTitle: string; 
        missionText: string;
        visionTitle: string;
        visionText: string;
      };
      leadership: {
        title: string;
        roles: { pres: string; aux: string; leader: string; };
      }
    };
    schedule: {
      title: string;
      learnMore: string;
    };
    ministries: {
      title: string;
      subtitle: string;
      discover: string;
      moreInfo: string;
      memberPhoto: string;
      memberName: string;
      list: {
        kids: {
          name: string;
          details: {
            title: string;
            paragraphs: string[];
            membersTitle: string;
          };
        };
        worship: {
          name: string;
          details: {
            title: string;
            paragraphs: string[];
            membersTitle: string;
          };
        };
        communication: {
          name: string;
          details: {
            title: string;
            paragraphs: string[];
            membersTitle: string;
          };
        };
      };
    };
    messages: {
      title: string;
      followInsta: string;
      list: {
        msg1: {
          title: string;
          date: string;
          preacher: string;
        };
      };
    };
    donations: {
      title: string;
      text: string;
      copyPix: string;
      copied: string;
      instructionsTitle: string;
      instructionsText: string;
    };
    contact: {
      title: string;
      talkToUs: string;
      followUs: string;
    };
    cta: {
      title: string;
      subtitle: string;
      btn1: string;
      btn2: string;
    };
    footer: {
      rights: string;
      madeWith: string;
    };
  };
};

const translations: Translations = {
  pt: {
    nav: { home: "Início", about: "A Igreja", schedule: "Programação", ministries: "Ministérios", messages: "Mensagens", donations: "Dízimos & Ofertas", contact: "Contato" },
    hero: { welcome: "SEJA BEM-VINDO", headline: "Uma igreja para viver a fé, encontrar propósito e caminhar em comunhão.", verse: "\"Eu e a minha casa serviremos ao Senhor.\"", verseRef: "Josué 24:15", primaryBtn: "QUERO CONHECER A IGREJA", secondaryBtn: "VER NOSSA PROGRAMAÇÃO" },
    about: { title: "A Igreja", subtitle: "Um lugar para pertencer, servir e crescer na presença de Deus.", whoWeAre: { title: "Quem Somos", text: "Somos uma comunidade de fé apaixonada por Jesus, dedicada a viver o Evangelho de forma genuína e transformadora." }, history: { title: "Nossa História", text: "Fundada com o propósito de ser luz na cidade, nossa igreja tem construído um legado de amor, serviço e adoração a Deus ao longo dos anos." }, missionVision: { title: "Missão e Visão", missionTitle: "Missão:", missionText: "Anunciar o Evangelho, amar pessoas e formar discípulos.", visionTitle: "Visão:", visionText: "Ser uma igreja relevante, acolhedora e comprometida com o propósito de Deus." }, leadership: { title: "Liderança", roles: { pres: "Pastor Presidente", aux: "Pastor Auxiliar", leader: "Líder" } } },
    schedule: { title: "Nossa Programação", learnMore: "Saiba mais" },
    ministries: { 
      title: "Nossos Ministérios", 
      subtitle: "Há um lugar para você servir, crescer e fazer parte.", 
      discover: "Conheça",
      moreInfo: "Mais informações sobre este ministério estarão disponíveis em breve.",
      memberPhoto: "Foto 3x4",
      memberName: "Nome do Membro",
      list: {
        kids: {
          name: "Ministério Infantil",
          details: {
            title: "Ensinar para transformar, cuidar para aproximar e conduzir cada criança a Jesus.",
            paragraphs: [
              "O Ministério Infantil tem a missão de ensinar a Palavra de Deus de forma simples, alegre e significativa, ajudando as crianças a conhecerem o amor de Jesus e a desenvolverem uma fé desde os primeiros anos.",
              "Por meio de histórias bíblicas, músicas, brincadeiras, atividades e momentos de comunhão, criamos um ambiente seguro e acolhedor onde cada criança pode aprender, crescer e descobrir o propósito de Deus para sua vida.",
              "Nossa missão é plantar hoje a Palavra de Deus em pequenos corações que poderão transformar o mundo amanhã."
            ],
            membersTitle: "Membros do Ministério Infantil"
          }
        },
        worship: {
          name: "Ministério de Louvor",
          details: {
            title: "Adorar para exaltar a Deus, tocar corações e conduzir vidas à Sua presença.",
            paragraphs: [
              "O Ministério de Louvor existe para conduzir a igreja em momentos de adoração, comunhão e entrega a Deus, utilizando a música como instrumento para proclamar Sua grandeza e anunciar Sua Palavra.",
              "Através do canto, dos instrumentos e da dedicação de cada integrante, buscamos servir à igreja com excelência, compromisso e, acima de tudo, um coração verdadeiramente voltado para Deus.",
              "Nossa missão é adorar a Deus e conduzir pessoas a uma experiência genuína com Sua presença."
            ],
            membersTitle: "Membros do Ministério de Louvor"
          }
        },
        communication: {
          name: "Ministério de Comunicação",
          details: {
            title: "Comunicar para conectar, inspirar e alcançar vidas.",
            paragraphs: [
              "O Ministério de Comunicação existe para levar a mensagem da igreja além das quatro paredes, utilizando criatividade, tecnologia e comunicação para anunciar o Evangelho e compartilhar tudo aquilo que Deus está realizando em nossa comunidade.",
              "Através de fotografia, vídeos, transmissões, redes sociais, design e mídias digitais, trabalhamos para informar, aproximar pessoas e contribuir para que a mensagem de Cristo alcance cada vez mais vidas.",
              "Nossa missão é simples: comunicar com excelência aquilo que Deus está fazendo."
            ],
            membersTitle: "Membros do Ministério de Comunicação"
          }
        }
      }
    },
    messages: { 
      title: "Mensagens que Transformam", 
      followInsta: "SIGA NO INSTAGRAM",
      list: {
        msg1: {
          title: "Saiba se você tem fé em Deus ou está com incredulidade",
          date: "Momento com Deus",
          preacher: "Palavra de Vida"
        }
      }
    },
    donations: { title: "Dízimos & Ofertas", text: "Sua contribuição faz parte daquilo que Deus realiza através desta igreja.", copyPix: "COPIAR CHAVE PIX", copied: "Chave Pix copiada!", instructionsTitle: "Orientações", instructionsText: "Utilize a chave Pix acima para realizar sua contribuição de forma rápida e segura. Deus abençoe sua vida!" },
    contact: { title: "Entre em Contato", talkToUs: "FALE CONOSCO", followUs: "SIGA-NOS" },
    cta: { title: "Você é bem-vindo aqui.", subtitle: "Venha nos conhecer e faça parte da nossa comunidade.", btn1: "QUERO CONHECER A IGREJA", btn2: "FALAR PELO WHATSAPP" },
    footer: { rights: "Todos os direitos reservados.", madeWith: "Feito com fé, propósito e excelência." }
  },
  en: {
    nav: { home: "Home", about: "About Us", schedule: "Schedule", ministries: "Ministries", messages: "Messages", donations: "Tithes & Offerings", contact: "Contact" },
    hero: { welcome: "WELCOME", headline: "A church to live faith, find purpose, and walk in communion.", verse: "\"As for me and my house, we will serve the Lord.\"", verseRef: "Joshua 24:15", primaryBtn: "I WANT TO VISIT", secondaryBtn: "SEE OUR SCHEDULE" },
    about: { title: "Our Church", subtitle: "A place to belong, serve, and grow in God's presence.", whoWeAre: { title: "Who We Are", text: "We are a faith community passionate about Jesus, dedicated to living the Gospel genuinely." }, history: { title: "Our History", text: "Founded with the purpose of being a light in the city, our church has built a legacy of love, service, and worship." }, missionVision: { title: "Mission & Vision", missionTitle: "Mission:", missionText: "Proclaim the Gospel, love people, and make disciples.", visionTitle: "Vision:", visionText: "To be a relevant, welcoming church committed to God's purpose." }, leadership: { title: "Leadership", roles: { pres: "Senior Pastor", aux: "Associate Pastor", leader: "Leader" } } },
    schedule: { title: "Our Schedule", learnMore: "Learn more" },
    ministries: { 
      title: "Our Ministries", 
      subtitle: "There is a place for you to serve, grow, and belong.", 
      discover: "Discover",
      moreInfo: "More information about this ministry will be available soon.",
      memberPhoto: "ID Photo",
      memberName: "Member Name",
      list: {
        kids: {
          name: "Children's Ministry",
          details: {
            title: "Teach to transform, care to draw near, and lead every child to Jesus.",
            paragraphs: [
              "The Children's Ministry is on a mission to teach the Word of God simply, joyfully, and meaningfully, helping children know Jesus' love and develop faith from their earliest years.",
              "Through Bible stories, songs, games, activities, and fellowship, we create a safe and welcoming environment where every child can learn, grow, and discover God's purpose for their life.",
              "Our mission is to plant the Word of God today in little hearts that could transform the world tomorrow."
            ],
            membersTitle: "Children's Ministry Members"
          }
        },
        worship: {
          name: "Worship Ministry",
          details: {
            title: "Worship to exalt God, touch hearts, and lead lives to His presence.",
            paragraphs: [
              "The Worship Ministry exists to lead the church in moments of worship, communion, and surrender to God, using music as an instrument to proclaim His greatness and announce His Word.",
              "Through singing, instruments, and the dedication of each member, we seek to serve the church with excellence, commitment, and above all, a heart truly turned to God.",
              "Our mission is to worship God and lead people to a genuine experience with His presence."
            ],
            membersTitle: "Worship Ministry Members"
          }
        },
        communication: {
          name: "Communication Ministry",
          details: {
            title: "Communicate to connect, inspire, and reach lives.",
            paragraphs: [
              "The Communication Ministry exists to take the church's message beyond the four walls, using creativity, technology, and communication to announce the Gospel and share everything God is doing in our community.",
              "Through photography, videos, broadcasts, social media, design, and digital media, we work to inform, bring people together, and help Christ's message reach more and more lives.",
              "Our mission is simple: communicate with excellence what God is doing."
            ],
            membersTitle: "Communication Ministry Members"
          }
        }
      }
    },
    messages: { 
      title: "Transforming Messages", 
      followInsta: "FOLLOW ON INSTAGRAM",
      list: {
        msg1: {
          title: "Find out if you have faith in God or are in unbelief",
          date: "Moment with God",
          preacher: "Word of Life"
        }
      }
    },
    donations: { title: "Tithes & Offerings", text: "Your contribution is part of what God is doing through this church.", copyPix: "COPY PIX KEY", copied: "Pix Key copied!", instructionsTitle: "Instructions", instructionsText: "Use the Pix key above to make your contribution quickly and securely. God bless you!" },
    contact: { title: "Get in Touch", talkToUs: "TALK TO US", followUs: "FOLLOW US" },
    cta: { title: "You are welcome here.", subtitle: "Come visit us and be part of our community.", btn1: "I WANT TO VISIT", btn2: "TALK ON WHATSAPP" },
    footer: { rights: "All rights reserved.", madeWith: "Made with faith, purpose, and excellence." }
  },
  es: {
    nav: { home: "Inicio", about: "La Iglesia", schedule: "Programación", ministries: "Ministerios", messages: "Mensajes", donations: "Diezmos y Ofrendas", contact: "Contacto" },
    hero: { welcome: "BIENVENIDO", headline: "Una iglesia para vivir la fe, encontrar propósito y caminar en comunión.", verse: "\"Yo y mi casa serviremos a Jehová.\"", verseRef: "Josué 24:15", primaryBtn: "QUIERO VISITAR", secondaryBtn: "VER PROGRAMACIÓN" },
    about: { title: "La Iglesia", subtitle: "Un lugar para pertenecer, servir y crecer en la presencia de Dios.", whoWeAre: { title: "Quiénes Somos", text: "Somos una comunidad de fe apasionada por Jesús, dedicada a vivir el Evangelio de forma genuina." }, history: { title: "Nuestra Historia", text: "Fundada con el propósito de ser luz en la ciudad, nuestra iglesia ha construido un legado de amor, servicio y adoración." }, missionVision: { title: "Misión y Visión", missionTitle: "Misión:", missionText: "Anunciar el Evangelio, amar a las personas y hacer discípulos.", visionTitle: "Visión:", visionText: "Ser una iglesia relevante, acogedora y comprometida con el propósito de Dios." }, leadership: { title: "Liderazgo", roles: { pres: "Pastor Principal", aux: "Pastor Asociado", leader: "Líder" } } },
    schedule: { title: "Nuestra Programación", learnMore: "Saber más" },
    ministries: { 
      title: "Nuestros Ministerios", 
      subtitle: "Hay un lugar para que sirvas, crezcas y seas parte.", 
      discover: "Conoce",
      moreInfo: "Más información sobre este ministerio estará disponible pronto.",
      memberPhoto: "Foto de perfil",
      memberName: "Nombre del Miembro",
      list: {
        kids: {
          name: "Ministerio Infantil",
          details: {
            title: "Enseñar para transformar, cuidar para acercar y guiar a cada niño a Jesús.",
            paragraphs: [
              "El Ministerio Infantil tiene la misión de enseñar la Palabra de Dios de forma sencilla, alegre y significativa, ayudando a los niños a conocer el amor de Jesús y desarrollar una fe desde sus primeros años.",
              "A través de historias bíblicas, canciones, juegos, actividades y momentos de comunión, creamos un ambiente seguro y acogedor donde cada niño puede aprender, crecer y descubrir el propósito de Dios para su vida.",
              "Nuestra misión es plantar hoy la Palabra de Dios en corazoncitos que podrán transformar el mundo mañana."
            ],
            membersTitle: "Miembros del Ministerio Infantil"
          }
        },
        worship: {
          name: "Ministerio de Alabanza",
          details: {
            title: "Adorar para exaltar a Dios, tocar corazones y llevar vidas a Su presencia.",
            paragraphs: [
              "El Ministerio de Alabanza existe para guiar a la iglesia en momentos de adoración, comunión y entrega a Dios, utilizando la música como instrumento para proclamar Su grandeza y anunciar Su Palabra.",
              "A través del canto, los instrumentos y la dedicación de cada integrante, buscamos servir a la iglesia con excelencia, compromiso y, sobre todo, un corazón verdaderamente vuelto hacia Dios.",
              "Nuestra misión es adorar a Dios y llevar a las personas a una experiencia genuina con Su presencia."
            ],
            membersTitle: "Miembros del Ministerio de Alabanza"
          }
        },
        communication: {
          name: "Ministerio de Comunicación",
          details: {
            title: "Comunicar para conectar, inspirar y alcanzar vidas.",
            paragraphs: [
              "El Ministerio de Comunicación existe para llevar el mensaje de la iglesia más allá de las cuatro paredes, utilizando la creatividad, la tecnología y la comunicación para anunciar el Evangelio y compartir todo lo que Dios está haciendo en nuestra comunidad.",
              "A través de fotografías, videos, transmisiones, redes sociales, diseño y medios digitales, trabajamos para informar, acercar personas y contribuir a que el mensaje de Cristo alcance cada vez a más vidas.",
              "Nuestra misión es simple: comunicar con excelencia lo que Dios está haciendo."
            ],
            membersTitle: "Miembros del Ministerio de Comunicación"
          }
        }
      }
    },
    messages: { 
      title: "Mensajes que Transforman", 
      followInsta: "SÍGUENOS EN INSTAGRAM",
      list: {
        msg1: {
          title: "Descubre si tienes fe en Dios o estás en incredulidad",
          date: "Momento con Dios",
          preacher: "Palabra de Vida"
        }
      }
    },
    donations: { title: "Diezmos y Ofrendas", text: "Tu contribución es parte de lo que Dios hace a través de esta iglesia.", copyPix: "COPIAR CLAVE PIX", copied: "¡Clave copiada!", instructionsTitle: "Instrucciones", instructionsText: "Usa la clave Pix de arriba para realizar tu contribución de forma rápida y segura. ¡Dios te bendiga!" },
    contact: { title: "Contáctanos", talkToUs: "HABLA CON NOSOTROS", followUs: "SÍGUENOS" },
    cta: { title: "Eres bienvenido aquí.", subtitle: "Ven a conocernos y sé parte de nuestra comunidad.", btn1: "QUIERO VISITAR", btn2: "HABLAR POR WHATSAPP" },
    footer: { rights: "Todos los derechos reservados.", madeWith: "Hecho con fe, propósito y excelencia." }
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations['pt'];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
