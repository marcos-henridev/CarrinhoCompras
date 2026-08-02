import { useRecoilState } from "recoil";
import { useBuscarCep } from "../../customizedHook/useViaCep";
import { cepState } from "../../utils/atom";
import { Address, AddressList, Button, Input, Section, Title } from "./style";

function CepSeach() {
  const [cep, setCep] = useRecoilState(cepState);

  const { endereco, buscarCep } = useBuscarCep();
  return (
    <Section>
      <Title>Localidade</Title>
      <Input
        type="text"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        placeholder="Digite aqui seu CEP"
      />
      <Button onClick={buscarCep}>
        Enviar
      </Button>

      {endereco && (
        <Address>
          <AddressList>
            <li>Rua: {endereco.logradouro}</li>
            <li>
              Localidade: {endereco.estado} - {endereco.uf}
            </li>
            <li>
              Estado: {endereco.localidade} 
            </li>
            <li>Região: {endereco.regiao}</li>
          </AddressList>
        </Address>
      )}
    </Section>
  );
}
export default CepSeach;
