const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const out = path.join(process.cwd(),'public','images','profile1.jpeg')
const svg = `
<svg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'>
  <defs>
    <linearGradient id='g' x1='0' x2='1' y1='0' y2='1'>
      <stop offset='0%' stop-color='#6C5CE7'/>
      <stop offset='100%' stop-color='#00C8FF'/>
    </linearGradient>
    <filter id='grain'>
      <feTurbulence baseFrequency='0.8' numOctaves='1' seed='2' result='t'/>
      <feColorMatrix type='saturate' values='0'/>
      <feBlend in='SourceGraphic' in2='t' mode='overlay'/>
    </filter>
  </defs>
  <rect width='100%' height='100%' fill='url(#g)' />
  <g transform='translate(400,360)'>
    <circle cx='0' cy='-40' r='140' fill='rgba(255,255,255,0.14)' />
    <circle cx='0' cy='-34' r='120' fill='rgba(255,255,255,0.06)' />
    <g transform='translate(-0,-10)'>
      <rect x='-120' y='60' width='240' height='220' rx='28' fill='rgba(255,255,255,0.08)' />
      <g fill='white' opacity='0.95'>
        <text x='0' y='70' font-size='72' font-family='Inter, Arial' font-weight='700' text-anchor='middle' dominant-baseline='middle'>AD</text>
      </g>
    </g>
  </g>
</svg>
`

async function run(){
  try{
    const buffer = Buffer.from(svg)
    await sharp(buffer).jpeg({quality:90}).toFile(out)
    console.log('generated', out)
  }catch(e){console.error('gen failed', e.message)}
}
run()
