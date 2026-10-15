import { listStatuses } from '@/src/server/prisma/query/statuses'
import { listVariants } from '@/src/server/prisma/query/variants'
import { listTools } from '@/src/server/prisma/query/tools'

import NewProjectForm from './NewProjectForm';

export default async function NewProject() {
  const [statuses, variants, tools] = await Promise.all([
    listStatuses(),
    listVariants(),
    listTools()
  ])

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-xl mb-4">Add a New Project</h1>
      <NewProjectForm newProjectForm={{statuses, variants, tools}}/>
    </div>
  )
}