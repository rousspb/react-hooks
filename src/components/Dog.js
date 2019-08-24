/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const dogStyle = css`
  background-color: #ffff;
  height: 10rem;
  width: 13rem;
  margin-right: 3rem;
  margin-bottom: 2rem;
  padding-top: 1rem;
  border-radius: 0.31rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;

const nameStyle = css`
  font-size: 2rem;
  color: #2e8ec1;
  font-weight: bold;
  text-transform: capitalize;
`;

const PicDog = styled.span`
  background-image: url(${props => props.src});
  height: 150px;
  width: 150px;
  background-size: cover;
  background-repeat: no-repeat;
`;

function Dog({ name, pic }) {
  if (name) {
    return (
      <Link to={`/dog/${name}`} css={dogStyle}>
        <PicDog src={pic}></PicDog>
        <span css={nameStyle}>{name}</span>
      </Link>
    );
  } else {
    return (
      <div css={dogStyle}>
        <PicDog src={pic}></PicDog>
      </div>
    );
  }
}

export default Dog;
