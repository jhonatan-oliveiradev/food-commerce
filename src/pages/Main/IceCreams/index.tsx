import { useState, useEffect } from 'react';
import { Head } from '../../../components/Head';
import { SnackTitle } from '../../../components/SnackTitle';
import Snacks from '../../../components/Snacks';

import { getIceCreams } from '../../../services/api';

export default function IceCreams() {
  const [iceCreams, setIceCreams] = useState([]);

  useEffect(() => {
    (async () => {
      const iceCreamsRequest = await getIceCreams();

      setIceCreams(iceCreamsRequest.data);
    })();
  }, []);

  return (
    <>
      <Head
        title='Sobremesas'
        description='Nada melhor que uma deliciosa sobremesa depois de uma refeição incrível!'
      />
      <SnackTitle>Sobremesas</SnackTitle>
      <Snacks snacks={iceCreams}></Snacks>
    </>
  );
}
