import styled from 'styled-components'

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  margin-bottom: 3rem;

  font-size: ${({ theme }) => theme.fontSize['4xl']};
  font-weight: 500;
  text-transform: uppercase;

  &::before {
    content: '';
    background: ${({ theme }) => theme.colors.white};
    width: 2.625rem;
    height: 0.3125rem;
    flex-shrink: 0;
    border-radius: 0.25rem;
  }

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize['3xl']};
    justify-content: center;

    &::before {
      display: none;
    }
  }
`
