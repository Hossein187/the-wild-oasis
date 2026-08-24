import styled, { css } from 'styled-components';

const Title = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 3rem;
      margin-bottom: 1rem;
      text-align: center;
      font-weight: 600;
      text-transform: uppercase;
      color: var(--color-brand-500);
      padding: 1rem;
      border-radius: 8px;
    `}
  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 2rem;
      margin: 0 1rem;
      font-weight: 600;
      text-transform: uppercase;
      color: var(--color-brand-500);
      padding: 1rem;
      border-radius: 8px;
    `}
  ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 2rem;
      margin: 0.8rem 0;
      font-weight: 500;
      text-transform: uppercase;
      color: var(--color-brand-900);
      background-color: var(--color-brand-200);
      padding: 1rem;
      border-radius: 8px;
    `}
    
    line-height: 1.4;
`;

export default Title;
