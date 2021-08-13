import Head from 'next/head';
// import Link from 'next/link';
import { useEffect } from 'react';
// import { useI18n } from 'next-localization';
//import { getPublicUrl } from 'lib/util';
import {
  Placeholder,
  // VisitorIdentification,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideSitecoreContextValue } from 'lib/component-props';

//import CcaHead from 'components/cca/CcaHead'

// import CcaHead from 'components/cca/CcaHead'

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
//const publicUrl = getPublicUrl();
 

type LayoutProps = {
  context: StyleguideSitecoreContextValue;
};

const CcaLayout = ({ context }: LayoutProps): JSX.Element => {
  const { updateSitecoreContext } = useSitecoreContext({ updatable: true });

  // Update Sitecore Context if layoutData has changed (i.e. on client-side route change).
  // Note the context object type here matches the initial value in [[...path]].tsx.
  useEffect(() => {
    updateSitecoreContext && updateSitecoreContext(context);
  }, [context]);

  const { route } = context;

  return (
    <>
      <Head>
        {/* <CcaHead /> */}
      </Head>

      {/* <Header /> */}

      {/* Page Content */}
      <div className="frame" style={{ backgroundColor: "#fcf9f4", paddingBottom: "18px", float: "none" }}>

        <div className="g-hero g-hero--above-fold-pad g-hero--split-text g-hero--new-fonts" data-id="g-hero">
          <div className="g-hero__inner">
            <div className="g-hero__text">
              <div className="txt-container">
                <h1>
                  <div role="main">Hello Toronto!</div>
                </h1>
                <p>It's our pleasure to serve you</p>
              </div>
              <div className="btn-container">
                <a href="/menu" className="btn-round btn-round--red" title="View the menu" id="HeroGTAlinkone" >View the menu</a>
                <a href="/locations" className="btn-round btn-round--white btn-round-last" title="View our locations" id="HeroGTAlinktwo" >View our locations</a>			</div>
            </div>
          </div>

          <div style={{
            backgroundImage: `url('https://d3oz09jk0dq1kk.cloudfront.net/Images/CFACA/Homepage%20Images/Canada-Mobile-new.jpg')`
          }}
            className="g-hero__img g-hero__img--mobile">
          </div>
          <div style={{
            backgroundImage: `url('https://d3oz09jk0dq1kk.cloudfront.net/Images/CFACA/Homepage%20Images/Canada-Desktop-new.jpg')`
          }}
            className="g-hero__img g-hero__img--desktop">
          </div>
        </div>

        {/* root placeholder for the app, which we add components to using route data */}
        <div className="container " style={{ marginTop: "12px", backgroundColor: "#fcf9f4" }}>
          <Placeholder name="jss-main" rendering={route} />
        </div>

        <div className="clearfix"></div>

      </div>

      {/* <Footer /> */}

      <script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossOrigin="anonymous"></script>

      <script src="https://d2wl1kt18tqdum.cloudfront.net/v2.1.1292-stageb/Assets/Theming/js/vendor-js.js"></script>
      <script src="https://d2wl1kt18tqdum.cloudfront.net/v2.1.1292-stageb/Assets/Theming/js/CFACom.js"></script>
      <script src="https://d2wl1kt18tqdum.cloudfront.net/v2.1.1292-stageb/Assets/Theming/js/cfacanada-js-default.js"></script>

      <div id="defaultsiteoverlay" className="lightbox mfp-hide"></div>
      <div className="rt-placeholder hidden"></div>
      <input type="hidden" id="geoLocation" value="false" />
    </>
  );
};


export default CcaLayout;
