import { useEffect, useRef } from 'react';
import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
import './BlocklyWorkspace.css';
import { pythonGenerator } from "blockly/python";

interface BlocklyWorkspaceProps {
  language: string;
  onCodeChange: (code: string) => void;
  onXmlChange: (xml: string) => void;
}

const BlocklyWorkspace = ({ language, onCodeChange, onXmlChange }: BlocklyWorkspaceProps) => {
  const blocklyDiv = useRef<HTMLDivElement>(null);
  const workspaceRef = useRef<Blockly.WorkspaceSvg | null>(null);

  useEffect(() => {
    if (blocklyDiv.current && !workspaceRef.current) {
      const toolboxXML = `
        <xml id="toolbox" style="display: none">
          <!-- Logic -->
          <category name="Logic" colour="%{BKY_LOGIC_HUE}">
            <block type="controls_if"></block>
            <block type="logic_compare"></block>
            <block type="logic_operation"></block>
            <block type="logic_negate"></block>
            <block type="logic_boolean"></block>
            <block type="logic_null"></block>
            <block type="logic_ternary"></block>
          </category>

          <!-- Loops -->
          <category name="Loops" colour="%{BKY_LOOPS_HUE}">
            <block type="controls_repeat_ext"></block>
            <block type="controls_whileUntil"></block>
            <block type="controls_for"></block>
            <block type="controls_forEach"></block>
            <block type="controls_flow_statements"></block>
          </category>

          <!-- Math -->
          <category name="Math" colour="%{BKY_MATH_HUE}">
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

          <!-- Text -->
          <category name="Text" colour="%{BKY_TEXTS_HUE}">
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

          <!-- Lists -->
          <category name="Lists" colour="%{BKY_LISTS_HUE}">
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

          <!-- Variables -->
          <category name="Variables" colour="%{BKY_VARIABLES_HUE}" custom="VARIABLE"></category>

          <!-- Functions -->
          <category name="Functions" colour="%{BKY_PROCEDURES_HUE}" custom="PROCEDURE"></category>
        </xml>
      `;

      const ws = Blockly.inject(blocklyDiv.current, {
        toolbox: toolboxXML,
      });

      workspaceRef.current = ws;

      ws.addChangeListener(() => {
        const generatedCode =
          language === 'javascript'
            ? javascriptGenerator.workspaceToCode(ws)
            : pythonGenerator.workspaceToCode(ws);
        onCodeChange(generatedCode);
        const xml = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(ws));
        onXmlChange(xml);
      });
    }

    return () => {
      if (workspaceRef.current) {
        workspaceRef.current.dispose();
        workspaceRef.current = null;
      }
    };
  }, []); // Empty dependency array to run only once

  useEffect(() => {
    if (workspaceRef.current) {
      const generatedCode =
        language === 'javascript'
          ? javascriptGenerator.workspaceToCode(workspaceRef.current)
          : pythonGenerator.workspaceToCode(workspaceRef.current);
      onCodeChange(generatedCode);
    }
  }, [language, onCodeChange]);

  return <div ref={blocklyDiv} className="blockly-workspace"></div>;
};

export default BlocklyWorkspace;