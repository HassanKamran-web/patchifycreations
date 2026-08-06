"use client";

import { motion } from "framer-motion";
import Reveal from "../reveal";
import SectionHeading from "../section-heading";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../icons";

const TEAM = [
  {
    initials: "MO",
    name: "Maya Okafor",
    role: "Founder & Creative Director",
    bio: "Built the studio from a single embroidery machine into a 38-country operation.",
  },
  {
    initials: "DR",
    name: "Daniel Reyes",
    role: "Head of Production",
    bio: "Runs the floor and holds every batch to spec — 10-point QC or it doesn’t ship.",
  },
  {
    initials: "EP",
    name: "Elena Petrova",
    role: "Digitizing Lead",
    bio: "Turns rough artwork into stitch-ready files, one thread direction at a time.",
  },
  {
    initials: "SW",
    name: "Sam Whitaker",
    role: "Client Success",
    bio: "Your first point of contact for proofs, specs, and delivery dates — reply within hours.",
  },
];

export default function Team() {
  return (
    <section id="team" className="scroll-mt-24 bg-canvas py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Meet the team"
            title="The people behind every patch"
            description="A tight team of digitizers, stitchers, and production leads who treat your order like their own product."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={(i % 4) * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex h-full flex-col rounded-card border border-line bg-surface-tint p-7 text-center shadow-card transition-shadow duration-300 hover:shadow-card-lg"
              >
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-accent text-xl font-extrabold text-white shadow-card transition-transform duration-300 group-hover:scale-105">
                  {member.initials}
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-ink">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-accent">{member.role}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {member.bio}
                </p>
                <div className="mt-5 flex items-center justify-center gap-3">
                  {[
                    { icon: InstagramIcon, label: `${member.name} on Instagram` },
                    { icon: TwitterIcon, label: `${member.name} on Twitter` },
                    { icon: FacebookIcon, label: `${member.name} on Facebook` },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href="#team"
                      aria-label={social.label}
                      className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white text-muted transition-colors hover:border-accent hover:bg-accent hover:text-white"
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
