import { useEffect, useState } from "react";
import {
  cepState,
  enderecoState,
  erroStateCep,
  loadingCepState,
} from "../utils/atom";
import { useRecoilState, useRecoilValue } from "recoil";

export function useBuscarCep() {
  const cep = useRecoilValue(cepState);
  const [endereco, setEndereco] = useRecoilState(enderecoState);
  const [erro, setErro] = useRecoilState(erroStateCep);
  const [loading, setLoading] = useRecoilState(loadingCepState);

  async function buscarCep(event) {
    event.preventDefault();

    // Remove traços, espaços e outros caracteres
    const cepLimpo = cep.replace(/\D/g, "");

    // if (cepLimpo.length !== 8) {
    //   setErro("Digite um CEP com 8 números.");
    //   return;
    // }
    ///////////////////
    try {
      setLoading(true);
      setErro("");

      const chamada = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      if (!chamada.ok) {
        throw new Error("ENDEREÇO NÃO ENCONTRADO");
      }
      const dados = await chamada.json();
      if (dados.erro) {
        throw new Error("cep nao encontrado");
      }
      setEndereco(dados);
    } catch (erro) {
      setErro(erro.message);
      setEndereco(null);
    } finally {
      setLoading(false);
    }
  }
  return {
    buscarCep,
    endereco,
    erro,
    loading,
  };
}
