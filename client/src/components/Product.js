import React from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import ProductSection from "./ProductSection";
import Navifix from "./Navifix";
export default function Product(){
const anchors = [ "case", "magnet","album"];

const kindlebg="https://lh3.googleusercontent.com/pw/ACtC-3e3504AxW4pu2UhcMJVgvWt3o1OHAX95PkxPjgvSQzioxAhwhhlBXNlRsPFmV177OS7VPvhK6E3Ep6XVpjIbFPGmgAMWMgiEXcCmhsdsfUaP6iyvSopJyva7L647jEK_BRSUPxIaYwvh9q_iKz7Np2h=w2180";
const kindleurl="https://lh3.googleusercontent.com/pw/ACtC-3dx0KlVAYqOjjHtDQT1cSYWAuf9ZTDB75op9RbXQk70kbWYRgYiUdgIXcKud1s4p2_3SezcnYy4B-VGkG5u6lHuO-D1wkqiFKPY3Fz8XuWJhiEmwBFqjHMvDVeNBP01Mp5bL6DmXHr-PPxUemvK6LpI="
const mgbg="https://lh3.googleusercontent.com/pw/ACtC-3d1MoN20NfN0gSTFQim9T4aTHSj0uu4Wr07IZygxZk_Sq13GQetx_4q2P_QTNVu2V51_ijTMV_3liZ55RR7S4NhqzmEy36hy3zXJB03bkMtBXDqiENF29r9qawajWB1tZ49542XNojVldgEeVsjXfWo=w2180";
const mgurl="https://lh3.googleusercontent.com/pw/ACtC-3c66basnRY_lSN5o3ZPtmk0-0n1yc6CD7S6RpZYj6d2WqUNaxu4UQ48XrobqfIQBbbK_lSVijcq2Mov3fmlPXhuTM1hR8hnWSTFH2FaIRnKW7umytDMUtz-sbyKcMPI52BbFU7aMfwFfaUy7gItCF2e=";
const albg="https://lh3.googleusercontent.com/pw/ACtC-3d-I4vDbF6pzwwoFop26jkdss68t1X2JnHwi8NCtwMkPC_usGREd4_pPhDDh0Ls1KD1OEywymk5LOC5-P5n7N8Zyr5GncLXT6-y_E31tVWgfafOyiSxlQyVzVKVxN0a5R7TANa_HHCdyxIa09FF8ize=w2180";
const alurl="https://lh3.googleusercontent.com/pw/ACtC-3d6Da7x1_OULblEZ-7ggfUL-xfGdxee-kQiDLs53e6VpK64ppY9_vtA1y643K5irwyDojpdqPyIw-JdfP9UimecZXfkukZRo-h5pHttArjQR6ZU0K0Js04dVpmC_26fE-kMldbYa5Yxw1NTFKcJ6oia=";

  return (
    <div>
      <Navifix />
    <ReactFullpage
      anchors={anchors}
      navigation
      navigationTooltips={anchors}
      sectionsColor={[ "#ff5f45", "#0798ec","#161d6f"]}
      onLeave={(origin, destination, direction) => {
        console.log("onLeave event", { origin, destination, direction });
      }}
      render={({ state, fullpageApi }) => {
        console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

        return (
          <div>
            <ProductSection content={"Kindle Case"} imgurl={kindleurl} bg={kindlebg} ftcolor={"#ff5f45"} />
            <ProductSection content={"Fridge Magnet"} imgurl={mgurl} bg={mgbg} ftcolor={"#0798ec"} />
              <ProductSection content={"Album"} imgurl={alurl} bg={albg} ftcolor={"#161d6f"} />
          </div>
        );
      }}
    />
    </div>
  );
}
