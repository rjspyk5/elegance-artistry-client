import React from "react";
import { SectionHeading } from "./SectionHeading";

export const FAQ = () => {
  return (
    <div>
      <div>
        <SectionHeading heading="Frequently Asked Questions" />
      </div>
      <div className="space-y-2 my-8">
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Q: Are the artworks on your website originals or prints?
          </div>
          <div className="collapse-content">
            <p>
              Our collection consists of both original artworks and limited
              edition prints. Each artwork listing specifies whether it's an
              original or a print, along with additional details about the
              medium and edition size.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Q: How often do you update your collection with new artworks?
          </div>
          <div className="collapse-content">
            <p>
              We strive to keep our collection fresh and dynamic by regularly
              adding new artworks from emerging and established artists. You can
              expect to see new additions to our gallery every month, so be sure
              to check back often for the latest arrivals.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Q: Are the prices of the artworks negotiable?
          </div>
          <div className="collapse-content">
            <p>
              While we strive to offer fair and competitive prices for all our
              artworks, we understand that budget considerations may vary. Feel
              free to reach out to our team to discuss pricing options, and
              we'll do our best to accommodate your needs.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Q: How can I submit my own artwork to be featured on your website?
          </div>
          <div className="collapse-content">
            <p>
              We welcome submissions from artists interested in showcasing their
              work on our platform. Simply visit the "Submit Artwork" page on
              our website and follow the instructions to upload images of your
              artwork, along with relevant details such as title, medium, and
              dimensions.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Q: Is there a review process for submitted artworks?
          </div>
          <div className="collapse-content">
            <p>
              Yes, all submitted artworks undergo a review process to ensure
              they meet our quality standards and guidelines. Our team carefully
              evaluates each submission based on artistic merit, originality,
              and appropriateness for our gallery's audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
