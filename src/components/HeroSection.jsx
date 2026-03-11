import { FaDiscord } from 'react-icons/fa'
import mariCharacter from '../assets/MariKitagawa.png'
import riasCharacter from '../assets/RiasGremory.png'
import zeroCharacter from '../assets/ZeroTwo.png'
import luffyCharacter from '../assets/Luffy.png'
import narutoCharacter from '../assets/Naruto.png'
import { useTheme } from '../theme/useTheme'

const heroImagesByTheme = {
  'mari-kitagawa': {
    src: mariCharacter,
    alt: 'Personagem Mari Kitagawa',
  },
  'rias-gremory': {
    src: riasCharacter,
    alt: 'Personagem Rias Gremory',
  },
  'zero-two': {
    src: zeroCharacter,
    alt: 'Personagem Zero Two',
  },
  luffy: {
    src: luffyCharacter,
    alt: 'Personagem Luffy',
  },
  naruto: {
    src: narutoCharacter,
    alt: 'Personagem Naruto',
  },
}

function HeroSection() {
  const { currentTheme } = useTheme()
  const heroVisual = heroImagesByTheme[currentTheme.id] ?? heroImagesByTheme['zero-two']

  return (
    <section className="hero-stage relative mt-4 overflow-hidden rounded-[1.8rem] border border-[#f6ddd2]/25 px-4 pb-8 pt-4 sm:px-6 md:rounded-[2.4rem] md:px-10 md:pb-14">
      <div className="diagonal-panel" aria-hidden="true" />
      <div className="dot-overlay" aria-hidden="true" />
      {/* <div className="stripe-overlay" aria-hidden="true" /> */}

      <div className="relative z-10 grid grid-cols-1 items-center gap-4 pt-6 sm:grid-cols-[1fr_0.9fr] sm:gap-8 md:grid-cols-[1fr_0.92fr] md:gap-10 md:pt-14">
        <div className='flex flex-col space-y-2'>
          <div>
            <span className="px-2 py-1 w-min-content">Since 11/02/2023</span>
          </div>

          <h1 className="theme-text font-display text-4xl leading-[0.9] sm:text-6xl md:text-8xl">
            <span className="hero-title-line block">SAAGIM</span>
            <span className="hero-title-line block">TWO</span>
          </h1>

          <p className="hero-sub theme-text-muted mt-4 max-w-md text-sm md:mt-6 md:text-base">
            Esqueca o servidor generico. Aqui a cultura anime encontra comunidade ativa, eventos semanais e uma identidade visual que chega antes da mensagem.
          </p>

          <div className="hero-cta mt-4 flex flex-wrap gap-3 md:mt-9">
            <a id="entrar" href="https://discord.gg/saagimtwo" target="_blank" rel="noopener noreferrer"className="flex items-center gap-2 bg-blue-600 text-white rounded-full px-4 py-2 text-[11px] font-bold transition sm:px-8 sm:py-3 sm:text-sm">
              <FaDiscord className="text-base" />
              DISCORD
            </a>
            <a href="#diferenciais" className="hero-ghost-btn rounded-full px-4 py-2 text-[11px] font-bold transition sm:px-8 sm:py-3 sm:text-sm">
              VER DIFERENCIAIS
            </a>
          </div>
        </div>

        <div className="hero-panel relative">
          <img
            src={heroVisual.src}
            alt={heroVisual.alt}
            className="character-art -mb-8 ml-auto h-80 w-auto max-w-full object-contain drop-shadow-[12px_0_0_rgba(47,18,13,0.72)] sm:-mb-10 sm:h-96 md:-mb-21 md:h-140 md:drop-shadow-[20px_0_0_rgba(47,18,13,0.75)]"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
