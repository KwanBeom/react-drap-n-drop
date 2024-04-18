import ReactGridLayout from 'react-grid-layout';
import Card from './components/Card';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';

function App() {
  const layout = [
    { i: 'a', x: 0, y: 0, w: 1, h: 2 },
    { i: 'b', x: 1, y: 0, w: 3, h: 2, maxW: 2 },
    { i: 'c', x: 4, y: 0, w: 1, h: 2 },
  ];

  return (
    <ReactGridLayout
      className="layout"
      layout={layout}
      cols={2}
      rowHeight={30}
      width={1200}
    >
      {layout.map(item => (
        <div key={item.i}>
          <Card />
        </div>
      ))}
    </ReactGridLayout>
  );
}

export default App;
