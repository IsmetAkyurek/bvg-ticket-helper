import { useState } from 'react';
import { useDispatch } from 'react-redux';
import useMounted from './useMounted';
import actions from 'store/actions';

const useStorage = () => {
  const [hasSession, setHasSession] = useState(false);
  const [session, setSession] = useState(null);
  const dispatch = useDispatch();

  const onAccept = () => {
    dispatch(actions.setSession(session));
    setHasSession(false);
    setSession(null);
  };

  const onRefuse = () => {
    localStorage.removeItem('session');
    setSession(null);
    setHasSession(false);
  };

  const clearStorage = () => {
    localStorage.removeItem('session');
  };

  useMounted(() => {
    const sessionData = localStorage.getItem('session');

    if (sessionData) {
      setSession(JSON.parse(sessionData));
      setHasSession(true);
    }
  });

  return { hasSession, onAccept, onRefuse, clearStorage };
};

export default useStorage;