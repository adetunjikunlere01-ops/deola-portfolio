const L=(a,f)=>a.map(f).join('');
// [title, tags, metric, metric label, context, what I did, impact]
const P=[

['Building One Company Through Change','Oando Energy Resources|Change Management|Internal Communications|Employee Engagement|Recognition & Culture','500+','employees reached through an ongoing communications and engagement channel','Following the NAOC integration into the organisation, there was a need to strengthen employee connection, establish shared cultural touchpoints and help employees across office and field locations feel part of one company. Internal communications and employee engagement played a critical role in bridging teams, reinforcing a shared identity and supporting the transition.','Established and managed a Microsoft Teams engagement channel serving 500+ employees, providing a consistent touchpoint for organisational updates, safety and medical communications, cultural celebrations and employee engagement. Coordinated employee appreciation and gifting initiatives, improving delivery processes through clearer ownership, structured planning and stakeholder coordination. Delivered engagement initiatives around Employee Appreciation Day, Africa Day and the FIFA World Cup, creating opportunities for employees across office and field locations to participate in shared experiences.','Achieved 90% participation in Employee Appreciation Day and 95% participation in Africa Day, including field employees, alongside 60% participation in FIFA World Cup engagement activities. Reduced end-of-year field gifting delivery time by 93% and established an ongoing communications and engagement channel serving 500+ employees. Together, these initiatives supported employee connection, recognition and participation across locations, helping reinforce a shared organisational identity.'],
['Creating Space for 400 Women and Girls in Nigeria and Kenya','Flutterwave|DEI|Internal Communications','400+','women and girls trained and mentored, with a 25% rise in participation','As part of Flutterwave’s 2024 Women’s Month programming, I was a panellist at the global Women’s Event in Nigeria and Kenya, an internal event focused on training and mentoring 400 women and girls to explore opportunities in technology.','Shared my experience as a woman in tech, using storytelling and conversation to encourage women and girls to see themselves as future participants and leaders in the industry. Helped amplify the programme through a coordinated marketing strategy.','Contributed to a programme that trained and mentored 400+ women and girls across Nigeria and Kenya, while driving a 25% increase in programme participation.'],
['Rebuilding Employee Engagement Across a Distributed Workforce','Centric AI|Employee Engagement|Culture','21→54%','employee engagement in four months, with 2× cross-regional engagement','With teams distributed across seven markets, employee engagement stood at just 21%, creating a need for stronger connection, participation and shared culture across locations.','Developed and delivered engagement programmes across Lagos, Nairobi, Kigali, Johannesburg, Dar es Salaam, Berlin and the US. Created cross-regional experiences and connected engagement initiatives to the company’s technology, sustainability and culture narrative.','Increased employee engagement from 21% to 54% in four months, alongside a 2× improvement in cross-regional engagement.'],
['120 People. One Year. One Story.','Flutterwave|Employee Storytelling|Talent Communications','65%','positive employee feedback','Flutterwave’s 120 Graduate Trainees were in a year-long learning and development programme, but their stories and experiences had a chance to reach a much wider employee audience.','Developed a storytelling campaign profiling the graduate cohort throughout their one-year journey. Partnered with the Talent and People teams to identify stories and turn individual experiences into a broader narrative around growth, learning and belonging.','Achieved 65% positive employee feedback, turning a Talent programme into a visible, human-centred company story.'],
['Celebrating Women, Advancing Inclusion: 2026 Women’s Month','Oando Energy Resources|Internal Communications|Employee Engagement|DEI','200+','attendees at the African Women’s Music Show','I led and managed a month-long campaign celebrating women across the organisation and office locations, creating opportunities to spotlight their contributions, amplify their voices and engage employees around gender equality and inclusion.','Coordinated a multi-format campaign featuring women across the organisation, built around the themes Rights. Justice. Action. For ALL Women and Girls, and Give to Gain. It also featured an African Women’s Music Show with a female host and DJ, celebrating African women’s music and culture.','Positive employee feedback and commendations, strengthening visibility, recognition and conversations around women’s inclusion and empowerment.'],
['Turning Sustainability Into an Employee Experience','Employee Engagement|Sustainability|Corporate Objectives','2.5×','growth in engagement, from 21% to 54% in four months','For World Environment Day, I saw an opportunity to move beyond a conventional awareness campaign and create an experience that connected employees with sustainability in a more tangible and relevant way.','Developed an employee experience combining a neighbourhood walk, planting, community waste-separation activities and the launch of an AI wind-analysis model, connecting employees, community, sustainability, technology and brand purpose.','Increased employee engagement from 21% to 54% in four months, a 33-percentage-point increase and more than 2.5× growth in engagement.']
];
const tags=p=>L(p[1].split('|'),t=>`<li>${t}</li>`);
const rows=el=>{el.innerHTML=L(P,(p,i)=>`<article class="row" id="p${i+1}"><div class="m"><b>${p[2]}</b><span>${p[3]}</span><img src="images/project-${C[i]}.png?v=20261020" alt="${p[0]}" loading="lazy"></div><div><h3><a href="project.html?p=${i+1}">${p[0]}</a></h3><ul class="chips">${tags(p)}</ul><p class="imp">${p[6]}</p><a class="more" href="project.html?p=${i+1}">Read the full brief</a></div></article>`)};
const slides=el=>{el.innerHTML=L(P,(p,i)=>`<a class="slide" href="projects.html#p${i+1}" aria-label="Project ${i+1} of ${P.length}: ${p[0]}"><div class="m"><b>${p[2]}</b><span>${p[3]}</span></div><div><h3>${p[0]}</h3><ul class="chips">${tags(p)}</ul><p>${p[6]}</p><span class="more">Read the full project</span></div></a>`)};

// Evidence links for each project page, in the same order as P above.
// Paste a URL as the second item of a pair. Pairs with an empty URL stay hidden.
const V=[
[['RACI matrix and delivery plan',''],['Teams channel and SLA report','']],
[['Read the feature on training 400 women and girls','https://guardian.ng/news/flutterwave-trains-400-girls-women-in-nigeria-kenya-to-commemorate-womens-history-month/']],
[['Engagement survey results','']],
[['Watch the graduate storytelling campaign','https://www.instagram.com/reel/CxIjKmlIxRS/?xtok=MWM2Mnc4bTZ1Zmkybw==']],
[['Campaign photos and videos','']],
[['Watch the employee sustainability experience','https://www.instagram.com/reel/DKhFjKJt6FJ/?psln=MTVsaHIxaHdzcjJ6ZQ%3D%3D']]
];
const C=[1,5,3,4,2,6]; // Preserve each project's existing cover image after reordering.
// Three optional supporting images per project: two after Context, one after What I did.
// Add image paths in each project's array when the supporting assets are available.
const G = [
  [
    'images/projects/oando-change-management/image%201.jpeg',
    'images/projects/oando-change-management/image%202.jpeg',
    'images/projects/oando-change-management/image%203.jpeg'
  ],
  [
    'images/projects/women-and-girls-in-tech/image%201.jpeg',
    'images/projects/women-and-girls-in-tech/image%202.jpeg',
    'images/projects/women-and-girls-in-tech/image%203.jpeg'
  ],
  [
    'images/projects/centric-ai-engagement/image%201.jpg',
    'images/projects/centric-ai-engagement/image%202.jpeg',
    'images/projects/centric-ai-engagement/image%203.jpeg'
  ],
  [
    'images/projects/flutterwave-graduate-story/image%201.jpg',
    'images/projects/flutterwave-graduate-story/image%202.jpeg',
    'images/projects/flutterwave-graduate-story/image%203.jpeg'
  ],
  [
    'images/projects/womens-month-2026/image%201.jpeg',
    'images/projects/womens-month-2026/image%202.jpeg',
    'images/projects/womens-month-2026/image%203.jpeg'
  ],
  [
    'images/projects/sustainability-campaign/image%201.jpeg',
    'images/projects/sustainability-campaign/image%202.jpeg',
    'images/projects/sustainability-campaign/image%203.jpeg'
  ]
];
const gallery=(projectIndex,startIndex)=> {
  const paths=G[projectIndex]||[];
  const slots=startIndex===2?[2]:[0,1];
  return `<div class="project-gallery" aria-label="Project images">${slots.map(slot=>{
    const src=paths[slot];
    return src
      ? `<figure class="project-shot"><img src="${src}" alt="Supporting project image ${slot+1}" loading="lazy"></figure>`
      : `<figure class="project-shot project-shot--placeholder"><span>Supporting image ${slot+1}</span><small>Add image path in projects.js</small></figure>`;
  }).join('')}</div>`;
};
const brief=el=>{let n=parseInt(new URLSearchParams(location.search).get('p'),10);if(!(n>=1&&n<=P.length))n=1;const i=n-1,p=P[i],v=(V[i]||[]).filter(x=>x[1]),pv=(i+P.length-1)%P.length,nx=n%P.length;document.title=p[0]+' | Deola Oderinde';
el.innerHTML=`<a class="back" href="projects.html#p${n}">All projects</a><div class="dh"><div class="m"><b>${p[2]}</b><span>${p[3]}</span></div><div><h1>${p[0]}</h1><ul class="chips">${tags(p)}</ul></div></div><img class="cover" src="images/project-${C[i]}.png?v=20261020" alt="${p[0]} — project hero image" fetchpriority="high"><div class="sec"><h2>Context</h2><p>${p[4]}</p></div>${gallery(i,0)}<div class="sec"><h2>What I did</h2><p>${p[5]}</p></div>${gallery(i,2)}<div class="sec"><h2>Impact</h2><p class="imp">${p[6]}</p></div>${v.length?`<div class="sec"><h2>Project in action</h2><ul class="ev">${L(v,x=>`<li><a href="${x[1]}" target="_blank" rel="noopener">${x[0]}</a></li>`)}</ul></div>`:''}<div class="pn"><a href="project.html?p=${pv+1}"><small>Previous project</small><span>${P[pv][0]}</span></a><a href="project.html?p=${nx+1}"><small>Next project</small><span>${P[nx][0]}</span></a></div>`};
