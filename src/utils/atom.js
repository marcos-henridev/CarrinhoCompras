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

export const carrinhoState = atom({
  key: "carrinhoState",
  default: [],
});
export const inicializadorProdState = atom({
  key: "inicializadorProd",
  default: 1,
});

export const totalProdStaste = atom({
  key: "totalProdState",
  default: null,
});

export const cuponState = atom({
  key: "cuponState",
  default: "React10",
});

export const enderecoState = atom({
  key: "enderecoState",
  default: null,
});
export const cepState = atom({
  key: "cep",
  default: "",
});
export const erroStateCep = atom({
  key: "erroStateCep",
  default: "",
});
export const loadingCepState = atom({
  key: "loadingCepState",
  default: true,
});

export const viewFormCepState = atom({
  key: "viewFormCepState",
  default: false,
});

export const validacaoCuponComcluida = atom({
  key: "validacaoCuponComcluida",
  default: false,
});
