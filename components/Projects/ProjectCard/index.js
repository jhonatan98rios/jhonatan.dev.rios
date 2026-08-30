export default function ProjectCard({ card, active, onSelect }) {
  const image = card.images?.[0] || '/projects/default.png'

  return (
    <div
      role="button"
      tabIndex={0}
      aria-pressed={active}
      onClick={onSelect}
      onKeyDown={(e) => e.key === 'Enter' && onSelect()}
      className={[
        'flex w-72 md:w-80 shrink-0 snap-center cursor-pointer select-none flex-col overflow-hidden rounded-3xl border-2 border-white bg-black transition-all duration-300',
        active ? 'scale-[1.02] ring-4 ring-white/90' : 'opacity-60 hover:scale-[1.02] hover:opacity-100',
      ].join(' ')}
      style={{ filter: `drop-shadow(0px 0px 5px ${card.color})` }}
    >
      <img
        src={image}
        alt={card.title}
        loading="lazy"
        className="h-52 w-full object-cover"
      />
      <div
        className="flex flex-1 flex-col items-center justify-center p-4 text-center"
        style={{ backgroundColor: card.color }}
      >
        <h3 className="text-xl font-light text-white">{card.title}</h3>
      </div>
    </div>
  )
}
