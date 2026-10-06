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

// 02: A history of the interface, drawn as an evolving data model.
{
let s='';const xs=[20,275,530,785];const labels=['Paper','Glass','Software','Draxul'];const colors=[C.muted,C.green,C.purple,C.blue];
xs.forEach((x,i)=>{s+=t(x,40,labels[i],32,colors[i],'start',600);s+=line(x,58,x+192,58,colors[i],3);if(i<3)s+=arrow(x+197,164,x+242,164,C.line);});
s+=rect(20,95,185,180,'#19212a',C.muted,0)+lines(35,128,['$ build','compiling…','done.','$ _'],24,C.muted);
s+=rect(275,95,185,180,C.panel,C.green)+grid(289,120,6,4,26,30,'READY >_')+rect(317,159,24,28,'none',C.green,0);
s+=rect(530,95,185,180,C.panel,C.purple)+grid(544,112,6,5,26,29,'vim   line 1line 2')+line(540,220,706,220,C.purple,2);
s+=grid(785,110,6,4,29,33,'AGENT READY ',[0,1,2,3,4,5,12,13])+t(792,278,'GPU surface',23,C.blue);
s+=lines(20,320,['Append-only','characters'],25)+lines(275,320,['Cursor + modes','Escape sequences'],25)+lines(530,320,['Emulate the device','PTY + cell grid'],25)+lines(785,320,['Keep the contract','Change the engine'],25);
s+=line(20,410,970,410,C.line)+t(500,402,'The display changed.  The byte-stream contract survived.',23,C.gold,'middle');
save('history','Terminal evolution: paper output, addressable screens, software emulators, GPU rendering',s);
}
// 03: Concrete Draxul paths, including the separate Neovim integration.
{
let s=block(15,45,190,94,'Shells',['Bash · Zsh · pwsh'],C.green)+block(15,265,190,94,'Neovim',['nvim --embed'],C.purple);
s+=arrow(210,91,280,91,C.green)+t(245,66,'PTY',19,C.green,'middle')+block(287,38,265,110,'Terminal core',['VT parser → cell state','server-owned'],C.green);
s+=arrow(210,312,280,312,C.purple)+t(248,284,'RPC',19,C.purple,'middle')+block(287,252,265,110,'UI redraw events',['ext_linegrid → cells','client-local'],C.purple);
s+=route('M552,94 H590 V200 H627',C.green)+route('M552,307 H590 V220 H627',C.purple);
s+=block(637,148,165,124,'Text',['Shape','Rasterize'],C.blue)+arrow(804,207,838,207)+block(847,148,140,124,'GPU',['Atlas','Quads'],C.blue);
s+=t(335,190,'Semantic snapshots / deltas',21,C.green)+t(674,322,'Shared rendering path',23,C.blue)+t(672,363,'Metal / Vulkan',27,C.text);
save('architecture','Draxul has a PTY and VT path for shells and a separate RPC path for Neovim; both reach text and GPU rendering',s);
}
// 04: PTY is transport; escape sequences are the language riding over it.
{
let s=block(15,110,200,150,'Shell / app',['stdin','stdout + stderr'],C.green)+block(393,110,210,150,'PTY / ConPTY',['Terminal transport','Not a font protocol'],C.gold)+block(785,110,200,150,'Draxul',['Input encoder','VT decoder'],C.blue);
s+=arrow(222,145,382,145,C.green)+t(304,127,'output bytes',19,C.green,'middle')+arrow(614,145,774,145,C.green)+t(691,127,'text + escapes',19,C.green,'middle');
s+=arrow(383,225,224,225,C.blue)+arrow(775,225,615,225,C.blue)+t(300,254,'input bytes',19,C.blue,'middle')+t(690,254,'keys + replies',19,C.blue,'middle');
s+=t(22,37,'TWO DIRECTIONS',19,C.muted)+t(23,73,'The terminal can answer back.',31,C.text);
s+=rect(75,305,850,108,C.panel,C.line)+t(98,340,'macOS',25,C.green)+t(242,340,'forkpty() · termios · window-size ioctl',23)+t(98,381,'Windows',25,C.blue)+t(242,381,'CreatePseudoConsole() · ResizePseudoConsole()',23);
save('pty','Bidirectional shell to pseudoterminal to Draxul transport, with platform-specific resize control',s);
}
// 06: Streaming state plus a concrete replay.
{
let s=t(10,27,'Reads can end halfway through a command.',27,C.muted);
s+=block(10,60,274,73,'read #1',['ESC [ 3 1'],C.gold)+block(326,60,310,73,'read #2',['m H i ESC [ 0 m'],C.green);
s+=t(744,74,'Result',22,C.muted)+grid(744,90,6,1,37,42,'Hi',[0,1]);
s+=block(10,214,180,80,'Ground',[],C.blue)+block(280,214,180,80,'Escape',[],C.gold)+block(555,214,180,80,'CSI',[],C.purple)+block(814,214,175,80,'Dispatch',[],C.green);
s+=arrow(197,246,271,246,C.gold)+t(232,228,'ESC',21,C.gold,'middle')+arrow(468,246,546,246,C.purple)+t(507,228,'[',26,C.purple,'middle')+arrow(740,246,806,246,C.green)+t(772,227,'m',24,C.green,'middle');
s+=route('M904,298 V352 H100 V300',C.green)+t(477,342,'Set foreground red → write “Hi” → reset attributes',23,C.green,'middle');
s+=t(14,412,'Retain partial state',24,C.gold)+t(355,412,'Bound buffers',24,C.gold)+t(659,412,'Recover from bad input',24,C.gold);
// The example uses ANSI red; highlight the output cells red rather than green.
s=s.replace(/<text x="762.5"([^>]+)fill="#7ee787"/,'<text x="762.5"$1fill="#ff8989"').replace(/<text x="799.5"([^>]+)fill="#7ee787"/,'<text x="799.5"$1fill="#ff8989"');
save('parser','A split ANSI color sequence retained across reads, dispatched by a streaming state machine',s);
}
// 07: Encoding, cell width and glyph generation are distinct operations.
{
let s=rect(14,15,972,78,C.panel,C.line)+t(37,47,'e + ◌́',29,C.gold)+t(198,47,'→',27,C.muted)+t(252,48,'é',37,C.text)+t(336,47,'2 code points · 1 display cluster · usually 1 cell',25,C.muted);
s+=t(39,77,'Illustrative Unicode example; font and width policy still matter.',19,C.muted);
const steps=[['UTF-8',['Decode','code points'],C.green],['Clusters',['Cell width','+ attributes'],C.green],['HarfBuzz',['Glyph IDs','+ offsets'],C.blue],['FreeType',['Rasterize','bitmaps'],C.blue],['Atlas',['Cache','texture UVs'],C.purple]];
steps.forEach(([title,sub,col],i)=>{const x=10+i*201;s+=block(x,145,181,125,title,sub,col);if(i<4)s+=arrow(x+184,206,x+196,206,C.line);});
s+=t(412,314,'Font selection + fallback',25,C.blue)+line(410,288,795,288,C.blue,2);
s+=t(17,364,'BYTE',21,C.muted)+t(143,364,'≠',32,C.gold)+t(207,364,'CHARACTER',21,C.muted)+t(390,364,'≠',32,C.gold)+t(459,364,'GLYPH',21,C.muted)+t(580,364,'≠',32,C.gold)+t(650,364,'CELL',21,C.muted);
s+=t(18,410,'Emoji, combining marks and ligatures make the differences visible.',25,C.text);
save('glyphs','Unicode decoding, display clusters and width, font selection, HarfBuzz shaping, FreeType rasterization and glyph caching',s);
}
// 08: Expanded layers of the actual two-pass grid renderer.
{
let s=t(12,30,'A cell is data for the GPU.',31,C.text)+grid(16,65,10,6,31,33,'$ build   compiling done      ',[0,1,2,3,4,5,6,20,21,22,23]);
s+=t(20,291,'CPU cell grid',24,C.green)+arrow(337,162,405,162,C.blue)+block(417,60,245,155,'GpuCell · 112 B',['position + size','colors + style flags','atlas UV + glyph offset'],C.blue);
s+=arrow(670,117,737,117,C.blue)+rect(750,45,222,120,'#1b2a3a',C.blue)+grid(765,61,7,3,27,28,'')+t(750,199,'1  Background quads',23,C.blue);
s+=route('M667,184 H711 V294 H739',C.purple)+rect(750,228,222,120,C.panel,C.purple)+grid(765,244,7,3,27,28,'$ builddone')+t(750,382,'2  Glyph quads',23,C.purple);
s+=rect(415,260,246,110,C.panel,C.purple)+t(434,292,'Glyph atlas',24,C.purple)+t(434,332,'A B C  a b c  0 1 2',24,C.text)+arrow(663,315,739,315,C.purple);
s+=t(18,412,'Instanced draws · shader-generated quads · alpha-blended glyphs',25,C.gold);
save('gpu_grid','CPU cells become 112-byte GPU cell records; separate instanced background and atlas-textured foreground passes',s);
}
// 09: A quantitative example of batching, explicitly not a benchmark.
{
let s=grid(15,40,24,10,18,20,'',Array.from({length:24},(_,i)=>120+i));
s+=t(15,279,'120 × 40 cells',35,C.text,'start',600)+t(15,316,'4,800 cell records in this example',23,C.muted)+arrow(471,149,548,149,C.blue);
s+=t(583,138,'2',125,C.blue,'start',700)+lines(700,92,['main grid','draw calls','per pane'],29,C.text);
s+=line(16,348,981,348,C.line)+t(18,383,'REUSE',19,C.purple,'start',600)+t(18,419,'Cached glyphs',25,C.text)+t(350,383,'BATCH',19,C.blue,'start',600)+t(350,419,'Instanced quads',25,C.text)+t(700,383,'SLEEP',19,C.green,'start',600)+t(700,419,'Wait when idle',25,C.text);
s+=t(584,229,'Metal on macOS',25,C.blue)+t(584,267,'Vulkan on Windows',25,C.blue)+t(584,311,'UI / extra passes are separate.',21,C.muted);
save('gpu_batching','Illustrative 4800-cell pane rendered with two main instanced grid draw calls, glyph reuse and idle waiting',s);
}
// 10: One small screen, a large state-space.  All edges denote actual interactions.
{
let s=grid(357,137,10,5,28,31,'$ vim     line 1    line 2    ',[30,31,32,33,34,35,36,37,38,39])+t(496,321,'One visible screen',26,C.text,'middle');
s+=block(5,10,270,102,'Resize + scroll',['margins · wrapping','history · alternate screen'],C.gold)+block(720,10,274,102,'Unicode',['width · fallback','clusters · ligatures'],C.purple)+block(5,285,270,108,'Input + modes',['mouse · paste · focus','cursor keys · selection'],C.blue)+block(720,285,274,108,'Timing + recovery',['partial reads · replies','output bursts · reconnect'],C.green);
s+=route('M277,62 H330 V157 H350',C.gold)+route('M718,62 H669 V159 H645',C.purple)+route('M277,340 H327 V260 H350',C.blue)+route('M718,340 H670 V260 H645',C.green);
s+=lines(500,53,['Compatibility lives','in the interactions.'],24,C.text,'middle')+t(500,433,'The happy path is “print a letter.”  Then someone opens Vim.',25,C.gold,'middle');
save('complexity','Terminal correctness requires interacting resize, Unicode, input-mode and timing state around the visible cell grid',s);
}
// 11: Persistent tmux ownership, with clients coming and going.
{
let s=rect(290,30,425,350,C.panel,C.green)+t(311,70,'tmux server',33,C.green,'start',600)+t(311,108,'Session → windows → panes',23,C.text)+block(314,145,169,100,'Pane 1',['PTY + shell'],C.green)+block(515,145,175,100,'Pane 2',['PTY + build'],C.green)+t(315,293,'Processes + screen state',27,C.text)+t(315,334,'Stay alive when a client detaches',22,C.muted);
s+=block(7,67,224,114,'Client A',['Terminal at work','detach'],C.muted)+arrow(238,125,280,125,C.muted,'6 6')+block(764,229,224,114,'Client B',['Terminal at home','reattach'],C.blue)+arrow(725,286,755,286,C.blue);
s+=t(10,416,'A pane is a terminal.  A client is a view onto it.',30,C.gold);
save('tmux_server','tmux server owns panes and their processes independently of attached terminal clients',s);
}
// 12: tmux emulates a terminal and re-encodes a composite screen.
{
let s=block(15,31,220,98,'Application',['Vim / shell / agent'],C.green)+arrow(243,82,342,82,C.green)+t(292,54,'VT bytes',20,C.green,'middle')+block(352,31,280,98,'tmux pane',['Parse → virtual screen'],C.gold);
s+=route('M632,81 H747 V149',C.gold)+block(619,159,365,109,'tmux layout',['Compose panes + status line','Encode for the outer terminal'],C.gold);
s+=route('M615,214 H452 V285',C.blue)+block(302,296,304,112,'Draxul',['Parse → grid → GPU'],C.blue)+t(58,320,'Another VT stream',24,C.blue)+arrow(193,342,290,342,C.blue);
s+=t(17,172,'INSIDE',20,C.green,'start',600)+t(17,209,'TERM=tmux-256color',22,C.text)+t(17,244,'or screen-256color',22,C.muted);
s+=t(664,325,'Capabilities cross boundaries.',24,C.text)+lines(664,361,['Colors · keys · clipboard','Extensions need cooperation.'],23,C.muted);
save('tmux_stack','In normal tmux mode application output is parsed, composed and encoded again before Draxul decodes it',s);
}
// 13: Evolution, not a claim that the old arrangement is still current.
{
let s=t(12,29,'BEFORE',21,C.muted,'start',600)+rect(13,58,330,295,C.panel,C.muted)+t(35,98,'One UI process',28,C.text)+lines(36,152,['Window + input','Fonts + GPU','VT state + scrollback','PTY + shells'],27,C.muted);
s+=arrow(363,209,442,209,C.blue)+t(406,181,'split',22,C.blue,'middle');
s+=t(466,29,'CURRENT OWNERSHIP',21,C.green,'start',600)+block(467,58,242,290,'Server',['PTY + shells','VT state + history','Session topology','Agent state','Persistence'],C.green)+block(741,58,242,290,'UI client',['Window + input','Fonts + GPU','Local focus','Local selection','Local viewport'],C.blue);
s+=line(725,56,725,349,C.line,2,'6 6')+t(469,389,'1 server',30,C.green)+t(744,389,'1…N clients',30,C.blue)+t(14,416,'Window lifetime ≠ shell lifetime',27,C.gold);
save('ownership','Draxul evolved from one UI-owned runtime to a headless server plus independent GPU clients',s);
}
// 14: Connection protocol carries semantic terminal state, not replayed history.
{
let s=t(20,35,'Server',31,C.green,'start',600)+t(794,35,'GPU client',31,C.blue,'start',600)+line(155,60,155,385,C.green,3)+line(844,60,844,385,C.blue,3);
const seq=[['Authenticate + negotiate version',90,'back'],['Current semantic snapshot',151,'forward'],['Ordered deltas + revisions',212,'forward'],['Input / resize · controller lease',273,'back'],['Gap or new epoch?  Resnapshot.',334,'forward']];
seq.forEach(([label,y,dir],i)=>{const c=dir==='back'?C.blue:C.green;s+=arrow(dir==='back'?834:165,y,dir==='back'?166:834,y,c)+rect(287,y-31,425,32,C.bg,C.bg,0)+t(500,y-8,label,22,c,'middle');});
s+=t(20,416,'macOS: Unix socket',24,C.muted)+t(577,416,'Windows: named pipe',24,C.muted);
save('reconnect','Authenticated versioned local IPC sends a snapshot and ordered semantic deltas; a controller lease governs input and resizing',s);
}
// 15: A conceptual interface diagram; does not pretend to be a product screenshot.
{
let s=rect(13,20,620,340,C.panel,C.line)+t(34,57,'Herdr',29,C.green,'start',600)+line(34,76,612,76,C.line)+line(217,78,217,359,C.line);
s+=t(34,110,'SPACES',18,C.muted)+t(35,143,'app',23,C.text)+t(35,178,'renderer',23,C.text)+t(34,223,'AGENTS',18,C.muted)+t(35,257,'● working',22,C.green)+t(35,292,'◆ blocked',22,C.gold)+t(35,327,'✓ done',22,C.blue);
s+=rect(236,96,377,111,C.bg,C.line,2)+t(252,128,'agent: renderer',23,C.text)+t(252,164,'Waiting for your decision…',21,C.gold)+rect(236,225,377,112,C.bg,C.line,2)+t(252,256,'tests',23,C.text)+t(252,296,'$ running in another pane',21,C.muted);
s+=t(673,80,'Keep it running',28,C.green,'start',600)+lines(673,118,['Detach, then return','to the same session.'],23)+t(673,208,'Find who needs you',28,C.gold,'start',600)+lines(673,247,['Agent state travels','up to the sidebar.'],23);
s+=t(16,406,'Agent-aware terminal multiplexer · familiar CLIs · scriptable control',25,C.text);
save('herdr','Conceptual Herdr interface with persistent spaces, panes and agents showing working, blocked and done states',s);
}
console.log('Wrote 13 editable SVG diagrams.');
