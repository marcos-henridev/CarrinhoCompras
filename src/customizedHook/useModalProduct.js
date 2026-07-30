import { useSetRecoilState } from "recoil";
import { telaProd } from "../utils/atom";

export function useModalProduct() {
  const setTela = useSetRecoilState(telaProd);

  const ModalVerify = () => {
    setTela((prev) => !prev);
  };

  return {
    ModalVerify,
  };
}
