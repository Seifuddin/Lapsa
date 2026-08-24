"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Ken Munene Campaign",
    category: "Posters",
    year: "2026",
    image: "/images/gallery/file_000000008d5081f4af3ab11bbcd39a87.png",
    size: "large",
  },
  {
    id: 2,
    title: "Corporate Brand Identity",
    category: "Branding",
    year: "2026",
    image: "/images/gallery/Screenshot_20260802-195209.jpg",
    size: "normal",
  },
  {
    id: 3,
    title: "Social Media Campaign",
    category: "Social Media",
    year: "2026",
    image: "/images/gallery/file_00000000db5471f4bd6b1833bdb111e8.png",
    size: "tall",
  },
  {
    id: 4,
    title: "Business Card Design",
    category: "Print",
    year: "2026",
    image: "/images/gallery/IMG-20260608-WA0100(1).jpg",
    size: "normal",
  },
  {
    id: 5,
    title: "Event Poster",
    category: "Posters",
    year: "2026",
    image: "/images/gallery/Screenshot_20260731-095727.jpg",
    size: "large",
  },
  {
    id: 6,
    title: "Modern Logo Design",
    category: "Branding",
    year: "2026",
    image: "/images/gallery/IMG-20260609-WA0004.jpg",
    size: "normal",
  },
  {
    id: 7,
    title: "Restaurant Branding",
    category: "Branding",
    year: "2026",
    image: "/images/gallery/file_000000002f5881f491008bb640a66df1.png",
    size: "tall",
  },
  {
    id: 8,
    title: "Digital Advertisement",
    category: "Digital",
    year: "2026",
    image: "/images/gallery/file_000000009ed081f6a182a2d762654fab.png",
    size: "large",
  },
];

const categories = [
  "All",
  "Branding",
  "Posters",
  "Social Media",
  "Print",
  "Digital",
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  const selectedProject =
    selectedIndex !== null ? filteredProjects[selectedIndex] : null;

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === filteredProjects.length - 1 ? 0 : current + 1
    );
  };

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === 0 ? filteredProjects.length - 1 : current - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedIndex === null) return;

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, filteredProjects.length]);

  useEffect(() => {
    document.body.style.overflow =
      selectedIndex !== null ? "hidden" : "";

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
            Lapsa Web & Graphics
          </div>

          <h1>
            Creative work
            <br />
            <span>made to stand out.</span>
          </h1>

          <p>
            A collection of graphic design projects crafted with
            strategy, creativity and attention to detail.
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
                className={
                  activeCategory === category
                    ? "filter active"
                    : "filter"
                }
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
              className={`gallery-item ${project.size}`}
              onClick={() => setSelectedIndex(index)}
            >

              <div className="image-wrapper">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="gallery-image"
                />

                <div className="image-overlay">

                  <div className="project-info">

                    <span>{project.category}</span>

                    <h2>{project.title}</h2>

                    <p>{project.year}</p>

                  </div>

                  <div className="view-project">
                    <span>View</span>
                    <div>↗</div>
                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>

        {/* CTA */}
        <div className="gallery-cta">

          <div>
            <span className="cta-label">
              HAVE A PROJECT IN MIND?
            </span>

            <h2>
              Let's create something
              <br />
              <span>remarkable.</span>
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

        <div
          className="lightbox"
          onClick={closeLightbox}
        >

          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ×
          </button>

          <button
            className="lightbox-arrow left"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous project"
          >
            ←
          </button>

          <div
            className="lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="lightbox-image">

              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
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
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
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
          padding: 120px 6vw;
          background: #07090d;
          color: white;
          overflow: hidden;
        }

        /* ================================
           HERO
        ================================= */

        .gallery-hero {
          max-width: 1100px;
          margin: 0 auto 90px;
        }

        .hero-label {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 25px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #ff7a00;
        }

        .hero-label span {
          width: 35px;
          height: 2px;
          background: #ff7a00;
        }

        .gallery-hero h1 {
          margin: 0;
          font-size: clamp(55px, 8vw, 120px);
          line-height: 0.92;
          letter-spacing: -5px;
          font-weight: 800;
        }

        .gallery-hero h1 span {
          color: #4f8cff;
        }

        .gallery-hero p {
          max-width: 550px;
          margin-top: 35px;
          color: #8d94a3;
          font-size: 18px;
          line-height: 1.7;
        }

        /* ================================
           CONTROLS
        ================================= */

        .gallery-controls {
          max-width: 1100px;
          margin: 0 auto 35px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
        }

        .filter-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .filter {
          border: 1px solid #252a34;
          background: transparent;
          color: #8d94a3;
          padding: 11px 18px;
          border-radius: 100px;
          cursor: pointer;
          transition: 0.3s ease;
          font-size: 13px;
        }

        .filter:hover,
        .filter.active {
          background: #ff7a00;
          border-color: #ff7a00;
          color: white;
        }

        .project-count {
          white-space: nowrap;
          font-size: 12px;
          color: #666d7c;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* ================================
           GRID
        ================================= */

        .gallery-grid {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-auto-rows: 350px;
          gap: 18px;
        }

        .gallery-item {
          position: relative;
          cursor: pointer;
          overflow: hidden;
          border-radius: 8px;
        }

        .gallery-item.large {
          grid-row: span 2;
        }

        .gallery-item.tall {
          grid-row: span 2;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          background: #11151d;
        }

        .gallery-image {
          object-fit: cover;
          transition:
            transform 0.8s cubic-bezier(.2,.7,.2,1),
            filter 0.5s ease;
        }

        .gallery-item:hover .gallery-image {
          transform: scale(1.06);
          filter: brightness(0.7);
        }

        /* ================================
           OVERLAY
        ================================= */

        .image-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 28px;
          opacity: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,.85),
            transparent 60%
          );
          transition: 0.4s ease;
        }

        .gallery-item:hover .image-overlay {
          opacity: 1;
        }

        .project-info span {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #ff7a00;
        }

        .project-info h2 {
          margin: 8px 0 4px;
          font-size: 25px;
          font-weight: 600;
        }

        .project-info p {
          margin: 0;
          color: #aaa;
          font-size: 12px;
        }

        .view-project {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 13px;
          color: white;
        }

        .view-project div {
          width: 42px;
          height: 42px;
          border: 1px solid rgba(255,255,255,.4);
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 18px;
        }

        /* ================================
           CTA
        ================================= */

        .gallery-cta {
          max-width: 1100px;
          margin: 130px auto 0;
          padding: 70px 0;
          border-top: 1px solid #20242d;
          border-bottom: 1px solid #20242d;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 40px;
        }

        .cta-label {
          font-size: 11px;
          letter-spacing: 2px;
          color: #777f8e;
        }

        .gallery-cta h2 {
          margin: 18px 0 0;
          font-size: clamp(40px, 5vw, 70px);
          line-height: 1;
          letter-spacing: -3px;
        }

        .gallery-cta h2 span {
          color: #ff7a00;
        }

        .cta-button {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 18px 25px;
          background: #4f8cff;
          color: white;
          text-decoration: none;
          border-radius: 100px;
          font-weight: 600;
          transition: 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-4px);
          background: #ff7a00;
        }

        .cta-button span {
          font-size: 20px;
        }

        /* ================================
           LIGHTBOX
        ================================= */

        .lightbox {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(3,5,8,.96);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
        }

        .lightbox-content {
          width: min(1000px, 90vw);
        }

        .lightbox-image {
          position: relative;
          height: min(70vh, 750px);
          width: 100%;
        }

        .lightbox-img {
          object-fit: contain;
        }

        .lightbox-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
        }

        .lightbox-details span {
          color: #ff7a00;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .lightbox-details h2 {
          margin: 5px 0;
          font-size: 25px;
        }

        .lightbox-details p {
          color: #777;
        }

        .lightbox-close,
        .lightbox-arrow {
          position: fixed;
          border: 0;
          background: transparent;
          color: white;
          cursor: pointer;
          z-index: 10;
        }

        .lightbox-close {
          top: 25px;
          right: 35px;
          font-size: 40px;
          font-weight: 200;
        }

        .lightbox-arrow {
          top: 50%;
          transform: translateY(-50%);
          font-size: 35px;
          width: 55px;
          height: 55px;
          border: 1px solid #30343d;
          border-radius: 50%;
          transition: 0.3s ease;
        }

        .lightbox-arrow:hover {
          background: #ff7a00;
          border-color: #ff7a00;
        }

        .lightbox-arrow.left {
          left: 30px;
        }

        .lightbox-arrow.right {
          right: 30px;
        }

        /* ================================
           MOBILE
        ================================= */

        @media (max-width: 768px) {

          .gallery-section {
            padding: 80px 20px;
          }

          .gallery-hero {
            margin-bottom: 60px;
          }

          .gallery-hero h1 {
            font-size: 55px;
            letter-spacing: -3px;
          }

          .gallery-hero p {
            font-size: 16px;
          }

          .gallery-controls {
            align-items: flex-start;
            flex-direction: column;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 330px;
          }

          .gallery-item.large,
          .gallery-item.tall {
            grid-row: span 1;
          }

          .image-overlay {
            opacity: 1;
          }

          .gallery-cta {
            flex-direction: column;
            align-items: flex-start;
            margin-top: 90px;
          }

          .lightbox {
            padding: 15px;
          }

          .lightbox-arrow {
            width: 42px;
            height: 42px;
            font-size: 22px;
          }

          .lightbox-arrow.left {
            left: 10px;
          }

          .lightbox-arrow.right {
            right: 10px;
          }

          .lightbox-close {
            right: 18px;
          }

        }

      `}</style>
    </>
  );
}