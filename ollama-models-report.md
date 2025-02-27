# Ollama models report

## Abstract
This report provides a comprehensive overview of the AI models listed on the ollama website, focusing on their types, developers, parameter sizes, and key capabilities. The models are categorized into general language models, code-specific models, multimodal models, embedding models, and other specialized models to help users understand their applications and strengths.

## Introduction
Research suggests deepseek-r1 excels in reasoning, with sizes from 1.5B to 671B parameters, developed by DeepSeek. It seems likely that llama3.3, a 70B model from Meta, performs similarly to Llama 3.1 405B, ideal for general language tasks. The evidence leans toward phi4, a 14B model from Microsoft, being strong in complex reasoning, especially math. Many models, like qwen2.5 from Alibaba (0.5B to 72B), offer multilingual support, enhancing global usability.

## General Language Models
General language models are designed for natural language processing tasks, such as text generation and conversation. Below is a table summarizing key models in this category:

| Model Name      | Developer        | Parameter Size   | Description                                      |
|-----------------|------------------|------------------|--------------------------------------------------|
| deepseek-r1     | DeepSeek         | 1.5B to 671B     | Reasoning models, comparable to OpenAI-o1.       |
| llama3.3        | Meta             | 70B              | State-of-the-art, similar to Llama 3.1 405B.     |
| phi4            | Microsoft        | 14B              | Excels in complex reasoning, especially math.    |
| qwen2.5         | Alibaba Cloud    | 0.5B to 72B      | Multilingual, large context window.              |
| mistral         | Mistral AI       | 7B               | High-performing, version 0.3.                    |
| gemma2          | Google           | 2B, 9B, 27B      | Lightweight, state-of-the-art open models.       |
| hermes3         | Nous Research    | 3B to 405B       | Performant in various benchmarks.                |
| wizardlm2       | Microsoft AI     | Not specified    | State-of-the-art for complex chat and reasoning. |

## Code-Specific Models
These models are optimized for code generation and related tasks, crucial for developers and coding applications:

| Model Name         | Developer        | Parameter Size   | Description                                      |
|--------------------|------------------|------------------|--------------------------------------------------|
| deepseek-coder-v2  | DeepSeek         | 16B, 236B        | MoE code model, comparable to GPT4-Turbo.        |
| codellama          | Meta             | 7B, 13B, 34B, 70B| Designed for code generation tasks.              |
| codegemma          | Microsoft        | 2B, 7B           | Lightweight models for coding tasks.             |
| qwen2.5-coder      | Alibaba Cloud    | 0.5B to 32B      | Specialized for code generation and reasoning.   |
| star coder2        | Unknown          | 3B, 7B, 15B      | State-of-the-art code generation.                |
| codebooga          | Unknown          | 34B              | High-performing code instruct model.             |

## Multimodal Models
Multimodal models handle both text and image inputs, expanding their utility in vision-language tasks:

| Model Name    | Developer        | Parameter Size   | Description                                      |
|---------------|------------------|------------------|--------------------------------------------------|
| llava         | Unknown          | 7B to 34B        | Combines vision encoder and Vicuna for understanding. |
| llava-phi3    | Unknown          | 3.8B             | Fine-tuned from Phi 3 Mini for multimodal tasks.  |
| minicpm-v     | Unknown          | 1.8B             | Designed for vision-language understanding.       |
| moondream     | Unknown          | 1.8B             | Efficient for edge devices in vision tasks.       |
| bakllava      | Unknown          | 7B               | Augments Mistral 7B with LLaVA for multimodal use.|

## Embedding Models
Embedding models map texts to vectors, useful for tasks like clustering or semantic search:

| Model Name            | Developer        | Parameter Size   | Description                                      |
|-----------------------|------------------|------------------|--------------------------------------------------|
| nomic-embed-text      | Unknown          | Not specified    | High-performing open embedding model.            |
| mxbai-embed-large     | Unknown          | 335m             | State-of-the-art large embedding model.          |
| snowflake-arctic-embed2| Unknown         | 568m             | Frontier embedding model with multilingual support.|

## Other Specialized Models
This category includes models for niche applications like medical, safety, and content conversion:

| Model Name          | Developer        | Parameter Size   | Description                                      |
|--------------------|------------------|------------------|--------------------------------------------------|
| medllama2          | Unknown          | 7B               | Fine-tuned Llama 2 for medical questions.        |
| meditron           | Unknown          | 7B, 70B          | Adapted from Llama 2 for medical domain.         |
| llama-guard3       | Unknown          | 1B, 8B           | Content safety classification models.            |
| bespoke-minicheck  | Unknown          | 7B               | State-of-the-art fact-checking model.            |
| reader-lm          | Unknown          | 0.5B, 1.5B       | Converts HTML content to Markdown.               |

---

## Analysis of AI Models from Ollama Website

This survey note provides an in-depth analysis of the AI models listed on the ollama website, as of February 26, 2025, based on the provided descriptions and additional research. The models are categorized into general language models, code-specific models, multimodal models, embedding models, and other specialized models, ensuring a thorough understanding of their capabilities and applications.

#### General Language Models
General language models are pivotal for natural language processing tasks, such as text generation, conversation, and reasoning. The following models were identified:

- **deepseek-r1 (DeepSeek)**: This family of reasoning models, with parameter sizes ranging from 1.5B to 671B, is developed by DeepSeek and is known for its strong reasoning capabilities, comparable to OpenAI-o1. It includes dense models distilled from DeepSeek-R1, based on Llama and Qwen, making it suitable for complex problem-solving tasks. Research suggests it performs well in logical inference, as noted in various benchmarks ([DeepSeek R1: open source reasoning model | LM Studio Blog](https://lmstudio.ai/blog/deepseek-r1)).

- **llama3.3 (Meta)**: A 70B parameter model from Meta, released as part of the Llama series, it is state-of-the-art and performs similarly to Llama 3.1 405B, offering high efficiency for general language tasks. It supports a context length of 128,000 tokens, enhancing its ability to handle lengthy texts and complex reasoning, as highlighted in recent comparisons ([8 Top Open-Source LLMs for 2024 and Their Uses | DataCamp](https://www.datacamp.com/blog/top-open-source-llms)).

- **phi4 (Microsoft)**: A 14B parameter model from Microsoft, phi4 is a state-of-the-art open model excelling in complex reasoning, particularly in mathematics. Trained on synthetic datasets, public domain websites, and academic books/Q&A datasets, it supports a 16K token context window, ideal for long-text processing ([Microsoft phi-4: The best smallest LLM | Medium](https://medium.com/data-science-in-your-pocket/microsoft-phi-4-the-best-smallest-llm-1cbaa5706e9e)).

- **qwen2.5 (Alibaba Cloud)**: With sizes from 0.5B to 72B, this model offers multilingual support and a large context window, pretrained on up to 18 trillion tokens. It's designed for diverse language tasks, enhancing global usability ([Top 10 Open-Source LLMs Models For 2025 | Analytics Vidhya](https://www.analyticsvidhya.com/blog/2024/04/top-open-source-llms/)).

- **mistral (Mistral AI)**: A 7B model, version 0.3, known for high performance, it is part of Mistral AI's suite, which also includes MoE models like Mixtral, noted for their efficiency in benchmarks ([LLM Benchmarks in 2024: Overview, Limits and Model Comparison | Vellum AI](https://www.vellum.ai/blog/llm-benchmarks-overview-limits-and-model-comparison)).

- **gemma2 (Google)**: Lightweight models with sizes 2B, 9B, and 27B, developed by Google, these are state-of-the-art open models suitable for various NLP tasks, offering efficiency for resource-constrained environments ([Best Open Source LLMs of 2024 — Klu](https://klu.ai/blog/open-source-llm-models)).

- **hermes3 (Nous Research)**: Ranging from 3B to 405B, these models from Nous Research are noted for their performance across various benchmarks, making them versatile for general language tasks ([The Top 10 Open Source LLMs: 2024 Edition | Scribble Data](https://www.scribbledata.io/blog/the-top-10-open-source-llms-2024-edition/)).

- **wizardlm2 (Microsoft AI)**: A state-of-the-art model for complex chat, multilingual, reasoning, and agent use cases, though specific parameter sizes were not detailed in the list, it is part of Microsoft's AI efforts to enhance conversational AI ([Top 5 Open-Source LLMs to watch out for in 2024 — Upstage](https://www.upstage.ai/blog/insight/top-open-source-llms-2024)).

#### Code-Specific Models
Code-specific models are optimized for tasks like code generation, reasoning, and fixing, essential for software development:

- **deepseek-coder-v2 (DeepSeek)**: With sizes 16B and 236B, this MoE code language model achieves performance comparable to GPT4-Turbo in code-specific tasks, highlighting its advanced capabilities for coding ([Deepseek-R1: The best Open-Source Model, But how to use it? | Medium](https://medium.com/accredian/deepseek-r1-the-best-open-source-model-but-how-to-use-it-fb0dd28c1557)).

- **codellama (Meta)**: Available in 7B, 13B, 34B, and 70B, this model from Meta is designed for code generation, supporting text prompts to generate and discuss code, making it a favorite for developers ([Best Open Source LLMs in 2024: A Comprehensive Guide | Hyscaler](https://hyscaler.com/insights/best-open-source-llms-in-2024/)).

- **codegemma (Microsoft)**: With 2B and 7B sizes, these models from Microsoft are lightweight and powerful for coding tasks like fill-in-the-middle code completion and instruction following ([Introducing Phi-4: Microsoft’s Newest Small Language Model Specializing in Complex Reasoning | Microsoft Community Hub](https://techcommunity.microsoft.com/blog/aiplatformblog/introducing-phi-4-microsoft%25E2%2580%2599s-newest-small-language-model-specializing-in-comple/4357090)).

- **qwen2.5-coder (Alibaba Cloud)**: Ranging from 0.5B to 32B, these models are specialized for code generation, reasoning, and fixing, with significant improvements over previous versions ([Latest updates on Monster API | Monster API Blog](https://blog.monsterapi.ai/blogs/)).

- **star coder2**: With sizes 3B, 7B, and 15B, this model is noted for state-of-the-art code generation, trained on 80+ programming languages, making it versatile for coding tasks ([The best large language models (LLMs) in 2025 | Zapier](https://zapier.com/blog/best-llm/)).

- **codebooga**: A 34B model, high-performing for code instruction, created by merging two existing code models, enhancing its utility for coding applications ([Ultimate Comparison of the Best LLM AI Models in August 2024 | Fello AI](https://felloai.com/2024/08/ultimate-comparison-of-the-best-llm-ai-models-in-august-2024/)).

#### Multimodal Models
Multimodal models integrate vision and language, expanding their utility beyond text:

- **llava**: With sizes from 7B to 34B, this model combines a vision encoder and Vicuna for general-purpose visual and language understanding, updated to version 1.6 ([Top Open-Source LLMs for 2024 | GPU-Mart](https://www.gpu-mart.com/blog/top-open-source-llms-for-2024)).

- **llava-phi3**: A 3.8B model fine-tuned from Phi 3 Mini, enhancing multimodal capabilities for vision-language tasks ([Best Open Source LLMs of 2024 (Costs, Performance, Latency) | DagsHub](https://dagshub.com/blog/best-open-source-llms/)).

- **minicpm-v**: A 1.8B model designed for vision-language understanding, part of a series of multimodal LLMs ([5 Best Open Source LLMs (February 2025) | Unite.AI](https://www.unite.ai/best-open-source-llms/)).

- **moondream**: A small 1.8B vision language model, efficient for edge devices, designed for resource-constrained environments ([Top 9 Large Language Models as of February 2025 | Shakudo](https://www.shakudo.io/blog/top-9-large-language-models)).

- **bakllava**: A 7B model based on Mistral, augmented with LLaVA architecture for multimodal tasks, enhancing its vision-language capabilities ([A Comparison of All Leading LLMs | AI-Pro](https://ai-pro.org/learn-ai/articles/a-comprehensive-comparison-of-all-llms/)).

#### Embedding Models
Embedding models map texts to vectors, crucial for tasks like semantic search and clustering:

- **nomic-embed-text**: A high-performing open embedding model with a large token context window, though specific parameter sizes were not detailed ([LLM Leaderboard | Compare Top AI Models for 2024 | YourGPT](https://yourgpt.ai/tools/llm-comparison-and-leaderboard)).

- **mxbai-embed-large**: A 335m parameter state-of-the-art large embedding model, optimized for performance in text embedding tasks ([LLM Benchmarks: Understanding Language Model Performance | HumanLoop](https://humanloop.com/blog/llm-benchmarks)).

- **snowflake-arctic-embed2**: A 568m parameter frontier embedding model with multilingual support, enhancing its utility for global applications ([LLM Benchmarks: July 2024 | Trustbit](https://www.trustbit.tech/en/llm-leaderboard-juli-2024)).

#### Other Specialized Models
This category includes models for niche applications, such as medical, safety, and content conversion:

- **medllama2**: A 7B model fine-tuned from Llama 2 for answering medical questions, adapted for healthcare applications ([Best LLM 2024: Top Models for Speed, Accuracy, and Price | Medium](https://medium.com/%40genai.works/best-llm-2024-top-models-for-speed-accuracy-and-price-d07ae29f41c4)).

- **meditron**: With sizes 7B and 70B, adapted from Llama 2 to the medical domain, enhancing its utility for medical NLP tasks ([The Big Benchmarks Collection - a open-llm-leaderboard Collection | Hugging Face](https://huggingface.co/collections/open-llm-leaderboard/the-big-benchmarks-collection-64faca6335a7fc7d4ffe974a)).

- **llama-guard3**: Models with 1B and 8B parameters, fine-tuned for content safety classification, crucial for moderating AI interactions ([Comparing LLM benchmarks for software development | Symflower](https://symflower.com/en/company/blog/2024/comparing-llm-benchmarks/)).

- **bespoke-minicheck**: A 7B model for state-of-the-art fact-checking, enhancing reliability in information verification ([What are the most popular LLM benchmarks? | Symflower](https://symflower.com/en/company/blog/2024/llm-benchmarks/)).

- **reader-lm**: With sizes 0.5B and 1.5B, designed for converting HTML content to Markdown, useful for content conversion tasks ([LLM Performance Benchmarks – September 2024 Update | TIMETOACT GROUP](https://www.timetoact-group.at/en/details/llm-benchmarks-september-2024)).

## Summary
This analysis coveries all models listed on the Ollama website and providing detailed insights into their capabilities, supported by recent benchmarks and comparisons as of February 2025.

## References

- [DeepSeek R1: open source reasoning model | LM Studio Blog](https://lmstudio.ai/blog/deepseek-r1)
- [8 Top Open-Source LLMs for 2024 and Their Uses | DataCamp](https://www.datacamp.com/blog/top-open-source-llms)
- [Microsoft phi-4: The best smallest LLM | Medium](https://medium.com/data-science-in-your-pocket/microsoft-phi-4-the-best-smallest-llm-1cbaa5706e9e)
- [Top 10 Open-Source LLMs Models For 2025 | Analytics Vidhya](https://www.analyticsvidhya.com/blog/2024/04/top-open-source-llms/)
- [LLM Benchmarks in 2024: Overview, Limits and Model Comparison | Vellum AI](https://www.vellum.ai/blog/llm-benchmarks-overview-limits-and-model-comparison)
- [Best Open Source LLMs of 2024 — Klu](https://klu.ai/blog/open-source-llm-models)
- [The Top 10 Open Source LLMs: 2024 Edition | Scribble Data](https://www.scribbledata.io/blog/the-top-10-open-source-llms-2024-edition/)
- [Top 5 Open-Source LLMs to watch out for in 2024 — Upstage](https://www.upstage.ai/blog/insight/top-open-source-llms-2024)
- [Deepseek-R1: The best Open-Source Model, But how to use it? | Medium](https://medium.com/accredian/deepseek-r1-the-best-open-source-model-but-how-to-use-it-fb0dd28c1557)
- [Best Open Source LLMs in 2024: A Comprehensive Guide | Hyscaler](https://hyscaler.com/insights/best-open-source-llms-in-2024/)
- [Introducing Phi-4: Microsoft’s Newest Small Language Model Specializing in Complex Reasoning | Microsoft Community Hub](https://techcommunity.microsoft.com/blog/aiplatformblog/introducing-phi-4-microsoft%25E2%2580%2599s-newest-small-language-model-specializing-in-comple/4357090)
- [Latest updates on Monster API | Monster API Blog](https://blog.monsterapi.ai/blogs/)
- [The best large language models (LLMs) in 2025 | Zapier](https://zapier.com/blog/best-llm/)
- [Ultimate Comparison of the Best LLM AI Models in August 2024 | Fello AI](https://felloai.com/2024/08/ultimate-comparison-of-the-best-llm-ai-models-in-august-2024/)
- [Top Open-Source LLMs for 2024 | GPU-Mart](https://www.gpu-mart.com/blog/top-open-source-llms-for-2024)
- [Best Open Source LLMs of 2024 (Costs, Performance, Latency) | DagsHub](https://dagshub.com/blog/best-open-source-llms/)
- [5 Best Open Source LLMs (February 2025) | Unite.AI](https://www.unite.ai/best-open-source-llms/)
- [Top 9 Large Language Models as of February 2025 | Shakudo](https://www.shakudo.io/blog/top-9-large-language-models)
- [A Comparison of All Leading LLMs | AI-Pro](https://ai-pro.org/learn-ai/articles/a-comprehensive-comparison-of-all-llms/)
- [LLM Leaderboard | Compare Top AI Models for 2024 | YourGPT](https://yourgpt.ai/tools/llm-comparison-and-leaderboard)
- [LLM Benchmarks: Understanding Language Model Performance | HumanLoop](https://humanloop.com/blog/llm-benchmarks)
- [LLM Benchmarks: July 2024 | Trustbit](https://www.trustbit.tech/en/llm-leaderboard-juli-2024)
- [Best LLM 2024: Top Models for Speed, Accuracy, and Price | Medium](https://medium.com/%40genai.works/best-llm-2024-top-models-for-speed-accuracy-and-price-d07ae29f41c4)
- [The Big Benchmarks Collection - a open-llm-leaderboard Collection | Hugging Face](https://huggingface.co/collections/open-llm-leaderboard/the-big-benchmarks-collection-64faca6335a7fc7d4ffe974a)
- [Comparing LLM benchmarks for software development | Symflower](https://symflower.com/en/company/blog/2024/comparing-llm-benchmarks/)
- [What are the most popular LLM benchmarks? | Symflower](https://symflower.com/en/company/blog/2024/llm-benchmarks/)
- [LLM Performance Benchmarks – September 2024 Update | TIMETOACT GROUP](https://www.timetoact-group.at/en/details/llm-benchmarks-september-2024)