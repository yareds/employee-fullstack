import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  padding: 0.5rem;
  background-color: transparent;
  width: 100% ${(props) => props.width};
  border: 3px solid rgb(52, 147, 211) ${(props) => props.borderColor};
  color: black;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  height: 3em ${(props) => props.height};
  justify-content: space-evenly;
  align-items: left;
`;

export default function Header({
  borderColor,
  headerValue,
  backgroundColor,
  width,
  height,
  icons,
}) {
  return (
    <>
      <StyledHeader
        width={width}
        height={height}
        headerColor={borderColor}
        backgroundColor={backgroundColor}
      >
        {icons}
        {headerValue}
      </StyledHeader>
    </>
  );
}
