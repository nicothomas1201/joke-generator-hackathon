import '@/styles/card.css'

interface CardProps {
  left?: string
  top?: string
  rotation?: string
  children?: React.ReactNode
}

export function Card({ left = '10%', top = '50%', rotation = '-16deg', children }: CardProps) {
  return (
    <div className="card" style={{ left, top, transform: `rotate(${rotation})` }}>
      {children}
      <span> algunos lor lorempin su sum lorem loremiptsum </span>
    </div>
  )
}
