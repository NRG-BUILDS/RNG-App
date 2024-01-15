import { useState } from "react";

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const RNG = () => {
  const [displayNum, setDisplayNum] = useState(getRndInteger(1, 10));
  const [isPending, setIsPending] = useState(false);
  const [results, setResults] = useState([]);
  const startGeneration = (callBack) => {
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
      setDisplayNum(getRndInteger(1, 10));
    }, 1000);

    callBack();
  };
  const addResult = () => {
    const newResult = results;
    newResult.push(displayNum);
    setResults(newResult);
    console.log(results);
  };
  return (
    <section className="h-screen w-screen flex justify-center items-center">
      <div className="bg-slate-50 p-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold py-4">Random Number Generator</h2>
        <div
          className={
            "my-4 mx-auto w-36 aspect-square flex items-center justify-center rounded-full  text-5xl font-bold transition-colors duration-200 " +
            (isPending
              ? "border-t-orange-400 border-t-4 animate-spin"
              : "bg-orange-400 text-white")
          }
        >
          {!isPending && displayNum}
        </div>
        <duv className="text-center">
          <p className="bg-orange-100 py-1 px-8 mx-auto rounded-xl w-fit">
            {10 - results.length} attempts remaining
          </p>
        </duv>
        <div>
          {results.length <= 9 && (
            <button
              onClick={() => startGeneration(addResult)}
              className="block w-4/5 mx-auto p-4 mt-4 rounded-xl bg-orange-400 text-white active:bg-yellow-100 active:text-orange-400 font-semibold"
            >
              Generate New Number
            </button>
          )}
        </div>
        {results.length > 0 && (
          <div className="my-4 grid grid-cols-5 gap-2">
            {results.map((res) => (
              <div
                key={res}
                className="p-3 bg-orange-400 text-white font-semibold text-center rounded-md"
              >
                {res}
              </div>
            ))}
          </div>
        )}
        {results.length === 10 && (
          <div>
            {" "}
            <button
              onClick={() => {
                setDisplayNum(getRndInteger(1, 10));
                setResults([]);
              }}
              className="block w-4/5 mx-auto p-4 mt-4 rounded-xl bg-orange-400 text-white active:bg-yellow-100 active:text-orange-400 font-semibold"
            >
              Reset
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RNG;
