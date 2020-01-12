import './CodeFragment.scss';
import React from 'react';
import theme from './codeTheme';
import Highlight, {defaultProps} from 'prism-react-renderer';

export interface CodeFragmentProps {
  children: string
}

const CodeFragment: React.FunctionComponent<CodeFragmentProps> = props => {
  return (
    <div className='code-fragment-component'>
      <Highlight {...defaultProps} theme={theme} code={props.children} language="tsx">
        {({className, style, tokens, getLineProps, getTokenProps}) => (
          <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({line, key: i})}>
            {line.map((token, key) => (
              <span {...getTokenProps({token, key})} />
            ))}
          </div>
        ))}
      </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeFragment;
