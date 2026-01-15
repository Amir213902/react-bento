import { useEffect, useState } from 'react';
import ReactGridLayout, { useContainerWidth } from 'react-grid-layout';
import "./style.css";
import BlockUI from './UI/Block.ui';
import { instagramBlock, twitterBlock, whatsappBlock, XTwitterBlock, youtubeBlock } from '../constants/constsBlocks';
import { GrPowerReset } from 'react-icons/gr';

export default function MyGrid() {
  const { width, containerRef, mounted } = useContainerWidth();

  /* Стартовая конфигурация позиции и размер каждого из блоков */
  const originalLayout = [
    { i: "a", x: 0, y: 0, w: 6, h: 4, minW: 2, maxW: 6, minH: 2, maxH: 6 },
    { i: "b", x: 6, y: 0, w: 4, h: 2, minW: 2, maxW: 6, minH: 2, maxH: 6 },
    { i: "c", x: 12, y: 0, w: 2, h: 3, minW: 2, maxW: 6, minH: 2, maxH: 6 },
    { i: "d", x: 0, y: 4, w: 2, h: 2, minW: 2, maxW: 6, minH: 2, maxH: 6 },
    { i: "e", x: 6, y: 6, w: 4, h: 2, minW: 2, maxW: 6, minH: 2, maxH: 6 },
  ];


  // Взятие данных с localStorage
  function getLS(key) {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key))
    } else {
      return resetLayout('layoutDesk')
    }
  }

  const [layout, setLayout] = useState(getLS('layoutDesk'))

  // Сохранение данных в localStorage
  function saveLS(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }


  // Кнопка ресета
  function resetLayout(key) {
    saveLS(key, originalLayout)
    setLayout(originalLayout)
  }

  // Функция при любом изменении в Layout
  function handleChangeLayout(newLayout) {
    saveLS('layoutDesk', newLayout)
    setLayout(newLayout)
  }
  return (
    <>
      <div ref={containerRef}>
        {mounted && (
          <ReactGridLayout
            autoSize={true}
            width={width}
            layout={layout}
            gridConfig={{ cols: 12, maxRows: 10, rowHeight: 100 }}
            dragConfig={{ enabled: true, handle: '.handle', threshold: 3 }}
            isResizable={true}
            onLayoutChange={handleChangeLayout}
          >
            <div key={'a'}>
              <BlockUI block={XTwitterBlock}></BlockUI>
            </div>

            <div key={'b'}>
              <BlockUI block={twitterBlock}></BlockUI>
            </div>

            <div key={'c'}>
              <BlockUI block={whatsappBlock}></BlockUI>
            </div>

            <div key={'d'}>
              <BlockUI block={youtubeBlock}></BlockUI>
            </div>

            <div key={'e'}>
              <BlockUI block={instagramBlock}></BlockUI>
            </div>


          </ReactGridLayout>
        )}

      </div>
      <button className="reset-btn" onClick={(e) => { e.preventDefault(); resetLayout('layoutDesk'); }}>
        <GrPowerReset />
      </button>
    </>

  );
}