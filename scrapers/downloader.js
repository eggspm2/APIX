const _0x1ec828=_0x5363;(function(_0x4b1be1,_0x112453){const _0x5e78b0=_0x5363,_0x325578=_0x4b1be1();while(!![]){try{const _0x5c728c=parseInt(_0x5e78b0(0xeb))/0x1+parseInt(_0x5e78b0(0xc7))/0x2+-parseInt(_0x5e78b0(0xdd))/0x3*(parseInt(_0x5e78b0(0xe7))/0x4)+-parseInt(_0x5e78b0(0xd3))/0x5+-parseInt(_0x5e78b0(0xee))/0x6*(-parseInt(_0x5e78b0(0xd8))/0x7)+parseInt(_0x5e78b0(0xf7))/0x8*(-parseInt(_0x5e78b0(0xdf))/0x9)+parseInt(_0x5e78b0(0xab))/0xa;if(_0x5c728c===_0x112453)break;else _0x325578['push'](_0x325578['shift']());}catch(_0x186a73){_0x325578['push'](_0x325578['shift']());}}}(_0x16a8,0x519f1));function _0x5363(_0x572c0a,_0x172c73){const _0x16a86d=_0x16a8();return _0x5363=function(_0x536370,_0x461b14){_0x536370=_0x536370-0xa8;let _0x45f465=_0x16a86d[_0x536370];return _0x45f465;},_0x5363(_0x572c0a,_0x172c73);}const axios=require('axios'),cheerio=require(_0x1ec828(0xa8)),qs=require('qs'),clean=_0x231aa0=>{const _0x4f125e=_0x1ec828;let _0xd25ea9=/(<([^>]+)>)/gi;return _0x231aa0=_0x231aa0[_0x4f125e(0xd7)](/(<br?\s?\/>)/gi,'\x20\x0a'),_0x231aa0[_0x4f125e(0xd7)](_0xd25ea9,'');};function _0x16a8(){const _0x309f99=['div.container','application/json;\x20charset=UTF-8','p.text-gray-600.px-2.text-center.break-all.w-3/4.oneliner','open.','size','get','/system/action.php','application/json','svg.h-5.w-5.text-yellow-500\x20+\x20span','https://v3.igdownloader.app/api/ajaxSearch','author','error','load','links','fs_id','entries','message','#unique-id','76384QXVaKW','http','type','src','img.h-24.w-34.rounded-full','post','each','h2.font-extrabold.text-xl.text-center','terabox','val','catch','ul.download-box\x20li','959950GVQYPg','text','href','twitter','replace','7tfJHkv','a[target=\x22_blank\x22]','creator','data','then','171liCXRz','facebook','6327dtGwFa','capcut','stringify','list','response','https://terabox-dl.qtcloud.workers.dev/api/get-info?shorturl=','svg.h-5.w-5.text-green-500\x20+\x20span','value','36488OArIiz','audio','downloadLink','application/x-www-form-urlencoded;\x20charset=UTF-8','133706xYwCzy','https://api.teknogram.id/v1/capcut','instagram','3743178CARBSk','https://terabox-dl.qtcloud.workers.dev/api/get-download','cover','.photo-option\x20select\x20option','tbody\x20>\x20tr\x20>\x20td','timestamp','https://lovetik.com/api/ajax/search','status','ttslide','6144zQWfta','attr','media','url','MannR','URL','.download-items__thumb\x20img','headers','*/*','children','https','push','sign','cheerio','Error:','svg.h-5.w-5.text-blue-500\x20+\x20span','7904080gYXbaw','shareid','application/json,\x20text/plain,\x20*/*','find','append','trim','POST','a[onclick=\x22bdl(this,\x20event)\x22]','watermark','tiktok'];_0x16a8=function(){return _0x309f99;};return _0x16a8();}async function shortener(_0x142187){return _0x142187;}exports[_0x1ec828(0xb4)]=async _0x15fedf=>{const _0xcd6e17=_0x1ec828;let _0x269ade=await axios(_0xcd6e17(0xf4),{'method':_0xcd6e17(0xb1),'data':new URLSearchParams(Object[_0xcd6e17(0xc4)]({'query':_0x15fedf}))});return result={},result[_0xcd6e17(0xda)]=_0xcd6e17(0xfb),result['title']=clean(_0x269ade[_0xcd6e17(0xdb)]['desc']),result['author']=clean(_0x269ade['data'][_0xcd6e17(0xbf)]),result['nowm']=await shortener((_0x269ade[_0xcd6e17(0xdb)][_0xcd6e17(0xc2)][0x0]['a']||'')[_0xcd6e17(0xd7)](_0xcd6e17(0x101),_0xcd6e17(0xc8))),result[_0xcd6e17(0xb3)]=await shortener((_0x269ade[_0xcd6e17(0xdb)][_0xcd6e17(0xc2)][0x1]['a']||'')[_0xcd6e17(0xd7)](_0xcd6e17(0x101),_0xcd6e17(0xc8))),result[_0xcd6e17(0xe8)]=await shortener((_0x269ade['data']['links'][0x2]['a']||'')['replace']('https',_0xcd6e17(0xc8))),result['thumbnail']=await shortener(_0x269ade['data'][_0xcd6e17(0xf0)]),result;},exports[_0x1ec828(0xed)]=async _0x50326b=>{const _0x52deac=_0x1ec828;try{const _0x13b93a=await axios({'method':_0x52deac(0xcc),'url':_0x52deac(0xbe),'headers':{'Content-Type':_0x52deac(0xea),'Accept':_0x52deac(0xff)},'data':qs[_0x52deac(0xe1)]({'recaptchaToken':'','q':_0x50326b,'t':_0x52deac(0xf9),'lang':'en'})}),_0x316570=cheerio[_0x52deac(0xc1)](_0x13b93a[_0x52deac(0xdb)][_0x52deac(0xdb)]),_0x41140b=[];return _0x316570(_0x52deac(0xd2))['each']((_0xd27e39,_0xc4dfa5)=>{const _0x411fe1=_0x52deac,_0x347f62=_0x316570(_0xc4dfa5)[_0x411fe1(0xae)](_0x411fe1(0xfd))[_0x411fe1(0xf8)](_0x411fe1(0xca)),_0x375109=[];_0x316570(_0xc4dfa5)['find'](_0x411fe1(0xf1))['each']((_0x39623e,_0x5d4c88)=>{const _0x577ea2=_0x411fe1;_0x375109[_0x577ea2(0x102)]({'resolution':_0x316570(_0x5d4c88)[_0x577ea2(0xd4)](),'url':_0x316570(_0x5d4c88)['attr'](_0x577ea2(0xe6))});});const _0x11cff2=_0x316570(_0xc4dfa5)['find']('.download-items__btn\x20a')[_0x411fe1(0xf8)]('href');_0x41140b[_0x411fe1(0x102)]({'thumbnail':_0x347f62,'options':_0x375109,'download':_0x11cff2});}),_0x41140b;}catch(_0x25fae0){console['error'](_0x25fae0);}},exports[_0x1ec828(0xf6)]=async _0x2588e4=>{const _0x4f2fd9=_0x1ec828;try{const _0x4601f5=await axios[_0x4f2fd9(0xcc)]('https://ttsave.app/download',{'query':_0x2588e4,'language_id':'2'},{'headers':{'Accept':_0x4f2fd9(0xad),'Content-Type':_0x4f2fd9(0xbc)}}),_0x57c482=_0x4601f5[_0x4f2fd9(0xdb)],_0x38f82c=cheerio[_0x4f2fd9(0xc1)](_0x57c482),_0x5600c8=_0x38f82c(_0x4f2fd9(0xc6))[_0x4f2fd9(0xd0)](),_0x45b758=_0x38f82c(_0x4f2fd9(0xce))[_0x4f2fd9(0xd4)](),_0x803474=_0x38f82c(_0x4f2fd9(0xd9))['attr'](_0x4f2fd9(0xd5)),_0x168587=_0x38f82c(_0x4f2fd9(0xcb))[_0x4f2fd9(0xf8)](_0x4f2fd9(0xca)),_0x349ef8=_0x38f82c(_0x4f2fd9(0xb7))[_0x4f2fd9(0xd4)](),_0x570d4e={'views':_0x38f82c('svg.h-5.w-5.text-gray-500\x20+\x20span')[_0x4f2fd9(0xd4)](),'likes':_0x38f82c('svg.h-5.w-5.text-red-500\x20+\x20span')[_0x4f2fd9(0xd4)](),'comments':_0x38f82c(_0x4f2fd9(0xe5))['text'](),'shares':_0x38f82c(_0x4f2fd9(0xbd))[_0x4f2fd9(0xd4)](),'downloads':_0x38f82c(_0x4f2fd9(0xaa))[_0x4f2fd9(0xd4)]()},_0x2add2b=[];return _0x38f82c(_0x4f2fd9(0xb2))[_0x4f2fd9(0xcd)]((_0x54c35f,_0xfdafdb)=>{const _0x40936d=_0x4f2fd9,_0x3aedbe=_0x38f82c(_0xfdafdb)[_0x40936d(0xf8)]('href'),_0x5098f8=_0x38f82c(_0xfdafdb)[_0x40936d(0xf8)](_0x40936d(0xc9)),_0x5072d=_0x38f82c(_0xfdafdb)[_0x40936d(0xd4)]()[_0x40936d(0xb0)]();_0x2add2b[_0x40936d(0x102)]({'link':_0x3aedbe,'type':_0x5098f8,'title':_0x5072d});}),{'uniqueId':_0x5600c8,'username':_0x45b758,'thumbnail':_0x803474,'profile':_0x168587,'description':_0x349ef8,'stats':_0x570d4e,'download':_0x2add2b};}catch(_0x227575){console[_0x4f2fd9(0xc0)](_0x227575);throw _0x227575;}},exports[_0x1ec828(0xde)]=async _0x4529a0=>{return new Promise(async(_0x1ee3f7,_0x50e70c)=>{const _0x13807f=_0x5363;let _0x10e74c='https://aiovideodl.ml/',_0x2e751f={'data':{'url':_0x4529a0,'token':await _token(_0x10e74c)}};axios[_0x13807f(0xcc)](_0x10e74c+_0x13807f(0xbb),qs['stringify'](_0x2e751f[_0x13807f(0xdb)]),{'headers':is[_0x13807f(0xfe)]})['then'](({data:_0x5e3826})=>{const _0x310061=_0x13807f;_0x1ee3f7(_0x5e3826[_0x310061(0xc2)]);});});},exports[_0x1ec828(0xd6)]=async _0x20bb2a=>{return new Promise((_0x184e3b,_0x58a8ec)=>{const _0x30e1ea=_0x5363;let _0x1c4daa=new URLSearchParams();_0x1c4daa[_0x30e1ea(0xaf)](_0x30e1ea(0xfc),_0x20bb2a),fetch('https://twdown.net/download.php',{'method':_0x30e1ea(0xb1),'body':_0x1c4daa})[_0x30e1ea(0xdc)](_0x2034db=>_0x2034db[_0x30e1ea(0xd4)]())['then'](_0x4a9f9b=>{const _0x51b557=_0x30e1ea,_0x5abd8c=cheerio['load'](_0x4a9f9b);data=[],_0x5abd8c(_0x51b557(0xb5))['find'](_0x51b557(0xf2))[_0x51b557(0xcd)](function(_0xed526,_0xd60a5e){const _0x1fd568=_0x51b557;x=_0x5abd8c(this)[_0x1fd568(0xae)]('a')[_0x1fd568(0xf8)](_0x1fd568(0xd5)),x!=='#'&&(typeof x!=='undefined'&&data['push']({'url':x}));}),_0x184e3b(data);})[_0x30e1ea(0xd1)](_0x58a8ec);});};async function getLink(_0x2e6292){const _0x39a3b8=_0x1ec828;try{const _0x1701cf=await axios[_0x39a3b8(0xcc)](_0x39a3b8(0xef),_0x2e6292);return _0x1701cf[_0x39a3b8(0xdb)]['downloadLink'];}catch(_0x4bfffb){return _0x4bfffb[_0x39a3b8(0xe3)]['data'];}}exports[_0x1ec828(0xcf)]=async _0x105f48=>{const _0x2fec30=_0x1ec828;let _0x2db4ae=(_0x105f48['split'](/surl=|\/s\//)||[])[0x1];_0x2db4ae='1'+_0x2db4ae[_0x2fec30(0xd7)](/^1/,'');const _0x293e01=await axios[_0x2fec30(0xba)](_0x2fec30(0xe4)+_0x2db4ae),_0x3ed7b2=_0x293e01[_0x2fec30(0xdb)];if(_0x3ed7b2['ok']!==!![])throw new Error(_0x3ed7b2[_0x2fec30(0xc5)]);for(const _0x2e433a of _0x3ed7b2[_0x2fec30(0xe2)]){const _0x22d670={'shareid':_0x3ed7b2[_0x2fec30(0xac)],'uk':_0x3ed7b2['uk'],'sign':_0x3ed7b2[_0x2fec30(0x103)],'timestamp':_0x3ed7b2[_0x2fec30(0xf3)],'fs_id':_0x2e433a['children']['length']?_0x2e433a[_0x2fec30(0x100)][0x0][_0x2fec30(0xc3)]:_0x2e433a[_0x2fec30(0xc3)]},_0x220bd0=await getLink(_0x22d670);_0x2e433a[_0x2fec30(0xe9)]=_0x220bd0;}return _0x3ed7b2;},exports[_0x1ec828(0xe0)]=async _0x3ae394=>{const _0x425ec8=_0x1ec828,_0x3606ff={'url':_0x3ae394};try{let {data:_0xa70340}=await axios['post'](_0x425ec8(0xec),_0x3606ff,{'headers':{'Content-Type':_0x425ec8(0xb6)}});const _0xc1d6ee=_0xa70340[_0x425ec8(0xfa)][_0x425ec8(0xd7)](_0x425ec8(0xb8),'');return{'status':_0xa70340[_0x425ec8(0xf5)],'title':_0xa70340['title'],'size':_0xa70340[_0x425ec8(0xb9)],'url':_0xc1d6ee};}catch(_0x76a93b){return console['error'](_0x425ec8(0xa9),_0x76a93b),null;}};