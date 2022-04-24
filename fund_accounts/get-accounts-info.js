'use strict';
const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({
  server: 'ws://localhost:6006'
});
api.connect().then(() => {
  /* begin custom code ------------------------------------ */
  const genesisAddress = 'rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh';

  console.log('Getting account info for Genesis address: ', genesisAddress);
  return api.getAccountInfo(genesisAddress);

}).then(info => {
  console.log(info);
  console.log('getAccountInfo done');
  console.log('###########################################################################');

    const acc1Address = 'rrpJ22B6cgGzFw9ZaF72bM63T8siVH1Tbe';

  console.log('Getting account info for Account1: ', acc1Address);
  return api.getAccountInfo(acc1Address);

}).then(info => {
  console.log(info);
  console.log('getAccountInfo done');
    console.log('###########################################################################');
  /* end custom code -------------------------------------- */

      const acc2Address = 'rJoDXhe8jodS7Mtdgytk56pDC92EURH5TA';

  console.log('Getting account info for Account2: ', acc2Address);
  return api.getAccountInfo(acc2Address);

}).then(info => {
  console.log(info);
  console.log('getAccountInfo done');
    console.log('###########################################################################');
  /* end custom code -------------------------------------- */

}).then(() => {
  return api.disconnect();
}).then(() => {
  console.log('done and disconnected.');
}).catch(console.error);
