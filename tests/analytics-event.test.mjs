import {test} from 'node:test';
import assert from 'node:assert/strict';
import {publicPageview} from '../lib/analytics-event.mjs';
test('public page views retain their path without checkout or email parameters',()=>{
 assert.deepEqual(publicPageview({type:'pageview',url:'https://www.un-make.com/table/thank-you?transaction_id=private&email=buyer%40example.com#token=secret'}),{type:'pageview',url:'https://www.un-make.com/table/thank-you'});
 assert.equal(publicPageview({type:'pageview',url:'https://un-make.com/table#purchase'}).url,'https://un-make.com/table');
});
test('private household and API routes never create page-view events',()=>{
 for(const path of ['/table/app','/table/app/invite?token=private','/table/app/account','/api/checkout']){
  assert.equal(publicPageview({type:'pageview',url:'https://www.un-make.com'+path}),null);
 }
});
test('preview deployments, unrelated hosts and malformed URLs are excluded',()=>{
 for(const url of ['https://unmake-website-preview.vercel.app/table','https://example.com/table','invalid']){
  assert.equal(publicPageview({type:'pageview',url}),null);
 }
});
