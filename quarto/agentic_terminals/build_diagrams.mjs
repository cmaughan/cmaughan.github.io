// Editable SVG architecture diagrams.  Run with: node build_diagrams.mjs
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
const out = fileURLToPath(new URL('./images/', import.meta.url));
mkdirSync(out, {recursive:true});
const C={bg:'#0d1117',panel:'#161e29',line:'#33465a',text:'#e6edf3',muted:'#a4b3c4',blue:'#58a6ff',green:'#7ee787',gold:'#f2b66d',purple:'#c4a5ff',red:'#ff8989'};
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const t=(x,y,s,size=24,color=C.text,anchor='start',weight=400)=>`<text x="${x}" y="${y}" font-size="${size}" fill="${color}" text-anchor="${anchor}" font-weight="${weight}">${esc(s)}</text>`;
const lines=(x,y,ss,size=23,color=C.muted,anchor='start')=>ss.map((s,i)=>t(x,y+i*(size*1.35),s,size,color,anchor)).join('');
const rect=(x,y,w,h,fill=C.panel,stroke=C.line,r=10)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`;
const line=(x1,y1,x2,y2,color=C.line,width=2,dash='')=>`<path d="M${x1},${y1} L${x2},${y2}" fill="none" stroke="${color}" stroke-width="${width}" ${dash?`stroke-dasharray="${dash}"`:''}/>`;
const arrow=(x1,y1,x2,y2,color=C.blue,dash='')=>`<path d="M${x1},${y1} L${x2},${y2}" fill="none" stroke="${color}" stroke-width="2.5" marker-end="url(#${Object.keys(C).find(k=>C[k]===color)||'blue'})" ${dash?`stroke-dasharray="${dash}"`:''}/>`;
const route=(d,color=C.blue)=>`<path d="${d}" fill="none" stroke="${color}" stroke-width="2.5" marker-end="url(#${Object.keys(C).find(k=>C[k]===color)||'blue'})"/>`;
const block=(x,y,w,h,title,sub=[],color=C.blue)=>rect(x,y,w,h,C.panel,color)+t(x+18,y+35,title,26,color,'start',600)+lines(x+18,y+67,sub,21);
const circle=(x,y,r,color=C.blue,fill=C.panel)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${color}" stroke-width="2"/>`;
function grid(x,y,cols,rows,cw=28,ch=29,letters='',highlight=[]){let s=''; for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){const active=highlight.includes(r*cols+c);s+=rect(x+c*cw,y+r*ch,cw,ch,active?'#1c4432':C.panel,active?C.green:C.line,0);const glyph=letters[r*cols+c];if(glyph&&glyph!==' ')s+=t(x+c*cw+cw/2,y+r*ch+ch*.74,glyph,ch*.67,active?C.green:C.text,'middle',500);}return s;}
function save(name,title,s){const defs=Object.entries(C).map(([k,v])=>`<marker id="${k}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10Z" fill="${v}"/></marker>`).join('');writeFileSync(out+name+'.svg',`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 440" role="img" aria-label="${esc(title)}"><title>${esc(title)}</title><defs>${defs}</defs><g font-family="Inter, Helvetica Neue, Arial, sans-serif">${s}</g></svg>`);}

const label=(x,y,title,sub,color=C.blue)=>t(x,y,title,34,color,'middle',600)+(sub?t(x,y+43,sub,27,C.muted,'middle'):'');
const node=(x,y,w,title,sub,color=C.blue)=>rect(x,y,w,142,C.panel,color)+label(x+w/2,y+58,title,sub,color);

// Each diagram carries one idea, with implementation detail in speaker notes.
{
const mono=(x,y,str,size,color,anchor='middle',weight=500)=>`<text x="${x}" y="${y}" font-size="${size}" fill="${color}" text-anchor="${anchor}" font-weight="${weight}" font-family="Menlo, Consolas, monospace">${esc(str)}</text>`;
// Row 1: the program writes a stream; Draxul's parser reads it.
let s=rect(20,40,170,130,C.panel,C.green)+t(105,92,'Shell',30,C.green,'middle',600)+t(105,130,'bash · claude',21,C.muted,'middle');
s+=arrow(196,105,242,105,C.green)+t(219,90,'PTY',18,C.muted,'middle');
s+=t(470,62,'A stream of bytes',24,C.text,'middle',600);
let x=252;
for(const [str,w,color] of [['…',34,C.muted],['ESC[31m',112,C.gold],['H',40,C.text],['i',40,C.text],['ESC[0m',100,C.gold],['\\r\\n',62,C.gold],['$',40,C.text]]){
  s+=rect(x,84,w,42,C.bg,color,6)+mono(x+w/2,112,str,19,color);x+=w+6;
}
s+=t(470,158,'Text mixed with instructions',20,C.muted,'middle');
s+=arrow(x+2,105,762,105,C.blue);
s+=rect(772,40,208,130,C.panel,C.blue)+t(876,92,'Parser',30,C.blue,'middle',600)+t(876,130,'Bytes → cell edits',21,C.muted,'middle');
// Row 2: the grid plus the glyph atlas become a GPU frame.
s+=route('M876,172 V205 H166 V228',C.blue);
s+=t(166,256,'Grid',26,C.gold,'middle',600)+t(166,282,'Kept by the server',19,C.muted,'middle');
const cw=34,ch=32,gx=30,gy=296,rows=['$ ls    ','Hi      ','$ ▌     '];
rows.forEach((row,r)=>[...row].forEach((g,c)=>{
  const red=r===1&&c<2;
  s+=rect(gx+c*cw,gy+r*ch,cw,ch,red?'#3a1f22':C.panel,red?C.red:C.line,0);
  if(g!==' ')s+=mono(gx+c*cw+cw/2,gy+r*ch+23,g,20,red?C.red:C.text);
}));
s+=t(333,350,'+',44,C.muted,'middle');
s+=t(470,256,'Glyph atlas',26,C.purple,'middle',600)+t(470,282,'Font shapes, drawn once',19,C.muted,'middle');
[...'Hi$lsé─▌'].forEach((g,i)=>{const ax=378+(i%4)*46,ay=296+Math.floor(i/4)*46;s+=rect(ax,ay,42,42,C.bg,C.purple,4)+mono(ax+21,ay+30,g,24,C.purple);});
s+=arrow(574,345,640,345,C.blue);
s+=t(815,256,'GPU',26,C.blue,'middle',600)+t(815,282,'Backgrounds, then glyphs',19,C.muted,'middle');
s+=rect(652,296,326,96,'#05080c',C.blue,8);
s+=mono(672,328,'$ ls',22,C.text,'start')+mono(672,356,'Hi',22,C.red,'start',700)+mono(672,384,'$ ▌',22,C.text,'start');
save('architecture','A shell writes a stream of bytes through the PTY; Draxul parses it into a persistent grid, which the GPU draws using glyphs from a font atlas',s);
}
{
let s=node(30,145,250,'Your program','Bash / PowerShell',C.green)+node(720,145,250,'Draxul','Your terminal',C.blue);
s+=arrow(300,175,700,175,C.green)+t(500,140,'What to show',32,C.green,'middle');
s+=arrow(700,265,300,265,C.blue)+t(500,310,'Keys + replies',32,C.blue,'middle');
s+=t(500,402,'The connection: PTY on Mac · ConPTY on Windows',27,C.muted,'middle');
save('pty','The program sends output to Draxul; Draxul sends keys and replies back through PTY or ConPTY',s);
}
{
let s=label(175,82,'First piece','Wait for the rest',C.gold)+rect(40,145,270,145,C.panel,C.gold)+t(175,234,'ESC [ 31',43,C.gold,'middle');
s+=arrow(330,217,378,217,C.line)+label(540,82,'Next piece','Now it makes sense',C.green)+rect(400,145,280,145,C.panel,C.green)+t(540,234,'m Hi',48,C.green,'middle');
s+=arrow(700,217,760,217,C.blue)+t(879,242,'Hi',108,C.red,'middle',600)+t(879,337,'Draw in red',29,C.muted,'middle');
save('parser','An incomplete color instruction waits for the next piece; the completed instruction turns Hi red',s);
}
{
let s=label(160,70,'Read the text','e + an accent',C.green)+t(160,250,'e + ◌́',66,C.green,'middle');
s+=arrow(320,220,370,220,C.line)+label(505,70,'Find the shape','From a font',C.blue)+t(505,278,'é',155,C.blue,'middle');
s+=arrow(640,220,695,220,C.line)+label(850,70,'Draw the letter','In its screen cell',C.purple)+grid(773,155,1,1,154,154,'é');
save('glyphs','Read text, choose its letter shape from a font, and draw it in a terminal cell',s);
}
{
let s=label(155,75,'1. Background','Paint the cells',C.blue)+grid(32,145,6,4,41,44,'',[6,7,8,9,10,11]);
s+=t(328,255,'+',60,C.muted,'middle')+label(502,75,'2. Letters','Add the shapes',C.purple)+grid(379,145,6,4,41,44,'READY >_');
s+=t(676,255,'=',60,C.muted,'middle')+label(845,75,'The screen','',C.green)+grid(722,145,6,4,41,44,'READY >_',[6,7,8,9,10,11]);
save('gpu_grid','The GPU paints cell backgrounds, then adds letter shapes to form the terminal screen',s);
}
{
let s=grid(360,149,8,5,35,35,'$ vim   hello   ',[24,25,26,27,28,29,30,31]);
s+=label(156,155,'Resize','The text moves',C.gold)+arrow(265,205,341,205,C.gold);
s+=label(839,155,'Paste','More text arrives',C.blue)+arrow(728,205,659,205,C.blue);
s+=label(500,47,'Emoji','Symbols take more space',C.purple)+arrow(500,107,500,135,C.purple);
s+=t(500,402,'Sometimes all at once.',34,C.text,'middle');
save('complexity','Resizing, pasting, and wide characters can all affect the same screen at once',s);
}
{
let s=t(166,65,'Before',34,C.muted,'middle')+node(25,147,280,'One window','Owns all the work',C.muted);
s+=arrow(324,218,404,218,C.blue)+t(711,65,'Now',34,C.green,'middle');
s+=node(435,109,265,'Server','Keeps work running',C.green)+node(722,250,265,'Windows','Show the work',C.blue)+route('M710,179 H855 V235',C.green);
save('ownership','Draxul moved work out of a single window into a server; windows show the work independently',s);
}
{
let s=t(130,50,'Server',36,C.green,'middle',600)+t(860,50,'Your window',36,C.blue,'middle',600)+line(130,83,130,384,C.green,3)+line(860,83,860,384,C.blue,3);
for(const [y,msg,back] of [[137,'I’m back.',true],[245,'Here’s the screen.',false],[353,'Here’s what changed.',false]]){
const color=back?C.blue:C.green;s+=arrow(back?845:145,y,back?145:845,y,color)+rect(285,y-45,430,42,C.bg,C.bg,0)+t(500,y-12,msg,32,color,'middle');}
save('reconnect','A returning window asks to reconnect; the server sends the current screen and then subsequent changes',s);
}
{
let s='';
for(const [y,title,sub,color] of [[30,'Process','Is it Claude or Codex?',C.blue],[160,'Hooks','Which conversation?',C.green],[290,'Screen','Prompt, progress, approval',C.purple]]){
  s+=rect(30,y,330,110,C.panel,color)+t(55,y+48,title,32,color,'start',600)+t(55,y+85,sub,24,C.muted);
  s+=route(`M362,${y+55} C455,${y+55} 455,220 540,220`,color);
}
s+=rect(555,120,410,200,C.panel,C.gold)+t(760,170,'Status',34,C.gold,'middle',600);
s+=t(595,228,'● Working',27,C.green)+t(775,228,'◆ Needs you',27,C.gold)+t(595,285,'✓ Done',27,C.blue)+t(775,285,'? Unknown',27,C.muted);
s+=t(760,370,'Not sure?  Say Unknown.',26,C.muted,'middle');
save('status','Process tracking, hooks and screen rules combine into an agent status, with Unknown when unsure',s);
}
{
let s=rect(25,60,290,200,C.panel,C.green)+t(170,108,'You ask',30,C.green,'middle',600)+lines(170,160,['“Make a tab with the','build, the tests and','a reviewer agent.”'],23,C.text,'middle');
s+=arrow(330,160,385,160,C.line)+rect(400,60,250,200,C.panel,C.purple)+t(525,108,'Skill',30,C.purple,'middle',600)+lines(525,160,['Tells the agent','which draxul','commands to use'],23,C.muted,'middle');
s+=arrow(665,160,720,160,C.line)+t(855,45,'Draxul',30,C.blue,'middle',600);
s+=rect(735,70,120,190,'#1c4432',C.green,0)+rect(855,70,120,95,C.panel,C.blue,0)+rect(855,165,120,95,'#34291d',C.gold,0);
s+=t(795,172,'build',23,C.green,'middle')+t(915,125,'tests',23,C.blue,'middle')+t(915,220,'review',23,C.gold,'middle');
s+=t(500,330,'draxul layout apply  ·  pane run  ·  agent start',27,C.muted,'middle');
save('skills','You ask an agent in plain words; a skill tells it which draxul commands to run; the panes appear',s);
}
console.log('Wrote simplified diagrams.');
