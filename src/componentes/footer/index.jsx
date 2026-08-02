import facebook from "../../assets/icons8-f-do-facebook-50.png";
import instagram from "../../assets/icons8-instagram-100.png";
import phone from "../../assets/icons8-mensagem-preenchida-50.png";
import email from "../../assets/icons8-telefone-50.png";
import {
  Company,
  Contact,
  ContactIcon,
  ContactRow,
  Copyright,
  Description,
  FacebookIcon,
  Footer,
  Heading,
  InstagramIcon,
  ProductList,
  Products,
  Subheading,
} from "./style";
function RodaPe() {
  return (
    <>
      <Footer>
        <Company>
          <Heading>Company Name</Heading>
          <Description>
            Nossa empresa nasceu como um pequeno projeto, construído com
            dedicação e vontade de oferecer algo especial. Desde o início,
            acreditamos que a qualidade deve estar sempre em primeiro lugar,
            cuidando de cada detalhe para proporcionar confiança, satisfação e
            uma ótima experiência aos nossos clientes.
          </Description>
        </Company>
        <Products>
          <Subheading>Products</Subheading>
          <ProductList>
            <li>MDBootstrap</li>
            <li>MDWordPress</li>
            <li>BrandFlow</li>
            <li>Bootstrap Angular</li>
          </ProductList>
        </Products>
        <Contact>
          <Subheading>Contact</Subheading>
          <ContactRow>
            {" "}
            <ContactIcon src={phone} alt="" />
            <p>exemplo@gmail.com</p>
          </ContactRow>
          <ContactRow>
            <ContactIcon src={email} alt="" />
            <p>+1 233 675 22</p>
          </ContactRow>
        </Contact>
      </Footer>
      <Copyright>
        © 2026 Copyright: MDBootstrap.com
        <InstagramIcon src={instagram} alt="" />
        <FacebookIcon src={facebook} alt="" />
      </Copyright>
    </>
  );
}
export default RodaPe;
