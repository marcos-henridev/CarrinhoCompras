import { atom } from "recoil";

export const navegacaoState = atom({
  key: "navegacaoState",
  default: ["PAGAMENTO", "PAGAMENTO", "CONFIRMAÇÃO"],
});
