import { AITool } from './types/AITool';

const allTools: AITool[] = [
  {
    name: "ChatGPT",
    description: "AI-powered chatbot for natural language conversations",
    category: ["Large Language Model", "AI Assistant", "Natural Language Processing"],
    url: "https://openai.com/chatgpt",
    pricing: "Free / Paid plans"
  },
  {
    name: "DALL·E 2",
    description: "AI system that creates images from textual descriptions",
    category: ["Text-to-Image Generation", "Image Generation"],
    url: "https://openai.com/dall-e-2",
    pricing: "Pay per use"
  },
  {
    name: "Midjourney",
    description: "AI-powered tool for generating artistic images",
    category: ["Text-to-Image Generation", "Image Generation"],
    url: "https://www.midjourney.com",
    pricing: "Subscription-based"
  },
  {
    name: "Stable Diffusion",
    description: "Open-source image generation model",
    category: ["Text-to-Image Generation", "Image Generation", "Open-Source AI"],
    url: "https://stability.ai",
    pricing: "Free / Paid options"
  },
  {
    name: "GitHub Copilot",
    description: "AI-powered code completion tool",
    category: ["Code Generation Assistant", "Coding Assistant"],
    url: "https://github.com/features/copilot",
    pricing: "Subscription-based"
  },

  {
    name: "RunwayML",
    description: "AI-powered video editing and generation tool",
    category: ["Video Generation"],
    url: "https://runwayml.com",
    pricing: "Subscription-based"
  },
  {
    name: "Eleven Labs",
    description: "AI voice generator and voice cloning platform",
    category: ["Speech Synthesis"],
    url: "https://www.elevenlabs.io",
    pricing: "Free / Paid plans"
  },

  {
    name: "Perplexity AI",
    description: "AI-powered search tools",
    category: ["Search Engine", "AI Assistant"],
    url: "https://www.perplexity.ai",
    pricing: "Free / Pro plans"
  },
  {
    "name": "Humanize AI",
    "description": "Advanced AI tool that generates incredibly natural, human-like text indistinguishable from content written by people, capable of producing 100% human-quality writing across various styles and formats",
    "category": ["Humanize AI"],
    "url": "https://www.humanizeai.pro/",
    "pricing": "Free / Pro plans"
  },

  {
    name: "Mem.ai",
    description: "AI-powered note-taking and knowledge management",
    category: ["Productivity"],
    url: "https://mem.ai",
    pricing: "Free / Paid plans"
  },

  {
    name: "Notion AI",
    description: "AI-powered writing assistant integrated with Notion",
    category: ["Productivity"],
    url: "https://www.notion.so/product/ai",
    pricing: "Add-on to Notion plans"
  },

  {
    name: "Elicit",
    description: "AI research assistant for literature review",
    category: ["Academia"],
    url: "https://elicit.org",
    pricing: "Free / Paid plans"
  },

  {
    name: "Synthesia",
    description: "AI video creation platform",
    category: ["Video Generation"],
    url: "https://www.synthesia.io",
    pricing: "Subscription-based"
  },
  {
    name: "LangChain",
    description: "Framework for developing applications powered by language models",
    category: ["Developer Tools"],
    url: "https://langchain.com",
    pricing: "Open-source"
  },

  {
    name: "Poe",
    description: "Platform for accessing various AI chatbots",
    category: ["Chatbots"],
    url: "https://poe.com",
    pricing: "Free / Paid plans"
  },
  {
    name: "Replit Ghostwriter",
    description: "AI-powered pair programmer",
    category: ["Coding Assistant"],
    url: "https://replit.com/site/ghostwriter",
    pricing: "Included with Replit plans"
  },
  {
    name: "Diagram",
    description: "AI-powered design tool",
    category: ["Design"],
    url: "https://diagram.com",
    pricing: "Subscription-based"
  },
  {
    name: "Mubert",
    description: "AI-powered royalty-free music generation",
    category: ["Music Generation"],
    url: "https://mubert.com",
    pricing: "Free / Paid plans"
  },
  {
    name: "D-ID",
    description: "AI-powered talking avatar creation",
    category: ["Video Generation"],
    url: "https://www.d-id.com",
    pricing: "Pay-as-you-go / Enterprise"
  },
  {
    name: "Hugging Face",
    description: "Platform for building, training and deploying ML models",
    category: ["Developer Tools"],
    url: "https://huggingface.co",
    pricing: "Free / Enterprise plans"
  },

  {
    name: "Replicate",
    description: "Platform for running machine learning models in the cloud",
    category: ["Developer Tools"],
    url: "https://replicate.com",
    pricing: "Pay-per-use"
  },
  {
    name: "Gamma",
    description: "AI-powered presentation creation tool",
    category: ["Presentation"],
    url: "https://gamma.app",
    pricing: "Free / Pro plans"
  },
  {
    name: "Soundraw",
    description: "AI music generation platform",
    category: ["Music Generation"],
    url: "https://soundraw.io",
    pricing: "Subscription-based"
  },
  {
    name: "Stable Diffusion",
    description: "Text-to-image model for generating images from text prompts",
    category: ["Image Generation"],
    url: "https://stability.ai/stable-diffusion",
    pricing: "Free / Paid plans"
  },
  {
    name: "Compose AI",
    description: "Chrome extension for AI-powered writing autocompletion",
    category: ["Writing Assistant"],
    url: "https://www.compose.ai",
    pricing: "Free"
  },
  {
    name: "Rytr",
    description: "AI writing assistant for high-quality content creation",
    category: ["Writing Assistant"],
    url: "https://rytr.me",
    pricing: "Free / Paid plans"
  },
  {
    name: "Wordtune",
    description: "AI-powered writing companion for better phrasing",
    category: ["Writing Assistant"],
    url: "https://www.wordtune.com",
    pricing: "Free / Paid plans"
  },
  {
    name: "HyperWrite",
    description: "AI writing assistant for faster and more confident writing",
    category: ["Writing Assistant"],
    url: "https://www.hyperwrite.com",
    pricing: "Free / Paid plans"
  },
  {
    name: "Moonbeam",
    description: "AI-powered tool for faster blog writing",
    category: ["Writing Assistant"],
    url: "https://www.gomoonbeam.com",
    pricing: "Paid"
  },
  {
    name: "Copy.ai",
    description: "AI-powered copywriting tool for marketing content",
    category: ["Writing Assistant"],
    url: "https://www.copy.ai",
    pricing: "Free / Paid plans"
  },
  {
    name: "Anyword",
    description: "AI writing assistant for effective marketing copy",
    category: ["Writing Assistant"],
    url: "https://anyword.com",
    pricing: "Paid"
  },
  {
    name: "Contenda",
    description: "AI tool for repurposing existing content",
    category: ["Content Creation"],
    url: "https://contenda.co",
    pricing: "Paid"
  },
  {
    name: "Hypotenuse AI",
    description: "AI-powered content generation from keywords",
    category: ["Content Creation"],
    url: "https://www.hypotenuse.ai",
    pricing: "Paid"
  },
  {
    name: "Lavender",
    description: "AI email assistant for improved response rates",
    category: ["Email Assistant"],
    url: "https://www.lavender.ai",
    pricing: "Paid"
  },
  {
    name: "Lex",
    description: "AI-powered word processor for faster writing",
    category: ["Writing Assistant"],
    url: "https://lex.page",
    pricing: "Free / Paid plans"
  },
  {
    name: "Jenni",
    description: "AI writing assistant for faster ideation and writing",
    category: ["Writing Assistant"],
    url: "https://jenni.ai",
    pricing: "Paid"
  },
  {
    name: "LAIKA",
    description: "Personalized AI writing partner based on your style",
    category: ["Writing Assistant"],
    url: "https://www.writewithlaika.com",
    pricing: "Paid"
  },
  {
    name: "QuillBot",
    description: "AI-powered paraphrasing tool",
    category: ["Writing Assistant"],
    url: "https://quillbot.com",
    pricing: "Free / Paid plans"
  },
  {
    name: "Postwise",
    description: "AI-powered tool for writing and scheduling social media posts",
    category: ["Social Media Assistant"],
    url: "https://postwise.ai",
    pricing: "Paid"
  },
  {
    name: "Copysmith",
    description: "AI content creation solution for enterprise and eCommerce",
    category: ["Content Creation"],
    url: "https://copysmith.ai",
    pricing: "Paid"
  },
  {
    name: "Taskade",
    description: "AI-powered tool for creating outlines, tasks, and mind maps",
    category: ["Productivity"],
    url: "https://www.taskade.com",
    pricing: "Free / Paid plans"
  },
  {
    name: "Nekton AI",
    description: "AI-powered workflow automation tool",
    category: ["Productivity"],
    url: "https://nekton.ai",
    pricing: "Paid"
  },
  {
    name: "Rewind",
    description: "Personalized AI powered by your digital history",
    category: ["Productivity"],
    url: "https://www.rewind.ai",
    pricing: "Paid"
  },
  {
    name: "Cogram",
    description: "AI meeting assistant for automatic note-taking and action item identification",
    category: ["Meeting Assistant"],
    url: "https://www.cogram.com",
    pricing: "Paid"
  },
  {
    name: "Sybill",
    description: "AI-powered sales call analyzer and summarizer",
    category: ["Meeting Assistant"],
    url: "https://www.sybill.ai",
    pricing: "Paid"
  },
  {
    name: "Loopin AI",
    description: "Collaborative AI meeting workspace for recording and organizing notes",
    category: ["Meeting Assistant"],
    url: "https://www.loopinhq.com",
    pricing: "Paid"
  },
  {
    name: "Elicit",
    description: "AI-powered research assistant for literature reviews",
    category: ["Research Assistant"],
    url: "https://elicit.org",
    pricing: "Free"
  },
  {
    name: "Genei",
    description: "AI tool for summarizing academic articles",
    category: ["Research Assistant"],
    url: "https://www.genei.io",
    pricing: "Paid"
  },
  {
    name: "Explainpaper",
    description: "AI-powered tool for understanding academic papers",
    category: ["Research Assistant"],
    url: "https://www.explainpaper.com",
    pricing: "Free / Paid plans"
  },
  {
    name: "Galactica",
    description: "Large language model for scientific tasks",
    category: ["Research Assistant"],
    url: "https://galactica.org",
    pricing: "Free"
  },
  {
    name: "Consensus",
    description: "AI-powered search engine for scientific research",
    category: ["Research Assistant"],
    url: "https://consensus.app",
    pricing: "Free / Paid plans"
  },
  {
    name: "Synthical",
    description: "AI-powered collaborative research environment",
    category: ["Research Assistant"],
    url: "https://synthical.com",
    pricing: "Paid"
  },
  {
    name: "Scite",
    description: "AI-powered platform for discovering and evaluating scientific articles",
    category: ["Research Assistant"],
    url: "https://scite.ai",
    pricing: "Free / Paid plans"
  },
  {
    name: "EmailTriager",
    description: "AI tool for automatically drafting email replies",
    category: ["Email Assistant"],
    url: "https://www.emailtriager.com",
    pricing: "Paid"
  },
  {
    name: "AI Poem Generator",
    description: "AI tool for generating rhyming poems on any subject",
    category: ["Creative Writing"],
    url: "https://www.aipoemgenerator.org",
    pricing: "Free"
  },
  {
    name: "Ghostwriter",
    description: "AI-powered pair programmer by Replit",
    category: ["Coding Assistant"],
    url: "https://replit.com/site/ghostwriter",
    pricing: "Paid"
  },
  {
    name: "Amazon Q",
    description: "AWS generative AI assistant for answering questions and writing code",
    category: ["Coding Assistant"],
    url: "https://aws.amazon.com/q",
    pricing: "Paid"
  },
  {
    name: "Tabnine",
    description: "AI-powered code completion tool",
    category: ["Coding Assistant"],
    url: "https://www.tabnine.com",
    pricing: "Free / Paid plans"
  },
  {
    name: "Stenography",
    description: "Automatic code documentation generator",
    category: ["Coding Assistant"],
    url: "https://stenography.dev",
    pricing: "Free / Paid plans"
  },
  {
    name: "Mintlify",
    description: "AI-powered documentation writer",
    category: ["Coding Assistant"],
    url: "https://mintlify.com",
    pricing: "Paid"
  },
  {
    name: "Debuild",
    description: "AI-powered low-code tool for web app development",
    category: ["Coding Assistant"],
    url: "https://debuild.app",
    pricing: "Free / Paid plans"
  },
  {
    name: "AI2sql",
    description: "AI tool for generating SQL queries without SQL knowledge",
    category: ["Coding Assistant"],
    url: "https://www.ai2sql.io",
    pricing: "Free / Paid plans"
  },
  {
    name: "CodiumAI",
    description: "AI-powered tool for suggesting non-trivial tests in IDEs",
    category: ["Coding Assistant"],
    url: "https://www.codium.ai",
    pricing: "Free / Paid plans"
  },
  {
    name: "PR-Agent",
    description: "AI-powered tool for automated PR analysis and feedback",
    category: ["Coding Assistant"],
    url: "https://github.com/Codium-ai/pr-agent",
    pricing: "Free"
  },
  {
    name: "MutableAI",
    description: "AI-accelerated software development platform",
    category: ["Coding Assistant"],
    url: "https://mutable.ai",
    pricing: "Paid"
  },
  {
    name: "TurboPilot",
    description: "Self-hosted AI coding assistant using Salesforce Codegen model",
    category: ["Coding Assistant"],
    url: "https://github.com/ravenscroftj/turbopilot",
    pricing: "Free"
  },
  {
    name: "GPT-Code UI",
    description: "Open-source implementation of OpenAI's ChatGPT Code interpreter",
    category: ["Coding Assistant"],
    url: "https://github.com/ricklamers/gpt-code-ui",
    pricing: "Free"
  },
  {
    name: "MetaGPT",
    description: "Multi-agent framework for generating PRD, design, and tasks from requirements",
    category: ["Coding Assistant"],
    url: "https://github.com/geekan/MetaGPT",
    pricing: "Free"
  },
  {
    name: "Open Interpreter",
    description: "Open-source version of OpenAI's Code Interpreter for local use",
    category: ["Coding Assistant"],
    url: "https://github.com/KillianLucas/open-interpreter",
    pricing: "Free"
  },
  {
    name: "Cohere",
    description: "Platform providing access to advanced large language models and NLP tools",
    category: ["Developer Tools"],
    url: "https://cohere.ai",
    pricing: "Free / Paid plans"
  },
  {
    name: "Haystack",
    description: "Framework for building NLP applications with language models",
    category: ["Developer Tools"],
    url: "https://haystack.deepset.ai",
    pricing: "Free"
  },
  {
    name: "GPT4All",
    description: "Open-source chatbot trained on a large collection of clean assistant data",
    category: ["Developer Tools"],
    url: "https://gpt4all.io",
    pricing: "Free"
  },
  {
    name: "LLM App",
    description: "Open-source Python library for building real-time LLM-enabled data pipelines",
    category: ["Developer Tools"],
    url: "https://github.com/pathwaycom/llm-app",
    pricing: "Free"
  },
  {
    name: "LMQL",
    description: "Query language for large language models",
    category: ["Developer Tools"],
    url: "https://lmql.ai",
    pricing: "Free"
  },
  {
    name: "LlamaIndex",
    description: "Data framework for building LLM applications over external data",
    category: ["Developer Tools"],
    url: "https://www.llamaindex.ai",
    pricing: "Free"
  },
  {
    name: "Phoenix",
    description: "Open-source tool for ML observability in notebook environments",
    category: ["Developer Tools"],
    url: "https://github.com/Arize-ai/phoenix",
    pricing: "Free"
  },
  {
    name: "Cursor",
    description: "AI-powered IDE for pair-programming",
    category: ["Developer Tools"],
    url: "https://cursor.sh",
    pricing: "Free / Paid plans"
  },
  {
    name: "Play.ht",
    description: "AI voice generator for creating realistic voiceovers",
    category: ["Voice Generation"],
    url: "https://play.ht",
    pricing: "Free / Paid plans"
  },
  {
    name: "DALL·E Flow",
    description: "Create, edit, and share AI-generated images using natural language",
    category: ["Image Generation"],
    url: "https://www.dalle.app",
    pricing: "Free / Paid plans"
  },
  {
    name: "Playground AI",
    description: "Free-to-use online AI image creator",
    category: ["Image Generation"],
    url: "https://playgroundai.com",
    pricing: "Free / Paid plans"
  },
  {
    name: "Leonardo.AI",
    description: "AI-powered platform for generating and editing images",
    category: ["Image Generation"],
    url: "https://leonardo.ai",
    pricing: "Free / Paid plans"
  },
  {
    name: "Tome",
    description: "AI-powered storytelling and presentation tool",
    category: ["Content Creation"],
    url: "https://tome.app",
    pricing: "Free / Paid plans"
  },
  {
    name: "Fireflies.ai",
    description: "AI meeting assistant for transcription and analysis",
    category: ["Meeting Assistant"],
    url: "https://fireflies.ai",
    pricing: "Free / Paid plans"
  },
  {
    name: "Krisp",
    description: "AI-powered noise cancellation for audio and video calls",
    category: ["Audio Enhancement"],
    url: "https://krisp.ai",
    pricing: "Free / Paid plans"
  },
  {
    name: "DeepL",
    description: "AI-powered language translation tool",
    category: ["Language Translation"],
    url: "https://www.deepl.com",
    pricing: "Free / Paid plans"
  },
  {
    name: "Aidungeon",
    description: "AI-powered text adventure game",
    category: ["Entertainment"],
    url: "https://play.aidungeon.io",
    pricing: "Free / Paid plans"
  },
  {
    name: "Fliki",
    description: "Turn text into videos with AI voices and avatars",
    category: ["Video Creation"],
    url: "https://fliki.ai",
    pricing: "Free / Paid plans"
  },
  {
    name: "Descript Overdub",
    description: "AI voice cloning for audio/video editing",
    category: ["Voice Generation"],
    url: "https://www.descript.com/overdub",
    pricing: "Paid"
  },
  {
    name: "Playground AI",
    description: "Free-to-use online AI image creator",
    category: ["Image Generation"],
    url: "https://playgroundai.com",
    pricing: "Free / Paid plans"
  },
  {
    name: "Leonardo.AI",
    description: "AI-powered platform for generating and editing images",
    category: ["Image Generation"],
    url: "https://leonardo.ai",
    pricing: "Free / Paid plans"
  },
  {
    name: "Anthropic Claude",
    description: "AI assistant for various tasks including analysis and coding",
    category: ["AI Assistant"],
    url: "https://www.anthropic.com",
    pricing: "Paid"
  },
  {
    name: "Tome",
    description: "AI-powered storytelling and presentation tool",
    category: ["Content Creation"],
    url: "https://tome.app",
    pricing: "Free / Paid plans"
  },
  {
    name: "Beautiful.ai",
    description: "AI-powered presentation software",
    category: ["Presentation"],
    url: "https://www.beautiful.ai",
    pricing: "Free / Paid plans"
  },
  {
    name: "Otter.ai",
    description: "AI-powered meeting transcription and note-taking",
    category: ["Meeting Assistant"],
    url: "https://otter.ai",
    pricing: "Free / Paid plans"
  },
  {
    name: "Grammarly",
    description: "AI-powered writing assistant for grammar and style",
    category: ["Writing Assistant"],
    url: "https://www.grammarly.com",
    pricing: "Free / Paid plans"
  },
  {
    name: "Craiyon",
    description: "AI model that can draw images from any text prompt",
    category: ["Image Generation"],
    url: "https://www.craiyon.com",
    pricing: "Free"
  },
  {
    name: "DreamStudio",
    description: "User-friendly interface for creating images using Stable Diffusion",
    category: ["Image Generation"],
    url: "https://dreamstudio.ai",
    pricing: "Free / Paid plans"
  },
  {
    name: "Artbreeder",
    description: "Collaborative tool for creating and exploring art",
    category: ["Image Generation"],
    url: "https://www.artbreeder.com",
    pricing: "Free / Paid plans"
  },
  {
    name: "GauGAN2",
    description: "Tool for creating photorealistic art using words and drawings",
    category: ["Image Generation"],
    url: "https://www.nvidia.com/en-us/research/ai-playground/",
    pricing: "Free"
  },
  {
    name: "Imagine by Magic Studio",
    description: "Express yourself by describing your ideas to create images",
    category: ["Image Generation"],
    url: "https://magicstudio.com/imagine",
    pricing: "Free / Paid plans"
  },
  {
    name: "Alpaca",
    description: "Photoshop plugin for Stable Diffusion image generation",
    category: ["Image Generation"],
    url: "https://www.alpaca.ai",
    pricing: "Paid"
  },
  {
    name: "Patience.ai",
    description: "Create images with Stable Diffusion technology easily",
    category: ["Image Generation"],
    url: "https://patience.ai",
    pricing: "Free / Paid plans"
  },
  {
    name: "GenShare",
    description: "Generate art quickly and share your creations freely",
    category: ["Image Generation"],
    url: "https://gen-share.com",
    pricing: "Free"
  },
  {
    name: "Playground AI",
    description: "Online AI image creator for various creative needs",
    category: ["Image Generation"],
    url: "https://playgroundai.com",
    pricing: "Free / Paid plans"
  },
  {
    name: "Pixelz AI Art Generator",
    description: "Create art from text using advanced algorithms like Stable Diffusion and CLIP Guided Diffusion.",
    category: ["Image Generation"],
    url: "https://pixelz.ai/generator/",
    pricing: "Free / Paid plans"
  },
  {
    name: "Ponzu",
    description: "AI logo generator that helps create brand logos quickly.",
    category: ["Graphic Design"],
    url: "https://ponzu.ai/",
    pricing: "Free"
  },
  {
    name:"Avatar AI", 
    description:"Create personalized AI-generated avatars.", 
    category:["Image Generation"], 
    url:"https://avatarai.me/", 
    pricing:"Paid" 
    },
  {
    name:"RunDiffusion", 
    description:"Cloud-based workspace for creating AI-generated art.", 
    category: ["Image Generation"], 
    url:"https://rundiffusion.com/", 
    pricing:"Paid" 
    },
    {
    name:"Ideogram", 
    description:"Text-to-image platform for creative expression.", 
    category: ["Image Generation"], 
    url:"https://ideogram.ai/", 
    pricing:"Free / Paid plans" 
    },
    {
    name:"KREA", 
    description:"Generate high-quality visuals tailored to your styles or concepts.", 
    category: ["Image Generation"], 
    url:"https://krea.ai/", 
    pricing:"Free" 
    },
    {
    name:"Nightcafe", 
    description:"AI Art Generator app with multiple methods of art generation.", 
    category: ["Image Generation"], 
    url:"https://nightcafe.studio/", 
    pricing:"Free / Paid plans" 
    },
    {
      name:"Leonardo AI",  
      description:"Create production-quality visual assets quickly.",  
      category: ["Graphic Design", "Image Generation"],  
      url:"https://leonardo.ai/",  
      pricing:"Paid"  
      },  
      {
      name:"Brandmark",  
      description:"AI-based logo design tool for quick branding solutions.",  
      category: ["Graphic Design"],  
      url:"https://brandmark.io/",  
      pricing:"Paid"  
      },  
      {
      name:"Microsoft Designer",  
      description:"AI tool for creating stunning designs in minutes.",  
      category: ["Graphic Design"],  
      url:"https://designer.microsoft.com/",  
      pricing:"Paid"  
      },  
      {
      name:"Lexica",  
      description:"Search engine for Stable Diffusion prompts and artworks.",  
      category: ["Image Search"],  
      url:"https://lexica.art/",  
      pricing:"Free"  
      },  
      {
      name:"OpenArt",  
      description:"Explore and generate AI art with over 10 million prompts.",  
      category: ["Image Search", "Image Generation"],  
      url:"https://openart.ai/",  
      pricing:"Free"  
      },  
      {
        name: "Auto-GPT",
        description: "An experimental open-source attempt to make GPT-4 fully autonomous.",
        category: ["Autonomous Agents"],
        url: "https://github.com/Torantulino/Auto-GPT",
        pricing: "Free"
      },
      {
        name: "babyagi",
        description: "An AI-powered task management system.",
        category: ["Autonomous Agents"],
        url: "https://github.com/yoheinakajima/babyagi",
        pricing: "Free"
      },
      {
        name: "AgentGPT",
        description: "Assemble, configure, and deploy autonomous AI agents in your browser.",
        category: ["Autonomous Agents"],
        url: "https://agentgpt.reworkd.ai/",
        pricing: "Free"
      },
      {
        name: "GPT Engineer",
        description: "Specify what you want it to build, and the AI asks for clarification and builds it.",
        category: ["Autonomous Agents"],
        url: "https://gptengineer.com/",
        pricing: "Free"
      },
      {
        name: "MetaGPT",
        description: "Multi-Agent Framework for generating PRD, design, tasks, and repo from requirements.",
        category: ["Autonomous Agents"],
        url: "https://github.com/geekan/MetaGPT",
        pricing: "Free"
      },
      {
        name: "OpenDevin",
        description: "An autonomous agent designed to navigate software engineering complexities.",
        category: ["Autonomous Agents"],
        url: "https://github.com/CognitionLabs/OpenDevin",
        pricing: "Free"
      },
      {
        name: "Davika",
        description: "An agentic AI software engineer.",
        category: ["Autonomous Agents"],
        url: "https://github.com/yourusername/Davika",
        pricing: "Free"
      },
      {
        name:"Imagen", 
        description:"Text-to-image diffusion model with high photorealism.", 
        category: ["Image Generation"], 
        url:"https://imagen.research.google/", 
        pricing:"Paid" 
      },
      {
        name:"Make-A-Scene", 
        description:"Multimodal generative AI allowing creative control through text and sketches.", 
        category: ["Image Generation"], 
        url:"https://makeascene.ai/", 
        pricing:"Free" 
      },
      {
        name:"DragGAN", 
        description:"Interactive point-based manipulation on the generative image manifold.", 
        category: ["Image Generation", "Image Editing"], 
        url:"https://github.com/XavierXiao/DragGAN", 
        pricing:"Free" 
      },
      {
        name:"Craiyon", 
        description:"AI model that can draw images from any text prompt.", 
        category: ["Image Generation"], 
        url:"https://www.craiyon.com/", 
        pricing:"Free" 
      },
      {
        name:"DreamStudio", 
        description:"User-friendly interface for creating images using Stable Diffusion.", 
        category: ["Image Generation"], 
        url:"https://dreamstudio.ai/", 
        pricing:"Free / Paid plans" 
      },
      {
        name:"Artbreeder", 
        description:"Collaborative tool for creating and exploring art.", 
        category: ["Image Generation"], 
        url:"https://www.artbreeder.com/", 
        pricing:"Free / Paid plans" 
      },
      {
        name:"GauGAN2",  
        description:"Tool for creating photorealistic art using words and drawings.",  
        category: ["Image Generation"],  
        url:"https://www.nvidia.com/en-us/research/ai-playground/",  
        pricing:"Free"  
        },  
        {
        name:"Magic Eraser",  
        description:"Remove unwanted elements from images quickly.",  
        category: ["Image Editing"],  
        url:"https://magiceraser.io/",  
        pricing:"Free"  
        },  
        {
        name:"Imagine by Magic Studio",  
        description:"Express yourself by describing your ideas to create images.",  
        category: ["Image Generation"],  
        url:"https://magicstudio.com/imagine/",  
        pricing:"Free / Paid plans"  
        },  
        {
        name:"Alpaca",  
        description:"Photoshop plugin for Stable Diffusion image generation.",  
        category: ["Image Generation", "Image Editing"],  
        url:"https://www.alpaca.ai/",  
        pricing:"Paid"  
        },  
        {
        name:"Patience.ai",  
        description:"Create images with Stable Diffusion technology easily.",  
        category: ["Image Generation"],  
        url:"https://patience.ai/",  
        pricing:"Free / Paid plans"  
        },  
        {
        name:"GenShare",  
        description:"Generate art quickly and share your creations freely.",  
        category: ["Image Generation"],  
        url:"https://gen-share.com/",  
        pricing:"Free"  
        },   
         {
         name :"Pixelz AI Art Generator",   
         description :"Create incredible art from text using advanced algorithms.",   
         category :["Image Generation"],   
         url :"https://pixelz.ai/generator/",   
         pricing :"Free / Paid plans"   
         },   
         {
         name :"modyfi",   
         description :"AI-powered image editor with real-time collaboration features.",   
         category :["Image Editing"],   
         url :"https://modyfi.com/",   
         pricing :"Free / Paid plans"   
         },   
          
         {
         name :"PhotoRoom",   
         description :"Create product and portrait pictures using your phone.",   
         category :["Image Editing"],   
         url :"https://www.photoroom.com/",   
         pricing :"Free / Paid plans"   
         }, 
          
          
         {
           name: "ClipDrop",
           description: "Create professional visuals without a photo studio.",
           category: ["Image Editing"],
           url: "https://clipdrop.co",
           pricing: "Free / Paid plans"
         },
         {
           name: "Lensa",
           description: "All-in-one image editing app including avatar generation.",
           category: ["Image Editing"],
           url: "https://lensa-ai.com",
           pricing: "Paid"
         },
         {
           name: "Ideogram",
           description: "Text-to-image platform for creative expression.",
           category: ["Image Generation"],
           url: "https://ideogram.ai",
           pricing: "Free / Paid plans"
         },
         {
           name: "KREA",
           description: "Generate high-quality visuals tailored to your styles or concepts.",
           category: ["Image Generation"],
           url: "https://krea.ai",
           pricing: "Free"
         },
         {
           name: "Nightcafe",
           description: "AI Art Generator app with multiple methods of art generation.",
           category: ["Image Generation"],
           url: "https://nightcafe.studio",
           pricing: "Free / Paid plans"
         },
      
      
         {
           name: "Vanna.ai",
           description: "Open-source Python RAG framework for SQL generation and related functionality.",
           category: ["Developer Tools"],
           url: "https://github.com/vanna-ai/vanna",
           pricing: "Free"
         },
         {
           name: "GPT Prompt Engineer",
           description: "Automated prompt engineering. Generates, tests, and ranks prompts to find the best ones.",
           category: ["Autonomous Agents"],
           url: "https://github.com/mshumer/gpt-prompt-engineer",
           pricing: "Free"
         },
         {
           name: "AutoGen",
           description: "Framework for developing LLM applications using multiple agents that can converse with each other to solve tasks.",
           category: ["Autonomous Agents"],
           url: "https://github.com/microsoft/autogen",
           pricing: "Free"
         },
         {
           name: "GPT Pilot",
           description: "Dev tool that writes scalable apps from scratch while the developer oversees the implementation.",
           category: ["Autonomous Agents"],
           url: "https://github.com/Pythagora-io/gpt-pilot",
           pricing: "Free"
         },
         {
           name: "Devin",
           description: "An autonomous AI software engineer by Cognition Labs.",
           category: ["Autonomous Agents"],
           url: "https://www.cognition-labs.com/blog",
           pricing: "Paid"
         },
         {
           name: "Poe",
           description: "Gives access to a variety of AI bots.",
           category: ["Custom Assistants"],
           url: "https://poe.com",
           pricing: "Free / Paid plans"
         },
         {
           name: "GPT Builder",
           description: "Assistant for creating GPT-based assistants.",
           category: ["Custom Assistants"],
           url: "https://chat.openai.com/gpts/editor",
           pricing: "Paid"
         },
         {
           name: "GPTStore",
           description: "Find useful GPTs. Share your own GPTs.",
           category: ["Custom Assistants"],
           url: "https://gptstore.ai",
           pricing: "Free"
         },
         {
           name: "Ollama",
           description: "Get up and running with large language models locally.",
           category: ["Developer Tools"],
           url: "https://ollama.ai",
           pricing: "Free"
         },
         {
           name: "SymbolicAI",
           description: "A neuro-symbolic framework for building applications with LLMs at the core.",
           category: ["Developer Tools"],
           url: "https://github.com/ExtensityAI/symbolicai",
           pricing: "Free"
         },
         {
           name: "Phoenix",
           description: "Open-source tool for ML observability that runs in your notebook environment, by Arize.",
           category: ["Developer Tools"],
           url: "https://github.com/Arize-ai/phoenix",
           pricing: "Free"
         },
         {
           name: "Sora",
           description: "AI model that can create realistic and imaginative scenes from text instructions.",
           category: ["Video Generation"],
           url: "https://openai.com/sora",
           pricing: "Not yet available"
         },
         {
           name: "Pixlr",
           description: "AI-powered online photo editor and design tool.",
           category: ["Image Editing"],
           url: "https://pixlr.com",
           pricing: "Free / Paid plans"
         },
         {
           name: "Canva",
           description: "Design platform with AI-powered features for image creation and editing.",
           category: ["Graphic Design"],
           url: "https://www.canva.com",
           pricing: "Free / Paid plans"
         },
         {
           name: "Fotor",
           description: "Online photo editor and design maker with AI-powered tools.",
           category: ["Image Editing"],
           url: "https://www.fotor.com",
           pricing: "Free / Paid plans"
         },
         {
           name: "Remove.bg",
           description: "AI-powered tool to remove image backgrounds.",
           category: ["Image Editing"],
           url: "https://www.remove.bg",
           pricing: "Free / Paid plans"
         },
         {
           name: "Let's Enhance",
           description: "AI-powered image upscaling and enhancement tool.",
           category: ["Image Enhancement"],
           url: "https://letsenhance.io",
           pricing: "Free / Paid plans"
         },
         {
           name: "Topaz Labs",
           description: "AI-powered software suite for image and video enhancement.",
           category: ["Image Enhancement"],
           url: "https://www.topazlabs.com",
           pricing: "Paid"
         },
         {
           name: "Photomyne",
           description: "AI-powered app for scanning and restoring old photos.",
           category: ["Image Restoration"],
           url: "https://photomyne.com",
           pricing: "Free / Paid plans"
         },
         {
           name: "Wombo Dream",
           description: "AI-powered art creation app.",
           category: ["Image Generation"],
           url: "https://www.wombo.art",
           pricing: "Free / Paid plans"
         },
       
         {
           name: "Deep Art Effects",
           description: "AI-powered app for applying artistic styles to photos.",
           category: ["Image Styling"],
           url: "https://www.deeparteffects.com",
           pricing: "Free / Paid plans"
         },
         {
           name: "Prisma",
           description: "AI-powered photo editor for applying artistic filters.",
           category: ["Image Styling"],
           url: "https://prisma-ai.com",
           pricing: "Free / Paid plans"
         },
         {
           name: "Hotpot.ai",
           description: "AI-powered tools for designers, including background removal and image enhancement.",
           category: ["Image Editing"],
           url: "https://hotpot.ai",
           pricing: "Free / Paid plans"
         },
         {
           name: "Vance AI",
           description: "AI-powered image enhancement and editing tools.",
           category: ["Image Enhancement"],
           url: "https://vance.ai",
           pricing: "Free / Paid plans"
         },
         {
           name: "Runway",
           description: "AI-powered creative tools for video and image editing.",
           category: ["Video Editing"],
           url: "https://runwayml.com",
           pricing: "Free / Paid plans"
         },
      
      
         {
           name: "Lumen5",
           description: "AI-powered video creation platform for marketing content.",
           category: ["Video Creation"],
           url: "https://lumen5.com",
           pricing: "Free / Paid plans"
         },
       
         {
           name: "Murf",
           description: "AI voice generator for voiceovers and dubbing.",
           category: ["Voice Generation"],
           url: "https://murf.ai",
           pricing: "Free / Paid plans"
         },
      
     
        
         {
           name: "Replika",
           description: "AI companion for conversations and emotional support.",
           category: ["AI Companion"],
           url: "https://replika.ai",
           pricing: "Free / Paid plans"
         },
      
      
         {
           name: "DeepMind",
           description: "AI research laboratory acquired by Google, known for AlphaGo and AlphaFold.",
           category: ["AI Research"],
           url: "https://www.deepmind.com",
           pricing: "N/A"
         },
         {
           name: "OpenAI",
           description: "AI research and deployment company, creators of GPT models and DALL-E.",
           category: ["AI Research"],
           url: "https://openai.com",
           pricing: "Varies"
         },
      
         {
           name: "Weights & Biases",
           description: "MLOps platform for tracking experiments, managing models, and datasets.",
           category: ["Developer Tools"],
           url: "https://wandb.ai",
           pricing: "Free / Paid plans"
         },
         {
           name: "Roboflow",
           description: "Platform for building computer vision models.",
           category: ["Computer Vision"],
           url: "https://roboflow.com",
           pricing: "Free / Paid plans"
         },
         {
           name: "Labelbox",
           description: "Platform for creating and managing training data for AI models.",
           category: ["Data Labeling"],
           url: "https://labelbox.com",
           pricing: "Paid"
         },
         {
           name: "Scale AI",
           description: "Data platform for AI, offering data annotation and synthetic data generation.",
           category: ["Data Labeling"],
           url: "https://scale.com",
           pricing: "Paid"
         },
         {
           name: "Snorkel AI",
           description: "Data-centric AI platform for programmatically labeling data and building models.",
           category: ["Data Labeling"],
           url: "https://snorkel.ai",
           pricing: "Paid"
         },
      
      
         {
           name: "RunwayML",
           description: "Creative tools powered by machine learning.",
           category: ["Creative Tools"],
           url: "https://runwayml.com",
           pricing: "Free / Paid plans"
         },
         {
           name: "Stability AI",
           description: "Company behind Stable Diffusion, offering various AI models and services.",
           category: ["AI Research"],
           url: "https://stability.ai",
           pricing: "Varies"
         },
      
         {
           name: "Adept",
           description: "AI research company building general intelligence that can take actions.",
           category: ["AI Research"],
           url: "https://www.adept.ai",
           pricing: "N/A"
         },
         {
           name: "Inflection AI",
           description: "AI company developing large language models and AI assistants.",
           category: ["AI Research"],
           url: "https://inflection.ai",
           pricing: "N/A"
         },
       
         {
           name: "Jasper",
           description: "AI writing assistant for faster content creation.",
           category: ["Writing Assistant"],
           url: "https://www.jasper.ai",
           pricing: "Paid"
         },
      
      
         {
           name: "Eleven Labs",
           description: "AI voice generator with emotion and accent control.",
           category: ["Voice Generation"],
           url: "https://elevenlabs.io",
           pricing: "Free / Paid plans"
         },
         {
           name: "Claude",
           description: "AI assistant for various tasks including analysis and coding",
           category: ["Large Language Model", "AI Assistant"],
           url: "https://www.anthropic.com",
           pricing: "Paid"
         },
         {
           name: "Gemini",
           description: "Google's multimodal AI model for text, image, and other data types",
           category: ["Multimodal AI Model", "Large Language Model", "AI Assistant"],
           url: "https://deepmind.google/technologies/gemini/",
           pricing: "Varies"
         },
         {
           name: "LLaMA",
           description: "Open-source large language model by Meta",
           category: ["Open-Source LLM", "Large Language Model"],
           url: "https://ai.meta.com/llama/",
           pricing: "Free"
         },
         {
           name: "Qwen",
           description: "Large language model by Alibaba",
           category: ["Large Language Model"],
           url: "https://qwen.ai/",
           pricing: "Varies"
         },
         {
          name: "Cogniverse",
          description: "Bookmark your favorite AI tools and resources",
          category: ["Ai Assistant", "Large Language Model"],
          url: "https://cogniverse-one.vercel.app/",
          pricing: "Free"
        }
];

// Remove duplicates
export const mockAITools: AITool[] = Array.from(
  new Map(allTools.map(tool => [tool.name, tool])).values()
);