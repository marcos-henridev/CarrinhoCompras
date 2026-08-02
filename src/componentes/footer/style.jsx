import styled from "@emotion/styled";

export const Footer = styled.footer`
  width: 70%;
  display: grid;
  grid-template-columns: 300px 200px 200px;
  justify-content: space-between;
  margin: auto auto 0;
  padding: 1.5rem;
  color: #d5d7d8;
`;

export const Company = styled.div``;

export const Heading = styled.h1`
  font-size: 20px;
  font-weight: 800;
  text-align: left;
`;

export const Description = styled.p`
  margin-top: 1.25rem;
  font-size: 14px;
  line-height: 1.75rem;
  letter-spacing: -0.025em;
  text-align: justify;
`;

export const Products = styled.div``;

export const Subheading = styled.h3`
  font-size: 20px;
  font-weight: 800;
  text-align: left;
`;

export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.25rem;
  font-size: 14px;
  text-align: left;
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 14px;
`;

export const ContactRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const ContactIcon = styled.img`
  height: 1rem;
`;

export const Copyright = styled.div`
  width: 70%;
  display: flex;
  margin: 0 auto;
  padding: 0.75rem;
  border-top: 1px solid #535557;
  color: #d5d7d8;
  font-size: 14px;
`;

export const InstagramIcon = styled.img`
  height: 1.5rem;
  margin-left: auto;
`;

export const FacebookIcon = styled.img`
  height: 1.5rem;
`;
