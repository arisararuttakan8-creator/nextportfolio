'use client'
 
export default function myImageLoader({ src, width, quality }) {
    if( src.startsWith('https://fastly.picsum.photos')) return src
  return `https://nextjsportfolio.com/${src}?w=${width}&q=${quality || 75}`
}