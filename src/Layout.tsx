import Head from 'next/head';
// import Link from 'next/link';
import { useEffect } from 'react';
// import { useI18n } from 'next-localization';
import { getPublicUrl } from 'lib/util';
import {
  Placeholder,
  // VisitorIdentification,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideSitecoreContextValue } from 'lib/component-props';

// Prefix public assets with a public URL to enable compatibility with Sitecore Experience Editor.
// If you're not supporting the Experience Editor, you can remove this.
const publicUrl = getPublicUrl();

const Header = () => {
  // const { t } = useI18n();

  return (
    <div className=""> 
      <div className="header-frame" data-sticky-position="true" data-sticky-priority="1">
        <header data-component="MainNav">
          <div className="nav-frame">
            <div className="header-components flex">

              <a href="/" className="icon-logo-desktop logo"><span>Chick-fil-A</span></a>
 
              <div className="location-tools">
                <div className="current-location" data-populate="current-location-menu-id">
                  <a href="#">
                    <span className="icon-location-off"></span>
                  </a>
                </div>
              </div>
              {/* fontWeight:"600",  */}
              <div className="store-name " style={{ fontSize: "1.5rem", color: "red", whiteSpace: "nowrap", fontFamily: "apercu,sans-serif" }}>
                <a style={{ color: "red" }} href="/locations">Locations</a>
              </div>

              <div className="nav-toggle" data-component="NavToggle">
                <a data-action="toggle nav" href="#" className="icon-nav-toggle-off">
                  <span>Close Main Nav</span>
                </a>
              </div>

              <nav className="main-nav" role="dialog" aria-label="Main menu">
                <ul className="flex no-search">
                  <li id="navitem-menu" className="navitem-hoverable navitem-hoverable--menu">
                    <a href="/menu" className="off-screen" title="Food"> <span>Food</span>
                      <span className="icon-arrow-down" aria-expanded="false"></span>
                    </a>
                    <div className="subnav">
                      <ul>
                        <li>
                          <a href="/menu#breakfast" className="ms-link" title="Breakfast">Breakfast</a>
                        </li>
                        <li>
                          <a href="/menu#entr&#233;es" className="ms-link" title="Entr&#233;es">Entr&#233;es</a>
                        </li>
                        <li>
                          <a href="/menu#salads" className="ms-link" title="Salads">Salads</a>
                        </li>
                        <li>
                          <a href="/menu#sides" className="ms-link" title="Soups and sides">Soups &amp; Sides</a>
                        </li>
                        <li>
                          <a href="/menu#treats" className="ms-link" title="Dessert">Dessert</a>
                        </li>
                        <li>
                          <a href="/menu#beverages" className="ms-link" title="Beverages">Beverages</a>
                        </li>
                        <li>
                          <a href="/menu#sauces" className="ms-link" title="Sauces">Sauces</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </nav>

            </div>
          </div>
        </header>
      </div>

    </div>
  );
};

const Footer = () => {
  return (
    <div className="float-none">
      <div className="footer" style={{ float: "none" }}>
        <footer>
          <div className="footer-modules" style={{ float: "none" }}>
            <nav className="footer-nav" aria-label="footer navigation">
              <div style={{ float: "none", clear: "both", width: "100%", textAlign: "center" }}>
                <ul>
                  <li>
                    <a href="/contact-support" title="Customer service" >
                      <span>Customer service</span>
                    </a>
                  </li>
                  <li>
                    <a href="/nutrition-allergens" title="Nutrition &amp; Allergens" >
                      <span>Nutrition &amp; Allergens</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.chick-fil-a.com/franchising/franchise" title="Franchising" >
                      <span>Franchising</span>
                    </a>
                  </li>
                  <li>
                    <a href="/employment-opportunities-with-chick-fil-a-canada-ulc" title="Corporate Careers" >
                      <span>Corporate Careers</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div style={{ float: "none", clear: "both", width: "100%", textAlign: "center" }}>
                <ul className="footer-sub-nav">
                  <li>
                    <a href="/press-room" title="Press room" >
                      <span>Press room</span>
                    </a>
                  </li>
                  <li>
                    <a href="/legal#privacy_policy" title="Legal" >
                      <span>Legal</span>
                    </a>
                  </li>
                  <li>© 2019-2021 CFA Properties, Inc. All rights reserved.</li>
                </ul>
              </div>
            </nav>
            <div className="social">

            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}


type LayoutProps = {
  context: StyleguideSitecoreContextValue;
};

const Layout = ({ context }: LayoutProps): JSX.Element => {
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
        <title>
          {(route.fields && route.fields.pageTitle && route.fields.pageTitle.value) || 'Page'}
        </title>
        <link rel="icon" href={`${publicUrl}/favicon.ico`} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="Chick-fil-A" />
        <meta name="description" content="Since 1964, Chick-fil-A has been the home of the Original Chicken Sandwich with two pickles on a toasted butter bun. Check out our full menu, and order pickup or delivery today." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
        <link href={`${publicUrl}/cfacanada.css`} rel="stylesheet" type="text/css" />
        <link href={`${publicUrl}/cfacom.css`} rel="stylesheet" type="text/css" />
        <script src={`${publicUrl}/getexptype.js`}></script>
      </Head>

      <Header />

      {/* Page Content */}
      <div className="frame" style={{ backgroundColor: "#fcf9f4", paddingBottom: "18px", float: "none" }}>

        <div className="g-hero g-hero--above-fold-pad g-hero--split-text g-hero--new-fonts" data-id="g-hero">
          <div className="g-hero__inner">
            <div className="g-hero__text">
              <div className="txt-container">
                <h1>
                  <div role="main">Hello Toronto</div>
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

      <Footer />

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


export default Layout;
