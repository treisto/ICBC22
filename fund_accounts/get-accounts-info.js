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

    const conn1Address = 'rMqUT7uGs6Sz1m9vFr7o85XJ3WDAvgzWmj';

  console.log('Getting account info for Connector 1 - Lpt Uni XRP: ', conn1Address);
  return api.getAccountInfo(conn1Address);

}).then(info => {
  console.log(info);
  console.log('getAccountInfo done');
    console.log('###########################################################################');
  /* end custom code -------------------------------------- */

      const conn2Address = 'rLR52VSZG3wqSrkcpfkSnaKnYoYyPoJJgy';

  console.log('Getting account info for Connector 2 - MAC XRP ETH: ', conn2Address);
  return api.getAccountInfo(conn2Address);

}).then(info => {
  console.log(info);
  console.log('getAccountInfo done');
    console.log('###########################################################################');
  /* end custom code -------------------------------------- */

        const mdlptuniAddress = 'rpN3UPjYaErt4RW4gAiqucMCfL5nJJC4Yz';

  console.log('Getting account info for Moneyd - Lpt Uni: ', mdlptuniAddress);
  return api.getAccountInfo(mdlptuniAddress);

}).then(info => {
  console.log(info);
  console.log('getAccountInfo done');
    console.log('###########################################################################');
  /* end custom code -------------------------------------- */

       const mdMacAddress = 'rsYuLHpDR8FxDHMGf6gXmzeemqk9a9pagr';

  console.log('Getting account info for Moneyd - MAC: ', mdMacAddress);
  return api.getAccountInfo(mdMacAddress);

}).then(info => {
  console.log(info);
  console.log('getAccountInfo done');
    console.log('###########################################################################');
  /* end custom code -------------------------------------- */

        const switch2Address = 'r45NCTyFzLE72qSayEdFoU9PoZX4P71mMC';

  console.log('Getting account info for My-New-Working-Rafiki Aug 19 - Uni Lpt (SwitchAPI client 2) : ', switch2Address);
  return api.getAccountInfo(switch2Address);

}).then(info => {
  console.log(info);
  console.log('getAccountInfo done');
    console.log('###########################################################################');
  /* end custom code -------------------------------------- */

        const rafikiCyril1Address = 'rbBRFnAdcG9L2eiNxbmqjzEZKRJKiy2J8';

  console.log('Getting account info for Cyril-Ref-Conn (Rafiki (Cyril 1)): ', rafikiCyril1Address);
  return api.getAccountInfo(rafikiCyril1Address);

}).then(info => {
  console.log(info);
  console.log('getAccountInfo done');
    console.log('###########################################################################');
  /* end custom code -------------------------------------- */

        const rustCyril2Address = 'rbBRFnAdcG9L2eiNxbmqjzEZKRJKiy2J8';

  console.log('Getting account info for Clement-Ref-Conn (Rust (Cyril 2)): ', rustCyril2Address);
  return api.getAccountInfo(rustCyril2Address);

}).then(info => {
  console.log(info);
  console.log('getAccountInfo done');
    console.log('###########################################################################');
  /* end custom code -------------------------------------- */

        const rafikiClementAddress = 'r9Urs3Apm95kS22BCXvM3Bsgr1Cim7J6Fn';

  console.log('Getting account info for Rafiki Clement: ', rafikiClementAddress);
  return api.getAccountInfo(rafikiClementAddress);

}).then(info => {
  console.log(info);
  console.log('getAccountInfo done');
    console.log('###########################################################################');
  /* end custom code -------------------------------------- */

        const rafikiCyrilAddress = 'rDHTN2jKkBrxJ4zYnYZFUD6LMWa1NeMU48';

  console.log('Getting account info for Rafiki Cyril: ', rafikiCyrilAddress);
  return api.getAccountInfo(rafikiCyrilAddress);

}).then(info => {
  console.log(info);
  console.log('getAccountInfo done');
    console.log('###########################################################################');
  /* end custom code -------------------------------------- */

          const rustVitoAddress = 'rUZ5gxAT32rdT59amn7GSRQZ26vKtXhFDe';

  console.log('Getting account info for rustVitoAddress: ', rustVitoAddress);
  return api.getAccountInfo(rustVitoAddress);

}).then(info => {
  console.log(info);
  console.log('getAccountInfo done');
    console.log('###########################################################################');
  /* end custom code -------------------------------------- */

          const rustPasqualeAddress = 'rNaoaXse6mjLLn1KpNyANPGVqFnKjLLs2k';

  console.log('Getting account info for rustPasqualeAddress: ', rustPasqualeAddress);
  return api.getAccountInfo(rustPasqualeAddress);

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
