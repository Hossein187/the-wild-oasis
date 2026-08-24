import styled from 'styled-components';

const Input = styled.input`
  border: 1.5px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  color: var(--color-brand-600);
  padding: 0.8rem 1.2rem;
  border-radius: var(--border-radius-sm);
  font-size: 1.4rem;
  outline: none;
  transition: border-color 0.2s ease;
  margin-bottom: 10px;
  width: 15rem;
  max-width: 30rem;
  box-shadow: var(--shadow-sm);
  box-sizing: border-box;

  &:hover {
    border-color: var(--color-brand-700);
  }

  &:focus {
    border-color: var(--color-brand-500);
  }
`;
export default Input;
