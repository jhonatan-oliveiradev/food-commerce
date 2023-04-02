import styled from "styled-components";

export const Container = styled.main`
  background: ${({ theme }) => theme.colors.black};
  padding: 2rem 2.5rem;
  border-radius: 8px;

  table {
    width: 100%;
    border-spacing: 0 0;
    border-collapse: collapse;

    th {
      padding: 0 1rem 0.5rem 1rem;

      font-weight: 500;
      font-size: 1.125rem;
      text-transform: uppercase;
      text-align: left;

      &:nth-child(2) {
        padding-left: 2rem;
      }
    }

    td {
      padding: 1.5rem 1rem 1.5rem 1rem;
      padding-top: 1.5rem;
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray600};

      h4 {
        font-size: 1.125rem;
        font-weight: 400;
        margin-bottom: 0.5rem;
      }

      > span {
        font-size: 1.5rem;
        font-weight: 700;
      }

      div {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        button {
          display: flex;
          flex: 0;
          align-items: center;
          justify-content: center;

          background: transparent;
          border: none;

          img {
            width: 1.25rem;
            transition: all 0.2s ease-in;

            &:hover {
              opacity: 0.8;
            }
          }
        }
      }

      h5 {
        font-size: 1.5rem;
        font-weight: 700;
      }

      &:first-child {
        width: 7.5rem;
        padding-left: 0;
        padding-right: 0;

        img {
          object-fit: cover;
          width: 7.5rem;
          height: 7.5rem;
          border-radius: 8px;
        }
      }

      &:nth-child(2) {
        padding-left: 2rem;
      }

      &:nth-child(3),
      &:nth-child(4) {
        width: 11rem;
      }

      &:last-child {
        width: 1.5rem;
        padding-right: 0;

        button {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          width: 100%;
          background: transparent;
          border: none;

          svg {
            fill: ${({ theme }) => theme.colors.yellow};
            width: 1.5rem;
            height: 1.5rem;
          }
        }
      }
    }
  }
`;
