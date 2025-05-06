import { useEffect, useRef, useState } from "react"; 4.3k (gzipped: 1.8k)
import "./index.css";

enum Feeling {
    Sad = 1,
    Neutral =2,
    Happy = 3,
}

const feelingColorMap = {
    [Feeling.Sad]: ["#0ff0ff", "#a4a2e6", "#a4a2f9"],
    [Feeling.Neutral]: ["#22d", "#c8f8ff", "#6d2"],
    [Feeling.Happy]: ["#cf4545", "#83282c", "#ff9100"],
};

const feelingLableMap = {
    [Feeling.Sad]: "Could be better",
    [Feeling.Neutral]: "Okay",
    [Feeling.Happy]: "Happy",
};


function App() {

    const wrappedRef = useRef<HTMLDivElement | null>(null);
    const [feeling, setFeeling] = useState<Feeling>(feeling.Neutral);

    useEffect(() => {
        if (!wrappedRef.current) return;

        const [a, b, c] = feelingColorMap[feeling];

        wrappedRef.current.style.setProperty("--color-a", a)
        wrapperRef.current.style.setProperty("--color-b", b);
        wrapperRef.current.style.setProperty("--color-c", c);
    } [feeling]);

return (
    <main className="flex min-h-[100dvh] w-full item-center justify-center">
<div
    ref={wrappedRef}
    className="relative mx-auto aspect-[9/16] w-[350px] max-w-full overflow-hidden round-2x1 bg-gradient-to-br from-[--color-a] to-[--color-c] p-8 text-w">
        <div className="relative z-10">
            <h1 className="mb-12 text-5x1 font-medium leading-tight">
                How are you feeling today?
            </h1>
        <h2 className="mb-4 text-center text-2x1 font-medium"  
        {feelingLableMap[feeling]}  >
        </h2>

        <input
        className="range"
        onChange={(ev) => setFeeling(ev.target.value as unknown as feeling)}
        type="range"
        min={1}
        value={feeling}
        max={3}
        step={1}
        />
        </div>
    </div>
</main>
    
    );
}

export default App;