import { useState, useRef } from "react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "@/components/Navbar";
import {
  Save,
  Play,
  Undo,
  Redo,
  ZoomIn,
  ZoomOut,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import * as Blockly from 'blockly';
import BlocklyWorkspace from '../components/BlocklyWorkspace';
import { useToast } from "@/hooks/use-toast";
import '../styles/blockly.css';


const WORKSPACE_STATE_KEY = 'blockly_workspace_state';

const Workspace = () => {
  const [code, setCode] = useState<string>("");
  const [xml, setXml] = useState<string>('');
  const blocklyWorkspaceRef = useRef<Blockly.WorkspaceSvg | null>(null);
  const { toast } = useToast();

   // Load saved workspace state
   const savedState = localStorage.getItem(WORKSPACE_STATE_KEY);
   if (savedState) {
     try {
       const xml = Blockly.Xml.textToDom(savedState);
       Blockly.Xml.domToWorkspace(xml, workspace);
       toast({
         title: "Workspace loaded",
         description: "Previous workspace state has been restored",
       });
     } catch (error) {
       console.error('Error loading workspace:', error);
       toast({
         title: "Error loading workspace",
         description: "Could not load the previous workspace state",
         variant: "destructive",
       });
     }
   }

   const handleSave = () => {
    if (blocklyWorkspaceRef.current) {
      try {
        const xml = Blockly.Xml.workspaceToDom(blocklyWorkspaceRef.current);
        const xmlText = Blockly.Xml.domToText(xml);
        localStorage.setItem(WORKSPACE_STATE_KEY, xmlText);
        toast({
          title: "Workspace saved",
          description: "Your blocks have been saved successfully",
        });
      } catch (error) {
        console.error('Error saving workspace:', error);
        toast({
          title: "Error saving workspace",
          description: "Could not save the workspace state",
          variant: "destructive",
        });
      }
    }
  };
  const handleZoomIn = () => {
    if (blocklyWorkspaceRef.current) {
      blocklyWorkspaceRef.current.zoomCenter(1);
    }
  };
  const handleZoomOut = () => {
    if (blocklyWorkspaceRef.current) {
      blocklyWorkspaceRef.current.zoomCenter(-1);
    }
  };
  const handleUndo = () => {
    if (blocklyWorkspaceRef.current) {
      blocklyWorkspaceRef.current.undo(false);
    }
  };
  const handleRedo = () => {
    if (blocklyWorkspaceRef.current) {
      blocklyWorkspaceRef.current.undo(true);
    }
  };

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const handleXmlChange = (newXml: string) => {
    setXml(newXml);
  };

  const executeCode = () => {
    try {
      // Create a new Function from the generated code and execute it
      const runCode = new Function(code);
      const result = runCode();
      
      toast({
        title: "Code executed successfully",
        description: result !== undefined ? `Result: ${result}` : "Code executed with no return value",
      });
    } catch (error) {
      toast({
        title: "Error executing code",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      <Navbar />
      
      {/* Toolbar */}
      <div className="border-b flex items-center gap-2 p-2 mt-16">
        <Button variant="outline" size="icon" onClick={handleUndo}>
          <Undo className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={handleRedo}>
          <Redo className="h-4 w-4" />
        </Button>
        <div className="h-6 w-px bg-border" />
        <Button variant="outline" size="icon" onClick={handleZoomIn}>
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={handleZoomOut}>
          <ZoomOut className="h-4 w-4" />
        </Button>
        <div className="h-6 w-px bg-border" />
        <Button variant="outline" size="icon" onClick={handleSave}>
          <Save className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={executeCode}>
          <Play className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Share2 className="h-4 w-4" />
        </Button>
      </div>

      {/* Main workspace area */}
      <ResizablePanelGroup direction="horizontal" className="flex-1">

        {/* Workspace panel */}
        <ResizablePanel defaultSize={60}>
          <BlocklyWorkspace onCodeChange={handleCodeChange}  onXmlChange={handleXmlChange} />
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Code panel */}
        <ResizablePanel defaultSize={40}>
          <div className="h-full border-l">
            <ScrollArea className="h-full">
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-4">Generated Code</h3>
                <pre className="p-4 rounded-lg bg-primary/10 font-mono text-sm">
                  {code || '// Your code will appear here'}
                </pre>
              </div>
            </ScrollArea>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Workspace;