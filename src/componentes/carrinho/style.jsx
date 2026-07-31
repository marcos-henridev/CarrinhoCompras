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
margin-top:2rem;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr ;
gap:3px;
max-height: 600px;
`;

export const Produto = style.div`

border:1px solid;
height:8rem;
display: flex;
gap: 2rem;


`;

export const Preco = style(Produto)`
`;
export const Quantidade = style(Produto)`
`;
export const Total = style(Produto)`
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
