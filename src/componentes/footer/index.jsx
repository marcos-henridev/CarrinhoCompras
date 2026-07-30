import facebook from "../../assets/icons8-f-do-facebook-50.png";
import instagram from "../../assets/icons8-instagram-100.png";
import phone from "../../assets/icons8-mensagem-preenchida-50.png";
import email from "../../assets/icons8-telefone-50.png";
function RodaPe() {
  return (
    <>
      <footer className="p-6   text-[#d5d7d8]  mt-auto  grid grid-cols-[300px_200px_200px]  w-[70%] mx-auto justify-between">
        <div>
          <h1 className="font-extrabold text-[20px] text-left">Company Name</h1>
          <p className="text-[14px] text-justify mt-5 tracking-tight leading-7">
            Nossa empresa nasceu como um pequeno projeto, construído com
            dedicação e vontade de oferecer algo especial. Desde o início,
            acreditamos que a qualidade deve estar sempre em primeiro lugar,
            cuidando de cada detalhe para proporcionar confiança, satisfação e
            uma ótima experiência aos nossos clientes.
          </p>
        </div>
        <div className="">
          <h3 className="font-extrabold text-[20px] text-left">Products</h3>
          <ul className="text-[14px] text-left mt-5 flex flex-col gap-6">
            <li>MDBootstrap</li>
            <li>MDWordPress</li>
            <li>BrandFlow</li>
            <li>Bootstrap Angular</li>
          </ul>
        </div>
        <div className="flex flex-col text-[14px] gap-6">
          <h3 className="  font-extrabold text-left text-[20px]">Contact</h3>
          <div className="flex gap-5 items-center ">
            {" "}
            <img className="h-4" src={phone} alt="" />
            <p>exemplo@gmail.com</p>
          </div>
          <div className="flex gap-5 items-center">
            <img className="h-4" src={email} alt="" />
            <p>+1 233 675 22</p>
          </div>
        </div>
      </footer>
      <div className="w-[70%] flex text-[14px] mx-auto p-3 text-[#d5d7d8] border-t border-[#535557] ">
        © 2026 Copyright: MDBootstrap.com
        <img className="h-6 ml-auto" src={instagram} alt="" />
        <img className="h-6" src={facebook} alt="" />
      </div>
    </>
  );
}
export default RodaPe;
