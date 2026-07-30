import { atom } from "recoil";

export const navegacaoState = atom({
  key: "navegacaoState",
  default: ["CARRINHO"],
});

// atoms da api
export const produtosState = atom({
  key: "produtosState",
  default: [],
});

export const carregamentoState = atom({
  key: "carregamentoState",
  default: true,
});

export const erroState = atom({
  key: "erroState",
  default: "",
});

/////////////

export const telaProd = atom({
  key: "telaProd",
  default: false,
});
