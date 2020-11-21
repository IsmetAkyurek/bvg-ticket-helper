import { getResult } from 'helpers';
import { useMounted, useStorage } from 'hooks';
import { useSelector } from 'react-redux';

const Result = ({ onReset }) => {
  const data = useSelector(state => state.data);
  const result = getResult(data);
  const totalPrice = result.reduce((a, b) => a + b.count * b.unitPrice, 0).toFixed(2);
  const { clearStorage } = useStorage();

  useMounted(() => {
    clearStorage();
  });

  const pluralize = (count, text) => `${text}${count > 1 ? 's' : ''}`;

  return (
    <div className="steps__result">
      <div className="steps__result-summary">
        <h2>Summary</h2>
        <div className="steps__result-info">
          {data.isAlone ?
            <>
              <span className="steps__info-count">1</span> Person
              {data.isStudent && ' (Student)'}
            </>
            :
            <>
              <span className="steps__info-count">{data.howMany + 1}</span> People
            </>
          }
        </div>
        <div className="steps__result-info">
          <span className="steps__info-count">{data.howLong}</span> {pluralize(data.howLong, 'Day')} of Stay
        </div>
        {data.hasBike &&
          <div className="steps__result-info">
            <span className="steps__info-count">{data.bikesCount}</span> {pluralize(data.bikesCount, 'Bike')}
          </div>
        }
      </div>
      <div className="steps__result-tickets">
        <h2>Tickets</h2>
        {result.map((item, index) => (
          <div key={index} className="steps__result-ticket">
            <span className="steps__result-count">{item.count}</span>
            <span>{pluralize(item.count, item.text)}</span>
            <span className="steps__result-price">€{(item.count * item.unitPrice).toFixed(2)}</span>
          </div>
        ))}
        <div className="steps__result-total">
          <span className="steps__result-total-text">TOTAL</span>
          <span className="steps__result-total-price">€{totalPrice}</span>
        </div>
      </div>
      <button onClick={onReset}>
        I need another suggestion
      </button>
    </div>
  );
};

export default Result;