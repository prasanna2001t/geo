import React from 'react';
import ToolHeader from '../../shared/tool-header';
import ToolContent from '../../shared/tool-content';
import ToolFooter from '../../shared/tool-footer';

const BandArithmeticComponent = ({ bandArithmetic, updateBandArithmetic, execute }) => (
  <div id='band-arithmetic-tool' className='tool'>
    <ToolHeader
      logoURL="/images/band-arithmetic.svg"
      title="Run Band Arithmetic on the raster"
    />
    <ToolContent>
      <p>Run a math expression on every pixel in your raster.  The values from different bands can be accessed with the variables A, B, C, ...</p>
      <br/>
      <p>Enter your band arithmetic operation.</p>
      <input
        type='string'
        className='gt-input'
        onChange={updateBandArithmetic}
        value={bandArithmetic}
      />
      <div className='content-row submit-row'>
        <button
          className='gt-button-accent full'
          onClick={execute}
        >
          Compute Band Arithmetic
        </button>
      </div>
    </ToolContent>
    <ToolFooter />
  </div>
);

export default BandArithmeticComponent
