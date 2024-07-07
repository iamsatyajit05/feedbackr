import { getFeedbacks } from "@/actions/feedback";
import ListFeedbacks from "./list-feedbacks";
import { getProject } from "@/actions/project";

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const { data: project } = await getProject(params.id);

  if (!project) {
    return (
      <main className="px-4 py-8 space-y-2">
        <p className="text-3xl">Project not found</p>
        <p>Change project from dropdown!</p>
      </main>
    )
  }

  const { data: feedbacks } = await getFeedbacks(params.id);

  return (
    <main className="px-4 py-8 space-y-8">
      <div>
        <p className="text-3xl">Feedbacks</p>
        <p>Project Id: {params.id}</p>
      </div>
      <ListFeedbacks feedbacks={feedbacks} />
    </main>
  )
}