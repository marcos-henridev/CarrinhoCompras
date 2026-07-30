import { useRecoilState, useSetRecoilState } from "recoil";
import { produtosState, carregamentoState, erroState } from "../utils/atom.js";
import { useEffect } from "react";
import { resumeToPipeableStream } from "react-dom/server";

export function useProdutos() {
  const [produtos, setProdutos] = useRecoilState(produtosState);
  const [loading, setLoadig] = useRecoilState(carregamentoState);
  const [erro, setErro] = useRecoilState(erroState);

  //produtos são trazidos da API na renderização do componente
  useEffect(() => {
    async function buscarProdutos() {
      try {
        const resposta = await fetch("https://fakestoreapi.com/products");
        if (!resposta.ok) {
          throw new Error("Erro ao buscar produtos");
        }
        const dados = await resposta.json();
        setProdutos(dados);
      } catch (erro) {
        setErro(error.message);
      } finally {
        setLoadig(false);
      }
    }
    buscarProdutos();
  }, []);

  return {
    produtos,
    loading,
    erro,
  };
}
