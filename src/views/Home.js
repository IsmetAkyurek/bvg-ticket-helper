import { Card, Session, Steps } from 'components';
import { useSelector } from 'react-redux';
import { useStorage } from 'hooks';

const Home = () => {
  const name = useSelector(state => state.data.name);
  const { hasSession, onAccept, onRefuse } = useStorage();

  return (
    <div className="content content--md">
      <Card title={name && `Hello there, ${name}!`}>
        {hasSession ?
          <Session onAccept={onAccept} onRefuse={onRefuse} />
          :
          <Steps />
        }
      </Card>
    </div>
  );
};

export default Home;