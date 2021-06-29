import React from 'react';
import styled from 'styled-components';
import Product from './Product';

const Home = () => {
  return (
    <Hom>
      <Container>
        <img
          className='homeimg'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video//merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt=''
        />
        <div className='homerow'>
          <Product
            id='12321341'
            title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
            price={2224.68}
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
            rating={5}
          />
          <Product
            id='49538094'
            title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
            price={17729.16}
            image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
            rating={5}
          />
        </div>
        <div className='homerow'>
          <Product
            id='4983850'
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={14835.38}
            image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
            rating={5}
          />

          <Product
            id='23445938'
            title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric'
            price={4343.14}
            image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
            rating={4}
          />

          <Product
            id='3254354345'
            title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
            price={14433.44}
            image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
            rating={3}
          />
        </div>
        <div className='homerow'>
          <Product
            id=''
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={81153.58}
            image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
            rating={4}
          />
        </div>
      </Container>
    </Hom>
  );
};

export default Home;

const Hom = styled.div`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1500px;
`;

const Container = styled.div`
  .homeimg {
    width: 100%;
    z-index: -1;
    margin-bottom: -150px;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }

  .homerow {
    display: flex;
    z-index: 1;
    margin-left: 5px;
    margin-right: 5px;
  }
`;
