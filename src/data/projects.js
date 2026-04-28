export const projects = [
  {
    id: 'conversational-ai-evaluation-pipeline',
    title: 'Conversational AI Evaluation Pipeline',
    subtitle:
      'Closed-loop evaluation and load-testing infrastructure for real-time, multi-turn LLM conversational assistants, with experiment tracking and end-to-end latency measurement.',
    contributions: [
      'Built a Python evaluation framework supporting single-round and multi-turn assessments with persistent system sessions and 7 pluggable evaluators (LLM-as-judge, JSON comparison, pairwise A/B with position randomization).',
      'Designed an AI-powered query generation system that simulates realistic users adapting to live responses, and produced synthetic benchmarks using Claude with MCP server schemas.',
      'Implemented dataset synchronization between local files and LangSmith with SHA-256 content-hash change detection for efficient experiment tracking and reproducibility.',
      'Built pluggable SUT clients (scripts, MCP agents, OpenAI-compatible endpoints) integrated with Azure OpenAI, Anthropic Claude, and Azure Blob Storage for chat data management.',
      'Developed an async load-testing framework on Locust that correlates webhook callbacks with originating requests via gevent.AsyncResult, capturing true end-to-end latency for asynchronous LLM systems under concurrent load.',
      'Packaged the stack with uv, a Flask webhook server, and Docker for reproducible deployment, with dual message providers backed by curated LangSmith datasets and dynamically generated LLM follow-ups.',
    ],
    tags: [
      'LLM evaluation',
      'LLM-as-judge',
      'LangSmith',
      'MCP',
      'Load testing',
      'Async systems',
    ],
    badge: 'Evaluation Infrastructure',
  },
  {
    id: 'document-understanding',
    title: 'Document Understanding & Structured Summarization (LLM Post-Training)',
    subtitle:
      'Post-trained large language models for scalable document understanding, multi-label classification, and structured information extraction.',
    contributions: [
      'Led post-training of Qwen2.5 models (3B–72B) using full-parameter SFT combined with GRPO on a high-quality, 10K+ curated annotation dataset.',
      'Reproduced the XDoc benchmark pipeline, enabling accurate multi-label document understanding across 45 categories and achieving +15% Macro-F1 improvement over baseline models.',
      'Designed training pipelines following InstructGPT-style data distributions to generate tens of thousands of SFT samplesDesigned a scalable multi-task learning framework by extending tokenizer vocabularies, restructuring loss functions, and integrating customized focal loss, label smoothing, and dynamic masking strategies.Proposed causal inference–guided reasoning strategies combined with CoT to improve complex question solving',
      'Introduced non-autoregressive generation techniques to significantly improve token generation efficiency and reduce inference latency.',
      'Built end-to-end training and inference pipelines using Megatron-LM for distributed training and vLLM for high-throughput deployment, supporting 50K+ daily document labeling requests with low latency.',
    ],
    tags: [
      'LLM post-training',
      'Document intelligence',
      'Multi-task learning',
      'Alignment',
      'Efficient inference',
    ],
    badge: 'Applied Research',
  },
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
      'Optimized inference using vLLM, TensorRT, and Triton, significantly improving throughput under high concurrency',
    ],
    tags: [
      'LLM alignment',
      'Post-training',
      'Controllability',
      'Efficient inference',
    ],
    badge: 'LLM Alignment',
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
    badge: 'Production System',
  },
]
