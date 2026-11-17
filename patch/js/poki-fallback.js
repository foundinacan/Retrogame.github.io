/* Local Poki compatibility fallback.
   Keeps the game playable when Poki/ad services are unavailable.
   No external ad scripts or proxy connections are required. */
(function (window) {
  "use strict";

  var sdk = {
    init: function () { return Promise.resolve(); },
    initWithVideoHB: function () { return Promise.resolve(); },
    setDebug: function () {},
    setDebugTouchOverlayController: function () {},
    isAdBlocked: function () { return false; },
    getURLParam: function () { return ""; },
    customEvent: function () {},
    gameLoadingStart: function () {},
    gameLoadingProgress: function () {},
    gameLoadingFinished: function () {},
    gameplayStart: function () {},
    gameplayStop: function () {},
    happyTime: function () {},
    commercialBreak: function () { return Promise.resolve(); },
    rewardedBreak: function () { return Promise.resolve(false); },
    displayAd: function () {},
    destroyAd: function () {},
    disableProgrammatic: function () {},
    gameInteractive: function () {},
    roundStart: function () {},
    roundEnd: function () {},
    muteAd: function () {}
  };

  window.PokiSDK = sdk;
  window.PokiSDK_OK = true;
  window.PokiSDK_loadState = 2;

  // GameMaker's Poki extension expects a global named PokiSDK.
  if (typeof window.PokiSDK !== "undefined") {
    window.PokiSDK_OK = true;
  }
})(window);
