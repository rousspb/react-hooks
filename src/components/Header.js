import { useState } from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useDogState } from '../providers/DogProvider';

const headerStyled = css`
  background-color: #2e8ec1;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  h1 {
    color: #ffff;
    margin: 0;
    font-weight: bold;
    font-size: 4rem;
    margin-left: 3rem;
  }
`;

const searchStyle = css`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  input {
    font-size: 1rem;
    padding: 5px;
    height: 1.5rem;
    width: 17rem;
    border-radius: 5px;
    border: none;
    color: #66666b;
  }
`;
function Header() {
  const { filterDogs } = useDogState();
  const [seachValue, setSearchValue] = useState('');

  function handleInputChange(e) {
    setSearchValue(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      filterDogs(seachValue);
    }
  }
  return (
    <header css={headerStyled}>
      <h1>Breeds</h1>
      <div css={searchStyle}>
        <input
          type="text"
          placeholder="Search for..."
          value={seachValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </header>
  );
}

export default Header;
