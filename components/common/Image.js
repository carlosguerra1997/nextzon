export const Image = ({ alt, className, height, onMouseEnter, src, width }) => {
  return (
    <img 
      alt={alt}
      className={className}
      height={height}
      onMouseEnter={onMouseEnter}
      src={src}
      width={width}
    />
  )
}