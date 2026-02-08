---
title: "Projects"
permalink: /projects/
layout: single
author_profile: false
---

<div class="info-card">
  <p>
    Selected projects, with recent work first. The descriptions below are aligned with my resume where applicable.
  </p>
</div>

<h2>Recent Projects</h2>
<div class="section-grid section-grid--single">
  <div class="info-card">
    <h3>StealthRL</h3>
    <p class="project-meta">Reinforcement learning · AI safety</p>
    <p class="project-links">
      <a href="https://github.com/suraj-ranganath/StealthRL/tree/main">GitHub</a>
    </p>
    <ul>
      <li>Prototyped an RL-driven paraphrasing policy (GRPO + LoRA) tuned against detector feedback.</li>
      <li>Added semantic/fluency constraints plus an ESL-fairness penalty to reduce regressions across writing styles.</li>
      <li>Reduced Fast-DetectGPT score from 0.587 to 0.458 while maintaining semantic similarity of 0.944 (exploratory).</li>
    </ul>
  </div>

  <div class="info-card">
    <h3>Prompt-Length Optimization via Reinforcement Learning</h3>
    <p class="project-meta">LLMs · Post-training</p>
    <p class="project-links">
      <a href="https://github.com/ACMCMC/prompt-length-optimization">GitHub</a>
    </p>
    <ul>
      <li>Formulated discrete prompt optimization as RL (AdvBench, Pythia-70M) and trained with GRPO-style updates.</li>
      <li>Achieved 16 → 9 tokens (43.8% compression) with per-token log-likelihood improving from -1.64 to -1.12.</li>
      <li>Ran ablations on entropy/credit assignment and compared against REINFORCE and PPO baselines.</li>
    </ul>
  </div>

  <div class="info-card">
    <h3>Concept Bottleneck Models for Chest X-ray</h3>
    <p class="project-meta">Interpretability · Medical imaging</p>
    <ul>
      <li>Exploring chest X-ray interpretability with VLMs (CheXAgent/MedGemma), concept detectors (CheX-DETR), and CBM layers.</li>
      <li>Comparing CBM variants including LF-CBM (BiomedCLIP) and VLG-CBM (CheX), using VLM/LLM queries to assess concepts.</li>
      <li>Visualizing learned concepts and failure cases with Grad-CAM and saliency-style analyses.</li>
    </ul>
  </div>

  <div class="info-card">
    <h3>LLM Test-Time Scaling using Process Reward Models</h3>
    <p class="project-meta">LLMs · Post-training</p>
    <ul>
      <li>Built a test-time reasoning prototype for Lean4 tasks using chain-of-thought rollouts plus PRM-style scoring and reranking (exploratory).</li>
      <li>Implemented vLLM/FlashAttention inference, KV-cache batching, and evaluation harnesses for compute-controlled comparisons.</li>
      <li>Ran Kubernetes jobs on shared A100-80GB clusters with containerized PyTorch/PEFT (LoRA), automated checkpoints, and W&amp;B logging.</li>
    </ul>
  </div>

  <div class="info-card">
    <h3>NYC Public Transit</h3>
    <p class="project-meta">Course project · Data analysis</p>
    <p class="project-links">
      <a href="https://github.com/AtharvRN/NYC_Public_Transit">GitHub</a>
    </p>
    <ul>
      <li>Small course project analyzing NYC public transit data with a focus on clean data processing and clear communication.</li>
      <li>Built reproducible analysis code and produced visuals to summarize results.</li>
    </ul>
  </div>

  <div class="info-card">
    <h3>Probability &amp; Statistics Project Website</h3>
    <p class="project-meta">Web · Simulations</p>
    <ul>
      <li>Built a lightweight website to present a probability and statistics project with clean writeups and visuals.</li>
      <li>Focused on readable explanations and simple interactive elements to communicate the analysis.</li>
    </ul>
  </div>
</div>

<h2>Older Projects</h2>
<div class="section-grid section-grid--single">
  <div class="info-card">
    <h3>OCT Analysis with RETFound &amp; Generative Augmentations</h3>
    <p class="project-meta">Biomedical vision · Generative modeling</p>
    <ul>
      <li>Co-authored a Bioengineering 2024 paper on RETFound-based retinal OCT feature detection.</li>
      <li>Fine-tuned a foundation model pretrained on 1.6M OCTs using 1,770 labeled B-scans (SRF/IRF/drusen/PED).</li>
      <li>Reached 0.75-0.80 AUC-ROC and explored GAN/Pix2Pix and MONAI latent diffusion augmentation (exploratory).</li>
    </ul>
  </div>

  <div class="info-card">
    <h3>Far-Field Speaker Verification on Mobile Robots</h3>
    <p class="project-meta">IEEE SP Cup 2024 · Speaker verification</p>
    <ul>
      <li>1st place globally: adapted ERes2Net with targeted augmentations (RIR, MUSAN, speed) and cosine + adaptive s-norm scoring.</li>
      <li>Final leaderboard: minDCF 0.67 and EER 8.93.</li>
    </ul>
  </div>

  <div class="info-card">
    <h3>Document-Level Text Simplification</h3>
    <p class="project-meta">Two-stage plan-guided transformer</p>
    <p>
      Designed a plan to generate pipeline where a RoBERTa planner labels sentence-level operations using surrounding
      context, then feeds tags into a summarizer-simplifier stack for document-level simplification.
    </p>
    <ul>
      <li>Built a sentence-level planning component that predicts edit operations using document context.</li>
      <li>Conditioned generation on planned operations to control simplification behavior and reduce unwanted deletions.</li>
    </ul>
  </div>

  <div class="info-card">
    <h3>Exploring Self-Supervised Learning with DINO</h3>
    <p class="project-meta">Self-distillation · Representation learning</p>
    <p>
      Reimplemented DINO’s student-teacher self-distillation with momentum encoders and multi-crop augmentations and ran
      transfer experiments across downstream datasets.
    </p>
    <ul>
      <li>Implemented the student-teacher training loop and stability diagnostics (EMA teacher, temperature schedules).</li>
      <li>Evaluated representation quality via frozen-backbone transfer to downstream tasks.</li>
    </ul>
  </div>

  <div class="info-card">
    <h3>Deep Learning for OFDM Channel Estimation</h3>
    <p class="project-meta">Wireless communication · Neural estimation</p>
    <p>
      Built an end-to-end OFDM simulation and compared classical LS/MMSE estimators with a lightweight CNN that predicts
      complex channel taps.
    </p>
    <ul>
      <li>Built a simulation pipeline to generate training/evaluation data under controlled channel conditions.</li>
      <li>Compared learned estimators against classical baselines across SNR regimes.</li>
    </ul>
  </div>

  <div class="info-card">
    <h3>Comprehensive Review of Image Denoising</h3>
    <p class="project-meta">Classical + deep pipelines</p>
    <p>
      Benchmarked classical denoising methods against deep residual and attention-based architectures and summarized where
      each approach is most effective.
    </p>
    <ul>
      <li>Ran structured benchmarks across classical priors and deep residual/attention models on standard noisy datasets.</li>
      <li>Documented failure modes and compute-quality tradeoffs for practical denoising pipelines.</li>
    </ul>
  </div>

  <div class="info-card">
    <h3>PID Control of Drone with Overhead Vision</h3>
    <p class="project-meta">Robotics · Real-time control</p>
    <p>
      Built teleoperation and vision-based feedback control for a Pluto drone using ArUco pose estimation and PID loops,
      tuned for real-time performance.
    </p>
    <ul>
      <li>Built a real-time stack combining teleop, overhead vision pose estimation, and PID stabilization.</li>
      <li>Optimized the vision loop to keep compute bounded and latency stable during flight.</li>
    </ul>
  </div>
</div>
