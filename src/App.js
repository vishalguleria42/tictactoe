import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="tic-tac-toe">
        <h1> TIC-TAC-TOE </h1>
        <Button resetGame={resetGame} />
        <div className="game">
            {Array.from("012345678").map((ind) => (
                <Square
                    key={ind}
                    ind={ind}
                    updateSquares={updateSquares}
                    clsName={squares[ind]}
                />
            ))}
        </div>
        <div className={`turn ${turn === "x" ? "left" : "right"}`}>
            <Square clsName="x" />
            <Square clsName="o" />
        </div>
        <AnimatePresence>
            {winner && (
                <motion.div
                    key={"parent-box"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="winner"
                >
                    <motion.div
                        key={"child-box"}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="text"
                    >
                        <motion.h2
                            initial={{ scale: 0, y: 100 }}
                            animate={{
                                scale: 1,
                                y: 0,
                                transition: {
                                    y: { delay: 0.7 },
                                    duration: 0.7,
                                },
                            }}
                        >
                            {winner === "x | o"
                                ? "No Winner :/"
                                : "Win !! :)"}
                        </motion.h2>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{
                                scale: 1,
                                transition: {
                                    delay: 1.3,
                                    duration: 0.2,
                                },
                            }}
                            className="win"
                        >
                            {winner === "x | o" ? (
                                <>
                                    <Square clsName="x" />
                                    <Square clsName="o" />
                                </>
                            ) : (
                                <>
                                    <Square clsName={winner} />
                                </>
                            )}
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{
                                scale: 1,
                                transition: { delay: 1.5, duration: 0.3 },
                            }}
                        >
                            <Button resetGame={resetGame} />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  );
}

const Button = ({ resetGame }) => {
  return <button onClick={() => resetGame()}>New Game</button>;
};

export default App;
