import Link from 'next/link'

export default function Socials({links}){
  // links: { youtube, instagram, tiktok, twitter, github }
  const items = [
    {k:'youtube', label:'YouTube'},
    {k:'instagram', label:'Instagram'},
    {k:'tiktok', label:'TikTok'},
    {k:'twitter', label:'Twitter'},
    {k:'github', label:'GitHub'},
  ]
  return (
    <div className="socials" style={{display:'flex',gap:12,flexWrap:'wrap'}}>
      {items.map(i=>{
        const href = links && links[i.k] ? links[i.k] : '#'
        return (
          <Link key={i.k} href={href} className="social-link" aria-label={i.label}>
            {i.label}
          </Link>
        )
      })}
    </div>
  )
}
