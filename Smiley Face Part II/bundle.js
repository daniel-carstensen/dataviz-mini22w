(function (React, ReactDOM) {
  'use strict';

  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

  const width = window.innerWidth;
  const height = window.innerHeight;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 20;
  const eyeOffsetX = 90;
  const eyeOffsetY = 100;
  const eyeRadius = 40;

  const App = () => (
    React.createElement( 'svg', { width: width, height: height },
      React.createElement( 'g', { transform: `translate(${centerX},${centerY})` },
        React.createElement( 'circle', {
          r: centerY - strokeWidth / 2, fill: "yellow", stroke: "black", 'stroke-width': strokeWidth }),
        React.createElement( 'circle', {
          cx: -eyeOffsetX, cy: -eyeOffsetY, r: eyeRadius }),
        React.createElement( 'circle', {
          cx: eyeOffsetX, cy: -eyeOffsetY, r: eyeRadius })
      )
    )
  );

  const rootElement = document.getElementById('root');
  ReactDOM.render(React.createElement( App, null ), rootElement);

}(React, ReactDOM));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuY29uc3Qgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbmNvbnN0IGhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbmNvbnN0IGNlbnRlclggPSB3aWR0aCAvIDI7XG5jb25zdCBjZW50ZXJZID0gaGVpZ2h0IC8gMjtcbmNvbnN0IHN0cm9rZVdpZHRoID0gMjA7XG5jb25zdCBleWVPZmZzZXRYID0gOTA7XG5jb25zdCBleWVPZmZzZXRZID0gMTAwO1xuY29uc3QgZXllUmFkaXVzID0gNDA7XG5jb25zdCBtb3V0aFdpZHRoID0gMjA7XG5jb25zdCBtb3V0aFJhZGl1cyA9IDE0MDtcblxuY29uc3QgQXBwID0gKCkgPT4gKFxuICA8c3ZnIHdpZHRoPXt3aWR0aH0gaGVpZ2h0PXtoZWlnaHR9PlxuICAgIDxnIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke2NlbnRlclh9LCR7Y2VudGVyWX0pYH0+XG4gICAgICA8Y2lyY2xlXG4gICAgICAgIHI9e2NlbnRlclkgLSBzdHJva2VXaWR0aCAvIDJ9XG4gICAgICAgIGZpbGw9XCJ5ZWxsb3dcIlxuICAgICAgICBzdHJva2U9XCJibGFja1wiXG4gICAgICAgIHN0cm9rZS13aWR0aD17c3Ryb2tlV2lkdGh9XG4gICAgICAvPlxuICAgICAgPGNpcmNsZVxuICAgICAgICBjeD17LWV5ZU9mZnNldFh9XG4gICAgICAgIGN5PXstZXllT2Zmc2V0WX1cbiAgICAgICAgcj17ZXllUmFkaXVzfVxuICAgICAgLz5cbiAgICAgIDxjaXJjbGVcbiAgICAgICAgY3g9e2V5ZU9mZnNldFh9XG4gICAgICAgIGN5PXstZXllT2Zmc2V0WX1cbiAgICAgICAgcj17ZXllUmFkaXVzfVxuICAgICAgLz5cbiAgICA8L2c+XG4gIDwvc3ZnPlxuKTtcblxuY29uc3Qgcm9vdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIHJvb3RFbGVtZW50KTsiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0VBR0EsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztFQUNoQyxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO0VBQ2xDLE1BQU0sT0FBTyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7RUFDMUIsTUFBTSxPQUFPLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQztFQUMzQixNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7RUFDdkIsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO0VBQ3RCLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQztFQUN2QixNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7O0VBSXJCLE1BQU0sR0FBRyxHQUFHO0lBQ1YsOEJBQUssT0FBTyxLQUFLLEVBQUUsUUFBUSxNQUFNO01BQy9CLDRCQUFHLFdBQVcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzlDO1VBQ0UsR0FBRyxPQUFPLEdBQUcsV0FBVyxHQUFHLENBQUMsRUFDNUIsTUFBSyxRQUFRLEVBQ2IsUUFBTyxPQUFPLEVBQ2QsZ0JBQWMsV0FBVyxFQUFDO1FBRTVCO1VBQ0UsSUFBSSxDQUFDLFVBQVUsRUFDZixJQUFJLENBQUMsVUFBVyxFQUNoQixHQUFHLFNBQVMsRUFBQztRQUVmO1VBQ0UsSUFBSSxVQUFVLEVBQ2QsSUFBSSxDQUFDLFVBQVcsRUFDaEIsR0FBRyxTQUFTLEVBQUMsQ0FDYjtPQUNBO0tBQ0E7R0FDUCxDQUFDOztFQUVGLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7RUFDcEQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxxQkFBQyxTQUFHLEVBQUcsRUFBRSxXQUFXLENBQUM7Ozs7In0=