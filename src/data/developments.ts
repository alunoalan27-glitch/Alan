import { Development } from '../types';

export const DEVELOPMENTS_DATA: Development[] = [
  {
    id: 'mooca',
    name: 'Reserva Mooca Privilège',
    tagline: 'A perfeita união entre a tradição clássica e o requinte contemporâneo',
    neighborhood: 'Mooca',
    city: 'São Paulo - SP',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdHT2Rxi9-wMt1I0KGm_dBxXF3qFUvabUtHIMO6UvvtHcK6Pw/viewform?usp=dialog',
    status: 'Lançamento',
    badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
    priceStartingFrom: 'Consulte condições de Lançamento',
    estimatedDelivery: 'Dezembro / 2027',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Fachada imponente com design biofílico e acabamentos nobres',
        category: 'fachada'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
        caption: 'Living integrado com varanda gourmet e churrasqueira a carvão',
        category: 'interiores'
      },
      {
        url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
        caption: 'Complexo aquático com piscina aquecida e raia de 25m',
        category: 'lazer'
      },
      {
        url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
        caption: 'Rooftop Lounge com vista 360° para o skyline paulistano',
        category: 'lazer'
      },
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        caption: 'Espaço Fitness equipado com aparelhos Life Fitness e sala de pilates',
        category: 'lazer'
      }
    ],
    overview: {
      areaRange: '58m² a 89m² e Duplex de 132m²',
      bedrooms: '2 e 3 Dormitórios',
      suites: '1 e 2 Suítes',
      bathrooms: '2 a 3 Banheiros',
      parkingSpots: '1 a 2 Vagas Cobertas + Depósito',
      towers: 'Torre Única Exclusiva',
      floors: '24 Pavimentos',
      unitsTotal: '96 Apartamentos'
    },
    description: 'Localizado no coração pulsante e tradicional da Mooca, o Reserva Mooca Privilège foi concebido para quem não abre mão de viver cercado pelas melhores cantinas, ruas arborizadas e com fácil acesso ao centro e à Paulista. Unidades espaçosas com isolamento acústico superior, ampla varanda gourmet e lazer de resort completo para toda a família.',
    highlights: [
      'Varanda Gourmet ampla com churrasqueira entregue',
      'Piscina adulto com raia de 25m e solarium tropical',
      'Rooftop Gourmet com vista panorâmica para o bairro',
      'Espaço Coworking climatizado e isolado acusticamente',
      'Gerador full atendendo áreas comuns e pontos nos apartamentos',
      'Fechadura eletrônica e biometria em todas as portas sociais'
    ],
    amenities: [
      { name: 'Piscina com Raia 25m', category: 'lazer', icon: 'Waves', description: 'Aquecida com deck molhado e bangalôs' },
      { name: 'Fitness Center 24h', category: 'bem-estar', icon: 'Dumbbell', description: 'Equipamentos profissionais e sala funcional' },
      { name: 'Espaço Gourmet & Pizza Bar', category: 'lazer', icon: 'UtensilsCrossed', description: 'Forno de pizza a lenha e churrasqueira' },
      { name: 'Coworking & Sala de Reunião', category: 'conveniencia', icon: 'Briefcase', description: 'Wi-Fi ultra veloz e cabines de call' },
      { name: 'Pet Place & Pet Care', category: 'conveniencia', icon: 'HeartHandshake', description: 'Área externa gramada e espaço de banho' },
      { name: 'Brinquedoteca & Playground', category: 'lazer', icon: 'Smile', description: 'Espaço lúdico e seguro para as crianças' },
      { name: 'Quadra Poliesportiva', category: 'lazer', icon: 'Trophy', description: 'Piso amortecedor e iluminação em LED' },
      { name: 'Spa com Sauna Seca e Úmida', category: 'bem-estar', icon: 'Sparkles', description: 'Salas de descanso e hidro massagem' }
    ],
    floorPlans: [
      {
        id: 'mooca-58',
        name: 'Planta Tipo 58m²',
        size: '58 m²',
        bedrooms: '2 Dormitórios',
        suites: '1 Suíte',
        parking: '1 Vaga Coberta',
        description: 'Distribuição inteligente com living ampliado, cozinha americana com ilha e varanda grill integrada à sala.',
        highlights: ['Cozinha integrada', 'Varanda Grill', 'Persianas de enrolar 100% blackout'],
        image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 'mooca-89',
        name: 'Planta Família 89m²',
        size: '89 m²',
        bedrooms: '3 Dormitórios',
        suites: '2 Suítes',
        parking: '2 Vagas Determinadas',
        description: 'Ampla varanda gourmet com churrasqueira a carvão, lavabo social, suíte master com closet e hall privativo.',
        highlights: ['Churrasqueira a carvão', 'Suíte Master com Closet', 'Lavabo social', 'Depósito privativo'],
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 'mooca-132',
        name: 'Penthouse Duplex 132m²',
        size: '132 m²',
        bedrooms: '3 Suítes',
        suites: '3 Suítes',
        parking: '2 Vagas + Depósito',
        description: 'Exclusividade no topo da Mooca com terraço descoberto privativo, spa com jacuzzi e living com pé direito duplo.',
        highlights: ['Pé-direito duplo no living', 'Spa privativo no terraço', '3 Suítes plenas', 'Vista 360°'],
        image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    location: {
      address: 'Rua Juventus / Próximo à Av. Paes de Barros - Mooca, São Paulo - SP',
      neighborhoodDescription: 'A Mooca é um dos bairros mais charmosos e acolhedores de São Paulo. Reúne tradição gastronômica, segurança, ruas tranquilas e completa infraestrutura de serviços, hospitais e colégios renomados.',
      pointsOfInterest: [
        { title: 'Metrô Juventus-Mooca / Bresser-Mooca', time: '5 min', type: 'metro' },
        { title: 'Parque Sabesp Mooca', time: '4 min', type: 'parque' },
        { title: 'Clube Atlético Juventus', time: '3 min', type: 'shopping' },
        { title: 'Tradicionais Cantinas & Pizzarias', time: '2 min a pé', type: 'gastronomia' },
        { title: 'Hospital São Cristóvão e Villa-Lobos', time: '6 min', type: 'escola' }
      ],
      mapQuery: 'Mooca, São Paulo - SP'
    },
    differentials: [
      'Infraestrutura pronta para ar-condicionado em todos os dormitórios e living',
      'Tomadas USB nas cabeceiras e fechaduras digitais instaladas',
      'Tratamento acústico de piso e tubulações para máximo silêncio',
      'Ponto de recarga para carros elétricos com medição individualizada',
      'Áreas comuns entregues totalmente decoradas e equipadas sem custo adicional'
    ],
    themeColor: {
      primary: 'bg-amber-700',
      secondary: 'bg-amber-900',
      accent: 'text-amber-700',
      lightBg: 'bg-amber-50/70',
      border: 'border-amber-200',
      textAccent: 'text-amber-800'
    }
  },
  {
    id: 'tatuape',
    name: 'Icon Tatuapé Signature Residences',
    tagline: 'O ápice da sofisticação e arquitetura autoral na região mais nobre da Zona Leste',
    neighborhood: 'Tatuapé / Anália Franco',
    city: 'São Paulo - SP',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfFtrtqUGHP-drEwjEY0CuhOGLtUVDGilPa48baQQi2JC9Dww/viewform?usp=dialog',
    status: 'Lançamento',
    badgeColor: 'bg-emerald-100 text-emerald-950 border-emerald-300',
    priceStartingFrom: 'Valores e Condições Especiais de Lançamento',
    estimatedDelivery: 'Junho / 2028',
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
        caption: 'Design arquitetônico assinado com caixilhos do piso ao teto',
        category: 'fachada'
      },
      {
        url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
        caption: 'Amplo living com pé direito duplo e integração total com o terraço',
        category: 'interiores'
      },
      {
        url: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80',
        caption: 'Piscina aquecida coberta com raia de 25m e teto de vidro',
        category: 'lazer'
      },
      {
        url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
        caption: 'Wine Lounge e Adega climatizada com sommelier space',
        category: 'lazer'
      },
      {
        url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
        caption: 'Complexo de bem-estar com sala de massagem e hidro relaxante',
        category: 'lazer'
      }
    ],
    overview: {
      areaRange: '115m² a 168m² e Penthouses de 220m²',
      bedrooms: '3 e 4 Suítes',
      suites: '3 a 4 Suítes Plenas',
      bathrooms: '4 a 5 Banheiros',
      parkingSpots: '2 a 4 Vagas Determinadas + Depósito Privativo',
      towers: '2 Torres em Terreno de 6.800m²',
      floors: '28 Andares',
      unitsTotal: '112 Residências Exclusivas'
    },
    description: 'Desenvolvido para atender aos mais altos padrões de exigência, o Icon Tatuapé Signature é uma verdadeira obra-prima contemporânea a poucos minutos do Shopping Anália Franco e Parque CERET. Conta com elevador com biometria e hall social privativo, isolamento acústico de padrão internacional e acabamentos de altíssimo padrão.',
    highlights: [
      'Hall social privativo com biometria facial nos elevadores',
      'Quadra de Tênis oficial de saibro e Beach Tennis',
      'Complexo aquático com piscina aquecida coberta e piscina externa com borda infinita',
      'Wine Bar & Cave privativa para os moradores',
      'Infraestrutura para automação residencial completa (Lutron / Alexa)',
      '3 a 4 suítes plenas com closet walk-in na suíte master'
    ],
    amenities: [
      { name: 'Quadra de Tênis de Saibro', category: 'lazer', icon: 'Trophy', description: 'Oficial com iluminação profissional noturna' },
      { name: 'Quadra de Beach Tennis', category: 'lazer', icon: 'Sun', description: 'Areia tratada e deck de descanso' },
      { name: 'Piscina Coberta Aquecida', category: 'bem-estar', icon: 'Waves', description: 'Raia de 25m, sauna integrada e vestiários' },
      { name: 'Wine Lounge & Cave', category: 'lazer', icon: 'Wine', description: 'Ambiente climatizado para degustação exclusiva' },
      { name: 'Academia By Technogym', category: 'bem-estar', icon: 'Dumbbell', description: 'Aparelhos de última geração e personal zone' },
      { name: 'Spa de Luxo com Hidro', category: 'bem-estar', icon: 'Sparkles', description: 'Salas de massagem individual e casal' },
      { name: 'Salão de Festas Nobre', category: 'lazer', icon: 'Sparkle', description: 'Capacidade para 120 convidados com foyer' },
      { name: 'Delivery Space Climatizado', category: 'conveniencia', icon: 'Package', description: 'Armários refrigerados para compras online' }
    ],
    floorPlans: [
      {
        id: 'tatuape-115',
        name: 'Residência Signature 115m²',
        size: '115 m²',
        bedrooms: '3 Suítes',
        suites: '3 Suítes',
        parking: '2 Vagas + Depósito',
        description: 'Planta moderna com hall privativo, lavabo, terraço gourmet integrado e ampla suíte principal com espaço para closet.',
        highlights: ['Elevador e Hall privativo', 'Varanda com Churrasqueira a carvão', 'Área de serviço separada'],
        image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 'tatuape-168',
        name: 'Residência Magnifique 168m²',
        size: '168 m²',
        bedrooms: '4 Suítes',
        suites: '4 Suítes',
        parking: '3 Vagas Determinadas + Depósito',
        description: 'O auge do luxo com living em conceito aberto para 3 ambientes, varanda gourmet de 28m², suíte master com banheira de imersão e cuba dupla.',
        highlights: ['Suíte Master com Cuba e Chuveiro Duplos', 'Varanda de 28m²', 'Living 3 ambientes', 'Hall Social Privativo'],
        image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 'tatuape-220',
        name: 'Penthouse Icon 220m²',
        size: '220 m²',
        bedrooms: '4 Suítes Master',
        suites: '4 Suítes',
        parking: '4 Vagas + Box Privativo',
        description: 'Cobertura duplex cinematográfica com piscina privativa no deck suspenso, espaço gourmet privativo e vista panorâmica espetacular.',
        highlights: ['Piscina privativa aquecida', '4 Vagas demarcadas', 'Pé direito duplo', 'Terraço suspenso'],
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    location: {
      address: 'Próximo ao Shopping Anália Franco & Parque CERET - Tatuapé, São Paulo - SP',
      neighborhoodDescription: 'O Tatuapé e Jardim Anália Franco representam o maior polo econômico, gastronômico e de sofisticação da Zona Leste. Com o Parque CERET, restaurantes renomados, colégios de ponta e shoppings de luxo.',
      pointsOfInterest: [
        { title: 'Shopping Anália Franco', time: '3 min', type: 'shopping' },
        { title: 'Parque Esportivo dos Trabalhadores (CERET)', time: '4 min', type: 'parque' },
        { title: 'Metrô Tatuapé / Estação Carrão', time: '6 min', type: 'metro' },
        { title: 'Gastronomia da Rua Itapura e Azevedo Soares', time: '3 min', type: 'gastronomia' },
        { title: 'Hospital São Luiz Anália Franco', time: '5 min', type: 'escola' }
      ],
      mapQuery: 'Tatuape Anália Franco, São Paulo - SP'
    },
    differentials: [
      'Gerador full para 100% da área comum e privativa (incluindo ar-condicionado)',
      'Vidros com película de redução solar e alto isolamento termoacústico',
      'Portaria blindada com eclusa de segurança e reconhecimento facial',
      'Tomada de alta voltagem para carros elétricos em todas as vagas privativas',
      'Certificação internacional de sustentabilidade e eficiência energética (AQUA-HQE)'
    ],
    themeColor: {
      primary: 'bg-emerald-800',
      secondary: 'bg-emerald-950',
      accent: 'text-emerald-800',
      lightBg: 'bg-emerald-50/70',
      border: 'border-emerald-200',
      textAccent: 'text-emerald-850'
    }
  },
  {
    id: 'vila-ema',
    name: 'Origem Vila Ema Urban Living',
    tagline: 'Mobilidade inteligente, estilo de vida conectado e excelente potencial de valorização',
    neighborhood: 'Vila Ema / São Lucas',
    city: 'São Paulo - SP',
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdQAyronv1J2abaJmimgCgP94V2HC4jp0jr6OC28KqexjpTxw/viewform?usp=dialog',
    status: 'Lançamento',
    badgeColor: 'bg-indigo-100 text-indigo-950 border-indigo-300',
    priceStartingFrom: 'Entrada Facilitada e Condições de Lançamento',
    estimatedDelivery: 'Novembro / 2026',
    heroImage: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
        caption: 'Fachada contemporânea com brises móveis e paisagismo exuberante',
        category: 'fachada'
      },
      {
        url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
        caption: 'Ambientes funcionais e integrados com excelente luminosidade natural',
        category: 'interiores'
      },
      {
        url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
        caption: 'Rooftop Sky Pool com borda infinita e lounge pôr do sol',
        category: 'lazer'
      },
      {
        url: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=1200&q=80',
        caption: 'Coworking moderno com cabines acústicas e sala de podcast',
        category: 'lazer'
      },
      {
        url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
        caption: 'Espaço Gourmet e Bar de Jogos no 18º andar',
        category: 'lazer'
      }
    ],
    overview: {
      areaRange: '36m² a 64m² (Studios e 2 Dormitórios)',
      bedrooms: 'Studio, 1 e 2 Dormitórios',
      suites: 'Opções com 1 Suíte',
      bathrooms: '1 a 2 Banheiros',
      parkingSpots: 'Opções com vaga coberta + bicicletário',
      towers: 'Torre Única com 20 Andares',
      floors: '20 Andares + Sky Lazer no Rooftop',
      unitsTotal: '140 Apartamentos Inteligentes'
    },
    description: 'O Origem Vila Ema foi planejado para quem busca praticidade, design arrojado e conexão rápida com todas as regiões da cidade. Apenas a 300 metros da Estação São Lucas (Linha 15-Prata com integração direta à Linha 2-Verde do Metrô Paulista). Perfeito tanto para moradia quanto para investidores que buscam rentabilidade com locação tradicional e short stay.',
    highlights: [
      'A apenas 300 metros da estação de metrô / monotrilho São Lucas',
      'Sky Pool e Lazer completo no topo do edifício com vista panorâmica',
      'Opções de plantas inteligentes com varanda integrada e bancada grill',
      'Espaço Minimarket e Lavanderia compartilhada OMO no condomínio',
      'Baixo custo condominial com gestão digital e placas solares',
      'Condições especiais com fluxo de obras super acessível'
    ],
    amenities: [
      { name: 'Sky Pool no Rooftop', category: 'lazer', icon: 'Waves', description: 'Piscina no 20º andar com deck solarium' },
      { name: 'Espaço Fitness & Cross', category: 'bem-estar', icon: 'Dumbbell', description: 'Equipamentos modernos e área externa funcional' },
      { name: 'Minimarket 24 horas', category: 'conveniencia', icon: 'ShoppingBag', description: 'Loja de conveniência autônoma no térreo' },
      { name: 'Lavanderia Coletiva OMO', category: 'conveniencia', icon: 'Sparkles', description: 'Máquinas profissionais com agendamento por app' },
      { name: 'Coworking com Podcast Room', category: 'conveniencia', icon: 'Mic', description: 'Estrutura completa para home office' },
      { name: 'Rooftop Bar & Grill', category: 'lazer', icon: 'Flame', description: 'Churrasqueira gourmet com vista para o pôr do sol' },
      { name: 'Bicicletário com Oficina', category: 'conveniencia', icon: 'Bike', description: 'Com compressor de ar e tomada para bikes elétricas' },
      { name: 'Espaço Pet & Agility', category: 'lazer', icon: 'HeartHandshake', description: 'Para os passeios e diversão do seu pet' }
    ],
    floorPlans: [
      {
        id: 'vila-ema-36',
        name: 'Studio Smart 36m²',
        size: '36 m²',
        bedrooms: 'Studio Integrado',
        suites: '1 Banheiro',
        parking: 'Bicicletário Privativo',
        description: 'Conceito aberto ultra funcional, bancada para home office, cozinha americana e varanda com vista aberta.',
        highlights: ['Ideal para investimento / Airbnb', 'Varanda integrada', 'Espaço para cama Queen e mesa de trabalho'],
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 'vila-ema-48',
        name: 'Compact Confort 48m²',
        size: '48 m²',
        bedrooms: '2 Dormitórios',
        suites: '1 Banheiro',
        parking: '1 Vaga de Garagem',
        description: 'Dois dormitórios confortáveis com sala em 2 ambientes, cozinha linear e varanda grill.',
        highlights: ['2 Dormitórios', 'Varanda Grill', 'Ponto para ar-condicionado nos 2 quartos'],
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1000&q=80'
      },
      {
        id: 'vila-ema-64',
        name: 'Family Garden 64m²',
        size: '64 m²',
        bedrooms: '2 Dormitórios',
        suites: '1 Suíte',
        parking: '1 Vaga Coberta',
        description: 'Planta ampla com suíte do casal, cozinha com ventilação natural, varanda gourmet com churrasqueira ecológica e lavabo.',
        highlights: ['1 Suíte Privativa', 'Varanda Gourmet Ampla', '1 Vaga Coberta Livre'],
        image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80'
      }
    ],
    location: {
      address: 'Avenida Vila Ema, altura da Estação São Lucas - Vila Ema, São Paulo - SP',
      neighborhoodDescription: 'A Vila Ema é um dos bairros de maior valorização da Zona Leste, com farto comércio, supermercados (Joanina, St. Marché, Hirota), bancos, farmácias e acesso imediato ao Metrô e às principais vias.',
      pointsOfInterest: [
        { title: 'Estação São Lucas (Monotrilho / Metrô Linha Verde)', time: '3 min a pé (300m)', type: 'metro' },
        { title: 'Supermercado Joanina / Hirota Food Express', time: '2 min a pé', type: 'shopping' },
        { title: 'Avenida Professor Luiz Ignácio Anhaia Mello', time: '1 min', type: 'metro' },
        { title: 'Parque Ecológico Vila Prudente', time: '6 min', type: 'parque' },
        { title: 'Shopping Central Plaza & Mooca Plaza', time: '10 min', type: 'shopping' }
      ],
      mapQuery: 'Vila Ema, São Paulo - SP'
    },
    differentials: [
      'A apenas 300 metros da Estação de Metrô: mobilidade total sem trânsito',
      'Fechaduras inteligentes com senha e cartão de aproximação nas portas',
      'Infraestrutura sustentável com reaproveitamento de água pluvial e energia solar nas áreas comuns',
      'Condomínio com lavanderia OMO e minimarket que reduzem os custos mensais',
      'Programa com facilidade de pagamento durante o período de obras'
    ],
    themeColor: {
      primary: 'bg-blue-800',
      secondary: 'bg-slate-900',
      accent: 'text-blue-700',
      lightBg: 'bg-blue-50/70',
      border: 'border-blue-200',
      textAccent: 'text-blue-800'
    }
  }
];

export const NEIGHBORHOOD_COMPARISONS = [
  {
    neighborhood: 'Mooca',
    leadTitle: 'Tradição, Gastronomia & Estilo de Vida Clássico',
    description: 'Ruas tranquilas, acolhedoras e repletas das melhores cantinas italianas, clubes tradicionais como o Juventus e fácil acesso ao centro financeiro.',
    idealFor: 'Famílias que buscam raízes, segurança, qualidade de vida e apartamentos espaçosos.',
    highlights: ['Tradição cultural ímpar', 'Gastronomia premiada', 'Fácil acesso à Av. Paulista e Centro']
  },
  {
    neighborhood: 'Tatuapé & Anália Franco',
    leadTitle: 'Sofisticação, Luxo & Polo Econômico',
    description: 'O epicentro de requinte da Zona Leste com shoppings de grife, Parque CERET, restaurantes estrelados e os edifícios mais luxuosos de São Paulo.',
    idealFor: 'Público de alto padrão que deseja amplas metragens, lazer de clube privativo e exclusividade.',
    highlights: ['Shopping Anália Franco & CERET', 'Polo corporativo e comercial', 'Imóveis de alta valorização']
  },
  {
    neighborhood: 'Vila Ema',
    leadTitle: 'Conectividade, Praticidade & Alta Rentabilidade',
    description: 'Bairro em plena expansão com conexão expressa ao Metrô Linha Verde, comércio completo a passos de casa e perfil jovem e moderno.',
    idealFor: 'Jovens casais, solteiros, investidores e quem prioriza mobilidade urbana rápida.',
    highlights: ['Estação São Lucas a 300m', 'Menor custo de entrada', 'Alta liquidez e demanda de locação']
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Como funciona o processo de cadastro de interesse?',
    answer: 'Ao clicar no botão de interesse de qualquer um dos 3 empreendimentos (Mooca, Tatuapé ou Vila Ema), você será direcionado ao formulário oficial exclusivo do projeto. Nossa equipe de especialistas entrará em contato para apresentar tabela de preços, plantas detalhadas e condições de lançamento.'
  },
  {
    question: 'Quais são as condições de pagamento e financiamento durante as obras?',
    answer: 'Durante a fase de obras, o pagamento é flexibilizado em parcelas mensais, intermediárias e ato de entrada facilitado. O saldo devedor restante só é financiado junto ao banco (Caixa, Itaú, Bradesco, Santander, etc.) no momento da entrega das chaves.'
  },
  {
    question: 'Posso visitar o decorado ou agendar uma reunião personalizada?',
    answer: 'Sim! Preenchendo o formulário do empreendimento desejado, você terá atendimento prioritário para agendar uma visita guiada ao stand de vendas com apartamento decorado ou solicitar uma apresentação virtual completa.'
  },
  {
    question: 'Os empreendimentos possuem garantia de entrega?',
    answer: 'Sim, todos os projetos são registrados sob regime de Patrimônio de Afetação, garantindo 100% de segurança jurídica, transparência financeira e pontualidade na entrega.'
  }
];
