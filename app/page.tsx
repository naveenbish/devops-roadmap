import { devopsRoadmap } from "@/data/roadmap";
import { RoadmapView } from "@/components/roadmap/roadmap-view";

export default function Home() {
  return <RoadmapView roadmap={devopsRoadmap} />;
}
