const DEFAULT_LINKS = {
  youtube: 'https://youtube.com',
  instagram: 'https://instagram.com',
  tiktok: 'https://tiktok.com',
  twitter: 'https://x.com',
  github: 'https://github.com'
}

export default function Socials({links}){
  const items = [
    {k: 'youtube', label: 'YouTube'},
    {k: 'instagram', label: 'Instagram'},
    {k: 'tiktok', label: 'TikTok'},
    {k: 'twitter', label: 'Twitter / X'},
    {k: 'github', label: 'GitHub'}
  ]

  const resolved = {...DEFAULT_LINKS, ...(links || {})}

  return (
    <div className="socials">
      {items.map(({k, label}) => (
        <a key={k} href={resolved[k]} className="social-link" target="_blank" rel="noreferrer">
          {label}
        </a>
      ))}
    </div>
  )
}
