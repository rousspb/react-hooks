import { useEffect } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useDogState } from '../providers/DogProvider';
import Dog from './Dog';

const titleStyle = css`
  margin: 0;
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const dogsCtnStyle = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

function Dogs() {
  const { dogs, getAllDogs } = useDogState();
  useEffect(() => {
    if (dogs.length === 0) {
      getAllDogs();
    }
  }, [dogs]);

  return (
    <section>
      <h2 css={titleStyle}>Some random breeds</h2>
      <div css={dogsCtnStyle}>
        {dogs.map((dog, i) => (
          <Dog name={dog.name} pic={dog.pic} key={i} />
        ))}
      </div>
    </section>
  );
}

export default Dogs;
