import { Responsive, useContainerWidth } from "react-grid-layout";
import './style.css'
import BlockUI from "./UI/Block.ui";
import { twitterBlock, whatsappBlock, youtubeBlock } from "../constants/constsBlocks";
import { useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { ResponsiveReactGridLayout } from "react-grid-layout/legacy";
export default function MyResponsiveGrid() {

  const { width, containerRef, mounted } = useContainerWidth();

  const originalLayout = {
    lg: [
      { i: "a", x: 0, y: 0, w: 3, h: 2, minW: 2, maxW: 6, minH: 2, maxH: 6 },
      { i: "b", x: 0, y: 1, w: 3, h: 2, minW: 2, maxW: 6, minH: 2, maxH: 6 },
      { i: "c", x: 0, y: 2, w: 3, h: 2, minW: 2, maxW: 6, minH: 2, maxH: 6 },
    ],
    md: [
      { i: "a", x: 0, y: 0, w: 3, h: 2, minW: 2, maxW: 6, minH: 2, maxH: 6 },
      { i: "b", x: 0, y: 1, w: 3, h: 2, minW: 2, maxW: 6, minH: 2, maxH: 6 },
      { i: "c", x: 0, y: 2, w: 3, h: 2, minW: 2, maxW: 6, minH: 2, maxH: 6 },
    ],
    sm: [
      { i: "a", x: 0, y: 0, w: 2, h: 2, minW: 2, maxW: 6, minH: 2, maxH: 6 },
      { i: "b", x: 0, y: 1, w: 2, h: 2, minW: 2, maxW: 6, minH: 2, maxH: 6 },
      { i: "c", x: 0, y: 2, w: 2, h: 2, minW: 2, maxW: 6, minH: 2, maxH: 6 },
    ],
    xxs: [
      { i: "a", x: 0, y: 0, w: 2, h: 1, minW: 2, maxW: 6, minH: 2, maxH: 6 },
      { i: "b", x: 0, y: 1, w: 2, h: 2, minW: 2, maxW: 6, minH: 2, maxH: 6 },
      { i: "c", x: 0, y: 4, w: 2, h: 2, minW: 2, maxW: 6, minH: 2, maxH: 6 },
    ]
  };

  const UpdatedLayout = getSl('layout') || originalLayout

  function getSl(key) {
    return JSON.parse(localStorage.getItem(key))
  }

  const [layout, setLayout] = useState(UpdatedLayout)

  console.log(layout)



  function saveSl(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  function resetLayout(key) {
    saveSl(key, originalLayout)
    setLayout(originalLayout)

  }

  function handleChangeLayout(_, newLayout) {
    console.log('save')
    saveSl('layout', newLayout)
    setLayout(newLayout)
  }

  return (
    <>
      <div className="reset_btn_responsive_container">
        <button className="reset-btn responsive" onClick={() => resetLayout('layout')}>
          <GrPowerReset/>
        </button>
      </div>

      <div ref={containerRef}>
        {mounted && (
          <ResponsiveReactGridLayout
            layouts={layout}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            width={width}
            onLayoutChange={handleChangeLayout}
          >
            <div key={'a'}>
              <BlockUI block={youtubeBlock}></BlockUI>
            </div>

            <div key={'b'}>
              <BlockUI block={twitterBlock}></BlockUI>
            </div>

            <div key={'c'}>
              <BlockUI block={whatsappBlock}></BlockUI>
            </div>
          </ResponsiveReactGridLayout>
        )}


      </div>

    </>

  );
}