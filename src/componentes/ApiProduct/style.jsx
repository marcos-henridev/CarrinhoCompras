import styled from "@emotion/styled";

export const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 40%);
  backdrop-filter: blur(4px);
`;

export const Modal = styled.section`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 80%;
  max-width: 37%;
  max-height: 70vh;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  overflow-y: auto;
  background-color: #293032;
  padding: 0.75rem;
`;

export const ModalHeader = styled.div`
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 1.25rem;
`;

export const CloseButton = styled.button`
  display: flex;
  border: 2px solid currentColor;
  padding: 0 0.5rem;
  border-radius: 3px;
  color: #747f8a;
`;

export const Product = styled.div`
  height: 180px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: center;
  place-content: center;
  margin-bottom: 0.25rem;
  padding: 0 2.5rem;
  border-radius: 10px;
  background-color: #3e4c50;
  color: #ffffff;
`;

export const ProductTitle = styled.h2`
  font-size: 15px;
`;

export const ProductPrice = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
`;

export const AddButton = styled.button`
  padding: 0.5rem 0;
  border: 1px solid #16a34a;
  border-radius: 0.5rem;
  background-color: #16a34a;
  color: #ffffff;
`;
