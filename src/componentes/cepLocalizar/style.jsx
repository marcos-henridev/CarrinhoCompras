import styled from "@emotion/styled";

export const Section = styled.section`
  height: 100%;
`;

export const Title = styled.h1`
  margin-bottom: 0.75rem;
  border-bottom: 1px solid;
  font-weight: 700;
`;

export const Input = styled.input`
  width: 80%;
  padding: 0.5rem;
  border: 1px solid;
`;

export const Button = styled.button`
  width: 9%;
  padding: 0.5rem;
  border: 1px solid;
  border-left: 0;

  &:hover {
    background-color: #e5e7eb;
  }
`;

export const Address = styled.div`
  height: 100%;
  margin-top: 0.75rem;
`;

export const AddressList = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
