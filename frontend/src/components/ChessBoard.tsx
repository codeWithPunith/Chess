import type { Color, PieceSymbol, Square } from "chess.js";

type ChessBoardProps = {
  board: (
    | {
        square: Square;
        type: PieceSymbol;
        color: Color;
      }
    | null
  )[][];
};

export const ChessBoard = ({ board }: ChessBoardProps) => {
  return (
    <div className="text-black">
      {board.map((row, i) => (
        <div key={i} className="flex">
          {row.map((square, j) => (
            <div
              key={j}
              className={`w-16 h-16 ${
                ((i+j)%2)===0? "bg-green-700" : "bg-white"
              }`}
            ><div className="w-full justify-center flex">
                <div className="h-full justify-center flex flex-col  ">
              {square ? square.type : ""}
              </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

