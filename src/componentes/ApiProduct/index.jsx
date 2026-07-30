import { resumeToPipeableStream } from "react-dom/server";
import { useProdutos } from "../../customizedHook/useProdutos";
import { P } from "../carrinho/style";
import { useModalProduct } from "../../customizedHook/useModalProduct";

function ApiProduct() {
  const unModal = useModalProduct();
  const { produtos, loading, erro } = useProdutos();

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (erro) {
    return <p>{erro}</p>;
  }

  return (
    <>
      <div
        onClick={unModal.ModalVerify}
        className="fixed inset-0    bg-black/40 backdrop-blur-sm"
      ></div>
      <section
        className=" absolute
        left-1/2
        top-1/2
        w-4/5
        max-h-[70vh]
        -translate-x-1/2
        -translate-y-1/4     
        rounded-[10px]
        overflow-y-auto"
      >
        {produtos.map((item) => (
          <div
            className="rounded-[10px] mb-1 flex bg-white items-center h-[180px] gap-9 pl-10"
            key={item.id}
          >
            <img src={item.image} alt={produtos.title} width="100" />
            <h2>{item.title}</h2>
            <span className="bg-amber-400 font-extrabold">R$ {item.price}</span>
          </div>
        ))}
      </section>
    </>
  );
}

export default ApiProduct;
