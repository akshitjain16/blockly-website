import './Toolbar.css';

interface ToolbarProps {
  onSave: () => void;
  onLoad: () => void;
  onRun: () => void;
  language: string;
  setLanguage: (language: string) => void;
  projects: any[];
  setSelectedProject: (projectId: string | null) => void;
}

const Toolbar = ({ onSave, onLoad, onRun, language, setLanguage}: ToolbarProps) => {
  return (
    <div className="toolbar">
      <button onClick={onSave} className="btn btn-primary">Save</button>
      <button onClick={onLoad} className="btn btn-secondary">Load</button>
      <button onClick={onRun} className="btn btn-primary">Run</button>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="javascript">JavaScript</option>
        <option value="python">Python</option>
      </select>
      {/* <select value={selectedProject || ''} onChange={(e) => setSelectedProject(e.target.value)}>
        <option value="">Select Project</option>
        {projects.map((project) => (
          <option key={project._id} value={project._id}>
            {project.projectName}
          </option>
        ))}
      </select> */}
    </div>
  );
};

export default Toolbar;