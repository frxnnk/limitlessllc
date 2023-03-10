import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/ThreePlans.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import FAQ from "components/faqs/SimpleWithSideImage";
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
import Features from "components/features/DashedBorderSixFeatures";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
import TwoColContactUsWithIllustrationFullForm from "components/forms/WyomingForm";
export default () => {
  const Subheading = tw.span`uppercase tracking-widest font-bold text-blue-800`;
  const HighlightedText = tw.span`text-blue-800`;

  return (
    <AnimationRevealPage>
      <Hero roundedHeaderButton={true} />
      <FeatureWithSteps
        subheading={<Subheading>Los pasos para obtener tu empresa</Subheading>}
        heading={
          <>
            Proceso<HighlightedText> seguro, rapido y facil.</HighlightedText>
          </>
        }
        textOnLeft={false}
        imageSrc={macHeroScreenshotImageSrc}
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      />
            <FAQ
                  imageSrc={customerSupportIllustrationSrc}
                  imageContain={true}
                  imageShadow={false}
                  subheading={<Subheading>FAQS</Subheading>}
                  heading={
                    <>
                      ??Tenes <HighlightedText>Preguntas?</HighlightedText>
                    </>
          
        }
        description="Si no encontras la respuesta a tu pregunta, no dudes en contactarnos."
        faqs = {[
          {
            question: "??Qu?? es una LLC?",
            answer:
            "LLC significa Limited Liability Company, que en espa??ol significa Compa????a de Responsabilidad Limitada. Es un tipo de estructura empresarial en los Estados Unidos que combina aspectos de una compa????a y una sociedad. Ofrece protecci??n limitada a los due??os (llamados miembros) contra responsabilidades financieras, y permite la flexibilidad en la gesti??n y distribuci??n de ganancias similares a las de una sociedad."
          }, 
          {
            question: "??Qu?? servicios ofrece su empresa?",
            answer:
            "Nuestra empresa ofrece servicios de formaci??n de LLC, apertura de cuenta bancaria y dise??o web."
            },
            {
            question: "??Cu??nto tiempo se tarda en formar una LLC y abrir una cuenta bancaria?",
            answer:
            "El plazo para formar una LLC y abrir una cuenta bancaria var??a, pero generalmente completamos el proceso en 15-20 dias habiles."
            }
        ]}
      />
      <Features/>
      
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
        {/* <PopularAndRecentBlogPosts /> */}
      <Pricing
        subheading={<Subheading>Precios</Subheading>}
        heading={
          <>
            Razonables y  <HighlightedText>flexibles  </HighlightedText>
          </>
        }
        plans={[
          {
            name: "Startup",
            price: "$399.99",

            mainFeature: "Startup",
            features: ["Registro de la empresa", "Employer ID Numbers (EIN) ", "Soporte Basico."]
          },
          {
            name: "Business",
            price: "$499.99",

            mainFeature: "Businesses",
            features: ["Registro de la empresa", "Employer ID Numbers (EIN) ", "Apertura de cuenta bancaria", "Soporte Avanzado."],
          },
          {
            name: "Enterprise",
            price: "$699.99",

            mainFeature: "Companies",
            features: ["Registro de la empresa", "Employer ID Numbers (EIN) ", "Apertura de cuenta bancaria", "Pagina web", "Agente de asistencia personal."],
          }
        ]}
      />
      <SimpleContactUs></SimpleContactUs>
     {/*<TwoColContactUsWithIllustrationFullForm></TwoColContactUsWithIllustrationFullForm> */}
      <Footer />
    </AnimationRevealPage>
  );
}
