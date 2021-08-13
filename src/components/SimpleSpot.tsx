import { Text, Field, Image, RichText, ImageField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
// import { SitecoreContextValue } from 'lib/component-props';
import { StyleguideComponentProps } from 'lib/component-props';

type SimpleSpotProps = StyleguideComponentProps & {
  fields: {
    heading: Field<string>;
    image: ImageField;
    link: LinkField;  
    bodytext: Field<string>;
  };
}

const SimpleSpot = (props: SimpleSpotProps): JSX.Element => (
  <div style={{float:"left", height:"600px", marginBottom:"24px"}} className="g-round-card__wrap col-md-6 col-sm-6 col-xs-12">
    <div className="g-round-card ">
      <div className="g-round-card__inner">
        <div className="g-round-card__content">
          <Image style={{height:"305px"}} field={props?.fields?.image} />
          <Text tag="h3" className="g-round-card__heading" field={props?.fields?.heading} />
          <RichText style={{fontSize: "1.6rem"}} field={props?.fields?.bodytext} />
          <span className="g-round-card__foot">
            <a style={{color:"Red"}} href={props?.fields?.link.value.href}>Read more</a>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default SimpleSpot;
