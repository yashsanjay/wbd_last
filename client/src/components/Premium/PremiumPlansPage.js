// PremiumPlansPage.js

import React from 'react';
import './PremiumPlanCard.css'




const PlanSelectionPage = () => {
  return (
    <div className="plan-table bg-white u-position--relative u-p-v--30 width-per--88 u-b-center">
      <div className="table-heading text-charcoal-grey u-p-b--30">
        <div className="u-text--bold text-large u-m-b--8 u-l-h--24" style={{margin:"35px"}}>
          Opiherbs  Healthcare Plan
        </div>
      </div>
      <div style={{alignContent:'center',alignItems:"center"}}>
      <table className="table-body width-per--100" style={{width:"80vw",marginLeft:"10vw",marginRight:"10vw"}}>
        <tbody>
          <tr className="u-border-bottom--paleGrey">
            <td className="text-epsilon text-left u-p-v--20" width="30%">
              <div className="u-text--bold">Opiherbs Premium Benefits:</div>
              <div className="u-m-t--4">Experience continuous care with unlimited consultations</div>
            </td>
            <td className="u-p-v--20 u-pos--rel">
        
              <div className="text-beta u-text--bold">1 month plan</div>
              <div className="text-epsilon text-gre">Covers 1 Adult</div>
            </td>
            <td className="u-p-v--20 u-pos--rel">
              <div className="text-beta u-text--bold">3 months plan</div>
              <div className="text-epsilon text-gre">Covers 1 Adult</div>
            </td>
            <td className="u-p-v--20 u-pos--rel">
              <div className="text-beta u-text--bold">Annual Plan</div>
              <div className="text-epsilon text-gre">Covers 1 Adult</div>
            </td>
          </tr>
          <tr className="u-border-bottom--paleGrey">
            <td className="u-p-v--12 u-align--vm text-delta" width="28%" >
              <div className="u-columns u-ten u-align--vt"><span className="u-columns u-align--vt text-gre width-per--5">•</span> 24/7 access to doctors across all specialities</div>
            </td>
            <td className="u-p-v--12 u-align--vm" width="24%">
              <img alt="tick" src="https://www.practostatic.com/subscriptions/images/landingpage/tick-mark.svg" style={{ width: '24px' }} />
            </td>
            <td className="u-p-v--12 u-align--vm" width="24%">
              <img alt="tick" src="https://www.practostatic.com/subscriptions/images/landingpage/tick-mark.svg" style={{ width: '24px' }} />
            </td>
            <td className="u-p-v--12 u-align--vm" width="24%">
              <img alt="tick" src="https://www.practostatic.com/subscriptions/images/landingpage/tick-mark.svg" style={{ width: '24px' }} />
            </td>
          </tr>
          <tr className="u-border-bottom--paleGrey">
            <td className="u-p-v--12 u-align--vm text-delta" width="28%">
              <div className="u-columns u-ten u-align--vt"><span className="u-columns u-align--vt text-gre width-per--5">• </span> Consult for full family by mentioning the patient name before the consultation</div>
            </td>
            <td className="u-p-v--12 u-align--vm" width="24%">
              <img alt="tick" src="https://www.practostatic.com/subscriptions/images/landingpage/tick-mark.svg" style={{ width: '24px' }} />
            </td>
            <td className="u-p-v--12 u-align--vm" width="24%">
              <img alt="tick" src="https://www.practostatic.com/subscriptions/images/landingpage/tick-mark.svg" style={{ width: '24px' }} />
            </td>
            <td className="u-p-v--12 u-align--vm" width="24%">
              <img alt="tick" src="https://www.practostatic.com/subscriptions/images/landingpage/tick-mark.svg" style={{ width: '24px' }} />
            </td>
          </tr>
          <tr className="u-border-bottom--paleGrey">
            <td className="u-p-v--12 u-align--vm text-delta" width="28%">
              <div className="u-columns u-ten u-align--vt"><span className="u-columns u-align--vt text-gre width-per--5">• </span> Connect faster with top doctors over non-Plus plan users</div>
            </td>
            <td className="u-p-v--12 u-align--vm" width="24%">
              <img alt="tick" src="https://www.practostatic.com/subscriptions/images/landingpage/tick-mark.svg" style={{ width: '24px' }} />
            </td>
            <td className="u-p-v--12 u-align--vm" width="24%">
              <img alt="tick" src="https://www.practostatic.com/subscriptions/images/landingpage/tick-mark.svg" style={{ width: '24px' }} />
            </td>
            <td className="u-p-v--12 u-align--vm" width="24%">
              <img alt="tick" src="https://www.practostatic.com/subscriptions/images/landingpage/tick-mark.svg" style={{ width: '24px' }} />
            </td>
          </tr>
          <tr>
            <td className="u-p-t--20 u-align--vm" width="27%"></td>
            <td className="u-p-t--20 u-align--vm" width="24%">
              <div className="footer-text">
                <div>
                  <span className="text-gre u-text--striked text-beta u-m-r--8">₹3,000</span>
                  <span className="text-alpha u-text--bold">₹1,199</span>
                  <span className="text-zeta u-align--vtt">/ month</span>
                </div>
                <div className="text-green u-m-t--4 text-delta u-text--bold">Save 60%</div>
                
              </div>
              <button className="bg-purple u-text--bold text-epsilon text-white u-border-radius--4  width-per--70  u-p-v--12 u-cur--ptr u-m-t--20">Buy Plan</button>
            </td>
            <td className="u-p-t--20 u-align--vm" width="24%">
              <div className="footer-text">
                <div>
                  <span className="text-gre u-text--striked text-beta u-m-r--8">₹9,000</span>
                  <span className="text-alpha u-text--bold">₹2,699</span>
                  <span className="text-zeta u-align--vtt">/ 3 months</span>
                </div>
                <div className="text-green u-m-t--4 text-delta u-text--bold">Save 70%</div>
               
              </div>
              <button className="bg-purple u-text--bold text-epsilon text-white u-border-radius--4  width-per--70  u-p-v--12 u-cur--ptr u-m-t--20">Buy Plan</button>
            </td>
            <td className="u-p-t--20 u-align--vm" width="24%">
              <div className="footer-text">
                <div>
                  <span className="text-gre u-text--striked text-beta u-m-r--8">₹36,000</span>
                  <span className="text-alpha u-text--bold">₹5,499</span>
                  <span className="text-zeta u-align--vtt">/ year</span>
                </div>
                <div className="text-green u-m-t--4 text-delta u-text--bold">Save 85%</div>
               
              </div>
              <button className="bg-purple u-text--bold text-epsilon text-white u-border-radius--4  width-per--70  u-p-v--12 u-cur--ptr u-m-t--20">Buy Plan</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <div className="bottom-bar u-p--4 bg-white u-pos--abs"></div>
    </div>
  );
};

export default PlanSelectionPage;
