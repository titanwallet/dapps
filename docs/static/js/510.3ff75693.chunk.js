"use strict";(self.webpackChunktitanwallet_dapp=self.webpackChunktitanwallet_dapp||[]).push([[510],{41510:function(t,e,n){n.r(e),n.d(e,{MetamaskAdapter:function(){return v}});var r=n(74165),a=n(15861),i=n(15671),s=n(43144),c=n(97326),o=n(11752),h=n(61120),u=n(60136),d=n(29388),p=n(4942),l=n(63811),m=n.n(l),f=n(87485),v=function(t){(0,u.Z)(n,t);var e=(0,d.Z)(n);function n(){var t;(0,i.Z)(this,n);var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=e.call(this),(0,p.Z)((0,c.Z)(t),"adapterNamespace",f.yk.EIP155),(0,p.Z)((0,c.Z)(t),"currentChainNamespace",f.EN.EIP155),(0,p.Z)((0,c.Z)(t),"type",f.hN.EXTERNAL),(0,p.Z)((0,c.Z)(t),"name",f.rW.METAMASK),(0,p.Z)((0,c.Z)(t),"status",f.MP.NOT_READY),(0,p.Z)((0,c.Z)(t),"rehydrated",!1),(0,p.Z)((0,c.Z)(t),"metamaskProvider",null),t.chainConfig=r.chainConfig||null,t}return(0,s.Z)(n,[{key:"provider",get:function(){return this.status===f.MP.CONNECTED&&this.metamaskProvider?this.metamaskProvider:null},set:function(t){throw new Error("Not implemented")}},{key:"init",value:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(0,o.Z)((0,h.Z)(n.prototype),"checkInitializationRequirements",this).call(this),t.next=3,m()({mustBeMetaMask:!0});case 3:if(this.metamaskProvider=t.sent,this.metamaskProvider){t.next=6;break}throw f.Ty.notInstalled("Metamask extension is not installed");case 6:if(this.status=f.MP.READY,this.emit(f.n2.READY,f.rW.METAMASK),t.prev=8,!e.autoConnect){t.next=13;break}return this.rehydrated=!0,t.next=13,this.connect();case 13:t.next=18;break;case 15:t.prev=15,t.t0=t.catch(8),this.emit(f.n2.ERRORED,t.t0);case 18:case"end":return t.stop()}}),t,this,[[8,15]])})));return function(e){return t.apply(this,arguments)}}()},{key:"setAdapterSettings",value:function(t){}},{key:"connect",value:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e=this;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((0,o.Z)((0,h.Z)(n.prototype),"checkConnectionRequirements",this).call(this),this.chainConfig||(this.chainConfig=(0,f.h2)(f.EN.EIP155,1)),this.status=f.MP.CONNECTING,this.emit(f.n2.CONNECTING,{adapter:f.rW.METAMASK}),this.metamaskProvider){t.next=6;break}throw f.RM.notConnectedError("Not able to connect with metamask");case 6:return t.prev=6,t.next=9,this.metamaskProvider.request({method:"eth_requestAccounts"});case 9:if(this.metamaskProvider.chainId===this.chainConfig.chainId){t.next=13;break}return t.next=13,this.switchChain(this.chainConfig);case 13:if(this.status=f.MP.CONNECTED,this.provider){t.next=16;break}throw f.RM.notConnectedError("Failed to connect with provider");case 16:return this.provider.once("disconnect",(function(){e.disconnect()})),this.emit(f.n2.CONNECTED,{adapter:f.rW.METAMASK,reconnected:this.rehydrated}),t.abrupt("return",this.provider);case 21:throw t.prev=21,t.t0=t.catch(6),this.status=f.MP.READY,this.rehydrated=!1,this.emit(f.n2.ERRORED,t.t0),f.RM.connectionError("Failed to login with metamask wallet");case 27:case"end":return t.stop()}}),t,this,[[6,21]])})));return function(){return t.apply(this,arguments)}}()},{key:"disconnect",value:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var e,n,a=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.length>0&&void 0!==a[0]?a[0]:{cleanup:!1},this.status===f.MP.CONNECTED){t.next=3;break}throw f.RM.disconnectionError("Not connected with wallet");case 3:null===(e=this.provider)||void 0===e||e.removeAllListeners(),n.cleanup?(this.status=f.MP.NOT_READY,this.metamaskProvider=null):this.status=f.MP.READY,this.rehydrated=!1,this.emit(f.n2.DISCONNECTED);case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.status===f.MP.CONNECTED){t.next=2;break}throw f.RM.notConnectedError("Not connected with wallet, Please login/connect first");case 2:return t.abrupt("return",{});case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"switchChain",value:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.metamaskProvider){t.next=2;break}throw f.RM.notConnectedError("Not connected with wallet");case 2:return t.prev=2,t.next=5,this.metamaskProvider.request({method:"wallet_switchEthereumChain",params:[{chainId:e.chainId}]});case 5:case 12:t.next=15;break;case 7:if(t.prev=7,t.t0=t.catch(2),4902!==t.t0.code){t.next=14;break}return t.next=12,this.metamaskProvider.request({method:"wallet_addEthereumChain",params:[{chainId:e.chainId,chainName:e.displayName,rpcUrls:[e.rpcTarget]}]});case 14:throw t.t0;case 15:case"end":return t.stop()}}),t,this,[[2,7]])})));return function(e){return t.apply(this,arguments)}}()}]),n}(f.J5)}}]);