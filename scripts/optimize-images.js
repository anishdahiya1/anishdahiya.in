const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
let Jimp
try{ Jimp = require('jimp') }catch(e){ Jimp = null }
function getJimp(){ if(!Jimp) return null; return Jimp.read? Jimp : (Jimp.default? Jimp.default : null) }

const inputDir = path.join(process.cwd(),'public','images')
const outputDir = inputDir

async function processFile(file){
  const ext = path.extname(file).toLowerCase()
  if(!['.jpg','.jpeg','.png'].includes(ext)) return
  const name = path.basename(file, ext)
  const inputPath = path.join(inputDir,file)
  try{
    // 1x
    await sharp(inputPath).resize(420).webp({quality:82}).toFile(path.join(outputDir, `${name}-420.webp`))
    // 2x
    await sharp(inputPath).resize(840).webp({quality:78}).toFile(path.join(outputDir, `${name}-840.webp`))
    console.log('optimized', file)
  }catch(e){
    console.error('sharp failed for', file, e.message)
    const J = getJimp()
    if(J){
      try{
        const img = await J.read(inputPath)
        await img.clone().resize(420, J.AUTO).quality(82).writeAsync(path.join(outputDir, `${name}-420.webp`))
        await img.clone().resize(840, J.AUTO).quality(78).writeAsync(path.join(outputDir, `${name}-840.webp`))
        console.log('optimized with jimp', file)
      }catch(e2){
        console.error('jimp also failed for', file, e2 && e2.message ? e2.message : e2)
      }
    }
  }
}

fs.readdirSync(inputDir).forEach(f=>{processFile(f)})
