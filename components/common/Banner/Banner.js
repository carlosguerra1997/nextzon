export const Banner = ({ className, children }) => {
  return (
    <div className={className}>
      <div>
        { children }
      </div>
    </div>
  )
}