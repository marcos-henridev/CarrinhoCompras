import style from "@emotion/styled";

export const Section = style.section`
  width: 100%;
  position: relative;
  font-size: 13px;
`;
export const H3 = style.h3`
  width: 100%;
  margin-bottom: 1rem;
  border-bottom: 1px solid;
`;
export const Caixa = style.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3px;
  margin-bottom: 5px;
`;

export const Produto = style.div`
  height: 8rem;
  max-width: 400px;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-left: 1rem;
  border: 1px solid;
`;

export const Preco = style(Produto)`
  justify-content: center;
`;
export const Quantidade = style(Produto)`
  justify-content: center;
`;
export const Total = style(Produto)`
  justify-content: center;
`;
export const Cupon = style.div`
  margin-top: 1rem;
  padding: 15px;
  border: 1px solid;
`;
export const Label = style.label`
  margin-right: 1rem;
`;
export const Input = style.input`
  padding: 0.3rem;
  border: 1px solid #9ca3af;
  outline: none;
`;
export const Botao = style.button`
  padding: 0.3rem;
  border: 1px solid ${({ $ativo }) => ($ativo ? "#198754" : "#6c757d")};
  border-left: 0;
  background-color: ${({ $ativo }) => ($ativo ? "#198754" : "#6c757d")};
  color: #ffffff;
  cursor: ${({ $ativo }) => ($ativo ? "pointer" : "not-allowed")};
  transition: background-color 0.2s ease, border-color 0.2s ease;

  &:hover:not(:disabled) {
    filter: brightness(0.9);
  }
`;

export const ProductImage = style.img`
  height: 5rem;
`;

export const QuantityButton = style.button``;

export const QuantityIcon = style.img`
  height: 1.25rem;
`;

export const QuantityValue = style.span`
  margin: 0 0.75rem;
`;

export const SummaryGrid = style.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: 1rem;
`;

export const AddressContainer = style.div``;

export const Summary = style.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 1rem;
`;

export const SummaryRow = style.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d1d5db;
`;

export const SummaryLabel = style.p`
  font-size: 15px;
`;

export const DeliveryButton = style.button`
  cursor: pointer;
`;

export const Actions = style.div`
  display: flex;
  gap: 1.25rem;
`;

export const AddProductsButton = style.button`
  margin-bottom: 2rem;
  margin-left: auto;
  padding: 0.75rem;
  border: 1px solid #9ca3af;
  border-radius: 6px;

  &:hover {
    background-color: #e5e7eb;
  }
`;

export const CheckoutButton = style.button`
  width: 200px;
  margin-bottom: 2rem;
  padding: 0.75rem;
  border: 1px solid #86efac;
  border-radius: 6px;
  background-color: #22c55e;
  color: #ffffff;
  font-size: 15px;
  font-weight: 700;

  &:hover {
    background-color: #16a34a;
  }
`;
