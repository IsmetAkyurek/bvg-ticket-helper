import { useUpdated } from "hooks";
import { useState } from "react";

const Step = ({ initialValue, data, onNext, onPrev, isActive }) => {
  const [value, setValue] = useState(initialValue ? initialValue : data.input === 'number' ? 1 : '');

  useUpdated(() => {
    if (value !== initialValue) {
      setValue(initialValue ? initialValue : data.input === 'number' ? 1 : '');
    }
  }, initialValue);

  const onClick = (keyword, val) => {
    setValue(val);
    onNext(keyword, val);
  };

  const onNextClick = () => {
    onNext(data.next, data.input === 'number' ? parseInt(value) : value);
  };

  return (
    <div className={`steps__step ${isActive ? 'steps__step--active' : ''}`}>
      <div className="steps__step-question">
        {data.question}
      </div>
      {data.input ?
        <div className="steps__step-input">
          <input type={data.input} min={1} value={value} onChange={e => setValue(e.target.value)} />
        </div>
        :
        <div className="steps__step-buttons">
          {data.buttons.map(button => (
            <button key={button.value} className="outline" onClick={() => onClick(button.next, button.value)}>
              {button.text}
            </button>
          ))}
        </div>
      }
      <div className="steps__step-navigation">
        {onPrev &&
          <button onClick={onPrev} className="text">
            <i className="fas fa-angle-double-left" /> Previous
          </button>
        }
        {data.input &&
          <button onClick={onNextClick} disabled={!value}>
            Next <i className="fas fa-angle-double-right" />
          </button>
        }
      </div>
    </div>
  );
};

export default Step;