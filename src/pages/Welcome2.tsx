import p from '../assets/IntelliBooks.svg'

export const Welcome2: React.FC = () => {
  return (
    <div text-center>
      <img src={p} w-270px h-240px/>
      <h2 text-32px mt-48px >
        简单易用 <br />
        收支一目了然
      </h2>
    </div>
  )
}
