import * as React from 'react';

import { GuidedAccessCheckerViewProps } from './GuidedAccessChecker.types';

export default function GuidedAccessCheckerView(props: GuidedAccessCheckerViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
