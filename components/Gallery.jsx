"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const projects = [
  { id: 1, title: "Ken Munene Campaign", category: "Posters", year: "2026", image: "/images/gallery/file_000000008d5081f4af3ab11bbcd39a87.png" },
  { id: 2, title: "Corporate Brand Identity", category: "Branding", year: "2026", image: "/images/gallery/Screenshot_20260802-195209.jpg" },
  { id: 3, title: "Social Media Campaign", category: "Social Media", year: "2026", image: "/images/gallery/file_00000000db5471f4bd6b1833bdb111e8.png" },
  { id: 4, title: "Business Card Design", category: "Print", year: "2026", image: "/images/gallery/IMG-20260608-WA0100(1).jpg" },
  { id: 5, title: "Event Poster", category: "Posters", year: "2026", image: "/images/gallery/Screenshot_20260731-095727.jpg" },
  { id: 6, title: "Modern Logo Design", category: "Branding", year: "2026", image: "/images/gallery/IMG-20260609-WA0004.jpg" },
  { id: 7, title: "Restaurant Branding", category: "Branding", year: "2026", image: "/images/gallery/file_000000002f5881f491008bb640a66df1.png" },
  { id: 8, title: "Digital Advertisement", category: "Digital", year: "2026", image: "/images/gallery/file_000000009ed081f6a182a2d762654fab.png" },
];

const categories = ["All", "Branding", "Posters", "Social Media", "Print", "Digital"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const selectedProject =
    selectedIndex !== null ? filteredProjects[selectedIndex] : null;

  const closeLightbox = () => setSelectedIndex(null);
  const showNext = () =>
    setSelectedIndex((c) => (c === filteredProjects.length - 1 ? 0 : c + 1));
  const showPrevious = () =>
    setSelectedIndex((c) => (c === 0 ? filteredProjects.length - 1 : c - 1));

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedIndex === null) return;
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrevious();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, filteredProjects.length]);

  useEffect(() => {
    document.body.style.overflow = selectedIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <>
      <section className="gallery-section">
        {/* HERO */}
        <div className="gallery-hero">
          <div className="hero-label">
            <span></span>
            Lapsa Web &amp; Graphics
          </div>

          <h1>
            Creative work <span>made to stand out.</span>
          </h1>

          <p>
            A collection of graphic design projects crafted with strategy,
            creativity and attention to detail.
          </p>
        </div>

        {/* FILTERS */}
        <div className="gallery-controls">
          <div className="filter-list">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedIndex(null);
                }}
                className={activeCategory === category ? "filter active" : "filter"}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="project-count">
            {filteredProjects.length.toString().padStart(2, "0")} Projects
          </div>
        </div>

        {/* GALLERY */}
        <div className="gallery-grid">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="gallery-item"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="image-wrapper">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="gallery-image"
                />
              </div>

              <div className="project-info">
                <div>
                  <span>{project.category}</span>
                  <h2>{project.title}</h2>
                </div>
                <p>{project.year}</p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="gallery-cta">
          <div>
            <span className="cta-label">HAVE A PROJECT IN MIND?</span>
            <h2>
              Let&apos;s create something <span>remarkable.</span>
            </h2>
          </div>

          <a href="/contact" className="cta-button">
            Start a project
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedProject && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
            ×
          </button>

          <button
            className="lightbox-arrow left"
            onClick={(e) => { e.stopPropagation(); showPrevious(); }}
            aria-label="Previous project"
          >
            ←
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={1600}
                height={1200}
                sizes="90vw"
                className="lightbox-img"
              />
            </div>

            <div className="lightbox-details">
              <div>
                <span>{selectedProject.category}</span>
                <h2>{selectedProject.title}</h2>
              </div>
              <p>{selectedProject.year}</p>
            </div>
          </div>

          <button
            className="lightbox-arrow right"
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            aria-label="Next project"
          >
            →
          </button>
        </div>
      )}

      <style jsx>{`
        /* ================================
           SECTION
        ================================= */
        .gallery-section {
          position: relative;
          padding: 60px 5vw;
          background: #ffffff;
          color: #0a0a0a;
        }

        /* ================================
           HERO — compact
        ================================= */
        .gallery-hero {
          max-width: 1000px;
          margin: 0 auto 40px;
        }

        .hero-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ff7a00;
        }

        .hero-label span {
          width: 28px;
          height: 2px;
          background: #ff7a00;
        }

        .gallery-hero h1 {
          margin: 0;
          font-size: clamp(30px, 3.6vw, 52px);
          line-height: 1.05;
          letter-spacing: -1.5px;
          font-weight: 800;
          color: #0a0a0a;
          max-width: 720px;
        }

        .gallery-hero h1 span {
          color: #4f8cff;
        }

        .gallery-hero p {
          max-width: 520px;
          margin-top: 16px;
          color: #555555;
          font-size: 14px;
          line-height: 1.6;
        }

        /* ================================
           CONTROLS
        ================================= */
        .gallery-controls {
          max-width: 1000px;
          margin: 0 auto 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .filter-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .filter {
          border: 1px solid #e2e2e2;
          background: #ffffff;
          color: #555555;
          padding: 7px 14px;
          border-radius: 100px;
          cursor: pointer;
          transition: 0.2s ease;
          font-size: 12px;
        }

        .filter:hover {
          border-color: #0a0a0a;
          color: #0a0a0a;
        }

        .filter.active {
          background: #0a0a0a;
          border-color: #0a0a0a;
          color: #ffffff;
        }

        .project-count {
          white-space: nowrap;
          font-size: 11px;
          color: #888888;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* ================================
           GRID — 3 columns, tight gaps
        ================================= */
        .gallery-grid {
          max-width: 1000px;
          margin: auto;
          column-count: 3;
          column-gap: 12px;
        }

        .gallery-item {
          break-inside: avoid;
          margin-bottom: 12px;
          cursor: pointer;
          border-radius: 8px;
          overflow: hidden;
          background: #fafafa;
          border: 1px solid #eeeeee;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .gallery-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.08);
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          background: #f2f2f2;
          overflow: hidden;
        }

        .gallery-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: contain;
          transition: transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .gallery-item:hover .gallery-image {
          transform: scale(1.04);
        }

        /* ================================
           PROJECT INFO — compact
        ================================= */
        .project-info {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 10px;
          padding: 10px 12px;
          background: #ffffff;
        }

        .project-info span {
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: #ff7a00;
        }

        .project-info h2 {
          margin: 3px 0 0;
          font-size: 13px;
          font-weight: 600;
          color: #0a0a0a;
          line-height: 1.2;
        }

        .project-info p {
          margin: 0;
          color: #999999;
          font-size: 10px;
          white-space: nowrap;
        }

        /* ================================
           CTA — compact
        ================================= */
        .gallery-cta {
          max-width: 1000px;
          margin: 60px auto 0;
          padding: 32px 0;
          border-top: 1px solid #eaeaea;
          border-bottom: 1px solid #eaeaea;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
        }

        .cta-label {
          font-size: 10px;
          letter-spacing: 2px;
          color: #888888;
        }

        .gallery-cta h2 {
          margin: 10px 0 0;
          font-size: clamp(22px, 2.6vw, 34px);
          line-height: 1.1;
          letter-spacing: -1px;
          color: #0a0a0a;
        }

        .gallery-cta h2 span {
          color: #ff7a00;
        }

        .cta-button {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 20px;
          background: #0a0a0a;
          color: #ffffff;
          text-decoration: none;
          border-radius: 100px;
          font-weight: 600;
          font-size: 13px;
          transition: 0.25s ease;
          white-space: nowrap;
        }

        .cta-button:hover {
          background: #ff7a00;
          transform: translateY(-2px);
        }

        .cta-button span {
          font-size: 15px;
        }

        /* ================================
           LIGHTBOX
        ================================= */
        .lightbox {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(255, 255, 255, 0.98);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
        }

        .lightbox-content {
          width: min(900px, 90vw);
        }

        .lightbox-image {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .lightbox-img {
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 72vh;
          object-fit: contain;
        }

        .lightbox-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 14px;
          color: #0a0a0a;
        }

        .lightbox-details span {
          color: #ff7a00;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .lightbox-details h2 {
          margin: 4px 0;
          font-size: 18px;
        }

        .lightbox-details p {
          color: #888888;
          font-size: 12px;
        }

        .lightbox-close,
        .lightbox-arrow {
          position: fixed;
          border: 0;
          background: transparent;
          color: #0a0a0a;
          cursor: pointer;
          z-index: 10;
        }

        .lightbox-close {
          top: 18px;
          right: 24px;
          font-size: 32px;
          font-weight: 200;
        }

        .lightbox-arrow {
          top: 50%;
          transform: translateY(-50%);
          font-size: 26px;
          width: 44px;
          height: 44px;
          border: 1px solid #e2e2e2;
          border-radius: 50%;
          transition: 0.2s ease;
        }

        .lightbox-arrow:hover {
          background: #0a0a0a;
          border-color: #0a0a0a;
          color: #ffffff;
        }

        .lightbox-arrow.left { left: 20px; }
        .lightbox-arrow.right { right: 20px; }

        /* ================================
           RESPONSIVE
        ================================= */
        @media (max-width: 900px) {
          .gallery-grid {
            column-count: 2;
          }
        }

        @media (max-width: 768px) {
          .gallery-section {
            padding: 40px 16px;
          }

          .gallery-hero {
            margin-bottom: 28px;
          }

          .gallery-hero h1 {
            font-size: 28px;
            letter-spacing: -1px;
          }

          .gallery-hero p {
            font-size: 13px;
            margin-top: 12px;
          }

          .gallery-controls {
            align-items: flex-start;
            flex-direction: column;
            gap: 12px;
          }

          .gallery-grid {
            column-count: 2;
            column-gap: 10px;
          }

          .gallery-item {
            margin-bottom: 10px;
          }

          .gallery-cta {
            flex-direction: column;
            align-items: flex-start;
            gap: 18px;
            margin-top: 40px;
            padding: 24px 0;
          }

          .lightbox { padding: 12px; }

          .lightbox-arrow {
            width: 36px;
            height: 36px;
            font-size: 18px;
          }

          .lightbox-arrow.left { left: 8px; }
          .lightbox-arrow.right { right: 8px; }
          .lightbox-close { right: 14px; top: 12px; font-size: 26px; }
        }

        @media (max-width: 480px) {
          .gallery-grid {
            column-count: 1;
          }
        }
      `}</style>
    </>
  );
}