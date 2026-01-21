export const projects = [
  {
    id: 'interview-agent',
    title: 'Interview Agent — Domain-Aligned LLM Training System',
    subtitle:
      'An end-to-end LLM training and alignment system designed to optimize model behavior for structured interview evaluation and reasoning tasks.',
    contributions: [
      'Fine-tuned open-source LLMs (3B–32B) using LoRA and full-parameter SFT to achieve stable and controllable outputs',
      'Conducted post-training alignment using PPO and GRPO on Qwen2.5 models with large-scale, high-quality labeled datasets',
      'Designed training pipelines following InstructGPT-style data distributions to generate tens of thousands of SFT samples',
      'Proposed causal inference–guided reasoning strategies combined with CoT to improve complex question solving',
      'Reproduced XDoc benchmark results, achieving +15% Macro-F1 across 45 classification labels',
      'Optimized inference using vLLM, TensorRT, and Triton, significantly improving throughput under high concurrency',
    ],
    tags: [
      'LLM alignment',
      'Post-training',
      'Controllability',
      'Efficient inference',
    ],
    badge: 'Flagship Project',
  },
  {
    id: 'qa-agent',
    title: 'Hybrid Retrieval-Augmented Question Answering System',
    subtitle:
      'Designed a scalable RAG system combining symbolic retrieval and learned ranking for high-precision question answering.',
    contributions: [
      'Built multi-path retrieval using Elasticsearch (title / subtitle / content indexing)',
      'Integrated TF-IDF, dense embeddings, and SimCSE for candidate generation',
      'Trained LightGBM ranking models using query–document–topic features',
      'Designed weighted semantic ranking to balance relevance and response latency',
    ],
    tags: [
      'Information retrieval',
      'Representation learning',
      'Hybrid retrieval systems',
    ],
  },
  {
    id: 'multi-agent',
    title: 'Multi-Agent Simulation & Reasoning Framework',
    subtitle:
      'Built a multi-agent environment inspired by Stanford Village AGI to study long-term memory, interaction, and emergent behavior.',
    contributions: [
      'Designed generative and automatic agent frameworks using In-Context Learning',
      'Implemented long-term and short-term memory using Pinecone + MySQL',
      'Enabled agent-to-agent social interaction and user-agent dialogues',
      'Built semi-automated annotation pipelines for dialogue supervision',
      'Established structured memory retrieval under RAG architectures',
    ],
    tags: [
      'Agentic systems',
      'Memory',
      'Planning',
      'Emergent behavior',
    ],
    badge: 'Research Focus',
  },
  {
    id: 'command-control',
    title: 'AI-Based Command Understanding & Decision Support System',
    subtitle:
      'Developed a natural-language-driven command-and-control system capable of interpreting, executing, and visualizing complex operational instructions.',
    contributions: [
      'Designed BiLSTM-CRF + BERT NER models for structured command extraction',
      'Built GPT-based NER with KNN prompting and self-verification (Accuracy 0.94, Recall 0.95)',
      'Implemented continuous learning pipelines for model improvement',
      'Developed trajectory prediction models using RNN/LSTM for dynamic target tracking',
      'Integrated response generation with automated + human evaluation',
    ],
    tags: [
      'Structured prediction',
      'Sequence modeling',
      'Reliability',
      'Human–AI interaction',
    ],
  },
]
