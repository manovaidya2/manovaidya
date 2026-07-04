const fs = require("fs");

const filePath = "src/childhealthcare/ADHDChildArticlePage.jsx";
let content = fs.readFileSync(filePath, "utf-8");

// Update pageLinks
const newPageLinks = `const pageLinks = [
  { label: "Introduction", id: "introduction" },
  { label: "What is ADHD?", id: "what-is-adhd" },
  { label: "Signs & Symptoms", id: "signs-and-symptoms" },
  { label: "Beyond Behaviour", id: "beyond-behaviour" },
  { label: "ADHD Assessment", id: "adhd-assessment" },
  { label: "Looking Beyond Symptoms", id: "looking-beyond-symptoms" },
  { label: "Neuro-Ayurveda System", id: "neuro-ayurveda-system" },
  { label: "How We Work", id: "how-we-work" },
  { label: "How We Support", id: "how-we-support" },
  { label: "Parent Guidance", id: "parent-guidance" },
  { label: "Why Families Choose", id: "why-families-choose" },
  { label: "About Dr. Ankush Garg", id: "about-dr-ankush-garg" },
  { label: "FAQs", id: "faqs" },
  { label: "Book Consultation", id: "book-consultation" },
];`;

content = content.replace(/const pageLinks = \[[\s\S]*?\];/, newPageLinks);

// Update article content
const newArticle = `<article className="min-w-0">
          <p className="text-[12px] font-black uppercase tracking-[0.08em] text-[#7835A4]">ADHD Treatment</p>
          <h1 className="mt-3 max-w-[800px] text-[32px] font-black leading-[1.12] text-[#17111f] sm:text-[42px]">
            ADHD Treatment in India: ADHD Assessment, Attention & Child Development Support
          </h1>
          <p className="mt-4 max-w-[760px] text-[15px] font-bold leading-7 text-[#5a5063]">
            Take the first step toward understanding your child's attention, learning and behavioural needs through a structured ADHD Assessment and personalized guidance process.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <img src={doctorImage} alt="Dr. Ankush Garg" className="h-12 w-12 rounded-full object-cover" />
              <div>
                <p className="text-[13px] font-black text-[#21142d]">By Dr. Ankush Garg</p>
                <p className="text-[12px] font-bold text-[#75677d]">May 20, 2025 · 10 min read</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-[12px] font-black text-[#75677d]">
              <span>Share:</span>
              {["f", "x", "in", "wa"].map((label) => (
                <a
                  key={label}
                  href="#share"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f2eaf7] text-[#7835A4] transition hover:bg-[#7835A4] hover:text-white"
                  aria-label="Share article"
                >
                  {label === "wa" ? <Share2 className="h-4 w-4" /> : <span className="text-[11px] font-black">{label}</span>}
                </a>
              ))}
            </div>
          </div>

          <figure className="mt-7 overflow-hidden rounded-lg border border-[#eadff1] bg-white shadow-[0_14px_35px_rgba(58,31,90,0.08)]">
            <img
              src={childHeroImage}
              alt="Child development consultation support"
              className="w-full h-auto object-contain max-h-[500px] sm:max-h-[600px]"
            />
          </figure>

          <section id="introduction" className="mt-8">
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Every child learns, thinks and grows differently. Some children are naturally active, curious and energetic. However, when attention difficulties, hyperactivity or impulsive behaviour begin affecting learning, daily routines, school performance and social interactions, parents often start looking for answers.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Attention Deficit Hyperactivity Disorder (ADHD) is one of the most commonly observed neurodevelopmental conditions in children. It can influence attention, focus, behaviour, emotional regulation, learning and daily functioning.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, we understand that ADHD is not simply about a child being "too active" or "not listening." Attention, behaviour, learning readiness, emotional wellbeing and overall development are interconnected. This is why our approach focuses on understanding the child as a whole rather than looking at isolated symptoms alone.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Led by Dr. Ankush Garg, ADHD, Autism, Child Development & Mental Health Specialist in India, Manovaidya follows a structured Neuro-Ayurveda Development System designed to help families better understand their child's developmental needs and create a clear roadmap for long-term growth and support.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Whether parents are searching for ADHD Treatment in India, ADHD Assessment, Child Development Support or guidance regarding attention and behaviour concerns, our goal is to provide clarity, structured guidance and individualized support.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Families from across India, Delhi, Noida, Greater Noida, Ghaziabad and NCR connect with Dr. Ankush Garg for ADHD, Autism, Child Development and Mental Health support through a structured Neuro-Ayurveda Development System.
            </p>
            <div className="mt-5 rounded-lg bg-[#f4ecf8] p-5">
              <h3 className="font-bold text-[#3b2e45] mb-2 text-[14px]">At Manovaidya, ADHD Support Focuses On:</h3>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Attention & Focus Development", "Learning Readiness & Academic Support", "Behaviour Guidance & Emotional Regulation", "Parent Training & Family Support", "Brain Development & Cognitive Wellness", "Personalized Development Planning"].map(item => (
                  <li key={item} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-5">
              <h3 className="text-[16px] font-black text-[#21142d]">Book an ADHD Assessment</h3>
              <p className="mt-2 text-[13px] font-bold leading-6 text-[#51465a]">
                Take the first step toward understanding your child's attention, learning and behavioural needs through a structured ADHD Assessment and personalized guidance process.
              </p>
            </div>
          </section>

          <section id="what-is-adhd" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">What is ADHD?</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Attention Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental condition that can influence a child's ability to maintain attention, regulate behaviour, manage impulses and stay organized during daily activities.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              ADHD is not a result of poor parenting, lack of intelligence or a child's unwillingness to listen. It is a developmental condition that affects how children process information, maintain focus, regulate behaviour and respond to their environment.
            </p>
            <h3 className="mt-4 font-black text-[16px] text-[#21142d]">Every child with ADHD is unique.</h3>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              Some children may primarily experience difficulties with attention and concentration, while others may display hyperactivity, impulsive behaviour or a combination of both. The way ADHD presents itself can vary significantly from one child to another.
            </p>
            <div className="mt-5 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[15px] font-black text-[#21142d]">Many parents first notice concerns when their child:</h3>
              <ul className="mt-3 space-y-2.5">
                {["Struggles to stay focused on tasks", "Frequently forgets instructions", "Appears easily distracted", "Has difficulty sitting still", "Interrupts conversations frequently", "Faces challenges completing schoolwork", "Acts impulsively without thinking through consequences"].map((step) => (
                  <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              These behaviours can sometimes affect academic performance, family routines, social relationships and overall confidence.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, we believe ADHD should be understood beyond behaviour alone. Attention, emotional regulation, learning readiness, behaviour, executive functioning and overall child development are often interconnected.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              A structured developmental understanding helps families move from confusion and frustration toward greater clarity and meaningful action.
            </p>
          </section>

          <section id="signs-and-symptoms" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Common Signs & Symptoms of ADHD</h2>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              The signs and symptoms of ADHD can vary depending on the child's developmental profile, age and individual needs.
            </p>
            <p className="mt-2 text-[14px] font-semibold leading-7 text-[#51465a]">
              While every child occasionally becomes distracted or energetic, ADHD-related concerns are often more persistent and may significantly affect daily functioning.
            </p>

            <div className="mt-5 space-y-5">
              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <Search className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Inattention Symptoms</h3>
                </div>
                <p className="mt-2 mb-3 text-[13px] font-bold text-[#51465a]">Children experiencing attention-related challenges may:</p>
                <ul className="space-y-2 sm:columns-2">
                  {["Have difficulty concentrating on tasks", "Become distracted easily", "Frequently forget instructions", "Lose personal belongings", "Make careless mistakes in schoolwork", "Struggle to complete tasks independently", "Have difficulty organizing activities", "Appear not to listen when spoken to directly", "Avoid tasks requiring sustained attention", "Frequently shift focus from one activity to another"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[13px] font-bold text-[#51465a]">Parents often describe these children as intelligent but unable to consistently maintain attention.</p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <Activity className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Hyperactivity Symptoms</h3>
                </div>
                <p className="mt-2 mb-3 text-[13px] font-bold text-[#51465a]">Some children with ADHD may display higher levels of physical activity than expected for their age. Common signs may include:</p>
                <ul className="space-y-2 sm:columns-2">
                  {["Constant movement or restlessness", "Difficulty sitting for extended periods", "Excessive talking", "Fidgeting frequently", "Running or climbing in inappropriate situations", "Difficulty remaining calm during structured activities", "Frequent need for movement", "Difficulty waiting patiently"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[13px] font-bold text-[#51465a]">Hyperactivity can sometimes become more noticeable in classroom settings where children are expected to sit, focus and follow routines.</p>
              </div>

              <div className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)]">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="h-5 w-5 text-[#7835A4]" />
                  <h3 className="text-[16px] font-black text-[#21142d]">Impulsivity Symptoms</h3>
                </div>
                <p className="mt-2 mb-3 text-[13px] font-bold text-[#51465a]">Impulsivity refers to acting quickly without fully considering consequences. Some common examples include:</p>
                <ul className="space-y-2 sm:columns-2">
                  {["Interrupting conversations", "Answering questions before they are completed", "Difficulty waiting for turns", "Acting without thinking", "Emotional outbursts", "Difficulty controlling immediate reactions", "Risk-taking behaviour", "Challenges following structured rules"].map((step) => (
                    <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[13px] font-bold text-[#51465a]">Impulsivity may affect learning, peer relationships, family interactions and emotional regulation.</p>
              </div>
            </div>
          </section>

          <section id="beyond-behaviour" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Understanding ADHD Beyond Behaviour</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              One of the most common misconceptions about ADHD is that it is simply a behaviour problem.
            </p>
            <div className="mt-4 rounded-lg bg-[#f4ecf8] p-5">
              <p className="text-[13px] font-bold text-[#3b2e45] mb-2">Parents are often told:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Your child is lazy.", "Your child needs more discipline.", "Your child is simply naughty.", "Your child will outgrow it."].map(item => (
                  <li key={item} className="flex gap-2 text-[13px] font-bold text-[#51465a] italic">
                    "{item}"
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              While behaviour may be one visible aspect of ADHD, the condition often involves much more than what appears on the surface.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Attention, emotional regulation, executive functioning, learning readiness, behaviour, motivation and organization are interconnected aspects of development.
            </p>
            <div className="mt-4 rounded-lg border border-[#eadff1] bg-white p-5">
              <p className="text-[13px] font-bold text-[#3b2e45] mb-3">For example:</p>
              <ul className="space-y-2.5">
                {[
                  "Difficulty maintaining attention may affect learning.",
                  "Emotional regulation challenges may influence behaviour.",
                  "Executive functioning difficulties may affect planning and organization.",
                  "Impulsivity may impact social relationships.",
                  "Attention difficulties may influence academic performance.",
                ].map((step) => (
                  <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              This broader developmental understanding forms an important part of the Neuro-Ayurveda Development System followed at Manovaidya.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Rather than focusing only on visible behaviours, the goal is to understand the factors that may influence attention, learning, behaviour and overall development so that families can receive clearer guidance and a more structured roadmap for long-term support.
            </p>
          </section>

          <section id="adhd-assessment" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">ADHD Assessment at Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Every child is unique, and every developmental journey is different.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many parents spend months or even years trying to understand why their child struggles with attention, focus, learning, behaviour or emotional regulation. Some children may be labelled as lazy, careless, stubborn or disobedient when the underlying concern may actually be related to attention and developmental functioning.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, ADHD Assessment focuses on understanding the complete developmental picture rather than evaluating a single symptom in isolation.
            </p>
            <div className="mt-5 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[15px] font-black text-[#21142d] mb-3">The assessment process is designed to help families gain clarity about:</h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {["Attention and concentration abilities", "Learning readiness", "Academic functioning", "Behavioural patterns", "Emotional regulation", "Impulsivity", "Social interaction", "Daily routines and functioning", "Developmental strengths", "Areas requiring support"].map((item) => (
                  <li key={item} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Our goal is not simply to identify challenges but to help families better understand their child's unique developmental profile and create a structured roadmap for future growth and support.
            </p>

            <h3 className="mt-6 text-[18px] font-black text-[#17111f]">What Does the Assessment Process Include?</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Detailed Parent Discussion", desc: "Understanding developmental history, school-related concerns, attention challenges, behavioural observations, learning patterns, emotional responses, daily routines, sleep habits, food preferences, and family observations." },
                { title: "Understanding Attention & Learning Patterns", desc: "Identifying attention strengths and challenges, learning readiness, behaviour patterns, emotional regulation abilities, organizational skills, social functioning, and academic difficulties." },
                { title: "Individualized Guidance", desc: "Providing parent guidance, behaviour support strategies, learning support recommendations, routine development strategies, emotional regulation support, and progress monitoring approaches." },
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-sm">
                  <h4 className="text-[14px] font-black leading-5 text-[#21142d]">{title}</h4>
                  <p className="mt-2 text-[12.5px] font-semibold text-[#5a5063] leading-6">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="looking-beyond-symptoms" className="mt-9 rounded-lg bg-[#f4ecf8] p-5">
            <h2 className="text-[20px] font-black text-[#17111f]">ADHD Treatment in India: Looking Beyond Symptoms</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              Many families searching for ADHD Treatment in India are often looking for ways to improve attention, reduce hyperactivity and help their child perform better at school.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              While these goals are important, focusing only on visible symptoms may not always provide a complete understanding of the child's developmental needs.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              Attention difficulties, impulsive behaviour, emotional regulation challenges, learning concerns and executive functioning skills are often interconnected.
            </p>
            <div className="mt-4 rounded-lg border border-[#eadff1] bg-white p-5">
              <p className="text-[13px] font-bold text-[#3b2e45] mb-3">For example:</p>
              <ul className="space-y-2.5">
                {[
                  "Difficulty focusing may affect learning.",
                  "Emotional regulation challenges may influence behaviour.",
                  "Executive functioning difficulties may impact planning and organization.",
                  "Impulsivity may affect peer relationships.",
                  "Academic struggles may affect confidence and self-esteem."
                ].map((step) => (
                  <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#3b2e45]">
              At Manovaidya, ADHD is understood through a broader developmental perspective. Rather than focusing only on individual symptoms, the goal is to understand the factors that may influence attention, behaviour, learning and overall development. This understanding forms the foundation of the Neuro-Ayurveda Development System.
            </p>
          </section>

          <section id="neuro-ayurveda-system" className="mt-9">
            <div className="flex gap-3 mb-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0e7f6] text-[#7835A4]">
                <Stethoscope className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-[20px] font-black text-[#17111f]">The Neuro-Ayurveda Development System</h2>
              </div>
            </div>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, developmental, behavioural and attention-related concerns are understood through the Neuro-Ayurveda Development System, a structured framework developed by Dr. Ankush Garg.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              The system was created to help families better understand the interconnected factors that may influence learning, attention, behaviour, emotional regulation and overall child development.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Rather than focusing only on symptoms, the Neuro-Ayurveda Development System focuses on understanding the child's broader developmental needs through five interconnected pillars.
            </p>
            <img
              src={neuroDiagramImage}
              alt="The Neuro-Ayurveda Development System"
              className="mt-5 w-full h-auto object-contain max-h-[400px] mb-5 rounded-lg border border-[#eadff1] bg-white shadow-sm p-4"
            />
            <div className="grid gap-4 sm:grid-cols-2 mt-4">
              {[
                { title: "Pillar 1: Brain Nourishment System", desc: "Attention, learning, memory, communication and emotional regulation are influenced by brain development. The Brain Nourishment System focuses on understanding factors that may influence: Attention, Learning readiness, Memory, Cognitive functioning, Emotional regulation, Academic participation. The goal is to help create stronger foundations for development and learning." },
                { title: "Pillar 2: Gut Response System", desc: "Digestive wellbeing may influence overall functioning and daily comfort. Many children experiencing developmental concerns may also experience: Picky eating, Appetite concerns, Digestive discomfort, Food sensitivities, Irregular bowel habits. The Gut Response System focuses on understanding how digestive wellbeing may influence overall development and functioning." },
                { title: "Pillar 3: Neural Network System", desc: "Development occurs through complex connections within the brain. The Neural Network System focuses on understanding factors that may influence: Learning readiness, Attention, Communication, Behaviour, Response patterns, Social engagement. This pillar helps families better understand developmental functioning from a broader perspective." },
                { title: "Pillar 4: Sensory Integration System", desc: "Some children with ADHD may experience sensory processing differences that influence behaviour, attention and emotional regulation. The Sensory Integration System focuses on understanding: Sensory sensitivities, Sensory seeking behaviours, Environmental influences, Daily functioning challenges, Self-regulation abilities. Understanding sensory needs often helps families better support their child's participation and comfort." },
                { title: "Pillar 5: Behaviour Guidance System", desc: "Behaviour is often a form of communication. Many behaviours observed in children with ADHD may be influenced by attention challenges, emotional regulation difficulties, frustration or environmental demands. The Behaviour Guidance System focuses on helping families understand: Behaviour patterns, Emotional responses, Triggers, Self-regulation challenges, Positive behaviour support strategies. The goal is to move beyond simply reacting to behaviour and instead understand the factors influencing it." },
              ].map(item => (
                <div key={item.title} className="bg-white rounded-lg p-5 shadow-[0_8px_22px_rgba(58,31,90,0.04)] border border-[#eadff1]">
                  <h4 className="text-[15px] font-black text-[#21142d] mb-2">{item.title}</h4>
                  <p className="text-[13px] font-semibold text-[#5a5063] leading-6">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="how-we-work" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How We Work at Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Every child is unique, which is why support at Manovaidya begins with understanding the child as a whole rather than focusing on a diagnosis alone.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Our process starts with a detailed assessment to understand developmental history, communication abilities, behaviour patterns, learning needs, attention profile, sensory responses and family concerns. Based on this understanding, families receive personalized guidance and a structured developmental roadmap tailored to their child’s individual needs.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Rather than following a one-size-fits-all approach, Manovaidya follows the Neuro-Ayurveda Development System to help families better understand the factors that may influence communication, attention, behaviour, learning, emotional wellbeing and overall development.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Support focuses on assessment, parent guidance, developmental planning, progress tracking and long-term family support so that parents can move forward with greater clarity, confidence and direction.
            </p>
            <div className="mt-4 rounded-lg bg-[#f4ecf8] p-5">
              <p className="text-[14px] font-bold text-[#3b2e45]">
                Every child is unique. This is why support at Manovaidya begins with a detailed assessment, developmental understanding and personalized guidance rather than a one-size-fits-all approach.
              </p>
            </div>
          </section>

          <section id="how-we-support" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">How We Support Children with ADHD</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, support is personalized because no two children are exactly alike. Every child has unique strengths, interests, challenges and developmental needs.
            </p>
            <div className="mt-4 rounded-lg border border-[#eadff1] bg-white p-5">
              <h3 className="text-[15px] font-black text-[#21142d] mb-3">Our approach focuses on:</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Understanding the child as an individual",
                  "Identifying developmental strengths",
                  "Recognizing areas requiring support",
                  "Providing structured parent guidance",
                  "Supporting learning and attention development",
                  "Monitoring progress over time",
                  "Encouraging long-term growth and wellbeing"
                ].map((step) => (
                  <li key={step} className="flex gap-2 text-[13px] font-bold text-[#51465a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#7835A4]" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
              Rather than focusing only on short-term behavioural outcomes, the emphasis is placed on supporting meaningful developmental progress through a structured and family-centred approach.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Many families connect with Manovaidya while searching for ADHD Treatment in India because they are looking for personalized guidance regarding attention, behaviour, learning and child development.
            </p>
          </section>
          
          <section id="parent-guidance" className="mt-9 grid gap-6 lg:grid-cols-[1fr_300px] lg:items-center">
            <div>
              <h2 className="text-[20px] font-black text-[#17111f]">Parent Guidance & Family Support</h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                ADHD affects not only the child but also the entire family system.
              </p>
              <div className="mt-3 rounded-lg bg-[#f4ecf8] p-4">
                <p className="text-[13px] font-bold text-[#3b2e45] mb-2">Many parents experience:</p>
                <ul className="grid sm:grid-cols-2 gap-1.5">
                  {["Frustration", "Confusion", "School-related stress", "Behavioural challenges at home", "Concerns about the future", "Emotional exhaustion"].map(item => (
                    <li key={item} className="flex gap-2 text-[12.5px] font-semibold text-[#51465a]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7835A4] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-4 text-[14px] font-semibold leading-7 text-[#51465a]">
                At Manovaidya, parent guidance is considered an important part of the developmental journey. Families receive support in understanding attention challenges, learning patterns, behavioural concerns, emotional regulation needs, daily support strategies and long-term developmental planning.
              </p>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
                When parents gain greater understanding and confidence, they are often better equipped to support their child's learning, behaviour and overall wellbeing. Our goal is to help families move from uncertainty and frustration toward clarity, confidence and meaningful action.
              </p>
            </div>
            <img
              src={supportFamilyImage}
              alt="Parent helping child learn at home"
              className="w-full rounded-lg object-cover shadow-[0_12px_30px_rgba(58,31,90,0.08)]"
            />
          </section>

          <section id="why-families-choose" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Why Families Choose Manovaidya</h2>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Choosing the right support system for a child with ADHD can feel overwhelming. Many parents receive different opinions regarding attention difficulties, hyperactivity, learning challenges and behaviour concerns. Some are advised to focus only on academics, while others are told to concentrate solely on behaviour management. Over time, many families find themselves searching for a more structured and comprehensive understanding of their child's developmental needs.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              At Manovaidya, our goal is to help families understand the bigger picture. Rather than focusing only on individual symptoms, we focus on understanding attention, learning, behaviour, emotional regulation and overall development together through a structured Neuro-Ayurveda Development System.
            </p>
            <p className="mt-3 text-[14px] font-semibold leading-7 text-[#51465a]">
              Families from Delhi, Noida, Greater Noida, Ghaziabad, Gurgaon and across India connect with Manovaidya for ADHD Assessment, Child Development Guidance and structured developmental support.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                { title: "Personalized Developmental Understanding", desc: "Every child is unique. Assessment and guidance are tailored to the child's individual strengths, challenges and developmental needs." },
                { title: "Structured Neuro-Ayurveda Development System", desc: "The five-pillar framework helps families better understand the factors that may influence attention, learning, behaviour, emotional regulation and overall development." },
                { title: "Family-Centred Approach", desc: "Parents are not expected to navigate the journey alone. Guidance focuses on helping families gain clarity and confidence in supporting their child." },
                { title: "Long-Term Development Focus", desc: "The emphasis is not only on short-term behavioural outcomes but also on supporting meaningful developmental growth over time." },
                { title: "Personalized Guidance & Progress Tracking", desc: "Families receive structured recommendations and support that help them better understand developmental progress and future planning." },
                { title: "Support Across Different Developmental Needs", desc: "The approach may support children experiencing challenges related to attention, learning, behaviour, emotional regulation, social interaction and executive functioning." },
              ].map(({ title, desc }) => (
                <div key={title} className="rounded-lg border border-[#eadff1] bg-white p-5 shadow-sm">
                  <h4 className="text-[14px] font-black text-[#21142d]">{title}</h4>
                  <p className="mt-2 text-[12.5px] font-semibold text-[#5a5063] leading-6">{desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[14px] font-bold leading-7 text-[#51465a]">
              Families across India choose Manovaidya because they are looking for structured ADHD Treatment support, personalized guidance and a long-term developmental roadmap for their child.
            </p>
          </section>

          <section id="about-dr-ankush-garg" className="mt-9 rounded-lg border border-[#eadff1] bg-[#fbf9fd] p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
              <img src={doctorImage} alt="Dr. Ankush Garg" className="h-24 w-24 rounded-full object-cover shadow-sm border-2 border-white" />
              <div>
                <p className="text-[12px] font-black uppercase tracking-[0.1em] text-[#7835A4]">About</p>
                <h2 className="mt-1 text-[18px] font-black text-[#17111f]">Dr. Ankush Garg</h2>
                <p className="mt-1 text-[13px] font-bold text-[#51465a]">ADHD, Autism, Child Development & Mental Health Specialist in India</p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  Dr. Ankush Garg is the Founder of Manovaidya and Creator of the Neuro-Ayurveda Development System, a structured framework developed to support developmental, behavioural and mental wellness concerns through a comprehensive and personalized approach.
                </p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  His work focuses on ADHD, Autism Spectrum Disorder (ASD), Child Development, Behavioural Challenges, Speech & Communication Concerns, Teen Mental Health, Adult Mental Health, Women's Emotional Wellbeing, Stress-Related Concerns and Senior Mental Health Support.
                </p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  Through Manovaidya, Dr. Ankush Garg combines traditional Ayurvedic understanding with modern insights into brain development, behaviour, emotional wellbeing and cognitive health. His approach emphasizes root-cause understanding, personalized guidance, family-centred support and long-term wellness planning.
                </p>
                <p className="mt-3 text-[13.5px] font-semibold leading-6 text-[#5a5063]">
                  Through detailed assessment, individualized recommendations and structured follow-up, he helps children, adults and families better understand their concerns and move forward with greater clarity, confidence and direction. Families from across India connect with Dr. Ankush Garg for ADHD, Autism, Child Development and Mental Health support through a compassionate, personalized and structured Neuro-Ayurveda Development System.
                </p>
              </div>
            </div>
          </section>

          <section id="faqs" className="mt-9">
            <h2 className="text-[20px] font-black text-[#17111f]">Frequently Asked Questions About ADHD</h2>
            <div className="mt-4 overflow-hidden rounded-lg border border-[#eadff1] bg-white">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="border-b border-[#eadff1] last:border-b-0">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-[13px] font-black text-[#21142d]"
                    aria-expanded={openFaq === index}
                  >
                    {faq.question}
                    <ChevronDown
                      className={\`h-4 w-4 shrink-0 text-[#7835A4] transition-transform \${
                        openFaq === index ? "rotate-180" : ""
                      }\`}
                    />
                  </button>
                  {openFaq === index && (
                    <p className="px-4 pb-4 text-[12.5px] font-semibold leading-6 text-[#5f5367]">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section id="book-consultation" className="mt-9 overflow-hidden rounded-lg border border-[#eadff1] bg-[#7835A4] text-white">
            <div className="p-7">
              <h2 className="text-[24px] font-black">Book a Consultation</h2>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                If you are looking for ADHD Treatment in India, ADHD Assessment, Attention Support, Learning Support or Child Development Guidance, you can schedule a consultation with Dr. Ankush Garg and the Manovaidya team.
              </p>
              <p className="mt-3 text-[14px] font-semibold leading-7 text-[#e5d5f2]">
                Through a structured assessment and personalized guidance process, families can gain a clearer understanding of their child's developmental needs and explore appropriate next steps for long-term growth, learning and wellbeing.
              </p>
              
              <div className="mt-6">
                <h3 className="text-[16px] font-black mb-3">Take the First Step</h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {[
                    "ADHD Assessment",
                    "Personalized Development Guidance",
                    "Parent Support & Family Guidance",
                    "Neuro-Ayurveda Development System",
                    "Structured Progress Planning"
                  ].map((step) => (
                    <li key={step} className="flex gap-2 text-[14px] font-bold">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d8b4e2]" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#8e45bb]">
                <h3 className="text-[18px] font-black mb-2">Book Your Consultation with Manovaidya Today</h3>
                <p className="text-[14px] font-bold text-[#e5d5f2]">Manovaidya Clinic</p>
                <p className="text-[14px] font-bold text-[#e5d5f2]">Noida, Uttar Pradesh, India</p>
                
                <a
                  href="tel:+917823894080"
                  className="mt-5 inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-[14px] font-black text-[#7835A4] transition hover:bg-[#fbf7ff]"
                >
                  Contact Us Now
                </a>
              </div>
            </div>
          </section>
        </article>`;

content = content.replace(/<article className="min-w-0">[\s\S]*?<\/article>/, newArticle);

fs.writeFileSync(filePath, content, "utf-8");
console.log("Success");
