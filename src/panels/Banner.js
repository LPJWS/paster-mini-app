import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { PromoBanner } from '@vkontakte/vkui';


const Banner = () => {
    const [bannerData, setBannerData] = useState({});
  
    useEffect(() => {
      bridge.send("VKWebAppGetAds").then((bannerInfo) => {
        setBannerData(bannerInfo);
      });
    }, []);
  
    if (Object.keys(bannerData).length === 0) {
      return null;
    }
  
    return <PromoBanner bannerData={bannerData} />;
  }

export default Banner;