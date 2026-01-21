export const ideas = [
  {
    category: 'Research & Modeling',
    items: [
      {
        id: 'rlhf-not-enough',
        type: 'Paper',
        title: 'Is Preference Enough for RLHF?',
        takeaway:
          'Highlights why preference optimization alone doesn’t guarantee reasoning capabilities.',
        url: 'https://arxiv.org/abs/2505.06273v2',
        year: '2023',
      },
      {
        id: 'post-training',
        type: 'Article',
        title: 'Why Post-Training Matters More Than Pretraining',
        takeaway: 'Key insight: alignment quality increasingly dominates raw model scale.',
        url: 'https://prajnaaiwisdom.medium.com/llm-pre-training-vs-post-training-why-the-second-half-matters-more-than-you-think-6a9941a00421',
        medium: 'Medium',
      },
      {
        id: 'generative-agents',
        type: 'Paper',
        title: 'Generative Agents: Interactive Simulacra',
        takeaway: 'Influential for thinking about memory and long-horizon interaction.',
        url: 'https://arxiv.org/abs/2304.03442',
        year: '2023',
      },
    ],
  },
  {
    category: 'Systems & Product Thinking',
    items: [
      {
        id: 'vllm',
        type: 'Blog',
        title: 'Easy, Fast, and Cheap LLM Serving with PagedAttention',
        takeaway: 'Strong example of how inference design unlocks model usability.',
        url: 'https://blog.vllm.ai/2023/06/20/vllm.html',
        company: 'vLLM Team',
      },
      {
        id: 'reliability',
        type: 'Article',
        title: 'Designing AI Systems for Reliability',
        takeaway:
          'Great perspective on why latency, failure modes, and UX matter as much as accuracy.',
        url: 'https://www.montecarlodata.com/blog-ai-reliability/',
        medium: 'Monte Carlo',
      },
    ],
  },
  {
    category: 'Conversations & Perspectives',
    items: [
      {
        id: 'dwarkesh-patel',
        type: 'Podcast',
        title: 'Dwarkesh Patel: The Scaling Era of AI is Here',
        takeaway:
          'Consistently strong discussions on tradeoffs between scale, safety, and usefulness.',
        url: 'https://www.youtube.com/watch?v=w54t0d2caxo',
        author: 'Dwarkesh Patel',
      },
      {
        id: 'lennys-podcast',
        type: 'Podcast',
        title: "How to consistently go viral: Nikita Bier’s playbook for winning at consumer apps",
        takeaway: 'Deep dives into how product leaders operationalize technical innovations.',
        url: 'https://www.youtube.com/watch?v=bhnfZhJWCWY',
        author: 'Lenny Rachitsky',
      },
      {
        id: 'latent-space',
        type: 'Podcast',
        title: 'Greg Brockman on OpenAI\'s Road to AGI',
        takeaway: 'Excellent technical depth on the emerging stack for AI engineers.',
        url: 'https://www.youtube.com/watch?v=35ZWesLrv5A',
        author: 'Latent Space',
      },
    ],
  },
]
