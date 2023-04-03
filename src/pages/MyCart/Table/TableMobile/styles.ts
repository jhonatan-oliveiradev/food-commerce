import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .order-item {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 1.5rem;

    background: ${({ theme }) => theme.colors.black};
    padding: 1.75rem 1.5rem;
    border-radius: 4px;

    > div:first-child {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
      }
    }

    > div:last-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h4 {
        font-size: 1.75rem;
        font-weight: 400;
        margin-bottom: 0.5rem;
      }

      > span {
        font-size: 2rem;
        font-weight: 700;
      }

      div {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin: 0.875rem 0;

        div {
          flex-shrink: 0;
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
              width: 2rem;
            }
          }

          span {
            display: block;
            padding: 0.125rem 0.75rem;

            background: ${({ theme }) => theme.colors.white};
            color: ${({ theme }) => theme.colors.black};
            border-radius: 4px;
            font-size: 1.75rem;
            font-weight: 500;
          }
        }

        button {
          display: flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;

          background: transparent;
          border: none;

          svg {
            fill: ${({ theme }) => theme.colors.yellow};
            width: 2rem;
            height: 2rem;
          }
        }
      }

      h5 {
        span {
          display: block;
          font-size: 1.75rem;
          font-weight: 400;
        }

        font-size: 2.5rem;
        font-weight: 700;
      }
    }

    @media (max-width: 540px) {
      grid-template-columns: 1fr;
      padding: 1rem;

      > div:first-child {
        height: 10rem;
      }

      > div:last-child {
        div {
          gap: 2rem;
        }

        h5 {
          span {
            font-size: 1.5rem;
          }

          align-self: flex-end;
          font-size: 2.25rem;
        }
      }
    }
  }
`;
