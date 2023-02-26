import React from "react";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import Footer from "components/footers/FiveColumnWithBackground.js";
import SimpleContactUs from "components/forms/SimpleContactUs";
import { useAuth0 } from "@auth0/auth0-react";
import WyomingForm from "components/forms/WyomingForm";

export default () => {
  
    const LogoutButton = () => {
        const { logout } = useAuth0();
        return (
          <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </button>
        );
      };

      const Profile = () => {
        const { user, isAuthenticated, isLoading } = useAuth0();
      
        if (isLoading) {
          return <div>Loading ...</div>;
        }
      
        return (
          isAuthenticated && (
            <div>
              <h2>{user.name}</h2>
            </div>
          )
        );
      };
        
  return (
    <AnimationRevealPage>
      <LogoutButton />
      <Profile />
      <WyomingForm></WyomingForm>
      <Footer />
    </AnimationRevealPage>
  );
}
