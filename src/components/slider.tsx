import React from "react";
import "./slider.scss";

enum ProjectStatus {
  ACTIVE = "active",
  CEASED = "ceased",
  ONHOLD = "on hold",
  PLANNING = "planning",
}

type Slide = {
  status: ProjectStatus;
  name: string;
  description: string;
  link?: string;
  technologies?: string[];
  image?: string;
};

const slides: Slide[] = [
  {
    status: ProjectStatus.ACTIVE,
    name: "Typeorm polymorphic",
    description: "A polymorphic typescript repository package for typeorm",
    technologies: ["typeorm", "typescript", "mysql"],
  },
  {
    status: ProjectStatus.ACTIVE,
    name: "nestjs-typeorm-paginate",
    description: "A pagination function for nestjs + typeorm",
    technologies: ["nestjs", "typeorm", "mysql", "typescript"],
  },
  {
    status: ProjectStatus.ACTIVE,
    name: "nestjs-config",
    description: "A config package for nestjs based on laravel",
    technologies: ["nestjs", "typescript"],
  },
  {
    status: ProjectStatus.CEASED,
    name: "ford & sons meat shop",
    description:
      "A quickly built click and collect website for my local butcher. Sadly the website was never published due to franchise issues. The good news however, is the site I built is still available if you wish to view it!",
    link: "https://adoring-villani-ca7b56.netlify.app/",
    technologies: ["gatsby", "typescript", "click & collect", "netlify"],
  },
  {
    status: ProjectStatus.PLANNING,
    name: "PosPal",
    description:
      "A mobile only, next generation EPOS system for sole traders and small retailers",
    technologies: [
      "typescript",
      "gcloud",
      "google functions",
      "mysql",
      "react",
      "flutter",
      "barcodes",
      "printers",
      "bluetooth",
      "payment gateways",
      "pub/sub",
      "RTDB",
      "sqlite",
      "google messaging",
    ],
  },
];

const stringToHex = (string: string): string => {
  const indexes = "abcdefghijklmnopqrstuvwxyz".split("");
  const r = string.split("").reduce((num, char) => {
    num = num + indexes.indexOf(char);

    return num;
  }, 0);

  const float = parseFloat("0." + (r * r * 1000).toString().replace(/^0/, ""));
  return "#" + Math.floor(float * 16777215).toString(16);
};

const shuffle = arr =>
  [...arr].reduceRight(
    (res, _, __, s) => (
      res.push(s.splice(0 | (Math.random() * s.length), 1)[0]), res
    ),
    []
  );

const Slide = (props: Slide) => (
  <div className="slide">
    <div className="slide-status">
      <span className={`status is-${props.status.replace(" ", "-")}`}></span>{" "}
      {props.status}
    </div>
    <div className="content">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <p>
        {props.link && (
          <a target="_blank" href={props.link}>
            View
          </a>
        )}
      </p>
      {props.technologies && (
        <div className="tags">
          {props.technologies.map(tech => (
            <span
              className="tag"
              style={{ background: stringToHex(tech), color: "white" }}
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

export const Slider = () => {
  return (
    <div id="slider">
      <div
        className="slide-holder"
        style={{ width: `${75 * slides.length}vw` }}
      >
        {shuffle(slides).map(slide => (
          <Slide {...slide} />
        ))}
      </div>
    </div>
  );
};
