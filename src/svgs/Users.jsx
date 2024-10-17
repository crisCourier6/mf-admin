import React from 'react';

function UsersIcon({ width, height, fill="#425a6c" }) {
  return (
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={width} height={height}>
	<title>submissions</title>
	<path id="Path 0" className="s0" fill={fill} d="m257.5 0.3c12.6 0.2 26.6 0.9 31 1.6 4.4 0.6 13.6 2.3 20.5 3.7 6.9 1.4 19 4.7 27 7.4 8 2.6 19.7 7.1 26 9.9 6.3 2.9 17.3 8.7 24.4 12.9 7 4.2 17.4 11.1 23 15.3 5.5 4.2 14 11.3 18.9 15.8 4.8 4.4 12.4 12 16.8 16.8 4.5 4.9 11.6 13.4 15.8 18.9 4.2 5.6 11.1 16 15.3 23 4.2 7.1 10 18.1 12.9 24.4 2.8 6.3 7.3 18 9.9 26 2.7 8 6 20.1 7.4 27 1.4 6.9 3.2 18 4 24.8 0.9 6.7 1.6 19.2 1.6 27.7 0 8.5-0.7 21.2-1.5 28.3-0.9 7-2.7 18.3-4.1 25.2-1.4 6.9-4.7 19-7.4 27-2.6 8-7.1 19.7-9.9 26-2.9 6.3-8.7 17.3-12.9 24.4-4.2 7-11.1 17.4-15.3 23-4.2 5.5-11.3 14-15.8 18.9-4.4 4.8-12 12.4-16.8 16.8-4.9 4.5-13.4 11.6-18.9 15.8-5.6 4.2-16 11.1-23 15.3-7.1 4.2-18.1 10-24.4 12.9-6.3 2.8-18 7.3-26 9.9-8 2.7-20.1 6-27 7.4-6.9 1.4-16.6 3.1-21.5 3.8-5.2 0.8-18.4 1.3-31.5 1.3-13.1 0-26.3-0.5-31.5-1.3-4.9-0.7-14.6-2.4-21.5-3.8-6.9-1.4-19-4.7-27-7.4-8-2.6-19.7-7.1-26-9.9-6.3-2.9-17.3-8.7-24.4-12.9-7-4.2-17.4-11.1-23-15.3-5.5-4.2-14-11.3-18.9-15.8-4.8-4.4-12.4-12-16.8-16.8-4.5-4.9-11.6-13.4-15.8-18.9-4.2-5.6-11.1-16-15.3-23-4.2-7.1-10-18.1-12.9-24.4-2.8-6.3-7.3-18-9.9-26-2.7-8-6-20.1-7.4-27-1.4-6.9-3.2-18-4-24.8-0.9-6.7-1.6-19.2-1.6-27.7 0-8.5 0.7-21.2 1.5-28.3 0.9-7 2.7-18.3 4.1-25.2 1.4-6.9 4.7-19 7.4-27 2.6-8 7.1-19.7 9.9-26 2.9-6.3 8.7-17.3 12.9-24.4 4.2-7 11.1-17.4 15.3-23 4.2-5.5 11.3-14 15.8-18.9 4.4-4.8 12-12.4 16.8-16.8 4.9-4.5 13.4-11.6 18.9-15.8 5.6-4.2 16-11.1 23-15.3 7.1-4.2 18.1-10 24.4-12.9 6.3-2.8 18-7.3 26-9.9 8-2.7 20.1-6 27-7.4 6.9-1.4 16.6-3 21.5-3.6 4.9-0.6 9.2-1.4 9.5-1.6 0.2-0.3 10.8-0.3 23.5-0.1zm-46 34.3c-7.2 1.4-19.1 4.6-26.5 7-7.4 2.5-19.8 7.5-27.5 11.3-7.7 3.8-18.7 10-24.5 13.8-5.8 3.8-14 9.7-18.3 13.1-4.2 3.4-11.1 9.5-15.3 13.5-4.2 3.9-11.3 11.5-15.6 16.7-4.4 5.2-11.6 14.9-16 21.5-4.4 6.6-11.1 18.3-14.9 26-3.8 7.7-8.8 20.1-11.3 27.5-2.4 7.4-5.6 19.3-7 26.5-1.5 7.2-3.2 19.5-3.8 27.5-0.9 10.9-0.9 18.5 0 30.5 0.6 8.8 1.9 20.3 2.8 25.5 0.9 5.2 3.1 14.9 4.9 21.5 1.8 6.6 4.8 15.8 6.6 20.5 1.8 4.7 6.3 14.4 9.9 21.5 3.7 7.1 9 16.6 12 21 2.9 4.4 8.1 11.5 11.4 15.7 3.4 4.3 6.3 7.8 6.6 7.8 0.3 0 1.8-4.4 3.5-9.7 1.6-5.4 5-14.3 7.5-19.8 2.6-5.5 6.8-13.6 9.5-18 2.7-4.4 6.9-10.7 9.3-14 2.5-3.3 7.5-9.3 11.1-13.4 3.6-4.1 10.4-10.6 15.1-14.6 4.7-3.9 11.4-9.2 15-11.7 3.6-2.5 10.6-6.8 15.5-9.5 4.9-2.7 12.3-6.3 16.2-7.9 4-1.6 7.3-3.1 7.3-3.4 0-0.3-2.1-2.1-4.7-4.1-2.7-2.1-8-7-11.8-11-3.9-4.1-8.9-10.1-11.1-13.4-2.3-3.3-5.8-9.3-7.8-13.2-2-4-4.7-10.8-6-15-1.3-4.3-2.6-8.9-3-10.3-0.3-1.4-1-7-1.6-12.5-0.7-7.1-0.7-13.1 0.1-20.5 0.6-5.8 2.2-14.3 3.5-19 1.4-4.7 4-11.7 5.8-15.5 1.8-3.8 5.3-10.2 7.8-14 2.6-3.8 7.5-10.1 11-13.9 3.4-3.8 9.7-9.4 13.8-12.5 4.1-3.1 11.1-7.5 15.5-9.8 4.4-2.3 11.4-5.3 15.5-6.7 4.1-1.4 11.8-3.2 17-4 5.2-0.9 12.9-1.6 17-1.6 4.1 0 11.8 0.7 17 1.6 5.2 0.8 12.9 2.6 17 4 4.1 1.4 11.1 4.4 15.5 6.7 4.4 2.3 11.4 6.7 15.5 9.8 4.1 3.1 10.4 8.7 13.8 12.5 3.5 3.8 8.4 10.1 11 13.9 2.5 3.8 6 10.2 7.8 14 1.8 3.8 4.4 10.8 5.8 15.5 1.3 4.7 2.9 13.2 3.5 19 0.8 7.3 0.8 13.4 0.1 20.3-0.5 5.3-1.4 11.6-2 14-0.5 2.3-2 7.4-3.3 11.2-1.3 3.8-3.8 9.8-5.6 13.3-1.7 3.4-4.8 8.8-6.8 12-2 3.1-7.8 9.8-12.8 14.8-4.9 5-10.6 10.3-12.5 11.7l-3.5 2.6c6.2 2.5 12.1 5.2 17 7.6 4.9 2.4 13.7 7.5 19.5 11.3 5.8 3.8 14.5 10.5 19.5 14.8 4.9 4.4 12 11.5 15.8 15.9 3.7 4.4 10.2 12.9 14.2 19 4.1 6.1 9.8 16.2 12.7 22.5 3 6.3 6.7 15.9 8.3 21.3 1.7 5.3 3.2 9.7 3.5 9.7 0.3 0 3.2-3.5 6.6-7.8 3.3-4.2 8.5-11.3 11.4-15.7 3-4.4 8.4-13.9 12-21 3.6-7.1 8.1-16.8 9.9-21.5 1.8-4.7 4.8-13.9 6.6-20.5 1.8-6.6 4-16.3 4.9-21.5 0.9-5.2 2.2-16.7 2.8-25.5 0.9-12 0.9-19.6 0-30.5-0.6-8-2.3-20.3-3.8-27.5-1.4-7.2-4.6-19.1-7-26.5-2.5-7.4-7.5-19.8-11.3-27.5-3.8-7.7-10.5-19.4-14.9-26-4.4-6.6-11.6-16.3-16-21.5-4.3-5.2-11.4-12.8-15.6-16.8-4.2-3.9-11.1-10-15.3-13.4-4.3-3.4-12.5-9.3-18.3-13.1-5.8-3.8-16.8-10-24.5-13.8-7.7-3.8-20.1-8.8-27.5-11.3-7.4-2.4-19.4-5.6-26.5-7-7.1-1.4-17.9-3-24-3.6-6.1-0.5-16.2-0.9-22.5-0.9-6.3 0.1-15.6 0.6-20.5 1-4.9 0.5-14.8 2-22 3.5zm23.5 82.5c-4.1 1.1-10.9 3.8-15 6.1-4.1 2.2-10.2 6.2-13.5 8.9-3.3 2.7-8.1 7.5-10.6 10.6-2.6 3.2-6.3 8.7-8.2 12.3-2 3.6-4.8 10.6-6.3 15.5-2.2 7.5-2.6 10.9-2.6 21 0 8.9 0.5 14 2 19.5 1.1 4.1 3.4 10.4 5.2 14 1.8 3.6 5.2 9.2 7.5 12.5 2.3 3.3 6.4 8 9.1 10.5 2.7 2.5 7.2 6.1 9.9 8 2.8 1.9 7.7 4.6 11 6.2 3.3 1.5 9.6 3.7 14 4.8 5.5 1.4 11.2 2 18.5 2 7.3 0 13-0.6 18.5-2 4.4-1.1 10.7-3.3 14-4.8 3.3-1.6 8.3-4.3 11-6.2 2.8-1.9 7.2-5.5 9.9-8 2.7-2.5 6.8-7.2 9.1-10.5 2.3-3.3 5.7-8.9 7.5-12.5 1.8-3.6 4.1-9.9 5.2-14 1.5-5.5 2-10.6 2-19.5 0-10.1-0.4-13.5-2.6-21-1.5-4.9-4.3-11.9-6.3-15.5-1.9-3.6-5.7-9.2-8.4-12.5-2.7-3.3-7.5-8.1-10.6-10.7-3.2-2.5-9.2-6.4-13.3-8.6-4.1-2.3-10.9-5-15-6.2-5-1.4-11.2-2.3-18.5-2.5-6.1-0.2-12.1-0.1-13.5 0.1-1.4 0.3-5.9 1.4-10 2.5zm-8 186.4c-4.7 1-13 3.3-18.5 5.2-5.5 1.9-13.4 5.2-17.5 7.3-4.1 2.1-11.6 6.5-16.5 9.8-4.9 3.3-12.8 9.5-17.4 13.9-4.6 4.3-11.3 11.4-14.8 15.8-3.5 4.4-8.6 11.6-11.2 16-2.7 4.4-6.4 11.6-8.4 16-1.9 4.4-4.6 11.8-6.1 16.5-1.4 4.7-3.3 12.3-4.1 17-0.8 4.7-1.3 8.5-1.2 8.6 0.1 0 3.1 2.3 6.7 5.1 3.6 2.8 10.3 7.5 15 10.6 4.7 3 12.3 7.5 17 10 4.7 2.6 13.2 6.6 19 9 5.8 2.4 15 5.8 20.5 7.5 5.5 1.7 14.3 3.9 19.5 5 5.2 1.1 13.6 2.6 18.5 3.3 4.9 0.7 17.8 1.3 28.5 1.3 10.7 0 23.6-0.6 28.5-1.3 4.9-0.7 13.3-2.2 18.5-3.3 5.2-1.1 14-3.3 19.5-5 5.5-1.7 14.7-5.1 20.5-7.5 5.8-2.4 14.3-6.4 19-9 4.7-2.5 12.3-7 17-10 4.7-3.1 11.4-7.8 15-10.6 3.6-2.8 6.6-5.1 6.7-5.1 0.1-0.1-0.5-4.2-1.3-9.1-0.9-4.9-2.9-13.3-4.6-18.5-1.6-5.2-4.9-13.6-7.3-18.5-2.3-4.9-7.1-13.3-10.6-18.5-4.1-6.2-10.5-13.7-18.3-21.5-7.5-7.5-15.5-14.3-21.1-18-4.9-3.3-12.4-7.6-16.5-9.6-4.1-2.1-10.6-4.9-14.5-6.4-3.9-1.4-10.4-3.4-14.5-4.5-4.1-1-11.1-2.3-15.5-2.9-4.4-0.6-11.1-1.2-15-1.4-3.9-0.2-11.3 0-16.5 0.4-5.2 0.3-13.3 1.4-18 2.4z"/>
</svg>
  );
}

export default UsersIcon;