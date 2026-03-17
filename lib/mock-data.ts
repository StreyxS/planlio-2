import { v4 as uuidv4 } from 'uuid'

export interface Post {
  id: string
  planId: string
  title: string
  content: string
  platform: 'instagram' | 'facebook' | 'youtube' | 'tiktok' | 'linkedin'
  scheduledTime: Date
  postType: string
  imageUrl?: string
  hashtags: string[]
}

export interface Plan {
  id: string
  userId: string
  name: string
  month: number
  year: number
  posts: Post[]
  createdAt: Date
  updatedAt: Date
}

const POST_TYPES = {
  instagram: ['Reel', 'Post', 'Story', 'Carousel'],
  facebook: ['Post', 'Video', 'Story', 'Event'],
  youtube: ['Short', 'Community Post', 'Premiere', 'Stream'],
  tiktok: ['Video', 'Duet', 'Stitch'],
  linkedin: ['Post', 'Article', 'Document'],
}

const SAMPLE_CONTENT = [
  'Nová nabídka je již dostupná! 🎉',
  'Podívejte se na naše nejnovější projekty. Jaký vám nejvíce líbí?',
  'Skvělý tip pro vás! Zjistěte, jak to dělat správně.',
  'Děkujeme za vaši podporu! Vy jste nejlepší.',
  'Víte, jak se zbavit tohoto problému? Prozradíme vám.',
  'Připravte se na něco speciálního!',
  'Naši zákazníci mají zajímavou zkušenost. Chcete vědět víc?',
  'Tohle je trend! Jste v tom?',
]

const RECOMMENDED_TIMES = [
  '09:00',
  '12:30',
  '18:00',
  '20:00',
]

export function generateMockPlan(userId: string, month: number, year: number): Plan {
  const planId = uuidv4()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const posts: Post[] = []

  const platforms: Array<'instagram' | 'facebook' | 'youtube'> = ['instagram', 'facebook', 'youtube']

  // Generate approximately 3-4 posts per week per platform
  for (let day = 1; day <= daysInMonth; day += 2) {
    for (const platform of platforms) {
      if (Math.random() > 0.3) {
        const hour = parseInt(RECOMMENDED_TIMES[Math.floor(Math.random() * RECOMMENDED_TIMES.length)])
        const minute = Math.floor(Math.random() * 60)

        posts.push({
          id: uuidv4(),
          planId,
          title: `${platform.charAt(0).toUpperCase() + platform.slice(1)} Post - ${day}. ${month + 1}.`,
          content: SAMPLE_CONTENT[Math.floor(Math.random() * SAMPLE_CONTENT.length)],
          platform,
          scheduledTime: new Date(year, month, day, hour, minute),
          postType:
            POST_TYPES[platform as keyof typeof POST_TYPES][
              Math.floor(Math.random() * POST_TYPES[platform as keyof typeof POST_TYPES].length)
            ],
          hashtags: ['#planlio', '#obsah', '#sociálnísítě', '#marketing'],
        })
      }
    }
  }

  return {
    id: planId,
    userId,
    name: `Plán na ${new Date(year, month).toLocaleDateString('cs-CZ', { month: 'long', year: 'numeric' })}`,
    month,
    year,
    posts: posts.sort((a, b) => new Date(a.scheduledTime).getTime() - new Date(b.scheduledTime).getTime()),
    createdAt: new Date(),
    updatedAt: new Date(),
  }
}

export function generateMockPlans(userId: string, count: number = 3): Plan[] {
  const plans: Plan[] = []
  const now = new Date()

  for (let i = 0; i < count; i++) {
    const date = new Date(now.getFullYear(), now.getMonth() - i, 1)
    plans.push(generateMockPlan(userId, date.getMonth(), date.getFullYear()))
  }

  return plans
}
