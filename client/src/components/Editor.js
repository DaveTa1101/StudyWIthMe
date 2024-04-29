import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import Sk from 'skulpt';


const CodeExecutionComponent = () => {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const executeCode = () => {
    // Initialize Skulpt
    Sk.configure({
      output: (text) => setOutput(prevOutput => prevOutput + text + '\n'),
      read: (file) => {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][file] === undefined)
          throw "File not found: '" + file + "'";
        return Sk.builtinFiles["files"][file];
      },
    });

    // Execute the Python code
    try {
      Sk.misceval.asyncToPromise(() => {
        return Sk.importMainWithBody("<stdin>", false, code, true);
      });
    } catch (error) {
      console.error('Error executing code:', error);
      setOutput('Error executing code. Please try again.');
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <Editor
          height="60vh"
          defaultLanguage="python"
          value={code}
          onChange={(newValue) => setCode(newValue)}
        />
      </div>
      <button onClick={executeCode}>Execute Code</button>
      <div style={{ marginTop: '20px', whiteSpace: 'pre-wrap' }}>{output}</div>
    </div>
  );
};

export default CodeExecutionComponent;
