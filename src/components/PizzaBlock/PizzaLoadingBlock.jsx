import React from 'react';
import ContentLoader from 'react-content-loader';

function PizzaLoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="420" y="302" rx="6" ry="6" width="52" height="6" />
      <circle cx="138" cy="145" r="114" />
      <rect x="1" y="280" rx="6" ry="6" width="280" height="26" />
      <rect x="1" y="319" rx="6" ry="6" width="280" height="84" />
      <rect x="21" y="417" rx="6" ry="6" width="63" height="31" />
      <rect x="139" y="410" rx="20" ry="20" width="140" height="43" />
    </ContentLoader>
  );
}

export default PizzaLoadingBlock;
