import styled, { css } from 'styled-components';

const rowVariants = {
  horizontal: css`
    justify-content: space-between;
    align-items: center;
  `,
  vertical: css`
    flex-direction: column;
    gap: 1.6rem;
  `,
};

const Row = styled.div`
  display: flex;
  ${({ type = 'vertical' }) => rowVariants[type] ?? rowVariants.vertical}
`;

// Row.defaultProps = {
//   type: 'vertical',
// }; // dosn't works

export default Row;
