export const Button = ({ className, type, children }) => {
  return (
    <button className={className} type={type}>
      { children }
    </button>
  )
}