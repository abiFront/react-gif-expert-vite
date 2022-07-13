

export const GifItem = ({title, url}) => {
  return (
    // <li key={id}>{title}</li>
    <div className="card">
        <img src={url} alt={title} />
    </div>
  )
}
