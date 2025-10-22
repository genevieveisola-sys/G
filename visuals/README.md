# Visual Assets & Slide Mockups
**Design specifications and diagrams for the Grammarly presentation**

---

## Overview

This folder contains detailed visual specifications, diagrams, and mockups for all key slides in the "Connecting People, Design, and Systems That Scale" presentation. Use these as blueprints for creating the final slide deck in your preferred design tool.

---

## Folder Structure

```
visuals/
├── diagrams/                       # Visual diagrams and flowcharts
│   ├── ouroboros_loop_diagram.md
│   ├── meta_timeline_diagram.md
│   ├── ring_90day_sprint_diagram.md
│   ├── stakeholder_network_map.md
│   └── risk_mitigation_matrix.md
├── mockups/                        # Detailed slide layout mockups
│   └── slide_mockups.md
└── README.md                       # This file
```

---

## Visual Assets by Slide

### Slide 1: Title / Introduction
**File:** `mockups/slide_mockups.md` (Section: Slide 1)
- Full-bleed hero title
- Minimal, elegant layout
- Optional headshot in corner
- Small footer with key stats

---

### Slide 2: Philosophy — The Ouroboros Approach
**File:** `diagrams/ouroboros_loop_diagram.md`
- Circular loop diagram with 8 stages
- Three pillars sidebar
- Color-coded stages
- Footer with ROI callouts
- Mermaid flowchart version included

**Key Visual:** Ouroboros loop (Listen → Align → Build → Prove → Scale → Measure → Inform → Iterate)

---

### Slide 3: Why These Two Case Studies
**File:** `mockups/slide_mockups.md` (Section: Slide 3)
- Two-card split layout
- Logo lockups (Meta / Ring)
- Key differentiator: Scale vs. Speed

---

### Slide 4: Meta Executive Summary
**File:** `diagrams/meta_timeline_diagram.md`
- 12-month horizontal timeline
- Key milestones by quarter
- Bulleted summary box with metrics

---

### Slides 5-11: Meta Case Study Visuals

#### Timeline & Progress
**File:** `diagrams/meta_timeline_diagram.md`
- Quarter-by-quarter breakdown (Q1-Q4)
- Three workstreams (Agency, Blueprint, Creators) in parallel
- Adoption curve visualization (15% → 80%)
- Gantt chart (Mermaid format)

#### Stakeholder Network (Slide 7)
**File:** `diagrams/stakeholder_network_map.md`
- Network map with nodes and connections
- Legend by function type (Core, Partners, Leadership)
- Circular alternative layout
- Mermaid network diagram

#### Approach & Strategy (Slide 8)
**File:** `diagrams/meta_timeline_diagram.md`
- Ouroboros applied to rituals/pods
- Checklist of rituals
- Cadence timeline

#### Risks & Mitigation (Slide 9)
**File:** `diagrams/risk_mitigation_matrix.md`
- Two-column risk table
- 2x2 risk matrix (Impact vs. Likelihood)
- Color-coded by severity
- Mitigation cadence callouts

#### Outcomes & Impact (Slide 10)
**File:** `diagrams/meta_timeline_diagram.md` + `mockups/slide_mockups.md`
- Metrics dashboard (2x3 grid)
- Large numbers with icons
- Progress bars
- Visual summary of all key metrics

---

### Slides 12-20: Ring Case Study Visuals

#### Timeline & Sprint Structure
**File:** `diagrams/ring_90day_sprint_diagram.md`
- 90-day dual-track overview (Working Model + AI Sprint)
- Week-by-week breakdown (0-12)
- Three-lane sprint diagram (UX, Brand, Strategy)
- UXR throughline visualization
- Sprint cadence (weekly rituals)
- Dual-track progress chart
- Gantt chart (Mermaid format)

#### Stakeholder Network (Slide 15)
**File:** `diagrams/stakeholder_network_map.md`
- Circular pod structure
- Pod composition table
- Workshop participation matrix
- Mermaid network diagram

#### Approach: Working Model (Slide 16)
**File:** `diagrams/ring_90day_sprint_diagram.md`
- Two-stack layout (artifacts vs. rituals)
- Visual cards for each element

#### Approach: AI Sprint (Slide 17)
**File:** `diagrams/ring_90day_sprint_diagram.md`
- Three-lane diagram with UXR throughline
- Weekly milestones within each lane
- Color-coded by lane (UX, Brand, Strategy)

#### Risks & Mitigation (Slide 18)
**File:** `diagrams/risk_mitigation_matrix.md`
- 2x2 grid (Executive, Adoption, Morale, Delivery)
- Risk heatmap (color-coded)
- Weekly risk review template
- Mitigation cadence calendar
- Escalation flowchart (Mermaid)

#### Outcomes & Impact (Slide 19)
**File:** `diagrams/ring_90day_sprint_diagram.md` + `mockups/slide_mockups.md`
- Dual timeline (Model vs. Sprint)
- Badge-style outcome callouts
- Metrics dashboard with progress bars

---

### Slides 21-24: Closing Slides

#### Why Grammarly (Slide 21)
**File:** `mockups/slide_mockups.md` (Section: Slide 21)
- Centered headline
- 3-icon row (trust/craft/growth)
- Alignment statement

#### How I Map to the Role (Slide 22)
- Pull-quote layout with JD excerpts
- Mapped bullets showing delivery proof

#### Thank You (Slide 24)
**File:** `mockups/slide_mockups.md` (Section: Slide 24)
- Minimal, elegant layout
- Contact information
- CTA for deeper conversation

---

## Design System Reference

### Typography
```
Slide Titles:            48-60pt, Bold
Section Headers:         36-42pt, Semibold
Body Text:               20-24pt, Regular
Captions:                14-16pt, Light
Large Metrics:           60-72pt, Bold

Recommended Fonts:
  • Inter
  • SF Pro Display
  • Roboto
  • Avenir
```

### Color Palette
```
Primary:
  Navy:       #1E3A8A
  Blue:       #4A90E2
  Teal:       #16A085

Secondary:
  Green:      #50C878
  Purple:     #BD10E0
  Orange:     #F5A623

Neutrals:
  Dark Gray:  #374151
  Gray:       #6B7280
  Light Gray: #D1D5DB
  White:      #FFFFFF
```

### Layout Specifications
```
Canvas: 1920x1080 (16:9)
Safe Zone: 100px margin
Grid: 12 columns, 20px gutter
Card Padding: 30-40px
Border Radius: 12-16px
```

---

## How to Use These Assets

### For Canva (Recommended for Quick Design)
**See detailed guide:** `CANVA_GUIDE.md`
1. Create presentation (16:9 format)
2. Add custom color palette (hex codes provided)
3. Use recommended fonts (Montserrat, Lexend, Poppins)
4. Render Mermaid diagrams at mermaid.live → upload to Canva
5. Follow step-by-step instructions for each key slide

### For Figma/Sketch/Adobe XD
1. Create a new 1920x1080 canvas
2. Use the layout specifications from `mockups/slide_mockups.md`
3. Import Mermaid diagrams as SVG (use mermaid.live to render)
4. Apply the color palette and typography system
5. Follow the visual hierarchy guidelines

### For PowerPoint/Keynote
1. Set slide size to 16:9 (1920x1080)
2. Use the ASCII diagrams as layout guides
3. Recreate diagrams using built-in shapes and SmartArt
4. Apply consistent fonts and colors across all slides
5. Add animations per the specifications

### For Google Slides
1. Use 16:9 widescreen format
2. Import visual guides as images for reference
3. Recreate layouts using text boxes and shapes
4. Apply theme colors matching the palette
5. Keep animations simple (fade, slide)

---

## Rendering Mermaid Diagrams

All Mermaid diagrams can be rendered at:
- **mermaid.live** (https://mermaid.live/)
- **mermaid-js.github.io** (https://mermaid-js.github.io/mermaid-live-editor/)

**Steps:**
1. Copy the Mermaid code from the `.md` files
2. Paste into mermaid.live editor
3. Export as SVG or PNG
4. Import into your slide deck

---

## Animation Recommendations

### Slide 2 (Ouroboros)
- Loop: Fade in (0.5s)
- Stages: Sequential highlight (0.3s each)
- Pillars: Stagger in (0.4s delay)

### Slide 10 & 19 (Outcomes)
- Cards: Sequential appearance (top-left to bottom-right)
- Metrics: Count-up animation (1-2s)
- Progress bars: Fill animation (1s)

### Slide 3 (Case Studies)
- Cards: Slide in from sides (0.6s, ease-out)

### General Principles
- Keep animations subtle (0.3-0.6s)
- Use consistent easing (ease-out)
- Don't over-animate
- Motion should guide attention

---

## Accessibility Checklist

- [ ] Color contrast meets WCAG 2.1 AA (4.5:1 for text)
- [ ] Font size minimum 20pt for body text
- [ ] Alt text provided for all diagrams
- [ ] Visual information not conveyed by color alone
- [ ] Clear visual hierarchy (size, weight, spacing)
- [ ] Readable from 10 feet away (presentation context)

---

## Export Recommendations

### For Presentation
- **Format:** PDF or native (Keynote/PPTX)
- **Resolution:** Native (vector when possible)
- **Backup:** PNG exports at 2x (3840x2160)

### For Sharing
- **Deck:** PDF with animations flattened
- **Individual Slides:** PNG (2x) for email/chat
- **Diagrams:** SVG for scalability

### For Iteration
- **Source Files:** Keep editable (Figma, Keynote, PPTX)
- **Version Control:** Use timestamps or version numbers
- **Templates:** Save as templates for future decks

---

## Quick Reference: Slide-to-File Mapping

| Slide | Title | Visual File |
|-------|-------|-------------|
| 1 | Title | `mockups/slide_mockups.md` |
| 2 | Ouroboros | `diagrams/ouroboros_loop_diagram.md` |
| 3 | Case Studies | `mockups/slide_mockups.md` |
| 4-11 | Meta | `diagrams/meta_timeline_diagram.md` + risk matrix |
| 7 | Stakeholders (Meta) | `diagrams/stakeholder_network_map.md` |
| 9 | Risks (Meta) | `diagrams/risk_mitigation_matrix.md` |
| 10 | Outcomes (Meta) | `mockups/slide_mockups.md` |
| 12-20 | Ring | `diagrams/ring_90day_sprint_diagram.md` + risk matrix |
| 15 | Stakeholders (Ring) | `diagrams/stakeholder_network_map.md` |
| 18 | Risks (Ring) | `diagrams/risk_mitigation_matrix.md` |
| 19 | Outcomes (Ring) | `mockups/slide_mockups.md` |
| 21 | Why Grammarly | `mockups/slide_mockups.md` |
| 24 | Thank You | `mockups/slide_mockups.md` |

---

## Tips for Success

1. **Start with Structure:** Build slide layouts before adding content
2. **Use a Grid:** Maintain consistent alignment and spacing
3. **Limit Fonts:** Use 1-2 font families maximum
4. **Embrace White Space:** Don't overcrowd slides
5. **Test Readability:** View slides in presentation mode from a distance
6. **Iterate:** Create quick mockups, get feedback, refine
7. **Keep It Simple:** Clarity > Complexity

---

## Need Help?

If you need additional visual assets:
- **Diagrams:** Request specific flowcharts, timelines, or network maps
- **Icons:** Use Heroicons, Feather Icons, or create custom
- **Illustrations:** Commission or use stock illustrations that match the tone
- **Data Viz:** Use chart libraries (Chart.js, D3.js) or design tools

---

**Last Updated:** October 2025
**For:** Grammarly Growth Virtual Onsite Presentation
**Created By:** Genevieve Isola
