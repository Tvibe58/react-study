import React, { useState, useEffect } from 'react';
import './Box.css';

const BoxPackingCalculator = () => {
    // 大箱子的长、宽、高状态
    const [bigBoxLength, setBigBoxLength] = useState(0);
    const [bigBoxWidth, setBigBoxWidth] = useState(0);
    const [bigBoxHeight, setBigBoxHeight] = useState(0);

    // 小箱子的长、宽、高状态
    const [smallBoxLength, setSmallBoxLength] = useState(0);
    const [smallBoxWidth, setSmallBoxWidth] = useState(0);
    const [smallBoxHeight, setSmallBoxHeight] = useState(0);

    // 能装下的小箱子数量状态
    const [numBoxes, setNumBoxes] = useState(0);

    // 计算能装小箱子数量的函数
    const calculateBoxes = () => {
        const alongLength = Math.floor(bigBoxLength / smallBoxLength);
        const alongWidth = Math.floor(bigBoxWidth / smallBoxWidth);
        const alongHeight = Math.floor(bigBoxHeight / smallBoxHeight);

        setNumBoxes(alongLength * alongWidth * alongHeight);
    };

    // 根据计算结果布局小箱子的函数
    const layoutSmallBoxes = () => {
        const smallBoxesLayout = [];
        const alongLength = Math.floor(bigBoxLength / smallBoxLength);
        const alongWidth = Math.floor(bigBoxWidth / smallBoxWidth);
        const alongHeight = Math.floor(bigBoxHeight / smallBoxHeight);

        for (let i = 0; i < alongHeight; i++) {
            for (let j = 0; j < alongWidth; j++) {
                for (let k = 0; k < alongLength; k++) {
                    smallBoxesLayout.push({
                        x: k * smallBoxLength,
                        y: j * smallBoxWidth,
                        z: i * smallBoxHeight,
                    });
                }
            }
        }

        return smallBoxesLayout;
    };

    // 生成尺寸标注图的函数
    const generateDimensionLabels = (boxLength, boxWidth, boxHeight, isBigBox) => {
        const labels = [];
        const fontSize = isBigBox? 12 : 8;
        const lineHeight = isBigBox? 1.5 : 1;
        const textColor = isBigBox? 'white' : 'black';

        // 标注长
        labels.push(
            <div
                key="length-label"
                className="dimension-label"
                style={{
                    left: `${boxLength / 2}px`,
                    top: `${-fontSize * lineHeight}px`,
                    fontSize: `${fontSize}px`,
                    color: textColor,
                }}
            >
                {boxLength}
            </div>
        );

        // 标注宽
        labels.push(
            <div
                key="width-label"
                className="dimension-label"
                style={{
                    left: `${-fontSize * lineHeight}px`,
                    top: `${boxWidth / 2}px`,
                    fontSize: `${fontSize}px`,
                    color: textColor,
                }}
            >
                {boxWidth}
            </div>
        );

        // 标注高
        labels.push(
            <div
                key="height-label"
                className="dimension-label"
                style={{
                    left: `${boxLength / 2}px`,
                    top: `${boxHeight + fontSize * lineHeight}px`,
                    fontSize: `${fontSize}px`,
                    color: textColor,
                }}
            >
                {boxHeight}
            </div>
        );

        return labels;
    };

    return (
        <div className="box-packing-calculator">
            <h2>大箱子与小箱子装箱可视化</h2>
            <div className="input-section">
                <h3>大箱子尺寸</h3>
                <input
                    type="number"
                    placeholder="长"
                    value={bigBoxLength}
                    onChange={(e) => setBigBoxLength(Number(e.target.value))}
                />
                <input
                    type="number"
                    placeholder="宽"
                    value={bigBoxWidth}
                    onChange={(e) => setBigBoxWidth(Number(e.target.value))}
                />
                <input
                    type="number"
                    placeholder="高"
                    value={bigBoxHeight}
                    onChange={(e) => setBigBoxHeight(Number(e.target.value))}
                />
            </div>
            <div className="input-section">
                <h3>小箱子尺寸</h3>
                <input
                    type="number"
                    placeholder="长"
                    value={smallBoxLength}
                    onChange={(e) => setSmallBoxLength(Number(e.target.value))}
                />
                <input
                    type="number"
                    placeholder="宽"
                    value={smallBoxWidth}
                    onChange={(e) => setSmallBoxWidth(Number(e.target.value))}
                />
                <input
                    type="number"
                    placeholder="高"
                    value={smallBoxHeight}
                    onChange={(e) => setSmallBoxHeight(Number(e.target.value))}
                />
            </div>
            <button onClick={calculateBoxes}>计算能装小箱子数量</button>
            <div className="result-section">
                <h3>能装下的小箱子数量: {numBoxes}</h3>
                <div className="box-visualization">
                    {/* 这里根据计算结果展示立体化的大箱子和小箱子布局以及尺寸标注图 */}
                    <div className="big-box">
                        {generateDimensionLabels(bigBoxLength, bigBoxWidth, bigBoxHeight, true)}
                        大箱子
                    </div>
                    {numBoxes > 0 &&
                        layoutSmallBoxes().map((box, index) => (
                            <div
                                key={index}
                                className="small-box"
                                style={{
                                    left: `${box.x}px`,
                                    top: `${box.y}px`,
                                    bottom: `${bigBoxHeight - box.z - smallBoxHeight}px`,
                                    transform: `rotateX(10deg) rotateY(10deg)`,
                                }}
                            >
                                {generateDimensionLabels(
                                    smallBoxLength,
                                    smallBoxWidth,
                                    smallBoxHeight,
                                    false
                                )}
                                小箱子{index + 1}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default BoxPackingCalculator;