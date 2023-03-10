import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings.js";

import defaultCardImage from "../../images/shield-icon.svg";

import { ReactComponent as SvgDecoratorBlob3 } from "../../images/svg-decorator-blob-3.svg";

import SupportIconImage from "../../images/support-icon.svg";
import ShieldIconImage from "../../images/shield-icon.svg";
import CustomizeIconImage from "../../images/customize-icon.svg";
import FastIconImage from "../../images/fast-icon.svg";
import ReliableIconImage from "../../images/reliable-icon.svg";
import SimpleIconImage from "../../images/simple-icon.svg";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-xl mx-auto py-20 md:py-24`}
`;
const Heading = tw(SectionHeading)`w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 px-6 flex`}
`;

const Card = styled.div`
  ${tw`flex flex-col mx-auto max-w-xs items-center px-6 py-10 border-2 border-dashed border-indigo-700 rounded-lg mt-12`}
  .imageContainer {
    ${tw`border-2 border-blue-800 text-center rounded-full p-6 flex-shrink-0 relative`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .textContainer {
    ${tw`mt-6 text-center`}
  }

  .title {
    ${tw`mt-2 font-bold text-xl leading-none text-blue-800`}
  }

  .description {
    ${tw`mt-3 font-semibold text-secondary-100 text-sm leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default () => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component):
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const cards = [
    {
    title: "Reducci??n de impuestos",
    description: "Registrar una LLC en los Estados Unidos como extranjero, puedes aprovechar las beneficargas fiscales del sistema tributario estadounidense y reducir la carga fiscal."
    },
    {
    title: "Protecci??n de activos personales",
    description: "Separar tus finanzas personales de las de la empresa, puedes proteger tus bienes y reducir el riesgo de responsabilidad ante demandas o deudas."
    },
    {
    title: "Mejor acreditaci??n crediticia",
    description: "Registrar una LLC en los Estados Unidos permite proyectar una imagen profesiony de mayor calidad, mejorando tu cr??dito y aumentando las oportunidades de financiamiento."
    },
    {
    title: "Mayor flexibilidad en la gesti??n de la empresa",
    description: "Tener una LLC, puedes tener una mayor libertad en la toma de decisiones y la gesti??n de tu negocio, impulsando su crecimiento y ??xito."
    },
    {
    title: "Mayor acceso a financiamiento y oportunidades de inversi??n",
    description: "Puedes acceder a una amplia gama de financiamiento y oportunidades de inversi??n, impulsando el crecimiento y ??xito de tu negocio."
    },
    {
    title: "Lanzamiento de tu e-commerce a nivel mundial",
    description: "Expandi tu negocio a un p??blico global trav??s de internet, impulsando tus ventas y crecimiento empresarial."
    }
  ];

  return (
    <Container>
      <ThreeColumnContainer>
        <Heading>??Por qu?? <span tw="text-blue-800">crear una LLC?</span></Heading>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              {/* <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span> */}
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud. Sic Semper Tyrannis. Neoas Calie artel."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
