import { config } from '@/config'
import type { APIContext } from 'astro'

export async function GET({ request }: APIContext) {
  const objectUrl = new URL(request.url)

  const lang = objectUrl.searchParams.get('lang') || 'en'
  console.log(lang)
  const url = `${config.apiUrl}/Any?lang=${lang}&type=single`

  const response = await fetch(url)
  const data = await response.json()

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
