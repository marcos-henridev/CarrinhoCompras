import { useRecoilState, useRecoilValue } from "recoil";
import { useBuscarCep } from "../../customizedHook/useViaCep";
import {
  cepState,
  enderecoState,
  erroStateCep,
  loadingCepState,
  
} from "../../utils/atom";
import { P } from "../carrinho/style";

function CepSeach() {
  const [cep, setCep] = useRecoilState(cepState);

  const { endereco, erro, loading, buscarCep } = useBuscarCep();
  return (
    <section className="h-full ">
      <h1 className="font-bold mb-3 border-b">Localidade</h1>
      <input
        className="border p-2 w-[80%]"
        type="text"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder="Digite aqui seu CEP"
      />
      <button
        className="border w-9%  border-l-0 hover:bg-gray-200 p-2"
        onClick={buscarCep}
      >
        Enviar
      </button>

      {endereco && (
        <div className=" h-full mt-3">
          <ul className="flex flex-col h-full">
            <li>Rua: {endereco.logradouro}</li>
            <li>
              Localidade: {endereco.estado} - {endereco.uf}
            </li>
            <li>
              Estado: {endereco.localidade} 
            </li>
            <li>Região: {endereco.regiao}</li>
          </ul>
        </div>
      )}
    </section>
  );
}
("");
export default CepSeach;
