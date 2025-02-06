import { useEffect, useState } from 'react';
import Header from '../components/Navbar';
import Toolbar from '../components/Toolbar';
import BlocklyWorkspace from '../components/BlocklyWorkspace';
import '../../styles/WorkspacePage.css';
import axios from 'axios';
import * as Blockly from 'blockly';

const WorkspacePage = () => {
  const [language, setLanguage] = useState<'javascript' | 'python'>('javascript');
  const [code, setCode] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [projects, setProjects] = useState<any[]>([]);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [xml, setXml] = useState<string>('');

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get('token');
    if (token) {
      localStorage.setItem('token', token);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const response = await axios.get('http://localhost:5000/api/projects', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjects(response.data);
    } catch (error) {
      console.error('Failed to fetch projects', error);
    }
  };


  const saveWorkspace = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return;

      const response = await axios.post(
        'http://localhost:5000/api/projects',
        { projectName: 'New Project', xml: '' }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setProjects([...projects, response.data]);
      alert('Workspace saved!');
    } catch (error) {
      console.error('Failed to save workspace', error);
    }
  };

  const loadWorkspace = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token || !selectedProject) return;

      const response = await axios.get(`http://localhost:5000/api/projects/${selectedProject}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const xmlData = response.data.xml;
      const ws = Blockly.getMainWorkspace();
      Blockly.Xml.clearWorkspaceAndLoadFromXml(Blockly.Xml.textToDom(xmlData), ws);
      setXml(xmlData);
      alert('Workspace loaded!');
    } catch (error) {
      console.error('Failed to load workspace', error);
    }
  };

  const runCode = () => {
    if (language === 'javascript') {
      try {
        const result = eval(code);
        setOutput(result.toString());
      } catch (error) {
        setOutput(`Error: ${error}`);
      }
    } else if (language === 'python') {
      alert('Python execution is not supported yet.');
    }
  };

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const handleXmlChange = (newXml: string) => {
    setXml(newXml);
  };

  return (
    <div className="workspace-page">
      <Header />
      <Toolbar
        onSave={saveWorkspace}
        onLoad={loadWorkspace}
        onRun={runCode}
        language={language}
        setLanguage={setLanguage}
        projects={projects}
        setSelectedProject={setSelectedProject}
      />
      <div className="workspace-container">
        <div className="blockly-area">
          <BlocklyWorkspace language={language} onCodeChange={handleCodeChange}  onXmlChange={handleXmlChange} />
        </div>
        <div className="code-area">
          <div className="code-output">
            <h3>Generated Code</h3>
            <pre>{code}</pre>
          </div>
          <div className="output-console">
            <h3>Output Console</h3>
            <pre>{output}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspacePage;