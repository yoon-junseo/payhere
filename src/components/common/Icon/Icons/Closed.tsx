import React from 'react';

const Closed = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={props.color ?? '#000000'}
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
    >
      <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 16.292969 8.2929688 L 10 14.585938 L 7.7070312 12.292969 L 6.2929688 13.707031 L 10 17.414062 L 17.707031 9.7070312 L 16.292969 8.2929688 z" />
    </svg>
  );
};

export default Closed;
