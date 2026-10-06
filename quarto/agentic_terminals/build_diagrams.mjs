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
let s=label(155,60,'Paper','Print each line',C.muted)+rect(40,155,230,190,C.panel,C.muted,0)+lines(70,200,['$ build','working…','done.'],29,C.muted);
s+=arrow(300,240,355,240,C.line)+label(500,60,'Screen','Move the cursor',C.green)+grid(385,155,6,5,38,38,'READY >_');
s+=arrow(650,240,705,240,C.line)+label(850,60,'Today','Draw it with a GPU',C.blue)+grid(736,155,6,5,38,38,'READY >_',[6,7]);
save('history','Paper output became a screen; today software and a GPU draw that screen',s);
}
{
let s=node(20,40,250,'Shell','Text + commands',C.green)+node(20,250,250,'Neovim','Screen updates',C.purple);
s+=route('M275,111 H360 V204 H428',C.green)+route('M275,320 H360 V236 H428',C.purple);
s+=node(440,150,235,'Draxul','Builds the screen',C.blue)+arrow(685,220,750,220,C.blue)+grid(770,130,5,5,40,36,'hello>_');
s+=t(870,358,'Drawn by the GPU',27,C.blue,'middle');
save('architecture','A shell or Neovim sends updates; Draxul builds and draws the screen',s);
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
let s=grid(30,95,12,7,34,32,'',Array.from({length:12},(_,i)=>36+i))+t(234,367,'Thousands of cells',33,C.text,'middle');
s+=arrow(470,212,570,212,C.blue)+t(757,265,'2',178,C.blue,'middle',700)+lines(757,331,['draws for the main grid','in each pane'],30,C.text,'middle');
save('gpu_batching','Thousands of cells can be drawn together using two main grid draws per pane',s);
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
let s=label(137,100,'Leave','Close your view',C.muted)+rect(40,175,195,124,C.panel,C.muted)+line(67,198,210,273,C.muted,3)+line(67,273,210,198,C.muted,3);
s+=arrow(253,237,336,237,C.muted,'7 7')+node(350,164,300,'tmux','Keeps work running',C.green);
s+=arrow(665,237,744,237,C.blue)+label(865,100,'Come back','Same work',C.blue)+grid(768,175,5,3,39,41,'$ rundone $ _  ');
save('tmux_server','tmux keeps the work running while you close a view and open another later',s);
}
{
let s=node(20,145,250,'Your app','Sends output',C.green)+arrow(287,216,354,216,C.gold)+node(375,145,250,'tmux','Arranges the panes',C.gold)+arrow(641,216,710,216,C.blue)+node(730,145,250,'Draxul','Draws the window',C.blue);
save('tmux_stack','Application output goes through tmux, which arranges panes, then Draxul draws the window',s);
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
let s=t(45,50,'Herdr',42,C.green,'start',600)+t(45,97,'Runs and tracks your agents',32,C.text);
for(const [y,status,col] of [[153,'● Working',C.green],[243,'◆ Needs you',C.gold],[333,'✓ Finished',C.blue]]){s+=rect(45,y,485,70,y===243?'#34291d':C.panel,y===243?C.gold:C.line)+t(76,y+46,status,32,col);}
s+=arrow(548,278,631,278,C.gold)+lines(815,261,['Know where','to look next.'],36,C.text,'middle');
save('herdr','Herdr shows which agents are working, need your help, or have finished',s);
}
{
let s='';
for(const [x,title,color,entries] of [
  [20,'Find an agent',C.blue,[['agent list','Who is here?'],['agent get','What are they doing?']]],
  [360,'Give it work',C.green,[['agent start','Launch an agent'],['agent prompt','Send a task + Enter']]],
  [700,'Follow along',C.gold,[['agent wait','Wait for a chosen state'],['pane read','Read its terminal text']]]
]){
  s+=rect(x,35,280,278,C.panel,color)+t(x+140,83,title,30,color,'middle',600);
  for(const [i,[command,meaning]] of entries.entries()){
    s+=t(x+22,141+i*92,command,28,C.text,'start',600)+t(x+22,175+i*92,meaning,22,C.muted);
  }
}
s+=arrow(310,171,346,171,C.line)+arrow(650,171,686,171,C.line);
s+=t(500,358,'CLI example',22,C.muted,'middle');
s+=t(500,405,'draxul agent prompt <id> --text "Run the tests"',29,C.green,'middle',500);
save('agent_apis','Draxul commands find agents, give them work, wait for their state, and read their terminal output',s);
}
console.log('Wrote 14 simplified diagrams.');
