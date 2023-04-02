import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  img {
    width: 8rem;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    background: none;
    border: none;

    div {
      text-align: right;

      h3 {
        color: ${({ theme }) => theme.colors.white};
        margin-bottom: 0.125rem;
        font-weight: 500;
      }

      span {
        color: ${({ theme }) => theme.colors.yellow};

        strong {
          font-weight: 500;
          font-size: 1.25rem;
        }
      }
    }

    svg {
      flex-shrink: 0;
      fill: ${({ theme }) => theme.colors.white};
      width: 2.875rem;
      height: 2.875rem;
    }
  }
`;
