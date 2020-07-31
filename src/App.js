import React, { useState, useCallback, useRef } from 'react';
import produce from 'immer';
import './App.css';

function App() {
  const numRows = 60;
  const numCols = 80;
  const cellSize = 20;
  const timeInterval = 100;
  const [grid, setGrid] = useState(generateEmptyGrid());
  const [isRunning, setIsRunning] = useState(false);
  const isRunningRef = useRef();
  isRunningRef.current = isRunning;
  const [numGens, setNumGens] = useState(1);

  const generationColors = {
    1: '#FF0000',
    3: '#FF1493',
    5: '#FFA500',
    7: '#F5D300',
    9: '#74EE15',
    11: '#01FFFF',
    13: '#F000FF',
  };

  function generateEmptyGrid() {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
    return rows;
  }

  const handleCellClick = (i, j) => {
    if (!isRunning) {
      const newGrid = produce(grid, (gridCopy) => {
        if (grid[i][j] === 0) {
          gridCopy[i][j] = 1;
        } else {
          gridCopy[i][j] = 0;
        }
      });
      setGrid(newGrid);
    }
  };

  const toggleRunning = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      isRunningRef.current = true;
      runGame();
    }
  };

  const runGame = useCallback(() => {
    const neighborPositions = [
      [0, 1],
      [0, -1],
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
      [1, 0],
      [-1, 0],
    ];
    const calculateNeighbors = (grid, i, j) => {
      let numNeighbors = 0;
      neighborPositions.forEach(([x, y]) => {
        const newX = x + i;
        const newY = y + j;
        if (newX >= 0 && newX < numRows && newY >= 0 && newY < numCols) {
          if (grid[newX][newY] > 0) {
            numNeighbors += 1;
          }
        }
      });
      return numNeighbors;
    };
    if (!isRunningRef.current) {
      return;
    }
    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < numRows; i++) {
          for (let j = 0; j < numCols; j++) {
            const neighbors = calculateNeighbors(g, i, j);
            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][j] = 0;
            } else if (g[i][j] > 0) {
              gridCopy[i][j] = ((g[i][j] + 1) % 12) + 1;
            } else if (g[i][j] === 0 && neighbors === 3) {
              gridCopy[i][j] = 1;
            }
          }
        }
      });
    });
    setNumGens((prev) => prev + 1);
    setTimeout(runGame, timeInterval);
  }, []);

  function generateRandomGrid() {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(
        Array.from(Array(numCols), () => (Math.random() > 0.85 ? 1 : 0))
      );
    }
    setGrid(rows);
    setNumGens(1);
  }

  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${numCols}, ${cellSize - 2}px)`,
          background: 'black',
          border: '1px solid #2d2d2d',
          margin: '1em',
        }}
      >
        {grid.map((rows, i) =>
          rows.map((cell, j) => (
            <div
              onClick={() => handleCellClick(i, j)}
              key={`cell @[${i},${j}]`}
              style={{
                width: 10,
                height: 10,
                backgroundColor:
                  grid[i][j] > 0 ? generationColors[grid[i][j]] : '#0e1111',
                border:
                  grid[i][j] > 0
                    ? `1px solid ${generationColors[grid[i][j]]}`
                    : '1px solid #0e1111',
                borderRadius: '50%',
                marginBottom: '0.1em',
                cursor: 'crosshair',
                boxShadow:
                  grid[i][j] > 0
                    ? `2px 0px 5px 5px ${generationColors[grid[i][j]]}`
                    : undefined,
              }}
            />
          ))
        )}
      </div>
      <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
        <h1>The Game of Life</h1>
        <button onClick={toggleRunning}>{isRunning ? 'Stop' : 'Start'}</button>
        <button
          onClick={() => {
            setGrid(generateEmptyGrid());
            setNumGens(1);
          }}
        >
          Clear
        </button>
        <button onClick={generateRandomGrid}>Random</button>
        <p>Generations: {numGens}</p>
        <p style={{ color: '#74EE15' }}>
          The Game of Life is a 'cellular automaton' invented by Cambridge
          mathematician John Conway in 1970. The board contains of cells which
          will live, die or multiply, depending on the rules. Depending on the
          initial layout of the grid, the cells may form various patterns as the
          game advances.
        </p>
        <h2>The Rules</h2>
        <p style={{ color: '#01FFFF' }}>
          If a cell is alive: If it has only 0-1 alive neighbors, it dies,
          representing underpopulation. If it has 2-3 alive neighbors, it lives
          on to the next generation. If it has more than 3 alive neighbors, it
          dies, representing overpopulation.
        </p>
        <p style={{ color: '#F000FF' }}>
          If a cell is dead: If it has exactly 3 alive neighbors, it becomes a
          live cell, representing reproduction. Otherwise, it remains dead.
        </p>
      </div>
    </div>
  );
}

export default App;
