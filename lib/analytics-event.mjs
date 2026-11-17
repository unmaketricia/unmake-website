const publicHosts=new Set(['www.un-make.com','un-make.com']);
export function publicPageview(event){
 try{
  const url=new URL(event.url);
  if(!publicHosts.has(url.hostname))return null;
  if(['/table/app','/api'].some(path=>url.pathname===path||url.pathname.startsWith(path+'/')))return null;
  url.search='';url.hash='';url.username='';url.password='';
  return {...event,url:url.toString()};
 }catch{return null;}
}
