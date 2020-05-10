{
  /* Component to manipulate how ads should be display */
}

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { generateRandomNumbers } from "../common/utils";
import { BASE_URL } from "../common/config";
import { setPreviousAdsId } from "../redux/actions";

function Ads() {
  const previousAdsId = useSelector((state) => state.product.previousAdsId);
  const [adsId, setAdsId] = useState(0);
  const dispatch = useDispatch();
  const [loadingAds, setLoadingAds] = useState(true);
  useEffect(() => {
    let randomAdsId = 0;
    do {
      randomAdsId = generateRandomNumbers(1, 1000);
      setAdsId(randomAdsId);
      dispatch(setPreviousAdsId(parseInt(randomAdsId)));
      setLoadingAds(false);
    } while (previousAdsId === randomAdsId);
  }, []);

  return (
    <div className="col-md-12 text-center ads">
      {loadingAds && <div>Loading...</div>}
      {!loadingAds && adsId && <img src={BASE_URL + "ads/?r=" + adsId} />}
    </div>
  );
}

export default Ads;
