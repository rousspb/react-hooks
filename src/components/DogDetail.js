import { useEffect } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useDogState } from '../providers/DogProvider';
import Dog from './Dog';
import { withRouter, Link } from 'react-router-dom';

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

const backStyle = css`
  float: right;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 2rem;
  background-color: white;
  text-decoration: none;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.56rem;
`;

function DogDetail({ match }) {
  const {
    params: { id }
  } = match;
  const { breed, getPicsByBreed } = useDogState();
  useEffect(() => {
    if (!breed || breed.length === 0) {
      getPicsByBreed(id);
    }
  }, [breed]);

  return (
    <section>
      <div>
        <Link to="/" css={backStyle}>
          Back
        </Link>
        <h2 css={titleStyle}>Breed of {id}s</h2>
      </div>
      <div css={dogsCtnStyle}>{breed && breed.map((dog, i) => <Dog pic={dog} key={i} />)}</div>
    </section>
  );
}

export default withRouter(DogDetail);
