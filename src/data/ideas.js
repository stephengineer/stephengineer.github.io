export const ideas = [
  {
    category: 'Research & Modeling',
    items: [
      {
        id: 'rlhf-not-enough',
        type: 'Paper',
        title: 'RLHF Is Not Enough',
        takeaway:
          'Highlights why preference optimization alone doesn’t guarantee reasoning capabilities.',
        url: 'https://arxiv.org/abs/2310.00000',
      },
      {
        id: 'post-training',
        type: 'Article',
        title: 'Why Post-Training Matters More Than Pretraining',
        takeaway: 'Key insight: alignment quality increasingly dominates raw model scale.',
        url: '#',
      },
      {
        id: 'generative-agents',
        type: 'Paper',
        title: 'Generative Agents: Interactive Simulacra',
        takeaway: 'Influential for thinking about memory and long-horizon interaction.',
        url: 'https://arxiv.org/abs/2304.03442',
      },
    ],
  },
  {
    category: 'Systems & Product Thinking',
    items: [
      {
        id: 'vllm',
        type: 'System',
        title: 'vLLM: Easy, Fast, and Cheap LLM Serving',
        takeaway: 'Strong example of how inference design unlocks model usability.',
        url: 'https://vllm.ai',
      },
      {
        id: 'reliability',
        type: 'Article',
        title: 'Designing AI Systems for Reliability',
        takeaway:
          'Great perspective on why latency, failure modes, and UX matter as much as accuracy.',
        url: '#',
      },
    ],
  },
  {
    category: 'Conversations & Perspectives',
    items: [
      {
        id: 'dwarkesh-patel',
        type: 'Podcast',
        title: 'Dwarkesh Podcast — AI Alignment & Scaling',
        takeaway:
          'Consistently strong discussions on tradeoffs between scale, safety, and usefulness.',
        url: 'https://www.dwarkeshpatel.com/podcast',
      },
      {
        id: 'lennys-podcast',
        type: 'Podcast',
        title: "Lenny's Podcast — Product & Growth",
        takeaway: 'Deep dives into how product leaders operationalize technical innovations.',
        url: 'https://www.lennysnewsletter.com/podcast',
      },
      {
        id: 'latent-space',
        type: 'Podcast',
        title: 'Latent Space — AI Engineering',
        takeaway: 'Excellent technical depth on the emerging stack for AI engineers.',
        url: 'https://www.latentspace.io/',
      },
    ],
  },
]
