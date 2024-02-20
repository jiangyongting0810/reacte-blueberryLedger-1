import p from '../assets/EasyBooks.svg'

export const Welcome1: React.FC = () => {
  return (
    <div text-center>
      <img src={p} w-270px h-240px/>
      <h2 text-32px mt-48px >
        智能记账 <br/>
        财务轻松掌握
      </h2>
    </div>
  )
}
