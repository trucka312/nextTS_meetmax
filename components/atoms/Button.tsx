import React from 'react';
import { css, styled } from 'styled-components';

type Props = {
  children: React.ReactNode;
  kind?: string;
  type?: 'button' | 'reset' | 'submit';
  className?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
const ButtonStyle = styled.button<Props>`
  color: white;
  background-color: ${(props) => props.theme.bluePrimary};
  padding: 0.6rem 3rem;
  font-weight: 500;
  border-radius: 8px;
  ${(props) =>
    props.kind === 'outline' &&
    css`
      color: ${(props) => props.theme['grayscale-60']};
      background-color: ${(props) => props.theme.white};
      border: 1px solid ${(props) => props.theme['grayscale-20']};
      border-radius: 6px;
    `};
`;
function Button({ children, kind, className, ...rest }: Props) {
  return (
    <ButtonStyle {...rest} className={className} kind={kind}>
      {children}
    </ButtonStyle>
  );
}

export default Button;
