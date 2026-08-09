'use client';

import { ArrowRight, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState, useEffect, useRef, memo } from 'react';
import { PERFORMANCE_THRESHOLDS } from '@/lib/constants';
import type { ProcessStep, Position } from '@/types';
import { SafeImage } from '@/components/ui/safe-image';
import { team } from '@/lib/team';
import { TextReveal } from '@/components/ui/text-reveal';
import { FadeIn } from '@/components/ui/fade-in';

const saturnImage = '/images/saturn.png';
const discoveryImage = '/images/zenara-discovery.jpg';
const prototypingImage = '/images/zenara-prototyping.jpg';
const buildImage = '/images/zenara-build.jpg';


const stackItems = [
  { name: 'Next.js 14', category: 'Framework', desc: 'App Router, SSR, static generation for Lighthouse 90+ scores' },
  { name: 'TypeScript', category: 'Language', desc: 'Strict-mode across every project — zero runtime surprises' },
  { name: 'Tailwind CSS', category: 'Styling', desc: 'Utility-first, purged at build — no unused CSS ever ships' },
  { name: 'Vercel', category: 'Deployment', desc: 'Edge network, instant rollbacks, automatic preview environments' },
  { name: 'Cloudflare', category: 'Security & CDN', desc: 'DDoS protection, DNS, WAF, and global cache layer' },
  { name: 'Figma', category: 'Design', desc: 'High-fidelity prototypes reviewed and approved before any code is written' },
  { name: 'Stripe', category: 'Payments', desc: 'PCI-compliant payment flows for e-commerce and booking integrations' },
  { name: 'Google Analytics 4', category: 'Analytics', desc: 'Privacy-first tracking with anonymised IP and custom event funnels' },
];


const process: ProcessStep[] = [
  {
    phase: 'Discovery',
    details: ['Business goals analysis', 'Target audience research', 'Competitive landscape review', 'Technical requirements gathering'],
  },
  {
    phase: 'Prototyping',
    details: ['Mock-up designs', 'Button/links design flow', 'Image/video placement design', 'Systems design and software architecture'],
  },
  {
    phase: 'Build',
    details: ['Modern development practices', 'Component-based architecture', 'Performance optimization', 'Cross-browser testing'],
  },
  {
    phase: 'Quality Testing',
    details: ['Performance testing', 'Device compatibility check', 'SEO optimization', 'Mobile responsiveness and optimization', 'Custom functionality testing'],
  },
  {
    phase: 'Launch',
    details: ['DNS setup & SSL', 'CDN configuration', 'Analytics integration', 'Domain hookup', 'Email notification config'],
  },
  {
    phase: 'Support',
    details: ['Monthly maintenance', 'Content updates', 'Security patches', 'Performance monitoring'],
  },
];

const About = () => {
  const [visibleTimelineItems, setVisibleTimelineItems] = useState<number[]>([]);
  const [saturnPosition, setSaturnPosition] = useState<Position>({ scale: 1, x: 0, y: 0, opacity: 0.2 });
  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const heroSectionRef = useRef<HTMLDivElement>(null);

  // Timeline animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-timeline-index') || '0');
          if (entry.isIntersecting) {
            setVisibleTimelineItems((prev) => (prev.includes(index) ? prev : [...prev, index]));
          }
        });
      },
      { threshold: PERFORMANCE_THRESHOLDS.INTERSECTION_OBSERVER }
    );
    timelineRefs.current.forEach((ref) => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  // Saturn scroll parallax
  useEffect(() => {
    const handleScroll = () => {
      if (!heroSectionRef.current) return;
      const rect = heroSectionRef.current.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.8;
      if (rect.top > triggerPoint) {
        setSaturnPosition({ scale: 1, x: 0, y: 0, opacity: 0.2 });
        return;
      }
      const scrollFromTrigger = Math.max(0, triggerPoint - rect.top);
      const progress = Math.min(1, scrollFromTrigger / (triggerPoint + rect.height));
      if (progress < 0.3) {
        const p = progress / 0.3;
        setSaturnPosition({ scale: 1 + 1.5 * p, x: 0, y: 0, opacity: 0.2 + 0.3 * p });
      } else {
        const p = (progress - 0.3) / 0.7;
        setSaturnPosition({ scale: 2.5, x: -300 * p, y: 200 * p, opacity: 0.5 - 0.5 * p });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen" role="main" aria-label="About page">

      {/* ─── HERO ────────────────────────────────────────────────────── */}
      <section
        ref={heroSectionRef}
        className="relative overflow-hidden bg-black pt-36 sm:pt-44 md:pt-52 pb-20 sm:pb-24 md:pb-32"
      >
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-cyan-900/50 to-black" />
          <div className="absolute inset-0 bg-gradient-to-tl from-black via-purple-900/40 to-black" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
          <div className="bg-star" style={{ top: '12%', left: '8%' }} />
          <div className="bg-star" style={{ top: '20%', left: '22%' }} />
          <div className="bg-star" style={{ top: '8%', left: '55%' }} />
          <div className="bg-star" style={{ top: '30%', left: '70%' }} />
          <div className="bg-star" style={{ top: '15%', left: '88%' }} />
        </div>

        {/* Saturn parallax */}
        <div
          className="absolute top-8 right-8 sm:top-12 sm:right-12 w-24 h-24 sm:w-36 sm:h-36 md:w-52 md:h-52 pointer-events-none"
          style={{
            transform: `scale(${saturnPosition.scale}) translate(${saturnPosition.x}px, ${saturnPosition.y}px)`,
            opacity: saturnPosition.opacity,
            transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
          }}
        >
          <SafeImage src={saturnImage} alt="" className="w-full h-full object-contain" aria-hidden="true" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl">
            <FadeIn delay={0}>
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-cyan-400/70 mb-6 font-medium">
                Toronto Web Design Agency
              </p>
            </FadeIn>

            <TextReveal
              as="h1"
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extralight leading-[0.95] tracking-[-0.04em]"
              staggerMs={130}
              lines={[
                <span key="l1" className="block font-light text-white/90">
                  Built by engineers.
                </span>,
                <span key="l2" className="block bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient font-normal mt-2">
                  Obsessed with craft.
                </span>,
              ]}
            />

            <FadeIn delay={340}>
              <p className="mt-8 sm:mt-10 text-base sm:text-lg md:text-xl text-white/55 max-w-2xl leading-[1.7] font-light tracking-[0.01em]">
                We&apos;re a two-engineer web design agency from Toronto. We use modern tooling
                and AI-assisted workflows to build better websites, faster — and we charge fairly for it.
              </p>
            </FadeIn>

            <FadeIn delay={460}>
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <div className="relative inline-block rounded-full p-[2px] bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300">
                  <Button asChild className="relative overflow-hidden bg-black rounded-full text-white shadow-lg transition-all duration-300 px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg font-semibold group">
                    <Link href="/contact" className="flex items-center justify-center">
                      <span className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out z-0 rounded-full" />
                      <span className="flex items-center relative z-10 group-hover:text-white">
                        Start Your Project <Rocket className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                      </span>
                    </Link>
                  </Button>
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center text-base sm:text-lg font-medium text-white/50 hover:text-white transition-colors duration-300 group"
                >
                  Our Services <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── OUR STORY ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-black py-20 sm:py-24 md:py-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-[600px] h-[400px] bg-cyan-500/[0.07] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-purple-500/[0.08] rounded-full blur-[100px]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left — narrative */}
            <div>
              <FadeIn>
                <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-cyan-400/70 mb-6 font-medium">
                  Our Story
                </p>
              </FadeIn>
              <TextReveal
                className="text-3xl sm:text-4xl md:text-5xl font-extralight leading-[1.1] tracking-[-0.04em]"
                staggerMs={120}
                baseDelayMs={60}
                lines={[
                  <span key="l1" className="block text-white/90">
                    Why we built
                  </span>,
                  <span key="l2" className="block bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient mt-1">
                    Zenara Designs
                  </span>,
                ]}
              />

              <div className="mt-8 space-y-5 text-white/55 text-base sm:text-lg leading-[1.8] font-light">
                <FadeIn delay={200}>
                  <p>
                    Small businesses in Toronto were routinely paying $10,000–$50,000 to traditional agencies — then waiting
                    three to six months for a website that looked like every other agency template on the internet.
                  </p>
                </FadeIn>
                <FadeIn delay={300}>
                  <p>
                    We were engineers at tech companies watching this happen. We knew modern tooling — Next.js, serverless
                    infrastructure, AI-assisted design workflows — could deliver a dramatically better result in a fraction
                    of the time. So we built a firm around that.
                  </p>
                </FadeIn>
                <FadeIn delay={400}>
                  <p>
                    Zenara is two engineers and a designer who genuinely care about the outcome. No account managers,
                    no offshore hand-offs, no mystery invoices. You talk directly to the people building your site —
                    from the first call to launch day and beyond.
                  </p>
                </FadeIn>
              </div>
            </div>

            {/* Right — editorial stat panel */}
            <FadeIn delay={150}>
              <div className="lg:mt-12 relative rounded-2xl border border-white/8 overflow-hidden">
                {/* Subtle background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/40 via-slate-900/60 to-purple-950/30 pointer-events-none" />
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-cyan-400/8 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-purple-400/8 rounded-full blur-3xl pointer-events-none" />

                {/* 2×2 stat grid */}
                <div className="relative grid grid-cols-2 divide-x divide-y divide-white/6">
                  {[
                    { value: '2024', label: 'Year founded', sub: 'Toronto, Ontario' },
                    { value: '1–2', label: 'Weeks to launch', sub: 'From first call to live' },
                    { value: '3', label: 'Person team', sub: 'Engineers + designer' },
                    { value: '90+', label: 'Lighthouse score', sub: 'On every site we ship' },
                  ].map((stat, i) => (
                    <div key={i} className="group px-4 py-6 sm:px-8 sm:py-8 flex flex-col gap-2 hover:bg-white/[0.02] transition-colors duration-300">
                      <div className="text-4xl sm:text-5xl md:text-6xl font-extralight bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient tracking-[-0.04em] leading-none">
                        {stat.value}
                      </div>
                      <div className="text-white/70 text-sm sm:text-base font-medium tracking-tight leading-tight mt-1">
                        {stat.label}
                      </div>
                      <div className="text-white/30 text-xs sm:text-sm font-light">
                        {stat.sub}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ─── THE TEAM ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-24 md:py-32 bg-gradient-to-br from-slate-900 via-cyan-900/60 to-slate-900">
        <div className="absolute inset-0 pointer-events-none">
          <div className="bg-star" style={{ top: '8%', left: '5%' }} />
          <div className="bg-star" style={{ top: '14%', left: '28%' }} />
          <div className="bg-star" style={{ top: '6%', left: '62%' }} />
          <div className="bg-star" style={{ top: '18%', left: '82%' }} />
          <div className="bg-star" style={{ top: '35%', left: '92%' }} />
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-cyan-500/8 to-purple-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/8 to-cyan-500/8 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-14 sm:mb-18 md:mb-20">
            <TextReveal
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6 leading-[0.95] tracking-[-0.04em]"
              staggerMs={130}
              lines={[
                <span key="l1" className="block font-light opacity-90 pb-2">The people building</span>,
                <span key="l2" className="block mt-2 bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient font-normal">your site</span>,
              ]}
            />
            <FadeIn delay={280}>
              <p className="text-base sm:text-lg md:text-xl text-white/55 max-w-2xl mx-auto leading-[1.7] font-light tracking-[0.01em] px-4">
                No account managers in the way. When you email us, an engineer responds.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <FadeIn key={index} delay={index * 120}>
                <div className="group relative bg-slate-900/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-slate-800/60 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden h-full">
                  {/* hover wash */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/6 via-purple-500/4 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* corner glow */}
                  <div className="absolute -top-12 -right-12 w-36 h-36 bg-cyan-400/10 rounded-full blur-3xl group-hover:bg-cyan-400/22 transition-all duration-700" />

                  <div className="relative z-10 p-7 sm:p-8 flex flex-col h-full">
                    {/* Monogram badge */}
                    <div className="mb-6 flex items-center gap-4">
                      <div className="relative flex-shrink-0">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/25 flex items-center justify-center group-hover:scale-105 transition-transform duration-400">
                          <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                            {member.initials}
                          </span>
                        </div>
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-400/20 blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-500" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight">{member.name}</h3>
                        <p className="text-sm bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient font-medium mt-0.5">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* Credential */}
                    <div className="mb-5 pb-5 border-b border-white/6">
                      <span className="inline-flex items-center gap-2 text-xs text-white/35 font-light">
                        <span className="w-1 h-1 rounded-full bg-cyan-400/50 flex-shrink-0" />
                        {member.degree} · {member.school}
                      </span>
                    </div>

                    {/* Bio */}
                    <p className="text-white/55 text-sm sm:text-base leading-[1.75] font-light flex-grow">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR STACK ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-black py-20 sm:py-24 md:py-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-purple-500/[0.08] rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[280px] bg-cyan-500/[0.07] rounded-full blur-[80px]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 sm:mb-16">
            <div>
              <FadeIn>
                <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-cyan-400/70 mb-5 font-medium">
                  Technology
                </p>
              </FadeIn>
              <TextReveal
                className="text-3xl sm:text-4xl md:text-5xl font-extralight leading-[1.05] tracking-[-0.04em]"
                staggerMs={120}
                baseDelayMs={60}
                lines={[
                  <span key="l1" className="block text-white/90">
                    The stack behind
                  </span>,
                  <span key="l2" className="block bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient mt-1">
                    every site we build
                  </span>,
                ]}
              />
            </div>
            <FadeIn delay={300}>
              <p className="text-white/40 text-sm sm:text-base leading-relaxed font-light max-w-sm lg:text-right">
                No page builders. No drag-and-drop templates. Every site is hand-coded against a production-grade stack.
              </p>
            </FadeIn>
          </div>

          {/* Stack table */}
          <div className="border border-white/8 rounded-2xl overflow-hidden">
            {stackItems.map((item, i) => (
              <FadeIn key={i} delay={i * 60}>
                <div className={`group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-0 px-6 sm:px-8 py-5 sm:py-6 border-b border-white/6 last:border-b-0 hover:bg-white/[0.02] transition-colors duration-300 ${i === 0 ? '' : ''}`}>
                  {/* Tech name */}
                  <div className="sm:w-48 flex-shrink-0">
                    <span className="text-white font-semibold text-base sm:text-lg tracking-tight group-hover:text-cyan-300 transition-colors duration-300">
                      {item.name}
                    </span>
                  </div>
                  {/* Category tag */}
                  <div className="sm:w-44 flex-shrink-0">
                    <span className="text-xs uppercase tracking-[0.15em] text-cyan-400/60 font-medium border border-cyan-500/15 rounded-full px-3 py-1">
                      {item.category}
                    </span>
                  </div>
                  {/* Description */}
                  <div className="flex-1">
                    <span className="text-white/40 text-sm sm:text-base font-light leading-relaxed">
                      {item.desc}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-24 md:py-32 bg-black">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-cyan-900/50 to-black" />
          <div className="absolute inset-0 bg-gradient-to-tl from-black via-purple-900/40 to-black" />
          <div className="bg-star" style={{ top: '5%', left: '3%' }} />
          <div className="bg-star" style={{ top: '10%', left: '20%' }} />
          <div className="bg-star" style={{ top: '7%', left: '48%' }} />
          <div className="bg-star" style={{ top: '12%', left: '72%' }} />
          <div className="bg-star" style={{ top: '4%', left: '90%' }} />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-14 sm:mb-18 md:mb-20">
            <TextReveal
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight text-white mb-6 sm:mb-8 leading-[0.95] tracking-[-0.04em]"
              staggerMs={130}
              lines={[
                <span key="l1" className="block font-light opacity-90">How we bring</span>,
                <span key="l2" className="block mt-2 bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient font-normal">ideas to life</span>,
              ]}
            />
            <FadeIn delay={280}>
              <p className="text-base sm:text-lg md:text-xl text-white/55 max-w-3xl mx-auto leading-[1.7] font-light tracking-[0.01em] px-4">
                A proven methodology that transforms your vision into a digital reality — no surprises, no scope creep.
              </p>
            </FadeIn>
          </div>

          {/* Steps 1–3: alternating image + content panels */}
          <div className="relative space-y-6 sm:space-y-8">
            {([
              { img: discoveryImage, alt: 'Discovery workspace' },
              { img: prototypingImage, alt: 'Prototyping workspace' },
              { img: buildImage, alt: 'Build workspace' },
            ] as const).map(({ img, alt }, index) => {
              const isEven = index % 2 === 1;
              const isVisible = visibleTimelineItems.includes(index);
              const accentFrom = isEven ? 'from-purple-300' : 'from-cyan-300';
              const accentTo = 'to-cyan-300';
              const enterClass = isVisible
                ? 'opacity-100 translate-x-0'
                : isEven ? 'opacity-0 translate-x-16' : 'opacity-0 -translate-x-16';

              return (
                <div
                  key={index}
                  ref={(el) => { timelineRefs.current[index] = el; }}
                  data-timeline-index={index}
                  className={`transition-all duration-700 ease-out ${enterClass}`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} rounded-2xl overflow-hidden border border-slate-800/60 group`}>
                    {/* Image half */}
                    <div className="relative w-full lg:w-1/2 h-[280px] sm:h-[340px] lg:h-[420px] overflow-hidden flex-shrink-0">
                      <SafeImage
                        src={img}
                        alt={alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40 pointer-events-none" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${isEven ? 'from-purple-600/15 to-cyan-600/15' : 'from-cyan-600/15 to-purple-600/15'} pointer-events-none`} />
                      <div className={`absolute bottom-5 ${isEven ? 'left-5' : 'right-5'} z-10`}>
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16">
                          <div
                            className="absolute inset-0 rounded-xl p-[1.5px]"
                            style={{ background: `linear-gradient(135deg, ${isEven ? 'rgb(196,181,253), rgb(103,232,249)' : 'rgb(103,232,249), rgb(196,181,253)'})` }}
                          >
                            <div className="w-full h-full bg-black/80 rounded-[10px] flex items-center justify-center backdrop-blur-sm">
                              <span className="text-white font-bold text-xl sm:text-2xl">{index + 1}</span>
                            </div>
                          </div>
                          <div className={`absolute -inset-2 rounded-xl blur-lg opacity-50 bg-gradient-to-br ${isEven ? 'from-purple-400/50 to-cyan-400/50' : 'from-cyan-400/50 to-purple-400/50'}`} />
                        </div>
                      </div>
                    </div>

                    {/* Content half */}
                    <div className="relative w-full lg:w-1/2 bg-slate-900/95 backdrop-blur-xl p-8 sm:p-10 md:p-12 flex flex-col justify-center overflow-hidden">
                      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${accentFrom} via-purple-300 ${accentTo}`} />
                      <div className="absolute right-4 bottom-2 text-[7rem] sm:text-[9rem] font-black text-white/[0.04] leading-none select-none pointer-events-none">
                        0{index + 1}
                      </div>
                      <div className="relative z-10">
                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-5 tracking-tight leading-tight">
                          <span className={`bg-gradient-to-r ${accentFrom} via-purple-300 ${accentTo} bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient`}>
                            {process[index].phase}
                          </span>
                        </h3>
                        <ul className="space-y-3 sm:space-y-4">
                          {process[index].details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-white/70 group/item">
                              <div className={`mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0 transition-transform duration-200 group-hover/item:scale-150 bg-gradient-to-r ${accentFrom} ${accentTo}`} />
                              <span className="text-base sm:text-lg leading-relaxed font-light">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Divider */}
            <div className="py-4">
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            </div>

            {/* Steps 4–6: 3-column grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              {process.slice(3).map((phase, index) => {
                const globalIndex = index + 3;
                const isVisible = visibleTimelineItems.includes(globalIndex);
                const gradients = [
                  'from-cyan-300 via-purple-300 to-cyan-300',
                  'from-purple-300 via-cyan-300 to-purple-300',
                  'from-cyan-300 via-purple-300 to-cyan-300',
                ];
                const gradient = gradients[index];

                return (
                  <div
                    key={globalIndex}
                    ref={(el) => { timelineRefs.current[globalIndex] = el; }}
                    data-timeline-index={globalIndex}
                    className={`transition-all duration-500 ease-out ${
                      isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.96]'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-full bg-slate-900/90 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-7 sm:p-8 overflow-hidden group hover:border-cyan-500/30 transition-[border-color] duration-300">
                      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${gradient}`} />
                      <div className="absolute right-3 bottom-2 text-[6rem] font-black text-white/[0.04] leading-none select-none pointer-events-none">
                        0{globalIndex + 1}
                      </div>
                      <div className="relative inline-flex mb-5">
                        <div
                          className="w-11 h-11 rounded-xl p-[1.5px]"
                          style={{ background: 'linear-gradient(135deg, rgb(103,232,249), rgb(196,181,253))' }}
                        >
                          <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                            <span className="text-white font-bold text-base">{globalIndex + 1}</span>
                          </div>
                        </div>
                        <div className={`absolute -inset-1 rounded-xl blur-md opacity-40 bg-gradient-to-br ${gradient}`} />
                      </div>
                      <div className="relative z-10">
                        <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 tracking-tight">
                          <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient`}>
                            {phase.phase}
                          </span>
                        </h3>
                        <ul className="space-y-2.5">
                          {phase.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-white/60 group/item">
                              <div className={`mt-[7px] w-1 h-1 rounded-full flex-shrink-0 transition-transform duration-200 group-hover/item:scale-150 bg-gradient-to-r ${gradient}`} />
                              <span className="text-sm sm:text-base leading-relaxed font-light">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA CLOSER — matches home page CTABand ──────────────────── */}
      <section className="py-20 sm:py-28 md:py-32 relative overflow-hidden bg-black">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900/80 to-purple-900/40" />
          <div className="absolute top-20 left-20 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-twinkle" />
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-twinkle delay-1000" />
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-twinkle delay-2000" />
          <div className="absolute top-32 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-twinkle delay-500" />
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-to-r from-cyan-500/8 to-purple-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/8 to-cyan-500/8 rounded-full blur-3xl delay-1000" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="relative rounded-[2rem] overflow-hidden border border-white/20">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/25 via-cyan-400/20 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-purple-500/25 via-purple-400/20 to-transparent rounded-full blur-3xl delay-1000" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-cyan-500/15 to-purple-500/15 rounded-full blur-3xl delay-500" />
            </div>

            <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 text-center">
              <TextReveal
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-6 leading-[1.1] tracking-[-0.04em]"
                staggerMs={130}
                lines={[
                  <span key="l1" className="block font-light opacity-90">Ready to build something</span>,
                  <span key="l2" className="block mt-2 bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient font-normal pb-1">amazing?</span>,
                ]}
              />
              <FadeIn delay={280}>
                <p className="text-base sm:text-lg md:text-xl text-white/70 mb-10 sm:mb-12 max-w-3xl mx-auto leading-[1.7] font-light tracking-[0.01em]">
                  Free consultation. No hard sell. Just an honest conversation about what you need and whether we&apos;re the right fit.
                </p>
              </FadeIn>
              <FadeIn delay={380}>
                <div>
                  <Link href="/contact" className="relative inline-block group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300 rounded-full blur opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                    <div className="relative bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300 hover:from-cyan-400 hover:via-purple-400 hover:to-cyan-400 text-white rounded-full px-10 sm:px-12 md:px-14 py-4 sm:py-5 text-lg sm:text-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 animate-jiggle">
                      Book a Free Consultation
                    </div>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* AboutPage, Person (team), Organization, and Breadcrumb schema is
          server-rendered in src/app/about/page.tsx */}
    </div>
  );
};

export default memo(About);
