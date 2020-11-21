const Card = ({ title = '', children }) => {
  return (
    <div className="card">
      {title &&
        <div className="card__header">
          {title}
        </div>
      }
      <div className="card__body">
        {children}
      </div>
    </div>
  );
};

export default Card;