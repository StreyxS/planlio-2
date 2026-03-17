// Mock data types
export interface Post {
  id: string
  date: string
  platform: 'instagram' | 'facebook' | 'youtube' | 'tiktok' | 'linkedin'
  content: string
  image?: string
  schedule_time?: string
  post_type: string
  recommended_time?: string
  status: 'draft' | 'scheduled' | 'published'
}

export interface ContentPlan {
  id: string
  user_id: string
  name: string
  description: string
  month: string
  posts: Post[]
  created_at: string
  updated_at: string
}

// Platform configurations
export const PLATFORM_CONFIG = {
  instagram: {
    label: 'Instagram',
    color: '#E1306C',
    enabled: true,
    postTypes: ['Foto', 'Karusel', 'Příběh', 'Reel'],
    recommendedTimes: ['08:00', '12:00', '18:00', '20:00'],
  },
  facebook: {
    label: 'Facebook',
    color: '#1877F2',
    enabled: true,
    postTypes: ['Foto', 'Video', 'Článek', 'Odkaz'],
    recommendedTimes: ['09:00', '13:00', '19:00', '21:00'],
  },
  youtube: {
    label: 'YouTube',
    color: '#FF0000',
    enabled: true,
    postTypes: ['Video', 'Komunita', 'Zkrácené video'],
    recommendedTimes: ['10:00', '14:00', '18:00', '20:00'],
  },
  tiktok: {
    label: 'TikTok',
    color: '#000000',
    enabled: false,
    postTypes: ['Video'],
    recommendedTimes: ['17:00', '19:00', '21:00', '23:00'],
  },
  linkedin: {
    label: 'LinkedIn',
    color: '#0077B5',
    enabled: false,
    postTypes: ['Článek', 'Foto', 'Video'],
    recommendedTimes: ['08:00', '12:00', '17:00'],
  },
}

// Generate mock content ideas
export const CONTENT_IDEAS = [
  'Tipy pro sociální media',
  'Behind the scenes',
  'Otázka pro komunitu',
  'Inspirační citát',
  'Produktová ukázka',
  'Recenze nebo doporučení',
  'Edukační obsah',
  'Zábavný obsah',
  'Průzkum nebo anketa',
  'Spolupráce nebo partnerství',
  'Novinky a aktualizace',
  'Interaktivní výzva',
]

export const generateContentPlan = (month: string) => {
  const daysInMonth = new Date(
    parseInt(month.split('-')[0]),
    parseInt(month.split('-')[1]),
    0
  ).getDate()

  const posts: Post[] = []
  const platforms: Array<'instagram' | 'facebook' | 'youtube'> = ['instagram', 'facebook', 'youtube']

  for (let day = 1; day <= daysInMonth; day++) {
    if (Math.random() > 0.5) {
      const platform = platforms[Math.floor(Math.random() * platforms.length)]
      const config = PLATFORM_CONFIG[platform]
      const idea = CONTENT_IDEAS[Math.floor(Math.random() * CONTENT_IDEAS.length)]
      const postType = config.postTypes[Math.floor(Math.random() * config.postTypes.length)]
      const recommendedTime = config.recommendedTimes[Math.floor(Math.random() * config.recommendedTimes.length)]

      posts.push({
        id: `${day}-${Math.random()}`,
        date: `${month}-${String(day).padStart(2, '0')}`,
        platform,
        content: `${idea}\n\n#marketing #sociálnímédia`,
        image: undefined,
        schedule_time: recommendedTime,
        post_type: postType,
        recommended_time: recommendedTime,
        status: 'draft',
      })
    }
  }

  return posts
}
