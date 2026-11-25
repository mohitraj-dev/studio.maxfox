"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesBento } from "@/components/ServicesBento";
import { TeamCarousel } from "@/components/TeamCarousel";
import { FilmPipeline } from "@/components/FilmPipeline";
import { KineticBanner } from "@/components/KineticBanner";
import { FounderFaqSection } from "@/components/FounderFaqSection";
import { Footer } from "@/components/Footer";
import { ProjectModal, ShowreelModal } from "@/components/Modals";

export default function HomePage() {
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [showreelModalOpen, setShowreelModalOpen] = useState(false);

  return (
    <main className="min-h-screen relative">
      <Navbar onStartProject={() => setProjectModalOpen(true)} />

      <HeroSection onOpenShowreel={() => setShowreelModalOpen(true)} />

      <ServicesBento onStartProject={() => setProjectModalOpen(true)} />

      <TeamCarousel />

      <FilmPipeline />

      <KineticBanner />

      <FounderFaqSection />

      <Footer onStartProject={() => setProjectModalOpen(true)} />

      <ProjectModal
        open={projectModalOpen}
        onClose={() => setProjectModalOpen(false)}
      />

      <ShowreelModal
        open={showreelModalOpen}
        onClose={() => setShowreelModalOpen(false)}
        onStartProject={() => setProjectModalOpen(true)}
      />
    </main>
  );
}
