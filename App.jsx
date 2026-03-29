import { useMemo, useState } from "react";
import { ArrowLeft, ArrowUpRight, Plus, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "01",
    image:
      "https://app.milanote.com/media/p/images/1SXDEX1FVR9mdV/nMG/75085e36ad9ce0e6c33a99fe5c548d6.jpg?w=1600&v=2&elementId=1VNp9p1XfhcLar",
    slug: "gyroscope-lighting-device",
    title: "Gyroscope Lighting Device",
    category: "Lighting Object",
    year: "2025",
    heroLabel: "Sound, motion",
    summary:
      "A gyroscope-inspired lighting device that uses rotating structure, reflective surfaces, and colored light to create a more atmospheric interaction.",
    short: "Light + motion interaction",
    challenge:
      "How can a lighting object feel sculptural and playful at the same time, while still producing a clear visual response through direct movement?",
    outcome:
      "The final proposal uses a gyroscope-like ring structure to turn movement into changing light, reflection, and spatial atmosphere.",
    details: [
      "The concept combines lighting design with a kinetic object language.",
      "The circular structure helps frame the light source as the visual center of the project.",
      "Interaction comes from rotating and handling the object directly.",
      "The project focuses on atmosphere rather than purely functional illumination.",
    ],
    process: [
      {
        title: "Concept Development",
        text: "The project started from the idea of treating light as something users can actively shape instead of something static. Early sketches explored ring structures, central cores, and references to gyroscopes and orbital movement.",
      },
      {
        title: "Form Study",
        text: "Different compositions were tested to find a balance between visual stability and dynamic movement. Circular framing became the key design language because it felt both mechanical and elegant.",
      },
      {
        title: "Interaction Logic",
        text: "The object was developed as something that could be held and rotated, allowing light and reflection to shift with the user’s movement. This made the experience more immersive and playful.",
      },
      {
        title: "Final Direction",
        text: "The final design presents a sculptural lighting object where motion, color, and reflection work together. It reads as both a functional light and an atmospheric installation piece.",
      },
    ],
  },
  {
    id: "02",
    image:
      "https://app.milanote.com/media/p/images/1VNpls1YRoHB1S/3vO/f53a1e7f39a8afe77f1adccf5ec516d.jpg?w=display&v=2&elementId=1VNpls1YRoHB1S",
    slug: "color-changing-sound-activated-light",
    title: "Sound Activated Light",
    category: "Outdoor Lighting",
    year: "2025",
    heroLabel: "Pattern",
    summary:
      "An outdoor lighting proposal that uses a tall geometric structure and patterned illuminated surfaces to create a strong visual presence at night.",
    short: "Pattern light",
    challenge:
      "How can a simple outdoor light become visually memorable without losing the restraint of a modern, minimal structure?",
    outcome:
      "The final lamp combines pattern, colored illumination, and a clean upright form to create a stronger spatial identity in outdoor environments.",
    details: [
      "The project explores how pattern can shape the identity of a lighting object.",
      "Its vertical proportion helps it stand out clearly in outdoor space.",
      "The illuminated surfaces create a softer glow while preserving geometric clarity.",
      "The final direction balances decorative rhythm with a minimal overall silhouette.",
    ],
    process: [
      {
        title: "Visual Research",
        text: "The project began with research into geometric outdoor fixtures, illuminated panels, and architectural lanterns. The goal was to make a lamp that feels simple in form but atmospheric in use.",
      },
      {
        title: "Pattern Exploration",
        text: "A series of graphic studies tested how repeating shapes and openings could affect the lamp’s daytime appearance and nighttime glow. These studies helped define the final surface language.",
      },
      {
        title: "Structure",
        text: "The form was refined into a clean upright body with a strong base and a contained lighting zone. Keeping the structure simple allowed the pattern and illumination to take visual priority.",
      },
      {
        title: "Final Proposal",
        text: "The final design creates a clear nighttime identity through vertical proportion, light diffusion, and rhythmic pattern. It functions as both a lamp and a visual marker in space.",
      },
    ],
  },
  {
    id: "03",
    image:
      "https://app.milanote.com/media/p/images/1TQQlq17JpLs3B/5Db/Project%201-2.jpg?w=display&v=2&elementId=1VNpt21YRoHB3S",
    slug: "extended-desktop",
    title: "Extended Desktop",
    category: "Product",
    year: "2025",
    heroLabel: "Foldable",
    summary:
      "A compact portable support system designed to create a temporary dining or working surface in situations where a normal table is not available.",
    short: "Compact dining",
    challenge:
      "How can a portable tabletop product stay compact and lightweight while still feeling stable enough for everyday use?",
    outcome:
      "The final proposal uses a foldable structure to create a simple elevated surface that is easier to carry, store, and use in small spaces.",
    details: [
      "The project responds to informal living and eating situations.",
      "Foldability is the main strategy for portability and storage.",
      "The structure is kept visually light to match its mobile use context.",
      "The final direction emphasizes convenience, simplicity, and compactness.",
    ],
    process: [
      {
        title: "Problem Framing",
        text: "The project started from the everyday inconvenience of eating or working without a proper table. The design question focused on mobility, stability, and small-space usability.",
      },
      {
        title: "Mockups",
        text: "Early studies tested proportions, folding directions, and support angles. Rough models were useful for understanding how the structure might open, lock, and rest in use.",
      },
      {
        title: "System Refinement",
        text: "The design was simplified into a more compact structure that could be carried or stored easily. Visual clutter was reduced so the product would feel calm and straightforward.",
      },
      {
        title: "Final Proposal",
        text: "The result is a lightweight portable platform for temporary use. It is designed to support everyday convenience in situations where permanent furniture is unavailable or impractical.",
      },
    ],
  },
  {
    id: "04",
    image:
      "https://app.milanote.com/media/p/images/1Ue0zB1RbyTr0v/BnI/normal.12.png?w=display&v=2&elementId=1VNpzq1YRoHB5Y",
    slug: "rv-cutting-board-drainer",
    title: "RV Drainer",
    category: "Kitchen",
    year: "2025",
    heroLabel: "Compact",
    summary:
      "A foldable cutting board and draining system designed for RV kitchens, where workspace, storage, and stability are all limited.",
    short: "Foldable system",
    challenge:
      "How can one kitchen object support food preparation and dish draining in a compact mobile environment without becoming bulky or inconvenient?",
    outcome:
      "The final proposal integrates cutting, draining, and folding storage into one compact system tailored to the constraints of RV life.",
    details: [
      "The project is based on small-kitchen and mobile-living scenarios.",
      "Its foldable elements help expand workspace only when needed.",
      "The overall system combines preparation and cleanup functions.",
      "The final form aims to be practical, compact, and easy to store during travel.",
    ],
    process: [
      {
        title: "Research",
        text: "The project began with research into RV kitchens, especially the limited counter area and the need for products that can serve more than one function. Mobility and storage were key concerns from the beginning.",
      },
      {
        title: "Use Scenario Mapping",
        text: "The design process focused on the sequence of preparing food, washing, draining, and storing the object afterward. This helped define the project as a compact system instead of a single flat board.",
      },
      {
        title: "Form Development",
        text: "Sketches and structure studies explored hinged surfaces, draining positions, and folding logic. The design moved toward a compact rectangular form that opens into multiple working states.",
      },
      {
        title: "Final Proposal",
        text: "The final solution combines cutting board and drainer functions in one product. It is designed to save space, improve flexibility, and fit the practical realities of mobile kitchen use.",
      },
    ],
  },
];

const reservedProject = {
  id: "05",
  title: "Project Five",
  category: "Reserved Slot",
  short: "Open for a future capstone, installation, or product system.",
};

function ProjectThumbnail({ project, onOpen }) {
  return (
    <motion.article
      layout
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.04)]"
    >
      <button onClick={onOpen} className="block w-full text-left">
        <div className="relative aspect-[4/3] overflow-hidden border-b border-neutral-200 bg-neutral-100">
          <img
            src={project.image}
            alt={project.title}
            onError={(e) => {
              e.currentTarget.src =
                "https://via.placeholder.com/800x600?text=Image+Missing";
            }}
            style={project.id === "01" ? { objectPosition: "center 75%" } : {}}
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
          <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:34px_34px]" />
          <div className="relative flex h-full flex-col justify-between p-6">
            <div className="flex items-start justify-between">
              <span className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                {project.id}
              </span>
              <span className="rounded-full border border-neutral-300 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-neutral-500">
                {project.year}
              </span>
            </div>
            <div>
              <div className="mb-3 text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                {project.heroLabel}
              </div>
              <div className="flex items-center justify-between gap-4">
                <h3
                  className={`max-w-[80%] text-2xl font-medium tracking-tight ${
                    project.id === "01" || project.id === "02"
                      ? "text-white"
                      : "text-neutral-900"
                  }`}
                >
                  {project.title}
                </h3>
                <ArrowUpRight className="h-5 w-5 text-neutral-500 transition group-hover:text-neutral-900" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 p-6">
          <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">
            {project.category}
          </p>
          <p className="text-sm leading-7 text-neutral-700">{project.short}</p>
          <div className="pt-2 text-sm font-medium text-neutral-900">View project</div>
        </div>
      </button>
    </motion.article>
  );
}

function ReservedCard() {
  return (
    <article className="overflow-hidden rounded-[28px] border border-dashed border-neutral-300 bg-white/70">
      <div className="flex aspect-[4/3] flex-col justify-between border-b border-dashed border-neutral-300 p-6">
        <div className="flex items-start justify-between">
          <span className="text-[11px] uppercase tracking-[0.28em] text-neutral-400">
            05
          </span>
          <span className="rounded-full border border-dashed border-neutral-300 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-neutral-400">
            Open
          </span>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-neutral-300 text-neutral-400">
            <Plus className="h-8 w-8" />
          </div>
        </div>
      </div>
      <div className="space-y-4 p-6">
        <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">
          {reservedProject.category}
        </p>
        <h3 className="text-2xl font-medium tracking-tight text-neutral-600">
          {reservedProject.title}
        </h3>
        <p className="text-sm leading-7 text-neutral-600">{reservedProject.short}</p>
      </div>
    </article>
  );
}

function ProjectDetail({ project, onBack, onOpenProject }) {
  const nextProjects = projects.filter((item) => item.id !== project.id).slice(0, 3);

  return (
    <motion.div
      key={project.slug}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen bg-neutral-50"
    >
      <header className="sticky top-0 z-30 border-b border-neutral-200/80 bg-neutral-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm text-neutral-600 transition hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to index
          </button>
          <div className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
            Project {project.id}
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-12 md:px-10 md:py-20">
          <div className="md:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
              {project.category}
            </p>
            <h1 className="mt-4 text-4xl font-medium leading-tight tracking-tight md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-700 md:text-lg">
              {project.summary}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                <div className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">
                  Challenge
                </div>
                <p className="mt-3 text-sm leading-7 text-neutral-700">
                  {project.challenge}
                </p>
              </div>
              <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                <div className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">
                  Outcome
                </div>
                <p className="mt-3 text-sm leading-7 text-neutral-700">
                  {project.outcome}
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
              <div className="relative aspect-[16/11] overflow-hidden border-b border-neutral-200">
                <img
                  src={project.image}
                  alt={project.title}
                  style={project.id === "01" ? { objectPosition: "center 75%" } : {}}
                  className="absolute inset-0 h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/1200x800?text=Image+Missing";
                  }}
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white md:p-8">
                  <div className="flex items-start justify-between">
                    <span className="text-[11px] uppercase tracking-[0.28em] text-white/80">
                      Featured visual
                    </span>
                    <span className="rounded-full border border-white/60 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/90">
                      {project.year}
                    </span>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-white/80">
                      {project.heroLabel}
                    </p>
                    <h2 className="mt-3 text-3xl font-medium tracking-tight text-white md:text-5xl">
                      {project.title}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="grid gap-0 md:grid-cols-3">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="aspect-[4/3] border-t border-neutral-200 bg-neutral-100 p-4 md:border-l md:first:border-l-0"
                  >
                    <div className="flex h-full items-end rounded-[18px] border border-dashed border-neutral-300 p-4 text-xs uppercase tracking-[0.24em] text-neutral-400">
                      Gallery image {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-6 md:px-10">
          <div className="grid gap-6 md:grid-cols-12">
            <div className="rounded-[28px] border border-neutral-200 bg-white p-6 md:col-span-4 md:p-8">
              <div className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                Project notes
              </div>
              <div className="mt-5 space-y-4">
                {project.details.map((detail) => (
                  <div
                    key={detail}
                    className="border-t border-neutral-100 pt-4 text-sm leading-7 text-neutral-700 first:border-t-0 first:pt-0"
                  >
                    {detail}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-neutral-200 bg-white p-6 md:col-span-8 md:p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                    Process
                  </div>
                  <h3 className="mt-2 text-2xl font-medium tracking-tight text-neutral-900 md:text-3xl">
                    From research to final proposal
                  </h3>
                </div>
              </div>

              <div className="mt-8 space-y-8">
                {project.process.map((step, index) => (
                  <div
                    key={step.title}
                    className="grid gap-4 border-t border-neutral-100 pt-6 first:border-t-0 first:pt-0 md:grid-cols-[90px_1fr]"
                  >
                    <div className="text-[11px] uppercase tracking-[0.28em] text-neutral-400">
                      Step {index + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-medium tracking-tight text-neutral-900">
                        {step.title}
                      </h4>
                      <p className="mt-3 max-w-3xl text-sm leading-8 text-neutral-700">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <div className="rounded-[32px] border border-neutral-200 bg-white p-6 md:p-10">
            <div className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-4">
                <div className="text-[11px] uppercase tracking-[0.28em] text-neutral-500">
                  More work
                </div>
                <h3 className="mt-3 text-3xl font-medium tracking-tight text-neutral-900">
                  Explore other projects
                </h3>
              </div>
              <div className="grid gap-4 md:col-span-8 md:grid-cols-3">
                {nextProjects.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onOpenProject(item.slug)}
                    className="rounded-[22px] border border-neutral-200 bg-neutral-50 p-5 text-left transition hover:-translate-y-1 hover:bg-neutral-100"
                  >
                    <div className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">
                      {item.id}
                    </div>
                    <h4 className="mt-4 text-xl font-medium tracking-tight text-neutral-900">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-sm leading-7 text-neutral-700">
                      {item.short}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}

function HomePage({ onOpenProject }) {
  return (
    <motion.div
      key="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen bg-neutral-50 text-neutral-900"
    >
      <header className="sticky top-0 z-30 border-b border-neutral-200/80 bg-neutral-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-neutral-500">
              Xiao Zhu
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-neutral-600 md:flex">
            <a href="#work" className="transition hover:text-neutral-900">
              Work
            </a>
            <a href="#about" className="transition hover:text-neutral-900">
              About
            </a>
            <a href="#contact" className="transition hover:text-neutral-900">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-12 md:px-10 md:py-24">
          <div className="md:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.32em] text-neutral-500">
              Selected Work
            </div>
          </div>
          <div className="flex items-end md:col-span-5">
            <p className="max-w-md text-sm leading-8 text-neutral-700 md:ml-auto">
              Designed as a cleaner portfolio experience rather than a simple card gallery. The homepage introduces the work, and each project opens into its own detailed page structure.
            </p>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-6 py-10 md:px-10 md:py-16">
          <div className="mb-8 flex items-end justify-between gap-6 border-b border-neutral-200 pb-5">
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">
                Work
              </div>
              <h2 className="mt-2 text-3xl font-medium tracking-tight text-neutral-900 md:text-4xl">
                Project index
              </h2>
            </div>
            <div className="hidden text-sm text-neutral-500 md:block">
              Click any card to open its own page
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectThumbnail
                key={project.id}
                project={project}
                onOpen={() => onOpenProject(project.slug)}
              />
            ))}
            <ReservedCard />
          </div>
        </section>

        <section id="about" className="border-y border-neutral-200 bg-white/70">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-12 md:px-10 md:py-20">
            <div className="md:col-span-4">
              <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">
                About
              </div>
            </div>
            <div className="space-y-6 md:col-span-8">
              <p className="max-w-3xl text-lg leading-8 text-neutral-700">
                Xiao Zhu is a concept-driven industrial designer interested in building clear systems, products, and experiences from abstract ideas. This site structure is intentionally restrained: large typography, calm spacing, modular project pages, and minimal visual noise.
              </p>
              <p className="max-w-3xl text-sm leading-7 text-neutral-600">
                If you are interested in character concept design, you can visit my personal concept design portfolio.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <div
                  onClick={() =>
                    window.open("https://takanashimakino.artstation.com/", "_blank")
                  }
                  className="cursor-pointer flex-1 rounded-2xl border border-neutral-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">
                    ArtStation
                  </div>
                  <div className="mt-3 text-sm leading-7 text-neutral-700">
                    takanashimakino.artstation.com
                  </div>
                </div>
                <div
                  onClick={() =>
                    window.open(
                      "https://www.xiaohongshu.com/user/profile/6569fea10000000020036386?tab=note&subTab=note",
                      "_blank"
                    )
                  }
                  className="cursor-pointer flex-1 rounded-2xl border border-neutral-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">
                    Xiaohongshu
                  </div>
                  <div className="mt-3 text-sm leading-7 text-neutral-700">
                    View profile
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-6 rounded-[32px] border border-neutral-200 bg-white p-8 md:grid-cols-12 md:p-10">
            <div className="md:col-span-6">
              <div className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">
                Contact
              </div>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-neutral-900 md:text-4xl">
                Available for internships, collaborations, and new project opportunities.
              </h2>
            </div>
            <div className="space-y-4 md:col-span-6 md:pl-10">
              <div className="flex items-center gap-3 text-sm text-neutral-700">
                <Mail className="h-4 w-4" />
                xzhu11558@gmail.com
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-700">
                <MapPin className="h-4 w-4" />
                Zhuhai
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-700">
                <span className="text-neutral-500">📞</span>
                +86 15050749848 / +1 9178265290
              </div>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
}

export default function App() {
  const [activeSlug, setActiveSlug] = useState(null);

  const activeProject = useMemo(
    () => projects.find((project) => project.slug === activeSlug) || null,
    [activeSlug]
  );

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 antialiased">
      <AnimatePresence mode="wait">
        {activeProject ? (
          <ProjectDetail
            project={activeProject}
            onBack={() => setActiveSlug(null)}
            onOpenProject={setActiveSlug}
          />
        ) : (
          <HomePage onOpenProject={setActiveSlug} />
        )}
      </AnimatePresence>
    </div>
  );
}
