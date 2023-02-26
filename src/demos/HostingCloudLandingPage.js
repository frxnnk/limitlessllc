import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import MainFeature from "components/features/TwoColWithButton.js";
import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";
import Footer from "components/footers/FiveColumnDark.js";
import serverRedundancyIllustrationImageSrc from "images/server-redundancy-illustration.svg"
import serverSecureIllustrationImageSrc from "images/server-secure-illustration.svg"
import TwoColContactUsWithIllustrationFullForm from "components/forms/WyomingForm";


export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <Features />
      <Pricing />
      <MainFeature 
        subheading="Expertise"
        heading="Our Team's Expertise: Providing Top-Quality Services"
        imageSrc={serverRedundancyIllustrationImageSrc}
        buttonRounded={false}
        description = "Our team consists of highly skilled professionals who have a deep understanding of the legal and financial requirements for LLC formation and bank account opening. This expertise enables us to provide our clients with the best possible service and guidance."
      />
      <MainFeature 
        subheading="Convenience"
        heading="Simplifying Business Management: All-in-One Solution"
        imageSrc={serverSecureIllustrationImageSrc}
        buttonRounded={false}
        textOnLeft={false}
        description = "We understand that starting and maintaining a business can be a complex and time-consuming process. That's why we offer a one-stop solution that covers all of the necessary services, including LLC formation, bank account opening, web design, and ongoing support. This makes it easier and more convenient for our clients to manage their business, so they can focus on what they do best."
      />
      {/* <Testimonial /> */}
      <FAQ />
      <TwoColContactUsWithIllustrationFullForm />
      <Footer />
    </AnimationRevealPage>
  );
}
