import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../redux/features/projectSlice";
import { Typography, Card, CardBody } from "@material-tailwind/react";

function ContentCard({ img, title, desc }) {
    return (
      <Card
        className="relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
        color="transparent"
      >
        <img
          src={img}
          alt="bg"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/70" />
        <CardBody className="relative flex flex-col justify-end">
          <Typography variant="h4" color="white">
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            color="white"
            className="my-2 font-normal"
          >
            {desc}
          </Typography>
        </CardBody>
      </Card>
    );
  }

const Projects = () => {
  const dispatch = useDispatch();
  const { project, status, error } = useSelector((state) => state.project);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }


  return (
    <section className="container mx-auto px-8 py-10 lg:py-28">
      <Typography
        variant="h2"
        color="blue-gray"
        className="!text-2xl !leading-snug lg:!text-3xl"
      >
        Build something great
      </Typography>
      <Typography
        variant="lead"
        className="mt-2 max-w-lg !font-normal !text-gray-500"
      >
        We&apos;re constantly trying to express ourselves and actualize our
        dreams. If you have the opportunity to play this game of life you need
        to appreciate every moment.
      </Typography>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
        {project.map(({ img, title, desc }) => (
          <ContentCard key={title} img={img} title={title} desc={desc} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
