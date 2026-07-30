import style from "@emotion/styled";

export const Section = style.section`
width: 100%;
font-size:13px;
`;
export const H3 = style.h3`
border-bottom: 1px solid;
width: 100%;
`;
export const Caixa = style.div`
display: grid;
grid-template-columns: 2fr 1fr 1fr 1fr ;
`;

export const Produto = style.div`
border:1px solid;
height:8rem;
display: grid;
grid-template-rows: 20px 1fr;
justify-content: center;
align-items: center;

`;

export const Preco = style(Produto)`
`;
export const Quantidade = style(Produto)`
`;
export const Entrega = style(Produto)`
`;
export const Cupon = style.div`

border:1px solid;
margin-top: 1rem;
padding:15px;

`;
export const Label = style.label`
margin-right: 1rem;
`;
export const Input = style.input`
padding: 0.3rem;

`;
export const Botao = style.button`
padding: 0.3rem;

`;
export const P = style.p`
 
width: 100%;

`;
