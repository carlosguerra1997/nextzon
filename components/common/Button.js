export const Button = ({ className, onClick, type, children }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      { children }
    </button>
  )
}