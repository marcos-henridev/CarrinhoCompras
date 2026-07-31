import { useSetRecoilState } from "recoil";
import { inicializadorProdState } from "../utils/atom";

const usePlusAndMenus = () => {
  const setContador = useSetRecoilState(inicializadorProdState);
  const adicionar = () => {
    setContador((prev) => prev + 1);
  };

  const diminuir = () => {
    setContador((prev) => prev - 1);
  };

  return {
    adicionar,
    diminuir
  };
};

export default usePlusAndMenus;
