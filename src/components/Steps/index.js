import tree from 'helpers/tree';
import { useDispatch, useSelector } from 'react-redux';
import actions from 'store/actions';
import Result from './Result';
import Step from './Step';

const Steps = () => {
  const dispatch = useDispatch();
  const current = useSelector(state => state.current);
  const data = useSelector(state => state.data);
  const progress = useSelector(state => state.progress);

  const onNext = (keyword, value) => {
    dispatch(actions.nextStep(keyword, value));
  };

  const onPrev = () => {
    dispatch(actions.prevStep());
  };

  const onReset = () => {
    dispatch(actions.reset());
  };

  return (
    <div className="steps">
      {Object.values(tree).map(item => (
        <Step
          key={item.keyword}
          data={item}
          onNext={onNext}
          onPrev={progress.length > 1 ? onPrev : null}
          isActive={current === item.keyword}
          initialValue={data[item.keyword]}
        />
      ))}
      {current === false &&
        <Result onReset={onReset} />
      }
    </div>
  );
};

export default Steps;