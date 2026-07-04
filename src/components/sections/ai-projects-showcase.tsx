'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ExternalLink, Bot, Mail, Workflow, ZoomIn, ZoomOut, Maximize2, BrainCircuit } from 'lucide-react';
import Image from 'next/image';
import ReadMore from '@/components/ui/read-more';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const idpFlowStyles = `
.idp-flow, .idp-flow * { box-sizing: border-box; }
.idp-flow {
    margin:0; padding:0;
    background: radial-gradient(ellipse at 50% 0%, #0d1226 0%, #05060c 55%, #020308 100%);
    font-family: 'Segoe UI', system-ui, -apple-system, Arial, sans-serif;
    color:#e8f4ff; min-height:100%; overflow-x:hidden;
  }
.idp-flow .wrap { max-width:1600px; margin:0 auto; padding:36px 20px 60px; }
.idp-flow .header { text-align:center; margin-bottom:8px; }
.idp-flow .header h1 {
    font-size:38px; letter-spacing:1px; margin:0 0 8px;
    background: linear-gradient(90deg, #00e5ff, #ff37d0 40%, #ffab2e 70%, #c78bff);
    -webkit-background-clip:text; background-clip:text; color:transparent;
    text-shadow: 0 0 30px rgba(0,229,255,0.2);
  }
.idp-flow .header p { margin:0; color:#9db8dd; font-size:16px; letter-spacing:2px; text-transform:uppercase; }
.idp-flow .legend { display:flex; justify-content:center; gap:26px; flex-wrap:wrap; margin:24px 0 14px; font-size:15px; font-weight:600; color:#cfe4ff; }
.idp-flow .legend span { display:inline-flex; align-items:center; gap:8px; }
.idp-flow .legend i { width:12px; height:12px; border-radius:50%; display:inline-block; box-shadow:0 0 8px currentColor, 0 0 3px currentColor; }
.idp-flow .diagram-frame {
    position:relative; border-radius:18px;
    background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0));
    border:1px solid rgba(120,160,220,0.15);
    box-shadow: 0 0 60px rgba(0,80,150,0.15) inset, 0 20px 60px rgba(0,0,0,0.5);
    padding:10px;
  }
.idp-flow svg { display:block; width:100%; height:auto; }
.idp-flow .node-box { fill: rgba(8,14,28,0.88); stroke: var(--nc); stroke-width:2.5; filter:url(#softGlow); }
.idp-flow .node-glow { fill:none; stroke:var(--ng); stroke-width:9; opacity:0.18; filter:blur(6px); }
.idp-flow .node { animation:idp-flow-pulseNode 4.5s ease-in-out infinite; }
@keyframes idp-flow-pulseNode { 0%,100% { filter: drop-shadow(0 0 2px var(--ng)); } 50% { filter: drop-shadow(0 0 10px var(--ng)); } }
.idp-flow .edge-glow { fill:none; stroke:var(--ec); stroke-width:10; opacity:0.18; filter:blur(3px); }
.idp-flow .edge-line { fill:none; stroke:var(--ec); stroke-width:1.8; opacity:0.35; }
.idp-flow .edge-flow {
    fill:none; stroke:var(--ec); stroke-width:3; stroke-linecap:round;
    stroke-dasharray:14 220; filter:url(#lineGlow) drop-shadow(0 0 6px var(--ec));
    animation-name:idp-flow-flowDash; animation-timing-function:linear; animation-iteration-count:infinite;
  }
@keyframes idp-flow-flowDash { from { stroke-dashoffset:234; } to { stroke-dashoffset:0; } }
`;

function IdpFlowDiagram() {
  return (
    <div className="idp-flow wrap">
      <div className="header">
        <h1>Intelligent Document Processing</h1>
        <p>Email Intake → Classification → Automated Downstream Flows</p>
      </div>
      <div
        className="legend"
        dangerouslySetInnerHTML={{ __html: `
      <span><i style="color:#00e5ff"></i> Supplier Invoice</span>
      <span><i style="color:#ff37d0"></i> Eway Bill</span>
      <span><i style="color:#ffab2e"></i> RFQ</span>
      <span><i style="color:#7dffb0"></i> CPO</span>
      <span><i style="color:#c78bff"></i> Proforma Invoice</span>
    ` }}
      />
      <div
        className="diagram-frame"
        dangerouslySetInnerHTML={{ __html: `<svg viewBox="-20 -10 1540 910" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="softGlow" x="-60%" y="-60%" width="220%" height="220%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="lineGlow" x="-100%" y="-100%" width="300%" height="300%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    
    <marker id="arrow-inv" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="#00e5ff"/>
    </marker>
    <marker id="arrow-eway" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="#ff37d0"/>
    </marker>
    <marker id="arrow-rfq" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="#ffab2e"/>
    </marker>
    <marker id="arrow-cpo" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="#7dffb0"/>
    </marker>
    <marker id="arrow-pf" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="#c78bff"/>
    </marker>
    <marker id="arrow-root" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill="#ffd24d"/>
    </marker>
  </defs>
  <g class="edges">
    <g class="edge" style="--ec:#ffd24d;">
      <path class="edge-glow" d="M 750.0,122.0 C 750.0,145.0 750.0,145.0 750.0,168.0"/>
      <path class="edge-line" d="M 750.0,122.0 C 750.0,145.0 750.0,145.0 750.0,168.0" marker-end="url(#arrow-root)"/>
      <path class="edge-flow" d="M 750.0,122.0 C 750.0,145.0 750.0,145.0 750.0,168.0" style="animation-duration:1.50s; animation-delay:-0.00s;"/>
    </g>

    <g class="edge" style="--ec:#00e5ff;">
      <path class="edge-glow" d="M 750.0,268.0 C 750.0,304.0 150.0,304.0 150.0,340.0"/>
      <path class="edge-line" d="M 750.0,268.0 C 750.0,304.0 150.0,304.0 150.0,340.0" marker-end="url(#arrow-inv)"/>
      <path class="edge-flow" d="M 750.0,268.0 C 750.0,304.0 150.0,304.0 150.0,340.0" style="animation-duration:1.82s; animation-delay:-0.17s;"/>
    </g>

    <g class="edge" style="--ec:#ff37d0;">
      <path class="edge-glow" d="M 750.0,268.0 C 750.0,304.0 450.0,304.0 450.0,340.0"/>
      <path class="edge-line" d="M 750.0,268.0 C 750.0,304.0 450.0,304.0 450.0,340.0" marker-end="url(#arrow-eway)"/>
      <path class="edge-flow" d="M 750.0,268.0 C 750.0,304.0 450.0,304.0 450.0,340.0" style="animation-duration:2.14s; animation-delay:-0.34s;"/>
    </g>

    <g class="edge" style="--ec:#ffab2e;">
      <path class="edge-glow" d="M 750.0,268.0 C 750.0,304.0 750.0,304.0 750.0,340.0"/>
      <path class="edge-line" d="M 750.0,268.0 C 750.0,304.0 750.0,304.0 750.0,340.0" marker-end="url(#arrow-rfq)"/>
      <path class="edge-flow" d="M 750.0,268.0 C 750.0,304.0 750.0,304.0 750.0,340.0" style="animation-duration:2.46s; animation-delay:-0.51s;"/>
    </g>

    <g class="edge" style="--ec:#7dffb0;">
      <path class="edge-glow" d="M 750.0,268.0 C 750.0,304.0 1050.0,304.0 1050.0,340.0"/>
      <path class="edge-line" d="M 750.0,268.0 C 750.0,304.0 1050.0,304.0 1050.0,340.0" marker-end="url(#arrow-cpo)"/>
      <path class="edge-flow" d="M 750.0,268.0 C 750.0,304.0 1050.0,304.0 1050.0,340.0" style="animation-duration:2.78s; animation-delay:-0.68s;"/>
    </g>

    <g class="edge" style="--ec:#c78bff;">
      <path class="edge-glow" d="M 750.0,268.0 C 750.0,304.0 1350.0,304.0 1350.0,340.0"/>
      <path class="edge-line" d="M 750.0,268.0 C 750.0,304.0 1350.0,304.0 1350.0,340.0" marker-end="url(#arrow-pf)"/>
      <path class="edge-flow" d="M 750.0,268.0 C 750.0,304.0 1350.0,304.0 1350.0,340.0" style="animation-duration:1.50s; animation-delay:-0.85s;"/>
    </g>

    <g class="edge" style="--ec:#00e5ff;">
      <path class="edge-glow" d="M 150.0,418.0 C 150.0,448.0 150.0,448.0 150.0,478.0"/>
      <path class="edge-line" d="M 150.0,418.0 C 150.0,448.0 150.0,448.0 150.0,478.0" marker-end="url(#arrow-inv)"/>
      <path class="edge-flow" d="M 150.0,418.0 C 150.0,448.0 150.0,448.0 150.0,478.0" style="animation-duration:1.82s; animation-delay:-1.02s;"/>
    </g>

    <g class="edge" style="--ec:#00e5ff;">
      <path class="edge-glow" d="M 150.0,556.0 C 150.0,589.0 150.0,589.0 150.0,622.0"/>
      <path class="edge-line" d="M 150.0,556.0 C 150.0,589.0 150.0,589.0 150.0,622.0" marker-end="url(#arrow-inv)"/>
      <path class="edge-flow" d="M 150.0,556.0 C 150.0,589.0 150.0,589.0 150.0,622.0" style="animation-duration:2.14s; animation-delay:-0.00s;"/>
    </g>

    <g class="edge" style="--ec:#00e5ff;">
      <path class="edge-glow" d="M 150.0,700.0 C 150.0,733.0 150.0,733.0 150.0,766.0"/>
      <path class="edge-line" d="M 150.0,700.0 C 150.0,733.0 150.0,733.0 150.0,766.0" marker-end="url(#arrow-inv)"/>
      <path class="edge-flow" d="M 150.0,700.0 C 150.0,733.0 150.0,733.0 150.0,766.0" style="animation-duration:2.46s; animation-delay:-0.17s;"/>
    </g>

    <g class="edge" style="--ec:#ff37d0;">
      <path class="edge-glow" d="M 450.0,418.0 C 450.0,448.0 450.0,448.0 450.0,478.0"/>
      <path class="edge-line" d="M 450.0,418.0 C 450.0,448.0 450.0,448.0 450.0,478.0" marker-end="url(#arrow-eway)"/>
      <path class="edge-flow" d="M 450.0,418.0 C 450.0,448.0 450.0,448.0 450.0,478.0" style="animation-duration:2.78s; animation-delay:-0.34s;"/>
    </g>

    <g class="edge" style="--ec:#ff37d0;">
      <path class="edge-glow" d="M 450.0,556.0 C 450.0,589.0 450.0,589.0 450.0,622.0"/>
      <path class="edge-line" d="M 450.0,556.0 C 450.0,589.0 450.0,589.0 450.0,622.0" marker-end="url(#arrow-eway)"/>
      <path class="edge-flow" d="M 450.0,556.0 C 450.0,589.0 450.0,589.0 450.0,622.0" style="animation-duration:1.50s; animation-delay:-0.51s;"/>
    </g>

    <g class="edge" style="--ec:#ff37d0;">
      <path class="edge-glow" d="M 450.0,700.0 C 450.0,733.0 450.0,733.0 450.0,766.0"/>
      <path class="edge-line" d="M 450.0,700.0 C 450.0,733.0 450.0,733.0 450.0,766.0" marker-end="url(#arrow-eway)"/>
      <path class="edge-flow" d="M 450.0,700.0 C 450.0,733.0 450.0,733.0 450.0,766.0" style="animation-duration:1.82s; animation-delay:-0.68s;"/>
    </g>

    <g class="edge" style="--ec:#ffab2e;">
      <path class="edge-glow" d="M 750.0,418.0 C 750.0,448.0 750.0,448.0 750.0,478.0"/>
      <path class="edge-line" d="M 750.0,418.0 C 750.0,448.0 750.0,448.0 750.0,478.0" marker-end="url(#arrow-rfq)"/>
      <path class="edge-flow" d="M 750.0,418.0 C 750.0,448.0 750.0,448.0 750.0,478.0" style="animation-duration:2.14s; animation-delay:-0.85s;"/>
    </g>

    <g class="edge" style="--ec:#ffab2e;">
      <path class="edge-glow" d="M 750.0,556.0 C 750.0,589.0 750.0,589.0 750.0,622.0"/>
      <path class="edge-line" d="M 750.0,556.0 C 750.0,589.0 750.0,589.0 750.0,622.0" marker-end="url(#arrow-rfq)"/>
      <path class="edge-flow" d="M 750.0,556.0 C 750.0,589.0 750.0,589.0 750.0,622.0" style="animation-duration:2.46s; animation-delay:-1.02s;"/>
    </g>

    <g class="edge" style="--ec:#7dffb0;">
      <path class="edge-glow" d="M 1050.0,418.0 C 1050.0,448.0 1050.0,448.0 1050.0,478.0"/>
      <path class="edge-line" d="M 1050.0,418.0 C 1050.0,448.0 1050.0,448.0 1050.0,478.0" marker-end="url(#arrow-cpo)"/>
      <path class="edge-flow" d="M 1050.0,418.0 C 1050.0,448.0 1050.0,448.0 1050.0,478.0" style="animation-duration:2.78s; animation-delay:-0.00s;"/>
    </g>

    <g class="edge" style="--ec:#7dffb0;">
      <path class="edge-glow" d="M 1050.0,556.0 C 1050.0,589.0 1050.0,589.0 1050.0,622.0"/>
      <path class="edge-line" d="M 1050.0,556.0 C 1050.0,589.0 1050.0,589.0 1050.0,622.0" marker-end="url(#arrow-cpo)"/>
      <path class="edge-flow" d="M 1050.0,556.0 C 1050.0,589.0 1050.0,589.0 1050.0,622.0" style="animation-duration:1.50s; animation-delay:-0.17s;"/>
    </g>

    <g class="edge" style="--ec:#7dffb0;">
      <path class="edge-glow" d="M 1050.0,700.0 C 1050.0,733.0 1050.0,733.0 1050.0,766.0"/>
      <path class="edge-line" d="M 1050.0,700.0 C 1050.0,733.0 1050.0,733.0 1050.0,766.0" marker-end="url(#arrow-cpo)"/>
      <path class="edge-flow" d="M 1050.0,700.0 C 1050.0,733.0 1050.0,733.0 1050.0,766.0" style="animation-duration:1.82s; animation-delay:-0.34s;"/>
    </g>

    <g class="edge" style="--ec:#c78bff;">
      <path class="edge-glow" d="M 1350.0,418.0 C 1350.0,448.0 1350.0,448.0 1350.0,478.0"/>
      <path class="edge-line" d="M 1350.0,418.0 C 1350.0,448.0 1350.0,448.0 1350.0,478.0" marker-end="url(#arrow-pf)"/>
      <path class="edge-flow" d="M 1350.0,418.0 C 1350.0,448.0 1350.0,448.0 1350.0,478.0" style="animation-duration:2.14s; animation-delay:-0.51s;"/>
    </g>

    <g class="edge" style="--ec:#c78bff;">
      <path class="edge-glow" d="M 1350.0,570.0 C 1350.0,596.0 1350.0,596.0 1350.0,622.0"/>
      <path class="edge-line" d="M 1350.0,570.0 C 1350.0,596.0 1350.0,596.0 1350.0,622.0" marker-end="url(#arrow-pf)"/>
      <path class="edge-flow" d="M 1350.0,570.0 C 1350.0,596.0 1350.0,596.0 1350.0,622.0" style="animation-duration:2.46s; animation-delay:-0.68s;"/>
    </g>

    <g class="edge" style="--ec:#c78bff;">
      <path class="edge-glow" d="M 1350.0,700.0 C 1350.0,733.0 1350.0,733.0 1350.0,766.0"/>
      <path class="edge-line" d="M 1350.0,700.0 C 1350.0,733.0 1350.0,733.0 1350.0,766.0" marker-end="url(#arrow-pf)"/>
      <path class="edge-flow" d="M 1350.0,700.0 C 1350.0,733.0 1350.0,733.0 1350.0,766.0" style="animation-duration:2.78s; animation-delay:-0.85s;"/>
    </g></g>
  <g class="nodes">
    <g class="node" style="--nc:#ffd24d; --ng:#ffd24d;">
      <rect class="node-glow" x="580.0" y="30.0" width="340.0" height="92.0" rx="14"/>
      <rect class="node-box" x="580.0" y="30.0" width="340.0" height="92.0" rx="14"/>
      <text class="node-text" fill="#f4fbff" text-anchor="middle" font-size="21" font-weight="700"><tspan x="750.0" y="63.0">Central Email</tspan><tspan x="750.0" y="89.0">(Inbox Monitor)</tspan></text>
    </g>

    <g class="node" style="--nc:#ffd24d; --ng:#ffd24d;">
      <rect class="node-glow" x="540.0" y="168.0" width="420.0" height="100.0" rx="14"/>
      <rect class="node-box" x="540.0" y="168.0" width="420.0" height="100.0" rx="14"/>
      <text class="node-text" fill="#f4fbff" text-anchor="middle" font-size="21" font-weight="700"><tspan x="750.0" y="218.0">AI Document Classifier</tspan></text>
    </g>

    <g class="node" style="--nc:#00e5ff; --ng:#00e5ff;">
      <rect class="node-glow" x="25.0" y="340.0" width="250.0" height="78.0" rx="14"/>
      <rect class="node-box" x="25.0" y="340.0" width="250.0" height="78.0" rx="14"/>
      <text class="node-text" fill="#f4fbff" text-anchor="middle" font-size="21" font-weight="600"><tspan x="150.0" y="379.0">Supplier Invoice</tspan></text>
    </g>

    <g class="node" style="--nc:#ff37d0; --ng:#ff37d0;">
      <rect class="node-glow" x="325.0" y="340.0" width="250.0" height="78.0" rx="14"/>
      <rect class="node-box" x="325.0" y="340.0" width="250.0" height="78.0" rx="14"/>
      <text class="node-text" fill="#f4fbff" text-anchor="middle" font-size="21" font-weight="600"><tspan x="450.0" y="379.0">Eway Bill</tspan></text>
    </g>

    <g class="node" style="--nc:#ffab2e; --ng:#ffab2e;">
      <rect class="node-glow" x="625.0" y="340.0" width="250.0" height="78.0" rx="14"/>
      <rect class="node-box" x="625.0" y="340.0" width="250.0" height="78.0" rx="14"/>
      <text class="node-text" fill="#f4fbff" text-anchor="middle" font-size="21" font-weight="600"><tspan x="750.0" y="379.0">RFQ</tspan></text>
    </g>

    <g class="node" style="--nc:#7dffb0; --ng:#7dffb0;">
      <rect class="node-glow" x="925.0" y="340.0" width="250.0" height="78.0" rx="14"/>
      <rect class="node-box" x="925.0" y="340.0" width="250.0" height="78.0" rx="14"/>
      <text class="node-text" fill="#f4fbff" text-anchor="middle" font-size="21" font-weight="600"><tspan x="1050.0" y="379.0">CPO</tspan></text>
    </g>

    <g class="node" style="--nc:#c78bff; --ng:#c78bff;">
      <rect class="node-glow" x="1225.0" y="340.0" width="250.0" height="78.0" rx="14"/>
      <rect class="node-box" x="1225.0" y="340.0" width="250.0" height="78.0" rx="14"/>
      <text class="node-text" fill="#f4fbff" text-anchor="middle" font-size="21" font-weight="600"><tspan x="1350.0" y="379.0">Proforma Invoice</tspan></text>
    </g>

    <g class="node" style="--nc:#00e5ff; --ng:#00e5ff;">
      <rect class="node-glow" x="25.0" y="478.0" width="250.0" height="78.0" rx="14"/>
      <rect class="node-box" x="25.0" y="478.0" width="250.0" height="78.0" rx="14"/>
      <text class="node-text" fill="#f4fbff" text-anchor="middle" font-size="21" font-weight="600"><tspan x="150.0" y="517.0">Invoice Extraction</tspan></text>
    </g>

    <g class="node" style="--nc:#ff37d0; --ng:#ff37d0;">
      <rect class="node-glow" x="325.0" y="478.0" width="250.0" height="78.0" rx="14"/>
      <rect class="node-box" x="325.0" y="478.0" width="250.0" height="78.0" rx="14"/>
      <text class="node-text" fill="#f4fbff" text-anchor="middle" font-size="21" font-weight="600"><tspan x="450.0" y="517.0">Eway Extraction</tspan></text>
    </g>

    <g class="node" style="--nc:#ffab2e; --ng:#ffab2e;">
      <rect class="node-glow" x="625.0" y="478.0" width="250.0" height="78.0" rx="14"/>
      <rect class="node-box" x="625.0" y="478.0" width="250.0" height="78.0" rx="14"/>
      <text class="node-text" fill="#f4fbff" text-anchor="middle" font-size="21" font-weight="600"><tspan x="750.0" y="517.0">RFQ Auto Punch</tspan></text>
    </g>

    <g class="node" style="--nc:#7dffb0; --ng:#7dffb0;">
      <rect class="node-glow" x="925.0" y="478.0" width="250.0" height="78.0" rx="14"/>
      <rect class="node-box" x="925.0" y="478.0" width="250.0" height="78.0" rx="14"/>
      <text class="node-text" fill="#f4fbff" text-anchor="middle" font-size="21" font-weight="600"><tspan x="1050.0" y="517.0">CPO Auto Punch</tspan></text>
    </g>

    <g class="node" style="--nc:#c78bff; --ng:#c78bff;">
      <rect class="node-glow" x="1225.0" y="478.0" width="250.0" height="92.0" rx="14"/>
      <rect class="node-box" x="1225.0" y="478.0" width="250.0" height="92.0" rx="14"/>
      <text class="node-text" fill="#f4fbff" text-anchor="middle" font-size="21" font-weight="600"><tspan x="1350.0" y="511.0">Proforma Invoice</tspan><tspan x="1350.0" y="537.0">Extraction</tspan></text>
    </g>

    <g class="node" style="--nc:#00e5ff; --ng:#00e5ff;">
      <rect class="node-glow" x="25.0" y="622.0" width="250.0" height="78.0" rx="14"/>
      <rect class="node-box" x="25.0" y="622.0" width="250.0" height="78.0" rx="14"/>
      <text class="node-text" fill="#f4fbff" text-anchor="middle" font-size="21" font-weight="600"><tspan x="150.0" y="661.0">Validation</tspan></text>
    </g>

    <g class="node" style="--nc:#ff37d0; --ng:#ff37d0;">
      <rect class="node-glow" x="325.0" y="622.0" width="250.0" height="78.0" rx="14"/>
      <rect class="node-box" x="325.0" y="622.0" width="250.0" height="78.0" rx="14"/>
      <text class="node-text" fill="#f4fbff" text-anchor="middle" font-size="21" font-weight="600"><tspan x="450.0" y="661.0">Eway Validation</tspan></text>
    </g>

    <g class="node" style="--nc:#ffab2e; --ng:#ffab2e;">
      <rect class="node-glow" x="620.0" y="622.0" width="260.0" height="100.0" rx="14"/>
      <rect class="node-box" x="620.0" y="622.0" width="260.0" height="100.0" rx="14"/>
      <text class="node-text" fill="#f4fbff" text-anchor="middle" font-size="21" font-weight="700"><tspan x="750.0" y="659.0">Auto Punch into In-house</tspan><tspan x="750.0" y="685.0">Excel on Cloud</tspan></text>
    </g>

    <g class="node" style="--nc:#7dffb0; --ng:#7dffb0;">
      <rect class="node-glow" x="925.0" y="622.0" width="250.0" height="78.0" rx="14"/>
      <rect class="node-box" x="925.0" y="622.0" width="250.0" height="78.0" rx="14"/>
      <text class="node-text" fill="#f4fbff" text-anchor="middle" font-size="21" font-weight="600"><tspan x="1050.0" y="661.0">Creates SPO</tspan></text>
    </g>

    <g class="node" style="--nc:#c78bff; --ng:#c78bff;">
      <rect class="node-glow" x="1225.0" y="622.0" width="250.0" height="78.0" rx="14"/>
      <rect class="node-box" x="1225.0" y="622.0" width="250.0" height="78.0" rx="14"/>
      <text class="node-text" fill="#f4fbff" text-anchor="middle" font-size="21" font-weight="600"><tspan x="1350.0" y="661.0">Validation</tspan></text>
    </g>

    <g class="node" style="--nc:#00e5ff; --ng:#00e5ff;">
      <rect class="node-glow" x="20.0" y="766.0" width="260.0" height="100.0" rx="14"/>
      <rect class="node-box" x="20.0" y="766.0" width="260.0" height="100.0" rx="14"/>
      <text class="node-text" fill="#f4fbff" text-anchor="middle" font-size="21" font-weight="700"><tspan x="150.0" y="803.0">Customer Invoice</tspan><tspan x="150.0" y="829.0">Creation</tspan></text>
    </g>

    <g class="node" style="--nc:#ff37d0; --ng:#ff37d0;">
      <rect class="node-glow" x="320.0" y="766.0" width="260.0" height="100.0" rx="14"/>
      <rect class="node-box" x="320.0" y="766.0" width="260.0" height="100.0" rx="14"/>
      <text class="node-text" fill="#f4fbff" text-anchor="middle" font-size="21" font-weight="700"><tspan x="450.0" y="803.0">Customer Eway Bill</tspan><tspan x="450.0" y="829.0">Creation</tspan></text>
    </g>

    <g class="node" style="--nc:#7dffb0; --ng:#7dffb0;">
      <rect class="node-glow" x="920.0" y="766.0" width="260.0" height="100.0" rx="14"/>
      <rect class="node-box" x="920.0" y="766.0" width="260.0" height="100.0" rx="14"/>
      <text class="node-text" fill="#f4fbff" text-anchor="middle" font-size="21" font-weight="700"><tspan x="1050.0" y="803.0">SPO Sent to</tspan><tspan x="1050.0" y="829.0">Suppliers</tspan></text>
    </g>

    <g class="node" style="--nc:#c78bff; --ng:#c78bff;">
      <rect class="node-glow" x="1220.0" y="766.0" width="260.0" height="100.0" rx="14"/>
      <rect class="node-box" x="1220.0" y="766.0" width="260.0" height="100.0" rx="14"/>
      <text class="node-text" fill="#f4fbff" text-anchor="middle" font-size="21" font-weight="700"><tspan x="1350.0" y="816.0">Finance Approval</tspan></text>
    </g></g>
</svg>` }}
      />
      <style>{idpFlowStyles}</style>
    </div>
  );
}

const argFlowchartHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<style>
  :root { --bg1: #05060c; --bg2: #0a0f1e; }
  * { box-sizing: border-box; }
  .arg-flow-container {
    background: radial-gradient(ellipse at 50% 0%, #0d1226 0%, #05060c 55%, #020308 100%);
    font-family: 'Segoe UI', system-ui, -apple-system, Arial, sans-serif;
    color: #e8f4ff;
    padding: 36px 20px 60px;
    min-height: 100%;
  }
  .arg-header { text-align: center; margin-bottom: 8px; }
  .arg-header h1 {
    font-size: 28px; letter-spacing: 1px; margin: 0 0 6px;
    background: linear-gradient(90deg, #00e5ff, #ff37d0 60%, #c6ff4d);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  .arg-header p { margin: 0; color: #7fa0c9; font-size: 13px; letter-spacing: 2px; text-transform: uppercase; }
  .arg-legend { display: flex; justify-content: center; gap: 22px; flex-wrap: wrap; margin: 20px 0 10px; font-size: 12px; color: #b9d2ee; }
  .arg-legend span { display: inline-flex; align-items: center; gap: 7px; }
  .arg-legend i { width: 10px; height: 10px; border-radius: 50%; display: inline-block; box-shadow: 0 0 8px currentColor; }
  .node-box { fill: rgba(8, 14, 28, 0.85); stroke-width: 2; }
  .edge-flow {
    fill: none; stroke-width: 2.6; stroke-linecap: round;
    stroke-dasharray: 14 220; animation: flowDash 3s linear infinite;
  }
  @keyframes flowDash { from { stroke-dashoffset: 234; } to { stroke-dashoffset: 0; } }
</style>
</head>
<body>
  <div class="arg-flow-container">
    <div class="arg-header">
      <h1>Automated Revenue Generator</h1>
      <p>End-to-end system flow · ARG</p>
    </div>
    <div class="arg-legend">
      <span><i style="background:#00e5ff"></i> AI Content Generator</span>
      <span><i style="background:#ff37d0"></i> Website Generator</span>
      <span><i style="background:#ffab2e"></i> Media Pipeline</span>
      <span><i style="background:#7dffb0"></i> Publish</span>
    </div>
    <svg viewBox="60 2390 1860 1780" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto;">
      <g style="--ec:#ff37d0;">
        <path class="edge-flow" d="M 1378,2500 C 1378,2560 1755,2560 1755,2620" stroke="#ff37d0"/>
      </g>
      <rect class="node-box" x="1118" y="2430" width="260" height="102" rx="12" stroke="#ffd24d"/>
      <text x="1248" y="2480" text-anchor="middle" fill="#fff" font-size="16">ARG Engine</text>
    </svg>
  </div>
</body>
</html>
`;

const projects = [
  {
    title: 'Intelligent Document Processing | AI-ML',
    date: 'June 2026',
    description: 'Developed an AI-powered Intelligent Document Processing (IDP) platform that classifies documents from a central email and routes them to the appropriate AI agent. The system automates extraction, validation, invoice creation, E-Way Bill creation, RFQ and CPO processing, SPO generation, and finance approval workflows, eliminating manual effort and improving processing efficiency.',
    imageUrl: 'https://picsum.photos/seed/idp/600/400',
    projectUrl: '#',
    flowchartUrl: 'idp-html',
    tags: ['AI', 'ML', 'Fresh Service', 'Automation', 'Agentic Workflow'],
    icon: <BrainCircuit className="h-6 w-6 text-accent" />,
    aiHint: "document processing automation",
    hasFlowchart: true,
    ctaText: 'View Automation'
  },
  {
    title: 'Automated Revenue Generator (ARG) | AI',
    date: 'February 2025',
    description: 'Developed an AI-driven automated publishing and monetization engine that generates and operates revenue-ready websites with minimal human intervention. The system consists of two integrated modules: an Automated Website Generator and an AI Content Generator. The website generator creates new sites, prepares them for ad monetization, and implements essential technical SEO configurations.\n\nThe AI Content Generator continuously identifies trending topics via the Google Trends API, compiles reference signals, and feeds them into OpenAI Playground with structured prompts to produce SEO-optimized content including titles, descriptions, full articles, keywords, and meta tags. Generated articles are further processed through a text humanization layer to improve readability and content quality.\n\nIn parallel, the system retrieves relevant reference images, attributes the source appropriately, and overlays site branding before publishing. All generated media and content are automatically pushed to the ARG CMS, enabling continuous publishing at scale. The ecosystem is designed to capture organic search traffic and generate advertising revenue, creating a fully automated content-to-monetization pipeline.',
    imageUrl: 'https://picsum.photos/seed/arg/600/400',
    projectUrl: '#',
    flowchartUrl: 'arg-html',
    tags: ['Automation', 'Generative AI', 'SEO Automation', 'Content Systems'],
    icon: <Workflow className="h-6 w-6 text-accent" />,
    aiHint: "automation flow revenue engine",
    hasFlowchart: true,
  },
  {
    title: 'WebAstroAI | AI',
    date: 'January 2025',
    description: 'Developed an AI-powered astrology platform that combines web-based data analysis with intelligent interpretation to generate personalised astrological insights. The system automatically scans relevant sources, extracts patterns, and delivers contextual predictions tailored to each user’s profile. Designed with scalable architecture, clean UI, and seamless deployment—now fully live and functional for end users.',
    imageUrl: 'https://picsum.photos/seed/astro/600/400',
    projectUrl: 'https://webastroai.netlify.app/',
    tags: ['AI', 'Astrology', 'Web Analysis', 'Deployed'],
    icon: <Bot className="h-6 w-6 text-accent" />,
    aiHint: "artificial intelligence astrology web app",
  },
  {
    title: 'Mail Automation | n8n',
    date: 'July 2025',
    description: 'Developed a fully automated command-to-action engine using n8n, integrating a Telegram bot with Gemini’s LLM capabilities to understand user instructions. The system restructures inputs into a predefined operational format, fetches the appropriate Gmail template from a stored library, and sends the email instantly. Designed for reliability and scalability, it serves as a hands-free AI-driven workflow for automated communication.',
    imageUrl: 'https://picsum.photos/seed/mail/600/400',
    projectUrl: '#',
    tags: ['AI', 'Automation', 'n8n', 'Telegram'],
    icon: <Mail className="h-6 w-6 text-accent" />,
    aiHint: "mail automation telegram bot",
  },
];

const AiProjectsShowcase = () => {
  const [selectedFlowchart, setSelectedFlowchart] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.5, 1));
  const handleResetZoom = () => setZoom(1);

  return (
    <section id="projects-ai" className="container mx-auto py-12 md:py-16 scroll-mt-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">AI Projects Showcase</h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Projects built to gain real-world exposure in the new-age AI space.
        </p>
        <div className="multicolor-line mt-6 mb-12 w-24 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="flex flex-col overflow-hidden bg-card hover:shadow-xl transition-shadow duration-300">
             <div className="relative h-48 w-full group overflow-hidden">
               <Image
                 src={project.imageUrl}
                 alt={project.title}
                 fill
                 className="object-cover transition-transform duration-500 group-hover:scale-105"
                 data-ai-hint={project.aiHint}
               />
               {project.hasFlowchart && (
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <Button variant="secondary" size="sm" onClick={() => setSelectedFlowchart(project.flowchartUrl || null)}>
                     <Maximize2 className="mr-2 h-4 w-4" /> View Architecture
                   </Button>
                 </div>
               )}
             </div>
            <CardHeader className="pb-2">
               <div className="flex items-center justify-between mb-1">
                   <div className="flex items-center gap-3">
                       {project.icon}
                       <CardTitle className="text-lg">{project.title}</CardTitle>
                   </div>
                   <span className="text-xs text-muted-foreground">{project.date}</span>
               </div>
                 <div className="flex flex-wrap gap-1 pt-1">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription as="div">
                <ReadMore text={project.description} />
              </CardDescription>
            </CardContent>
            <CardFooter className="flex flex-col gap-2">
              {project.hasFlowchart && !project.ctaText && (
                <Button variant="default" className="w-full" onClick={() => setSelectedFlowchart(project.flowchartUrl || null)}>
                  View Flowchart <Workflow className="ml-2 h-4 w-4" />
                </Button>
              )}
              {project.projectUrl !== '#' && (
                <Button asChild variant="default" className="w-full">
                  <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                    {project.ctaText || 'View Project'} <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
              {project.ctaText && project.projectUrl === '#' && (
                <Button variant="default" className="w-full" onClick={() => {
                  if (project.hasFlowchart) {
                    setSelectedFlowchart(project.flowchartUrl || null);
                  }
                }}>
                  {project.ctaText} <Workflow className="ml-2 h-4 w-4" />
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedFlowchart} onOpenChange={(open) => {
        if (!open) {
          setSelectedFlowchart(null);
          setZoom(1);
        }
      }}>
        <DialogContent className="max-w-[95vw] w-full h-[90vh] flex flex-col p-0 overflow-hidden bg-background">
          <DialogHeader className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle>Project Architecture</DialogTitle>
                <DialogDescription>Detailed Pipeline Workflow</DialogDescription>
              </div>
              {selectedFlowchart !== 'arg-html' && selectedFlowchart !== 'idp-html' && (
                <div className="flex items-center gap-2 mr-6">
                  <Button variant="outline" size="icon" onClick={handleZoomOut} disabled={zoom <= 1}>
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <span className="text-sm font-mono w-12 text-center">{Math.round(zoom * 100)}%</span>
                  <Button variant="outline" size="icon" onClick={handleZoomIn} disabled={zoom >= 3}>
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={handleResetZoom}>
                    Reset
                  </Button>
                </div>
              )}
            </div>
          </DialogHeader>
          <div className="flex-grow overflow-auto bg-muted/20 relative p-0">
            {selectedFlowchart === 'idp-html' ? (
              <IdpFlowDiagram />
            ) : selectedFlowchart === 'arg-html' ? (
              <div className="w-full h-full" dangerouslySetInnerHTML={{ __html: argFlowchartHtml }} />
            ) : (
              <div 
                className="relative min-h-full transition-transform duration-200 ease-out origin-top-left flex items-start justify-center p-4"
                style={{ 
                  transform: `scale(${zoom})`,
                  width: zoom > 1 ? `${zoom * 100}%` : '100%',
                }}
              >
                {selectedFlowchart && (
                  <Image
                    src={selectedFlowchart}
                    alt="Architecture Flowchart"
                    width={2000}
                    height={2000}
                    className="max-w-full h-auto object-contain rounded-md shadow-2xl"
                  />
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

       <div className="text-center text-muted-foreground mt-12 pb-8">
         <p>More AI Projects coming soon...</p>
       </div>
    </section>
  );
};

export default AiProjectsShowcase;
