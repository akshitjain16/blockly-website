import { useState, useRef, useEffect } from 'react';
import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
import { setHindiLocale } from '../locales/hindi';
import { useToast } from "@/hooks/use-toast";
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
import '../styles/blockly.css';

const WORKSPACE_STATE_KEY = 'blockly_workspace_state';

const Workspace = () => {
  const [code, setCode] = useState<string>("");
  const [xml, setXml] = useState<string>('');
  const blocklyDiv = useRef<HTMLDivElement>(null);
  const workspaceRef = useRef<Blockly.WorkspaceSvg | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (blocklyDiv.current && !workspaceRef.current) {
      setHindiLocale();
      const toolboxXML = `
        <xml id="toolbox" style="display: none">
          <category name="तर्क" colour="%{BKY_LOGIC_HUE}">
            <block type="controls_if"></block>
            <block type="logic_compare"></block>
            <block type="logic_operation"></block>
            <block type="logic_negate"></block>
            <block type="logic_boolean"></block>
            <block type="logic_null"></block>
            <block type="logic_ternary"></block>
          </category>
          <category name="लूप" colour="%{BKY_LOOPS_HUE}">
            <block type="controls_repeat_ext"></block>
            <block type="controls_whileUntil"></block>
            <block type="controls_for"></block>
            <block type="controls_forEach"></block>
            <block type="controls_flow_statements"></block>
          </category>
          <category name="गणित" colour="%{BKY_MATH_HUE}">
            <block type="math_number"></block>
            <block type="math_arithmetic"></block>
            <block type="math_single"></block>
            <block type="math_trig"></block>
            <block type="math_constant"></block>
            <block type="math_number_property"></block>
            <block type="math_round"></block>
            <block type="math_modulo"></block>
            <block type="math_constrain"></block>
            <block type="math_random_int"></block>
            <block type="math_random_float"></block>
          </category>
          <category name="टेक्स्ट" colour="%{BKY_TEXTS_HUE}">
            <block type="text"></block>
            <block type="text_join"></block>
            <block type="text_append"></block>
            <block type="text_length"></block>
            <block type="text_isEmpty"></block>
            <block type="text_indexOf"></block>
            <block type="text_charAt"></block>
            <block type="text_getSubstring"></block>
            <block type="text_changeCase"></block>
            <block type="text_trim"></block>
            <block type="text_print"></block>
            <block type="text_prompt_ext"></block>
          </category>
          <category name="सूची" colour="%{BKY_LISTS_HUE}">
            <block type="lists_create_with"></block>
            <block type="lists_create_with_container"></block>
            <block type="lists_create_with_item"></block>
            <block type="lists_repeat"></block>
            <block type="lists_length"></block>
            <block type="lists_isEmpty"></block>
            <block type="lists_indexOf"></block>
            <block type="lists_getIndex"></block>
            <block type="lists_setIndex"></block>
            <block type="lists_getSublist"></block>
            <block type="lists_split"></block>
            <block type="lists_sort"></block>
          </category>
          <category name="चर" colour="%{BKY_VARIABLES_HUE}" custom="VARIABLE"></category>
          <category name="फ़ंक्शन" colour="%{BKY_PROCEDURES_HUE}" custom="PROCEDURE"></category>
        </xml>
      `;

      const ws = Blockly.inject(blocklyDiv.current, {
        toolbox: toolboxXML,
        zoom: {
          controls: false,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2
        },
        move: {
          scrollbars: true,
          drag: true,
          wheel: true
        },
        trashcan: true
      });

      workspaceRef.current = ws;

      // Load saved workspace state
      const savedState = localStorage.getItem(WORKSPACE_STATE_KEY);
      if (savedState) {
        try {
          const xml = Blockly.Xml.textToDom(savedState);
          Blockly.Xml.domToWorkspace(xml, ws);
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

      ws.addChangeListener(() => {
        const generatedCode = javascriptGenerator.workspaceToCode(ws);
        setCode(generatedCode);
        const xml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(ws));
        setXml(xml);
      });
    }

    return () => {
      if (workspaceRef.current) {
        workspaceRef.current.dispose();
        workspaceRef.current = null;
      }
    };
  }, [toast]);
 

   const handleSave = () => {
    if (workspaceRef.current) {
      try {
        const xml = Blockly.Xml.workspaceToDom(workspaceRef.current);
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
    if (workspaceRef.current) {
      workspaceRef.current.zoomCenter(1);
    }
  };
  const handleZoomOut = () => {
    if (workspaceRef.current) {
      workspaceRef.current.zoomCenter(-1);
    }
  };
  const handleUndo = () => {
    if (workspaceRef.current) {
      workspaceRef.current.undo(false);
    }
  };
  const handleRedo = () => {
    if (workspaceRef.current) {
      workspaceRef.current.undo(true);
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
          <div ref={blocklyDiv} className="h-full "/>
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