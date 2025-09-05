function CircleCard({ color, title, content, icon, onVisit }) {
  return (
    <div className="card-wrapper" onClick={onVisit}>
      <div className={`card-icon ${color}`}>
        <i className={icon}></i>
      </div>
      <div className="card-details">
        <h3>{title}</h3>
        <p>{content}</p>
        <button className="card-button">Visit</button>
      </div>
    </div>
  );
}

export default CircleCard;
