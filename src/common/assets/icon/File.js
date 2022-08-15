/* eslint-disable */

import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 19.3406C4.5 20.227 4.72081 20.8904 5.16243 21.3306C5.6101 21.7769 6.27253 22 7.14973 22H16.8503C17.7275 22 18.3869 21.7769 18.8285 21.3306C19.2762 20.8904 19.5 20.227 19.5 19.3406V5.39213C19.5 4.51168 19.2762 3.84833 18.8285 3.40208C18.3869 2.9498 17.7275 2.72365 16.8503 2.72365H7.14973C6.27253 2.72365 5.6101 2.9498 5.16243 3.40208C4.72081 3.84833 4.5 4.51168 4.5 5.39213V19.3406ZM5.61615 19.3225V5.41927C5.61615 4.90668 5.74924 4.5147 6.01543 4.24333C6.28161 3.97196 6.67786 3.83627 7.20417 3.83627H16.7958C17.3221 3.83627 17.7184 3.97196 17.9846 4.24333C18.2508 4.5147 18.3838 4.90668 18.3838 5.41927V19.3225C18.3838 19.829 18.2508 20.215 17.9846 20.4803C17.7184 20.7517 17.3221 20.8874 16.7958 20.8874H7.20417C6.67786 20.8874 6.28161 20.7517 6.01543 20.4803C5.74924 20.215 5.61615 19.829 5.61615 19.3225ZM11.5508 21.4754H12.4492V8.35911H11.5508V21.4754ZM12.0045 8.6938C12.6216 8.6938 13.1086 8.51892 13.4655 8.16915C13.8285 7.81939 14.01 7.346 14.01 6.74898C14.01 6.62837 14.0009 6.51379 13.9828 6.40525C13.9707 6.2967 13.9525 6.1791 13.9283 6.05246L13.1207 2.42515C13.0904 2.29851 13.0239 2.19599 12.9211 2.11759C12.8243 2.0392 12.7093 2 12.5762 2H11.4328C11.2937 2 11.1727 2.0392 11.0699 2.11759C10.9731 2.19599 10.9096 2.29851 10.8793 2.42515L10.0717 6.05246C10.0475 6.1791 10.0263 6.2967 10.0082 6.40525C9.99607 6.51379 9.99002 6.62837 9.99002 6.74898C9.99002 7.346 10.1685 7.81939 10.5254 8.16915C10.8884 8.51892 11.3814 8.6938 12.0045 8.6938ZM12.0045 7.75305C11.69 7.75305 11.4328 7.65355 11.2332 7.45455C11.0396 7.24951 10.9428 6.99322 10.9428 6.68566C10.9428 6.3962 11.0457 6.14895 11.2514 5.94392C11.457 5.73285 11.7081 5.62732 12.0045 5.62732C12.2949 5.62732 12.543 5.73285 12.7486 5.94392C12.9543 6.14895 13.0572 6.3962 13.0572 6.68566C13.0572 6.99322 12.9574 7.24951 12.7577 7.45455C12.5641 7.65355 12.3131 7.75305 12.0045 7.75305ZM12.0045 10.6658H14.2005C14.3276 10.6658 14.4335 10.6235 14.5181 10.5391C14.6089 10.4547 14.6543 10.3492 14.6543 10.2225C14.6543 10.0959 14.6089 9.99035 14.5181 9.90593C14.4335 9.8215 14.3276 9.77929 14.2005 9.77929H12.0045V10.6658ZM9.79946 11.9593H12.0045V11.0728H9.79946C9.67241 11.0728 9.56352 11.115 9.47278 11.1995C9.38808 11.2839 9.34574 11.3864 9.34574 11.507C9.34574 11.6276 9.38808 11.7332 9.47278 11.8236C9.56352 11.9141 9.67241 11.9593 9.79946 11.9593ZM12.0045 13.2438H14.2005C14.3276 13.2438 14.4335 13.2016 14.5181 13.1171C14.6089 13.0267 14.6543 12.9181 14.6543 12.7915C14.6543 12.6709 14.6089 12.5684 14.5181 12.4839C14.4335 12.3935 14.3276 12.3483 14.2005 12.3483H12.0045V13.2438ZM9.79946 14.5283H12.0045V13.6418H9.79946C9.67241 13.6418 9.56352 13.684 9.47278 13.7684C9.38808 13.8529 9.34574 13.9554 9.34574 14.076C9.34574 14.2026 9.38808 14.3112 9.47278 14.4016C9.56352 14.4861 9.67241 14.5283 9.79946 14.5283ZM12.0045 15.8128H14.2005C14.3276 15.8128 14.4335 15.7705 14.5181 15.6861C14.6089 15.5957 14.6543 15.4871 14.6543 15.3605C14.6543 15.2399 14.6089 15.1373 14.5181 15.0529C14.4335 14.9685 14.3276 14.9263 14.2005 14.9263H12.0045V15.8128ZM9.79946 17.1063H12.0045V16.2108H9.79946C9.67241 16.2108 9.56352 16.253 9.47278 16.3374C9.38808 16.4218 9.34574 16.5274 9.34574 16.654C9.34574 16.7806 9.38808 16.8892 9.47278 16.9796C9.56352 17.0641 9.67241 17.1063 9.79946 17.1063ZM12.0045 18.3817H14.2005C14.3276 18.3817 14.4335 18.3395 14.5181 18.2551C14.6089 18.1707 14.6543 18.0651 14.6543 17.9385C14.6543 17.8119 14.6089 17.7063 14.5181 17.6219C14.4335 17.5375 14.3276 17.4953 14.2005 17.4953H12.0045V18.3817ZM9.79946 19.6753H12.0045V18.7888H9.79946C9.67241 18.7888 9.56352 18.831 9.47278 18.9154C9.38808 18.9998 9.34574 19.1054 9.34574 19.232C9.34574 19.3526 9.38808 19.4551 9.47278 19.5396C9.56352 19.63 9.67241 19.6753 9.79946 19.6753Z" fill="currentColor"/>
</svg>
`

let File = ({ size, ...rest }) => {
  return (
    <SvgXml xml={xml}  width={size} height={size} {...rest} />
  );
};

File.defaultProps = {
  size: 18,
};

File = React.memo ? React.memo(File) : File;

export default File;
