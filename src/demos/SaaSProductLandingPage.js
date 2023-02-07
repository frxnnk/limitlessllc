import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/ThreePlans.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SingleCol.js";
import GetStarted from "components/cta/GetStarted";
import Footer from "components/footers/FiveColumnWithBackground.js";
import heroScreenshotImageSrc from "images/hero-screenshot-1.png";
import macHeroScreenshotImageSrc from "images/prototype-illustration.svg";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import { ReactComponent as BriefcaseIcon } from "feather-icons/dist/icons/briefcase.svg";
import { ReactComponent as MoneyIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import PopularAndRecentBlogPosts from "components/blogs/PopularAndRecentBlogPosts";
import ContactUs from "pages/ContactUs";
import SimpleContactUs from "components/forms/SimpleContactUs";

export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-red-600`;
  const HighlightedText = tw.span`text-red-600`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <FeatureWithSteps
        subheading={<Subheading>Los pasos para obtener tu empresa</Subheading>}
        heading={
          <>
            Nuestro proceso es <HighlightedText>muy sencillo</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
            <FAQ
        subheading={<Subheading>FAQS</Subheading>}
        heading={
          <>
            ¿Tenes <HighlightedText>Preguntas ?</HighlightedText>
          </>
        }
        faqs = {[
          {
            question: "¿Qué es una LLC?",
            answer:
            "LLC significa Limited Liability Company, que en español significa Compañía de Responsabilidad Limitada. Es un tipo de estructura empresarial en los Estados Unidos que combina aspectos de una compañía y una sociedad. Ofrece protección limitada a los dueños (llamados miembros) contra responsabilidades financieras, y permite la flexibilidad en la gestión y distribución de ganancias similares a las de una sociedad."
          }, 
          {
            question: "¿Qué servicios ofrece su empresa?",
            answer:
            "Nuestra empresa ofrece servicios de formación de LLC, apertura de cuenta bancaria y diseño web."
            },
            {
            question: "¿Cuánto tiempo se tarda en formar una LLC y abrir una cuenta bancaria?",
            answer:
            "El plazo para formar una LLC y abrir una cuenta bancaria varía, pero generalmente completamos el proceso en 15-20 dias habiles."
            },
            {
            question: "¿Es su equipo experimentado en formación de LLC y apertura de cuentas bancarias?",
            answer:
            "Nuestro equipo es altamente experimentado y conocedor en formación de LLC y apertura de cuentas bancarias, brindando servicios de alta calidad a nuestros clientes."
            },
            {
            question: "¿Qué incluyen cada uno de sus planes de precios?",
            answer:
            "Cada uno de nuestros planes de precios incluye diferentes niveles de servicios, incluyendo formación de LLC, apertura de cuenta bancaria y diseño web. Por favor, consulte nuestra página de precios para obtener más detalles."
            },
            {
            question: "¿Cómo puedo empezar con sus servicios?",
            answer:
            "Para comenzar con nuestros servicios, simplemente seleccione el plan de precios que mejor se adapte a sus necesidades y complete el formulario en línea. Luego, nuestro equipo lo guiará a través del resto del proceso."
            }
        ]}
      />
      <Features
        subheading={<Subheading>Descubri</Subheading>}
        heading={
          <>
            Ventajas de abrir <HighlightedText>tu LLC.</HighlightedText>
          </>
        }
      />
      
      {/* <MainFeature
        subheading={<Subheading>Quality Work</Subheading>}
        imageSrc={heroScreenshotImageSrc}
        imageBorder={true}
        imageDecoratorBlob={true}
      /> */}
      {/* <MainFeature2
        subheading={<Subheading>VALUES</Subheading>}
        heading={
          <>
            We Always Abide by Our <HighlightedText>Principles.</HighlightedText>
          </>
        }
        imageSrc={prototypeIllustrationImageSrc}
        showDecoratorBlob={false}
        features={[
          {
            Icon: MoneyIcon,
            title: "Affordable",
            description: "We promise to offer you the best rate we can - at par with the industry standard.",
            iconContainerCss: tw`bg-green-300 text-green-800`
          },
          {
            Icon: BriefcaseIcon,
            title: "Professionalism",
            description: "We assure you that our templates are designed and created by professional designers.",
            iconContainerCss: tw`bg-red-300 text-red-800`
          }
        ]}
      /> */}
      <PopularAndRecentBlogPosts />
      <Pricing
        subheading={<Subheading>Precios</Subheading>}
        heading={
          <>
            Razonables y  <HighlightedText>flexibles  </HighlightedText>
          </>
        }
        plans={[
          {
            name: "Personal",
            price: "$399.99",

            mainFeature: "Small Businesses",
            features: ["Registro de la empresa", "Employer ID Numbers (EIN) ", "Soporte Basico."]
          },
          {
            name: "Business",
            price: "$499.99",

            mainFeature: "Businesses",
            features: ["Registro de la empresa", "Employer ID Numbers (EIN) ", "Apertura de cuenta bancaria", "Soporte Avanzado."],
            featured: true
          },
          {
            name: "Enterprise",
            price: "$699.99",

            mainFeature: "Companies",
            features: ["Registro de la empresa", "Employer ID Numbers (EIN) ", "Apertura de cuenta bancaria", "Pagina web", "Agente de asistencia personal."],
          }
        ]}
      />
      {/* <Testimonial
        subheading={<Subheading>Testimonials</Subheading>}
        heading={
          <>
            Our Clients <HighlightedText>Love Us.</HighlightedText>
          </>
        }
        testimonials={[
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            heading: "Amazing User Experience",
            quote:
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            customerName: "Charlotte Hale",
            customerTitle: "Director, Delos Inc."
          },
          {
            stars: 5,
            profileImageSrc:
              "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
            heading: "Love the Developer Experience and Design Principles !",
            quote:
              "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            customerName: "Adam Cuppy",
            customerTitle: "Founder, EventsNYC"
          }
        ]}
      /> */}


      <SimpleContactUs></SimpleContactUs>
      <Footer />
    </AnimationRevealPage>
  );
}
