function CircleCard({ color, title, content, icon, onVisit }) {
  return (
    <div className="circle-card" onClick={onVisit}>
      <div className={`circle ${color}`}>
        <i className={icon}></i>
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <button>Visit</button>
      </div>
    </div>
  );
}


export default CircleCard;