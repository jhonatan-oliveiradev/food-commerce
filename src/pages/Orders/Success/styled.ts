import { lighten } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 58.75rem;
  padding: 2rem;
  margin: 6rem auto 0;
`;

export const Inner = styled.main`
  background: ${({ theme }) => theme.colors.black};
  padding: 2rem 2.5rem;
  border-radius: 0.5rem;
  text-align: center;
`;

export const Title = styled.h1``;

export const SubTitle = styled.h4`
  margin: 3rem 0 0.5rem;
`;

export const Table = styled.ul`
  margin: 0 auto 3rem;

  li {
    margin-bottom: 0.5rem;

    span {
      font-weight: bold;
    }
  }
`;

export const Link = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
  font-size: 1.25rem;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => lighten(0.1, theme.colors.primary)};
  }
`;
