import React from 'react';
import { BannerContainer, BannerContent, BannerTitle, BannerForm, SubmitButton ,Image} from './BigBannerStyle';

const BigBanner = () => {
 

 

  return (
    <BannerContainer >
      
      <BannerContent>
      <Image src='./logo.png'/>
        <BannerTitle>Revolucione sua presença digital e faça sua marca se destacar no mercado!</BannerTitle>
      
      </BannerContent>
      <BannerForm >
        
          <SubmitButton ><a href="https://api.whatsapp.com/send?phone=5534991448794&text=Ol%C3%A1%20gostaria%20de%20conhecer%20os%20servi%C3%A7os%20da%20Wm-Infinity!" target='blank'>Saiba Mais</a></SubmitButton>
        </BannerForm>
    </BannerContainer>
  );
};

export default BigBanner;
