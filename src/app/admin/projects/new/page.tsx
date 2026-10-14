import { PreviewProjectProvider } from './NewProjectContext';
import NewProjectForm from './NewProjectForm';
import NewProjectPreview from './NewProjectPreview';

export default function NewProject() {
  return (
    <PreviewProjectProvider>
      <div className="flex flex-col p-4 md:flex-row">
        <NewProjectForm className="md:w-7/20" />
        <NewProjectPreview className="mt-5 md:ml-5 md:mt-0 md:w-7/10"/>
      </div>
    </PreviewProjectProvider>
  )
}