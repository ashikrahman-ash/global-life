import React from 'react';
import ContentLoader from 'react-content-loader';

const CardLoader = () => {
  return (
      <div>
          <ContentLoader speed={2} width={460} height={460} viewBox="0 0 460 460" backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
              <rect x="1" y="260" rx="2" ry="2" width="50" height="8" />
              <rect x="-41" y="330" rx="2" ry="2" width="140" height="10" />
              <rect x="5" y="-1" rx="2" ry="2" width="350" height="250" />
              <rect x="-2" y="279" rx="2" ry="2" width="350" height="15" />
              <rect x="64" y="260" rx="2" ry="2" width="50" height="7" />
              <rect x="130" y="260" rx="2" ry="2" width="50" height="7" />
              <rect x="-2" y="305" rx="2" ry="2" width="350" height="15" />
              <rect x="331" y="185" rx="0" ry="0" width="2" height="16" />
          </ContentLoader>
      </div>
  );
};

export default CardLoader;