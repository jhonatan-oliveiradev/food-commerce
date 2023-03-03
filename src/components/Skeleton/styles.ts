import { SkeletonProps } from "./index";
import styled, { css, keyframes } from "styled-components";

const shimmerEffect = keyframes`
  0% {
    background-position: 0%;
  }
  50% {
    background-position: -50%;
  }
  75% {
    background-position: -125%;
  }
  100% {
    background-position: -200%;
  }
`;

export const SkeletonElement = styled.div<SkeletonProps>`
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.gray900} 0%,
    #0a0a0a 40%,
    ${({ theme }) => theme.colors.gray900} 100%
  );
  background-size: 200%;
  border-radius: 0.25rem;

  animation: ${shimmerEffect} 1s linear infinite;

  ${({ type }) =>
    type === "title" &&
    css`
      width: 75%;
      height: 2rem;
      margin: 0.5rem 0;
    `}
  ${({ type }) =>
    type === "text" &&
    css`
      width: 100%;
      height: 1.125rem;
      margin: 0.25rem 0;
    `}
  ${({ type }) =>
    type === "image" &&
    css`
      width: 12.5rem;
      height: 12.5rem;
      margin: 0.25rem 0;
      border-radius: 50%;
    `}
  ${({ type }) =>
    type === "thumbnail" &&
    css`
      width: 100%;
      height: 12.5rem;
      margin: 0.5rem 0;
      border-radius: 0.625rem;
    `}
`;
