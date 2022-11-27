/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="33" height="32" xmlns="http://www.w3.org/2000/svg" fill="none">

 <g>
  
  <path id="svg_1" fill="currentColor" d="m16.49996,26.66664c1.4571,0 2.8271,-0.2788 4.1098,-0.8366c1.2898,-0.5577 2.4262,-1.3281 3.4092,-2.3111c0.983,-0.983 1.7534,-2.1159 2.3111,-3.3987c0.5577,-1.2897 0.8366,-2.6631 0.8366,-4.1202c0,-1.4571 -0.2789,-2.82704 -0.8366,-4.10982c-0.5577,-1.28976 -1.3281,-2.42615 -2.3111,-3.40915c-0.983,-0.98301 -2.1194,-1.75338 -3.4092,-2.31112c-1.2897,-0.55773 -2.6631,-0.8366 -4.1202,-0.8366c-1.4571,0 -2.83052,0.27887 -4.12028,0.8366c-1.28279,0.55774 -2.41568,1.32811 -3.39869,2.31112c-0.97604,0.983 -1.74292,2.11939 -2.30065,3.40915c-0.55774,1.28278 -0.83661,2.65272 -0.83661,4.10982c0,1.4571 0.27887,2.8305 0.83661,4.1202c0.55773,1.2828 1.3281,2.4157 2.31111,3.3987c0.983,0.983 2.1159,1.7534 3.39869,2.3111c1.28976,0.5578 2.66318,0.8366 4.12022,0.8366zm0,-1.7777c-1.2339,0 -2.38776,-0.2301 -3.4614,-0.6902c-1.07364,-0.4602 -2.0183,-1.0946 -2.83398,-1.9033c-0.80872,-0.8157 -1.44314,-1.7603 -1.90327,-2.834c-0.45316,-1.0736 -0.67974,-2.2274 -0.67974,-3.4614c0,-1.23401 0.22658,-2.38782 0.67974,-3.46146c0.46013,-1.07364 1.09455,-2.0183 1.90327,-2.83399c0.80871,-0.81568 1.74989,-1.4501 2.82353,-1.90326c1.07363,-0.46013 2.22745,-0.6902 3.46145,-0.6902c1.234,0 2.3878,0.23007 3.4614,0.6902c1.0737,0.45316 2.0183,1.08758 2.834,1.90326c0.8157,0.81569 1.4536,1.76035 1.9137,2.83399c0.4602,1.07364 0.6902,2.22745 0.6902,3.46146c0,1.234 -0.23,2.3878 -0.6902,3.4614c-0.4531,1.0737 -1.0875,2.0183 -1.9032,2.834c-0.8087,0.8087 -1.7534,1.4431 -2.834,1.9033c-1.0737,0.4601 -2.2275,0.6902 -3.4615,0.6902zm-4.38166,-3.6183l6.00266,-2.9386c0.3137,-0.1534 0.5542,-0.3939 0.7215,-0.7216l2.9177,-5.99212c0.1743,-0.35556 0.1568,-0.63791 -0.0523,-0.84706c-0.2022,-0.20915 -0.488,-0.22658 -0.8575,-0.05229l-5.98173,2.91765c-0.30676,0.14641 -0.54728,0.39041 -0.72157,0.73203l-2.9281,6.00259c-0.11155,0.2301 -0.13595,0.4358 -0.07321,0.617c0.06275,0.1743 0.18127,0.2928 0.35556,0.3556c0.17429,0.0627 0.37995,0.0383 0.61699,-0.0732zm4.38166,-3.9843c-0.3555,0 -0.6588,-0.1255 -0.9098,-0.3765c-0.2509,-0.251 -0.37643,-0.5543 -0.37643,-0.9098c0,-0.3556 0.12553,-0.6554 0.37643,-0.8994c0.251,-0.25095 0.5543,-0.37644 0.9098,-0.37644c0.3486,0 0.6484,0.12549 0.8994,0.37644c0.251,0.244 0.3765,0.5438 0.3765,0.8994c0,0.3555 -0.1255,0.6588 -0.3765,0.9098c-0.251,0.251 -0.5508,0.3765 -0.8994,0.3765z"/>
 </g>
</svg>
`

let Apps = ({ size, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

Apps.defaultProps = {
  size: 18,
};

Apps = React.memo ? React.memo(Apps) : Apps;

export default Apps;
