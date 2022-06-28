import React from "react";
import mountainImage from "../../images/mountain.jpg";
import flowerImage from "../../images/flower.jpg";
import catImage from "../../images/cat.jpg";
import waterImage from "../../images/water.jpg";
import lakeImage from "../../images/lake.jpg";

const GallerySection = () => {
  const galleries = [
    {
      title: "🌸F L O W E R🌸",
      post:
        "https://www.instagram.com/p/CGNq-bEnsbY/?utm_source=ig_web_copy_link",
      image: flowerImage,
      date: "12.10.2020",
    },
    {
      title: "🐱C A T🐱",
      post:
        "https://www.instagram.com/p/CFtaPFkHQKr/?utm_source=ig_web_copy_link",
      image: catImage,
      date: "29.9.2020",
    },
    {
      title: "💧W A T E R💧",
      post:
        "https://www.instagram.com/p/CExMKoBn4L0/?utm_source=ig_web_copy_link",
      image: waterImage,
      date: "6.9.2020",
    },
    {
      title: "🌾L A K E🌾",
      post:
        "https://www.instagram.com/p/CFd9t2gnIBC/?utm_source=ig_web_copy_link",
      image: lakeImage,
      date: "23.9.2020",
    },
  ];
  return (
    <section className="GallerySection | py-5" id="gallery">
      <div className="container my-sm-5">
        {/* title */}
        <div className="mb-lg-4 mb-3 pb-4 text-center">
          <h2>My Gallery</h2>
          <hr className="titleLine" />
        </div>

        {/* content */}
        <div className="row mx-sm-0 mx-2">
          <a
            data-aos="fade-up"
            href="https://www.instagram.com/p/CFCCV3jjS2l/?utm_source=ig_web_copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className="GalleryCard | all-center align-items-end col-md-6 col-lg-8 mb-md-3 mb-5 p-0"
          >
            <div
              className="GalleryCard__Image | mx-md-2"
              style={{
                backgroundImage: `url(${mountainImage})`,
              }}
            ></div>

            <div className="GalleryCard__Shadow">
              <div className="GalleryCaption | mx-sm-4 mx-3 my-md-3 my-sm-4 my-3">
                <div className="GalleryCaption__Title">
                  ✨M O U N T A I N S✨
                </div>
                <div className="GalleryCaption__Subtitle | muted">
                  Posted on 12.11.2020
                </div>
              </div>
            </div>
          </a>

          {galleries.map((gallery, index) => (
            <a
              data-aos="fade-up"
              data-aos-delay={+index * 100}
              key={gallery.image}
              href={gallery.post}
              target="_blank"
              rel="nooopener noreferrer"
              className="GalleryCard | all-center align-items-end col-md-6 col-lg-4 mb-md-3 mb-5 p-0"
            >
              <div
                className="GalleryCard__Image | mx-md-2"
                style={{
                  backgroundImage: `url(${gallery.image})`,
                }}
              ></div>

              <div className="GalleryCard__Shadow">
                <div className="GalleryCaption | mx-sm-4 mx-3 my-md-3 my-sm-4 my-3">
                  <div className="GalleryCaption__Title">{gallery.title}</div>
                  <div className="GalleryCaption__Subtitle | muted">
                    Posted on {gallery.date}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
