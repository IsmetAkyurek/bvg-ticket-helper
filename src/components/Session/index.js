const Session = ({ onAccept, onRefuse }) => (
  <div className="session">
    Do you want to continue your previous selections?
    <div className="session__buttons">
      <button onClick={onRefuse}>No</button>
      <button onClick={onAccept}>Yes</button>
    </div>
  </div>
);

export default Session;