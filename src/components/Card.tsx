import '@/styles/card.css'

interface CardProps {
  left?: string
  top?: string
  scale?: string
  rotation?: string
  children?: React.ReactNode
}

export function Card({ scale = '100%', left = '10%', top = '50%', rotation = '-16deg', children }: CardProps) {
  return (
    <div className="card" style={{ left, top, transform: `rotate(${rotation}) scale(${scale})`}}>
      {children}
      <span> lorempin lor lorempin su sum lorem loremiptsum </span>
    </div>
  )
}
